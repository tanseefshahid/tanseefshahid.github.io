import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import { getSortedProjectsData } from "@/lib/projects";

export default function Home() {
  const projects = getSortedProjectsData();
  return (
    <main className="min-h-screen bg-[#09090b] relative overflow-hidden">
      {/* Global background gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet-900/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        <Experience />

        {/* Projects Section */}
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Selected <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in computer vision,
              AI research, and innovative technology solutions.
            </p>
            <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold gradient-text-vibrant">MTS</span>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Muhammad Tanseef Shahid. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
