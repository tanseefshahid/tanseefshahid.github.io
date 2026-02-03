import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
    videoUrl?: string;
    link?: string;
    content?: string;
};

export function getSortedProjectsData(): Project[] {
    // Get file names under /content/projects
    if (!fs.existsSync(projectsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames
        .filter((fileName) => fileName.match(/\.en\.md$/)) // STRICTLY Filter only .en.md files to avoid duplicates
        .map((fileName) => {
            // Remove ".en.md" from file name to get id
            const id = fileName.replace(/\.en\.md$/, "");

            // Read markdown file as string
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse the post metadata section
            const { data, content } = matter(fileContents);

            // Combine the data with the id
            return {
                id,
                title: data.title || "Untitled Project",
                description: data.excerpt || "No description available",
                tags: data.tags || [],
                imageUrl: data.image || undefined,
                link: `/projects/${id}`,
                content: content,
                date: data.date || "",
                collection: data.collection || "",
            };
        });

    // Sort projects: 0a, 0b, 0c first, then 01, 02, 03...
    return allProjectsData.sort((a: any, b: any) => {
        // Extract the suffix after "portfolio-" (e.g., "0a", "01", "10")
        const suffixA = a.id.replace('portfolio-', '');
        const suffixB = b.id.replace('portfolio-', '');

        // Check if suffix starts with "0" followed by a letter (0a, 0b, 0c)
        const isLetterA = /^0[a-z]$/i.test(suffixA);
        const isLetterB = /^0[a-z]$/i.test(suffixB);

        // Letter suffixes come first
        if (isLetterA && !isLetterB) return -1;
        if (!isLetterA && isLetterB) return 1;

        // If both are letter suffixes, sort alphabetically
        if (isLetterA && isLetterB) {
            return suffixA.localeCompare(suffixB);
        }

        // Otherwise, sort numerically
        const numA = parseInt(suffixA, 10) || 0;
        const numB = parseInt(suffixB, 10) || 0;
        return numA - numB;
    });
}

export function getProjectData(id: string) {
    // Try to find the ENGLISH file first.
    let fullPath = path.join(projectsDirectory, `${id}.en.md`);
    if (!fs.existsSync(fullPath)) {
        // Fallback to generic .md
        fullPath = path.join(projectsDirectory, `${id}.md`);
    }

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        id,
        content,
        title: data.title,
        description: data.excerpt,
        tags: data.tags || [],
        imageUrl: data.image,
        date: data.date,
        ...data,
    };
}
