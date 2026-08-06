import { motion } from "framer-motion";
import {
  BadgeCheck,
  Briefcase,
  Brain,
  Building2,
  CheckCircle2,
  Code2,
  Cpu,
  CreditCard,
  Factory,
  Film,
  GraduationCap,
  HeartPulse,
  Layers,
  Layout,
  Lock,
  MonitorSmartphone,
  PenTool,
  Rocket,
  Server,
  ShoppingBag,
  Smile,
  Sparkles,
  Store,
  Target,
  Timer,
  TrendingUp,
  User,
  Users,
  UtensilsCrossed,
  Wallet,
  Wand2,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Eyebrow, GlowCard, Reveal, Section, SectionHeading } from "./primitives";

export function TrustBar() {
  const items = [
    "Professional Quality",
    "Fast Delivery",
    "Affordable Pricing",
    "Customer Satisfaction",
    "End-to-End IT Solutions",
  ];
  return (
    <div className="relative px-5 pb-6 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
        {items.map((item, i) => (
          <Reveal key={item} delay={i * 0.08}>
            <div className="glass glow-ring flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 text-primary" />
              <span className="whitespace-nowrap">{item}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 60;
    const id = setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setValue(Math.round(target * progress));
      if (frame >= total) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [target, active]);
  return value;
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const count = useCountUp(value, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setActive(true);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass glow-ring rounded-2xl p-6 text-center">
      <div className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Reveal>
            <Eyebrow>Who We Are</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              <span className="text-gradient">Engineering premium digital experiences</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Rinova Technologies is a modern IT solutions company dedicated to helping businesses
              establish a strong digital presence. We combine creativity, technology, and innovation
              to build premium-quality digital products tailored to every client's needs.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.1}>
              <GlowCard>
                <Target className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Our Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To empower businesses with innovative, reliable, and scalable digital solutions
                  that accelerate growth.
                </p>
              </GlowCard>
            </Reveal>
            <Reveal delay={0.18}>
              <GlowCard>
                <Sparkles className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">Our Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To become one of the most trusted digital technology companies by delivering
                  world-class software, branding, and AI-powered solutions.
                </p>
              </GlowCard>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15} className="grid grid-cols-2 gap-4">
          <Stat value={120} suffix="+" label="Projects Completed" />
          <Stat value={90} suffix="+" label="Happy Clients" />
          <Stat value={5} suffix="+" label="Years Experience" />
          <Stat value={24} suffix="/7" label="Support Availability" />
        </Reveal>
      </div>
    </Section>
  );
}

const services = [
  { Icon: Layout, title: "Website Design", desc: "Pixel-perfect, conversion-focused interfaces built around your brand.", img: svcDesign },
  { Icon: Code2, title: "Website Development", desc: "Fast, secure, and scalable websites engineered with modern stacks.", img: svcDev },
  { Icon: MonitorSmartphone, title: "UI/UX Design", desc: "Research-led product design that makes complex flows feel effortless.", img: svcDesign },
  { Icon: PenTool, title: "Logo Design", desc: "Distinctive identity systems that make your business unforgettable.", img: svcBrand },
  { Icon: Wand2, title: "Logo Animation", desc: "Motion-crafted brand marks for reels, intros, and product launches.", img: svcBrand },
  { Icon: Film, title: "Intro Videos", desc: "Cinematic brand videos that communicate value in seconds.", img: svcVideo },
  { Icon: Brain, title: "AI Solutions", desc: "Custom AI assistants, automation, and intelligent product features.", img: svcAi },
  { Icon: Users, title: "Business Consultation", desc: "Strategy sessions that align technology decisions with revenue goals.", img: svcStrategy },
  { Icon: Layers, title: "Software Planning", desc: "Architecture, roadmaps, and specs before a single line is written.", img: svcStrategy },
  { Icon: Rocket, title: "Digital Transformation", desc: "Modernise legacy operations with cloud-native, automated workflows.", img: svcDev },
];

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Services"
        title="Everything you need to launch and scale"
        subtitle="One partner for design, engineering, branding, and AI — delivered at a premium standard."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.08}>
            <GlowCard className="group h-full overflow-hidden p-0">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} illustration`}
                  loading="lazy"
                  width={768}
                  height={512}
                  className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--card),transparent_75%)]" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-primary/50 shadow-glow" />
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16 }}
                  className="glass absolute bottom-3 left-4 grid size-12 place-items-center rounded-xl text-primary shadow-glow"
                >
                  <s.Icon className="size-6" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform duration-300 hover:translate-x-1"
                >
                  Read More →
                </a>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}


const tech = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "PHP",
  "MongoDB",
  "SQL",
];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden py-12">
      <div className="mx-auto mb-8 max-w-6xl px-5 text-center sm:px-8">
        <Eyebrow>Technologies</Eyebrow>
      </div>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track flex w-max gap-4 pr-4">
          {[...tech, ...tech, ...tech, ...tech].map((t, i) => (
            <div
              key={`${t}-${i}`}
              className="glass flex items-center gap-3 rounded-2xl px-6 py-4 text-sm font-semibold text-muted-foreground"
            >
              <Server className="size-4 text-primary" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    name: "Fluent AI",
    tag: "AI-powered communication platform",
    features: [
      "Grammar",
      "Pronunciation",
      "Interview Preparation",
      "Speaking Practice",
      "Real-time Conversation",
    ],
    Icon: Brain,
  },
  {
    name: "LetterGen AI",
    tag: "AI Letter Generator",
    features: [
      "Business Letters",
      "HR Letters",
      "College Letters",
      "Complaint Letters",
      "Government Letters",
      "Cover Letters",
    ],
    Icon: Wand2,
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Products we designed and shipped"
        subtitle="Real AI products built end-to-end by the Rinova team."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <GlowCard className="h-full p-0" tilt={false}>
              <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-border bg-[radial-gradient(60%_80%_at_50%_0%,color-mix(in_oklab,var(--primary)_26%,transparent),transparent_70%)]">
                <div className="grid-lines absolute inset-0 opacity-70" />
                <motion.div
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="glass relative grid size-24 place-items-center rounded-3xl text-primary shadow-glow"
                >
                  <p.Icon className="size-10" />
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-primary">{p.tag}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const reasons = [
  { Icon: Users, title: "Professional Development Team" },
  { Icon: Layout, title: "Premium UI/UX" },
  { Icon: Wrench, title: "Custom Business Solutions" },
  { Icon: Timer, title: "Fast Delivery" },
  { Icon: Wallet, title: "Affordable Pricing" },
  { Icon: Lock, title: "Secure Development" },
  { Icon: Cpu, title: "Latest Technologies" },
  { Icon: BadgeCheck, title: "24/7 Support" },
];

export function WhyChoose() {
  return (
    <Section id="why">
      <SectionHeading
        eyebrow="Why Rinova"
        title="Built for teams that expect excellence"
        subtitle="Every engagement is delivered with senior craftsmanship, clear communication, and measurable outcomes."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <Reveal key={r.title} delay={(i % 4) * 0.07}>
            <GlowCard className="h-full">
              <r.Icon className="size-6 text-primary" />
              <h3 className="mt-4 text-base font-semibold leading-snug">{r.title}</h3>
            </GlowCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const steps = [
  { title: "Requirement Discussion", desc: "We map goals, users, and constraints in a focused discovery call." },
  { title: "Planning", desc: "Scope, architecture, timeline, and milestones agreed up front." },
  { title: "Design", desc: "High-fidelity UI, brand system, and interaction prototypes." },
  { title: "Development", desc: "Clean, modular engineering with weekly demo builds." },
  { title: "Testing", desc: "Performance, accessibility, security, and cross-device QA." },
  { title: "Launch", desc: "Deployment, analytics, SEO setup, and handover documentation." },
  { title: "Support", desc: "Ongoing maintenance, iteration, and 24/7 assistance." },
];

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        eyebrow="Our Process"
        title="A clear path from idea to launch"
        subtitle="Seven deliberate stages that keep quality high and timelines predictable."
      />
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent md:left-1/2" />
        <div className="space-y-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={0.05}>
              <div
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                <span
                  className={`absolute left-1.5 top-6 grid size-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-glow md:left-auto ${
                    i % 2 === 0 ? "md:-right-3" : "md:-left-3"
                  }`}
                >
                  {i + 1}
                </span>
                <GlowCard>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </GlowCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

const industries = [
  { Icon: GraduationCap, label: "Education" },
  { Icon: HeartPulse, label: "Healthcare" },
  { Icon: CreditCard, label: "Finance" },
  { Icon: Store, label: "Retail" },
  { Icon: UtensilsCrossed, label: "Restaurants" },
  { Icon: Factory, label: "Manufacturing" },
  { Icon: Rocket, label: "Startups" },
  { Icon: Building2, label: "Real Estate" },
  { Icon: Briefcase, label: "Corporate" },
  { Icon: ShoppingBag, label: "E-commerce" },
  { Icon: User, label: "Personal Brands" },
  { Icon: TrendingUp, label: "SMEs" },
];

export function Industries() {
  return (
    <Section id="industries">
      <SectionHeading
        eyebrow="Industries"
        title="Industries we serve"
        subtitle="Domain-aware solutions for organisations of every size and sector."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <Reveal key={ind.label} delay={(i % 4) * 0.06}>
            <div className="glass glow-ring group flex flex-col items-center gap-3 rounded-2xl px-4 py-7 text-center transition-shadow hover:shadow-glow">
              <ind.Icon className="size-7 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
              <span className="text-sm font-medium text-muted-foreground">{ind.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const testimonials = [
  {
    quote: "Professional team with outstanding quality. The final product exceeded our expectations.",
    name: "Aarav Mehta",
    role: "Founder, EduSpark",
  },
  {
    quote: "Delivered before deadline without compromising on a single detail.",
    name: "Sarah Khan",
    role: "Marketing Head, NovaRetail",
  },
  {
    quote: "Highly recommended. Their design sense made our brand look world-class.",
    name: "Rohit Verma",
    role: "CEO, FinEdge",
  },
  {
    quote: "Amazing customer support — quick, clear, and always one step ahead.",
    name: "Priya Nair",
    role: "Operations Lead, MediCare+",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5200);
    return () => clearInterval(id);
  }, []);
  const active = testimonials[index]!;

  return (
    <Section id="testimonials">
      <SectionHeading eyebrow="Testimonials" title="Trusted by ambitious teams" />
      <Reveal>
        <GlowCard className="mx-auto max-w-3xl p-8 sm:p-12" tilt={false}>
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Smile className="mx-auto size-8 text-primary" />
            <p className="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
              “{active.quote}”
            </p>
            <footer className="mt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{active.name}</span> · {active.role}
            </footer>
          </motion.blockquote>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-3 bg-border"
                }`}
              />
            ))}
          </div>
        </GlowCard>
      </Reveal>
    </Section>
  );
}

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most websites launch in 2–4 weeks. Larger software and AI products typically run 6–12 weeks depending on scope, with weekly demo builds throughout.",
  },
  {
    q: "Do you build fully custom websites?",
    a: "Yes. Every project is designed and coded from scratch around your brand, content, and goals — no recycled templates.",
  },
  {
    q: "Do you offer maintenance after launch?",
    a: "We offer monthly maintenance covering updates, backups, performance monitoring, security patches, and content changes.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We audit your current site, keep what works, and rebuild the experience with a premium, high-converting design.",
  },
  {
    q: "What logo and branding services do you provide?",
    a: "Logo design, logo animation, brand guidelines, colour and typography systems, social kits, and intro videos.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq">
      <SectionHeading eyebrow="FAQ" title="Questions, answered" />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.05}>
            <div className="glass glow-ring overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-semibold">{f.q}</span>
                <span
                  className={`text-primary transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </motion.div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
