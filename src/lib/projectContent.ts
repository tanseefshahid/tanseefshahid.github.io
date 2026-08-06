/**
 * Prepares raw project markdown for the web detail page.
 *
 * The same markdown also feeds the portfolio PDF, which renders it verbatim, so
 * nothing here mutates the source file — the transforms are display-only:
 *
 *  - the hero image is hoisted out of the body into a captioned <figure>
 *  - the trailing "## Company" prose block is dropped, because that metadata is
 *    now rendered as a structured meta bar from frontmatter
 *  - the remaining "## " headings become the sticky table of contents
 */

export type Heading = { id: string; text: string };

export function slugifyHeading(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
}

/** Removes the wrapper div holding the teaser image, so it isn't rendered twice. */
function stripHeroImage(body: string, imageUrl?: string): string {
    if (!imageUrl) return body;

    const escaped = imageUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // The teaser is always wrapped in a centering <div>, but tolerate a bare
    // <img> or a markdown image in case a file drifts from that convention.
    const patterns = [
        new RegExp(`<div[^>]*>\\s*<img[^>]*src="${escaped}"[^>]*>\\s*</div>`, "i"),
        new RegExp(`<img[^>]*src="${escaped}"[^>]*>`, "i"),
        new RegExp(`!\\[[^\\]]*\\]\\(${escaped}\\)`, "i"),
    ];

    for (const re of patterns) {
        if (re.test(body)) return body.replace(re, "").replace(/\n{3,}/g, "\n\n");
    }
    return body;
}

/** Drops the trailing "## Company" section and everything under it. */
function stripCompanySection(body: string): string {
    return body.replace(/\n##\s+Company\s*\n[\s\S]*$/i, "\n").replace(/\s+$/, "");
}

export function extractHeadings(body: string): Heading[] {
    const seen = new Map<string, number>();

    return [...body.matchAll(/^##\s+(.+?)\s*$/gm)].map(([, raw]) => {
        const text = raw.replace(/:$/, "");
        const base = slugifyHeading(text);

        // Guard against duplicate headings colliding on the same anchor id.
        const n = seen.get(base) ?? 0;
        seen.set(base, n + 1);

        return { id: n === 0 ? base : `${base}-${n}`, text };
    });
}

export function prepareProjectContent(content: string, imageUrl?: string) {
    const body = stripCompanySection(stripHeroImage(content, imageUrl));
    return { body, headings: extractHeadings(body) };
}
