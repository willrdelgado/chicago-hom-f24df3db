import { createFileRoute } from "@tanstack/react-router";
import { Star, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE, ASSETS, TESTIMONIALS } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: `Reviews | ${SITE.name}` },
      {
        name: "description",
        content:
          "Read real reviews from Chicago homeowners who sold their house fast for cash to WeBuyChicagoHouses.com. See why sellers trust our fair, hassle-free process.",
      },
      { property: "og:title", content: `Reviews | ${SITE.name}` },
      {
        property: "og:description",
        content: "Read real reviews from Chicago homeowners who sold their house fast for cash.",
      },
      { property: "og:image", content: ASSETS.aboutPhoto },
      { name: "twitter:image", content: ASSETS.aboutPhoto },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="bg-brand-gradient py-16 text-center text-primary-foreground">
        <div className="container-page">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Customer Reviews</h1>
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" style={{ color: "var(--gold)" }} />
            ))}
          </div>
          <p className="mt-3 text-primary-foreground/85">
            Trusted by Chicago homeowners to sell fast and fair.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="h-8 w-8" style={{ color: "var(--gold)" }} />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={ASSETS.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-current"
                        style={{ color: "var(--gold)" }}
                      />
                    ))}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-extrabold text-foreground">
            Ready to join our happy sellers?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Get your no-obligation cash offer today — it's free, fast, and stress-free.
          </p>
          <Link
            to="/get-an-offer-now"
            className="mt-8 inline-flex rounded-lg bg-gold-gradient px-8 py-4 text-base font-bold text-secondary-foreground shadow-gold"
          >
            Get My Cash Offer Now
          </Link>
        </div>
      </section>
    </>
  );
}
