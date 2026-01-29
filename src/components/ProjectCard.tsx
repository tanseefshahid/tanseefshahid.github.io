"use client";

import { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors"
        >
            <div className="aspect-video bg-gray-900 relative overflow-hidden">
                {/* Placeholder for video/image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-mono text-sm">
                    [Visual Preview]
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />

                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-2 py-1 bg-white/20 text-white rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-6">
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <a
                    href={project.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                    View Project <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
            </div>
        </motion.div>
    );
}
