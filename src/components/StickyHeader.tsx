"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyHeader() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`print:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "glass-strong py-4 border-b border-white/10 shadow-lg shadow-black/20"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        MTS<span className="text-white">.</span>
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {["Expertise", "Skills", "Experience", "Projects"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/resume"
                        className="px-5 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all"
                    >
                        Resume
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
