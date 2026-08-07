"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, type Project } from "@/lib/projectTypes";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const FEATURED_COUNT = 6;

/**
 * Browsing state is stashed here when a card is opened, so returning from a
 * project restores the same category, the same expanded/collapsed grid, and the
 * same scroll position. Session-scoped: a new tab starts clean.
 */
const STORAGE_KEY = "projects-grid-state";

type Stashed = { cat: string; showAll: boolean; scrollY?: number };

function readStash(): Stashed | null {
    try {
        const raw = sessionStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Stashed) : null;
    } catch {
        return null; // private mode / storage disabled
    }
}

function writeStash(value: Stashed) {
    try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
        /* non-fatal */
    }
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    const [cat, setCat] = useState<string>("All");
    const [showAll, setShowAll] = useState(false);

    // Scroll target carried from the stash until the restored grid has painted.
    const pendingScroll = useRef<number | null>(null);
    const [restored, setRestored] = useState(false);

    // Restore on mount. Deliberately an effect rather than a lazy useState
    // initialiser: the page is prerendered with the defaults, so reading storage
    // during the first render would break hydration.
    useEffect(() => {
        const stash = readStash();
        if (stash) {
            if (stash.cat) setCat(stash.cat);
            if (stash.showAll) setShowAll(true);
            if (typeof stash.scrollY === "number") pendingScroll.current = stash.scrollY;
            // Drop the scroll offset so a later fresh visit doesn't jump.
            writeStash({ cat: stash.cat, showAll: stash.showAll });
        }
        setRestored(true);
    }, []);

    // Once the restored filter/expansion has rendered, the page is tall enough
    // to scroll back to where the user left off.
    useEffect(() => {
        if (!restored || pendingScroll.current === null) return;
        const y = pendingScroll.current;
        pendingScroll.current = null;
        const raf = requestAnimationFrame(() => window.scrollTo(0, y));
        return () => cancelAnimationFrame(raf);
    }, [restored]);

    // Persist whenever the user changes the view, so state survives even if they
    // leave via the header or browser back rather than a project card.
    useEffect(() => {
        if (!restored) return;
        writeStash({ cat, showAll });
    }, [cat, showAll, restored]);

    const rememberBeforeLeaving = useCallback(() => {
        writeStash({ cat, showAll, scrollY: window.scrollY });
    }, [cat, showAll]);

    const filters = useMemo(() => ["All", ...CATEGORIES], []);

    const matched = useMemo(
        () => (cat === "All" ? projects : projects.filter((p) => p.category === cat)),
        [projects, cat]
    );

    // The "show more" affordance only applies to the unfiltered view; picking a
    // category is already a narrowing action, so show every match at once.
    const collapsed = cat === "All" && !showAll;
    const visible = collapsed ? matched.slice(0, FEATURED_COUNT) : matched;
    const hasMore = cat === "All" && projects.length > FEATURED_COUNT;

    return (
        <section id="projects" className="border-t border-rule">
            <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 md:py-18">
                <div className="mb-4.5">
                    <SectionHeading num="03">Selected Works</SectionHeading>
                </div>

                <p className="mb-8 max-w-[46em] text-[15px] leading-[1.6] text-ink-muted text-pretty md:text-[16px]">
                    A collection of projects spanning 3D reconstruction, SLAM, metrology, generative
                    AI, and real-time perception — bridging classical geometry with modern deep
                    learning.
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                    {filters.map((c) => {
                        const on = c === cat;
                        return (
                            <button
                                key={c}
                                type="button"
                                aria-pressed={on}
                                onClick={() => {
                                    setCat(c);
                                    setShowAll(false);
                                }}
                                className={`cursor-pointer rounded-[2px] border px-[15px] py-2.25 font-mono text-[11.5px] uppercase tracking-[0.08em] transition-colors ${
                                    on
                                        ? "border-ink bg-ink text-paper"
                                        : "border-rule-strong bg-transparent text-ink-muted hover:border-ink hover:text-ink"
                                }`}
                            >
                                {c === "All" ? `All · ${projects.length}` : c}
                            </button>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-2">
                    {visible.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onSelect={rememberBeforeLeaving}
                        />
                    ))}
                </div>

                {hasMore && (
                    <div className="mt-7 flex justify-center">
                        <button
                            type="button"
                            onClick={() => setShowAll((v) => !v)}
                            className="cursor-pointer rounded-[2px] border border-ink/70 px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
                        >
                            {showAll ? "Show fewer" : `Show all ${projects.length} projects`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
