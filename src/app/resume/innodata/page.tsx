"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, Mail, Github, Linkedin, Globe } from "lucide-react";

export default function InnodataResumePage() {
    return (
        <main className="min-h-screen bg-[#070A12] relative overflow-hidden py-12 md:py-24 print:bg-white print:overflow-visible print:py-0">
            {/* Background elements - hidden on print */}
            <div className="fixed inset-0 pointer-events-none z-0 no-print">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Print and Navigation actions - hidden on print */}
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
                        Download PDF for Innodata
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
                                <p className="text-xl text-purple-400 font-medium print:text-indigo-700">
                                    Solutions Architect (Robotics & Physical AI)
                                </p>
                            </div>
                            <div className="shrink-0 no-print">
                                <Image
                                    src="/Tanseef_Shahid_grey.jpg"
                                    alt="Muhammad Tanseef Shahid"
                                    width={140}
                                    height={140}
                                    className="w-[140px] h-[140px] rounded-full object-cover object-[center_20%] border-4 border-purple-500/20 bg-white/5"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
                            <a href="mailto:mtanseefshahid@gmail.com" className="flex items-center gap-1 hover:text-purple-400 transition-colors">
                                <Mail className="w-4 h-4" /> mtanseefshahid@gmail.com
                            </a>
                            <a href="https://tanseefshahid.github.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-purple-400 transition-colors">
                                <Globe className="w-4 h-4" /> tanseefshahid.github.io
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-tanseef-shahid/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-purple-400 transition-colors">
                                <Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid
                            </a>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-6 print-section text-sm lg:text-base">
                        <p className="text-gray-300 print:text-gray-800 leading-relaxed">
                            Solutions-oriented **Physical AI & Vision Architect** with over **6 years** of hands-on experience bridging deep learning with real-world physical systems. Proven expertise as a trusted technical partner for Tier-1 robotics and manufacturing clients (e.g., Apple Project, Hwacheon Machinery), translating complex physical constraints into highly effective 3D data pipelines, synthetic environments, and evaluation workflows. Deeply skilled in modeling embodied AI problems—from 6-DoF robotic manipulation and egocentric coordinate alignment to 3D avatar pose estimation. Highly proficient in Python and C++, I excel at prototyping world models, generating synthetic datasets via digital twins (Blender/PBR), and driving pre-sales technical pilots from discovery to delivery.
                        </p>
                    </div>

                    {/* Core Competencies tailored for Innodata */}
                    <div className="mb-6 print-section">
                        <h2 className="text-xl font-bold text-white print:text-indigo-900 mb-3 border-b border-white/5 print:border-gray-200 pb-1">
                            Technical Skills & Physical AI Expertise
                        </h2>
                        <div className="resume-skills-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-purple-400 print:text-indigo-700 font-medium mb-2 text-sm">Robotics & Physical AI</h3>
                                <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1">
                                    <li><strong className="text-white print:text-black font-medium">Physical AI Problem Formulation</strong> & Affordances</li>
                                    <li><strong className="text-white print:text-black font-medium">Synthetic Data & Simulation</strong> (Blender, PBR, DCGAN)</li>
                                    <li>6-DoF Pose & Egocentric Representation (FoundationPose)</li>
                                    <li>3D Object Reconstruction & Avatar Pose Estimation</li>
                                    <li>Large-scale CV Annotation & Data Pipeline Architecture</li>
                                    <li>VLMs & Generative Representation Pipelines (Stable Diffusion)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-purple-400 print:text-indigo-700 font-medium mb-2 text-sm">Software & Customer Architecture</h3>
                                <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1">
                                    <li><strong className="text-white print:text-black font-medium">Python & C++ Hands-On Development</strong></li>
                                    <li><strong className="text-white print:text-black font-medium">Pre-Sales Pilot Scoping & Technical Validation</strong></li>
                                    <li>Hardware/Sensors Integration (RGB-D, Basler GigE, PLC)</li>
                                    <li>3D Environment Rendering (Open3D, PyVista, VTK, PCL)</li>
                                    <li>Deployment & Ops (Docker, ONNX, Git, TensorRT, AWS)</li>
                                    <li>Technical Communication & Customer Needs Assessment</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-white print:text-indigo-900 mb-4 border-b border-white/5 print:border-gray-200 pb-1 print:mb-2 break-after-avoid">
                            Professional Experience
                        </h2>

                        {/* Job 1 - Hyvision */}
                        <div className="mb-5 print:mb-4 print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">3D Metrology & Systems Development Engineer</h3>
                                    <p className="text-purple-400 print:text-indigo-700 text-sm italic">Hyvision System | Aug 2025 – Present</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>
                                    Architected the data evaluation framework and 3D application for physical mobile jig/frame inspection using Keyence laser profilers. Processed dense point cloud data pipelines to perform automated geometric evaluation <strong className="text-white print:text-black italic font-bold">(Apple Project)</strong>.
                                </li>
                                <li>
                                    Served as the central technical partner for On-Site Supervisors (OSS). Ran discovery on field application roadblocks, designed new physical measurement algorithms, and shipped compiled DLL updates directly to the factory floor, securing the "technical win" for manufacturing partners.
                                </li>
                                <li>
                                    Prototyped and built a modular real-world rendering engine utilizing an extensible node-based workflow editor (.NET 8), enabling non-programmers and product teams to dynamically test inspection recipes.
                                </li>
                            </ul>
                        </div>

                        {/* Job 2 - Luxolis */}
                        <div className="mb-5 print:mb-4 print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">Advanced Vision Systems Engineer (Robotics Context)</h3>
                                    <p className="text-purple-400 print:text-indigo-700 text-sm italic">Luxolis | Apr 2025 – Jul 2025</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>
                                    Engineered a high-precision <strong className="text-white print:text-black font-medium">eye-in-hand 6-DoF pose estimation pipeline for autonomous CNC manipulators</strong>. Mapped real-world robotic behavior into actionable data processing pipelines using RGB-D and FoundationPose, successfully eliminating manual fixturing <strong className="text-white print:text-black italic font-bold">(Hwacheon Machinery)</strong>.
                                </li>
                                <li>
                                    Designed synchronized multi-sensor capture systems (6-camera GigE array) to generate real-world annotated data for YOLO models. Coordinated with industrial automation PLCs, demonstrating measurable uplift in high-stress production environments.
                                </li>
                            </ul>
                        </div>

                        {/* Job 3 - PERSPECTIVE */}
                        <div className="mb-5 print:mb-4 print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">AI & Geometry Research Engineer</h3>
                                    <p className="text-purple-400 print:text-indigo-700 text-sm italic">PERSPECTIVE Corp. | Apr 2022 – Apr 2025</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1.5 ml-2">
                                <li>
                                    <strong className="text-white print:text-black font-medium">Synthetic Environments:</strong> Scripted automated digital twin generation pipelines in Blender (bpy), leveraging Physically Based Rendering (PBR) to produce massive, high-fidelity synthetic 3D datasets for perception models. 
                                </li>
                                <li>
                                    <strong className="text-white print:text-black font-medium">Embodied AI Precursors:</strong> Developed end-to-end 3D avatar extraction from noisy data. Designed deep CV annotation pipelines involving DensePose for human shape evaluation and cloth affordance mapping. Deployed the resulting models as scalable Dockerized solutions for the enterprise client, Stylebot.
                                </li>
                                <li>
                                    Prototyped image-to-3D polygon mesh workflows (OpenLRM, latent diffusion models). Defined concrete metrics (Chamfer distance, IoU) to benchmark representation quality against physical constraints.
                                </li>
                            </ul>
                        </div>

                        {/* Job 4 - Ellexi */}
                        <div className="print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">Field Systems Solutions & AI Developer</h3>
                                    <p className="text-purple-400 print:text-indigo-700 text-sm italic">Ellexi | Nov 2019 – Oct 2021</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>
                                    Operated as a technical partner on-site to translate physical security and logistics problems into data-driven spatial hazard trackers running on NVIDIA Jetson edge systems.
                                </li>
                                <li>
                                    Scoped, annotated, and trained dense CV models to evaluate worker actions (PPE compliance, teleoperation-like anomaly tracking) using YOWO and YOLO architectures. 
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6 print-section">
                        <h2 className="text-xl font-bold text-white print:text-indigo-900 mb-4 border-b border-white/5 print:border-gray-200 pb-1">
                            Education
                        </h2>
                        <div className="mb-3">
                            <h3 className="text-md font-semibold text-white print:text-black text-sm">M.S. in Computer Science (Computer Vision & Geometry Focus)</h3>
                            <p className="text-purple-400 print:text-indigo-700 text-xs font-medium italic">Chung-Ang University (CAU) | Mar 2017 – Sep 2019</p>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-xs space-y-1 ml-2 mt-1">
                                <li>Thesis: Object Segmentation with Active Contours Driven by Weight Matrix (Geometry Processing)</li>
                                <li>CAYSS Scholarship recipient for academic excellence in technical research.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold text-white print:text-black text-sm">B.S. in Electronic Engineering</h3>
                            <p className="text-purple-400 print:text-indigo-700 text-xs font-medium italic">GIK Institute | 2011 – 2016</p>
                            <p className="text-gray-300 print:text-gray-800 text-xs ml-2 mt-1">Foundational knowledge in signals, sensors, and hardware-software physical logic.</p>
                        </div>
                    </div>

                    {/* Publications */}
                    <div className="mb-2 print-section">
                        <h2 className="text-xl font-bold text-white print:text-indigo-900 mb-3 border-b border-white/5 print:border-gray-200 pb-1">
                            Technical Publications
                        </h2>
                        <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-xs space-y-2 ml-2">
                            <li className="leading-relaxed italic">"Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours", CMMM (2020).</li>
                            <li className="leading-relaxed italic">"Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation", IEEE Access (2019).</li>
                            <li className="leading-relaxed italic">"Generating Pedestrian Training Dataset using DCGAN" - Proof of concept for synthetic data generation pipelines (2019).</li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    .no-print { display: none !important; }
                    body { background: white !important; color: black !important; }
                    main { padding: 0 !important; margin: 0 !important; }
                    .print-section { break-inside: avoid; margin-bottom: 8px !important; }
                    .break-after-avoid { break-after: avoid; }
                    h1 { margin-bottom: 6px !important; letter-spacing: -0.02em; }
                    h2 { margin-top: 12px !important; margin-bottom: 6px !important; }
                    .resume-skills-grid { gap: 8px !important; }
                }
                .gradient-text-vibrant {
                    background: linear-gradient(135deg, #c084fc 0%, #818cf8 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .glass-strong {
                    background: rgba(10, 15, 30, 0.7);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .glow-purple {
                    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
                }
            `}</style>
        </main>
    );
}
