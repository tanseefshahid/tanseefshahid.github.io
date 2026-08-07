const FACTS: { label: string; value: string }[] = [
    { label: "Experience", value: "6+ years" },
    { label: "Precision", value: "Sub-millimeter" },
    { label: "Systems shipped", value: "14 documented" },
    { label: "Education", value: "M.S. Computer Vision" },
    { label: "Based in", value: "Seoul, South Korea" },
    { label: "Core stack", value: "C++ / PCL · Python · .NET 8" },
];

export default function Hero() {
    return (
        <section id="top" className="mx-auto max-w-[1120px] px-5 pt-16 pb-14 sm:px-8 md:pt-24 md:pb-18">
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-18">
                <div>
                    <p className="mb-6 font-mono text-[11.5px] uppercase tracking-[0.16em] text-accent md:mb-6.5">
                        3D Computer Vision · AI · Robotics · Generative Systems
                    </p>

                    {/* Sized so "Muhammad Tanseef" stays on one line at every breakpoint —
                        the two-column grid narrows this column to ~493px at lg. */}
                    <h1 className="mb-7 text-[36px] font-semibold leading-[1.04] tracking-[-0.03em] sm:text-[48px] md:text-[56px] lg:text-[50px] xl:text-[58px]">
                        Muhammad Tanseef
                        <br />
                        Shahid
                    </h1>

                    <p className="mb-4.5 max-w-[34em] text-[17px] leading-[1.6] text-ink-soft text-pretty md:text-[19px]">
                        Engineer and researcher across{" "}
                        <strong className="font-semibold text-ink">3D Reconstruction</strong>,{" "}
                        <strong className="font-semibold text-ink">SLAM &amp; Metrology</strong>,{" "}
                        <strong className="font-semibold text-ink">Generative AI</strong>, and{" "}
                        <strong className="font-semibold text-ink">Computer Vision</strong>. Building
                        production-grade systems with over 6 years of experience.
                    </p>

                    <p className="mb-8 max-w-[34em] text-[15px] leading-[1.65] text-ink-muted text-pretty md:text-[16px]">
                        From point cloud processing and 6-DoF pose estimation to neural rendering,
                        latent diffusion, real-time perception, and edge deployment.
                    </p>

                    <div className="flex flex-wrap gap-2.5">
                        <a
                            href="mailto:mtanseefshahid@gmail.com"
                            className="rounded-[2px] bg-ink px-5 py-2.75 text-[14px] font-medium text-paper transition-colors hover:bg-accent"
                        >
                            mtanseefshahid@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-tanseef-shahid/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-[2px] border border-rule-strong px-5 py-2.75 text-[14px] font-medium text-ink transition-colors hover:border-ink"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <dl className="border-t border-ink pt-1">
                    {FACTS.map(({ label, value }, i) => (
                        <div
                            key={label}
                            className={`flex items-baseline justify-between gap-4 py-4.25 ${
                                i < FACTS.length - 1 ? "border-b border-rule" : ""
                            }`}
                        >
                            <dt className="font-mono text-[11.5px] uppercase tracking-[0.1em] text-ink-faint">
                                {label}
                            </dt>
                            <dd className="m-0 text-right text-[15px] font-medium text-ink sm:text-[17px]">
                                {value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
