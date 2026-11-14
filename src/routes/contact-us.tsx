import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { trackFormSubmission, CUSTOM_FIELDS } from "@/lib/tracking";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: `Contact Us | ${SITE.name}` },
      {
        name: "description",
        content:
          "Contact WeBuyChicagoHouses.com to sell your Chicago house fast for cash. Call (312) 757-7669 or send us a message — we're here to help.",
      },
      { property: "og:title", content: `Contact Us | ${SITE.name}` },
      {
        property: "og:description",
        content: "Contact WeBuyChicagoHouses.com to sell your Chicago house fast for cash.",
      },
    ],
  }),
  component: ContactPage,
});

const REASONS = [
  "Get a cash offer",
  "General question",
  "Schedule a call",
  "Property details",
  "Other",
];

function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !message) return;
    setSubmitting(true);
    try {
      trackFormSubmission({
        formId: "contact-form",
        formName: "Contact Form",
        formData: {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          calendar_notes: message,
        },
        formLabels: {
          first_name: "First Name",
          last_name: "Last Name",
          email: "Email",
          phone: "Phone",
          calendar_notes: "Message",
        },
        customFields: {
          [CUSTOM_FIELDS.contactReason]: { value: reason, label: "Contact Reason" },
        },
      });
      setDone(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="bg-brand-gradient py-16 text-center text-primary-foreground">
        <div className="container-page">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Have questions or ready to sell? We're here to help — reach out any time.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground">Get In Touch</h2>
            <p className="mt-3 text-muted-foreground">
              Still have questions? Reach out and a friendly home-buying specialist will get back to
              you right away.
            </p>
            <div className="mt-8 space-y-5">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-brand"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient">
                  <Phone className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone
                  </p>
                  <p className="text-lg font-bold text-foreground">{SITE.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-brand"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient">
                  <Mail className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email
                  </p>
                  <p className="text-lg font-bold text-foreground">{SITE.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient">
                  <MapPin className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Location
                  </p>
                  <p className="text-sm font-bold text-foreground">{SITE.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {done ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-brand">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient">
                  <CheckCircle2 className="h-9 w-9 text-secondary-foreground" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-foreground">Message sent!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thanks for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-card p-6 shadow-brand sm:p-8"
              >
                <h3 className="text-xl font-bold text-foreground">Send us a message</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-foreground">
                      First Name *
                    </label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={inputCls}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-foreground">
                      Last Name
                    </label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={inputCls}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputCls}
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-foreground">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputCls}
                      placeholder="(312) 555-0100"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-sm font-semibold text-foreground">
                    Reason for contact
                  </label>
                  <select
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className={inputCls}
                  >
                    <option value="">Select a reason</option>
                    {REASONS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <label className="mb-1.5 block text-sm font-semibold text-foreground">
                    Message *
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className={inputCls}
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting || !firstName || !email || !message}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-gold-gradient px-5 py-3 text-sm font-bold text-secondary-foreground shadow-gold disabled:opacity-60"
                >
                  {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring";
