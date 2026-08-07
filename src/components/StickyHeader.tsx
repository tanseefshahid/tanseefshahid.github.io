"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
    { href: "/#expertise", label: "Expertise" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
];

export default function StickyHeader() {
    const [open, setOpen] = useState(false);

    // Lock body scroll while the mobile sheet is open.
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 border-b border-rule bg-paper/[0.88] backdrop-blur-[10px]">
            <div className="mx-auto flex h-15 max-w-[1120px] items-center justify-between gap-6 px-5 sm:px-8">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-mono text-[13px] font-medium tracking-[0.08em] text-ink transition-colors hover:text-accent"
                >
                    <span className="block h-[7px] w-[7px] bg-accent" aria-hidden="true" />
                    <span className="hidden xs:inline">M. TANSEEF SHAHID</span>
                    <span className="xs:hidden">M.T. SHAHID</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden items-center gap-7 md:flex">
                    {NAV.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-[13.5px] text-ink-muted transition-colors hover:text-accent"
                        >
                            {label}
                        </Link>
                    ))}

                    {process.env.NODE_ENV === "development" && (
                        <>
                            <Link
                                href="/resume"
                                className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-ghost transition-colors hover:text-accent"
                            >
                                Resume
                            </Link>
                            <Link
                                href="/portfolio-pdf"
                                className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-ghost transition-colors hover:text-accent"
                            >
                                PDF
                            </Link>
                        </>
                    )}

                    {/* Points at the contact footer rather than a mailto: — a bare
                        mailto silently dead-ends on machines with no mail handler. */}
                    <Link
                        href="/#contact"
                        className="rounded-[2px] border border-ink/70 px-[15px] py-[7px] text-[13px] font-medium text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                    >
                        Get in touch
                    </Link>
                </nav>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    className="-mr-2 p-2 text-ink md:hidden"
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile sheet */}
            {open && (
                <div className="border-t border-rule bg-paper md:hidden">
                    <nav className="mx-auto flex max-w-[1120px] flex-col px-5 py-2 sm:px-8">
                        {NAV.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className="border-b border-rule-soft py-3.5 text-[15px] text-ink-soft transition-colors hover:text-accent"
                            >
                                {label}
                            </Link>
                        ))}

                        {process.env.NODE_ENV === "development" && (
                            <>
                                <Link
                                    href="/resume"
                                    onClick={() => setOpen(false)}
                                    className="border-b border-rule-soft py-3.5 text-[15px] text-ink-ghost"
                                >
                                    Resume (dev)
                                </Link>
                                <Link
                                    href="/portfolio-pdf"
                                    onClick={() => setOpen(false)}
                                    className="border-b border-rule-soft py-3.5 text-[15px] text-ink-ghost"
                                >
                                    Portfolio PDF (dev)
                                </Link>
                            </>
                        )}

                        <Link
                            href="/#contact"
                            onClick={() => setOpen(false)}
                            className="my-4 rounded-[2px] bg-ink px-5 py-3 text-center text-[14px] font-medium text-paper"
                        >
                            Get in touch
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
