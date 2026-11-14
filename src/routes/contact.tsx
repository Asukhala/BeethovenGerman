import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { toast } from "sonner";
import { MapPin, Phone, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { submitContact, contactSchema } from "@/lib/contact.functions";
import { ADDRESS, PHONE, TEL_URL, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BEETHOVENS | German Institute in Rohtak" },
      {
        name: "description",
        content:
          "Book a free demo class. Call or WhatsApp +91 7404548276 or visit us in Rohtak, Haryana.",
      },
      { property: "og:title", content: "Contact BEETHOVENS, Rohtak" },
      { property: "og:description", content: "Book a free German demo class in Rohtak." },
    ],
  }),
  component: Contact,
});

const field =
  "w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    phone: string;
    waUrl: string;
  } | null>(null);
  const [defaultLevel, setDefaultLevel] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const lvl = params.get("level");
      if (lvl) setDefaultLevel(lvl);

      if (window.location.hash === "#enquiry-form") {
        setTimeout(() => {
          const el = document.getElementById("enquiry-form");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }

    setLoading(true);
    const waText = [
      "Hallo Beethoven German Gurukul!",
      "",
      "I would like to submit an enquiry:",
      `• Name: ${parsed.data.name}`,
      `• Phone: ${parsed.data.phone}`,
      parsed.data.level ? `• Level: ${parsed.data.level}` : null,
      parsed.data.email ? `• Email: ${parsed.data.email}` : null,
      parsed.data.message ? `• Message: ${parsed.data.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const waUrl = `https://wa.me/917404548276?text=${encodeURIComponent(waText)}`;

    try {
      await submitContact({ data: parsed.data });
      setSubmittedData({
        name: parsed.data.name,
        phone: parsed.data.phone,
        waUrl,
      });
      form.reset();
      toast.success("Enquiry received! Connecting you to WhatsApp...");

      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }
    } catch (err) {
      console.error(err);
      setSubmittedData({
        name: parsed.data.name,
        phone: parsed.data.phone,
        waUrl,
      });
      toast.info("Connecting directly via WhatsApp...");
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Book a free demo class or ask us anything about German courses and visas."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
        <div id="enquiry-form" className="gold-frame rounded-lg bg-card p-6 scroll-mt-28">
          <h2 className="text-2xl font-bold text-primary">Enquiry Form</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in your details below to book a free demo session or ask any course questions.
          </p>

          {submittedData ? (
            <div className="mt-6 rounded-lg border-2 border-primary/20 bg-accent/30 p-6 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-3 text-xl font-bold text-primary">Enquiry Submitted!</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Danke, <strong>{submittedData.name}</strong>! Your enquiry has been received. Our
                team will contact you shortly.
              </p>
              <div className="mt-4 rounded-md border bg-background/80 p-3 text-xs text-muted-foreground">
                Connecting you to our official WhatsApp helpline for instant support.
              </div>
              <a
                href={submittedData.waUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-3.5 text-base font-bold text-white shadow-royal transition-all hover:opacity-95"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp Now
              </a>
              <button
                type="button"
                onClick={() => setSubmittedData(null)}
                className="mt-4 text-xs font-semibold text-secondary hover:underline"
              >
                ← Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-4 space-y-3">
              <input
                name="name"
                placeholder="Full name *"
                className={field}
                maxLength={100}
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone number *"
                className={field}
                maxLength={15}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email (optional)"
                className={field}
                maxLength={255}
              />
              <select name="level" className={field} defaultValue={defaultLevel} key={defaultLevel}>
                <option value="">Level of interest</option>
                <option value="A1">A1 (Beginner)</option>
                <option value="A2">A2 (Elementary)</option>
                <option value="B1">B1 (Intermediate)</option>
                <option value="B2">B2 (Upper Intermediate)</option>
                <option value="Not sure">Not sure</option>
              </select>
              <textarea
                name="message"
                placeholder="Your message (e.g. batch timing, Goethe/telc exam prep, visa counselling)"
                rows={4}
                className={field}
                maxLength={1000}
              />
              <button
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-maroon px-6 py-3.5 font-bold text-secondary-foreground shadow-royal transition-all hover:brightness-110 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {loading ? "Submitting Enquiry…" : "Send Enquiry & Connect on WhatsApp"}
              </button>
            </form>
          )}
        </div>
        <div className="space-y-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-lg font-bold text-primary-foreground"
          >
            <MessageCircle /> Chat on WhatsApp
          </a>
          <a
            href={TEL_URL}
            className="flex items-center justify-center gap-2 rounded-md border-2 border-primary px-6 py-4 text-lg font-bold text-primary"
          >
            <Phone /> Call {PHONE}
          </a>
          <p className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-secondary" />
            {ADDRESS}
          </p>
          <iframe
            title="BEETHOVENS location map"
            className="h-72 w-full rounded-lg border-2 border-gold"
            loading="lazy"
            src="https://www.google.com/maps?q=Sukhala+Tower,+New+Bus+Stand+Road,+Kishanpura,+Rohtak,+Haryana&output=embed"
          />
        </div>
      </section>
    </>
  );
}
