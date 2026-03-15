"use client";

import { ArrowLeft, Download, Mail, Globe, Linkedin } from "lucide-react";
import Link from "next/link";

export default function MedicalCoverLetter() {
    return (
        <main className="min-h-screen bg-white py-12 md:py-24 px-4 print:py-0 print:px-0">
            <div className="max-w-3xl mx-auto">
                {/* Navigation - Hidden on Print */}
                <div className="flex justify-between items-center mb-12 no-print">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-gray-500 hover:text-cyan-600 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Link>

                    <button
                        onClick={() => window.print()}
                        className="flex items-center gap-2 px-6 py-2 rounded-full bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors shadow-lg"
                    >
                        <Download className="w-4 h-4" />
                        Save as PDF
                    </button>
                </div>

                {/* Letter Content */}
                <div className="bg-white text-gray-800 font-serif leading-relaxed text-lg">
                    {/* Header */}
                    <div className="mb-12 border-b pb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Muhammad Tanseef Shahid</h1>
                        <div className="space-y-1 text-gray-600 font-sans text-sm">
                            <p>Seoul, South Korea</p>
                            <p className="flex items-center gap-2"><Mail className="w-3 h-3" /> mtanseefshahid@gmail.com</p>
                            <p className="flex items-center gap-2"><Globe className="w-3 h-3" /> tanseefshahid.github.io</p>
                            <p className="flex items-center gap-2"><Linkedin className="w-3 h-3" /> linkedin.com/in/muhammad-tanseef-shahid</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p>Hiring Committee,</p>

                        <p>
                            I am writing to express my strong interest in the Medical Imaging Specialist position. With over 6 years of experience in 3D Computer Vision and a Master’s degree specifically focused on image segmentation, I am eager to bridge my expertise in high-precision engineering with the medical field.
                        </p>

                        <p>
                            While my recent professional experience has been in industrial metrology and generative 3D AI, my academic and research foundation is deeply rooted in medical imaging. My Master’s thesis was centered on <strong>"Object Segmentation with Active Contours Driven by Weight Matrix,"</strong> and I have co-authored research specifically for the medical domain, such as <strong>"Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours"</strong> (published in CMMM).
                        </p>

                        <p>Key highlights I bring to this role include:</p>

                        <ul className="list-disc ml-6 space-y-4">
                            <li>
                                <strong>Deep Mathematical Expertise:</strong> I have a rigorous understanding of the mathematical foundations of segmentation (Active Contours, Level Sets) and 3D reconstruction. My experience is not limited to using tools, but extends to optimizing the underlying algorithms.
                            </li>
                            <li>
                                <strong>3D Reconstruction & DICOM:</strong> I have completed projects involving the reconstruction of 3D anatomical models from CT/DICOM data. I am highly comfortable with the transition from 2D slices to 3D volumetric surfaces and meshes.
                            </li>
                            <li>
                                <strong>Automation focus:</strong> I am an expert in Python and C++. I don't just perform manual segmentation; I build scripts (including Blender/bpy and PyVista/VTK) to automate workflows. I am eager to apply this to the 3D Slicer API to enhance your project's efficiency.
                            </li>
                            <li>
                                <strong>Technical Versatility:</strong> I understand that medical data has unique acquisition challenges. However, the geometric principles of metrology and sub-millimeter precision I used at Hyvision System translate directly to the reliability required in clinical imaging.
                            </li>
                        </ul>

                        <p>
                            I am looking to pivot my career toward Medical 3D because I am passionate about the impact of this data. I am a fast learner when it comes to specific software tools (like 3D Slicer), provided the underlying mathematics are solid, which they are.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 italic print:break-before-page print:mt-12">
                            <p className="font-bold not-italic mb-2 text-gray-900">My Approach:</p>
                            I value your time and technical standards. If you are willing to provide a sample dataset and specific task details, I would love to provide a <strong>comprehensive task plan and a Proof of Concept (POC)</strong> before we officially begin. This will allow you to evaluate my methodology and clinical accuracy firsthand.
                        </div>

                        <p>
                            Thank you for your time and consideration. I look forward to the possibility of discussing how my background in high-precision 3D vision can serve your team.
                        </p>

                        <div className="pt-8">
                            <p>Best regards,</p>
                            <p className="font-bold text-xl mt-2">Muhammad Tanseef Shahid</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @media print {
                    .no-print {
                        display: none !important;
                    }
                    body {
                        background-color: white !important;
                    }
                    main {
                        padding: 0 !important;
                    }
                }
            `}</style>
        </main>
    );
}
