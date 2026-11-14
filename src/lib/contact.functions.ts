import { createServerFn } from "@tanstack/react-start";
import * as zod from "zod";

const z = "z" in zod ? (zod.z as typeof zod) : "default" in zod ? (zod.default as typeof zod) : zod;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  level: z.string().max(20).optional(),
  message: z.string().trim().max(1000).optional(),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => contactSchema.parse(d))
  .handler(async ({ data }) => {
    try {
      const hasServiceKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);
      const hasUrl = Boolean(process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL);

      if (hasServiceKey && hasUrl) {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("contact_submissions").insert({
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          level: data.level || null,
          message: data.message || null,
        });
        if (error) {
          console.warn("[Contact Submission Error]", error.message);
        }
      } else {
        console.log("[Contact Submission Received]", {
          name: data.name,
          phone: data.phone,
          email: data.email,
          level: data.level,
          message: data.message,
          timestamp: new Date().toISOString(),
        });
      }
    } catch (err) {
      console.warn("[Contact Submission Fallback]", err);
    }
    return { ok: true, data };
  });
