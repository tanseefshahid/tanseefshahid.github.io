/**
 * Types and constants shared by server and client components.
 *
 * Kept free of `fs`/`path` imports so client components (e.g. the filterable
 * project grid) can import from here without pulling Node built-ins into the
 * browser bundle. Filesystem reads live in `./projects`.
 */

export const CATEGORIES = ["3D & SLAM", "Perception", "Generative 3D"] as const;
export type Category = (typeof CATEGORIES)[number];

export type Project = {
    id: string;
    title: string;
    /** Long-form summary, used by the portfolio PDF and page metadata. */
    description: string;
    /** Short card copy. Falls back to `description` when absent. */
    blurb: string;
    category: Category | "";
    tags: string[];
    imageUrl?: string;
    videoUrl?: string;
    link: string;
    content: string;
    date: string;
    collection: string;
    /** 1-based position in the curated running order, for the "01 / 14" label. */
    order: number;
    company: string;
    role: string;
    period: string;
    location: string;
};
