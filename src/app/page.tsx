import StickyHeader from "@/components/StickyHeader";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import ProjectGrid from "@/components/ProjectGrid";
import Skills from "@/components/Skills";
import SiteFooter from "@/components/SiteFooter";
import { getSortedProjectsData } from "@/lib/projects";

export default function Home() {
  const projects = getSortedProjectsData();

  return (
    <main className="min-h-screen bg-paper">
      <StickyHeader />
      <Hero />
      <Expertise />
      <Experience />
      <ProjectGrid projects={projects} />
      <Skills />
      <SiteFooter />
    </main>
  );
}
