"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { printWithFilename } from "@/lib/printWithFilename";

export default function LmiResumePage() {
    if (process.env.NODE_ENV === 'production') {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-100 py-8 md:py-12 print:bg-white print:py-0">
            <div className="max-w-[8.5in] mx-auto px-4 sm:px-6">
                {/* Action bar - hidden on print */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 no-print">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>

                    <button
                        onClick={() => printWithFilename("LMI-Technologies")}
                        className="flex items-center gap-2 px-5 py-2 rounded text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-all"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>

                {/* Resume Document */}
                <article className="bg-white text-gray-900 shadow-md print:shadow-none p-10 md:p-14 print:p-0 font-serif resume-doc">
                    {/* Header */}
                    <header className="mb-6 pb-3 border-b border-gray-300">
                        <h1 className="text-[28pt] font-normal text-gray-900 leading-tight mb-1">
                            Muhammad Tanseef Shahid
                        </h1>
                        <p className="text-[10pt] text-gray-700">
                            <a href="mailto:mtanseefshahid@gmail.com" className="hover:underline">mtanseefshahid@gmail.com</a>
                            <span className="mx-2">•</span>
                            <a href="https://tanseefshahid.github.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">tanseefshahid.github.io</a>
                            <span className="mx-2">•</span>
                            <a href="https://www.linkedin.com/in/muhammad-tanseef-shahid/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/muhammad-tanseef-shahid</a>
                        </p>
                    </header>

                    {/* Summary */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-1 pb-1 border-b border-gray-300">
                            SUMMARY
                        </h2>
                        <p className="text-[10pt] text-gray-800 leading-snug">
                            Vision software developer with 6+ years of professional experience in machine vision, 3D metrology, and image processing, with deep hands-on expertise on industrial laser profilers (Keyence LJ-X8080) and 3D smart sensors. Strong C/C++ engineer with a solid mathematical foundation in linear algebra, 3D geometry, and statistics. Proven track record translating vague customer requirements into shipped C++ algorithms for pre-processing, segmentation, feature extraction, and sub-millimeter 3D measurement. Built custom laser simulation and prototyping tools to evaluate sensor placement, scan strategies, and hardware feasibility before deployment.
                        </p>
                    </section>

                    {/* Core Skills - directly mirroring LMI's stack */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            CORE SKILLS
                        </h2>
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>Languages:</strong> C/C++ (6+ yrs, production), Python (6+ yrs), C# / .NET 8 (WPF), MATLAB</p>
                            <p><strong>3D Smart Sensors &amp; Laser Profilers:</strong> Keyence LJ-X8080 laser profilers (production), Basler GigE cameras, RGB-D depth sensors, structured-light scanners, multi-camera arrays</p>
                            <p><strong>Vision Libraries:</strong> OpenCV, Point Cloud Library (PCL), Open3D, Eigen, VTK/PyVista, trimesh, Helix Toolkit</p>
                            <p><strong>3D Metrology &amp; Algorithms:</strong> Pre-processing, segmentation, feature extraction, ICP best-fit registration, RANSAC primitive fitting, SVD landmark registration, PCA, coordinate-frame alignment, FAI tolerance validation, plane / cylinder / edge fitting</p>
                            <p><strong>Applied Math &amp; Physics:</strong> Linear algebra (Eigen), 3D geometry (SE(3) rigid transforms, rotation matrices, ray-mesh intersection, homography), statistics (curve fitting, error modeling), variational methods, p-Laplace PDEs</p>
                            <p><strong>Real-Time &amp; Parallel:</strong> Multi-threaded C++ pipelines, parallelized raycasting, real-time point cloud processing (1M+ points), low-latency inference (&lt;200ms)</p>
                            <p><strong>HMI &amp; UI:</strong> .NET 8 / WPF (ECS architecture), PyQt5 / PySide, MFC, node-based visual editors, drag-and-drop workflow tools, 3D viewers (VTK/PyVista)</p>
                            <p><strong>Sensor &amp; Hardware Integration:</strong> PLC / NuDAQ I/O, GPIO, Basler GigE Vision, deterministic image acquisition, hardware-in-the-loop (HITL) systems</p>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EXPERIENCE
                        </h2>

                        {/* Hyvision - lead with most-relevant industrial C++ metrology work */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Hyvision System</em>,&nbsp;
                                    <strong className="font-bold">Vision Software &amp; C++ Engineer (3D Metrology)</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Aug 2025 - Present</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>3D Laser Profiler Pipeline (Apple Project):</strong> Architected a high-performance C++ pipeline processing Keyence LJ-X8080 laser scan data for sub-millimeter precision measurement of smartphone camera modules — parallel ICP matching, robust plane fitting, automated ROI extraction, FAI tolerance validation against SQL Server specifications.</p>
                                <p><strong>Laser Profiler Simulation &amp; Hardware-Planning Toolkit:</strong> Built an internal 3D laser-profiler simulator (Python, PyQt5, PyVista, trimesh) emulating Keyence LJ-X8080-class line-laser sensors over arbitrary CAD models — used to evaluate sensor placement, scan strategy (rotating object, rotating laser, linear translation), and step size / angle / ray density before committing to physical hardware. Implements parallelized ray-mesh intersection, robust profile extraction, sinusoidal pose deviation fitting (<em>scipy</em>), and an integrated 3D viewer for raw-vs-reconstructed point cloud comparison.</p>
                                <p><strong>Pre-Processing, Segmentation &amp; Feature Extraction:</strong> Built production C++ modules for point cloud pre-processing, RANSAC/Eigen-based geometric primitive fitting (planes, cylinders, edges), and coordinate-frame estimation from raw laser scan data.</p>
                                <p><strong>HMI &amp; Prototyping Tools:</strong> Designed a modular 3D rendering engine and node-based visual workflow editor (.NET 8 / WPF, ECS architecture) enabling non-programmers to construct custom inspection pipelines via drag-and-drop with an extensible plugin system — directly transferable proof-of-concept tooling for OEM customers.</p>
                                <p><strong>Real-Time Mesh Editing:</strong> Built an interactive 3D alignment application (PolyWorks-style) with ICP best-fit, SVD landmark registration, and lasso noise removal, processing 1M+ point clouds in real-time via VTK / PyVista.</p>
                            </div>
                        </div>

                        {/* Luxolis */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">2D/3D Vision Systems Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Hardware-in-the-Loop Multi-Camera System (Pungkang Co. Ltd.):</strong> Deployed a real-time 360° surface inspection system using a synchronized 6-camera Basler GigE array with real-time inference at &lt;200ms latency, integrated with industrial PLCs via NuDAQ I/O for pneumatic rejection of defective units.</p>
                                <p><strong>6-DoF Pose Estimation (Hwacheon Machinery):</strong> Built an eye-in-hand pose estimation pipeline using RGB-D, FoundationPose, and ICP refinement for autonomous CNC machining — registering physical workpieces against CAD models in SE(3) space, eliminating manual fixturing.</p>
                                <p><strong>Sensor &amp; Acquisition Control:</strong> Developed deterministic image-acquisition and control logic bridging high-speed inference pipelines with industrial automation hardware.</p>
                            </div>
                        </div>

                        {/* PERSPECTIVE */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">Computer Vision &amp; 3D Reconstruction Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Single-Image to 3D Mesh Reconstruction:</strong> Built an image-to-3D pipeline (OpenLRM) producing geometrically valid 3D meshes, reaching IoU 0.80 and Chamfer Distance 0.08 with explicit geometric error analysis against ground truth.</p>
                                <p><strong>Multi-View Synthetic Rendering:</strong> Designed a Blender (bpy) procedural rendering system generating 24×360° calibrated views per asset with explicit camera intrinsics / extrinsics for rigorous geometric ground-truth training.</p>
                                <p><strong>High-Fidelity Semantic Segmentation:</strong> Fine-tuned U2Net for pixel-precise mask extraction with alpha-matting precision, used as the geometric foundation for downstream 3D pipelines.</p>
                            </div>
                        </div>

                        {/* Ellexi */}
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">Computer Vision &amp; Edge AI Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Nov 2019 - Oct 2021</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Geometric Measurement under Field Noise:</strong> Developed a Mask R-CNN-based geometric measurement pipeline computing precise angle deviations from heavily noisy field images, modeling perspective distortion and lens artifacts as systematic error sources.</p>
                                <p><strong>Perspective Rectification &amp; OCR:</strong> Built a license-plate recognition system using YOLO and CRNN with homography-based perspective rectification, reaching &gt;99% character accuracy on synthetic data in unconstrained capture conditions.</p>
                                <p><strong>Edge Deployment:</strong> Deployed multi-class object detection on NVIDIA Jetson edge devices with TensorRT / ONNX optimization for low-latency on-device inference.</p>
                                <p><strong>Multi-Camera Spatial Calibration:</strong> Designed a multi-camera tracking system across spatially-calibrated networks for behavior analysis (Incheon International Airport).</p>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EDUCATION
                        </h2>

                        <div className="mb-3">
                            <p className="text-[10pt] italic text-gray-900">Chung-Ang University (CAU), Seoul, South Korea</p>
                            <p className="text-[10pt] italic text-gray-900">M.S. in Computer Science (Computer Vision &amp; Applied Mathematics)</p>
                            <p className="text-[10pt] text-gray-800">Thesis: &quot;Object Segmentation with Active Contours Driven by Weight Matrix&quot; — variational methods, energy minimization, and PDEs applied to image segmentation</p>
                            <p className="text-[10pt] text-gray-800">Research Focus: Image segmentation, geometric image modeling, variational methods</p>
                            <p className="text-[10pt] text-gray-800">CAYSS Scholarship recipient (Chung-Ang Young Scientist Scholarship)</p>
                        </div>

                        <div>
                            <p className="text-[10pt] italic text-gray-900">GIK Institute, Topi, Pakistan</p>
                            <p className="text-[10pt] italic text-gray-900">B.S. in Electronic Engineering</p>
                            <p className="text-[10pt] text-gray-800">FYP: Smart Blind Navigation System (Raspberry Pi, OpenCV, GSM) — 2nd position in final year project competition</p>
                        </div>
                    </section>

                    {/* Honors & Awards */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            HONORS &amp; AWARDS
                        </h2>
                        <div>
                            <p className="text-[10pt] font-bold italic text-gray-900">Chung-Ang Young Scientist Scholarship (CAYSS)</p>
                            <p className="text-[10pt] italic text-gray-700">Chung-Ang University (CAU) •</p>
                            <p className="text-[10pt] text-gray-800">Awarded to high-achieving international researchers demonstrating exceptional potential in advanced computer science and engineering fields.</p>
                        </div>
                    </section>

                    {/* Publications - end of resume */}
                    <section className="mb-2 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            PEER-REVIEWED PUBLICATIONS
                        </h2>
                        <ul className="text-[10pt] text-gray-800 leading-snug space-y-1 list-disc list-inside">
                            <li>Munir, A., Soomro, S., <strong>Shahid, M.T.</strong>, Soomro, T.A., Choi, K.N. &quot;Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation,&quot; <em>IEEE Access</em>, 2019.</li>
                            <li>Memon, A., Soomro, S., <strong>Shahid, M.T.</strong>, Munir, A., Niaz, A., Choi, K.N. &quot;Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours,&quot; <em>Computational and Mathematical Methods in Medicine</em>, 2020.</li>
                        </ul>
                    </section>
                </article>
            </div>
        </main>
    );
}
