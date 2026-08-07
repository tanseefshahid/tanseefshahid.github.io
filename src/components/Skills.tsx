import SectionHeading from "./SectionHeading";

const SKILL_GROUPS = [
    {
        title: "Programming",
        subcategories: [
            {
                label: "Languages",
                skills: ["Python", "C++", "C#", "C", "TypeScript", "MATLAB"],
            },
            {
                label: "UI Frameworks",
                skills: ["MFC", "WPF/.NET 8", "PyQt/PySide", "React/Next.js"],
            },
        ],
    },
    {
        title: "Libraries & Tools",
        subcategories: [
            {
                label: "Vision & ML",
                skills: ["OpenCV", "NumPy", "SciPy", "Pandas", "Scikit-learn", "Matplotlib"],
            },
            {
                label: "3D Processing",
                skills: [
                    "PolyWorks",
                    "PCL",
                    "Open3D",
                    "PyVista/VTK",
                    "Eigen",
                    "Helix Toolkit",
                    "Blender (bpy)",
                ],
            },
            {
                label: "MLOps & DevOps",
                skills: ["Weights & Biases", "Docker", "Git", "ONNX", "CUDA", "Linux"],
            },
        ],
    },
    {
        title: "AI / ML Frameworks",
        subcategories: [
            {
                label: "Deep Learning",
                skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face"],
            },
            {
                label: "Detection & Segmentation",
                skills: ["YOLO", "Detectron2", "Mask R-CNN", "U-Net", "U2Net", "SAM"],
            },
            {
                label: "Generative & 3D AI",
                skills: ["Stable Diffusion", "LADi-VTON", "GANs", "NeRF", "OpenLRM"],
            },
            {
                label: "Tracking & Pose",
                skills: ["DeepSORT", "HRNet", "DensePose", "CRAFT OCR", "Tesseract"],
            },
        ],
    },
    {
        title: "3D & Deployment",
        subcategories: [
            {
                label: "Metrology & Algorithms",
                skills: ["RANSAC", "ICP", "PCA", "SVD", "Point Cloud Filtering"],
            },
            {
                label: "Hardware & Edge AI",
                skills: [
                    "NVIDIA Jetson",
                    "TensorRT",
                    "ROS/ROS2",
                    "Basler GigE Cameras",
                    "PLC/NuDAQ",
                    "RGB-D Cameras",
                ],
            },
            {
                label: "Cloud & Infra",
                skills: ["AWS (S3, EC2)", "Flask", "SQL Server/ODBC", "REST APIs"],
            },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="border-t border-rule">
            <div className="mx-auto max-w-[1120px] px-5 py-14 sm:px-8 md:py-18">
                <div className="mb-4.5">
                    <SectionHeading num="04">Technical Skills</SectionHeading>
                </div>

                <p className="mb-8 max-w-[46em] text-[15px] leading-[1.6] text-ink-muted text-pretty md:text-[16px]">
                    Tooling and frameworks used across industrial inspection and deep learning
                    systems.
                </p>

                <div>
                    {SKILL_GROUPS.map((group, i) => (
                        <div
                            key={group.title}
                            className={`grid gap-4 border-t border-rule py-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10 ${
                                i === SKILL_GROUPS.length - 1 ? "border-b" : ""
                            }`}
                        >
                            <div className="text-[15.5px] font-semibold text-ink">{group.title}</div>

                            <div className="grid gap-3.5">
                                {group.subcategories.map(({ label, skills }) => (
                                    <div key={label}>
                                        <div className="mb-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink-faint">
                                            {label}
                                        </div>
                                        <div className="font-mono text-[13px] leading-[1.7] text-ink-soft sm:text-[14px]">
                                            {skills.join(" · ")}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
