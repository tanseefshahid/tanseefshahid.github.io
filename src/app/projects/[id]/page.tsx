import type { Metadata } from "next";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Children, isValidElement, type ReactNode } from "react";

import StickyHeader from "@/components/StickyHeader";
import SiteFooter from "@/components/SiteFooter";
import {
    getProjectData,
    getProjectNeighbours,
    getSortedProjectsData,
} from "@/lib/projects";
import { prepareProjectContent, slugifyHeading } from "@/lib/projectContent";

export async function generateStaticParams() {
    return getSortedProjectsData().map((project) => ({ id: project.id }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = getProjectData(id);

    if (!project) return { title: "Project not found" };

    return {
        title: `${project.title} | Muhammad Tanseef Shahid`,
        description: project.description,
    };
}

/** Flattens rendered markdown children back to plain text for anchor ids. */
function toText(node: ReactNode): string {
    if (node == null || typeof node === "boolean") return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) return node.map(toText).join("");
    if (isValidElement(node)) {
        return toText((node.props as { children?: ReactNode }).children);
    }
    return "";
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = getProjectData(id);

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-paper">
                <div className="text-center">
                    <h1 className="mb-4 text-2xl font-semibold text-ink">Project not found</h1>
                    <Link href="/#projects" className="font-mono text-[13px] text-accent">
                        ← All projects
                    </Link>
                </div>
            </main>
        );
    }

    const { body, headings } = prepareProjectContent(project.content, project.imageUrl);
    const { prev, next, position, total } = getProjectNeighbours(id);

    const meta = [
        { label: "Company", value: project.company },
        { label: "Role", value: project.role },
        { label: "Period", value: project.period },
        { label: "Location", value: project.location },
    ].filter((m) => m.value);

    // Track heading occurrences so ids match the TOC's de-duplication.
    const seen = new Map<string, number>();

    return (
        <main className="min-h-screen bg-paper">
            <StickyHeader />

            <article>
                {/* Title block */}
                <section className="mx-auto max-w-[1120px] px-5 pt-12 pb-10 sm:px-8 md:pt-18">
                    <div className="mb-6 flex flex-wrap items-center gap-3.5">
                        <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-accent">
                            {project.category}
                        </span>
                        <span className="block h-px w-6 bg-rule-strong" aria-hidden="true" />
                        <span className="font-mono text-[11.5px] text-ink-ghost">
                            PROJECT {String(position).padStart(2, "0")} / {total}
                        </span>
                    </div>

                    <h1 className="mb-6 max-w-[22em] text-[30px] font-semibold leading-[1.08] tracking-[-0.025em] text-pretty sm:text-[38px] md:text-[50px]">
                        {project.title}
                    </h1>

                    <p className="mb-8 max-w-[40em] text-[17px] leading-[1.6] text-ink-soft text-pretty md:text-[19px]">
                        {project.description}
                    </p>

                    {project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-[2px] border border-rule-strong px-2.5 py-[5px] font-mono text-[11.5px] text-ink-muted"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </section>

                {/* Meta bar */}
                {meta.length > 0 && (
                    <section className="mx-auto max-w-[1120px] px-5 pb-12 sm:px-8">
                        <dl className="grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
                            {meta.map(({ label, value }) => (
                                <div key={label} className="bg-paper-raised px-5.5 py-5">
                                    <dt className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
                                        {label}
                                    </dt>
                                    <dd className="m-0 text-[15.5px] font-medium text-ink">{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                )}

                {/* Hero figure */}
                {project.imageUrl && (
                    <section className="mx-auto max-w-[1120px] px-5 pb-14 sm:px-8">
                        <figure className="m-0">
                            <div className="border border-rule bg-paper-raised p-4 sm:p-7">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.imageUrl}
                                    alt={`${project.title} — architecture diagram`}
                                    className="block h-auto w-full"
                                />
                            </div>
                            <figcaption className="mt-3 font-mono text-[11.5px] tracking-[0.06em] text-ink-faint">
                                FIG. 01 — SYSTEM ARCHITECTURE
                            </figcaption>
                        </figure>
                    </section>
                )}

                {/* Body */}
                <section className="border-t border-rule">
                    <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 md:py-16">
                        <div className="grid items-start gap-10 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-12">
                            {headings.length > 1 && (
                                <div className="hidden lg:block lg:sticky lg:top-23">
                                    <div className="mb-3.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
                                        Contents
                                    </div>
                                    <nav className="flex flex-col gap-2.25 border-l border-rule pl-3.5">
                                        {headings.map((h) => (
                                            <a
                                                key={h.id}
                                                href={`#${h.id}`}
                                                className="text-[13.5px] text-ink-muted transition-colors hover:text-accent"
                                            >
                                                {h.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            <div className="prose max-w-[44em]">
                                <ReactMarkdown
                                    rehypePlugins={[rehypeRaw]}
                                    components={{
                                        h2: ({ children }) => {
                                            const base = slugifyHeading(
                                                toText(children).replace(/:$/, "")
                                            );
                                            const n = seen.get(base) ?? 0;
                                            seen.set(base, n + 1);
                                            return (
                                                <h2 id={n === 0 ? base : `${base}-${n}`}>
                                                    {children}
                                                </h2>
                                            );
                                        },
                                    }}
                                >
                                    {body}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Prev / next */}
                {(prev || next) && (
                    <section className="border-t border-rule">
                        <div className="mx-auto max-w-[1120px] px-5 py-12 sm:px-8">
                            <div className="grid grid-cols-1 gap-px border border-rule bg-rule md:grid-cols-2">
                                {prev && (
                                    <Link
                                        href={prev.link}
                                        className="flex flex-col gap-2 bg-paper-raised p-6 transition-colors hover:bg-paper-bright"
                                    >
                                        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
                                            ← Previous
                                        </span>
                                        <span className="text-[16px] font-semibold leading-[1.35] text-ink text-pretty sm:text-[17px]">
                                            {prev.title}
                                        </span>
                                    </Link>
                                )}
                                {next && (
                                    <Link
                                        href={next.link}
                                        className="flex flex-col items-start gap-2 bg-paper-raised p-6 transition-colors hover:bg-paper-bright md:items-end md:text-right"
                                    >
                                        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
                                            Next →
                                        </span>
                                        <span className="text-[16px] font-semibold leading-[1.35] text-ink text-pretty sm:text-[17px]">
                                            {next.title}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </section>
                )}
            </article>

            <SiteFooter
                heading="Want the deeper walkthrough?"
                body="Happy to talk through the architecture, the tolerance budget, and the cycle-time tradeoffs behind this system."
                backLink={{ href: "/#projects", label: "PORTFOLIO INDEX →" }}
            />
        </main>
    );
}
