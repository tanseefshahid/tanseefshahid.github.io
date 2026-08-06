import SectionHeading from "./SectionHeading";

const AREAS = [
    {
        title: "3D Geometry & SLAM",
        body: "Point cloud processing, geometric registration (ICP, RANSAC, SVD), 6-DoF pose estimation, hand-eye calibration, and sub-millimeter alignment.",
    },
    {
        title: "Computer Vision",
        body: "Object detection, semantic segmentation, multi-view geometry, OCR, and multi-camera tracking & re-identification.",
    },
    {
        title: "3D Reconstruction",
        body: "Single-image to mesh (OpenLRM), NeRF and neural rendering, Blender procedural pipelines, production .obj / .glb export.",
    },
    {
        title: "Generative AI",
        body: "Latent diffusion, GANs, conditional generation, CLIP textual inversion, and large-scale synthetic dataset engineering.",
    },
    {
        title: "Software Engineering",
        body: "Production C++ (Eigen, PCL), C# / .NET 8 (WPF, ECS), Python (PyTorch, Flask). Multi-threaded, containerized architectures.",
    },
    {
        title: "Edge AI & Deployment",
        body: "Jetson edge inference, TensorRT/ONNX optimization, Docker, hardware-in-the-loop (PLC/GPIO, Basler), AWS deployment.",
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="border-t border-rule">
            <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 md:py-18">
                <div className="mb-9 md:mb-11">
                    <SectionHeading num="01">Core Expertise</SectionHeading>
                </div>

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
