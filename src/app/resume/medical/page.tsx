"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, Mail, Github, Linkedin, Globe } from "lucide-react";

export default function MedicalCombinedResumePage() {
    return (
        <main className="min-h-screen bg-[#070A12] relative py-12 md:py-24 print:bg-white print:py-0 print:px-0">
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
                        Download Combined Medical CV
                    </button>
                </div>

                {/* --- PAGE 1: COVER LETTER --- */}
                <div className="glass-strong rounded-2xl p-8 md:p-12 mb-12 bg-white print:shadow-none print:p-0 print:border-none print:mb-0 print:rounded-none">
                    <div className="space-y-6 text-gray-300 print:text-gray-800 font-serif leading-relaxed text-lg print:text-base">
                        {/* Header Area in Letter */}
                        <div className="border-b border-white/10 print:border-gray-200 pb-8 mb-8">
                            <h1 className="text-3xl font-bold text-white print:text-gray-900 mb-4">Muhammad Tanseef Shahid</h1>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
                                <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> mtanseefshahid@gmail.com</span>
                                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> tanseefshahid.github.io</span>
                                <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid</span>
                            </div>
                        </div>

                        <p>Hiring Committee,</p>

                        <p>
                            I am writing to express my strong interest in the Medical Imaging Specialist position. With over 6 years of experience in 3D Computer Vision and a Master’s degree specifically focused on image segmentation, I am eager to bridge my expertise in high-precision engineering with the medical field.
                        </p>

                        <p>
                            While my recent professional experience has been in industrial metrology and generative 3D AI, my academic and research foundation is deeply rooted in medical imaging. My Master’s thesis was centered on <strong>"Object Segmentation with Active Contours Driven by Weight Matrix,"</strong> and I have co-authored research specifically for the medical domain, such as <strong>"Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours"</strong> (published in CMMM).
                        </p>

                        <p>Key highlights I bring to this role include:</p>

                        <ul className="list-disc ml-6 space-y-4">
                            <li>
                                <strong>Deep Mathematical Expertise:</strong> I have a rigorous understanding of the mathematical foundations of segmentation (Active Contours, Level Sets) and 3D reconstruction. My experience is not limited to using tools, but extends to optimizing the underlying algorithms.
                            </li>
                            <li>
                                <strong>3D Reconstruction & DICOM:</strong> I have completed projects involving the reconstruction of 3D anatomical models from CT/DICOM data. I am highly comfortable with the transition from 2D slices to 3D volumetric surfaces and meshes.
                            </li>
                            <li>
                                <strong>Automation focus:</strong> I am an expert in Python and C++. I don't just perform manual segmentation; I build scripts (including Blender/bpy and PyVista/VTK) to automate workflows. I am eager to apply this to the 3D Slicer API to enhance your project's efficiency.
                            </li>
                            <li>
                                <strong>Technical Versatility:</strong> I understand that medical data has unique acquisition challenges. However, the geometric principles of metrology and sub-millimeter precision I used at Hyvision System translate directly to the reliability required in clinical imaging.
                            </li>
                        </ul>

                        <p>
                            I am looking to pivot my career toward Medical 3D because I am passionate about the impact of this data. I am a fast learner when it comes to specific software tools (like 3D Slicer), provided the underlying mathematics are solid, which they are.
                        </p>

                        <div className="bg-white/5 print:bg-gray-50 p-6 rounded-lg border border-white/10 print:border-gray-200 italic">
                            <p className="font-bold not-italic mb-2 text-white print:text-gray-900">My Approach:</p>
                            I value your time and technical standards. If you are willing to provide a sample dataset and specific task details, I would love to provide a <strong>comprehensive task plan and a Proof of Concept (POC)</strong> before we officially begin. This will allow you to evaluate my methodology and clinical accuracy firsthand.
                        </div>

                        <p>
                            Thank you for your time and consideration. I look forward to the possibility of discussing how my background in high-precision 3D vision can serve your team.
                        </p>

                        <div className="pt-8">
                            <p>Best regards,</p>
                            <p className="font-bold text-xl mt-2 text-white print:text-black">Muhammad Tanseef Shahid</p>
                        </div>
                    </div>
                </div>

                {/* --- FORCED PAGE BREAK ON PRINT --- */}
                <div className="print:break-before-page"></div>

                {/* --- PAGE 2+: FULL RESUME CONTENT --- */}
                <div className="glass-strong rounded-2xl p-8 md:p-12 bg-white/5 print:bg-white print:p-0 print:shadow-none print:border-none">
                    
                    {/* Header */}
                    <div className="border-b border-white/10 print:border-gray-200 pb-8 mb-8 print-section">
                        <div className="resume-header-row flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans gradient-text-vibrant print:bg-none print:text-gray-900 print:text-3xl">
                                    Muhammad Tanseef Shahid
                                </h1>
                                <p className="text-xl text-cyan-400 print:text-blue-700 font-medium">
                                    3D Computer Vision & Medical AI Specialist
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
                             <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> mtanseefshahid@gmail.com</span>
                             <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> tanseefshahid.github.io</span>
                             <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid</span>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-8 print-section">
                        <p className="text-gray-300 print:text-gray-800 leading-relaxed">
                            Computer vision engineer and AI researcher with over <strong className="text-white print:text-black font-semibold">6 years</strong> of experience specializing in 3D computer vision, metrology, and deep learning. Proven expertise in designing comprehensive AI pipelines spanning 3D reconstruction, point cloud processing, pose estimation, and high-precision image segmentation. Published researcher with unique expertise in <strong className="text-white print:text-black font-semibold">Medical Image Segmentation</strong> (Active Contours) and high-fidelity anatomical modeling.
                        </p>
                    </div>

                    {/* Core Competencies */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white print:text-blue-900 mb-4 border-b border-white/5 print:border-gray-200 pb-2">
                            Core Competencies
                        </h2>
                        <div className="resume-skills-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-cyan-400 print:text-blue-700 font-medium mb-2">Computer Vision & 3D</h3>
                                <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1">
                                    <li>Image Segmentation (Active Contours, U-Net, SAM)</li>
                                    <li>3D Reconstruction (DICOM to Mesh, OpenLRM, NeRF)</li>
                                    <li>3D Metrology (RANSAC, PCA, Coordinate Alignment)</li>
                                    <li>6-DoF Pose Estimation (FoundationPose, ICP)</li>
                                    <li>Object Detection & Tracking (YOLO, DeepSORT)</li>
                                    <li>Generative Models (Diffusion, GANs)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-cyan-400 print:text-blue-700 font-medium mb-2">Software & Tools</h3>
                                <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1">
                                    <li>Python, C++, C# (.NET 8), MATLAB</li>
                                    <li>PyTorch, TensorFlow, OpenCV, PCL, Open3D</li>
                                    <li>3D Slicer (Python Scripting), VTK/PyVista</li>
                                    <li>Blender (bpy), Eigen, Helix Toolkit</li>
                                    <li>Docker, Git, ONNX, CUDA, Linux</li>
                                    <li>AWS Multi-GPU deployment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white print:text-blue-900 mb-6 border-b border-white/5 print:border-gray-200 pb-2">
                            Professional Experience
                        </h2>

                        {/* Job 1 - Hyvision */}
                        <div className="mb-8 print:mb-6">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white print:text-black">3D Metrology & AI Engineer</h3>
                                    <p className="text-cyan-400 print:text-blue-700">Hyvision System | 2025 – Present</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>Architected a high-speed 3D laser inspection system using <strong className="font-semibold">PCL</strong> and <strong className="font-semibold">RANSAC/Eigen</strong>-based coordinate alignment, achieving sub-millimeter measurement precision.</li>
                                <li>Developed a 3D alignment application with <strong className="font-semibold">ICP best-fit</strong>, landmark registration (SVD), and interactive noise removal using <strong className="font-semibold">VTK/PyVista</strong>.</li>
                                <li>Designed a modular 3D rendering engine with a visual node-based workflow editor (ECS architecture, .NET 8/WPF).</li>
                            </ul>
                        </div>

                        {/* Job 2 - Luxolis */}
                        <div className="mb-8 print:mb-6">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white print:text-black">Computer Vision Engineer</h3>
                                    <p className="text-cyan-400 print:text-blue-700">Luxolis | 2025</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>Deployed a real-time defect detection system using a synchronized <strong className="font-semibold">6-camera Basler array</strong> with YOLO inference (&lt;200ms latency).</li>
                                <li>Built an <strong className="font-semibold">eye-in-hand 6-DoF pose estimation</strong> pipeline using RGB-D camera and FoundationPose (zero-shot).</li>
                            </ul>
                        </div>

                        {/* Job 3 - PERSPECTIVE */}
                        <div className="mb-8 print:mb-6">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white print:text-black">2D/3D AI Researcher</h3>
                                    <p className="text-cyan-400 print:text-blue-700">PERSPECTIVE Corp. | 2022 – 2025</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>Architected a photorealistic virtual try-on pipeline using <strong className="font-semibold">Latent Diffusion</strong>, achieving 85%+ pattern fidelity.</li>
                                <li>Created a single-image to <strong className="font-semibold">3D mesh reconstruction</strong> pipeline using OpenLRM (IoU 0.80) with procedural Blender datasets.</li>
                                <li>Designed a hierarchical apparel classification system achieving &gt;95% accuracy using specialized sub-classifiers.</li>
                            </ul>
                        </div>

                        {/* Job 4 - Ellexi */}
                        <div className="mb-2">
                            <div className="resume-job-row flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-white print:text-black">AI Developer</h3>
                                    <p className="text-cyan-400 print:text-blue-700">Ellexi | 2019 – 2021</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>Developed an ALPR system and PPE compliance detection on **NVIDIA Jetson TX2**.</li>
                                <li>Built an **anomaly detection & tracking** system for Incheon Airport using YOWO (3D-CNN) and HRNet.</li>
                                <li>Created a gas meter inspection pipeline using CRAFT + Tesseract OCR and Mask R-CNN.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white print:text-blue-900 mb-6 border-b border-white/5 print:border-gray-200 pb-2">
                            Education
                        </h2>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold text-white print:text-black">M.S. in Computer Science (Computer Vision focus)</h3>
                            <p className="text-cyan-400 print:text-blue-700 font-medium">Chung-Ang University | 2017 – 2019</p>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2 mt-1">
                                <li>Thesis: Object Segmentation with Active Contours Driven by Weight Matrix</li>
                                <li>Research Focus: Medical Image Segmentation, Object Detection & Tracking</li>
                                <li>CAYSS Scholarship recipient for academic excellence</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white print:text-black">B.S. in Electronic Engineering</h3>
                            <p className="text-cyan-400 print:text-blue-700 font-medium">GIK Institute | 2011 – 2016</p>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2 mt-1">
                                <li>FYP: Smart Blind Navigation System (OpenCV, Raspberry Pi)</li>
                                <li>Secured 2nd position in the final year project competition</li>
                            </ul>
                        </div>
                    </div>

                    {/* Publications */}
                    <div className="mb-10 print-section">
                        <h2 className="text-2xl font-bold text-white print:text-blue-900 mb-6 border-b border-white/5 print:border-gray-200 pb-2">
                            Publications
                        </h2>
                        <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-3 ml-2">
                            <li>
                                "Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours", <em className="text-cyan-400 print:text-blue-800">CMMM (2020)</em>.
                            </li>
                            <li>
                                "Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation", <em className="text-cyan-400 print:text-blue-800">IEEE Access (2019)</em>.
                            </li>
                            <li>
                                "Generating Pedestrian Training Dataset using DCGAN", <em className="text-cyan-400 print:text-blue-800">Proceedings of ICIP (2019)</em>.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; }
                    main { padding: 0 !important; }
                    .print-break-before-page { page-break-before: always; }
                }
            `}</style>
        </main>
    );
}
