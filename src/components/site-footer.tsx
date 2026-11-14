import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-gradient text-primary-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold">{SITE.name}</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80">
            We are a Chicago, IL real estate investment company that provides solutions to help
            homeowners sell their house fast. We are investors with a problem-solving mindset who
            can buy your house fast with a fair all-cash offer.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" style={{ color: "var(--gold)" }} />
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" style={{ color: "var(--gold)" }} />
              {SITE.email}
            </a>
            <p className="flex items-start gap-2 text-primary-foreground/90">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--gold)" }} />
              {SITE.address}
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/70">
            Pages
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-primary-foreground/85 hover:text-primary-foreground">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/reviews"
                className="text-primary-foreground/85 hover:text-primary-foreground"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-primary-foreground/85 hover:text-primary-foreground"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/frequently-asked-questions"
                className="text-primary-foreground/85 hover:text-primary-foreground"
              >
                FAQ's
              </Link>
            </li>
            <li>
              <Link
                to="/get-an-offer-now"
                className="text-primary-foreground/85 hover:text-primary-foreground"
              >
                Get An Offer
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/70">
            Terms
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link
                to="/privacy"
                className="text-primary-foreground/85 hover:text-primary-foreground"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="text-primary-foreground/85 hover:text-primary-foreground"
              >
                Terms Of Service
              </Link>
            </li>
          </ul>
          <Link
            to="/get-an-offer-now"
            className="mt-6 inline-block rounded-lg bg-gold-gradient px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-gold"
          >
            Get My Cash Offer
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page py-6">
          <p className="text-xs leading-relaxed text-primary-foreground/60">
            *DISCLAIMER: The principle of {SITE.name} is a licensed Real Estate Broker located in
            Chicago, IL, and abides by all applicable Equal Housing Opportunity laws. All material
            presented herein is intended for informational purposes only, is compiled from sources
            deemed reliable, but is subject to errors, omissions, and changes without notice. This
            is not intended to solicit property already listed. Nothing herein shall be construed as
            legal, accounting, or other professional advice outside the realm of Real Estate
            Brokerage.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/70">
            Copyright © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
