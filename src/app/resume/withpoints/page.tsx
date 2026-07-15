"use client";

import Link from "next/link";
import { Download, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { printWithFilename } from "@/lib/printWithFilename";

/**
 * 위드포인츠 (WENECT) — 로봇·비전 연동 SW 개발자 (책임급) 맞춤 국문 이력서.
 * 로컬 개발 전용 (프로덕션에서는 notFound). 실제 이력 기반(각색 없음),
 * 로봇·비전 연동 / 3D 계측·정합 / C++ 실시간을 전면 배치. ROS는 정직하게 표기.
 * 버튼으로 PDF 저장 (파일명: Resume-Muhammad-Tanseef-Shahid-WithPoints).
 */
export default function WithPointsResumePage() {
    if (process.env.NODE_ENV === "production") {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-100 py-8 md:py-12 print:bg-white print:py-0">
            <div className="max-w-[8.5in] mx-auto px-4 sm:px-6">
                {/* Action bar - hidden on print */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 no-print">
                    <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        포트폴리오로
                    </Link>
                    <button
                        onClick={() => printWithFilename("WithPoints")}
                        className="flex items-center gap-2 px-5 py-2 rounded text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-all"
                    >
                        <Download className="w-4 h-4" />
                        PDF 다운로드
                    </button>
                </div>

                {/* Resume Document */}
                <article className="bg-white text-gray-900 shadow-md print:shadow-none p-10 md:p-14 print:p-0 font-serif resume-doc">
                    {/* Header */}
                    <header className="mb-6 pb-3 border-b border-gray-300">
                        <h1 className="text-[28pt] font-normal text-gray-900 leading-tight mb-1">
                            Muhammad Tanseef Shahid
                        </h1>
                        <p className="text-[10.5pt] text-gray-700 mb-1">
                            3D 비전 · 로봇 연동 · 실시간 3D 계측 엔지니어
                        </p>
                        <p className="text-[10pt] text-gray-700">
                            <a href="mailto:mtanseefshahid@gmail.com" className="hover:underline">mtanseefshahid@gmail.com</a>
                            <span className="mx-2">•</span>
                            <a href="https://tanseefshahid.github.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">tanseefshahid.github.io</a>
                            <span className="mx-2">•</span>
                            <a href="https://www.linkedin.com/in/muhammad-tanseef-shahid/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/muhammad-tanseef-shahid</a>
                        </p>
                    </header>

                    {/* 요약 */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-1 pb-1 border-b border-gray-300">
                            요약
                        </h2>
                        <p className="text-[10pt] text-gray-800 leading-snug">
                            6년 이상 3D 비전·계측 분야에서 수학적 모델을 서브밀리미터·서브마이크론 정밀도의 프로덕션 C++ 소프트웨어로 구현해 온 엔지니어입니다. 점군 처리, 정합(ICP·RANSAC·SVD·PCA), 6-DoF Pose Estimation, hand-eye 캘리브레이션에 깊은 경험을 보유하고 있으며, RGB-D 비전을 이동식 가공 헤드에 <strong>eye-in-hand</strong>로 연동해 실시간 포즈로 기계를 제어한 <strong>로봇·비전 연동</strong> 경험이 있습니다. 엄밀한 이론과 대규모(100만+ 포인트) 실시간 산업 소프트웨어를 잇는 것이 강점입니다.
                        </p>
                    </section>

                    {/* 핵심 역량 */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            핵심 역량
                        </h2>
                        <div className="text-[10pt] text-gray-800 leading-relaxed space-y-1">
                            <p><strong>로봇·비전 연동:</strong> eye-in-hand 구성, hand-eye 캘리브레이션(AX=XB), 6-DoF Pose Estimation, SE(3) 강체 변환, 카메라-툴 좌표계 정합</p>
                            <p><strong>3D 계측·정합:</strong> 점군 처리, ICP, RANSAC, SVD 랜드마크 정합, PCA, 평면/실린더 피팅, 점군↔CAD 정합(역설계), FAI·공차 분석</p>
                            <p><strong>C++ 개발:</strong> 고성능 C++(6년+), STL·템플릿·병렬화(OpenMP), 실시간 파이프라인, Eigen 선형대수, PCL(Point Cloud Library)</p>
                            <p><strong>실시간·하드웨어 연동:</strong> 멀티카메라 하드웨어 동기화, PLC/GPIO 연동·액추에이션, 산업 현장 실배포, TensorRT 엣지 최적화</p>
                            <p><strong>소프트웨어·툴:</strong> C++, Python, C#(.NET 8), MATLAB, Eigen, PCL, VTK, Open3D, CUDA, Linux, Git, SQL, ROS/ROS2(이론·학습 중)</p>
                            <p><strong>응용 수학·모델링:</strong> 기하 편차 모델링, 강체 변환, 센서 노이즈 모델링, 멀티뷰 지오메트리, 캘리브레이션</p>
                        </div>
                    </section>

                    {/* 경력 */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            경력
                        </h2>

                        {/* Hyvision */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Hyvision System</em>,&nbsp;
                                    <strong className="font-bold">계측·C++ 소프트웨어 엔지니어</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">2025.08 – 현재</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>서브밀리미터 정밀 검사:</strong> PCL·RANSAC·Eigen 기반 좌표계 추정으로 카메라 모듈용 고성능 C++ 계측 파이프라인을 설계, SQL Server 스펙 대비 자동 FAI 공차 검증과 함께 서브밀리미터 측정 정밀도 달성.</p>
                                <p><strong>3D 정합·오차 모델링:</strong> ICP best-fit 정합, SVD 랜드마크 정합, SE(3) 강체 변환을 구현한 3D 정렬 애플리케이션 개발 — VTK/PyVista로 100만+ 점군을 실시간 처리하며 잔차 오차를 명시적으로 분석.</p>
                                <p><strong>레이저 프로파일 기반 6-DoF Pose Estimation:</strong> Keyence LJ-X8080 레이저 스캔에서 병렬 ICP 매칭과 강건 평면 피팅으로 정밀 6-DoF 포즈(Tx, Ty, Rx, Ry)를 계산, 기준 대비 편차를 명시적으로 모델링.</p>
                                <p><strong>모듈형 기하 처리 엔진:</strong> 노드 기반 3D 처리 엔진(.NET 8/WPF, ECS)을 설계해 정렬·프리미티브 피팅·결함 검출을 체이닝, 확장형 플러그인 구조 구현.</p>
                            </div>
                        </div>

                        {/* Luxolis - 로봇·비전 연동 핵심 */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Luxolis</em>,&nbsp;
                                    <strong className="font-bold">3D 지오메트리·컴퓨터 비전 엔지니어</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">2025.05 – 2025.07</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>6-DoF Pose Estimation & hand-eye 캘리브레이션:</strong> 자율 CNC 기계용 eye-in-hand RGB-D 포즈 추정 파이프라인(FoundationPose + ICP 정밀화) 구축 — 카메라-툴 좌표계를 명시적으로 캘리브레이션하고 SE(3)에서 강체 변환 수행 (로봇 암 eye-in-hand와 동일 원리).</p>
                                <p><strong>하드웨어 동기화 멀티뷰 지오메트리:</strong> 6대 Basler 카메라 배열을 결정론적 이미지 획득과 PLC 연동 제어로 배포, 멀티뷰 지오메트리를 200ms 미만 지연으로 처리.</p>
                            </div>
                        </div>

                        {/* PERSPECTIVE */}
                        <div className="mb-4">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">PERSPECTIVE Corp.</em>,&nbsp;
                                    <strong className="font-bold">3D 재구성·알고리즘 연구원</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">2021.12 – 2025.04</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>단일 이미지 → 3D 메시 재구성:</strong> 기하적으로 유효한 3D 메시를 생성하는 image-to-3D 파이프라인(OpenLRM) 구현, IoU 0.80·Chamfer 0.08의 정량 기하 오차 평가 달성.</p>
                                <p><strong>멀티뷰 기하 합성:</strong> Blender(bpy) 절차적 렌더링 파이프라인으로 자산당 24×360° 캘리브레이션 뷰 생성(카메라 내·외부 파라미터 명시), 엄밀한 기하 ground-truth 학습 지원.</p>
                                <p><strong>수학적 영상 모델링:</strong> 변분 세그멘테이션(U2Net) 파인튜닝, active-contour 연구의 에너지 최소화 원리로 픽셀 정밀 객체 기하 추출.</p>
                            </div>
                        </div>

                        {/* Ellexi */}
                        <div className="mb-2">
                            <div className="flex justify-between items-baseline">
                                <p className="text-[10pt] text-gray-900">
                                    <em className="not-italic">Ellexi</em>,&nbsp;
                                    <strong className="font-bold">컴퓨터 비전·알고리즘 개발자</strong>
                                </p>
                                <p className="text-[9pt] text-gray-700 italic">2019.11 – 2021.10</p>
                            </div>
                            <div className="text-[10pt] text-gray-800 leading-snug mt-1 space-y-1">
                                <p><strong>필드 노이즈 하 기하 측정:</strong> Mask R-CNN 기반 기하 측정 파이프라인으로 노이즈 심한 필드 이미지에서 정밀 각도 편차를 계산, 원근 왜곡·렌즈 아티팩트를 계통 오차로 모델링.</p>
                                <p><strong>원근 보정·OCR:</strong> homography 원근 보정과 노이즈 모델링으로 번호판 인식 시스템 구축, 비정형 촬영 조건에서 99%+ 문자 정확도.</p>
                                <p><strong>멀티카메라 공간 캘리브레이션:</strong> 인천국제공항에서 공간 캘리브레이션된 카메라 네트워크 기반 멀티카메라 추적 시스템 설계.</p>
                            </div>
                        </div>
                    </section>

                    {/* 학력 */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            학력
                        </h2>
                        <div className="mb-3">
                            <p className="text-[10pt] italic text-gray-900">중앙대학교 (Chung-Ang University), 서울</p>
                            <p className="text-[10pt] italic text-gray-900">컴퓨터공학 석사 (응용수학·컴퓨터 비전)</p>
                            <p className="text-[10pt] text-gray-800">논문: &quot;Object Segmentation with Active Contours Driven by Weight Matrix&quot; — 변분법·에너지 최소화·편미분방정식의 영상 세그멘테이션 응용</p>
                            <p className="text-[10pt] text-gray-800">CAYSS 장학금 수혜 (중앙대 영 사이언티스트 장학금)</p>
                        </div>
                        <div>
                            <p className="text-[10pt] italic text-gray-900">GIK Institute, Topi, Pakistan</p>
                            <p className="text-[10pt] italic text-gray-900">전자공학 학사 (B.S. in Electronic Engineering)</p>
                            <p className="text-[10pt] text-gray-800">졸업작품: Smart Blind Navigation System (Raspberry Pi, OpenCV, GSM) — 졸업작품 경진대회 2위</p>
                        </div>
                    </section>

                    {/* 연구 논문 */}
                    <section className="mb-5 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            연구 논문 (응용수학)
                        </h2>
                        <ul className="text-[10pt] text-gray-800 leading-snug space-y-1 list-disc list-inside">
                            <li>Munir, A., Soomro, S., <strong>Shahid, M.T.</strong>, Soomro, T.A., Choi, K.N. &quot;Hybrid active contours driven by edge and region fitting energies based on <strong>p-Laplace equation</strong>&quot;, <em>IEEE Access</em> (2019).</li>
                            <li>Memon, A., Soomro, S., <strong>Shahid, M.T.</strong>, Munir, A., Niaz, A., Choi, K.N. &quot;Segmentation of Intensity-Corrupted Medical Images Using <strong>Adaptive Weight-Based Hybrid Active Contours</strong>&quot;, <em>Computational and Mathematical Methods in Medicine</em> (2020).</li>
                            <li>Kim, D.D., <strong>Shahid, M.T.</strong>, Kim, Y., Lee, W.J., Song, H.C., Piccialli, F., Choi, K.N. &quot;Generating Pedestrian Training Dataset using DCGAN&quot;, <em>Proceedings of the 2019 3rd International Conference on Advances in Image Processing</em> (2019).</li>
                        </ul>
                    </section>

                    {/* 수상 */}
                    <section className="mb-2 print-section">
                        <h2 className="text-[11pt] font-bold text-gray-900 tracking-wider mb-2 pb-1 border-b border-gray-300">
                            수상
                        </h2>
                        <div>
                            <p className="text-[10pt] font-bold italic text-gray-900">Chung-Ang Young Scientist Scholarship (CAYSS)</p>
                            <p className="text-[10pt] text-gray-800">고급 컴퓨터과학·공학 분야에서 뛰어난 잠재력을 보인 우수 국제 연구자에게 수여.</p>
                        </div>
                    </section>
                </article>
            </div>
        </main>
    );
}
