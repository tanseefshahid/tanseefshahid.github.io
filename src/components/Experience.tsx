"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-cyan-400" /> Professional Experience
                </h2>

                <div className="border-l-2 border-white/10 pl-8 space-y-12">
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-cyan-500 border-4 border-black" />
                        <h3 className="text-xl font-bold">SLAM Engineer</h3>
                        <p className="text-cyan-400 mb-2">Luxolis • Apr 2025 - Present</p>
                        <p className="text-gray-400">
                            Leading research and development in SLAM and 3D reconstruction technologies.
                            Specializing in real-time defect detection and industrial automation systems.
                        </p>
                    </div>
                    {/* Add more experience items here based on CV */}
                </div>

                <h2 className="text-3xl font-bold mt-20 mb-12 flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-purple-400" /> Education
                </h2>

                <div className="border-l-2 border-white/10 pl-8 space-y-12">
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-black" />
                        <h3 className="text-xl font-bold">Inha University</h3>
                        <p className="text-purple-400 mb-2">Master's Degree, Information and Communication Engineering • 2018 - 2020</p>
                        <p className="text-gray-400">
                            Thesis: Generative AI for Virtual Try-On
                        </p>
                    </div>
                </div>

            </motion.div>
        </section >
    );
}
