"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { printWithFilename } from "@/lib/printWithFilename";

export default function SanctuaryResumePage() {
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
                        onClick={() => printWithFilename("Sanctuary-AI")}
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
                            Machine learning engineer with 6+ years of experience bridging cutting-edge ML research and real-world robotic deployment. Strong Python and C++ across the full stack: PyTorch model training, foundation-model integration (FoundationPose, SAM, CLIP), 6-DoF pose estimation in SE(3) space, hand-eye calibration, point cloud processing, and CUDA-optimized inference on edge GPUs. Proven track record taking novel research models from prototype to production for robotic manipulation, industrial automation, and high-precision 3D perception applications. Comfortable on both sides of the model-to-robot handoff.
                        </p>
                    </section>

                    {/* Core Skills - mirrors Sanctuary's ML Engineer job description */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            CORE SKILLS
                        </h2>
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>Production ML Deployment:</strong> Bridging research prototypes to deployed systems, model fine-tuning, MLOps (Weights &amp; Biases, Docker, AWS), reproducible training pipelines, model versioning, edge optimization (TensorRT, ONNX, NVIDIA Jetson)</p>
                            <p><strong>Deep Learning:</strong> PyTorch (6+ yrs), TensorFlow, scikit-learn, Hugging Face, foundation models (FoundationPose, SAM, CLIP, OpenLRM, LADi-VTON), Latent Diffusion fine-tuning, ResNet-family, transformer-based architectures</p>
                            <p><strong>Robotics Fundamentals:</strong> 6-DoF pose estimation, eye-in-hand RGB-D perception, hand-eye calibration, SE(3) rigid-body transforms, ICP refinement, multi-camera synchronization, hardware-in-the-loop (HITL) systems, PLC/GPIO integration</p>
                            <p><strong>Programming:</strong> Python (6+ yrs production), C++ (6+ yrs production, PCL, Eigen, STL), C# / .NET 8, TypeScript, MATLAB</p>
                            <p><strong>Parallel &amp; GPU Computing:</strong> CUDA, TensorRT, multi-threaded C++ pipelines, parallelized raycasting, real-time inference (&lt;200ms), processing 1M+ point clouds in real-time</p>
                            <p><strong>3D Perception &amp; Geometry:</strong> Point cloud processing (PCL, Open3D, PyVista, VTK), ICP, RANSAC, SVD, PCA, multi-view geometry, neural rendering (OpenLRM, NeRF), depth processing</p>
                            <p><strong>RL / IL Fundamentals:</strong> Familiar with reinforcement learning and imitation learning concepts (policy gradients, behavior cloning, reward shaping); strong adjacent experience in fine-grained fine-tuning of foundation models and policy-style classifier heads</p>
                            <p><strong>Tools &amp; Infrastructure:</strong> ROS / ROS2 familiarity, Linux, Git, AWS (S3, EC2), Docker, REST APIs, OpenMP</p>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EXPERIENCE
                        </h2>

                        {/* Luxolis - most relevant robotic perception work, leads */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">Machine Learning &amp; Robotic Perception Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Foundation-Model-Driven 6-DoF Pose Estimation (Hwacheon Machinery):</strong> Adapted FoundationPose (foundation model for novel-object 6-DoF pose) into a production eye-in-hand robotic manipulation pipeline. Mounted an RGB-D camera on an autonomous CNC drill head and used ICP refinement to register physical workpieces against 3D CAD models in SE(3) space, eliminating manual fixturing and enabling dynamic toolpath adjustment.</p>
                                <p><strong>Real-Time Multi-Camera Perception (Pungkang Co. Ltd.):</strong> Deployed a synchronized 6-camera Basler array with real-time PyTorch inference and PLC-integrated control, reaching &lt;200ms end-to-end latency at industrial-grade reliability.</p>
                                <p><strong>C++ / Python Integration:</strong> Built deterministic image-acquisition and control logic bridging high-speed PyTorch inference pipelines with industrial automation hardware (NuDAQ I/O, GPIO).</p>
                            </div>
                        </div>

                        {/* PERSPECTIVE - production ML deployment, foundation models */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">Machine Learning &amp; 3D Reconstruction Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Research-to-Production Foundation Model Deployment:</strong> Took LADi-VTON (latent diffusion), DensePose, U2Net, and CLIP textual inversion from research papers to a deployed AWS production system reaching 85%+ visual fidelity. Owned the full pipeline: fine-tuning, training infrastructure (Weights &amp; Biases), containerization (Docker), and customer-facing deployment.</p>
                                <p><strong>Single-Image to 3D Mesh Generation:</strong> Engineered a PyTorch-based image-to-3D pipeline (OpenLRM Large Reconstruction Model) producing geometrically valid 3D meshes, reaching IoU 0.80 and Chamfer Distance 0.08. Designed a multi-view synthetic rendering system in Blender for calibrated 24×360° training views enhanced by ESRGAN.</p>
                                <p><strong>Hierarchical Deep Learning Classification:</strong> Built a ResNet50-based fine-grained classification system handling severe class imbalance, reaching &gt;95% accuracy across 73 classes through a 3-depth taxonomy with specialized sub-classifiers.</p>
                                <p><strong>Pixel-Precise Semantic Segmentation:</strong> Fine-tuned U2Net for pixel-perfect mask extraction with alpha-matting precision used as geometric input to downstream 3D pipelines.</p>
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
                                <p><strong>High-Performance C++ Perception Pipeline (Apple Project):</strong> Architected a real-time C++ pipeline for sub-millimeter 3D registration using PCL, Eigen, RANSAC, and parallel ICP. Processes 1M+ point clouds in real-time and validates against reference CAD specifications.</p>
                                <p><strong>Interactive 3D Manipulation Tools:</strong> Built a PolyWorks-style 3D alignment application with ICP best-fit, SVD landmark registration, and lasso-based mesh editing via VTK / PyVista, supporting interactive workflows for non-programmer operators.</p>
                                <p><strong>Modular Perception Pipeline Engine:</strong> Designed a node-based 3D processing engine (.NET 8 / WPF, ECS architecture) with an extensible plugin system, enabling chained perception operations (registration, primitive fitting, defect detection).</p>
                            </div>
                        </div>

                        {/* Ellexi */}
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">Machine Learning &amp; Edge AI Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Nov 2019 - Oct 2021</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Edge GPU Deployment (NVIDIA Jetson):</strong> Deployed multi-class YOLO detection on NVIDIA Jetson edge devices with ONNX / TensorRT optimization for real-time on-device inference. Designed geo-fenced spatial reasoning for hazard zone alerts in active construction sites.</p>
                                <p><strong>Synthetic Training Data Engineering:</strong> Built a procedural data generation pipeline producing photorealistic synthetic datasets with parameterized variations (lighting, perspective, materials). Enabled 98% downstream accuracy without restricted real-world data.</p>
                                <p><strong>Spatio-Temporal Multi-Camera Tracking (Incheon Airport):</strong> Built a real-time perception pipeline using YOWO (3D-CNN action recognition), HRNet pose estimation, and Person Re-Identification across a distributed, spatially-calibrated camera network.</p>
                                <p><strong>Robust OCR &amp; Geometric Mask R-CNN Pipeline:</strong> Built a CRAFT + Tesseract OCR pipeline coupled with Mask R-CNN instance segmentation for robust text and geometric measurement extraction from highly variable field images.</p>
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
