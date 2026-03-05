import { getProjectData, getSortedProjectsData } from "@/lib/projects";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
    const projects = getSortedProjectsData();
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project: any = getProjectData(id);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#070A12] text-white flex items-center justify-center">
                <h1 className="text-2xl font-bold">Project not found</h1>
            </div>
        );
    }

    return (
        <main className="bg-[#070A12] min-h-screen text-white pt-24 pb-12 px-4 md:px-8 relative overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 glass-strong p-8 md:p-12 rounded-3xl mt-8">
                <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mb-10 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20 w-fit">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
                </Link>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-sans">
                    <span className="text-white">{project.title}</span><span className="text-cyan-400">.</span>
                </h1>

                <div className="flex flex-wrap gap-2 mb-12">
                    {project.tags && project.tags.map((tag: string) => (
                        <span key={tag} className="text-sm px-4 py-1.5 bg-white/5 text-cyan-50 rounded-full border border-white/10 shadow-sm backdrop-blur-md">
                            {tag}
                        </span>
                    ))}
                </div>

                {project.imageUrl && (
                    <div className="mb-14 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070A12]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
                    </div>
                )}

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-sans prose-headings:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-img:rounded-xl">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {project.content}
                    </ReactMarkdown>
                </div>
            </div>
        </main>
    );
}
