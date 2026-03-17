"use client";

import Link from "next/link";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";

export default function CloCoverLetterPage() {
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

                        <p>Dear Hiring Team,</p>

                        <p>
                            I am writing to express my strong interest in joining <strong>CLO Virtual Fashion</strong>. With over 6 years of experience specializing in 2D/3D AI, 3D reconstruction, metrology, and Generative AI, my technical background strongly aligns with CLO’s mission to build the future of digital fashion.
                        </p>

                        <p>
                            A key part of my recent work involved designing an end-to-end virtual fitting system that was successfully deployed for the company <strong>Stylebot</strong>. To make this work, I built pipelines for 3D avatar pose and shape estimation. Achieving a realistic final result also required heavily fine-tuning generative models like <strong>Stable Diffusion / Latent Diffusion</strong> to handle high-fidelity clothing generation and style adaptation directly onto 3D models.
                        </p>

                        <p>
                            Beyond virtual try-on, I have led multiple image-to-3D reconstruction pipelines. I have expert-level knowledge of working with <strong>3D polygon meshes</strong>. I do not just run deep learning models via APIs; I regularly handle the low-level geometry processing, including point-cloud to mesh conversion, automatic texturing, lighting, and physically based rendering (PBR) using tools like Python, C++, PCL, and Blender (bpy).
                        </p>

                        <p>
                            CLO's tools like Marvelous Designer set the industry standard because of their mathematical rigor and graphic fidelity. I am looking for a team where I can combine my deep learning background with my passion for computer graphics and 3D geometry constraints.
                        </p>

                        <p>
                            I have attached my resume and portfolio for your review. I would welcome the opportunity to discuss how my specific expertise in Generative AI and Mesh Physics fits into your ongoing R&D.
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
