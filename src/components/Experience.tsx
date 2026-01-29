"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-cyan-400" /> Professional Experience
                </h2>

                <div className="border-l-2 border-white/10 pl-8 space-y-12">
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-cyan-500 border-4 border-black" />
                        <h3 className="text-xl font-bold">Senior AI Researcher</h3>
                        <p className="text-cyan-400 mb-2">PERSPECTIVE Corp. • Apr 2022 - Present</p>
                        <p className="text-gray-400">
                            Leading research in Virtual Fitting, Image-to-3D Reconstruction, Object Classification, Image Segmentation, and FaceSwap technologies.
                        </p>
                    </div>

                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-600 border-4 border-black" />
                        <h3 className="text-xl font-bold">Computer Vision Researcher</h3>
                        <p className="text-cyan-400 mb-2">Ellexi • Nov 2019 - Oct 2021</p>
                        <p className="text-gray-400">
                            Focused on Object Detection, Classification, Tracking, Segmentation, and Training Data Generation.
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mt-20 mb-12 flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-purple-400" /> Education
                </h2>

                <div className="border-l-2 border-white/10 pl-8 space-y-12">
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-black" />
                        <h3 className="text-xl font-bold">Chung-Ang University</h3>
                        <p className="text-purple-400 mb-2">M.S. in Computer Vision • Sep 2019</p>
                        <p className="text-gray-400">
                            Specializing in advanced computer vision techniques.
                        </p>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-black" />
                        <h3 className="text-xl font-bold">GIK Institute Pakistan</h3>
                        <p className="text-purple-400 mb-2">B.S. in Electronics Engineering • July 2016</p>
                    </div>
                </div>

            </motion.div>
        </section >
    );
}
