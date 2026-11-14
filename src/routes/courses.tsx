import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero, SectionTitle } from "@/components/site/Layout";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "German Courses A1, A2, B1, B2 | BEETHOVENS Rohtak" },
      {
        name: "description",
        content:
          "Level-wise German courses from A1 to B2 with Goethe & telc exam preparation. Grammar, speaking and exam skills in batches of 10-15.",
      },
      { property: "og:title", content: "German Courses A1–B2 | BEETHOVENS" },
      { property: "og:description", content: "Goethe & telc focused German training in Rohtak." },
    ],
  }),
  component: Courses,
});

const courses = [
  {
    l: "A1",
    n: "Beginner",
    dur: "approx. 8–10 weeks",
    exam: "Goethe-Zertifikat A1 / telc Deutsch A1",
    goal: "Introduce yourself, handle everyday situations, understand simple sentences.",
    topics: [
      "Alphabet, pronunciation & numbers",
      "Articles, verbs & sentence order",
      "Greetings, family, shopping, time",
      "Writing short forms & messages",
    ],
  },
  {
    l: "A2",
    n: "Elementary",
    dur: "approx. 8–10 weeks",
    exam: "Goethe-Zertifikat A2 / telc Deutsch A2",
    goal: "Talk about routines, past events and needs; read short texts.",
    topics: [
      "Perfekt & modal verbs",
      "Dative, prepositions, adjectives",
      "Travel, health, work & housing",
      "Letters and short emails",
    ],
  },
  {
    l: "B1",
    n: "Intermediate",
    dur: "approx. 10–12 weeks",
    exam: "Goethe-Zertifikat B1 / telc Deutsch B1",
    goal: "Work and study independently in German; express opinions.",
    topics: [
      "Subordinate clauses & Konjunktiv II",
      "Passive voice, relative clauses",
      "Discussions, presentations & planning",
      "Formal letters & opinion texts",
    ],
  },
  {
    l: "B2",
    n: "Upper Intermediate",
    dur: "approx. 12–14 weeks",
    exam: "Goethe-Zertifikat B2 / telc Deutsch B2",
    goal: "Communicate fluently on complex topics — ideal for jobs & university.",
    topics: [
      "Advanced grammar & connectors",
      "Argumentation & debate",
      "Professional and academic vocabulary",
      "Essays, reports & complaints",
    ],
  },
];

function Courses() {
  return (
    <>
      <PageHero
        title="Our Courses"
        subtitle="A1 to B2 German training focused on Grammar, Speaking and Exam Skills for Goethe & telc."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-2">
        {courses.map((c) => (
          <article
            key={c.l}
            className="gold-frame flex flex-col justify-between rounded-lg bg-card p-6"
          >
            <div>
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-display text-4xl font-black text-secondary">{c.l}</h2>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {c.n}
                </span>
              </div>
              <p className="mt-3">{c.goal}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {c.topics.map((t) => (
                  <li key={t} className="flex gap-2">
                    <Check className="h-4 w-4 shrink-0 text-gold" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 grid gap-1 border-t pt-4 text-sm text-muted-foreground">
                <div>
                  <b className="text-foreground">Duration:</b> {c.dur}
                </div>
                <div>
                  <b className="text-foreground">Prepares for:</b> {c.exam}
                </div>
              </div>
            </div>
            <div className="mt-5 pt-2">
              <Link
                to="/contact"
                hash="enquiry-form"
                search={{ level: c.l }}
                className="inline-flex w-full items-center justify-center rounded-md border-2 border-gold bg-forest px-4 py-2.5 text-sm font-bold text-gold shadow-royal transition-all hover:bg-gold-sheen hover:text-gold-foreground"
              >
                Enquire for {c.l} Batch →
              </Link>
            </div>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-5xl px-4">
        <SectionTitle kicker="How we teach" title="Batch Format & Exam Skills" />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Small batches", "Maximum 10-15 students per batch for personal attention."],
            [
              "Regular mock tests",
              "Full Goethe/telc style tests for Lesen, Hören, Schreiben, Sprechen.",
            ],
            [
              "Speaking every class",
              "Pair work, role plays and conversation practice in each session.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="rounded-lg border bg-card p-5">
              <h3 className="font-bold text-primary">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/contact"
            hash="enquiry-form"
            className="inline-block rounded-md bg-gold-sheen px-8 py-3.5 font-bold text-gold-foreground shadow-royal transition-all hover:scale-105"
          >
            Ask about fees & next batch
          </Link>
        </div>
      </section>
    </>
  );
}
