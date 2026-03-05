"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Programming",
        subcategories: [
            {
                label: "Languages:",
                skills: ["Python", "C++", "C#", "C", "TypeScript", "MATLAB"],
            },
        ],
    },
    {
        title: "Libraries",
        subcategories: [
            {
                label: "",
                skills: [
                    "PyTorch",
                    "TensorFlow",
                    "Keras",
                    "OpenCV",
                    "NumPy",
                    "Pandas",
                    "Scikit-learn",
                    "Open3D",
                    "Matplotlib",
                    "SciPy",
                ],
            },
        ],
    },
    {
        title: "Frameworks / Models",
        subcategories: [
            {
                label: "Detection:",
                skills: ["YOLO", "Fast R-CNN", "Detectron2"],
            },
            {
                label: "Segmentation:",
                skills: ["U-Net", "SegNExt"],
            },
            {
                label: "Neural Networks:",
                skills: ["CNN", "DNN", "RNN", "GAN"],
            },
            {
                label: "Architectures:",
                skills: ["MobileNet", "NFNet", "VGG", "BERT"],
            },
            {
                label: "Platforms:",
                skills: ["Hugging Face", "ROS"],
            },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
                        Technical <span className="gradient-text-vibrant">Skills</span><span className="text-cyan-400">.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tooling and frameworks used across industrial inspection and deep learning systems.
                    </p>
                    <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.15, duration: 0.5 }}
                            className="p-6 rounded-2xl glass-strong hover:bg-white/[0.08] transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-5">
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.subcategories.map((sub, subIndex) => (
                                    <div key={subIndex}>
                                        {sub.label && (
                                            <p className="text-cyan-400 text-sm font-medium mb-2">
                                                {sub.label}
                                            </p>
                                        )}
                                        <div className="flex flex-wrap gap-2">
                                            {sub.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all duration-200"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
