import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow } from "@/components/site/CursorGlow";
import { Contact, Footer } from "@/components/site/Contact";
import { Hero } from "@/components/site/Hero";
import { Navbar } from "@/components/site/Navbar";
import {
  About,
  FAQ,
  Industries,
  Process,
  Projects,
  Services,
  TechMarquee,
  Testimonials,
  TrustBar,
  WhyChoose,
} from "@/components/site/sections";

const title = "Rinova Technologies — Premium Web, AI & Digital Solutions";
const description =
  "Rinova Technologies builds premium websites, UI/UX, branding, and AI-powered software that help modern businesses grow.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <TechMarquee />
        <Projects />
        <WhyChoose />
        <Process />
        <Industries />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
