import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/70" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Rinova Technologies home">
          <span className="relative">
            <span className="absolute inset-0 rounded-xl bg-primary/40 blur-lg transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-yK4cgWfzjOqjd70WNKV2r8Lqs7Kg78.png"
              alt="Rinova Technologies logo"
              className="relative size-10 rounded-xl object-cover"
              width={40}
              height={40}
            />
          </span>
          <span className="font-display text-base font-bold tracking-[0.18em] text-foreground">
            RINOVA
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
          >
            Get Started
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="glass grid size-10 place-items-center rounded-xl lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass border-t border-border lg:hidden">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="col-span-2 mt-2 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </a>
          </div>
        </div>
      ) : null}
      <Link to="/" className="sr-only">
        Home
      </Link>
    </motion.header>
  );
}
