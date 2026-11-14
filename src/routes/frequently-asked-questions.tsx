import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SITE, FAQS } from "@/lib/site";

export const Route = createFileRoute("/frequently-asked-questions")({
  head: () => ({
    meta: [
      { title: `FAQ's | ${SITE.name}` },
      {
        name: "description",
        content:
          "Answers to common questions about selling your Chicago house for cash — costs, obligations, condition, timeline, and how our cash offer process works.",
      },
      { property: "og:title", content: `FAQ's | ${SITE.name}` },
      {
        property: "og:description",
        content: "Answers to common questions about selling your Chicago house for cash.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <section className="bg-brand-gradient py-16 text-center text-primary-foreground">
        <div className="container-page">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Everything you need to know about selling your Chicago house for cash.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page mx-auto max-w-3xl space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-foreground">
                {f.q}
                <span className="ml-4 shrink-0 text-2xl font-light text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold text-foreground">
            Still Have Questions? Get In Touch!
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Call us at {SITE.phone} or get your no-obligation cash offer started today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={SITE.phoneHref}
              className="rounded-lg bg-brand-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-brand"
            >
              Call {SITE.phone}
            </a>
            <Link
              to="/get-an-offer-now"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-6 py-3 text-sm font-bold text-secondary-foreground shadow-gold"
            >
              Get My Cash Offer <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
