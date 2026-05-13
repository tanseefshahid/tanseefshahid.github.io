"use client";

import Link from "next/link";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";
import { printWithFilename } from "@/lib/printWithFilename";

export default function LmiCoverLetterPage() {
    return (
        <main className="min-h-screen bg-[#070A12] relative py-12 md:py-24 print:bg-white print:py-0 print:px-0">
            {/* Background elements - hidden on print */}
            <div className="fixed inset-0 pointer-events-none z-0 no-print">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Navigation actions - hidden on print */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 no-print">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>

                    <button
                        onClick={() => printWithFilename("LMI-Technologies", "Cover-Letter")}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-all shadow-lg glow-cyan"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>

                {/* Cover Letter Content */}
                <div className="glass-strong rounded-2xl p-8 md:p-12 mb-12 bg-white print:shadow-none print:p-0 print:border-none print:mb-0 print:rounded-none">
                    <div className="space-y-6 text-gray-300 print:text-gray-800 font-serif leading-relaxed text-lg print:text-base">

                        {/* Header */}
                        <div className="border-b border-white/10 print:border-gray-200 pb-8 mb-8">
                            <h1 className="text-3xl font-bold text-white print:text-gray-900 mb-4">Muhammad Tanseef Shahid</h1>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
                                <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> mtanseefshahid@gmail.com</span>
                                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> tanseefshahid.github.io</span>
                                <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid</span>
                            </div>
                        </div>

                        <p>Dear LMI Technologies Hiring Team,</p>

                        <p>
                            I&apos;m applying for the Vision Software Developer II role on the Applications and Technology team. The job description reads very close to what I already do day-to-day: turning vague customer measurement problems into production C++ algorithms for pre-processing, segmentation, feature extraction, and 3D metrology on industrial laser-sensor data. I wanted to apply directly because the overlap with LMI&apos;s 3D smart sensor business is unusually clean.
                        </p>

                        <p>
                            At Hyvision System I work on a sub-millimeter 3D metrology pipeline for an Apple smartphone-camera-module project, built in C++ on top of the Keyence LJ-X8080 line-laser profiler, PCL, and Eigen. The pipeline does ROI extraction, robust plane and edge fitting (RANSAC), coordinate-frame estimation, parallel ICP best-fit, and automated FAI tolerance validation against SQL Server specifications. The hardware class is very close to LMI&apos;s Gocator family, so most of what I&apos;ve learned about wrangling real-world line-laser data (outliers, scan-direction artefacts, noisy edges, ambiguous pose at near-symmetric features) translates directly to your sensor stack.
                        </p>

                        <p>
                            On the prototyping side, I recently built an internal 3D laser-profiler simulator in Python (PyQt5, PyVista, trimesh) that emulates LJ-X8080-class sensors over arbitrary CAD models. It supports rotating-object, rotating-laser, and linear-translation scan strategies with configurable step size, angle range, ray density, and rotation axis. We use it to figure out which surfaces are recoverable from which sensor pose, and which hardware configuration will work before any physical setup is committed. This is exactly the kind of proof-of-concept tooling your job posting describes for OEM and System Integrator demonstrations, and it gave me a strong intuition for how to translate a customer&apos;s &quot;can your sensor measure this?&quot; question into a quantitative answer.
                        </p>

                        <p>
                            Beyond the laser-metrology work, I&apos;ve also built a node-based modular 3D rendering and inspection engine in .NET 8 / WPF with an ECS architecture and a drag-and-drop plugin system, so non-programmers can compose custom inspection pipelines visually. That gave me concrete experience with the HMI / interface side of the role. At earlier roles I&apos;ve shipped a hardware-in-the-loop 6-camera Basler GigE inspection system with sub-200 ms latency and PLC / NuDAQ integration, an eye-in-hand 6-DoF pose estimation pipeline using RGB-D + FoundationPose + ICP for autonomous CNC machining, and an OpenLRM single-image to 3D mesh reconstruction pipeline (IoU 0.80, Chamfer 0.08). The thread across all of it is the same: applied math on real sensor data, turned into something a customer can rely on.
                        </p>

                        <p>
                            My mathematical foundation comes from a Master&apos;s in Computer Vision at Chung-Ang University, where my thesis on active-contour segmentation driven by p-Laplace partial differential equations led to peer-reviewed papers in <em>IEEE Access</em> and <em>Computational and Mathematical Methods in Medicine</em>. Linear algebra, 3D geometry, and statistics aren&apos;t lines on my resume; they&apos;re how I think about problems.
                        </p>

                        <p>
                            One thing to flag upfront: I&apos;m currently based in Seoul, South Korea, so the hybrid Burnaby requirement isn&apos;t something I can solve immediately. I&apos;m fully open to relocating to Burnaby and would welcome a conversation about visa sponsorship or relocation support if LMI is open to candidates outside Canada. Canada&apos;s Global Talent Stream tends to move quickly for senior vision / metrology roles, and I&apos;m ready to commit to a timeline that works for the team.
                        </p>

                        <p>
                            I&apos;d be grateful for a short call to walk through how my Keyence-and-Gocator-class laser experience, simulator work, and applied-math background line up with what your Applications and Technology team is building next. Detailed project write-ups with architecture diagrams are at <a href="https://tanseefshahid.github.io" className="text-cyan-400 print:text-cyan-700 hover:underline">tanseefshahid.github.io</a>.
                        </p>

                        <p>Thank you for your time and consideration.</p>

                        <div className="pt-4">
                            <p>Sincerely,</p>
                            <p className="mt-4 font-semibold text-white print:text-gray-900">Muhammad Tanseef Shahid</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
