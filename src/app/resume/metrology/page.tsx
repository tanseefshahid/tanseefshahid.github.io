"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { printWithFilename } from "@/lib/printWithFilename";

export default function MetrologyResumePage() {
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
                        onClick={() => printWithFilename("Metrology-Engineer")}
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
                            Metrology and computational geometry engineer with 6+ years of experience translating mathematical models into production C++ software for sub-millimeter and sub-micron precision applications. Deep background in applied mathematics (variational methods, p-Laplace equations, energy minimization), geometric algorithms (ICP, RANSAC, SVD, PCA), and error modeling for high-precision industrial measurement. Proven ability to bridge rigorous theory with robust, scalable software running at industrial speed on million-point datasets.
                        </p>
                    </section>

                    {/* Core Competencies */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            CORE COMPETENCIES
                        </h2>
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>Metrology &amp; Precision:</strong> Sub-millimeter / sub-micron measurement, FAI validation, coordinate-frame alignment, tolerance analysis, error modeling, dimensional analysis</p>
                            <p><strong>Mathematical &amp; Geometric Algorithms:</strong> ICP (Iterative Closest Point), RANSAC, SVD landmark registration, PCA, least-squares fitting, variational methods, active contours, p-Laplace PDEs, energy minimization</p>
                            <p><strong>C++ Development:</strong> High-performance C++ (6+ yrs), STL, templates, parallelism, real-time pipelines, Eigen linear algebra, PCL (Point Cloud Library)</p>
                            <p><strong>Computational Geometry:</strong> Point clouds, mesh registration, plane/cylinder fitting, SE(3) rigid transforms, hand-eye calibration, geometric primitive extraction</p>
                            <p><strong>Software &amp; Tooling:</strong> C++, Python, C# (.NET 8), MATLAB, Eigen, PCL, VTK, Open3D, CUDA, Linux, Git, SQL</p>
                            <p><strong>Applied Physics &amp; Modeling:</strong> Geometric deviation modeling, rigid-body transforms, sensor-noise modeling, multi-view geometry, calibration</p>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EXPERIENCE
                        </h2>

                        {/* Hyvision - most relevant, lead with it */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Hyvision System</em>,&nbsp;
                                    <strong className="font-bold">Metrology &amp; C++ Software Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Aug 2025 - Present</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Sub-Millimeter Precision Inspection (Apple Project):</strong> Architected a high-performance C++ metrology pipeline for UMP modules using PCL and RANSAC/Eigen-based coordinate-frame estimation, achieving sub-millimeter measurement precision with automated FAI tolerance validation against SQL Server specifications.</p>
                                <p><strong>3D Registration &amp; Error Modeling (Apple Project):</strong> Developed a 3D alignment application implementing ICP best-fit registration, SVD-based landmark registration, and rigid-body SE(3) transforms with explicit residual error analysis, processing 1M+ point clouds in real-time via VTK/PyVista.</p>
                                <p><strong>6-DoF Pose Estimation from Laser Profiles (Apple Project):</strong> Built a C++ pipeline computing precise 6-DoF pose (Tx, Ty, Rx, Ry) from Keyence LJ-X8080 laser scan data using parallel ICP matching and robust plane fitting with explicit deviation modeling against reference brackets.</p>
                                <p><strong>Modular Computational Geometry Engine (Apple Project):</strong> Designed a node-based 3D processing engine (.NET 8/WPF, ECS architecture) enabling chained geometric operations (alignment, primitive fitting, defect detection) with an extensible plugin system.</p>
                            </div>
                        </div>

                        {/* Luxolis */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">3D Geometry &amp; Computer Vision Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>6-DoF Pose Estimation &amp; Hand-Eye Calibration:</strong> Built an eye-in-hand RGB-D pose estimation pipeline (FoundationPose + ICP refinement) for autonomous CNC machines, performing rigid-body transforms in SE(3) space with explicit calibration of camera-to-tool frames.</p>
                                <p><strong>Hardware-Synchronized Multi-View Geometry:</strong> Deployed a 6-camera Basler array with deterministic image acquisition and PLC-integrated control, processing multi-view geometry at &lt;200ms latency.</p>
                            </div>
                        </div>

                        {/* PERSPECTIVE */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">3D Reconstruction &amp; Algorithms Researcher</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Single-Image to 3D Mesh Reconstruction:</strong> Engineered an image-to-3D pipeline (OpenLRM) producing geometrically valid 3D meshes, reaching IoU 0.80 and Chamfer Distance 0.08 with quantitative geometric error evaluation.</p>
                                <p><strong>Multi-View Geometric Synthesis:</strong> Built a procedural Blender (bpy) rendering pipeline generating 24×360° calibrated views per asset with explicit camera intrinsics/extrinsics, enabling rigorous geometric ground-truth training.</p>
                                <p><strong>Mathematical Image Modeling:</strong> Fine-tuned variational segmentation models (U2Net) and applied energy-minimization principles from active-contour research to extract pixel-precise object geometry.</p>
                            </div>
                        </div>

                        {/* Ellexi */}
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">Computer Vision &amp; Algorithms Developer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Nov 2019 - Oct 2021</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Geometric Measurement under Field Noise:</strong> Developed a Mask R-CNN-based geometric measurement pipeline computing precise angle deviations from heavily noisy field images, modeling perspective distortion and lens artifacts as systematic error sources.</p>
                                <p><strong>Perspective Rectification &amp; OCR:</strong> Built a license-plate recognition system with homography-based perspective rectification and noise modeling, reaching &gt;99% character accuracy in unconstrained capture conditions.</p>
                                <p><strong>Multi-Camera Spatial Calibration:</strong> Designed a multi-camera tracking system across spatially-calibrated networks for behavior analysis at Incheon International Airport.</p>
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
                            <p className="text-[10pt] italic text-gray-900">M.S. in Computer Science (Applied Mathematics &amp; Computer Vision)</p>
                            <p className="text-[10pt] text-gray-800">Thesis: &quot;Object Segmentation with Active Contours Driven by Weight Matrix&quot; — variational methods, energy minimization, and partial differential equations applied to image segmentation</p>
                            <p className="text-[10pt] text-gray-800">Research Focus: Variational methods, active contours, p-Laplace PDEs, geometric image modeling</p>
                            <p className="text-[10pt] text-gray-800">CAYSS Scholarship recipient (Chung-Ang Young Scientist Scholarship — awarded for exceptional academic potential)</p>
                        </div>

                        <div>
                            <p className="text-[10pt] italic text-gray-900">GIK Institute, Topi, Pakistan</p>
                            <p className="text-[10pt] italic text-gray-900">B.S. in Electronic Engineering</p>
                            <p className="text-[10pt] text-gray-800">FYP: Smart Blind Navigation System (Raspberry Pi, OpenCV, GSM) — 2nd position in final year project competition</p>
                            <p className="text-[10pt] text-gray-800">Strong coursework in signal processing, control systems, and applied mathematics</p>
                        </div>
                    </section>

                    {/* Peer-Reviewed Publications - critical for "top student" signal */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            PEER-REVIEWED PUBLICATIONS (APPLIED MATHEMATICS)
                        </h2>
                        <ul className="text-[10pt] text-gray-800 leading-snug space-y-1 list-disc list-inside">
                            <li>Munir, A., Soomro, S., <strong>Shahid, M.T.</strong>, Soomro, T.A., Choi, K.N. &quot;Hybrid active contours driven by edge and region fitting energies based on <strong>p-Laplace equation</strong>&quot;, <em>IEEE Access</em> (2019).</li>
                            <li>Memon, A., Soomro, S., <strong>Shahid, M.T.</strong>, Munir, A., Niaz, A., Choi, K.N. &quot;Segmentation of Intensity-Corrupted Medical Images Using <strong>Adaptive Weight-Based Hybrid Active Contours</strong>&quot;, <em>Computational and Mathematical Methods in Medicine</em> (2020).</li>
                            <li>Kim, D.D., <strong>Shahid, M.T.</strong>, Kim, Y., Lee, W.J., Song, H.C., Piccialli, F., Choi, K.N. &quot;Generating Pedestrian Training Dataset using DCGAN&quot;, <em>Proceedings of the 2019 3rd International Conference on Advances in Image Processing</em> (2019).</li>
                        </ul>
                    </section>

                    {/* Honors & Awards */}
                    <section className="mb-2 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            HONORS &amp; AWARDS
                        </h2>
                        <div>
                            <p className="text-[10pt] font-bold italic text-gray-900">Chung-Ang Young Scientist Scholarship (CAYSS)</p>
                            <p className="text-[10pt] italic text-gray-700">Chung-Ang University (CAU) •</p>
                            <p className="text-[10pt] text-gray-800">Awarded to high-achieving international researchers demonstrating exceptional potential in advanced computer science and engineering fields.</p>
                        </div>
                    </section>
                </article>
            </div>
        </main>
    );
}
