"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { printWithFilename } from "@/lib/printWithFilename";

export default function ResumePage() {
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
                        onClick={() => printWithFilename("Default")}
                        className="flex items-center gap-2 px-5 py-2 rounded text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-all"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>

                {/* Resume Document (LinkedIn-style: white, minimal, black text) */}
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
                            Computer vision and 3D engineer with 6+ years of experience across 3D reconstruction, SLAM, metrology, generative AI, and deep learning. Designs end-to-end pipelines spanning point cloud processing, geometric registration, 6-DoF pose estimation, neural rendering, visual-inertial odometry (VIO), object detection, and semantic segmentation. Bridges classical mathematical algorithms with modern AI to deliver high-precision 3D measurement tools, photorealistic visualization systems, and scalable 2D/3D vision solutions for industrial, robotic, and creative applications.
                        </p>
                    </section>

                    {/* Experience */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EXPERIENCE
                        </h2>

                        {/* Hyvision */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Hyvision System</em>,&nbsp;
                                    <strong className="font-bold">SLAM &amp; 3D Metrology Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Aug 2025 - Present</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Apple Project:</strong> Architected a high-speed 3D laser inspection system for UMP modules using PCL and RANSAC/Eigen-based coordinate alignment, delivering sub-millimeter precision with automated FAI validation against SQL Server specs.</p>
                                <p><strong>Apple Project:</strong> Developed a PolyWorks-style 3D alignment application with ICP best-fit, SVD landmark registration, and interactive lasso noise removal, processing 1M+ point clouds in real-time via VTK/PyVista.</p>
                                <p><strong>Apple Project:</strong> Designed a modular 3D rendering engine with a node-based workflow editor (ECS, .NET 8/WPF), enabling non-programmers to build custom inspection pipelines via drag-and-drop with an extensible plugin system.</p>
                            </div>
                        </div>

                        {/* Luxolis */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">SLAM / Computer Vision Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Pungkang Co. Ltd.:</strong> Deployed a real-time 360° surface inspection system using a synchronized 6-camera Basler array and YOLO inference, reaching &lt;200ms latency at 5 parts/sec with PLC-integrated pneumatic rejection.</p>
                                <p><strong>Hwacheon Machinery:</strong> Built an eye-in-hand 6-DoF pose estimation pipeline for autonomous CNC machines using RGB-D, FoundationPose, and ICP refinement, eliminating manual fixturing and enabling dynamic toolpath adjustment in SE(3).</p>
                            </div>
                        </div>

                        {/* PERSPECTIVE */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">3D Reconstruction &amp; Computer Vision Researcher</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Virtual Interior Design:</strong> Built an automated floor-plan-to-3D pipeline for real estate visualization, converting flat 2D blueprints into furnished, walkthrough-ready 3D room models with extracted walls, doors, and windows.</p>
                                <p><strong>Virtual Try-On (E-Commerce):</strong> Architected a photorealistic garment-overlay pipeline using LADi-VTON (Latent Diffusion), DensePose, U2Net segmentation, and CLIP textual inversion, reaching 85%+ pattern fidelity. Deployed on AWS via Docker.</p>
                                <p><strong>Single-Image 3D Asset Generation:</strong> Created a mesh reconstruction pipeline using OpenLRM that converts product photos into 3D assets, reaching IoU 0.80 and Chamfer Distance 0.08, trained on 24×360° Blender-rendered views enhanced by ESRGAN.</p>
                                <p><strong>Garment Categorization (Try-On Routing):</strong> Designed a hierarchical ResNet50 classifier with a 3-depth taxonomy and specialized sub-classifiers, reaching &gt;95% accuracy across 74 categories to route garments to the correct try-on model.</p>
                                <p><strong>Talking-Head Video Synthesis:</strong> Led R&amp;D on creator-facing content tools: high-fidelity face reconstruction, audio-driven lip-sync, and facial enhancement using GANs and diffusion models.</p>
                            </div>
                        </div>

                        {/* Ellexi */}
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">AI Developer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Nov 2019 - Oct 2021</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Gas Station ALPR:</strong> Developed a real-time license plate recognition system using YOLO and CRNN trained on synthetic plate data, reaching 98% accuracy with DeepSORT tracking.</p>
                                <p><strong>PPE Compliance:</strong> Deployed a detection system on NVIDIA Jetson edge devices for construction sites with multi-class YOLO inference and geo-fenced hazard zone alerts.</p>
                                <p><strong>Incheon Airport:</strong> Built an anomaly detection and multi-camera tracking system using YOWO (3D-CNN), HRNet pose estimation, and Person Re-ID to detect falls, sprinting, and abandoned baggage.</p>
                                <p><strong>Gas Meter Inspection:</strong> Created a pipeline using CRAFT and Tesseract OCR with Mask R-CNN segmentation, digitizing weathered industrial plates.</p>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EDUCATION
                        </h2>

                        <div className="mb-3">
                            <p className="text-[10pt] italic text-gray-900">Chung-Ang University (CAU)</p>
                            <p className="text-[10pt] italic text-gray-900">M.S. in Computer Science (Computer Vision)</p>
                            <p className="text-[10pt] text-gray-800">Thesis: Object Segmentation with Active Contours Driven by Weight Matrix</p>
                            <p className="text-[10pt] text-gray-800">Research Focus: Active Contours, Image Segmentation, Object Detection &amp; Tracking</p>
                        </div>

                        <div>
                            <p className="text-[10pt] italic text-gray-900">GIK Institute</p>
                            <p className="text-[10pt] italic text-gray-900">B.S. in Electronic Engineering</p>
                            <p className="text-[10pt] text-gray-800">FYP: Smart Blind Navigation System (Raspberry Pi, OpenCV, GSM)</p>
                            <p className="text-[10pt] text-gray-800">Secured 2nd position in the final year project competition</p>
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            SKILLS
                        </h2>
                        <p className="text-[10pt] text-gray-800 leading-relaxed">
                            Computer Vision &amp; 3D&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Object Detection &amp; Tracking (YOLO, DeepSORT, Mask R-CNN)&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Image Segmentation (U-Net, U2Net, SAM, Active Contours)&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;3D Reconstruction (NeRF, OpenLRM, Point Cloud to Mesh)&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;6-DoF Pose Estimation (FoundationPose, ICP, Hand-Eye Calib.)&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;3D Metrology &amp; SLAM (SLAM/VIO, RANSAC, ICP, PCA, Coordinate Alignment)&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Generative Models (Latent Diffusion, GANs, Textual Inversion)&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;C++&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;C# (.NET 8)
                        </p>
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

                    {/* Publications */}
                    <section className="mb-2 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            PUBLICATIONS
                        </h2>

                        <div className="mb-3">
                            <p className="text-[10pt] italic text-gray-900 mb-1">Journals &amp; Conferences</p>
                            <ul className="text-[10pt] text-gray-800 leading-snug space-y-1 list-disc list-inside">
                                <li>A. Munir, S. Soomro, <strong>M.T. Shahid</strong>, T.A. Soomro, K.N. Choi. &quot;Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation&quot;, <em>IEEE Access</em> (2019).</li>
                                <li>Kim, D. D., <strong>M.T. Shahid</strong>, Kim, Y., Lee, W. J., Song, H. C., Piccialli, F., Choi, K. N. &quot;Generating Pedestrian Training Dataset using DCGAN&quot;, <em>Proceedings of the 2019 3rd International Conference on Advances in Image Processing</em> (2019).</li>
                                <li>Memon, Asif Aziz, Shafiullah Soomro, <strong>M.T. Shahid</strong>, Asad Munir, Asim Niaz, and Kwang Nam Choi. &quot;Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours&quot;, <em>Computational and Mathematical Methods in Medicine</em> (2020).</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-[10pt] italic text-gray-900 mb-1">Master&apos;s Thesis</p>
                            <ul className="text-[10pt] text-gray-800 leading-snug list-disc list-inside">
                                <li>&quot;Object Segmentation with Active Contours Driven by Weight Matrix&quot;, 131th Master&apos;s Thesis, <em>Chung-Ang University</em>.</li>
                            </ul>
                        </div>
                    </section>
                </article>
            </div>
        </main>
    );
}
