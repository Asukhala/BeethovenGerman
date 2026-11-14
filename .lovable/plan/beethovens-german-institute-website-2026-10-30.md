# BEETHOVENS German Institute Website

A premium, mobile-first website for BEETHOVENS, a German institute in Kishanpura, Rohtak. Tagline: "ज्ञानस्य गुरुकुलम्, भाषायाः संगमः".

## Look and feel

- Colors: Forest Green, Royal Maroon and Gold on a warm ivory background, with navy from the logo used as a small accent.
- Fonts: a classic serif for headings (Cinzel or Playfair Display), Tiro Devanagari Sanskrit for the tagline, and a clean sans-serif for body text.
- Details: thin gold borders, ribbon-style section titles, and a city skyline strip in the footer, taken from the poster.
- The uploaded logo goes in the header and footer. The poster is the banner on the homepage.

## Pages

1. **Home (/)**: the poster as a banner, with the tagline and two buttons: "Book Free Demo" and "WhatsApp Us". Then sections for Core Skills (Grammar, Speaking, Exam Prep), the A1–B2 levels, small batches of 8–9 students, a short look at the facility, Visa and Career help, and a final call to action.
2. **Courses (/courses)**: one card each for A1, A2, B1 and B2, showing the goals, what's covered, a placeholder duration, and whether it prepares for Goethe or telc. Plus a section on exam skills and the batch format.
3. **About Us (/about)**: our story and the meaning of the tagline, certified trainers (placeholder profiles), and a tour of the facility: Office Room, Interactive Teaching Room, Quiet Self-Study Room, and Student Lounge with Mini Kitchen and Water Station. AI-generated images stand in for photos until you send real ones.
4. **Student Resources (/resources)**: the Goethe and telc exam format for each level (the four modules, scoring, and what to expect on exam day), study tips, and links to the official sample papers on goethe.de and telc.net.
5. **Contact Us (/contact)**: a Google Map of Kishanpura, Rohtak, a sign-up form (name, phone, email, level of interest, message), a WhatsApp button for +91 7404548276, and a click-to-call button.

On every page:

- A header with the logo and a mobile menu.
- A WhatsApp button that floats on screen.
- A footer with the address, phone number and quick links.
- A title and description for each page, so search engines and link previews show the right text.

## Sign-up form

Every form submission is saved in Lovable Cloud. You can view submissions in Cloud → Database → contact_submissions. Email alerts can be added later once you have a verified email domain.

## Placeholders to replace later

Trainer names, course durations and fees, the exact street address, and photos of the facility.

## Technical details

- Separate TanStack route files: index, courses, about, resources, contact. Shared Header, Footer and WhatsAppFab components go in __root.
- Logo and poster are uploaded with lovable-assets. Theme colors are oklch values in styles.css.
- The contact form uses a createServerFn that checks input with zod and inserts into a `contact_submissions` table. RLS is on, and anonymous users get no read access.
- The map is a Google Maps iframe embed, so no API key is needed.
