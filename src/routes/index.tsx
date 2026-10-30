import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Mic, ClipboardCheck, Users, Plane, Briefcase, MessageCircle } from "lucide-react";
import poster from "@/assets/poster.jpg.asset.json";
import teaching from "@/assets/teaching.jpg";
import study from "@/assets/study.jpg";
import lounge from "@/assets/lounge.jpg";
import office from "@/assets/office.jpg";
import { SectionTitle } from "@/components/site/Layout";
import { TAGLINE, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BEETHOVENS – German Classes A1 to B2 in Rohtak | Goethe & telc Prep" },
      { name: "description", content: "Learn German in Rohtak with BEETHOVENS. A1–B2 courses, Goethe & telc exam prep, small batches of 8–9 students, visa and career guidance." },
      { property: "og:title", content: "BEETHOVENS – Learn German. Build Your Future." },
      { property: "og:description", content: "A1–B2 German, Goethe & telc preparation in small batches in Rohtak, Haryana." },
    ],
  }),
  component: Index,
});

const skills = [
  { icon: BookOpen, t: "Grammar", d: "Structured, level-by-level grammar that makes German click." },
  { icon: Mic, t: "Speaking", d: "Daily conversation practice so you speak confidently." },
  { icon: ClipboardCheck, t: "Exam Skills", d: "Mock tests and strategies for Goethe & telc modules." },
];
const levels = [
  { l: "A1", n: "Beginner" }, { l: "A2", n: "Elementary" }, { l: "B1", n: "Intermediate" }, { l: "B2", n: "Upper Intermediate" },
];
const rooms = [
  { img: office, t: "Office Room" }, { img: teaching, t: "Interactive Teaching Room" },
  { img: study, t: "Quiet Self-Study Room" }, { img: lounge, t: "Student Lounge & Mini Kitchen" },
];

function Index() {
  return (
    <>
      <section className="bg-forest px-4 pb-12 pt-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <img src={poster.url} alt="BEETHOVENS A1 to B2 Goethe & telc Preparation poster" className="w-full rounded-lg border-4 border-gold shadow-royal" width={886} height={1180} />
          <div className="text-center text-primary-foreground md:text-left">
            <p className="font-sanskrit text-xl text-gold">{TAGLINE}</p>
            <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Learn German.<br />Build Your Future.</h1>
            <p className="mt-4 opacity-90">A1 to B2 German training with Goethe & telc exam preparation — in small batches of just 8–9 students, right here in Rohtak.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:justify-start">
              <Link to="/contact" className="rounded-md bg-gold-sheen px-6 py-3 font-bold text-gold-foreground shadow-royal">Book Free Demo</Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-gold px-6 py-3 font-bold text-gold">
                <MessageCircle className="h-5 w-5" /> WhatsApp Us
              </a>
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
          <h2 className="text-center text-3xl font-bold text-gold">A1 to B2 — Your Path to Germany</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {levels.map((l) => (
              <Link to="/courses" key={l.l} className="rounded-lg border border-gold/60 p-6 text-center hover:bg-secondary-foreground/10">
                <div className="font-display text-4xl font-black text-gold">{l.l}</div>
                <div className="mt-1 text-sm">{l.n}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3">
        {[
          { icon: Users, t: "Max 8–9 Students", d: "Small batches mean every student gets personal attention and speaking time." },
          { icon: Plane, t: "Visa Assistance", d: "Guidance on documents and steps for study, work and Ausbildung visas." },
          { icon: Briefcase, t: "Career Opportunities", d: "Advice on jobs, nursing, Ausbildung and university pathways in Germany." },
        ].map((f) => (
          <div key={f.t} className="flex gap-4 rounded-lg border bg-card p-5">
            <f.icon className="h-8 w-8 shrink-0 text-gold" />
            <div><h3 className="font-bold text-primary">{f.t}</h3><p className="mt-1 text-sm text-muted-foreground">{f.d}</p></div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-8">
        <SectionTitle kicker="Our Centre" title="A Campus Built for Learning" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {rooms.map((r) => (
            <figure key={r.t} className="overflow-hidden rounded-lg border-2 border-gold bg-card">
              <img src={r.img} alt={r.t} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-2 text-center text-sm font-semibold text-primary">{r.t}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-6 text-center"><Link to="/about" className="font-bold text-secondary underline">Take the full tour →</Link></div>
      </section>

      <section className="mx-auto mt-10 max-w-4xl px-4">
        <div className="rounded-xl bg-forest p-8 text-center text-primary-foreground shadow-royal">
          <h2 className="text-2xl font-bold text-gold md:text-3xl">New batches starting soon</h2>
          <p className="mt-2 opacity-90">Seats are limited to 9 per batch. Reserve yours today.</p>
          <Link to="/contact" className="mt-5 inline-block rounded-md bg-gold-sheen px-6 py-3 font-bold text-gold-foreground">Enquire Now</Link>
        </div>
      </section>
    </>
  );
}
