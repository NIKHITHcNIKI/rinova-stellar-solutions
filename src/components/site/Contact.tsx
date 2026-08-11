import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { GlowCard, Reveal, Section, SectionHeading } from "./primitives";

const WHATSAPP = "https://wa.me/919999999999";
const EMAIL = "renovarvn2026@gmail.com";
const PHONE = "+91 99999 99999";

const socials = [
  { Icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: Github, label: "GitHub", href: "https://github.com" },
  { Icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

const serviceOptions = [
  "Website Design",
  "Website Development",
  "UI/UX Design",
  "Logo Design",
  "Logo Animation",
  "Intro Videos",
  "AI Solutions",
  "Business Consultation",
  "Software Planning",
  "Digital Transformation",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Amazing Together"
        subtitle="Share your idea and we'll respond within one business day with a clear plan and estimate."
      />
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <GlowCard className="h-full p-6 sm:p-8" tilt={false}>
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {[
                { id: "name", label: "Name", type: "text", required: true },
                { id: "email", label: "Email", type: "email", required: true },
                { id: "phone", label: "Phone", type: "tel", required: false },
                { id: "company", label: "Company", type: "text", required: false },
              ].map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    required={f.required}
                    className="w-full rounded-xl border border-input bg-muted/30 px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground/60 focus:border-primary/60 focus:shadow-glow"
                    placeholder={f.label}
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label htmlFor="service" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl border border-input bg-muted/30 px-4 py-3 text-sm outline-none focus:border-primary/60 focus:shadow-glow"
                  defaultValue={serviceOptions[0]}
                >
                  {serviceOptions.map((s) => (
                    <option key={s} value={s} className="bg-card">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-xl border border-input bg-muted/30 px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary/60 focus:shadow-glow"
                />
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Send className="size-4" /> Send Message
                </motion.button>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="glass glow-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors hover:text-primary"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </div>
              {sent ? (
                <p className="sm:col-span-2 text-sm text-primary">
                  Thanks — your message is ready to send. We'll be in touch shortly.
                </p>
              ) : null}
            </form>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.12} className="grid content-start gap-4">
          {[
            { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
            { Icon: Phone, label: "Phone", value: PHONE, href: `tel:${PHONE.replace(/\s/g, "")}` },
            { Icon: MapPin, label: "Location", value: "Tumkur, Karnataka, India · Serving worldwide" },
          ].map((c) => (
            <div key={c.label} className="glass glow-ring flex items-start gap-4 rounded-2xl p-5">
              <div className="glass grid size-11 shrink-0 place-items-center rounded-xl text-primary">
                <c.Icon className="size-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="text-sm font-semibold hover:text-primary">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-sm font-semibold">{c.value}</p>
                )}
              </div>
            </div>
          ))}
          <div className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Follow us</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="glass grid size-11 place-items-center rounded-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:text-primary hover:shadow-glow"
                >
                  <s.Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-yK4cgWfzjOqjd70WNKV2r8Lqs7Kg78.png"
              alt="Rinova Technologies logo"
              className="size-10 rounded-xl object-cover"
              width={40}
              height={40}
            />
            <span className="font-display text-base font-bold tracking-[0.18em]">RINOVA</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Building premium digital experiences for modern businesses.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {["Home", "About", "Services", "Projects", "Process", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-muted-foreground hover:text-primary">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Website Development",
              "UI/UX Design",
              "AI Solutions",
              "Branding & Logo",
              "Software Development",
              "Digital Transformation",
            ].map((s) => (
              <li key={s}>
                <a href="#services" className="text-muted-foreground hover:text-primary">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Social
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="glass grid size-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-primary"
              >
                <s.Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 Rinova Technologies. Building Premium Digital Experiences for Modern Businesses.
      </div>
    </footer>
  );
}
