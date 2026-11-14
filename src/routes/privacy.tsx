import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${SITE.name}` },
      {
        name: "description",
        content: `Privacy policy for ${SITE.name} — how we collect, use, and protect your information when you request a cash offer or contact us.`,
      },
      { property: "og:title", content: `Privacy Policy | ${SITE.name}` },
      { property: "og:description", content: `Privacy policy for ${SITE.name}.` },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="py-16">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-foreground">Privacy Policy</h1>
        <div className="prose mt-6 max-w-none text-muted-foreground">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4 leading-relaxed">
            {SITE.name} ("we", "us", "our") respects your privacy. This policy explains what
            information we collect when you use our website or submit a cash-offer request, and how
            we use and protect it.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">Information We Collect</h2>
          <p className="mt-3 leading-relaxed">
            When you submit a form, we collect the information you provide, including your name,
            email address, phone number, property address, and property details. We may also collect
            usage data such as pages visited and device type.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">How We Use Your Information</h2>
          <p className="mt-3 leading-relaxed">
            We use your information to prepare and deliver a cash offer on your property, to contact
            you about your request, and to improve our services. By providing your phone number, you
            agree to receive text messages and calls from us regarding your property.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">Sharing Your Information</h2>
          <p className="mt-3 leading-relaxed">
            We do not sell your personal information. We may share it with service providers who
            help us operate our business, or as required by law.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">Your Choices</h2>
          <p className="mt-3 leading-relaxed">
            You may opt out of marketing communications at any time by replying STOP to any text
            message or contacting us at {SITE.email}.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">Contact Us</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy? Contact us at {SITE.phone} or {SITE.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
