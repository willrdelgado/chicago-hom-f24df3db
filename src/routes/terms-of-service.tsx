import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: `Terms Of Service | ${SITE.name}` },
      {
        name: "description",
        content: `Terms of service for ${SITE.name} — the terms that govern your use of our website and cash-offer request process.`,
      },
      { property: "og:title", content: `Terms Of Service | ${SITE.name}` },
      { property: "og:description", content: `Terms of service for ${SITE.name}.` },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="py-16">
      <div className="container-page mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-foreground">Terms Of Service</h1>
        <div className="mt-6 max-w-none text-muted-foreground">
          <p className="text-sm">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-4 leading-relaxed">
            By accessing or using {SITE.name}, you agree to these Terms of Service. If you do not
            agree, please do not use the site.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">Use of the Site</h2>
          <p className="mt-3 leading-relaxed">
            This site is provided to help Chicago homeowners request a no-obligation cash offer on
            their property. You agree to provide accurate, truthful information when submitting a
            request.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">Offers</h2>
          <p className="mt-3 leading-relaxed">
            Any cash offer you receive is non-binding and carries no obligation to sell. Offers are
            subject to verification of property details and condition. We reserve the right to
            withdraw or modify an offer at any time prior to a signed agreement.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">Communications</h2>
          <p className="mt-3 leading-relaxed">
            By submitting your phone number, you consent to receive calls and text messages from{" "}
            {SITE.name} regarding your property. Standard message and data rates may apply. Reply
            STOP to opt out.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">Disclaimer</h2>
          <p className="mt-3 leading-relaxed">
            The principle of {SITE.name} is a licensed Real Estate Broker located in Chicago, IL,
            and abides by all applicable Equal Housing Opportunity laws. All material is intended
            for informational purposes only and is subject to errors, omissions, and changes without
            notice. This is not intended to solicit property already listed.
          </p>
          <h2 className="mt-8 text-xl font-bold text-foreground">Contact</h2>
          <p className="mt-3 leading-relaxed">
            Questions about these terms? Contact us at {SITE.phone} or {SITE.email}.
          </p>
        </div>
      </div>
    </section>
  );
}
