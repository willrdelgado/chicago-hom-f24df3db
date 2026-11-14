import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { OfferForm } from "@/components/offer-form";
import { SITE, ASSETS } from "@/lib/site";

export const Route = createFileRoute("/get-an-offer-now")({
  head: () => ({
    meta: [
      { title: `Get Your Cash Offer | ${SITE.name}` },
      {
        name: "description",
        content:
          "Get a no-obligation, all-cash offer on your Chicago, IL house. Enter your property address and details — no fees, no commissions, no repairs required.",
      },
      { property: "og:title", content: `Get Your Cash Offer | ${SITE.name}` },
      {
        property: "og:description",
        content:
          "Get a no-obligation, all-cash offer on your Chicago, IL house. No fees, no commissions, no repairs.",
      },
      { property: "og:image", content: ASSETS.heroHouse },
      { name: "twitter:image", content: ASSETS.heroHouse },
    ],
  }),
  component: OfferPage,
});

function OfferPage() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="lg:sticky lg:top-28">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink">
            No Obligation · 100% Free
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            Get Your No-Obligation All-Cash Offer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Sell your Chicago, IL house without realtors, as-is, all-cash, and 100% free. Fill out
            the form and a home-buying specialist will reach out with a fair cash offer.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "No realtor commissions or fees",
              "We buy your house as-is — no repairs or cleaning",
              "We pay closing costs",
              "Close in weeks, not months",
              "Cash in hand within 24 hours of closing",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm font-semibold text-foreground"
              >
                <Star className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--gold)" }} />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
            <p className="text-sm text-muted-foreground">Prefer to talk first?</p>
            <a href={SITE.phoneHref} className="mt-1 block text-lg font-bold text-foreground">
              {SITE.phone}
            </a>
            <p className="text-sm text-muted-foreground">
              to speak with a friendly home-buying specialist.
            </p>
          </div>
        </div>
        <div>
          <OfferForm variant="full" />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            By submitting you agree to receive texts and calls about your property. No obligation to
            sell.
          </p>
        </div>
      </div>
    </section>
  );
}
