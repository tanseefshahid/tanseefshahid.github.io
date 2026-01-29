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
        .filter((fileName) => fileName.match(/\.md$/) && !fileName.includes(".ko.md")) // Filter only english markdown files
        .map((fileName) => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.md$/, "").replace(/\.en$/, "");

            // Read markdown file as string
            const fullPath = path.join(projectsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");

            // Use gray-matter to parse the post metadata section
            const { data, content } = matter(fileContents);

            // Combine the data with the id
            return {
                id,
                title: data.title || "Untitled Project",
                description: data.excerpt || "No description available", // Use excerpt if available, or we might need to truncate content
                tags: data.tags || [],
                imageUrl: data.image || undefined, // Map frontmatter 'image' to imageUrl
                link: `/projects/${id}`, // Internal link to details page
                content: content,
                date: data.date || "",
                collection: data.collection || "",
            };
        });

    // Sort projects by date if available, or filename
    return allProjectsData.sort((a: any, b: any) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getProjectData(id: string) {
    // Try to find the file. It might have .en.md or .md extension
    let fullPath = path.join(projectsDirectory, `${id}.md`);
    if (!fs.existsSync(fullPath)) {
        fullPath = path.join(projectsDirectory, `${id}.en.md`);
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
