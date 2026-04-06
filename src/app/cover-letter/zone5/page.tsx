"use client";

import Link from "next/link";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";

export default function Zone5CoverLetterPage() {
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

                        <p>Dear Hiring Manager,</p>

                        <p>
                            I am writing to express my interest in the Machine Learning Engineer position at <strong>Zone 5 Technologies</strong>. I am currently based in South Korea and bring over six years of applied experience in 2D and 3D computer vision, metrology, and edge AI deployment. My background in developing robust autonomy and inspection systems aligns closely with your focus on next-generation unmanned aircraft technologies.
                        </p>

                        <p>
                            Currently, I am a 3D Metrology and AI Engineer at <strong>Hyvision System</strong>, where I lead the design of advanced 3D First Article Inspection (FAI) frameworks for high-profile clients like <strong>Apple</strong>. My day-to-day involves pushing the boundaries of surface inspection algorithms, and I am actively developing new metrology pipelines for an upcoming Apple project. I am also architecting the inspection and automated assembly system for an OpenAI speaker, a project that relies heavily on real-time pose estimation using 3D laser scan data and seamless integration with ABB robotic arms. Because I hold a degree in Electronics Engineering, I am very comfortable bridging the gap between raw sensor data acquisition and complex software algorithms.
                        </p>

                        <p>
                            Zone 5's need for models deployed on <strong>NVIDIA Jetson</strong> platforms resonates strongly with my past work. I have significant hands-on experience training, optimizing, and deploying computer vision models directly to embedded systems, ensuring they meet tight real-time processing constraints in the field. Additionally, I have deep experience managing the entire ML data lifecycle. For projects facing a lack of training data or rare edge cases, I built synthetic image generation engines, automated the labeling process, and applied targeted data augmentations to maximize model performance with a minimal real-world footprint.
                        </p>

                        <p>
                            Given my track record in edge computing, 2D and 3D computer vision, and building functional UI software for inspection systems, I am confident I can add immediate value to your autonomy stack. I would welcome the chance to speak with your team, and I am more than happy to provide a proof-of-concept or a solution walkthrough addressing the core responsibilities of this role.
                        </p>

                        <p>
                            Thank you for your time and consideration. I look forward to hearing from you.
                        </p>

                        <div className="pt-8">
                            <p>Sincerely,</p>
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
