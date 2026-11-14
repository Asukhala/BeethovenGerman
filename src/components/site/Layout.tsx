import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { ADDRESS, PHONE, TAGLINE, TEL_URL, WHATSAPP_URL } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About Us" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-2 border-gold bg-forest text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <img
            src="/logo-circle.png"
            alt="BEETHOVENS logo"
            className="h-14 w-14 md:h-16 md:w-16 rounded-full shrink-0 drop-shadow-md object-contain"
          />
          <div className="min-w-0">
            <div className="truncate font-display text-xl md:text-2xl font-bold tracking-wider text-gold">
              BEETHOVENS
            </div>
            <div className="truncate font-sanskrit text-xs md:text-sm text-gold/90">{TAGLINE}</div>
          </div>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-semibold uppercase tracking-wide hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="shrink-0 md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t border-gold/40 px-4 pb-3 md:hidden">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-2 font-semibold uppercase tracking-wide"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t-4 border-gold bg-forest text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div className="flex items-start gap-3">
          <img
            src="/logo-circle.png"
            alt="BEETHOVENS logo"
            className="h-20 w-20 md:h-24 md:w-24 rounded-full shrink-0 drop-shadow-xl object-contain"
            loading="lazy"
          />
          <div>
            <div className="font-display text-xl font-bold text-gold">BEETHOVENS</div>
            <p className="font-sanskrit text-sm">{TAGLINE}</p>
            <p className="mt-1 text-sm opacity-80">Learn German. Build Your Future.</p>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-gold">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <h4 className="mb-2 text-gold">Visit Us</h4>
          <p className="flex gap-2">
            <MapPin className="h-4 w-4 shrink-0" />
            {ADDRESS}
          </p>
          <a href={TEL_URL} className="flex gap-2 hover:text-gold">
            <Phone className="h-4 w-4 shrink-0" />
            {PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex gap-2 hover:text-gold"
          >
            <MessageCircle className="h-4 w-4 shrink-0" />
            WhatsApp us
          </a>
        </div>
      </div>
      <div className="border-t border-gold/30 py-3 text-center text-xs opacity-70">
        © {new Date().getFullYear()} BEETHOVENS German Institute, Rohtak · Estd. 2026
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-royal transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}

export function SectionTitle({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {kicker && (
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-secondary">
          {kicker}
        </div>
      )}
      <h2 className="text-3xl font-bold text-primary md:text-4xl">{title}</h2>
      <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gold-sheen" />
      {children && <p className="mt-4 text-muted-foreground">{children}</p>}
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-maroon px-4 py-14 text-center text-secondary-foreground">
      <h1 className="text-3xl font-bold text-gold md:text-5xl">{title}</h1>
      <p className="mx-auto mt-3 max-w-2xl opacity-90">{subtitle}</p>
    </section>
  );
}
