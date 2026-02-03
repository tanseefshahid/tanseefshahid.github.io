"use client";

import { Project } from "@/lib/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative"
        >
            <div className="relative glass-strong rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-cyan-500/50 via-violet-500/50 to-fuchsia-500/50" />
                </div>

                {/* Image/Video Container */}
                <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
                    {project.imageUrl ? (
                        <>
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="p-4 rounded-full glass">
                                <Play className="w-8 h-8 text-gray-500" />
                            </div>
                        </div>
                    )}

                    {/* Title and Tags overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 4).map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-300 border border-white/10"
                                >
                                    {tag}
                                </span>
                            ))}
                            {project.tags.length > 4 && (
                                <span className="text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-gray-400 border border-white/10">
                                    +{project.tags.length - 4}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/5 rounded-full blur-3xl -translate-y-1/2" />

                    <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-2 relative">
                        {project.description}
                    </p>

                    <Link
                        href={project.link || "#"}
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                    >
                        <span>View Project</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
