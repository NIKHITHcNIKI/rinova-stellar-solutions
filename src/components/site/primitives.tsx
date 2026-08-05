import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 26,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
      <span className="size-1.5 rounded-full bg-primary shadow-glow" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto mb-14 max-w-2xl text-center"
          : "mb-14 max-w-2xl text-left"
      }
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

export function GlowCard({
  children,
  className = "",
  tilt = true,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={reduce || !tilt ? undefined : { y: -6, rotateX: 3, rotateY: -3, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 20 }}
      style={{ transformPerspective: 900 }}
      className={`glass glow-ring group relative overflow-hidden rounded-2xl p-6 transition-shadow duration-500 hover:shadow-glow ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
