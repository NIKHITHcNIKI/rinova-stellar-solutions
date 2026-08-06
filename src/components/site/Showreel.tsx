import { motion } from "framer-motion";
import { Play } from "lucide-react";
import transformationVideo from "@/assets/transformation.mp4.asset.json";
import { Reveal, Section, SectionHeading } from "./primitives";

export function Showreel() {
  return (
    <Section id="showreel">
      <SectionHeading
        eyebrow="Digital Transformation"
        title="See transformation in motion"
        subtitle="A glimpse of how we turn ideas into intelligent, high-performance digital products."
      />
      <Reveal>
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="glass glow-ring relative mx-auto max-w-5xl overflow-hidden rounded-3xl p-2 shadow-glow"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <video
              src={transformationVideo.url}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              aria-label="Rinova Technologies digital transformation showreel"
              className="aspect-video size-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_100%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_70%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-primary/60" />
            <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-background/60 px-3 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <Play className="size-3.5" /> Showreel
            </div>
          </div>
        </motion.div>
      </Reveal>
    </Section>
  );
}
