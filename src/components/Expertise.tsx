"use client";

import { motion } from "framer-motion";
import { Cpu, Eye, Code, Layers, Video, Zap } from "lucide-react";

const expertiseAreas = [
    {
        title: "3D Geometry & SLAM",
        description: "Point cloud processing, geometric registration (ICP, RANSAC, SVD), 6-DoF pose estimation, hand-eye calibration, and sub-millimeter alignment for robotics, autonomous systems, and precision metrology.",
        icon: Layers,
    },
    {
        title: "Computer Vision",
        description: "Object detection (YOLO), semantic segmentation (U-Net, U2Net, SAM, Mask R-CNN), multi-view geometry, OCR, and multi-camera tracking & re-identification (DeepSORT, HRNet).",
        icon: Eye,
    },
    {
        title: "3D Reconstruction & Rendering",
        description: "Single-image to 3D mesh generation (OpenLRM), NeRF, neural rendering, Blender-based procedural rendering, and exporting production-ready .obj / .glb assets for AR/VR, gaming, and manufacturing.",
        icon: Video,
    },
    {
        title: "Generative AI",
        description: "Latent Diffusion (LADi-VTON, Stable Diffusion), GANs, conditional generation, CLIP textual inversion, and large-scale synthetic dataset engineering for data-scarce and regulated domains.",
        icon: Cpu,
    },
    {
        title: "Software Engineering",
        description: "Production C++ (Eigen, PCL, STL), C# / .NET 8 (WPF, ECS architecture), Python (PyTorch, Flask), and full-stack web (React / Next.js, TypeScript). Multi-threaded, containerized, scalable architectures.",
        icon: Code,
    },
    {
        title: "Edge AI & Deployment",
        description: "NVIDIA Jetson edge inference, TensorRT/ONNX optimization, Docker containerization, hardware-in-the-loop integration (PLC/GPIO, Basler cameras), and cloud deployment (AWS).",
        icon: Zap,
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="relative py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-sans">
                        Core <span className="gradient-text-vibrant">Expertise</span><span className="text-cyan-400">.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Bridging classical geometric algorithms and modern AI to build robust 3D systems across robotics, metrology, generative content, and real-time perception.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {expertiseAreas.map((area, index) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="p-6 rounded-2xl glass-strong hover:bg-white/[0.08] transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                                <area.icon className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {area.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
