"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Code, Layers, Video, Zap } from "lucide-react";

const expertiseAreas = [
    {
        title: "3D Metrology",
        description: "Point cloud processing, precision alignment, and 3D geometric dimensioning & tolerancing (GD&T).",
        icon: Layers,
    },
    {
        title: "Computer Vision",
        description: "Object detection, image segmentation, face alignment, and classical vision algorithms.",
        icon: Eye,
    },
    {
        title: "3D Reconstruction",
        description: "Image-to-3D, multiview stereo, NeRFs, and surface mesh generation.",
        icon: Video,
    },
    {
        title: "Deep Learning",
        description: "PyTorch, model optimization, transfer learning, and training data generation architectures.",
        icon: Cpu,
    },
    {
        title: "Software Engineering",
        description: "C++, C#, Python, Next.js. Building scalable industrial and web applications.",
        icon: Code,
    },
    {
        title: "Optimization & AI",
        description: "CUDA acceleration, real-time edge AI, and high-performance computing solutions.",
        icon: Zap,
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="relative py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
                        Core <span className="gradient-text-vibrant">Expertise</span><span className="text-cyan-400">.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Bridging the gap between mathematical metrology and modern artificial intelligence to build robust, high-precision systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl glass-strong hover:bg-white/[0.08] transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                                <area.icon className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {area.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
