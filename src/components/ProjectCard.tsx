import Link from "next/link";
import type { Project } from "@/lib/projectTypes";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Link
            href={project.link}
            className="flex flex-col gap-3.5 bg-paper-raised px-6 pt-7 pb-6.5 transition-colors hover:bg-paper-bright"
        >
            <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent">
                    {project.category}
                </span>
                <span className="font-mono text-[11px] text-ink-ghost">
                    {String(project.order).padStart(2, "0")}
                </span>
            </div>

            <h3 className="m-0 text-[17px] font-semibold leading-[1.3] text-ink text-pretty sm:text-[18px]">
                {project.title}
            </h3>

            {/* The project's own excerpt, clamped so cards stay even in the grid. */}
            <p className="m-0 line-clamp-4 text-[14.5px] leading-[1.6] text-ink-muted text-pretty">
                {project.description}
            </p>

            {project.tags.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-[2px] border border-rule-strong px-[7px] py-[3px] font-mono text-[10.5px] text-ink-muted"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </Link>
    );
}
