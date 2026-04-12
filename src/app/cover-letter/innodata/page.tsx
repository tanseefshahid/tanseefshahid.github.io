"use client";

import Link from "next/link";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";

export default function InnodataCoverLetterPage() {
    return (
        <main className="min-h-screen bg-[#070A12] relative py-12 md:py-24 print:bg-white print:py-0 print:px-0">
            {/* Background elements - hidden on print */}
            <div className="fixed inset-0 pointer-events-none z-0 no-print">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Navigation actions - hidden on print */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 no-print">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>

                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:opacity-90 transition-all shadow-lg glow-purple"
                    >
                        <Download className="w-4 h-4" />
                        Download Cover Letter
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

                        <p>Dear Innodata Hiring Team,</p>

                        <p>
                            I am writing to express my strong interest in the <strong>Solutions Architect (Robotics & Physical AI)</strong> role at Innodata. With over six years of experience bridging deep learning with real-world physical systems, my technical and customer-facing background strongly aligns with Innodata’s mission to power frontier robotics and humanoid foundation models through high-value data representations.
                        </p>

                        <p>
                            I possess a systems-level mindset, actively designing problem formulations that map real-world robotic behavior into actionable data and evaluation pipelines. During my time leading metrology and vision system deployments for major clients like Apple and Hwacheon Machinery, I operated simultaneously as an engineer and a trusted partner. I ran technical discovery, architected <strong>eye-in-hand 6-DoF pose estimation pipelines for autonomous CNC manipulators</strong>, and iterated directly with on-site factory teams. I know how to scope highly ambiguous physical integration issues and secure the "technical win" by demonstrating measurable metric improvements via dense annotations.
                        </p>

                        <p>
                            Moreover, I have extensive experience prototyping synthetic datasets and digital twin infrastructures, which is vital for safe and scalable Physical AI. Leveraging <strong>Python and C++</strong>, I designed and scripted custom automated data-generation pipelines using Blender (bpy) and Physically Based Rendering (PBR). This allows me to rapidly prototype spatial environments and capture the dense affordance mapping and world model data that modern VLMs securely depend on.
                        </p>

                        <p>
                            Whether generating Egocentric capture metrics, fine-tuning generative architectures (Stable Diffusion), or defining imitation-learning requirements with customers, I am comfortable communicating complex ML trade-offs clearly to both engineering and product leaders.
                        </p>

                        <p>
                            I have linked my portfolio, which includes my applied research and open-source demonstrations. I would welcome the opportunity to discuss how my ability to cross the boundary between synthetic simulation environments and real-world robotics hardware can help shape Innodata's Robotics & Physical AI platform roadmap.
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
