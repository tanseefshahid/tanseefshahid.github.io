"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden text-white">
            {/* Background Gradient/Mesh effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-20%] h-[70vh] w-[70vh] rounded-full bg-purple-900/30 blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-20%] h-[70vh] w-[70vh] rounded-full bg-blue-900/30 blur-[120px]" />
            </div>

            <div className="z-10 text-center px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-light tracking-widest text-cyan-400 mb-4 uppercase">
                        Computer Vision Engineer
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
                        Muhammad Tanseef Shahid
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
                        Welcome to my portfolio! I am Muhammad Tanseef Shahid, a passionate AI researcher and computer vision specialist with 5 years of experience in developing innovative solutions at the intersection of computer vision, 3D reconstruction, and generative AI.
                    </p>
                    <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
                        My expertise spans a wide range of cutting-edge technologies, including virtual fitting systems, 3D avatar modeling, pose estimation, object segmentation, object detection, recognition, and classification.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center gap-6"
                >
                    <a
                        href="https://github.com/tanseefshahid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/muhammad-tanseef-shahid-58a435141/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="mailto:mtanseefshahid@gmail.com"
                        className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-110 transition-all"
                    >
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
            </motion.div>
        </section>
    );
}
