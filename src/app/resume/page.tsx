"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, Mail, Github, Linkedin, Globe } from "lucide-react";

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-[#070A12] relative overflow-hidden py-12 md:py-24 print:bg-white print:overflow-visible">
            {/* Background elements - hidden on print */}
            <div className="fixed inset-0 pointer-events-none z-0 no-print">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Print and Navigation actions - hidden on print */}
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

                {/* Resume Content */}
                <div className="glass-strong rounded-2xl p-8 md:p-12 bg-white/5">

                    {/* Header */}
                    <div className="border-b border-white/10 pb-8 mb-8 print-section">
                        <div className="resume-header-row flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans gradient-text-vibrant">
                                    Muhammad Tanseef Shahid
                                </h1>
                                <p className="text-xl text-cyan-400 font-medium">
                                    3D Metrology & AI Engineer
                                </p>
                            </div>
                            <div className="shrink-0">
                                <Image
                                    src="/pp.jpeg"
                                    alt="Muhammad Tanseef Shahid"
                                    width={140}
                                    height={140}
                                    className="w-[140px] h-[140px] -rotate-90 rounded-full object-cover border-4 border-cyan-500/20 bg-white/5"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> mtanseefshahid@gmail.com</span>
                            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> tanseefshahid.github.io</span>
                            <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" /> linkedin.com/in/tanseef</span>
                            <span className="flex items-center gap-1"><Github className="w-4 h-4" /> github.com/tanseefshahid</span>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-8 print-section">
                        <p className="text-gray-300 leading-relaxed">
                            Vision-driven AI and 3D Metrology Engineer with extensive experience bridging the gap between mathematical metrology and modern artificial intelligence. Specialized in developing high-precision 3D inspection systems, scalable point cloud processing pipelines, and AI-driven generative reconstructions.
                        </p>
                    </div>

                    {/* Core Competencies */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/5 pb-2">
                            Core Expertise
                        </h2>
                        <div className="resume-skills-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-cyan-400 font-medium mb-2">Engineering & Metrology</h3>
                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                    <li>Point Cloud Processing & 3D Registration</li>
                                    <li>Geometric Dimensioning & Tolerancing (GD&T)</li>
                                    <li>Image-to-3D, Multi-view Stereo, NeRFs</li>
                                    <li>CUDA acceleration, Real-time Edge AI</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-cyan-400 font-medium mb-2">Software & Frameworks</h3>
                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                    <li>C++, C#, Python, TypeScript</li>
                                    <li>PyTorch, ROS, OpenCV, Open3D</li>
                                    <li>React, Next.js, Architecture Design</li>
                                    <li>Git, Docker, CI/CD pipelines</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-2">
                            Professional Experience
                        </h2>

                        {/* Job 1 */}
                        <div className="mb-8">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">3D Metrology & AI Engineer</h3>
                                    <p className="text-cyan-400">Hyvision System</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Aug 2025 - Present</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Building scalable 3D inspection systems using laser scanning and point cloud analysis.</li>
                                <li>Developing PolyWorks-style precision alignment tools for complex geometries.</li>
                                <li>Architecting a 3D rendering engine with a dedicated node-based workflow editor to automate custom inspection pipelines.</li>
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div className="mb-8">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">SLAM Engineer</h3>
                                    <p className="text-cyan-400">Luxolis</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Apr 2025 - Jul 2025</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Developed robust SLAM and 3D reconstruction solutions for industrial scanning hardware.</li>
                                <li>Optimized sensor data fusion pipelines to minimize mapping drift and latency.</li>
                            </ul>
                        </div>

                        {/* Job 3 */}
                        <div className="mb-8">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Senior AI Researcher</h3>
                                    <p className="text-cyan-400">PERSPECTIVE Corp.</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Apr 2022 - Apr 2025</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Led the technical research direction for generative Virtual Fitting AI tools, integrating GANs for high-fidelity clothing overlay.</li>
                                <li>Architected Image-to-3D Reconstruction models for human avatars (SMPL).</li>
                                <li>Deployed real-time image segmentation and FaceSwap architectures for commercial metaverse platforms.</li>
                            </ul>
                        </div>

                        {/* Job 4 */}
                        <div className="mb-2">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Computer Vision Researcher</h3>
                                    <p className="text-cyan-400">Ellexi</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Nov 2019 - Oct 2021</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Engineered safety monitoring solutions using object detection and classification in real-time camera feeds.</li>
                                <li>Generated automated large-scale synthetic training data utilizing procedural rendering techniques.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="print-section">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-2">
                            Education
                        </h2>

                        <div className="mb-4">
                            <div className="resume-job-row flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">M.S. in Computer Vision</h3>
                                    <p className="text-cyan-400">Chung-Ang University</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Sep 2019</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="resume-job-row flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">B.S. in Electronics Engineering</h3>
                                    <p className="text-cyan-400">GIK Institute</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Jul 2016</p>
                                    <p>Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
