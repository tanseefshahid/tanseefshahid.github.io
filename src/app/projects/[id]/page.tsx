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
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <h1>Project not found</h1>
            </div>
        );
    }

    return (
        <main className="bg-black min-h-screen text-white pt-24 pb-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    {project.title}
                </h1>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags && project.tags.map((tag: string) => (
                        <span key={tag} className="text-sm px-3 py-1 bg-white/10 text-white rounded-full border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>

                {project.imageUrl && (
                    <div className="mb-12 rounded-xl overflow-hidden border border-white/10">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
                    </div>
                )}

                <div className="prose prose-invert prose-lg max-w-none">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {project.content}
                    </ReactMarkdown>
                </div>
            </div>
        </main>
    );
}
