"use client";

import Link from "next/link";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";
import { printWithFilename } from "@/lib/printWithFilename";

export default function SanctuaryCoverLetterPage() {
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
                        onClick={() => printWithFilename("Sanctuary-AI", "Cover-Letter")}
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

                        <p>Dear Sanctuary AI Hiring Team,</p>

                        <p>
                            I&apos;m applying for the Machine Learning Engineer role on the Physical AI team. The line in your job description about &quot;building robust systems for training and deploying ML policies on robots&quot; and &quot;bridging cutting-edge ML methods with real-world robotic applications&quot; describes almost exactly the work I&apos;ve been doing for the last few years. I wanted to apply directly because the match is uncommonly clean.
                        </p>

                        <p>
                            Most recently at Luxolis I built a production eye-in-hand 6-DoF pose estimation pipeline for autonomous CNC manipulation, using FoundationPose (the foundation model for novel-object 6-DoF pose) and ICP refinement. The system mounts an RGB-D camera on a moving robotic head and registers physical workpieces against CAD models in SE(3) space in real time. This is the same class of perception problem your humanoid robots face: novel objects, eye-in-hand sensing, real-time pose estimation tight enough to drive actuators safely. I&apos;ve done it end-to-end, from research model integration through C++ deployment with deterministic hardware I/O.
                        </p>

                        <p>
                            On the &quot;research to production&quot; side, my four years at PERSPECTIVE Corp. were spent taking research-paper models and shipping them. I fine-tuned LADi-VTON (latent diffusion), DensePose, U2Net, and CLIP textual inversion into a single deployed pipeline running on AWS at 85%+ visual fidelity for commercial customers. I trained an OpenLRM Large Reconstruction Model to produce printable 3D meshes from single RGB images (IoU 0.80, Chamfer Distance 0.08). I built the surrounding infrastructure too: PyTorch training pipelines, Weights &amp; Biases experiment tracking, Docker containerization, customer-facing deployment. The thread across all of it is the one your job description names directly: turning novel research techniques into reliable, deployed systems.
                        </p>

                        <p>
                            On the engineering side, I&apos;m comfortable on both sides of the model-to-robot handoff. At Hyvision System I work in production C++ with PCL, Eigen, and parallel ICP on a sub-millimeter 3D metrology pipeline for Apple manufacturing partners, processing 1M+ point clouds in real time. At Ellexi I shipped multi-class object detection on NVIDIA Jetson edge devices with ONNX and TensorRT optimization. The combination of Python research depth and C++ production muscle is the kind of full-stack capability the job description asks for, and it&apos;s what I bring naturally.
                        </p>

                        <p>
                            I want to be honest about one gap. I have strong fundamentals in deep learning and have used policy-style classifier heads, but I have not shipped reinforcement learning or imitation learning in production. Your job posting frames RL and IL as fundamentals rather than expert-level requirements, and I&apos;m confident I can ramp quickly given my background in foundation-model fine-tuning, 6-DoF pose, and the surrounding ML infrastructure. I&apos;m treating this as a high-priority learning area going into any interview.
                        </p>

                        <p>
                            My background combines applied work with theoretical grounding. I have a Master&apos;s in Computer Vision and Machine Learning from Chung-Ang University, with peer-reviewed publications in <em>IEEE Access</em> on hybrid active contours driven by p-Laplace partial differential equations and in <em>Computational and Mathematical Methods in Medicine</em>. The mix of mathematical rigor and shipped products is the combination I&apos;d bring to your Embodied Intelligence Platform.
                        </p>

                        <p>
                            One practical note. I&apos;m currently based in Seoul, South Korea, so I&apos;d need visa sponsorship and relocation to Vancouver. The role is on-site Vancouver, and I&apos;m fully open to relocating. Canada&apos;s Global Talent Stream tends to move quickly for senior CV/ML/robotics roles and I&apos;m ready to commit to a timeline that works for the team. I&apos;d welcome a conversation about how Sanctuary handles international hires if there&apos;s mutual interest.
                        </p>

                        <p>
                            I&apos;d be grateful for a short call to walk through how my foundation-model deployment, 6-DoF pose estimation, and full-stack robotics perception work line up with what your team is building. Detailed project write-ups with architecture diagrams are at <a href="https://tanseefshahid.github.io" className="text-cyan-400 print:text-cyan-700 hover:underline">tanseefshahid.github.io</a>.
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
