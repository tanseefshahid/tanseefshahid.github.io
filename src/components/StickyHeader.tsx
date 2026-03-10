"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = ["Expertise", "Skills", "Experience", "Projects"];

export default function StickyHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (item: string) => {
        const el = document.getElementById(item.toLowerCase());
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setMobileMenuOpen(false);
    };

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

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none"
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    {process.env.NODE_ENV === 'development' && (
                        <Link
                            href="/resume"
                            className="px-5 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all"
                        >
                            Resume
                        </Link>
                    )}

                    {/* Mobile hamburger button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 bg-transparent border-none cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden glass-strong border-t border-white/10"
                    >
                        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
                            {navItems.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none text-left py-2"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
