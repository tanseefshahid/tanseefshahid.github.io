import SectionHeading from "./SectionHeading";

const EXPERIENCE = [
    {
        period: "Aug 2025 — Present",
        current: true,
        title: "3D Metrology & Machine Learning Engineer",
        org: "Hyvision System · Seoul",
        body: "Architecting high-speed 3D laser inspection for UMP modules with PCL and RANSAC/Eigen alignment at sub-millimeter precision. Building PolyWorks-style alignment applications with ICP best-fit and a modular node-based rendering engine (.NET 8 / WPF) for custom inspection pipelines.",
    },
    {
        period: "Apr 2025 — Jul 2025",
        current: false,
        title: "SLAM / Computer Vision Engineer",
        org: "Luxolis · Seoul",
        body: "Deployed a real-time 360° surface inspection system with a synchronized 6-camera Basler array and YOLO inference at under 200 ms latency, PLC-integrated. Built an eye-in-hand 6-DoF pose estimation pipeline using RGB-D, FoundationPose, and ICP refinement for autonomous CNC toolpath adjustment in SE(3) space.",
    },
    {
        period: "Dec 2021 — Apr 2025",
        current: false,
        title: "3D Reconstruction & Computer Vision Researcher",
        org: "PERSPECTIVE Corp. · Seoul",
        body: "Led 3D reconstruction and generative AI R&D: automated XR scene understanding from 2D floor plans, photorealistic virtual try-on (LADi-VTON + DensePose), single-image to 3D mesh (OpenLRM, IoU 0.80), hierarchical apparel classification above 95% across 74 classes, and face reconstruction with GANs and diffusion models.",
    },
    {
        period: "Nov 2019 — Oct 2021",
        current: false,
        title: "Computer Vision Engineer",
        org: "Ellexi · Seoul",
        body: "Built real-time ALPR for gas stations at 98% accuracy (YOLO + CRNN + DeepSORT), PPE compliance detection on NVIDIA Jetson, anomaly detection and multi-camera tracking for Incheon Airport (YOWO + HRNet + Person Re-ID), and a gas meter inspection pipeline using CRAFT/Tesseract OCR.",
    },
];

const EDUCATION = [
    {
        degree: "M.S. Computer Vision",
        school: "Chung-Ang University · Seoul · 2019",
    },
    {
        degree: "B.S. Electronics Engineering",
        school: "GIK Institute · Pakistan · 2016",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="border-t border-rule">
            <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 md:py-18">
                <div className="mb-9 md:mb-11">
                    <SectionHeading num="02">Professional Experience</SectionHeading>
                </div>

                <div>
                    {EXPERIENCE.map((job, i) => (
                        <div
                            key={job.title}
                            className={`grid gap-3 border-t border-rule py-7 md:grid-cols-[190px_minmax(0,1fr)] md:gap-10 ${
                                i === EXPERIENCE.length - 1 ? "border-b" : ""
                            }`}
                        >
                            <div>
                                <div className="font-mono text-[12.5px] text-ink">{job.period}</div>
                                {job.current && (
                                    <div className="mt-1.5 inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent">
                                        <span
                                            className="block h-[5px] w-[5px] rounded-full bg-accent"
                                            aria-hidden="true"
                                        />
                                        Current
                                    </div>
                                )}
                            </div>

                            <div>
                                <h3 className="mb-1 text-[18px] font-semibold text-ink sm:text-[20px]">
                                    {job.title}
                                </h3>
                                <div className="mb-3.5 text-[14.5px] text-ink-muted">{job.org}</div>
                                <p className="m-0 max-w-[60em] text-[15px] leading-[1.65] text-ink-soft text-pretty sm:text-[15.5px]">
                                    {job.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-11 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2">
                    {EDUCATION.map(({ degree, school }) => (
                        <div key={degree} className="bg-paper-raised p-6">
                            <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
                                Education
                            </div>
                            <h3 className="mb-1 text-[17px] font-semibold text-ink">{degree}</h3>
                            <div className="text-[14.5px] text-ink-muted">{school}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
