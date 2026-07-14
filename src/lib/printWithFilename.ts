/**
 * Triggers browser print/save-as-PDF with a custom filename.
 *
 * Most browsers default the PDF filename to `document.title`. We temporarily
 * override the title for the duration of the print dialog, then restore it.
 *
 * Pass a slug like "Apera-AI" or "CADflow" — the function builds the full
 * filename: `Resume-Muhammad-Tanseef-Shahid-{slug}.pdf` (LinkedIn-style).
 */
export function printWithFilename(slug: string, kind: "Resume" | "Cover-Letter" | "Portfolio" = "Resume") {
    const originalTitle = document.title;
    const safeSlug = slug.replace(/\s+/g, "-").replace(/[^A-Za-z0-9-]/g, "");
    document.title = `${kind}-Muhammad-Tanseef-Shahid-${safeSlug}`;
    window.print();
    // Restore on next tick so the print dialog has time to read the new title
    setTimeout(() => {
        document.title = originalTitle;
    }, 100);
}
