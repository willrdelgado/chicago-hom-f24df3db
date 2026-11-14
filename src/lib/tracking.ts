// Form tracking helper — wires lead forms to the CRM tracking endpoint.
// trackingId / locationId / projectId come from the form_tracking integration.

export const TRACKING = {
  trackingId: "tk_4d9304a406ca4ebda42a9c71918ebce1",
  locationId: "MdAC813PwbYuunY8e36q",
  projectId: "1794668445398164664",
};

// Custom field IDs returned by register_custom_field
export const CUSTOM_FIELDS = {
  propertyAddress: "GfHlZ6vdGaoZ1gN3ar36",
  propertyType: "ByM4LfpGUGL0FrkDhvDt",
  bedrooms: "u4Y1Eme7ivXtPJYRrnDt",
  bathrooms: "KnnlWv1iDGR3pjI77SZg",
  propertyCondition: "SRgQgr2ZQfpknfKUfcwK",
  occupancy: "5zMQoyXGbT991GjSkaft",
  timeline: "bitmuHzUiN5H4yV0yoA3",
  askingPrice: "0bCUKdpFw1LQR0pvgViw",
  reasonForSelling: "UzUgPokUXggXaZZ3DW1o",
  agreeToTerms: "K3AMRMZvKcyjaZlKMBTW",
  contactReason: "v9YJsfyHZ0eAmEzfmTtg",
};

// trackingPayload.formData/formLabels are only for standard CRM field keys.
// Non-standard/custom fields must go through customFields/fileFields/imageDataFields
// using the id returned by register_custom_field. Labels stay human-readable.
type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField> | undefined;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField> | undefined;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField> | undefined;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {}); // Fire-and-forget — don't block form UX
};

// Reuse the published site's analytics session (set by /__vibe/analytics.js) so the
// submission joins the visit's page views; fall back to a fresh id when it is absent
// or unreadable (document.cookie throws in a sandboxed iframe).
const getTrackingSessionId = () => {
  try {
    const sid = document.cookie.match(/(?:^|;\s*)__vibe_sid=([0-9a-f-]{36})(?:;|$)/)?.[1];
    if (sid) return sid;
  } catch {}
  return crypto.randomUUID();
};

export type TrackingInput = {
  formId: string;
  formName: string;
  formData: Record<StandardTrackingFieldKey, unknown>;
  formLabels?: Record<StandardTrackingFieldKey, string>;
  customFields?: Record<RegisteredCustomFieldId, TrackingCustomField> | undefined;
};

export function trackFormSubmission(input: TrackingInput) {
  const trackingPayload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId: input.formId,
    formData: input.formData,
    formLabels: input.formLabels ?? {},
    url: typeof window !== "undefined" ? window.location.href : "",
    title: typeof document !== "undefined" ? document.title : "",
    path: typeof window !== "undefined" ? window.location.pathname : "",
    userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    trackingId: TRACKING.trackingId,
    locationId: TRACKING.locationId,
    projectId: TRACKING.projectId,
    sessionId: getTrackingSessionId(),
    properties: {
      deviceType:
        typeof navigator !== "undefined" && /Mobile|Android|iPhone/i.test(navigator.userAgent)
          ? "mobile"
          : "desktop",
      source: "ai_studio",
      projectId: TRACKING.projectId,
      formName: input.formName,
    },
  };

  postTrackingEvent(trackingPayload, { customFields: input.customFields });
}
