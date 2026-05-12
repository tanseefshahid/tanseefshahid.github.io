"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default function JobgetherResumePage() {
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
                            3D modeling and Python specialist with 6+ years of experience generating procedural 3D assets, low-poly meshes, and structured geometry from 2D references. Deep expertise in Blender Python (bpy) scripting, geometric primitives, Boolean operations, and programmatic asset generation for AI/ML training pipelines. Proven track record of producing collision-accurate 3D meshes, reproducible synthetic datasets, and well-documented build trajectories with strict naming conventions and quality standards. Comfortable working independently in fully remote, deadline-driven environments.
                        </p>
                    </section>

                    {/* Core Skills (front-loaded for ATS) */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            CORE SKILLS
                        </h2>
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>Procedural 3D Scripting:</strong> Blender Python (bpy), Three.js/JavaScript, geometric primitives, Boolean operations (union/difference/intersect), modifiers, mesh editing API</p>
                            <p><strong>2D-to-3D Reconstruction:</strong> RGB and masked image inputs, single-image mesh reconstruction (OpenLRM), point cloud to mesh, structural extraction from references</p>
                            <p><strong>3D Asset Pipeline:</strong> Low-poly modeling, collision-accurate meshes, .obj / .glb / .fbx export, UV mapping, texture baking, naming conventions, version control</p>
                            <p><strong>Programming:</strong> Python, JavaScript/TypeScript, C++, C# (.NET 8)</p>
                            <p><strong>Data &amp; Documentation:</strong> JSON/JS structured outputs, trajectory logging, reproducible workflows, self-QA, documentation discipline</p>
                            <p><strong>3D Libraries &amp; Tools:</strong> Blender (bpy), Three.js, Open3D, PyVista, VTK, PCL, Eigen, Helix Toolkit, ESRGAN</p>
                            <p><strong>AI/ML Data Pipelines:</strong> Synthetic dataset generation, multi-view rendering, ML training data annotation, ground-truth label generation</p>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EXPERIENCE
                        </h2>

                        {/* PERSPECTIVE - most relevant, placed first */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">3D Modeling &amp; Python Specialist</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Procedural 3D Generation (Blender bpy):</strong> Developed large-scale Blender Python (bpy) scripts to procedurally generate thousands of low-poly 3D assets from 2D reference images, with parameterized geometric primitives, Boolean operations, and randomized scene composition for AI training pipelines.</p>
                                <p><strong>2D-to-3D Mesh Reconstruction:</strong> Built a single-image-to-3D mesh pipeline (OpenLRM) converting RGB and masked product photos into collision-accurate 3D meshes, reaching IoU 0.80 and Chamfer Distance 0.08 — exported as .obj/.glb following strict technical specifications.</p>
                                <p><strong>Floor Plan to 3D Geometry:</strong> Engineered an automated pipeline parsing 2D architectural floor plans into structured 3D room geometry via primitive extrusions and Boolean operations on walls, doors, and windows, output as JSON-described mesh logic.</p>
                                <p><strong>Multi-View Synthetic Rendering:</strong> Designed a Blender (bpy) automation system producing 24×360° photorealistic training views per asset enhanced by ESRGAN, with strict file naming conventions and reproducible per-asset trajectory logs.</p>
                                <p><strong>Asset Library &amp; Standards:</strong> Maintained an organized library of 3D models, textures, and procedural scripts with versioned naming conventions, documentation, and QA self-checks to ensure consistency across thousands of deliverables.</p>
                            </div>
                        </div>

                        {/* Hyvision */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Hyvision System</em>,&nbsp;
                                    <strong className="font-bold">3D Geometry &amp; Software Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Aug 2025 - Present</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Node-Based 3D Generation Editor:</strong> Designed a modular 3D rendering and geometry construction engine (.NET 8/WPF, ECS architecture) with a node-based visual editor, enabling drag-and-drop procedural geometry workflows with an extensible plugin system.</p>
                                <p><strong>Mesh Construction &amp; Editing:</strong> Built a 3D alignment and mesh-editing application with ICP best-fit, SVD landmark registration, and interactive lasso-based mesh manipulation, processing 1M+ point clouds in real-time via VTK/PyVista.</p>
                                <p><strong>Geometric Primitive Fitting:</strong> Implemented RANSAC and Eigen-based primitive fitting (planes, cylinders, edges) for sub-millimeter coordinate alignment of complex 3D meshes against reference specifications.</p>
                            </div>
                        </div>

                        {/* Luxolis */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">3D Vision Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>RGB-D to 3D Mesh:</strong> Built a 6-DoF pose estimation pipeline (FoundationPose + ICP refinement) converting RGB-D camera input into spatially-accurate 3D mesh alignment for autonomous machining.</p>
                                <p><strong>Multi-View 3D Capture:</strong> Deployed a synchronized 6-camera Basler array for 360° multi-angle 3D object capture and reconstruction at 5 captures/sec with deterministic acquisition control.</p>
                            </div>
                        </div>

                        {/* Ellexi */}
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">AI Data &amp; 3D Developer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Nov 2019 - Oct 2021</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Synthetic Data Generation:</strong> Built a procedural data generation engine producing photorealistic synthetic license plate datasets with parameterized geometry, lighting, and material variation for ML training pipelines (98% downstream accuracy).</p>
                                <p><strong>Programmatic Asset Pipelines:</strong> Developed Python scripts to generate, label, and export structured training data with strict file naming conventions, JSON metadata, and reproducible build logs for downstream AI training.</p>
                                <p><strong>3D Spatial Scene Understanding:</strong> Designed a multi-camera 3D scene tracking system for Incheon Airport using YOWO (3D-CNN) and HRNet pose estimation across spatially-calibrated camera networks.</p>
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
                            <p className="text-[10pt] text-gray-800">Research Focus: 3D Modeling, Image Segmentation, and Geometric Algorithms</p>
                        </div>

                        <div>
                            <p className="text-[10pt] italic text-gray-900">GIK Institute</p>
                            <p className="text-[10pt] italic text-gray-900">B.S. in Electronic Engineering</p>
                            <p className="text-[10pt] text-gray-800">FYP: Smart Blind Navigation System (Raspberry Pi, OpenCV, GSM) — 2nd position in final year project competition</p>
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
