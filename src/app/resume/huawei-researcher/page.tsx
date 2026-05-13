"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export default function HuaweiResearcherResumePage() {
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
                            Computer vision researcher and ML engineer with 6+ years of experience bridging cutting-edge research and production deployment in <strong>3D reconstruction, generative modeling, and neural rendering</strong>. Hands-on research-to-product experience with <strong>Large Reconstruction Models (OpenLRM), Latent Diffusion (LADi-VTON), CLIP-conditioned generation, foundation models</strong> (FoundationPose, SAM), and 3D geometric algorithms. Peer-reviewed publication record in applied mathematics for computer vision, paired with shipped production systems for industrial and commercial customers. Strong PyTorch and C++ engineering. Active research interest in <strong>3D Gaussian Splatting</strong> and visual geometry transformers.
                        </p>
                    </section>

                    {/* Research Interests - tailored for research role */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            RESEARCH INTERESTS
                        </h2>
                        <p className="text-[10pt] text-gray-800 leading-snug">
                            3D reconstruction (single-image, multi-view, neural rendering) · 3D Gaussian Splatting · Diffusion models &amp; latent-space generation · Visual geometry transformers (LRM-family) · Multi-modal generation (text/image/3D) · Foundation models &amp; few-shot 3D · Mathematical foundations of segmentation (variational methods, p-Laplace PDEs).
                        </p>
                    </section>

                    {/* Peer-Reviewed Publications - elevated to second section for research role */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            PEER-REVIEWED PUBLICATIONS
                        </h2>
                        <ul className="text-[10pt] text-gray-800 leading-snug space-y-1 list-disc list-inside">
                            <li>Munir, A., Soomro, S., <strong>Shahid, M.T.</strong>, Soomro, T.A., Choi, K.N. &quot;Hybrid active contours driven by edge and region fitting energies based on <strong>p-Laplace equation</strong>,&quot; <em>IEEE Access</em>, vol. 7, 2019.</li>
                            <li>Memon, A., Soomro, S., <strong>Shahid, M.T.</strong>, Munir, A., Niaz, A., Choi, K.N. &quot;Segmentation of Intensity-Corrupted Medical Images Using <strong>Adaptive Weight-Based Hybrid Active Contours</strong>,&quot; <em>Computational and Mathematical Methods in Medicine</em>, 2020.</li>
                            <li>Kim, D.D., <strong>Shahid, M.T.</strong>, Kim, Y., Lee, W.J., Song, H.C., Piccialli, F., Choi, K.N. &quot;Generating Pedestrian Training Dataset using <strong>DCGAN</strong>,&quot; <em>Proceedings of the 2019 3rd International Conference on Advances in Image Processing (ICAIP)</em>, 2019.</li>
                            <li><strong>Shahid, M.T.</strong> &quot;Object Segmentation with Active Contours Driven by Weight Matrix,&quot; M.S. Thesis, <em>Chung-Ang University</em>, 2019.</li>
                        </ul>
                    </section>

                    {/* Core Research & Technical Skills */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            TECHNICAL SKILLS
                        </h2>
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>3D Reconstruction &amp; Neural Rendering:</strong> OpenLRM (Large Reconstruction Models), NeRF, mesh generation, point-cloud-to-mesh, multi-view geometry, neural rendering, differentiable rendering, 3D Gaussian Splatting (active study)</p>
                            <p><strong>Generative Modeling:</strong> Latent Diffusion (LADi-VTON, Stable Diffusion), GANs (DCGAN, StyleGAN-family), CLIP textual inversion, conditional generation, image synthesis, photorealistic rendering, synthetic data generation</p>
                            <p><strong>Foundation Models &amp; Multi-Modal:</strong> FoundationPose (6-DoF pose), SAM (Segment Anything), CLIP, DensePose, vision-language alignment, few-shot/zero-shot adaptation</p>
                            <p><strong>Classical 3D &amp; Geometric Algorithms:</strong> ICP, RANSAC, SVD, PCA, SE(3) rigid transforms, hand-eye calibration, point cloud processing (PCL, Open3D, PyVista, VTK)</p>
                            <p><strong>Deep Learning Frameworks:</strong> PyTorch (6+ yrs), TensorFlow/Keras, Hugging Face, ONNX, CUDA, TensorRT</p>
                            <p><strong>Programming:</strong> Python (6+ yrs), C++ (6+ yrs), C# (.NET 8), MATLAB</p>
                            <p><strong>Cloud &amp; Infrastructure:</strong> AWS (S3, EC2), Docker, Weights &amp; Biases, Git, Linux</p>
                            <p><strong>Mathematical Foundations:</strong> Variational methods, energy minimization, p-Laplace PDEs, optimization, linear algebra (Eigen), differential geometry</p>
                        </div>
                    </section>

                    {/* Selected Research Projects - critical for research role */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            SELECTED RESEARCH PROJECTS
                        </h2>

                        <div className="mb-3">
                            <p className="text-[10pt] text-gray-900"><strong>Single-Image to 3D Mesh Reconstruction via Large Reconstruction Models</strong> <span className="italic text-gray-600">(PERSPECTIVE Corp., 2023-2025)</span></p>
                            <p className="text-[10pt] text-gray-800 leading-snug">Implemented and trained a transformer-based Large Reconstruction Model (OpenLRM) producing geometrically valid 3D meshes from a single 2D image, reaching IoU 0.80 and Chamfer Distance 0.08. Designed a custom multi-view synthetic rendering pipeline in Blender (bpy) generating 24×360° calibrated training views per object enhanced by ESRGAN super-resolution. Investigated geometry consistency, view-conditioned generation, and rendering-vs-mesh quality trade-offs.</p>
                        </div>

                        <div className="mb-3">
                            <p className="text-[10pt] text-gray-900"><strong>Fine-Tuned Latent Diffusion for Conditional Image Synthesis</strong> <span className="italic text-gray-600">(PERSPECTIVE Corp., 2022-2025)</span></p>
                            <p className="text-[10pt] text-gray-800 leading-snug">Fine-tuned the LADi-VTON Latent Diffusion Model with DensePose human-geometry conditioning and CLIP textual inversion to perform photorealistic conditional synthesis with 85%+ visual fidelity. Researched UNet conditioning strategies, classifier-free guidance, and identity-preserving inversion. Deployed as a production system on AWS.</p>
                        </div>

                        <div className="mb-3">
                            <p className="text-[10pt] text-gray-900"><strong>Foundation-Model-Based 6-DoF Pose Estimation</strong> <span className="italic text-gray-600">(Luxolis, 2025)</span></p>
                            <p className="text-[10pt] text-gray-800 leading-snug">Adapted FoundationPose (a foundation model for novel-object 6-DoF pose) into a production eye-in-hand robotic perception pipeline with ICP refinement in SE(3) space. Researched few-shot/zero-shot generalization to unseen workpieces and CAD-model-conditioned pose regression.</p>
                        </div>

                        <div className="mb-3">
                            <p className="text-[10pt] text-gray-900"><strong>Hierarchical Fine-Grained Visual Categorization</strong> <span className="italic text-gray-600">(PERSPECTIVE Corp., 2022-2024)</span></p>
                            <p className="text-[10pt] text-gray-800 leading-snug">Designed a hierarchical ResNet50-based FGVC system handling severe class imbalance and high intra-class variance across a 3-depth taxonomy of 73 classes (&gt;95% top-level, &gt;90% fine-grained accuracy). Explored multi-task loss formulations and taxonomy-aware learning.</p>
                        </div>

                        <div>
                            <p className="text-[10pt] text-gray-900"><strong>Mathematical Image Segmentation via Variational Methods</strong> <span className="italic text-gray-600">(Chung-Ang University, 2017-2019)</span></p>
                            <p className="text-[10pt] text-gray-800 leading-snug">Master&apos;s thesis research on active-contour image segmentation driven by hybrid energy functionals and p-Laplace partial differential equations. Co-authored peer-reviewed papers in <em>IEEE Access</em> and <em>Computational and Mathematical Methods in Medicine</em>.</p>
                        </div>
                    </section>

                    {/* Industry Experience - compressed for research role */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            INDUSTRY EXPERIENCE
                        </h2>

                        {/* PERSPECTIVE Corp. (lead with longest research-style role) */}
                        <div className="mb-3">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">3D Computer Vision &amp; Generative AI Researcher</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Dec 2021 - Apr 2025</p>
                            </div>
                            <p className="text-[10pt] text-gray-800 leading-snug mt-1">Led research and production deployment for 3D reconstruction (OpenLRM single-image-to-3D), generative AI (Latent Diffusion fine-tuning for conditional synthesis), neural rendering (24×360° Blender-based synthetic training pipelines), foundation-model integration (CLIP textual inversion, DensePose), and hierarchical deep learning for fine-grained classification. Customer-facing deployments on AWS via Docker.</p>
                        </div>

                        {/* Hyvision */}
                        <div className="mb-3">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Hyvision System</em>,&nbsp;
                                    <strong className="font-bold">3D Computer Vision &amp; C++ Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Aug 2025 - Present</p>
                            </div>
                            <p className="text-[10pt] text-gray-800 leading-snug mt-1">Sub-millimeter 3D registration pipelines for Apple manufacturing partners using PCL, Eigen, ICP/RANSAC/SVD-based coordinate alignment, real-time point cloud processing (VTK/PyVista), and a modular node-based 3D processing engine (.NET 8/WPF, ECS architecture) for extensible perception pipelines.</p>
                        </div>

                        {/* Luxolis */}
                        <div className="mb-3">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">Computer Vision &amp; Robotic Perception Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">May 2025 - Jul 2025</p>
                            </div>
                            <p className="text-[10pt] text-gray-800 leading-snug mt-1">Eye-in-hand 6-DoF pose estimation with FoundationPose + ICP for autonomous CNC robotic guidance. Synchronized 6-camera Basler array with real-time YOLO inference (&lt;200ms latency) for industrial perception.</p>
                        </div>

                        {/* Ellexi */}
                        <div>
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">Computer Vision &amp; Edge AI Engineer</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">Nov 2019 - Oct 2021</p>
                            </div>
                            <p className="text-[10pt] text-gray-800 leading-snug mt-1">Edge GPU deployment on NVIDIA Jetson with TensorRT/ONNX optimization. Multi-camera 3D scene understanding (YOWO 3D-CNN, HRNet, Person Re-ID) for Incheon Airport. Procedural synthetic data engine generating photorealistic training datasets (98% downstream accuracy without real-world data).</p>
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
                            <p className="text-[10pt] text-gray-800">Thesis: &quot;Object Segmentation with Active Contours Driven by Weight Matrix&quot; — variational methods, energy minimization, and PDEs applied to image segmentation</p>
                            <p className="text-[10pt] text-gray-800">Research Focus: Image segmentation, active contours, variational methods, object detection &amp; tracking</p>
                            <p className="text-[10pt] text-gray-800">CAYSS Scholarship recipient (Chung-Ang Young Scientist Scholarship)</p>
                        </div>

                        <div>
                            <p className="text-[10pt] italic text-gray-900">GIK Institute, Topi, Pakistan</p>
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
