"use client";

import { useMemo, useState } from "react";
import { CATEGORIES, type Project } from "@/lib/projectTypes";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const FEATURED_COUNT = 6;

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    const [cat, setCat] = useState<string>("All");
    const [showAll, setShowAll] = useState(false);

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
                    <SectionHeading num="03">Selected Work</SectionHeading>
                </div>

                <p className="mb-8 max-w-[46em] text-[15px] leading-[1.6] text-ink-muted text-pretty md:text-[16px]">
                    Fourteen systems spanning 3D reconstruction, SLAM, metrology, generative AI, and
                    real-time perception. Filter by domain.
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
                        <ProjectCard key={project.id} project={project} />
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
