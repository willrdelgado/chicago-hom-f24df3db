import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { OfferForm, OfferFormBadges } from "@/components/offer-form";
import { SITE, ASSETS, STEPS, TESTIMONIALS, SITUATIONS, AGENT_VS_US, FAQS } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} | Sell Your Chicago House Fast For Cash` },
      {
        name: "description",
        content:
          "We buy houses in Chicago as-is for cash. No realtor commissions, no fees, no repairs. Get a fair, no-obligation cash offer on your Chicago, IL house today.",
      },
      { property: "og:title", content: `${SITE.name} | Sell Your Chicago House Fast For Cash` },
      {
        property: "og:description",
        content:
          "We buy houses in Chicago as-is for cash. No realtor commissions, no fees, no repairs. Get your no-obligation cash offer today.",
      },
      { property: "og:image", content: ASSETS.heroHouse },
      { name: "twitter:image", content: ASSETS.heroHouse },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <Testimonials />
      <SituationsSection />
      <ComparisonSection />
      <FaqPreview />
      <AboutSection />
      <FinalCta />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={ASSETS.heroHouse}
          alt="We buy Chicago houses"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>
      <div className="container-page relative grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Star className="h-3.5 w-3.5" style={{ color: "var(--gold)" }} />
            Chicago's Trusted Cash Home Buyer
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
            We Buy Houses In Chicago "As-Is" For CASH!
          </h1>
          <p className="mt-5 max-w-xl text-lg font-medium text-primary-foreground/90">
            We buy houses in any condition. No realtor commissions, no fees, no costly repairs &amp;
            no need to clean out the property.
          </p>
          <div className="mt-8">
            <OfferFormBadges />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 font-bold text-primary-foreground"
            >
              <Phone className="h-5 w-5" style={{ color: "var(--gold)" }} />
              Want to talk first? Call {SITE.phone}
            </a>
          </div>
        </div>
        <div className="lg:pl-8">
          <OfferForm variant="hero" />
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Need to sell your house fast?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Without agent commissions, costly repairs, and still want a fair offer? Sell your house
            in Chicago to us — 100% free.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-brand"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-lg font-bold text-primary-foreground">
                {s.n}
              </div>
              <img
                src={ASSETS[`step${s.n}` as keyof typeof ASSETS]}
                alt={s.title}
                className="mt-5 h-36 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Hear What Our Customers Have To Say
          </h2>
          <div className="mt-3 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" style={{ color: "var(--gold)" }} />
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={ASSETS.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <figcaption className="font-bold text-foreground">{t.name}</figcaption>
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
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                "{t.quote}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SituationsSection() {
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            When You Should Turn To {SITE.name}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We buy houses in any condition, any price range, any situation, anywhere. We've helped
            sellers in situations like these and more:
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SITUATIONS.map((s) => (
            <div
              key={s.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <img src={s.img} alt={s.title} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-sm font-bold leading-snug text-foreground">{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Why Selling To A Cash Buyer Is Better
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            When you sell to {SITE.name}, you'll save time and money — a simple, hassle-free process
            with no realtor fees or commissions.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-muted p-8">
            <h3 className="text-xl font-bold text-foreground">Sell Through an Agent</h3>
            <ul className="mt-6 space-y-3">
              {AGENT_VS_US.agent.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl border-2 bg-card p-8 shadow-brand"
            style={{ borderColor: "var(--brand)" }}
          >
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-foreground">Selling To {SITE.shortName}</h3>
              <span className="rounded-full bg-gold-gradient px-3 py-0.5 text-xs font-bold text-secondary-foreground">
                Better Option
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {AGENT_VS_US.us.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-semibold text-foreground"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0"
                    style={{ color: "var(--brand)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqPreview() {
  return (
    <section className="bg-surface py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.slice(0, 3).map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-foreground">
                  {f.q}
                  <span className="ml-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/frequently-asked-questions"
              className="inline-flex items-center gap-2 font-bold text-foreground hover:underline"
              style={{ color: "var(--brand)" }}
            >
              See all Frequently Asked Questions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src={ASSETS.aboutPhoto}
            alt="About WeBuyChicagoHouses"
            className="w-full rounded-2xl object-cover shadow-brand"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gold-gradient px-6 py-5 text-secondary-foreground shadow-gold sm:block">
            <p className="text-3xl font-extrabold">100%</p>
            <p className="text-xs font-semibold uppercase tracking-wide">Satisfied Sellers</p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">About {SITE.name}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We pride ourselves on our knowledge, transparency, and ability to help Chicago, IL
            homeowners handle properties they no longer wish to own. We believe the best deals are
            made when everyone walks away happy. We treat our homeowners with respect, honesty, and
            as if they were a member of our own family.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {SITE.name} is a real estate solutions company who will work with you to get the job
            done. Our mission is to help people sell quickly for a fair and honest price. We make
            the home selling process easy so you can deal with other things going on in your life!
          </p>
          <Link
            to="/get-an-offer-now"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-gradient px-6 py-3 text-sm font-bold text-primary-foreground shadow-brand"
          >
            Get My Cash Offer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-brand-gradient py-20 text-primary-foreground">
      <div className="container-page text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Don't Wait, See Your Cash Offer Now!
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
          Get your no-obligation, all-cash offer on your Chicago, IL house started today. It's free,
          fast, and 100% obligation-free.
        </p>
        <Link
          to="/get-an-offer-now"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold-gradient px-8 py-4 text-base font-bold text-secondary-foreground shadow-gold transition-transform hover:scale-[1.03]"
        >
          Yes, I Want My Cash Offer Now! <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
