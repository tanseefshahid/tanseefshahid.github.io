"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experiences = [
    {
        title: "3D Metrology & AI Engineer",
        company: "Hyvision",
        location: "Seoul, South Korea",
        period: "Aug 2025 - Present",
        description: "Building 3D inspection systems with laser scanning and point cloud analysis, PolyWorks-style alignment tools, and a 3D rendering engine with node-based workflow editor for inspection automation.",
        current: true,
    },
    {
        title: "SLAM Engineer",
        company: "Luxolis",
        location: "Seoul, South Korea",
        period: "Apr 2025 - Jul 2025",
        description: "Developed SLAM and 3D reconstruction solutions for industrial applications.",
        current: false,
    },
    {
        title: "Senior AI Researcher",
        company: "PERSPECTIVE Corp.",
        location: "Seoul, South Korea",
        period: "Apr 2022 - Apr 2025",
        description: "Leading research in Virtual Fitting, Image-to-3D Reconstruction, Object Classification, Image Segmentation, and FaceSwap technologies.",
        current: false,
    },
    {
        title: "Computer Vision Researcher",
        company: "Ellexi",
        location: "Seoul, South Korea",
        period: "Nov 2019 - Oct 2021",
        description: "Focused on Object Detection, Classification, Tracking, Segmentation, and Training Data Generation.",
        current: false,
    },
];

const education = [
    {
        degree: "M.S. in Computer Vision",
        school: "Chung-Ang University",
        location: "Seoul, South Korea",
        period: "Sep 2019",
        description: "Specializing in advanced computer vision techniques.",
    },
    {
        degree: "B.S. in Electronics Engineering",
        school: "GIK Institute Pakistan",
        location: "Pakistan",
        period: "July 2016",
        description: "",
    },
];

export default function Experience() {
    return (
        <section className="relative py-24 px-4 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Experience Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 rounded-xl glass glow-cyan">
                            <Briefcase className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Professional Experience
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="glass-strong rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300">
                                    {/* Current indicator */}
                                    {exp.current && (
                                        <div className="absolute -top-px -left-px -right-px h-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-transparent rounded-t-2xl" />
                                    )}

                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                                    {exp.title}
                                                </h3>
                                                {exp.current && (
                                                    <span className="px-2 py-0.5 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full">
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-lg text-violet-400 font-medium mb-3">
                                                {exp.company}
                                            </p>
                                            <p className="text-gray-400 leading-relaxed">
                                                {exp.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-col gap-2 text-sm text-gray-500 md:text-right shrink-0">
                                            <div className="flex items-center gap-2 md:justify-end">
                                                <Calendar className="w-4 h-4" />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2 md:justify-end">
                                                <MapPin className="w-4 h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Education Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 rounded-xl glass glow-purple">
                            <GraduationCap className="w-6 h-6 text-violet-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Education
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="glass-strong rounded-2xl p-6 h-full hover:bg-white/[0.08] transition-all duration-300 relative overflow-hidden">
                                    {/* Gradient accent */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                    <div className="relative">
                                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors">
                                            {edu.school}
                                        </h3>
                                        <p className="text-violet-400 font-medium mb-3">
                                            {edu.degree}
                                        </p>
                                        {edu.description && (
                                            <p className="text-gray-400 text-sm mb-4">
                                                {edu.description}
                                            </p>
                                        )}
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{edu.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{edu.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
