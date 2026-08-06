import fs from "fs";
import path from "path";
import matter from "gray-matter";

import type { Project } from "./projectTypes";

const projectsDirectory = path.join(process.cwd(), "content/projects");

// Re-exported for server components, which can import everything from one place.
// Client components must import these from "./projectTypes" directly — importing
// from here would drag `fs` into the browser bundle.
export { CATEGORIES } from "./projectTypes";
export type { Category, Project } from "./projectTypes";

function readProject(fileName: string): Project {
    const id = fileName.replace(/\.en\.md$/, "");
    const fullPath = path.join(projectsDirectory, fileName);
    const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));

    const description = data.excerpt || "No description available";

    return {
        id,
        title: data.title || "Untitled Project",
        description,
        blurb: data.blurb || description,
        category: data.category || "",
        tags: data.tags || [],
        imageUrl: data.teaser || data.image || undefined,
        link: `/projects/${id}`,
        content,
        date: data.date || "",
        collection: data.collection || "",
        order: typeof data.order === "number" ? data.order : Number.MAX_SAFE_INTEGER,
        company: data.company || "",
        role: data.role || "",
        period: data.period || "",
        location: data.location || "",
    };
}

/**
 * All projects in curated running order.
 *
 * Order comes from the `order:` frontmatter key, which leads with the recent
 * C++/3D metrology work rather than the older ML work. Files without an
 * explicit order fall to the end, tie-broken by id so the sort stays stable.
 */
export function getSortedProjectsData(): Project[] {
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    return fs
        .readdirSync(projectsDirectory)
        .filter((fileName) => fileName.match(/\.en\.md$/)) // .en.md only — .ko.md/.md are duplicates
        .map(readProject)
        .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
}

export function getProjectData(id: string): Project | null {
    if (!fs.existsSync(path.join(projectsDirectory, `${id}.en.md`))) {
        return null;
    }
    return readProject(`${id}.en.md`);
}

/**
 * Previous/next neighbours in the curated order, wrapping at both ends so the
 * detail-page footer never renders a dead link.
 */
export function getProjectNeighbours(id: string): {
    prev: Project | null;
    next: Project | null;
    position: number;
    total: number;
} {
    const all = getSortedProjectsData();
    const i = all.findIndex((p) => p.id === id);

    if (i === -1) {
        return { prev: null, next: null, position: 0, total: all.length };
    }

    return {
        prev: all[(i - 1 + all.length) % all.length] ?? null,
        next: all[(i + 1) % all.length] ?? null,
        position: i + 1,
        total: all.length,
    };
}
