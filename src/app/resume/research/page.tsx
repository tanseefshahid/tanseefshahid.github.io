"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, Mail, Github, Linkedin, Globe } from "lucide-react";
import { notFound } from "next/navigation";

export default function ResearchResumePage() {
    if (process.env.NODE_ENV === 'production') {
        notFound();
    }

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
                        Download Research CV
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
                                    3D Generative AI & Computer Vision Research Scientist
                                </p>
                            </div>
                            <div className="shrink-0">
                                <Image
                                    src="/Tanseef_Shahid_grey.jpg"
                                    alt="Muhammad Tanseef Shahid"
                                    width={140}
                                    height={140}
                                    className="w-[140px] h-[140px] rounded-full object-cover object-[center_20%] border-4 border-cyan-500/20 bg-white/5"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> mtanseefshahid@gmail.com</span>
                            <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> tanseefshahid.github.io</span>
                            <a href="https://www.linkedin.com/in/muhammad-tanseef-shahid/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                                <Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid
                            </a>
                            <span className="flex items-center gap-1"><Github className="w-4 h-4" /> github.com/tanseefshahid</span>
                        </div>
                    </div>

                    {/* Research Summary */}
                    <div className="mb-8 print-section">
                        <p className="text-gray-300 leading-relaxed">
                            Research Scientist with <strong className="text-white">6+ years</strong> of experience specializing in <strong className="text-white">Controllable 3D Generation</strong>, geometric deep learning, and diffusion models. Proven expertise in developing 3D reconstruction pipelines (OpenLRM, NeRF) and photo-realistic virtual try-on systems (Latent Diffusion). Expert in bridging computational geometry with modern AI to solve complex problems in 3D scene understanding, pose estimation, and high-precision metrology. Published researcher with a deep focus on <strong className="text-white">Multi-view consistency</strong> and <strong className="text-white">Procedural 3D dataset generation</strong>.
                        </p>
                    </div>

                    {/* Research Focus & Competencies */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/5 pb-2">
                            Research Focus & Technical Skills
                        </h2>
                        <div className="resume-skills-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-cyan-400 font-medium mb-2">3D Generation & Vision</h3>
                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                    <li>Generative Models (Diffusion, Flow Matching, GANs)</li>
                                    <li>3D Reconstruction (NeRF, OpenLRM, Gaussian Splatting)</li>
                                    <li>Geometric Deep Learning (Point Clouds, Meshes, SDFs)</li>
                                    <li>Multi-view Geometry & Consistency</li>
                                    <li>Differentiable Rendering & Physics-based Simulation</li>
                                    <li>6-DoF Pose Estimation & Landmark Registration</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-cyan-400 font-medium mb-2">Frameworks & Engineering</h3>
                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                    <li>PyTorch, TensorFlow, CUDA, ONNX</li>
                                    <li>OpenCV, PCL, Open3D, PyVista/VTK, Eigen</li>
                                    <li>Blender (Procedural Generation via bpy API)</li>
                                    <li>C++, Python, TypeScript, C# (.NET 8)</li>
                                    <li>Large-scale distributed training & data pipelines</li>
                                    <li>Docker, Linux, AWS Multi-GPU environments</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Research Experience */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-2">
                            Research & Professional Experience
                        </h2>

                        {/* Job 1 - Hyvision (MOST RECENT) */}
                        <div className="mb-8">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">3D Metrology & CV Engineer</h3>
                                    <p className="text-cyan-400">Hyvision System</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Aug 2025 – Present</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Investigated and implemented extreme-precision 3D alignment algorithms integrating <strong className="text-white">ICP</strong> and landmark registration (SVD) for sub-millimeter industrial metrology.</li>
                                <li>Developed a modular node-based rendering engine using ECS architecture, enabling real-time visual analysis of geometric deviations in 1M+ point cloud sets.</li>
                                <li>Optimized coordinate transformation pipelines using <strong className="text-white">RANSAC and PCA</strong>-based geometric feature extraction for automated FAI validation.</li>
                            </ul>
                        </div>

                        {/* Job 2 - Luxolis */}
                        <div className="mb-8">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Computer Vision Researcher</h3>
                                    <p className="text-cyan-400">Luxolis</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Apr 2025 – Jul 2025</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Evaluated zero-shot <strong className="text-white">6-DoF pose estimation</strong> (FoundationPose) for autonomous robotics, developing an eye-in-hand refinement pipeline with RGB-D fusion and ICP registration.</li>
                                <li>Optimized multi-camera array synchronization (6x Basler GigE) for low-latency (&lt;200ms) real-time geometric defect detection.</li>
                            </ul>
                        </div>

                        {/* Job 3 - PERSPECTIVE */}
                        <div className="mb-8">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">2D/3D AI Researcher</h3>
                                    <p className="text-cyan-400">PERSPECTIVE Corp.</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Apr 2022 – Apr 2025</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Researched and implemented a <strong className="text-white">single-image to 3D mesh reconstruction</strong> pipeline using OpenLRM, achieving competitive IoU (0.80) and Chamfer Distance (0.08) metrics.</li>
                                <li>Spearheaded <strong className="text-white">procedural data generation</strong> in Blender (bpy), creating high-fidelity synthetic 360° training views to overcome real-world dataset scarcity.</li>
                                <li>Investigated photorealistic <strong className="text-white">virtual try-on</strong> utilizing LADi-VTON (Latent Diffusion), optimizing for 85%+ pattern fidelity via CLIP-based textual inversion.</li>
                                <li>Developed hierarchical classification architectures (ResNet50) for fine-grained apparel taxonomy, achieving 95%+ accuracy.</li>
                            </ul>
                        </div>

                        {/* Job 4 - Ellexi */}
                        <div className="mb-2">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">AI Developer</h3>
                                    <p className="text-cyan-400">Ellexi</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Nov 2019 – Oct 2021</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Researched <strong className="text-white">anomaly detection & multi-camera tracking</strong> for high-security environments, utilizing YOWO (3D-CNN) and HRNet pose estimation.</li>
                                <li>Developed real-time <strong className="text-white">ALPR and PPE compliance</strong> systems using YOLO inference optimized for NVIDIA Jetson edge deployment.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Publications */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-2">
                            Select Publications & Research Output
                        </h2>

                        <div className="mb-6">
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-3 ml-2">
                                <li className="leading-relaxed">
                                    A. Munir, S. Soomro, <strong className="text-white">M.T. Shahid</strong>, et al. "Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation", <em className="text-cyan-400">IEEE Access</em> (2019).
                                </li>
                                <li className="leading-relaxed">
                                    Kim, D. D., <strong className="text-white">M.T. Shahid</strong>, et al. "Generating Pedestrian Training Dataset using DCGAN", <em className="text-cyan-400">Proceedings of ICIP</em> (2019).
                                </li>
                                <li className="leading-relaxed">
                                    Memon, A. A., <strong className="text-white">M.T. Shahid</strong>, et al. "Segmentation Using Adaptive Weight-Based Hybrid Active Contours", <em className="text-cyan-400">CMMM</em> (2020).
                                </li>
                                <li className="leading-relaxed">
                                    <strong className="text-white">M.T. Shahid</strong>. "Object Segmentation with Active Contours Driven by Weight Matrix", <em className="text-cyan-400">Master's Thesis, Chung-Ang University</em> (2019).
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-2">
                            Academic Background
                        </h2>

                        <div className="mb-4">
                            <div className="resume-job-row flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">M.S. in Computer Science (Computer Vision focus)</h3>
                                    <p className="text-cyan-400">Chung-Ang University (CAU)</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Mar 2017 – Sep 2019</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="resume-job-row flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">B.S. in Electronic Engineering</h3>
                                    <p className="text-cyan-400">GIK Institute</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>2011 – 2016</p>
                                    <p>Topi, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
