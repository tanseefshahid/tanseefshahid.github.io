"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default function DarResumePage() {
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
                        onClick={() => window.print()}
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
                            3D rendering and visualization engineer with 6+ years of experience producing photorealistic 3D models, walkthroughs, and high-fidelity renderings for architectural, industrial, and product applications. Skilled in translating 2D drawings, floor plans, and concept sketches into detailed 3D visuals using Blender, VTK/PyVista, and modern neural rendering pipelines. Proven expertise in materials, lighting, environment design, and large-scale asset management, with a strong track record of delivering visualization-ready outputs that meet design intent and tight client deadlines.
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
                                    <strong className="font-bold">3D Rendering &amp; Metrology Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Aug 2025 - Present</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Modular 3D Rendering Engine:</strong> Designed and developed a real-time 3D rendering engine (.NET 8/WPF, ECS architecture) with a node-based visual workflow editor, enabling non-programmers to build custom 3D visualization pipelines via drag-and-drop with an extensible plugin system.</p>
                                <p><strong>Photorealistic 3D Visualization:</strong> Implemented materials, lighting, camera controls, and environment rendering using VTK/PyVista and Helix Toolkit, producing high-fidelity walkthroughs and inspection visuals from 1M+ point clouds in real-time.</p>
                                <p><strong>3D Model Alignment &amp; Asset Management:</strong> Built a PolyWorks-style 3D alignment application with ICP best-fit, SVD landmark registration, and interactive editing tools for managing and refining 3D model libraries.</p>
                            </div>
                        </div>

                        {/* Luxolis */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">3D Vision &amp; Visualization Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>360° Visualization System:</strong> Deployed a real-time 360° object visualization and inspection system using a synchronized 6-camera Basler array, generating multi-angle visual captures for product presentation and quality review.</p>
                                <p><strong>6-DoF Spatial Positioning:</strong> Built an RGB-D-driven 6-DoF pose estimation pipeline (FoundationPose + ICP refinement) for precise 3D positioning and orientation of objects in physical space, enabling accurate scene composition.</p>
                            </div>
                        </div>

                        {/* PERSPECTIVE */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">3D Rendering &amp; Visualization Researcher</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Architectural Visualization (2D-to-3D):</strong> Built an automated pipeline converting flat 2D floor plans and blueprints into furnished, walkthrough-ready 3D room models for real estate and interior design visualization, extracting walls, doors, and windows.</p>
                                <p><strong>Photorealistic Rendering Pipeline:</strong> Architected a photorealistic visual try-on pipeline using LADi-VTON (Latent Diffusion), DensePose, and CLIP textual inversion, reaching 85%+ visual fidelity. Deployed on AWS via Docker for scalable client-facing rendering.</p>
                                <p><strong>Single-Image 3D Asset Generation:</strong> Created a mesh reconstruction pipeline using OpenLRM that converts product photos and concept images into 3D assets, reaching IoU 0.80 and Chamfer Distance 0.08, trained on 24×360° Blender-rendered views enhanced by ESRGAN super-resolution.</p>
                                <p><strong>Synthetic Rendering &amp; Asset Library:</strong> Developed large-scale Blender (bpy) rendering pipelines to generate thousands of photorealistic synthetic views for training and visualization, managing organized libraries of 3D models, textures, and materials.</p>
                                <p><strong>Facial Rendering &amp; Animation:</strong> Led R&amp;D on photorealistic face reconstruction, audio-driven lip-sync animation, and facial enhancement using GANs and diffusion models for animated digital humans and walkthrough avatars.</p>
                            </div>
                        </div>

                        {/* Ellexi */}
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">3D &amp; AI Developer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Nov 2019 - Oct 2021</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Synthetic Data Rendering:</strong> Built a procedural rendering engine for synthetic license plate generation, producing photorealistic training data at scale with varied lighting, weather, and material conditions.</p>
                                <p><strong>3D Spatial Hazard Visualization:</strong> Designed geo-fenced 3D hazard zone visualization on NVIDIA Jetson edge devices for construction site safety, overlaying real-time alerts on 3D-projected camera feeds.</p>
                                <p><strong>Multi-Camera 3D Scene Reconstruction:</strong> Built a multi-camera tracking and 3D scene understanding system for Incheon Airport using YOWO (3D-CNN), HRNet pose estimation, and Person Re-ID across spatially-calibrated camera networks.</p>
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
                            <p className="text-[10pt] italic text-gray-900">M.S. in Computer Science (Computer Vision &amp; 3D Graphics)</p>
                            <p className="text-[10pt] text-gray-800">Thesis: Object Segmentation with Active Contours Driven by Weight Matrix</p>
                            <p className="text-[10pt] text-gray-800">Research Focus: 3D Modeling, Image Segmentation, Rendering, and Scene Understanding</p>
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
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>3D Modeling &amp; Rendering:</strong> Blender (bpy), VTK, PyVista, Helix Toolkit, PolyWorks, Open3D, PCL, ESRGAN, OpenLRM, NeRF</p>
                            <p><strong>Materials, Lighting &amp; Environment:</strong> PBR materials, photorealistic lighting, environment maps, texture mapping, camera composition</p>
                            <p><strong>Visualization &amp; Animation:</strong> Walkthroughs, animations, real-time 3D rendering, node-based workflow editors, scene composition</p>
                            <p><strong>2D-to-3D Translation:</strong> Floor plan parsing, blueprint-to-3D conversion, single-image reconstruction, point cloud to mesh, structural extraction</p>
                            <p><strong>Programming:</strong> Python, C++, C# (.NET 8/WPF), TypeScript, MATLAB</p>
                            <p><strong>AI &amp; Generative Rendering:</strong> Latent Diffusion, GANs, LADi-VTON, Stable Diffusion, neural rendering</p>
                            <p><strong>Tools &amp; Infrastructure:</strong> AWS, Docker, Git, CUDA, Linux, ONNX, REST APIs</p>
                        </div>
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
