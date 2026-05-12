"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default function CadflowResumePage() {
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
                            3D Machine Learning Engineer with 6+ years of experience building production-grade 3D AI pipelines for custom manufacturing, medical imaging, and high-precision industrial applications. Deep expertise in PyTorch/TensorFlow, 2D &amp; 3D image processing, single-image-to-3D mesh reconstruction, point cloud segmentation, and generative deep learning. Proven track record of shipping ML models that produce printable, geometrically valid 3D outputs directly used by end customers, combined with strong full-stack engineering (Python, C++, React/Next.js, AWS/Docker) for end-to-end product development.
                        </p>
                    </section>

                    {/* Core Skills (front-loaded for ATS) */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            CORE SKILLS
                        </h2>
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>Deep Learning Frameworks:</strong> PyTorch (6+ yrs), TensorFlow/Keras, Hugging Face, ONNX, TensorRT, CUDA</p>
                            <p><strong>3D Machine Learning:</strong> OpenLRM, NeRF, point-cloud segmentation (PointNet-family), single-image-to-3D mesh reconstruction, mesh generation, neural rendering, latent diffusion for 3D</p>
                            <p><strong>2D &amp; 3D Image Processing:</strong> Semantic segmentation (U-Net, U2Net, SAM, Mask R-CNN), medical-style precise mask extraction, alpha matting, multi-view geometry, ICP/RANSAC, depth processing</p>
                            <p><strong>Generative AI:</strong> Latent Diffusion (LADi-VTON, Stable Diffusion), GANs, CLIP textual inversion, conditional generation, photorealistic synthesis</p>
                            <p><strong>3D Geometry &amp; CAD-Adjacent:</strong> Blender Python (bpy), PCL, Open3D, VTK/PyVista, Helix Toolkit, .obj/.glb/.stl pipelines, Boolean operations, mesh repair, geometric primitives</p>
                            <p><strong>Programming:</strong> Python (6+ yrs), C++, C# (.NET 8), TypeScript/JavaScript (React/Next.js)</p>
                            <p><strong>Cloud, MLOps &amp; Web:</strong> AWS (S3, EC2), Docker, Git, REST APIs, Flask, React/Next.js, Three.js-compatible (.glb), Weights &amp; Biases, Linux</p>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EXPERIENCE
                        </h2>

                        {/* PERSPECTIVE - most relevant 3D ML work, placed first */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">3D Machine Learning Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Single-Image to 3D Mesh Generation:</strong> Designed and trained an image-to-3D pipeline (PyTorch, OpenLRM) producing printable, geometrically valid 3D meshes from a single 2D image, reaching IoU 0.80 and Chamfer Distance 0.08, exported as .obj/.glb for downstream rendering and manufacturing workflows.</p>
                                <p><strong>Custom 3D Asset Synthesis Pipeline:</strong> Built a procedural Blender (bpy) rendering system generating thousands of high-fidelity photorealistic training samples per asset (24×360° views, ESRGAN super-resolution), creating production-grade datasets for 3D ML training.</p>
                                <p><strong>Production Generative AI Pipeline:</strong> Architected and shipped a photorealistic image synthesis system using fine-tuned Latent Diffusion (LADi-VTON), DensePose, U2Net segmentation, and CLIP textual inversion, reaching 85%+ visual fidelity. Deployed to commercial customers on AWS via Docker.</p>
                                <p><strong>High-Precision Semantic Segmentation:</strong> Fine-tuned U2Net to extract pixel-perfect object masks with alpha-matting precision for downstream 3D pipeline consumption — same techniques directly applicable to anatomical mask extraction in medical imaging.</p>
                                <p><strong>Hierarchical Classification:</strong> Designed a ResNet50-based fine-grained classification system (PyTorch) with a 3-depth taxonomy reaching &gt;95% accuracy across 73 classes, routing objects to specialized downstream 3D generation models.</p>
                            </div>
                        </div>

                        {/* Hyvision */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Hyvision System</em>,&nbsp;
                                    <strong className="font-bold">3D Geometry &amp; ML Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Aug 2025 - Present</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Node-Based 3D Pipeline Engine:</strong> Designed a modular 3D rendering and geometry construction engine (.NET 8/WPF, ECS architecture) with a node-based visual editor — directly transferable patterns to dental CAD workflow tools and clinician-facing design software.</p>
                                <p><strong>Sub-Millimeter 3D Mesh Alignment:</strong> Built a PolyWorks-style 3D registration application with ICP best-fit, SVD landmark registration, and interactive mesh editing — processing 1M+ point clouds in real-time via VTK/PyVista, with precision standards directly applicable to dental scan alignment.</p>
                                <p><strong>Geometric Primitive Fitting:</strong> Implemented RANSAC and Eigen-based primitive fitting (planes, edges, cylinders) for sub-millimeter coordinate alignment of complex 3D meshes against reference specifications.</p>
                            </div>
                        </div>

                        {/* Luxolis */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">3D Vision &amp; ML Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>6-DoF Pose Estimation:</strong> Built an RGB-D-driven 6-DoF pose estimation pipeline (PyTorch FoundationPose + ICP refinement) for precise 3D spatial alignment of physical objects against digital 3D models in SE(3) space.</p>
                                <p><strong>Real-Time 3D Inspection:</strong> Deployed a synchronized 6-camera vision system with deep-learning inference (&lt;200ms latency) integrated with industrial hardware via deterministic I/O control.</p>
                            </div>
                        </div>

                        {/* Ellexi */}
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">Machine Learning Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Nov 2019 - Oct 2021</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Synthetic Training Data Engine:</strong> Built a procedural data generation pipeline producing photorealistic synthetic datasets with parameterized variations (lighting, perspective, materials) — enabling 98% downstream accuracy without real customer data. Same approach used for medical/regulated-data scarcity scenarios.</p>
                                <p><strong>OCR &amp; Geometric Mask R-CNN Pipeline:</strong> Developed a CRAFT + Tesseract OCR pipeline coupled with Mask R-CNN instance segmentation (PyTorch) for robust text and geometric measurement extraction from highly variable field images.</p>
                                <p><strong>Edge ML Deployment:</strong> Deployed multi-class YOLO detection on NVIDIA Jetson edge devices with ONNX/TensorRT optimization for low-latency, on-device inference.</p>
                                <p><strong>Spatio-Temporal Action Recognition:</strong> Built a 3D-CNN (YOWO) + HRNet pose estimation pipeline for behavior analysis and multi-camera person re-identification across distributed networks.</p>
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
                            <p className="text-[10pt] italic text-gray-900">M.S. in Computer Science (Computer Vision &amp; Deep Learning)</p>
                            <p className="text-[10pt] text-gray-800">Thesis: Object Segmentation with Active Contours Driven by Weight Matrix — segmentation algorithms applied to medical and natural images</p>
                            <p className="text-[10pt] text-gray-800">Research Focus: Image Segmentation, 3D Modeling, Deep Learning</p>
                        </div>

                        <div>
                            <p className="text-[10pt] italic text-gray-900">GIK Institute</p>
                            <p className="text-[10pt] italic text-gray-900">B.S. in Electronic Engineering</p>
                            <p className="text-[10pt] text-gray-800">FYP: Smart Blind Navigation System (Raspberry Pi, OpenCV, GSM) — 2nd position in final year project competition</p>
                        </div>
                    </section>

                    {/* Publications (kept short - relevant medical segmentation publication highlighted) */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            SELECTED PUBLICATIONS
                        </h2>
                        <ul className="text-[10pt] text-gray-800 leading-snug space-y-1 list-disc list-inside">
                            <li>Memon, A., Soomro, S., <strong>Shahid, M.T.</strong>, Munir, A., Niaz, A., Choi, K.N. &quot;Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours&quot;, <em>Computational and Mathematical Methods in Medicine</em> (2020).</li>
                            <li>Munir, A., Soomro, S., <strong>Shahid, M.T.</strong>, Soomro, T.A., Choi, K.N. &quot;Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation&quot;, <em>IEEE Access</em> (2019).</li>
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
