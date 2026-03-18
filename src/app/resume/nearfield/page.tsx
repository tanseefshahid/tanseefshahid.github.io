"use client";

import Link from "next/link";
import Image from "next/image";
import { Download, ArrowLeft, Mail, Github, Linkedin, Globe } from "lucide-react";

export default function NearfieldResumePage() {
    return (
        <main className="min-h-screen bg-[#070A12] relative overflow-hidden py-12 md:py-24 print:bg-white print:overflow-visible print:py-0">
            {/* Background elements - hidden on print */}
            <div className="fixed inset-0 pointer-events-none z-0 no-print">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Print and Navigation actions - hidden on print */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 no-print">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>

                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:opacity-90 transition-all shadow-lg glow-blue"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF for Nearfield
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
                                <p className="text-xl text-blue-400 font-medium print:text-blue-700">
                                    Advanced Metrology & Systems Development Engineer
                                </p>
                            </div>
                            <div className="shrink-0 no-print">
                                <Image
                                    src="/Tanseef_Shahid_grey.jpg"
                                    alt="Muhammad Tanseef Shahid"
                                    width={140}
                                    height={140}
                                    className="w-[140px] h-[140px] rounded-full object-cover object-[center_20%] border-4 border-blue-500/20 bg-white/5"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
                            <a href="mailto:mtanseefshahid@gmail.com" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                                <Mail className="w-4 h-4" /> mtanseefshahid@gmail.com
                            </a>
                            <a href="https://tanseefshahid.github.io" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                                <Globe className="w-4 h-4" /> tanseefshahid.github.io
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-tanseef-shahid/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                                <Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid
                            </a>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="mb-6 print-section text-sm lg:text-base">
                        <p className="text-gray-300 print:text-gray-800 leading-relaxed">
                            Solutions-oriented **Systems Engineer & Metrology Researcher** with over **6 years** of experience in high-precision 3D measurement, automated data analysis, and advanced algorithm development. Proven track record of architecting end-to-end inspection systems for Tier-1 technology companies (e.g., **Apple Project**) in high-throughput manufacturing environments. Expert in bridging the gap between R&D, field applications, and customer requirements, focusing on high-accuracy **Coordinate Alignment**, **Statistical Yield Optimization**, and **Automated FAI (First Article Inspection)**. Deeply proficient in Python, C++, and MATLAB for complex data visualization and metrology solution engineering.
                        </p>
                    </div>

                    {/* Core Competencies tailored for Nearfield */}
                    <div className="mb-6 print-section">
                        <h2 className="text-xl font-bold text-white print:text-blue-900 mb-3 border-b border-white/5 print:border-gray-200 pb-1">
                            Technical Skills & Metrology Expertise
                        </h2>
                        <div className="resume-skills-grid grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="text-blue-400 print:text-blue-700 font-medium mb-2 text-sm">Metrology & Systems Engineering</h3>
                                <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1">
                                    <li><strong className="text-white print:text-black font-medium">3D Metrology & Precision Alignment</strong> (RANSAC, ICP, SVD)</li>
                                    <li><strong className="text-white print:text-black font-medium">Sub-micron Geometric Analysis</strong> (Geometric Dimensioning & Tolerancing)</li>
                                    <li>Automated **Measurement Recipe Development** for high-throughput Ffabs</li>
                                    <li>Hardware-Software Integration: **PLC/NuDAQ, Basler GigE, PLC Interface**</li>
                                    <li>System Calibration & Yield Optimization</li>
                                    <li>Field Application Services & Corporate Training</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-blue-400 print:text-blue-700 font-medium mb-2 text-sm">Data Analysis & Development</h3>
                                <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1">
                                    <li><strong className="text-white print:text-black font-medium">Python & MATLAB Data Analysis</strong> (Visualization, Statistics, FFT)</li>
                                    <li><strong className="text-white print:text-black font-medium">C++, C# (.NET 8), & Eigen-based Metrology Algorithms</strong></li>
                                    <li>3D Point Cloud Processing (**PCL, Open3D, PyVista**)</li>
                                    <li>Algorithm Optimization for Real-time Systems (**ONNX, TensorRT**)</li>
                                    <li>Database Integration (**SQL Server**) for Metrology Data Management</li>
                                    <li>Expert knowledge of **3D Polygon Meshes & Parametric CAD Models**</li>
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
                                    <h3 className="text-md font-semibold text-white print:text-black">3D Metrology & Systems Development Engineer</h3>
                                    <p className="text-blue-400 print:text-blue-700 text-sm italic">Hyvision System | Aug 2025 – Present</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>
                                    Architected a high-speed 3D laser metrology system (UMP software) for mobile jig/frame inspection using <strong className="text-white print:text-black font-medium">Keyence LJ-X8080 laser profilers</strong>. Processed dense point cloud data to perform automated FAI, extracting precise geometric features (circles, lines, curves) for dimensional analysis <strong className="text-white print:text-black italic font-bold">(Apple Project)</strong>.
                                </li>
                                <li>
                                    Developed a PolyWorks-style metrology application for automated FAI (First Article Inspection). Enabled real-time **Best-fit Alignment (ICP)** of high-density point clouds (1M+ pts) against **Parametric CAD models** to identify production deviations.
                                </li>
                                <li>
                                    Collaborated continuously with On-Site Supervisors (OSS) to provide real-time engineering solutions. Diagnosed issues with both current and legacy metrology software, rapidly designing and deploying new measurement algorithms via compiled <strong className="text-white print:text-black font-medium">DLL updates</strong> to resolve field application challenges.
                                </li>
                                <li>
                                    Built a modular visual workflow engine (ECS architecture, .NET 8) for system technicians to create custom inspection pipelines, bridging the gap between R&D and onsite factory operations.
                                </li>
                            </ul>
                        </div>

                        {/* Job 2 - Luxolis */}
                        <div className="mb-5 print:mb-4 print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">Advanced Vision Systems Engineer</h3>
                                    <p className="text-blue-400 print:text-blue-700 text-sm italic">Luxolis | Apr 2025 – Jul 2025</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>
                                    Deployed a synchronized multi-camera defect detection system for industrial hardware inspection. Optimized real-time data analysis pipelines using **Python and ONNX**, achieving <strong className="text-white print:text-black font-medium">on-device sub-200ms latency</strong> at production speeds (5 units/sec) <strong className="text-white print:text-black italic font-bold">(Pungkang Co. Ltd.)</strong>.
                                </li>
                                <li>
                                    Engineered a high-precision **eye-in-hand 6-DoF pose estimation** system for autonomous CNC manufacturing. Integrated live RGB-D sensor data with ICP refinement for sub-millimeter positioning accuracy in high-stress industrial environments <strong className="text-white print:text-black italic font-bold">(Hwacheon Machinery)</strong>.
                                </li>
                                <li>
                                    Managed hardware-software integration for **Basler GigE camera arrays** and NuDAQ I/O PLC components, ensuring robust system stability for client onsite deployment.
                                </li>
                            </ul>
                        </div>

                        {/* Job 3 - PERSPECTIVE */}
                        <div className="mb-5 print:mb-4 print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">AI & Geometry Research Engineer</h3>
                                    <p className="text-blue-400 print:text-blue-700 text-sm italic">PERSPECTIVE Corp. | Apr 2022 – Apr 2025</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1.5 ml-2">
                                <li>
                                    Led 2D-to-3D reconstruction research, transforming single-view images into accurate <strong className="text-white print:text-black font-medium">3D polygon meshes</strong> using OpenLRM and PCL. Achieved IoU of 0.80 through optimized geometry processing and dense mesh refinement.
                                </li>
                                <li>
                                    Architected complex virtual try-on pipelines utilizing Latent Diffusion models and **DensePose** for precise shape estimation, successfully deploying Dockerized API services for commercial clients (Stylebot).
                                </li>
                                <li>
                                    Developed automated **Blender (bpy) scripts** for synthetic dataset generation with physically based rendering (PBR) lighting, proving expertise in complex 3D simulation and modeling.
                                </li>
                            </ul>
                        </div>

                        {/* Job 4 - Ellexi */}
                        <div className="print-section">
                            <div className="resume-job-row flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-md font-semibold text-white print:text-black">Field Systems Support & AI Developer</h3>
                                    <p className="text-blue-400 print:text-blue-700 text-sm italic">Ellexi | Nov 2019 – Oct 2021</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-sm space-y-1 ml-2">
                                <li>Designed and deployed real-time tracking (YOLO + DeepSORT) and pose estimation systems for critical safety and logistics monitoring.</li>
                                <li>Optimized edge hardware deployment on **NVIDIA Jetson TX2** using ONNX, ensuring consistent on-device performance for safety-critical field environments.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6 print-section">
                        <h2 className="text-xl font-bold text-white print:text-blue-900 mb-4 border-b border-white/5 print:border-gray-200 pb-1">
                            Education
                        </h2>
                        <div className="mb-3">
                            <h3 className="text-md font-semibold text-white print:text-black text-sm">M.S. in Computer Science (Computer Vision & Geometry Focus)</h3>
                            <p className="text-blue-400 print:text-blue-700 text-xs font-medium italic">Chung-Ang University (CAU) | Mar 2017 – Sep 2019</p>
                            <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-xs space-y-1 ml-2 mt-1">
                                <li>Thesis: Object Segmentation with Active Contours Driven by Weight Matrix (Geometry Processing)</li>
                                <li>CAYSS Scholarship recipient for academic excellence in technical research.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-md font-semibold text-white print:text-black text-sm">B.S. in Electronic Engineering</h3>
                            <p className="text-blue-400 print:text-blue-700 text-xs font-medium italic">GIK Institute | 2011 – 2016</p>
                            <p className="text-gray-300 print:text-gray-800 text-xs ml-2 mt-1">Foundational knowledge in signals, sensors, and hardware-software integration.</p>
                        </div>
                    </div>

                    {/* Publications */}
                    <div className="mb-2 print-section">
                        <h2 className="text-xl font-bold text-white print:text-blue-900 mb-3 border-b border-white/5 print:border-gray-200 pb-1">
                            Technical Publications
                        </h2>
                        <ul className="list-disc list-inside text-gray-300 print:text-gray-800 text-xs space-y-2 ml-2">
                            <li className="leading-relaxed italic">"Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours", CMMM (2020).</li>
                            <li className="leading-relaxed italic">"Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation", IEEE Access (2019).</li>
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
                    background: linear-gradient(135deg, #60a5fa 0%, #2dd4bf 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .glass-strong {
                    background: rgba(10, 15, 30, 0.7);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .glow-blue {
                    box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
                }
            `}</style>
        </main>
    );
}
