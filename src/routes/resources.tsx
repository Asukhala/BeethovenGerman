import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Headphones, BookOpen, PenLine, Mic } from "lucide-react";
import { PageHero, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Goethe & telc Exam Guide and Sample Papers | BEETHOVENS" },
      {
        name: "description",
        content:
          "Goethe-Zertifikat and telc exam format, scoring, exam-day tips and official sample papers for A1–B2.",
      },
      { property: "og:title", content: "Student Resources – Goethe & telc | BEETHOVENS" },
      {
        property: "og:description",
        content: "Exam guidelines, tips and official practice material for German A1–B2.",
      },
    ],
  }),
  component: Resources,
});

const modules = [
  { icon: BookOpen, t: "Lesen (Reading)", d: "Understand texts like ads, emails, articles." },
  { icon: Headphones, t: "Hören (Listening)", d: "Announcements, conversations, radio clips." },
  { icon: PenLine, t: "Schreiben (Writing)", d: "Forms, messages, emails and opinion texts." },
  {
    icon: Mic,
    t: "Sprechen (Speaking)",
    d: "Introduce yourself, discuss and plan with a partner.",
  },
];
const papers = [
  { l: "A1", g: "https://www.goethe.de/de/spr/kup/prf/prf/gzsd1/ueb.html" },
  { l: "A2", g: "https://www.goethe.de/de/spr/kup/prf/prf/gzsd2/ueb.html" },
  { l: "B1", g: "https://www.goethe.de/de/spr/kup/prf/prf/gzb1/ueb.html" },
  { l: "B2", g: "https://www.goethe.de/de/spr/kup/prf/prf/gzb2/ueb.html" },
];

function Resources() {
  return (
    <>
      <PageHero
        title="Student Resources"
        subtitle="Everything you need to prepare for Goethe and telc German exams."
      />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle kicker="Exam Format" title="The Four Modules">
          Goethe-Zertifikat and telc exams from A1 to B2 test four skills. At B1 and above, Goethe
          modules can be taken and passed separately.
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {modules.map((m) => (
            <div key={m.t} className="gold-frame rounded-lg bg-card p-5">
              <m.icon className="h-8 w-8 text-secondary" />
              <h3 className="mt-2 font-bold text-primary">{m.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-bold text-secondary">Scoring</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            <li>Goethe: each module scored out of 100; 60 points needed to pass a module.</li>
            <li>
              telc: written and oral parts are assessed separately; you need about 60% in each.
            </li>
            <li>Results usually arrive within a few weeks after the exam.</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-xl font-bold text-secondary">Exam-Day Checklist</h3>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
            <li>Carry your original passport / valid photo ID.</li>
            <li>Reach the centre at least 30 minutes early.</li>
            <li>Use a pen as instructed; no phones or smartwatches.</li>
            <li>Transfer answers to the answer sheet before time is up.</li>
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionTitle kicker="Practice" title="Official Sample Papers" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {papers.map((p) => (
            <a
              key={p.l}
              href={p.g}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-forest p-5 text-center text-primary-foreground hover:shadow-royal"
            >
              <div className="font-display text-3xl font-black text-gold">{p.l}</div>
              <div className="mt-1 inline-flex items-center gap-1 text-sm">
                Goethe practice <ExternalLink className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-sm">
          telc sample tests:{" "}
          <a
            className="font-bold text-secondary underline"
            href="https://www.telc.net/en/language-examinations/test-preparation/"
            target="_blank"
            rel="noreferrer"
          >
            telc.net test preparation
          </a>
        </p>
      </section>
      <section className="mx-auto max-w-4xl px-4">
        <SectionTitle title="Study Tips" />
        <ol className="list-decimal space-y-2 pl-6">
          <li>Learn nouns always with their article (der, die, das).</li>
          <li>Listen to German 20 minutes daily — podcasts, DW Learn German, songs.</li>
          <li>Write one short text every day and get it checked by your trainer.</li>
          <li>Practise speaking with a partner using real exam topics.</li>
          <li>Take a timed mock test every two weeks before your exam.</li>
        </ol>
      </section>
    </>
  );
}
