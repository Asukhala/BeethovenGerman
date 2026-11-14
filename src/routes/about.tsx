import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Award, Eye, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { PageHero, SectionTitle } from "@/components/site/Layout";
import { TAGLINE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BEETHOVENS | Certified German Trainers & Rohtak Campus Tour" },
      {
        name: "description",
        content:
          "Tour Beethoven German Gurukul in Rohtak: Director's office, interactive teaching room, learning gallery, student pantry, and German culture art.",
      },
      { property: "og:title", content: "About BEETHOVENS German Institute" },
      {
        property: "og:description",
        content:
          "Certified trainers and authentic photos of our dedicated learning centre in Rohtak.",
      },
    ],
  }),
  component: About,
});

const campusTour = [
  {
    img: "/campus/office.jpg",
    t: "Director's Office & Counselling Studio",
    tag: "Admissions & Visa Counselling",
    d: "Our calm, executive consultation room featuring the official BEETHOVENS wall crest, student counselling desk, and visa planning resources. Here we guide each student with a tailored roadmap for Goethe/telc exams and German university or career pathways.",
  },
  {
    img: "/campus/teaching.jpg",
    t: "Interactive Teaching Room",
    tag: "Language Classroom · Max 10-15",
    d: "Equipped with comfortable individual study armchairs and focused immersion aids — German grammar charts (Modalverben, der-die-das, Wichtige Verben), motivational quote murals, and German landmark photographs for lively pair-work and discussion.",
  },
  {
    img: "/campus/gallery.jpg",
    t: "Sunlit Learning Gallery & Corridor",
    tag: "Art & Greenery Corridor",
    d: "A wide, naturally lit walkway paved with polished marble and framed with indoor palms and snake plants. Lined with German cultural prints and language art connecting classrooms and counselling spaces.",
  },
  {
    img: "/campus/kitchen.jpg",
    t: "Student Lounge & Pantry (Kaffeepause)",
    tag: "Refreshment & Break Area",
    d: "A sleek modern modular pantry equipped with electric kettle, coffee maker, blender, and clean drinking water. Students take relaxing breaks here between intensive grammar sessions and practise speaking German over chai.",
  },
  {
    img: "/campus/german_wall.jpg",
    t: "German Immersion & Motivation Wall",
    tag: "Language Wall Art",
    d: "'Sprich Deutsch mit Selbstvertrauen' — A colorful, inspiring full-wall hand-painted graphic reinforcing key learner goals: Denk auf Deutsch, Finde neue Freunde, Sprich fliessend, Baue deine Zukunft, and Lernen • Üben • Verbessern.",
  },
  {
    img: "/campus/staircase.jpg",
    t: "German Landmark Staircase",
    tag: "Entrance & Culture Stairway",
    d: "Our granite entrance stairway leading up to the 3rd floor centre, featuring an elegant gallery of Germany's most celebrated landmarks — Brandenburg Gate in Berlin, Neuschwanstein Castle, Cologne Cathedral, and the medieval beauty of Rothenburg ob der Tauber.",
  },
  {
    img: "/campus/terrace.jpg",
    t: "Creative Balcony & Open-Air Lounge",
    tag: "Creative Terrace",
    d: "'Denk Anders — Jede große Idee beginnt mit einem Gedanken'. A refreshing open-air balcony with checkered floor tiles and custom artistic wall mural, providing fresh air and creative energy between study hours.",
  },
];

const trainers = [
  { n: "Trainer Name", r: "Lead Trainer · Goethe-certified (C1)" },
  { n: "Trainer Name", r: "Speaking & Exam Coach · telc-trained" },
  { n: "Trainer Name", r: "Grammar Specialist · B2/C1 certified" },
];

function About() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#campus-tour") {
      setTimeout(() => {
        const el = document.getElementById("campus-tour");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (activePhoto === null) return;
      if (e.key === "Escape") setActivePhoto(null);
      if (e.key === "ArrowLeft") {
        setActivePhoto((prev) =>
          prev === null ? null : (prev - 1 + campusTour.length) % campusTour.length,
        );
      }
      if (e.key === "ArrowRight") {
        setActivePhoto((prev) => (prev === null ? null : (prev + 1) % campusTour.length));
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePhoto]);

  return (
    <>
      <PageHero title="About Us" subtitle="A gurukul of knowledge, a confluence of languages." />

      <section className="mx-auto max-w-3xl px-4 py-14 text-center">
        <p className="font-sanskrit text-2xl text-secondary">{TAGLINE}</p>
        <p className="mt-2 text-sm italic text-muted-foreground">
          "The Gurukul of Knowledge, the Confluence of Languages"
        </p>
        <p className="mt-6 leading-relaxed">
          BEETHOVENS was founded in 2026 in Kishanpura, Rohtak, to bring premium German training to
          Haryana. We blend the discipline of the Indian gurukul with modern German teaching methods
          — small batches of 10-15 students, personal mentoring and a clear focus on passing Goethe
          and telc exams so our students can study, train and work in Germany.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <SectionTitle kicker="Our Team" title="Certified Trainers" />
        <div className="grid gap-6 md:grid-cols-3">
          {trainers.map((t, i) => (
            <div key={i} className="gold-frame rounded-lg bg-card p-6 text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-forest">
                <Award className="h-9 w-9 text-gold" />
              </div>
              <h3 className="mt-3 text-lg font-bold text-primary">{t.n}</h3>
              <p className="text-sm text-muted-foreground">{t.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Complete Campus Tour with All 7 Authentic Institute Photos */}
      <section id="campus-tour" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
        <SectionTitle kicker="Full Facility Tour" title="Inside Beethoven German Gurukul">
          Take a complete visual tour of our campus located on the 3rd Floor of Sukhala Tower,
          Rohtak. Every space has been custom-designed for immersive, joyful language learning.
        </SectionTitle>

        <div className="mt-8 space-y-12">
          {campusTour.map((r, i) => (
            <div
              key={r.t}
              className={`grid items-center gap-8 rounded-xl border border-gold/40 bg-card p-6 shadow-md md:grid-cols-2 ${
                i % 2 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div
                className="group relative cursor-pointer overflow-hidden rounded-lg border-2 border-gold shadow-royal"
                onClick={() => setActivePhoto(i)}
              >
                <img
                  src={r.img}
                  alt={r.t}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-xs font-bold text-gold-foreground shadow-lg">
                    <Eye className="h-4 w-4" /> Click to view full image
                  </span>
                </div>
              </div>
              <div>
                <span className="inline-block rounded-md bg-forest px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                  {r.tag}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-secondary">{r.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{r.d}</p>
                <button
                  type="button"
                  onClick={() => setActivePhoto(i)}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary"
                >
                  <Eye className="h-3.5 w-3.5" /> View high-resolution photo →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Visit in Person Callout */}
        <div className="mt-14 rounded-xl border-2 border-gold bg-forest p-8 text-center text-primary-foreground shadow-royal">
          <h3 className="text-2xl font-bold text-gold md:text-3xl">Visit Our Rohtak Centre</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm opacity-90">
            Come visit our campus, sit in on a free demo class, and speak with our German language
            and visa counsellors in person.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              hash="enquiry-form"
              className="rounded-md bg-gold-sheen px-6 py-3 font-bold text-gold-foreground shadow-royal transition-all hover:scale-105"
            >
              Book a Free Demo Class
            </Link>
            <a
              href="https://www.google.com/maps?q=Sukhala+Tower,+New+Bus+Stand+Road,+Kishanpura,+Rohtak,+Haryana"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-gold px-6 py-3 font-bold text-gold transition-all hover:bg-gold hover:text-gold-foreground"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full-Resolution Photo Viewing */}
      {activePhoto !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border-2 border-gold bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b bg-muted/40 px-4 py-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  {campusTour[activePhoto].tag}
                </span>
                <h4 className="text-base font-bold text-primary sm:text-lg">
                  {campusTour[activePhoto].t}
                </h4>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-muted-foreground">
                  {activePhoto + 1} of {campusTour.length}
                </span>
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Image Viewer */}
            <div className="relative flex min-h-[320px] max-h-[65vh] flex-1 items-center justify-center overflow-hidden bg-black">
              <img
                src={campusTour[activePhoto].img}
                alt={campusTour[activePhoto].t}
                className="max-h-[65vh] max-w-full object-contain"
              />

              <button
                type="button"
                onClick={() =>
                  setActivePhoto((prev) =>
                    prev === null ? 0 : (prev - 1 + campusTour.length) % campusTour.length,
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2.5 text-white transition-colors hover:bg-black"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setActivePhoto((prev) => (prev === null ? 0 : (prev + 1) % campusTour.length))
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2.5 text-white transition-colors hover:bg-black"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Description */}
            <div className="border-t bg-card p-4 text-sm text-muted-foreground">
              {campusTour[activePhoto].d}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
