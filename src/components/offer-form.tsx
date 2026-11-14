import { useState } from "react";
import { CheckCircle2, Loader2, Home, DollarSign, Calendar, Wrench } from "lucide-react";
import { trackFormSubmission, CUSTOM_FIELDS } from "@/lib/tracking";

type Props = {
  variant?: "hero" | "full";
};

const PROPERTY_TYPES = [
  "Single Family",
  "Townhouse",
  "Condo",
  "Multi-Family",
  "Apartment",
  "Land",
  "Other",
];
const BEDS = ["1", "2", "3", "4", "5+"];
const BATHS = ["1", "2", "3", "4+"];
const CONDITIONS = [
  "Move-in ready",
  "Minor repairs needed",
  "Major repairs needed",
  "Tear-down / gutted",
  "Damaged / distressed",
];
const OCCUPANCY = ["Owner occupied", "Tenant occupied", "Vacant"];
const TIMELINES = ["ASAP", "1-2 weeks", "1-3 months", "3+ months", "Just exploring"];

export function OfferForm({ variant = "hero" }: Props) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [condition, setCondition] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [timeline, setTimeline] = useState("");
  const [askingPrice, setAskingPrice] = useState("");
  const [reason, setReason] = useState("");
  const [agree, setAgree] = useState(false);

  const totalSteps = variant === "full" ? 3 : 1;

  const canNext = () => {
    if (step === 1) return address.trim() && phone.trim() && email.trim() && agree;
    if (step === 2) return propertyType && beds && baths && condition;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canNext()) return;
    if (step < totalSteps) {
      setStep((s) => s + 1);
      return;
    }
    setSubmitting(true);
    try {
      trackFormSubmission({
        formId: "cash-offer-form",
        formName: "Cash Offer Request",
        formData: {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
        },
        formLabels: {
          first_name: "First Name",
          last_name: "Last Name",
          email: "Email",
          phone: "Phone",
        },
        customFields: {
          [CUSTOM_FIELDS.propertyAddress]: { value: address, label: "Property Address" },
          [CUSTOM_FIELDS.propertyType]: { value: propertyType, label: "Property Type" },
          [CUSTOM_FIELDS.bedrooms]: { value: beds, label: "Bedrooms" },
          [CUSTOM_FIELDS.bathrooms]: { value: baths, label: "Bathrooms" },
          [CUSTOM_FIELDS.propertyCondition]: { value: condition, label: "Property Condition" },
          [CUSTOM_FIELDS.occupancy]: { value: occupancy, label: "Occupancy Status" },
          [CUSTOM_FIELDS.timeline]: { value: timeline, label: "Timeline to Sell" },
          [CUSTOM_FIELDS.askingPrice]: { value: askingPrice, label: "Asking Price" },
          [CUSTOM_FIELDS.reasonForSelling]: { value: reason, label: "Reason for Selling" },
          [CUSTOM_FIELDS.agreeToTerms]: {
            value: agree ? "I agree to terms & conditions and to receive text messages" : "",
            label: "Agree to Terms",
          },
        },
      });
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8 text-center shadow-brand">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient">
          <CheckCircle2 className="h-9 w-9 text-secondary-foreground" />
        </div>
        <h3 className="mt-5 text-2xl font-bold text-foreground">Your request is in!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for submitting your property details. A friendly home-buying specialist will reach
          out shortly with your no-obligation cash offer.
        </p>
        <button
          onClick={() => {
            setDone(false);
            setStep(1);
            setAddress("");
            setPhone("");
            setEmail("");
            setFirstName("");
            setLastName("");
            setPropertyType("");
            setBeds("");
            setBaths("");
            setCondition("");
            setOccupancy("");
            setTimeline("");
            setAskingPrice("");
            setReason("");
            setAgree(false);
          }}
          className="mt-6 rounded-lg border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
        >
          Submit another property
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-brand sm:p-8"
    >
      {totalSteps > 1 && (
        <div className="mb-6 flex items-center gap-2">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex flex-1 items-center gap-2">
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                style={{
                  backgroundColor: step >= n ? "var(--brand)" : "var(--muted)",
                  color: step >= n ? "var(--primary-foreground)" : "var(--muted-foreground)",
                }}
              >
                {n}
              </div>
              {n < 3 && (
                <div
                  className="h-0.5 flex-1"
                  style={{ backgroundColor: step > n ? "var(--brand)" : "var(--muted)" }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground">
              Get Your No-Obligation All-Cash Offer
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Enter your property details below to get started.
            </p>
          </div>
          <Field label="Enter Your Property Address" required>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 W Madison St, Chicago, IL"
              className={inputCls}
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First Name">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                className={inputCls}
              />
            </Field>
            <Field label="Last Name">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                className={inputCls}
              />
            </Field>
          </div>
          <Field label="Enter Your Mobile Number for Offer Details" required>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(312) 555-0100"
              className={inputCls}
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className={inputCls}
            />
          </Field>
          <label className="flex items-start gap-3 text-xs text-muted-foreground">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-input accent-[var(--brand)]"
            />
            <span>
              I agree to the terms &amp; conditions provided by the company. By providing my phone
              number, I agree to receive text messages from the business.
            </span>
          </label>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">Tell us about the property</h3>
          <Field label="Property Type">
            <Select
              value={propertyType}
              onChange={setPropertyType}
              options={PROPERTY_TYPES}
              placeholder="Select type"
            />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Bedrooms">
              <Select value={beds} onChange={setBeds} options={BEDS} placeholder="Select" />
            </Field>
            <Field label="Bathrooms">
              <Select value={baths} onChange={setBaths} options={BATHS} placeholder="Select" />
            </Field>
          </div>
          <Field label="Property Condition">
            <Select
              value={condition}
              onChange={setCondition}
              options={CONDITIONS}
              placeholder="Select condition"
            />
          </Field>
          <Field label="Occupancy Status">
            <Select
              value={occupancy}
              onChange={setOccupancy}
              options={OCCUPANCY}
              placeholder="Select occupancy"
            />
          </Field>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground">Almost there — a few last details</h3>
          <Field label="Timeline to Sell">
            <Select
              value={timeline}
              onChange={setTimeline}
              options={TIMELINES}
              placeholder="Select timeline"
            />
          </Field>
          <Field label="Asking Price (optional)">
            <input
              value={askingPrice}
              onChange={(e) => setAskingPrice(e.target.value)}
              placeholder="$ e.g. 250000"
              className={inputCls}
            />
          </Field>
          <Field label="Reason for Selling (optional)">
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={3}
              placeholder="Tell us why you're selling..."
              className={inputCls}
            />
          </Field>
        </div>
      )}

      <div className="mt-6 flex gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="rounded-lg border border-input bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent"
          >
            Back
          </button>
        )}
        <button
          type="submit"
          disabled={!canNext() || submitting}
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold-gradient px-5 py-3 text-sm font-bold text-secondary-foreground shadow-gold transition-transform hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {step < totalSteps ? "Continue" : "Get My Cash Offer Now!"}
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-foreground">
        {label} {required && <span style={{ color: "var(--gold-dark)" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className={inputCls}>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export function OfferFormBadges() {
  const items = [
    { icon: Home, text: "No Commissions" },
    { icon: DollarSign, text: "We Pay Closing Costs" },
    { icon: Wrench, text: "Buy As-Is" },
    { icon: Calendar, text: "Close In Weeks" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((i) => (
        <div
          key={i.text}
          className="flex items-center gap-2 rounded-lg bg-surface-muted px-3 py-2.5 text-xs font-semibold text-ink"
        >
          <i.icon className="h-4 w-4 shrink-0" style={{ color: "var(--brand)" }} />
          {i.text}
        </div>
      ))}
    </div>
  );
}
