"use client";

import Link from "next/link";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";
import { printWithFilename } from "@/lib/printWithFilename";

export default function OusterCoverLetterPage() {
    return (
        <main className="min-h-screen bg-[#070A12] relative py-12 md:py-24 print:bg-white print:py-0 print:px-0">
            {/* Background elements - hidden on print */}
            <div className="fixed inset-0 pointer-events-none z-0 no-print">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Navigation actions - hidden on print */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 no-print">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>

                    <button
                        onClick={() => printWithFilename("Ouster", "Cover-Letter")}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition-all shadow-lg glow-cyan"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </button>
                </div>

                {/* Cover Letter Content */}
                <div className="glass-strong rounded-2xl p-8 md:p-12 mb-12 bg-white print:shadow-none print:p-0 print:border-none print:mb-0 print:rounded-none">
                    <div className="space-y-6 text-gray-300 print:text-gray-800 font-serif leading-relaxed text-lg print:text-base">

                        {/* Header */}
                        <div className="border-b border-white/10 print:border-gray-200 pb-8 mb-8">
                            <h1 className="text-3xl font-bold text-white print:text-gray-900 mb-4">Muhammad Tanseef Shahid</h1>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 print:text-gray-600">
                                <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> mtanseefshahid@gmail.com</span>
                                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> tanseefshahid.github.io</span>
                                <span className="flex items-center gap-1"><Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid</span>
                            </div>
                        </div>

                        <p>Dear Ouster Hiring Team,</p>

                        <p>
                            I&apos;m applying for the Machine Learning Engineer role on the Object Detection and Tracking team. The job description reads very close to what I&apos;ve been shipping for six years: production object detection and tracking pipelines, custom-loss and architecture customization beyond &quot;out-of-the-box&quot; APIs, foundation-model adaptation for low-data regimes, and edge-optimized inference on NVIDIA Jetson. The fact that Ouster builds LIDAR sensors makes this almost ideal: my daily work is already on LIDAR-class point cloud data.
                        </p>

                        <p>
                            On detection and tracking specifically, I have shipped multiple production systems. At Ellexi I built a real-time ALPR pipeline combining YOLO for plate detection, CRNN for character recognition, and DeepSORT for multi-vehicle tracking across distributed gas-station cameras, reaching 98% accuracy with synthetic-only training data. I also shipped a multi-camera spatio-temporal tracking system for Incheon International Airport using YOWO (3D-CNN action recognition), HRNet pose estimation, and Person Re-Identification across a distributed, spatially-calibrated camera network. More recently at Luxolis I deployed a 6-camera YOLO inference system on a synchronized Basler array, reaching under 200 ms end-to-end latency with PLC-integrated hardware control. The thread is the same in each case: detection and tracking together, at production latency, with edge or industrial constraints.
                        </p>

                        <p>
                            On the architecture-customization side, I&apos;m comfortable opening up a model and modifying it. At PERSPECTIVE Corp. I designed a custom PyTorch multi-task loss for a hierarchical ResNet50 classifier with a 3-depth taxonomy over 73 fine-grained classes, combining taxonomy-aware weighting, class-imbalance compensation, and specialized sub-classifier heads to reach over 95% top-level and 90% fine-grained accuracy. I also adapted OpenLRM (a transformer-based Large Reconstruction Model) by modifying internal layers, conditioning strategies, and view-rendering heads to produce printable 3D meshes from a single RGB image (IoU 0.80, Chamfer Distance 0.08). I&apos;m exactly the kind of engineer your job description names: someone who ships custom loss functions and modified architectures, not someone who imports a model and ships the defaults.
                        </p>

                        <p>
                            For low-data regimes I&apos;ve relied on two approaches that fit Ouster&apos;s context well. The first is foundation-model adaptation: at Luxolis I used FoundationPose (a foundation model for novel-object 6-DoF pose) to generalize to unseen workpieces with few or zero examples per object, refined by ICP in SE(3) space. The second is procedural synthetic data: at Ellexi I built a procedural data generation pipeline producing photorealistic synthetic training data with parameterized variations (lighting, perspective, materials) that enabled 98% downstream accuracy without restricted real-world data. Both translate directly to LIDAR object detection where labelled data is expensive and edge cases dominate.
                        </p>

                        <p>
                            On the LIDAR / point cloud side, I work daily with point cloud data in production C++. At Hyvision System I architect sub-millimeter 3D registration pipelines using PCL, Eigen, RANSAC, and parallel ICP on Keyence LJ-X8080 laser profilers, processing 1M+ point clouds in real time. While LJ-X8080 is structured-light line laser rather than time-of-flight LIDAR, the downstream data structures and algorithms (point clouds, registration, primitive fitting, pose estimation) are the same. I also recently built an internal 3D laser-profiler simulator in Python (PyQt5, PyVista, trimesh) for evaluating sensor placement and scan strategies over CAD models, which gave me strong intuition for sensor configuration trade-offs.
                        </p>

                        <p>
                            On the deployment side I&apos;ve shipped multi-class YOLO detection on NVIDIA Jetson TX2 with TensorRT and ONNX optimization, and I&apos;m comfortable with the inference-latency, quantization, and memory trade-offs that come with edge deployment. My background also includes a Master&apos;s in Computer Vision and Machine Learning from Chung-Ang University with peer-reviewed papers in <em>IEEE Access</em> (on hybrid active contours driven by p-Laplace partial differential equations) and in <em>Computational and Mathematical Methods in Medicine</em>. Linear algebra and probability for custom loss design aren&apos;t learned concepts for me; they&apos;re how I think.
                        </p>

                        <p>
                            One practical note. I&apos;m currently based in Seoul, South Korea. I&apos;d need visa sponsorship and relocation, and I&apos;m fully open to either the US or the Vancouver, BC office if Ouster has remote-friendly arrangements for the role. I&apos;m ready to commit to a timeline that works for the team.
                        </p>

                        <p>
                            I&apos;d be grateful for a short call to walk through how my detection, tracking, point cloud, and custom-architecture work map to Ouster&apos;s roadmap. Detailed project write-ups with architecture diagrams are at <a href="https://tanseefshahid.github.io" className="text-cyan-400 print:text-cyan-700 hover:underline">tanseefshahid.github.io</a>.
                        </p>

                        <p>Thank you for your time and consideration.</p>

                        <div className="pt-4">
                            <p>Sincerely,</p>
                            <p className="mt-4 font-semibold text-white print:text-gray-900">Muhammad Tanseef Shahid</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
