import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/Layout";
import { submitContact, contactSchema } from "@/lib/contact.functions";
import { ADDRESS, PHONE, TEL_URL, WHATSAPP_URL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BEETHOVENS | German Institute in Kishanpura, Rohtak" },
      { name: "description", content: "Book a free demo class. Call or WhatsApp +91 7404548276 or visit us in Kishanpura, Rohtak, Haryana." },
      { property: "og:title", content: "Contact BEETHOVENS, Rohtak" },
      { property: "og:description", content: "Book a free German demo class in Rohtak." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) { toast.error(parsed.error.issues[0]?.message ?? "Please check the form"); return; }
    setLoading(true);
    try {
      await submitContact({ data: parsed.data });
      setDone(true);
      form.reset();
    } catch {
      toast.error("Something went wrong. Please WhatsApp us instead.");
    } finally { setLoading(false); }
  }

  return (
    <>
      <PageHero title="Contact Us" subtitle="Book a free demo class or ask us anything about German courses and visas." />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2">
        <div className="gold-frame rounded-lg bg-card p-6">
          <h2 className="text-2xl font-bold text-primary">Enquiry Form</h2>
          {done ? (
            <p className="mt-6 rounded-md bg-accent p-4 text-accent-foreground">Danke! We've received your enquiry and will call you soon.</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-4 space-y-3">
              <input name="name" placeholder="Full name *" className={field} maxLength={100} required />
              <input name="phone" type="tel" placeholder="Phone number *" className={field} maxLength={15} required />
              <input name="email" type="email" placeholder="Email (optional)" className={field} maxLength={255} />
              <select name="level" className={field} defaultValue="">
                <option value="">Level of interest</option>
                <option>A1</option><option>A2</option><option>B1</option><option>B2</option><option>Not sure</option>
              </select>
              <textarea name="message" placeholder="Your message" rows={4} className={field} maxLength={1000} />
              <button disabled={loading} className="w-full rounded-md bg-maroon px-6 py-3 font-bold text-secondary-foreground disabled:opacity-60">
                {loading ? "Sending…" : "Send Enquiry"}
              </button>
            </form>
          )}
        </div>
        <div className="space-y-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-lg font-bold text-primary-foreground">
            <MessageCircle /> Chat on WhatsApp
          </a>
          <a href={TEL_URL} className="flex items-center justify-center gap-2 rounded-md border-2 border-primary px-6 py-4 text-lg font-bold text-primary">
            <Phone /> Call {PHONE}
          </a>
          <p className="flex items-center gap-2 text-sm"><MapPin className="h-4 w-4 text-secondary" />{ADDRESS}</p>
          <iframe title="BEETHOVENS location map" className="h-72 w-full rounded-lg border-2 border-gold" loading="lazy"
            src="https://www.google.com/maps?q=Kishanpura,+Rohtak,+Haryana&output=embed" />
        </div>
      </section>
    </>
  );
}
