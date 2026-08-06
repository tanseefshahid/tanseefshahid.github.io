import SectionHeading from "./SectionHeading";

const SKILLS = [
    {
        group: "Languages",
        items: "Python · C++ · C# · C · TypeScript · MATLAB",
    },
    {
        group: "3D & Metrology",
        items: "PCL · Open3D · PolyWorks · Eigen · PyVista/VTK · Helix Toolkit · Blender (bpy) · RANSAC · ICP · SVD · PCA",
    },
    {
        group: "Deep Learning",
        items: "PyTorch · TensorFlow · Keras · Hugging Face · YOLO · Detectron2 · Mask R-CNN · U-Net · U2Net · SAM",
    },
    {
        group: "Generative & Tracking",
        items: "Stable Diffusion · LADi-VTON · GANs · NeRF · OpenLRM · DeepSORT · HRNet · DensePose · CRAFT / Tesseract OCR",
    },
    {
        group: "Hardware & Edge",
        items: "NVIDIA Jetson · TensorRT · ONNX · CUDA · ROS/ROS2 · Basler GigE · PLC/NuDAQ · RGB-D cameras",
    },
    {
        group: "UI & Application",
        items: "WPF / .NET 8 · MFC · PyQt / PySide · React / Next.js",
    },
    {
        group: "Infra & MLOps",
        items: "Docker · Git · Weights & Biases · AWS (S3, EC2) · Flask · SQL Server/ODBC · REST APIs · Linux",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="border-t border-rule">
            <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 md:py-18">
                <div className="mb-9 md:mb-11">
                    <SectionHeading num="04">Technical Skills</SectionHeading>
                </div>

                <div>
                    {SKILLS.map(({ group, items }, i) => (
                        <div
                            key={group}
                            className={`grid gap-2 border-t border-rule py-5 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 ${
                                i === SKILLS.length - 1 ? "border-b" : ""
                            }`}
                        >
                            <div className="text-[15.5px] font-semibold text-ink">{group}</div>
                            <div className="font-mono text-[13px] leading-[1.75] text-ink-soft sm:text-[14px]">
                                {items}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
