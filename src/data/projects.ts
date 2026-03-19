export type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
    videoUrl?: string;
    link?: string;
};

export const projects: Project[] = [
    {
        id: "camera-module-tilt",
        title: "Camera Module Tilt Analysis (LJ-X8080)",
        description: "High-performance C++ pipeline for aligning and computing tilt on camera modules using Keyence LJ-X8080 laser data, featuring parallel ICP alignment and robust plane fitting.",
        tags: ["C++", "PCL", "Eigen", "3D Metrology", "ICP"],
        link: "/en/portfolio/portfolio-0d/",
        imageUrl: "/images/architecture_0d.png",
    },
    {
        id: "virtual-fitting-system",
        title: "Virtual Fitting System",
        description: "Developed Virtual Fitting System using generative AI (Generative Adversarial Networks) which overlay clothes on user input.",
        tags: ["Generative AI", "GANs", "PyTorch", "Virtual Try-On"],
        link: "#",
    },
    {
        id: "3d-avatar-modeling",
        title: "3D Avatar Modeling",
        description: "Real-time 3D avatar reconstruction from monocular video inputs, enabling digital humans for metaverse applications.",
        tags: ["3D Reconstruction", "SMPL", "Avatar", "Computer Vision"],
        link: "#",
    },
    {
        id: "pose-estimation",
        title: "Pose Estimation & Object Segmentation",
        description: "Implemented robust pose estimation and object segmentation algorithms for complex scenes.",
        tags: ["Pose Estimation", "Segmentation", "Deep Learning"],
        link: "#",
    },
    {
        id: "safety-monitoring",
        title: "Real-time Safety Monitoring",
        description: "Designed a real-time safety monitoring solution for industrial environments to detect hazards and ensure compliance.",
        tags: ["Object Detection", "Safety", "Real-time"],
        link: "#",
    },
    {
        id: "procedural-rendering",
        title: "Procedural Rendering & Synthetic Data",
        description: "Leveraged procedural rendering techniques to generate large-scale synthetic datasets for training AI models.",
        tags: ["Synthetic Data", "Rendering", "Data Generation"],
        link: "#",
    },
];
