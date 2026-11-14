import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Home } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label={SITE.name}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground shadow-brand">
            <Home className="h-6 w-6" style={{ color: "var(--gold)" }} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              WeBuy<span style={{ color: "var(--brand)" }}>Chicago</span>Houses
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Cash For Your Home
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
                style={active ? { color: "var(--brand)" } : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-bold text-foreground"
          >
            <Phone className="h-4 w-4" style={{ color: "var(--gold)" }} />
            {SITE.phone}
          </a>
          <Link
            to="/get-an-offer-now"
            className="rounded-lg bg-gold-gradient px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-gold transition-transform hover:scale-[1.03]"
          >
            Get An Offer Now
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 px-3 py-3 text-sm font-bold text-foreground"
            >
              <Phone className="h-4 w-4" style={{ color: "var(--gold)" }} />
              {SITE.phone}
            </a>
            <Link
              to="/get-an-offer-now"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-gold-gradient px-5 py-3 text-center text-sm font-bold text-secondary-foreground"
            >
              Get An Offer Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
