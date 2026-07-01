import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gustavo Ducatti — Data Scientist & Data Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Gustavo Ducatti — Data Scientist & Analyst building predictive models, ML solutions and analytical platforms that turn complex data into business decisions.",
      },
      { property: "og:title", content: "Gustavo Ducatti — Data Scientist & Data Analyst" },
      { property: "og:description", content: "Predictive models, ML and analytics turning complex data into decisions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  useRevealAll();
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
