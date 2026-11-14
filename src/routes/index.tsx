import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BookOpen, Mic, ClipboardCheck, Users, Plane, Briefcase } from "lucide-react";
import { SectionTitle } from "@/components/site/Layout";
import { TAGLINE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BEETHOVENS – German Classes A1 to B2 in Rohtak | Goethe & telc Prep" },
      {
        name: "description",
        content:
          "Learn German in Rohtak with BEETHOVENS. A1–B2 courses, Goethe & telc exam prep, small batches of 10-15 students, visa and career guidance.",
      },
      { property: "og:title", content: "BEETHOVENS – Learn German. Build Your Future." },
      {
        property: "og:description",
        content: "A1–B2 German, Goethe & telc preparation in small batches in Rohtak, Haryana.",
      },
    ],
  }),
  component: Index,
});

const skills = [
  {
    icon: BookOpen,
    t: "Grammar",
    d: "Structured, level-by-level grammar that makes German click.",
  },
  { icon: Mic, t: "Speaking", d: "Daily conversation practice so you speak confidently." },
  {
    icon: ClipboardCheck,
    t: "Exam Skills",
    d: "Mock tests and strategies for Goethe & telc modules.",
  },
];
const levels = [
  { l: "A1", n: "Beginner" },
  { l: "A2", n: "Elementary" },
  { l: "B1", n: "Intermediate" },
  { l: "B2", n: "Upper Intermediate" },
];
const rooms = [
  {
    img: "/campus/office.jpg",
    t: "Office Room",
    sub: "Admissions & Counselling",
  },
  {
    img: "/campus/teaching.jpg",
    t: "Interactive Teaching Room",
    sub: "Batches of 10-15 Learners",
  },
  {
    img: "/campus/gallery.jpg",
    t: "Learning Gallery",
    sub: "Sunlit Art Corridor",
  },
  {
    img: "/campus/kitchen.jpg",
    t: "Student Pantry",
    sub: "Kaffeepause & Break Zone",
  },
];

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 35);
    } else if (!isDeleting && displayed.length === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 4000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length - 2));
      }, 15);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, text, mounted]);

  if (!mounted) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {displayed}
      <span className="ml-0.5 inline-block w-1.5 animate-pulse bg-gold text-gold font-bold">|</span>
    </span>
  );
}

function Index() {
  const typewriterContent =
    "A1 to B2 German training with Goethe Institute exam in small batches of just 10-15 students right there in Rohtak.";

  return (
    <>
      {/* High-Resolution Hero with Authentic Realistic Photograph */}
      <section className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[780px] flex items-center overflow-hidden">
        {/* Realistic natural photograph of Berlin Cathedral, River Spree and stone bridge */}
        <img
          src="/hero-bg.jpg"
          alt="Natural photograph of Berlin Cathedral and River Spree with stone bridge"
          className="absolute inset-0 h-full w-full object-cover object-[center_65%]"
          loading="eager"
        />

        {/* Ambient subtle bottom gradient to transition into next section */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />

        {/* Official Institute Seal in Top-Right Corner on the building/sky */}
        <div className="absolute top-6 right-4 sm:right-8 md:top-10 md:right-12 z-20">
          <img
            src="/logo-circle.png"
            alt="BEETHOVENS Institute Seal"
            className="h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44 rounded-full drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Hero Content: NO bounding box so the entire photograph stays visible */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-12 md:py-16 w-full">
          <div className="max-w-2xl text-left">
            {/* Sanskrit Tagline with Individual Green Background */}
            <div>
              <span className="inline-block rounded-md bg-forest px-4 py-1.5 text-xs sm:text-sm font-bold text-gold font-sanskrit shadow-lg border border-gold/40">
                {TAGLINE}
              </span>
            </div>

            {/* Main Headline: Individual Green Background for each line */}
            <h1 className="mt-3 flex flex-col items-start gap-2 font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
              <span className="inline-block rounded-lg bg-forest px-4 py-1.5 text-white shadow-xl border border-gold/40">
                Learn German.
              </span>
              <span className="inline-block rounded-lg bg-forest px-4 py-1.5 text-gold shadow-xl border border-gold/40">
                Build a Future.
              </span>
            </h1>

            {/* Fast Typewriter Running Text with fitted high-contrast Green background */}
            <div className="mt-4 max-w-2xl">
              <div className="inline-block rounded-lg bg-forest/95 px-4 py-2.5 text-sm sm:text-base md:text-lg font-semibold text-slate-100 shadow-xl border border-gold/40 backdrop-blur-sm leading-relaxed">
                <TypewriterText text={typewriterContent} />
              </div>
            </div>

            {/* Options in Vertical Style with Individual Golden Backgrounds */}
            <div className="mt-6 flex flex-col items-start gap-2.5">
              <span className="inline-flex items-center rounded-md bg-gold-sheen px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base font-bold text-gold-foreground shadow-royal border border-amber-300 transition-transform hover:translate-x-1">
                Goethe & Telc Exam Preparation
              </span>
              <span className="inline-flex items-center rounded-md bg-gold-sheen px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base font-bold text-gold-foreground shadow-royal border border-amber-300 transition-transform hover:translate-x-1">
                Max 10-15 Students
              </span>
              <span className="inline-flex items-center rounded-md bg-gold-sheen px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base font-bold text-gold-foreground shadow-royal border border-amber-300 transition-transform hover:translate-x-1">
                Visa Guidance
              </span>
              <span className="inline-flex items-center rounded-md bg-gold-sheen px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm md:text-base font-bold text-gold-foreground shadow-royal border border-amber-300 transition-transform hover:translate-x-1">
                Support & Placement
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Core Skills" title="Speak confidently, work globally" />
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.t} className="gold-frame rounded-lg bg-card p-6 text-center">
              <s.icon className="mx-auto h-10 w-10 text-secondary" />
              <h3 className="mt-3 text-xl font-bold text-primary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-maroon px-4 py-16 text-secondary-foreground">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gold">
            A1 to B2 — Your Path to Germany
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {levels.map((l) => (
              <Link
                to="/courses"
                key={l.l}
                className="rounded-lg border border-gold/60 p-6 text-center hover:bg-secondary-foreground/10"
              >
                <div className="font-display text-4xl font-black text-gold">{l.l}</div>
                <div className="mt-1 text-sm">{l.n}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
        {[
          {
            icon: Users,
            t: "Max 10-15 Students",
            d: "Small batches mean every student gets personal attention and speaking time.",
          },
          {
            icon: Plane,
            t: "Visa Assistance",
            d: "Guidance on documents and steps for study, work and Ausbildung visas.",
          },
          {
            icon: Briefcase,
            t: "Career Opportunities",
            d: "Advice on jobs, nursing, Ausbildung and university pathways in Germany.",
          },
        ].map((f) => (
          <div key={f.t} className="flex gap-4 rounded-lg border bg-card p-5">
            <f.icon className="h-8 w-8 shrink-0 text-gold" />
            <div>
              <h3 className="font-bold text-primary">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <SectionTitle kicker="Our Centre" title="A Campus Built for Learning" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {rooms.map((r) => (
            <Link
              to="/about"
              hash="campus-tour"
              key={r.t}
              className="group overflow-hidden rounded-lg border-2 border-gold bg-card transition-all hover:-translate-y-1 hover:shadow-royal"
            >
              <figure>
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={r.img}
                    alt={r.t}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-3 text-center">
                  <div className="text-sm font-bold text-primary group-hover:text-secondary">
                    {r.t}
                  </div>
                  <div className="text-xs text-muted-foreground">{r.sub}</div>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/about"
            hash="campus-tour"
            className="inline-flex items-center gap-2 rounded-md bg-gold-sheen px-8 py-3.5 font-bold text-gold-foreground shadow-royal transition-all hover:scale-105"
          >
            Take the full campus tour (all 7 photos) →
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-4xl px-4">
        <div className="rounded-xl bg-forest p-8 text-center text-primary-foreground shadow-royal">
          <h2 className="text-2xl font-bold text-gold md:text-3xl">New batches starting soon</h2>
          <p className="mt-2 opacity-90">Seats are limited to 15 per batch. Reserve yours today.</p>
          <Link
            to="/contact"
            hash="enquiry-form"
            className="mt-5 inline-block rounded-md bg-gold-sheen px-6 py-3 font-bold text-gold-foreground"
          >
            Enquire Now
          </Link>
        </div>
      </section>
    </>
  );
}
