export type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    imageUrl?: string;
    videoUrl?: string; // For eventually adding video previews
    link?: string;
    github?: string;
};

export const projects: Project[] = [
    {
        id: "virtual-try-on",
        title: "Virtual Try-On System",
        description: "Developed a robust virtual fitting system leveraging generative AI to overlay clothing on user inputs with high fidelity.",
        tags: ["Generative AI", "PyTorch", "Computer Vision"],
        link: "#",
    },
    {
        id: "3d-avatar",
        title: "3D Avatar Modeling",
        description: "Real-time 3D avatar reconstruction from monocular video inputs using parametric models.",
        tags: ["3D Reconstruction", "SMPL", "Real-time"],
        link: "#",
    },
    {
        id: "safety-monitoring",
        title: "Real-time Safety Monitoring",
        description: "Industrial safety solution capable of detecting PPE compliance and hazardous zone intrusions.",
        tags: ["Object Detection", "YOLO", "Edge AI"],
        link: "#",
    },
    {
        id: "floorplan-to-3d",
        title: "Floorplan to 3D",
        description: "Automated pipeline converting 2D floorplan images into architecturally accurate 3D GLB models.",
        tags: ["Geometry Processing", "Three.js", "Python"],
        link: "#",
    },
];
