import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import { getSortedProjectsData } from "@/lib/projects";

export default function Home() {
  const projects = getSortedProjectsData();
  return (
    <main className="min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0b0f19] to-black text-slate-100">
      <Hero />
      <Experience />

      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Works</h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Muhammad Tanseef Shahid. All rights reserved.
      </footer>
    </main>
  );
}
