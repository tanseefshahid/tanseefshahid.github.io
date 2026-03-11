"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, Mail, Github, Linkedin, Globe } from "lucide-react";
import { notFound } from "next/navigation";

export default function ResumePage() {
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
                                    2D/3D Computer Vision & AI Engineer
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
                            <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" /> linkedin.com/in/tanseef</span>
                            <span className="flex items-center gap-1"><Github className="w-4 h-4" /> github.com/tanseefshahid</span>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-8 print-section">
                        <p className="text-gray-300 leading-relaxed">
                            Computer vision engineer and AI researcher with over <strong className="text-white">6 years</strong> of experience specializing in 3D computer vision, metrology, and deep learning. Proven expertise in designing comprehensive AI pipelines spanning 3D reconstruction, point cloud processing, pose estimation, object detection, and image segmentation. Adept at bridging mathematical algorithms with modern artificial intelligence to build robust systems, with a strong track record of delivering high-precision 3D measurement tools and scalable 2D/3D vision solutions for complex industrial environments.
                        </p>
                    </div>

                    {/* Core Competencies */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/5 pb-2">
                            Core Competencies
                        </h2>
                        <div className="resume-skills-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-cyan-400 font-medium mb-2">Computer Vision & 3D</h3>
                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                    <li>Object Detection & Tracking (YOLO, DeepSORT, Mask R-CNN)</li>
                                    <li>Image Segmentation (U-Net, U2Net, SAM, Active Contours)</li>
                                    <li>3D Reconstruction (NeRF, OpenLRM, Point Cloud to Mesh)</li>
                                    <li>6-DoF Pose Estimation (FoundationPose, ICP, Hand-Eye Calib.)</li>
                                    <li>3D Metrology (RANSAC, PCA, FAI, Coordinate Alignment)</li>
                                    <li>Generative Models (Latent Diffusion, GANs, Textual Inversion)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-cyan-400 font-medium mb-2">Software & Tools</h3>
                                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                                    <li>Python, C++, C# (.NET 8), TypeScript, MATLAB</li>
                                    <li>PyTorch, TensorFlow, OpenCV, PCL, Open3D</li>
                                    <li>Blender (bpy), PyVista/VTK, Eigen, Helix Toolkit</li>
                                    <li>Docker, Git, ONNX, CUDA, Linux</li>
                                    <li>MFC, WPF, PyQt, Flask, React/Next.js</li>
                                    <li>NVIDIA Jetson, Basler GigE, PLC/GPIO, AWS</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-2">
                            Professional Experience
                        </h2>

                        {/* Job 1 - Hyvision */}
                        <div className="mb-8">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">3D Metrology & AI Engineer</h3>
                                    <p className="text-cyan-400">Hyvision System</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Aug 2025 – Present</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Architected a high-speed 3D laser inspection system for UMP modules using <strong className="text-white">PCL</strong> and <strong className="text-white">RANSAC/Eigen</strong>-based coordinate alignment, achieving sub-millimeter measurement precision with automated FAI validation against SQL Server specifications.</li>
                                <li>Developed a PolyWorks-style 3D alignment application with <strong className="text-white">ICP best-fit</strong>, landmark registration (SVD), and interactive lasso-based noise removal, processing point clouds of 1M+ points in real-time using <strong className="text-white">VTK/PyVista</strong>.</li>
                                <li>Designed a modular 3D rendering engine with a visual <strong className="text-white">node-based workflow editor</strong> (ECS architecture, .NET 8/WPF), enabling non-programmers to build custom inspection pipelines via drag-and-drop with an extensible plugin system.</li>
                            </ul>
                        </div>

                        {/* Job 2 - Luxolis */}
                        <div className="mb-8">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Computer Vision Engineer</h3>
                                    <p className="text-cyan-400">Luxolis</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Apr 2025 – Jul 2025</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2">
                                <li>Deployed a real-time 360° defect detection system using a synchronized <strong className="text-white">6-camera Basler GigE array</strong> with YOLO inference, achieving <strong className="text-white">&lt;200ms end-to-end latency at 5 parts/sec</strong>. Integrated with PLCs via NuDAQ I/O for pneumatic rejection of defective units.</li>
                                <li>Built an <strong className="text-white">eye-in-hand 6-DoF pose estimation</strong> pipeline for autonomous CNC machining using an RGB-D camera, FoundationPose (zero-shot), and ICP refinement. This eliminates manual fixturing and enables dynamic toolpath adjustment in SE(3) space.</li>
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
                                <li>Architected a photorealistic <strong className="text-white">virtual try-on</strong> pipeline using LADi-VTON (Latent Diffusion), DensePose, U2Net cloth segmentation, and CLIP textual inversion, achieving <strong className="text-white">85%+ pattern fidelity</strong>. Deployed on AWS with Docker.</li>
                                <li>Created a single-image to <strong className="text-white">3D mesh reconstruction</strong> pipeline using OpenLRM, achieving IoU 0.80 and Chamfer Distance 0.08 with 24×360° Blender-rendered training views enhanced by ESRGAN.</li>
                                <li>Designed a hierarchical <strong className="text-white">apparel classification</strong> system (ResNet50) achieving <strong className="text-white">&gt;95% accuracy across 74 classes</strong> using 3-depth taxonomy with specialized sub-classifiers.</li>
                                <li>Led face processing R&D: face reconstruction, audio-driven lip synthesis, and face enhancement using GANs and diffusion models.</li>
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
                                <li>Developed a real-time <strong className="text-white">ALPR system</strong> for gas station automation using YOLO + CRNN with synthetic license plate data, achieving <strong className="text-white">98% recognition accuracy</strong> with DeepSORT tracking.</li>
                                <li>Deployed a <strong className="text-white">PPE compliance detection</strong> system on <strong className="text-white">NVIDIA Jetson TX2</strong> for construction sites with multi-class YOLO inference and real-time geo-fenced hazard zone alerts.</li>
                                <li>Built an <strong className="text-white">anomaly detection & multi-camera tracking</strong> system for Incheon Airport using YOWO (3D-CNN), HRNet pose estimation, and Person Re-ID — detecting falls, sprinting, and abandoned baggage.</li>
                                <li>Created a <strong className="text-white">gas meter inspection</strong> pipeline using CRAFT + Tesseract OCR with Mask R-CNN segmentation, digitizing date stamps from weathered boiler plates.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-2">
                            Education
                        </h2>

                        <div className="mb-4">
                            <div className="resume-job-row flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">M.S. in Computer Science (Computer Vision)</h3>
                                    <p className="text-cyan-400">Chung-Ang University (CAU)</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>Mar 2017 – Sep 2019</p>
                                    <p>Seoul, South Korea</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2 mt-1">
                                <li>Thesis: Object Segmentation with Active Contours Driven by Weight Matrix</li>
                                <li>Research Focus: Active Contours, Image Segmentation, Object Detection & Tracking</li>
                                <li>CAYSS Scholarship recipient (Chung-Ang Young Scientist Scholarship)</li>
                            </ul>
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
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-2 mt-1">
                                <li>FYP: Smart Blind Navigation System (Raspberry Pi, OpenCV, GSM)</li>
                                <li>Secured 2nd position in the final year project competition</li>
                            </ul>
                        </div>
                    </div>

                    {/* Publications */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/5 pb-2">
                            Publications
                        </h2>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white mb-3">Journals & Conferences</h3>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-3 ml-2">
                                <li className="leading-relaxed">
                                    A. Munir, S. Soomro, <strong className="text-white">M.T. Shahid</strong>, T.A. Soomro, K.N. Choi. "Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation", <em className="text-cyan-400">IEEE Access</em> (2019).
                                </li>
                                <li className="leading-relaxed">
                                    Kim, D. D., <strong className="text-white">M.T. Shahid</strong>, Kim, Y., Lee, W. J., Song, H. C., Piccialli, F., Choi, K. N. "Generating Pedestrian Training Dataset using DCGAN", <em className="text-cyan-400">Proceedings of the 2019 3rd International Conference on Advances in Image Processing</em> (2019).
                                </li>
                                <li className="leading-relaxed">
                                    Memon, Asif Aziz, Shafiullah Soomro, <strong className="text-white">M.T. Shahid</strong>, Asad Munir, Asim Niaz, and Kwang Nam Choi. "Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours", <em className="text-cyan-400">Computational and Mathematical Methods in Medicine</em> (2020).
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-3">Master's Thesis</h3>
                            <ul className="list-disc list-inside text-gray-300 text-sm space-y-3 ml-2">
                                <li className="leading-relaxed">
                                    "Object Segmentation with Active Contours Driven by Weight Matrix", 131th Master's Thesis, <em className="text-cyan-400">Chung-Ang University</em>.
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </main>
    );
}
