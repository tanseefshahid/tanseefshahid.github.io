"use client";

import Link from "next/link";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";
import { printWithFilename } from "@/lib/printWithFilename";

export default function TorcCoverLetterPage() {
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
                        onClick={() => printWithFilename("Torc-Robotics", "Cover-Letter")}
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

                        <p>Dear Hiring Team,</p>

                        <p>
                            I'm writing to apply for the Senior Computer Vision Engineer position on the Simulation and Data Generation team at Torc. I have over six years of experience working heavily with SLAM, 3D computer vision, and generative AI. The work your team is doing with Neural Rendering to bridge the domain gap in AV simulation is exactly what I'm looking to do next.
                        </p>

                        <p>
                            My background is a mix of deep learning research and very hands-on industrial engineering. For the last few years, I’ve been heavily involved in 3D reconstruction and generative modeling. At PERSPECTIVE Corp, I built end-to-end 3D mesh reconstruction pipelines using OpenLRM and worked extensively with Latent Diffusion to generate high-fidelity synthetic data. I know what it takes to train and fine-tune these models to produce usable, high-quality outputs when real-world training data is scarce.
                        </p>

                        <p>
                            Currently, I work as a SLAM & 3D Metrology Engineer at Hyvision System, where I build high-speed, sub-millimeter 3D laser inspection systems for Apple and Samsung projects. This gives me a lot of practical experience dealing with the messy realities of sensor data. Crucially for Torc's focus on simulation, I recently designed a custom 3D laser profiling simulator from scratch. Instead of relying on costly and time-consuming hardware trials, my tool simulates physical laser scans over CAD models. This allows our team to test varying step sizes, scan densities, and multi-angle sensor placements in a purely virtual environment before finalizing hardware deployment. Beyond simulation, I regularly work with raw 3D point clouds, rigid body transformations, Visual-Inertial Odometry (VIO), and multi-sensor synchronization. I don’t just train models; I know how to write the C++ and PyTorch code to build the simulations and deploy them efficiently in the real world.
                        </p>

                        <p>
                            I’m particularly drawn to this role because it requires someone who understands both the deep learning side of generative models like NeRFs and Diffusion, and the geometry side of 3D sensor processing for LiDAR, Cameras, and Radar. I’ve spent my career balancing these two areas, and I’m very comfortable taking complex ML research and turning it into reliable production software.
                        </p>

                        <p>
                            I’d love the chance to talk with the team about how my experience with SLAM and neural rendering can help scale Torc’s AV 3.0 simulation efforts. 
                        </p>

                        <div className="pt-8">
                            <p>Best regards,</p>
                            <p className="font-bold text-xl mt-2 text-white print:text-black">Muhammad Tanseef Shahid</p>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx global>{`
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; }
                    main { padding: 0 !important; }
                }
            `}</style>
        </main>
    );
}
