"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { printWithFilename } from "@/lib/printWithFilename";

export default function AperaResumePage() {
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
                        onClick={() => printWithFilename("Apera-AI")}
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
                            Computer vision and machine learning engineer with 6+ years of experience building production perception systems for robotic guidance, industrial automation, and high-precision 3D applications. Deep expertise in <strong>6-DoF pose estimation, RGB-D depth processing, object detection, and 3D geometric algorithms</strong> (ICP, RANSAC, SVD), combined with hands-on PyTorch model training, C++ production deployment, and NVIDIA edge GPU optimization. Proven track record shipping perception systems for autonomous CNC machining, 360° industrial inspection, and sub-millimeter precision metrology. Strong theoretical foundation with peer-reviewed publications in applied mathematics and computer vision.
                        </p>
                    </section>

                    {/* Core Skills - front-loaded with Apera's exact stack */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            CORE SKILLS
                        </h2>
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>Robotic Perception:</strong> 6-DoF pose estimation (FoundationPose, ICP), eye-in-hand calibration, hand-eye registration, SE(3) rigid-body transforms, RGB-D depth processing, multi-view geometry, robot guidance</p>
                            <p><strong>Deep Learning (PyTorch):</strong> 6+ yrs PyTorch, TensorFlow, object detection (YOLO, Mask R-CNN), semantic segmentation (U-Net, U2Net, SAM), 3D-CNN (YOWO), pose models (HRNet, FoundationPose), Person Re-ID</p>
                            <p><strong>Foundation Models &amp; Few-Shot:</strong> FoundationPose, SAM (Segment Anything), CLIP textual inversion, latent diffusion fine-tuning (LADi-VTON), DensePose</p>
                            <p><strong>3D Geometry &amp; Graphics:</strong> Point cloud processing (PCL, Open3D, PyVista, VTK), ICP, RANSAC, SVD, PCA, mesh reconstruction (OpenLRM, NeRF), Blender (bpy), differentiable rendering</p>
                            <p><strong>Production C++:</strong> 6+ yrs C++, Eigen, PCL, STL, multi-threaded pipelines, real-time C++ for industrial deployment</p>
                            <p><strong>Edge GPU Deployment:</strong> NVIDIA Jetson, TensorRT, ONNX, CUDA, real-time inference (&lt;200ms), low-latency optimization</p>
                            <p><strong>Cloud &amp; MLOps:</strong> AWS (S3, EC2), Docker, Weights &amp; Biases, Git, Linux, ROS/ROS2, REST APIs</p>
                            <p><strong>Programming:</strong> Python, C++, C# (.NET 8), MATLAB</p>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EXPERIENCE
                        </h2>

                        {/* Luxolis - MOST RELEVANT, leads */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">Computer Vision &amp; Robotic Perception Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Eye-in-Hand 6-DoF Pose Estimation for Robotic Guidance (Hwacheon Machinery):</strong> Built a real-time perception pipeline using an RGB-D camera mounted on an autonomous CNC drill head, performing 6-DoF pose estimation with FoundationPose and ICP refinement to register physical workpieces against CAD models in SE(3) space. Eliminated manual fixturing and enabled dynamic toolpath adjustment.</p>
                                <p><strong>Hardware-Synchronized Industrial Vision (Pungkang Co. Ltd.):</strong> Deployed a real-time 360° object inspection system with a synchronized 6-camera Basler array and YOLO inference, reaching &lt;200ms end-to-end latency at 5 parts/sec with PLC-integrated control for industrial-grade reliability.</p>
                                <p><strong>Real-Time C++/Python Bridging:</strong> Developed deterministic image acquisition and control logic in C++ bridging high-speed PyTorch inference pipelines with industrial automation hardware (NuDAQ I/O).</p>
                            </div>
                        </div>

                        {/* Hyvision */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Hyvision System</em>,&nbsp;
                                    <strong className="font-bold">3D Computer Vision &amp; C++ Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Aug 2025 - Present</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Sub-Millimeter 3D Registration (Apple Project):</strong> Architected a high-performance C++ metrology pipeline using PCL and RANSAC/Eigen-based coordinate alignment, achieving sub-millimeter precision with automated tolerance validation against SQL Server specifications at industrial-grade reliability.</p>
                                <p><strong>Real-Time Point Cloud Processing (Apple Project):</strong> Developed a 3D registration application implementing ICP best-fit, SVD-based landmark registration, and interactive editing, processing 1M+ point clouds in real-time via VTK/PyVista.</p>
                                <p><strong>Modular Perception Pipeline Engine (Apple Project):</strong> Designed a node-based 3D processing engine (.NET 8/WPF, ECS architecture) enabling extensible perception pipelines with plugin-based modules, directly transferable to model deployment infrastructure.</p>
                            </div>
                        </div>

                        {/* PERSPECTIVE */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">Computer Vision &amp; ML Researcher</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Single-Image to 3D Mesh Generation:</strong> Engineered a PyTorch-based image-to-3D pipeline (OpenLRM Large Reconstruction Model) producing geometrically valid 3D meshes, reaching IoU 0.80 and Chamfer Distance 0.08, applying foundation-model concepts to 3D reconstruction.</p>
                                <p><strong>Foundation-Model-Based Generative Pipeline:</strong> Fine-tuned and deployed Latent Diffusion (LADi-VTON), DensePose, and CLIP textual inversion in a production pipeline reaching 85%+ visual fidelity, deployed to commercial customers on AWS via Docker.</p>
                                <p><strong>Production PyTorch Training Infrastructure:</strong> Designed end-to-end training pipelines on AWS with Weights &amp; Biases experiment tracking, multi-view synthetic data generation (24×360° Blender renders + ESRGAN), and reproducible model versioning.</p>
                                <p><strong>Hierarchical Deep Learning Classification:</strong> Built a ResNet50-based fine-grained categorization system (PyTorch) handling severe class imbalance, reaching &gt;95% accuracy across 73 fine-grained classes.</p>
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
                                <p><strong>Edge GPU Deployment (NVIDIA Jetson):</strong> Deployed multi-class YOLO detection on NVIDIA Jetson edge devices for construction safety, with ONNX/TensorRT optimization for low-latency on-device inference. Directly relevant to Apera&apos;s edge GPU robot-guidance constraints.</p>
                                <p><strong>Multi-Camera 3D Tracking (Incheon Airport):</strong> Built a real-time perception pipeline using YOWO (3D-CNN action recognition), HRNet pose estimation, and Person Re-ID across a distributed, spatially-calibrated camera network.</p>
                                <p><strong>Synthetic Training Data Engineering:</strong> Developed a procedural data generation pipeline producing photorealistic synthetic datasets with parameterized variations (lighting, perspective, materials), enabling 98% downstream accuracy without restricted real-world data.</p>
                                <p><strong>Mask R-CNN &amp; OCR Pipeline:</strong> Built a CRAFT + Tesseract OCR pipeline coupled with Mask R-CNN instance segmentation for robust text and geometric measurement extraction from highly variable field images.</p>
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
                            <p className="text-[10pt] italic text-gray-900">M.S. in Computer Science (Computer Vision &amp; Machine Learning)</p>
                            <p className="text-[10pt] text-gray-800">Thesis: &quot;Object Segmentation with Active Contours Driven by Weight Matrix&quot;. Focused on variational methods, energy minimization, and PDEs applied to image segmentation.</p>
                            <p className="text-[10pt] text-gray-800">Research Focus: Computer Vision, Image Segmentation, Object Detection &amp; Tracking</p>
                            <p className="text-[10pt] text-gray-800">CAYSS Scholarship recipient (Chung-Ang Young Scientist Scholarship)</p>
                        </div>

                        <div>
                            <p className="text-[10pt] italic text-gray-900">GIK Institute, Topi, Pakistan</p>
                            <p className="text-[10pt] italic text-gray-900">B.S. in Electronic Engineering</p>
                            <p className="text-[10pt] text-gray-800">FYP: Smart Blind Navigation System (Raspberry Pi, OpenCV, GSM). Secured 2nd position in the final year project competition.</p>
                        </div>
                    </section>

                    {/* Publications - critical signal for senior applied scientist role */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            PEER-REVIEWED PUBLICATIONS
                        </h2>
                        <ul className="text-[10pt] text-gray-800 leading-snug space-y-1 list-disc list-inside">
                            <li>Munir, A., Soomro, S., <strong>Shahid, M.T.</strong>, Soomro, T.A., Choi, K.N. &quot;Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation,&quot; <em>IEEE Access</em> (2019).</li>
                            <li>Memon, A., Soomro, S., <strong>Shahid, M.T.</strong>, Munir, A., Niaz, A., Choi, K.N. &quot;Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours,&quot; <em>Computational and Mathematical Methods in Medicine</em> (2020).</li>
                            <li>Kim, D.D., <strong>Shahid, M.T.</strong>, Kim, Y., Lee, W.J., Song, H.C., Piccialli, F., Choi, K.N. &quot;Generating Pedestrian Training Dataset using DCGAN,&quot; <em>Proceedings of the 2019 3rd International Conference on Advances in Image Processing</em> (2019).</li>
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
