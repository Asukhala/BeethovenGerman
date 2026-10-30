import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import teaching from "@/assets/teaching.jpg";
import study from "@/assets/study.jpg";
import lounge from "@/assets/lounge.jpg";
import office from "@/assets/office.jpg";
import { PageHero, SectionTitle } from "@/components/site/Layout";
import { TAGLINE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BEETHOVENS | Certified German Trainers & Facility Tour" },
      { name: "description", content: "Meet our certified German trainers and tour our Rohtak centre: office, teaching room, self-study room and student lounge." },
      { property: "og:title", content: "About BEETHOVENS German Institute" },
      { property: "og:description", content: "Certified trainers and a dedicated learning centre in Rohtak." },
    ],
  }),
  component: About,
});

const rooms = [
  { img: office, t: "Office Room", d: "Admissions, counselling and visa guidance happen here — a calm space to plan your journey to Germany." },
  { img: teaching, t: "Interactive Teaching Room", d: "A small-group classroom built for discussion, role plays and focused practice with 8–9 learners." },
  { img: study, t: "Quiet Self-Study Room", d: "Individual desks and German reading material for revision, homework and mock tests." },
  { img: lounge, t: "Student Lounge & Mini Kitchen", d: "Relax between classes with a mini kitchen and drinking water station — and practise German over chai." },
];
const trainers = [
  { n: "Trainer Name", r: "Lead Trainer · Goethe-certified (C1)" },
  { n: "Trainer Name", r: "Speaking & Exam Coach · telc-trained" },
  { n: "Trainer Name", r: "Grammar Specialist · B2/C1 certified" },
];

function About() {
  return (
    <>
      <PageHero title="About Us" subtitle="A gurukul of knowledge, a confluence of languages." />
      <section className="mx-auto max-w-3xl px-4 py-14 text-center">
        <p className="font-sanskrit text-2xl text-secondary">{TAGLINE}</p>
        <p className="mt-2 text-sm italic text-muted-foreground">"The Gurukul of Knowledge, the Confluence of Languages"</p>
        <p className="mt-6 leading-relaxed">BEETHOVENS was founded in 2026 in Kishanpura, Rohtak, to bring premium German training to Haryana. We blend the discipline of the Indian gurukul with modern German teaching methods — small batches, personal mentoring and a clear focus on passing Goethe and telc exams so our students can study, train and work in Germany.</p>
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Our Team" title="Certified Trainers" />
        <div className="grid gap-6 md:grid-cols-3">
          {trainers.map((t, i) => (
            <div key={i} className="gold-frame rounded-lg bg-card p-6 text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-forest"><Award className="h-9 w-9 text-gold" /></div>
              <h3 className="mt-3 text-lg font-bold text-primary">{t.n}</h3>
              <p className="text-sm text-muted-foreground">{t.r}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle kicker="Facility Tour" title="Inside Our Centre" />
        <div className="space-y-10">
          {rooms.map((r, i) => (
            <div key={r.t} className={`grid items-center gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>img]:order-2" : ""}`}>
              <img src={r.img} alt={r.t} loading="lazy" width={1024} height={768} className="w-full rounded-lg border-4 border-gold shadow-royal" />
              <div><h3 className="text-2xl font-bold text-secondary">{r.t}</h3><p className="mt-2 text-muted-foreground">{r.d}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
