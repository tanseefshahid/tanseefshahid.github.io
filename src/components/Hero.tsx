"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 z-0">
                {/* Primary gradient orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-30%] left-[-20%] h-[80vh] w-[80vh] rounded-full bg-violet-600/30 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.2, 0.4],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[20%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-cyan-500/25 blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[-20%] left-[30%] h-[70vh] w-[70vh] rounded-full bg-fuchsia-600/20 blur-[120px]"
                />

                {/* Subtle grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            <div className="z-10 text-center px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Role Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass border border-cyan-500/20"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-sm font-medium tracking-wide text-cyan-300">
                            3D Metrology & AI Engineer
                        </span>
                    </motion.div>

                    {/* Name with Gradient */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
                        <span className="text-white">Muhammad</span>
                        <br />
                        <span className="gradient-text-vibrant">Tanseef Shahid</span>
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6 leading-relaxed">
                        Passionate AI researcher specializing in{" "}
                        <span className="text-cyan-400 font-medium">3D Metrology</span>,{" "}
                        <span className="text-violet-400 font-medium">3D Reconstruction</span>, and{" "}
                        <span className="text-fuchsia-400 font-medium">Computer Vision</span> with 5+ years
                        of experience building innovative inspection and AI-powered systems.
                    </p>

                    <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
                        Expertise in virtual fitting systems, 3D avatar modeling, pose estimation,
                        object detection, and segmentation.
                    </p>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center gap-4"
                >
                    {[
                        { href: "https://github.com/tanseefshahid", icon: Github, label: "GitHub" },
                        { href: "https://linkedin.com/in/muhammad-tanseef-shahid-58a435141/", icon: Linkedin, label: "LinkedIn" },
                        { href: "mailto:mtanseefshahid@gmail.com", icon: Mail, label: "Email" },
                    ].map(({ href, icon: Icon, label }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto") ? undefined : "_blank"}
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300"
                        >
                            <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                {label}
                            </span>
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 rounded-xl bg-cyan-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}
