"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, Mail, Github, Linkedin, Globe } from "lucide-react";

export default function CloResumePage() {
    return (
        <main className="min-h-screen bg-[#070A12] relative overflow-hidden py-12 md:py-24 print:bg-white print:overflow-visible print:py-0">
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
                        Download CLO-Optimized PDF
                    </button>
                </div>

                {/* Resume Content */}
                <div className="glass-strong rounded-2xl p-8 md:p-12 bg-white/5 print:bg-white print:p-0 print:border-none print:shadow-none">

                    {/* Header */}
                    <div className="border-b border-white/10 print:border-gray-200 pb-6 mb-6 print-section">
                        <div className="resume-header-row flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans gradient-text-vibrant print:text-gray-900 print:bg-none print:text-4xl">
                                    Muhammad Tanseef Shahid
                                </h1>
                                <p className="text-xl text-cyan-400 font-medium print:text-blue-700">
                                    3D Computer Vision & Generative AI Researcher
                                </p>
                            </div>
                            <div className="shrink-0 no-print">
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

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
                            <a href="mailto:mtanseefshahid@gmail.com" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                                <Mail className="w-4 h-4" /> mtanseefshahid@gmail.com
                            </a>
                            <a href="https://tanseefshahid.github.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                                <Globe className="w-4 h-4" /> tanseefshahid.github.io
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-tanseef-shahid/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                                <Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid
                            </a>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-6 print-section">
                        <p className="text-gray-300 print:text-gray-800 leading-relaxed text-sm lg:text-base">
                            AI researcher and computer vision engineer with over <strong className="text-white print:text-black font-semibold">6 years</strong> of experience specializing in <strong className="text-white print:text-black font-semibold">3D Polygon Mesh Estimation</strong>, <strong className="text-white print:text-black font-semibold">Generative AI</strong>, and deep learning. Proven expertise bridging Computer Graphics and Vision to build scalable systems for 3D reconstruction, avatar <strong className="text-white print:text-black font-semibold">pose & shape estimation</strong>, and parametric CAD modeling. Highly skilled in <strong className="text-white print:text-black font-semibold">fine-tuning and optimizing large generative models (Stable Diffusion, StyleGAN)</strong> for fashion, clothing segmentation, and virtual try-on pipelines. Deep understanding of <strong className="text-white print:text-black font-semibold">Geometry Processing</strong> and PBR (Physically Based Rendering), combined with rigorous C++ application development, ONNX on-device optimization, and Dockerized API deployment.
                        </p>
                    </div>

                    {/* Core Competencies */}
                    <div className="mb-6 print-section">
                        <h2 className="text-xl font-bold text-white print:text-blue-900 mb-3 border-b border-white/5 print:border-gray-200 pb-1">
                            Technical Skills & Core Competencies
                        </h2>
                        <div className="resume-skills-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-cyan-400 print:text-blue-700 font-medium mb-2 text-sm">3D Vision & Generative AI</h3>
                                <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1">
                                    <li><strong className="text-white print:text-black font-medium">3D Polygon Mesh & CAD Estimation</strong> (OpenLRM, NeRF)</li>
                                    <li><strong className="text-white print:text-black font-medium">3D Avatar Pose & Shape Estimation</strong> (DensePose)</li>
                                    <li><strong className="text-white print:text-black font-medium">Stable Diffusion & StyleGAN</strong> (Fine-Tuning, Lightweighting)</li>
                                    <li><strong className="text-white print:text-black font-medium">Geometry Processing</strong> & Graph Neural Networks</li>
                                    <li>Mesh Physics & Image Segmentation (U-Net, SAM)</li>
                                    <li>Computer Graphics & <strong className="text-white print:text-black font-medium">Physically Based Rendering (PBR)</strong></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-cyan-400 print:text-blue-700 font-medium mb-2 text-sm">Software & Deployment</h3>
                                <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1">
                                    <li>Python, PyTorch, OpenCV, TensorFlow</li>
                                    <li><strong className="text-white print:text-black font-medium">C++ Application & Service Development</strong></li>
                                    <li><strong className="text-white print:text-black font-medium">Dockerized API Services</strong> & AWS Cloud</li>
                                    <li><strong className="text-white print:text-black font-medium">ONNX On-Device Optimization</strong> & TensorRT</li>
                                    <li>Blender (bpy scripting), PCL, Open3D, PyVista</li>
                                    <li>Linux, Git, CUDA, C# (.NET 8)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-white print:text-blue-900 mb-4 border-b border-white/5 print:border-gray-200 pb-1 print:mb-2 break-after-avoid">
                            Professional Experience
                        </h2>

                        {/* Job 1 - Hyvision */}
                        <div className="mb-5 print:mb-4 print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">3D Metrology & AI Engineer</h3>
                                    <p className="text-cyan-400 print:text-blue-700 text-sm">Hyvision System | Aug 2025 – Present</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>
                                    Architected a high-speed 3D laser inspection system for UMP modules using <strong className="text-white print:text-black">C++</strong>, PCL, and RANSAC/Eigen-based coordinate alignment. Implemented advanced <strong className="text-white print:text-black font-medium">Geometry Processing</strong> for sub-millimeter precision and automated FAI validation <strong className="text-white print:text-black italic">(Apple Project)</strong>.
                                </li>
                                <li>
                                    Developed a PolyWorks-style 3D alignment application using <strong className="text-white print:text-black">C++</strong> and VTK/PyVista. Processed <strong className="text-white print:text-black font-medium">3D polygon mesh</strong> and 1M+ point clouds in real-time, utilizing ICP best-fit to calculate deviations against baseline <strong className="text-white print:text-black font-medium">Parametric CAD models</strong> <strong className="text-white print:text-black italic">(Apple Project)</strong>.
                                </li>
                                <li>
                                    Designed a modular 3D rendering engine with a visual node-based workflow editor (.NET 8/WPF) for custom inspection pipelines.
                                </li>
                            </ul>
                        </div>

                        {/* Job 2 - Luxolis */}
                        <div className="mb-5 print:mb-4 print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">Computer Vision Engineer</h3>
                                    <p className="text-cyan-400 print:text-blue-700 text-sm">Luxolis | Apr 2025 – Jul 2025</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>
                                    Deployed a real-time 360° defect detection pipeline using a synchronized 6-camera Basler GigE array. Optimized YOLO inference models using <strong className="text-white print:text-black font-medium">ONNX for on-device deployment</strong>, achieving &lt;200ms latency at 5 parts/sec <strong className="text-white print:text-black italic">(Pungkang Co. Ltd.)</strong>.
                                </li>
                                <li>
                                    Built an eye-in-hand 6-DoF pose estimation pipeline for autonomous CNC machining using an RGB-D camera and FoundationPose. Bridged the gap between 2D tracking and <strong className="text-white print:text-black font-medium">3D pose & shape estimation</strong> in SE(3) space <strong className="text-white print:text-black italic">(Hwacheon Machinery)</strong>.
                                </li>
                            </ul>
                        </div>

                        {/* Job 3 - PERSPECTIVE */}
                        <div className="mb-5 print:mb-4 print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">2D/3D AI Researcher (Generative AI & 3D Vision)</h3>
                                    <p className="text-cyan-400 print:text-blue-700 text-sm">PERSPECTIVE Corp. | Apr 2022 – Apr 2025</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1.5 ml-2">
                                <li>
                                    Architected a photorealistic virtual try-on pipeline by <strong className="text-white print:text-black font-medium">fine-tuning large generative models (Stable Diffusion / Latent Diffusion)</strong> alongside U2Net for cloth segmentation and DensePose for <strong className="text-white print:text-black font-medium">3D avatar pose & shape estimation</strong>. Deployed end-to-end as a <strong className="text-white print:text-black font-medium">Dockerized API service</strong> on AWS.
                                </li>
                                <li>
                                    Created a single-image to <strong className="text-white print:text-black font-medium">3D polygon mesh</strong> reconstruction pipeline using OpenLRM (IoU 0.80). Handled foundational <strong className="text-white print:text-black font-medium">Computer Graphics</strong> tasks including automated Blender (bpy) scripting with <strong className="text-white print:text-black font-medium">Physically Based Rendering (PBR)</strong> lighting to generate customized datasets.
                                </li>
                                <li>
                                    Designed a hierarchical apparel classification system (ResNet50) achieving &gt;95% accuracy across 74 classes.
                                </li>
                                <li>
                                    Led face processing R&D: face reconstruction, audio-driven lip synthesis, and face enhancement utilizing <strong className="text-white print:text-black font-medium">StyleGAN and Diffusion models</strong>.
                                </li>
                            </ul>
                        </div>

                        {/* Job 4 - Ellexi */}
                        <div className="mb-2 print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">AI Developer</h3>
                                    <p className="text-cyan-400 print:text-blue-700 text-sm">Ellexi | Nov 2019 – Oct 2021</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>Built multi-class Object Detection (YOLO) and Pose Estimation (HRNet) tracking pipelines, <strong className="text-white print:text-black font-medium">serving models via ONNX</strong> for high-speed edge hardware (NVIDIA Jetson TX2).</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6 print-section">
                        <h2 className="text-xl font-bold text-white print:text-blue-900 mb-4 border-b border-white/5 print:border-gray-200 pb-1">
                            Education
                        </h2>
                        <div className="mb-3">
                            <h3 className="text-md font-semibold text-white print:text-black">M.S. in Computer Science (Computer Vision focus)</h3>
                            <p className="text-cyan-400 print:text-blue-700 text-sm font-medium">Chung-Ang University (CAU) | Mar 2017 – Sep 2019</p>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2 mt-1">
                                <li>Thesis: Object Segmentation with Active Contours Driven by Weight Matrix</li>
                                <li>Research: Image Segmentation, Geometry Processing, Object Tracking algorithms.</li>
                                <li>CAYSS Scholarship recipient for academic excellence.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold text-white print:text-black">B.S. in Electronic Engineering</h3>
                            <p className="text-cyan-400 print:text-blue-700 text-sm font-medium">GIK Institute | 2011 – 2016</p>
                        </div>
                    </div>

                    {/* Publications */}
                    <div className="mb-2 print-section">
                        <h2 className="text-xl font-bold text-white print:text-blue-900 mb-3 border-b border-white/5 print:border-gray-200 pb-1">
                            Publications (Deep Learning & Segmentation)
                        </h2>
                        <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-2 ml-2">
                            <li className="leading-relaxed">
                                "Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours", <em className="text-cyan-400 print:text-blue-800">CMMM (2020)</em>.
                            </li>
                            <li className="leading-relaxed">
                                "Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation", <em className="text-cyan-400 print:text-blue-800">IEEE Access (2019)</em>.
                            </li>
                            <li className="leading-relaxed">
                                "Generating Pedestrian Training Dataset using DCGAN", <em className="text-cyan-400 print:text-blue-800">Proceedings of the 2019 3rd International Conference on Advances in Image Processing</em>.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <style jsx global>{`
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; color: black !important; }
                    main { padding: 0 !important; margin: 0 !important; }
                    .print-section { break-inside: avoid; margin-bottom: 10px !important; }
                    .break-after-avoid { break-after: avoid; }
                    h1 { margin-bottom: 8px !important; }
                    h2 { margin-top: 15px !important; margin-bottom: 8px !important; }
                    .resume-skills-grid { gap: 10px !important; }
                }
            `}</style>
        </main>
    );
}
