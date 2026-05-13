"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { printWithFilename } from "@/lib/printWithFilename";

export default function OusterResumePage() {
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
                        onClick={() => printWithFilename("Ouster")}
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
                            Machine learning engineer with 6+ years of hands-on experience architecting deep neural networks for object detection, multi-object tracking, and 3D point cloud perception. Deep expertise in PyTorch and C++ across the full lifecycle: ripping apart model architectures, designing custom multi-task loss functions, fine-tuning foundation models for low-data regimes, and optimizing for real-time edge inference on NVIDIA Jetson. Strong production track record with YOLO, Mask R-CNN, DeepSORT, HRNet, foundation models (FoundationPose, SAM, CLIP), and Latent Diffusion. Daily work with LIDAR-class point cloud data (PCL, Open3D, Eigen) at sub-millimeter precision.
                        </p>
                    </section>

                    {/* Core Skills - directly mirroring Ouster's job description */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            CORE SKILLS
                        </h2>
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>Detection &amp; Tracking:</strong> YOLO (v3-v8), Mask R-CNN, transformer-based detectors, DeepSORT, ByteTrack-class tracking, Kalman filters, HRNet pose estimation, Person Re-Identification, YOWO (3D-CNN spatio-temporal detection)</p>
                            <p><strong>Architecture Internals &amp; Customization:</strong> Custom PyTorch loss functions (multi-task, hierarchical, taxonomy-aware), architecture modification, custom layer design, custom data augmentation strategies, head replacement, fine-tuning beyond &quot;out-of-the-box&quot; APIs</p>
                            <p><strong>3D / LIDAR / Point Cloud:</strong> Point cloud processing (PCL, Open3D, PyVista, VTK), ICP, RANSAC, SVD, plane / cylinder / edge fitting, 6-DoF pose estimation in SE(3), depth processing, geometric registration, hands-on with Keyence laser profilers (LJ-X8080)</p>
                            <p><strong>Foundation Models &amp; Low-Data Regimes:</strong> FoundationPose (few-shot 6-DoF pose), SAM (Segment Anything), CLIP textual inversion, OpenLRM (Large Reconstruction Model), Latent Diffusion fine-tuning (LADi-VTON), transfer learning, domain adaptation, synthetic data generation for data-scarce domains</p>
                            <p><strong>Edge Optimization &amp; Deployment:</strong> NVIDIA Jetson (TX2, Xavier), TensorRT, ONNX Runtime, CUDA, model quantization, real-time inference (&lt;200ms latency), production C++ deployment</p>
                            <p><strong>Production C++ (6+ yrs):</strong> Eigen, PCL, STL, templates, multi-threaded pipelines, real-time C++ for industrial deployment, parallelized raycasting</p>
                            <p><strong>Programming:</strong> Python (6+ yrs), C++ (6+ yrs), C# (.NET 8 / WPF), MATLAB, TypeScript</p>
                            <p><strong>Math Foundation:</strong> Linear algebra, probability for loss design, geometric 3D vision, variational methods, p-Laplace PDEs (peer-reviewed publication)</p>
                            <p><strong>MLOps:</strong> PyTorch training pipelines, Weights &amp; Biases experiment tracking, Docker containerization, AWS (S3, EC2), Git, Linux</p>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            EXPERIENCE
                        </h2>

                        {/* Ellexi - leads because detection + tracking + edge is the closest match */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">Machine Learning Engineer (Detection, Tracking &amp; Edge AI)</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Nov 2019 - Oct 2021</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Real-Time ALPR with YOLO + CRNN + DeepSORT:</strong> Built a multi-stage object detection and tracking pipeline using YOLO for plate detection, CRNN for character recognition, and DeepSORT for multi-vehicle tracking across distributed gas-station cameras. Reached 98% recognition accuracy with synthetic-only training data.</p>
                                <p><strong>Edge GPU Deployment (NVIDIA Jetson TX2):</strong> Deployed multi-class YOLO detection on Jetson edge devices with ONNX / TensorRT optimization for low-latency on-device inference. Designed PPE compliance and geo-fenced spatial hazard reasoning with no cloud dependency.</p>
                                <p><strong>Spatio-Temporal Detection + Multi-Camera Tracking (Incheon Airport):</strong> Built a real-time pipeline using YOWO (3D-CNN spatio-temporal action recognition), HRNet pose estimation, and Person Re-Identification across a distributed, spatially-calibrated camera network. Tracked flagged individuals across cameras to detect anomalous behaviors (falls, sprinting, abandoned baggage).</p>
                                <p><strong>Synthetic Data Engine for Low-Data Regimes:</strong> Designed a procedural data generation pipeline producing photorealistic synthetic training data with parameterized variations (lighting, perspective, materials). Enabled 98% downstream accuracy without restricted real-world data, demonstrating transfer learning under data scarcity.</p>
                                <p><strong>Mask R-CNN with Custom Geometric Post-Processing:</strong> Built a CRAFT + Tesseract OCR pipeline coupled with Mask R-CNN instance segmentation, computing precise angle deviations from heavily noisy field images while modeling perspective distortion as a systematic error source.</p>
                            </div>
                        </div>

                        {/* PERSPECTIVE - custom loss, architecture customization, foundation models */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">Machine Learning Engineer (Architecture &amp; Foundation Models)</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Custom Multi-Task Loss for Hierarchical Classification:</strong> Designed a custom PyTorch loss function for a hierarchical ResNet50 classifier with a 3-depth taxonomy across 73 fine-grained classes. Combined taxonomy-aware weighting, class-imbalance compensation, and a multi-head architecture with specialized sub-classifiers to reach &gt;95% top-level and &gt;90% fine-grained accuracy.</p>
                                <p><strong>Architecture Modification of OpenLRM (Large Reconstruction Model):</strong> Adapted a transformer-based 3D reconstruction model, modifying internal layers, conditioning strategies, and view-rendering heads to produce printable 3D meshes from a single RGB image. Reached IoU 0.80 and Chamfer Distance 0.08 with explicit geometric error analysis.</p>
                                <p><strong>Latent Diffusion Fine-Tuning with Custom Conditioning:</strong> Took LADi-VTON (Latent Diffusion) from research paper to deployed production system, fine-tuning UNet conditioning with DensePose human-geometry features and CLIP textual inversion for identity-preserving conditional synthesis. Reached 85%+ visual fidelity, deployed on AWS via Docker.</p>
                                <p><strong>Multi-View Synthetic Rendering Pipeline:</strong> Designed a procedural Blender (bpy) rendering system generating 24×360° calibrated training views per asset with explicit camera intrinsics / extrinsics. Enabled rigorous geometric ground-truth training under low-real-data conditions, enhanced by ESRGAN super-resolution.</p>
                                <p><strong>High-Precision U2Net Fine-Tuning:</strong> Fine-tuned U2Net architecture with custom alpha-matting loss for pixel-perfect mask extraction used as geometric input to downstream 3D pipelines.</p>
                            </div>
                        </div>

                        {/* Luxolis - 6-DoF, FoundationPose, RGB-D */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">Machine Learning &amp; 3D Perception Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Foundation-Model-Driven 6-DoF Pose Estimation (Few-Shot):</strong> Adapted FoundationPose (a foundation model for novel-object 6-DoF pose) into a production eye-in-hand robotic manipulation pipeline. Used ICP refinement to register physical workpieces against 3D CAD models in SE(3) space, enabling few-shot generalization to unseen objects.</p>
                                <p><strong>Real-Time Multi-Camera Detection &amp; Tracking:</strong> Deployed a synchronized 6-camera Basler array with real-time YOLO inference, reaching &lt;200ms end-to-end latency at 5 parts / sec with PLC-integrated hardware control.</p>
                            </div>
                        </div>

                        {/* Hyvision */}
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Hyvision System</em>,&nbsp;
                                    <strong className="font-bold">3D Perception &amp; C++ Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Aug 2025 - Present</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>Production C++ Point Cloud Pipeline:</strong> Architected a real-time C++ metrology pipeline processing Keyence LJ-X8080 laser scan data (LIDAR-class structured-light sensing) using PCL, Eigen, RANSAC, and parallel ICP. Sub-millimeter precision with 1M+ point clouds processed in real-time.</p>
                                <p><strong>Modular Perception Engine:</strong> Designed a node-based 3D processing engine (.NET 8 / WPF, ECS architecture) enabling chained perception operations (registration, primitive fitting, defect detection) with an extensible plugin system for non-programmer operators.</p>
                                <p><strong>Custom Laser Simulator:</strong> Built an internal 3D laser-profiler simulator (Python, PyQt5, PyVista, trimesh) emulating LJ-X8080-class sensors over arbitrary CAD models with parallelized ray-mesh intersection for hardware feasibility evaluation.</p>
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
                            <p className="text-[10pt] text-gray-800">Thesis: &quot;Object Segmentation with Active Contours Driven by Weight Matrix&quot;. Focused on variational methods, energy minimization, and custom loss functional design for image segmentation.</p>
                            <p className="text-[10pt] text-gray-800">Research Focus: Image Segmentation, Object Detection &amp; Tracking, Custom Loss Function Design</p>
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
