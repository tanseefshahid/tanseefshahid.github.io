"use client";

import Link from "next/link";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";

export default function AperaCoverLetterPage() {
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
                        onClick={() => window.print()}
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

                        <p>Dear Apera AI Hiring Team,</p>

                        <p>
                            I&apos;m applying for the Senior Machine Learning and Computer Vision Applied Scientist role. Apera&apos;s 4D Vision&trade; mission of turning blind robots into intelligent workers maps very closely to what I&apos;ve been building for the last few years: production perception systems that guide industrial machines using 6-DoF pose estimation, RGB-D depth processing, and foundation models. I&apos;m writing because the role description reads like a near-exact fit for my hands-on experience, and I wanted to make the case directly.
                        </p>

                        <p>
                            Most recently at Luxolis, I built an eye-in-hand 6-DoF pose estimation pipeline for autonomous CNC machining using an RGB-D camera mounted on the drill head, FoundationPose, and ICP refinement. The system registers physical workpieces against CAD models in SE(3) space in real time, eliminating manual fixturing and enabling dynamic toolpath adjustment. In parallel I deployed a synchronized 6-camera Basler array with YOLO inference, reaching under 200 ms end-to-end latency at 5 parts per second with PLC-integrated control. This is exactly the kind of high-accuracy, high-reliability robot-guidance work Apera describes.
                        </p>

                        <p>
                            At Hyvision System I work in production C++ with PCL and Eigen, building sub-millimeter 3D registration pipelines (ICP best-fit, SVD landmark registration, RANSAC plane fitting) that process 1M+ point clouds in real time for Apple manufacturing partners. I&apos;m comfortable on both sides of the model-to-deployment handoff: writing the PyTorch training code and writing the C++ that ships it. Apera&apos;s call-out for someone who can collaborate with the C++ application team is something I&apos;ve been doing every week for years.
                        </p>

                        <p>
                            On the foundation-model side, my work at PERSPECTIVE Corp. centred on fine-tuning latent diffusion models (LADi-VTON) and CLIP textual inversion into a production pipeline reaching 85%+ visual fidelity, and an OpenLRM-based single-image to 3D mesh reconstruction pipeline reaching IoU 0.80 and Chamfer Distance 0.08. I&apos;ve also deployed YOLO + TensorRT/ONNX on NVIDIA Jetson edge devices at Ellexi, so the ~1 Hz edge GPU constraint in Apera&apos;s spec is familiar territory.
                        </p>

                        <p>
                            My background combines deep applied work with theoretical grounding. I have peer-reviewed publications in IEEE Access on hybrid active contours driven by p-Laplace equations, and in Computational and Mathematical Methods in Medicine on weight-based active contours for medical image segmentation. The mix of mathematical rigor and shipped products is the combination I&apos;d bring to Apera&apos;s 4D Vision&trade; stack.
                        </p>

                        <p>
                            One thing to flag upfront: I&apos;m currently based in Seoul, South Korea, so the in-person Vancouver requirement isn&apos;t something I can solve immediately. I&apos;m fully open to relocating to Vancouver and would welcome a conversation about visa sponsorship or relocation support if Apera is open to candidates outside Canada. Canada&apos;s Global Talent Stream tends to move quickly for senior CV/ML roles, and I&apos;m ready to commit to a timeline that works for the team.
                        </p>

                        <p>
                            Either way, I&apos;d be grateful for a short call to walk through how my robotic-perception, C++ deployment, and foundation-model work maps to Apera&apos;s roadmap. My portfolio with detailed project write-ups is at <a href="https://tanseefshahid.github.io" className="text-cyan-400 print:text-cyan-700 hover:underline">tanseefshahid.github.io</a>.
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
