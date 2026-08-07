import SectionHeading from "./SectionHeading";

const AREAS = [
    {
        title: "3D Geometry & SLAM",
        body: "Point cloud processing, geometric registration (ICP, RANSAC, SVD), 6-DoF pose estimation, hand-eye calibration, and sub-millimeter alignment for robotics, autonomous systems, and precision metrology.",
    },
    {
        title: "Computer Vision",
        body: "Object detection (YOLO), semantic segmentation (U-Net, U2Net, SAM, Mask R-CNN), multi-view geometry, OCR, and multi-camera tracking & re-identification (DeepSORT, HRNet).",
    },
    {
        title: "3D Reconstruction & Rendering",
        body: "Single-image to 3D mesh generation (OpenLRM), NeRF, neural rendering, Blender-based procedural rendering, and exporting production-ready .obj / .glb assets for AR/VR, gaming, and manufacturing.",
    },
    {
        title: "Generative AI",
        body: "Latent Diffusion (LADi-VTON, Stable Diffusion), GANs, conditional generation, CLIP textual inversion, and large-scale synthetic dataset engineering for data-scarce and regulated domains.",
    },
    {
        title: "Software Engineering",
        body: "Production C++ (Eigen, PCL, STL), C# / .NET 8 (WPF, ECS architecture), Python (PyTorch, Flask), and full-stack web (React / Next.js, TypeScript). Multi-threaded, containerized, scalable architectures.",
    },
    {
        title: "Edge AI & Deployment",
        body: "NVIDIA Jetson edge inference, TensorRT/ONNX optimization, Docker containerization, hardware-in-the-loop integration (PLC/GPIO, Basler cameras), and cloud deployment (AWS).",
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="border-t border-rule">
            <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 md:py-18">
                <div className="mb-4.5">
                    <SectionHeading num="01">Core Expertise</SectionHeading>
                </div>

                <p className="mb-8 max-w-[46em] text-[15px] leading-[1.6] text-ink-muted text-pretty md:text-[16px]">
                    Bridging classical geometric algorithms and modern AI to build robust 3D systems
                    across robotics, metrology, generative content, and real-time perception.
                </p>

                <div className="grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
                    {AREAS.map(({ title, body }) => (
                        <div
                            key={title}
                            className="bg-paper-raised px-6 pt-7 pb-8 transition-colors hover:bg-paper-bright"
                        >
                            <h3 className="mb-3 text-[17px] font-semibold text-ink">{title}</h3>
                            <p className="m-0 text-[14.5px] leading-[1.6] text-ink-muted text-pretty">
                                {body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
