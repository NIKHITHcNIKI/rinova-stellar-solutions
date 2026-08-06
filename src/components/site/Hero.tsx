import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Sparkles, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const particles = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 61) % 100,
  delay: (i % 9) * 0.6,
  size: (i % 3) + 2,
}));

export function Hero() {
  const reduce = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      setPointer({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <section id="home" className="relative overflow-hidden px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
      <div className="hero-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="grid-lines pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/70"
            style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
            animate={reduce ? { opacity: 0.4 } : { y: [0, -30, 0], opacity: [0.15, 0.8, 0.15] }}
            transition={{ duration: 8 + (i % 5), repeat: Infinity, delay: p.delay }}
          />
        ))}
        <div className="pulse-glow absolute left-1/2 top-10 size-[520px] -translate-x-1/2 rounded-full border border-primary/25" />
        <div className="pulse-glow absolute left-1/2 top-24 size-[340px] -translate-x-1/2 rounded-full border border-primary/20" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="relative mb-9 h-1"
            style={{ x: pointer.x * 14, y: pointer.y * 10 }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
          >
            <div className="absolute -inset-x-40 -top-24 h-48 rounded-full bg-primary/20 blur-3xl" />
          </motion.div>


          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            <Sparkles className="size-3.5" /> AI-Driven IT Solutions
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-gradient">Transforming Ideas into</span>
            <br />
            <span className="text-gradient">Powerful Digital Solutions</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We design, develop, and deliver high-quality digital products that help businesses grow.
            From websites and branding to AI-powered applications, we turn your ideas into reality.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.04]"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="glass glow-ring inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              View Our Projects
            </a>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-x-0 top-40 mx-auto hidden max-w-6xl md:block">
          {[
            { Icon: Bot, className: "left-4 top-10" },
            { Icon: Cpu, className: "right-6 top-4" },
            { Icon: Zap, className: "right-20 top-56" },
            { Icon: Sparkles, className: "left-16 top-64" },
          ].map(({ Icon, className }, i) => (
            <div
              key={i}
              className={`float-slow glass absolute grid size-14 place-items-center rounded-2xl text-primary ${className}`}
              style={{ animationDelay: `${i * 1.3}s` }}
            >
              <Icon className="size-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
