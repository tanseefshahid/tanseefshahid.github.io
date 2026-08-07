import Link from "next/link";
import EmailButton from "./EmailButton";

export default function SiteFooter({
    heading = (
        <>
            Open to 3D vision
            <br />
            and metrology roles.
        </>
    ),
    body = "Seoul-based, open to remote and relocation. Happy to walk through any system above in detail.",
    backLink,
}: {
    heading?: React.ReactNode;
    body?: string;
    /** Bottom-right link. Defaults to a back-to-top anchor. */
    backLink?: { href: string; label: string };
}) {
    const link = backLink ?? { href: "#top", label: "BACK TO TOP ↑" };

    return (
        <footer id="contact" className="border-t border-ink bg-ink text-paper">
            <div className="mx-auto max-w-[1120px] px-5 pt-14 pb-9 sm:px-8 md:pt-16">
                <div className="grid items-end gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-12">
                    <div>
                        <h2 className="mb-3.5 text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[32px] md:text-[36px]">
                            {heading}
                        </h2>
                        <p className="m-0 max-w-[34em] text-[15px] leading-[1.6] text-paper/70 md:text-[16px]">
                            {body}
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-2.5">
                        <EmailButton tone="dark" />
                        <a
                            href="https://www.linkedin.com/in/muhammad-tanseef-shahid/"
                            target="_blank"
                            rel="noreferrer"
                            className="whitespace-nowrap rounded-[2px] border border-paper/30 px-5.5 py-3 text-[14px] font-medium text-paper transition-colors hover:border-paper"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-paper/20 pt-5.5 font-mono text-[11.5px] tracking-[0.06em] text-paper/60 sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} MUHAMMAD TANSEEF SHAHID</span>
                    {link.href.startsWith("#") ? (
                        <a href={link.href} className="transition-colors hover:text-paper">
                            {link.label}
                        </a>
                    ) : (
                        <Link href={link.href} className="transition-colors hover:text-paper">
                            {link.label}
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    );
}
