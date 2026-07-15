"use client";

import { printWithFilename } from "@/lib/printWithFilename";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";
import Link from "next/link";

/**
 * 위드포인츠 (WENECT) — 로봇·비전 연동 SW 개발자 (책임급) 맞춤 포트폴리오 (국문).
 *
 * 로컬 개발 전용 (라우트 폴더 gitignore). 로봇·비전 연동 / 실시간 제어 / 3D 계측·정합
 * 도메인에 가장 연관성 높은 프로젝트를 선별. ROS/ROS2는 정직하게(이론 숙지·실무 제한)
 * 서술. 각 프로젝트는 문제 → 접근 → 결과 흐름.
 * 버튼으로 PDF 저장 (파일명: Portfolio-Muhammad-Tanseef-Shahid-WithPoints).
 */

type Category = "로봇·비전 연동" | "실시간 시스템" | "3D 계측·Pose" | "3D 정합·역설계";

type Featured = {
    n: string;
    title: string;
    category: Category;
    image: string;
    tags: string[];
    problem: string;
    approach: string[];
    result: string;
    relevance: string;
    hypothesis?: string;
    validation?: string;
    output?: { src: string; caption: string }[];
};

const CATEGORY_STYLE: Record<Category, string> = {
    "로봇·비전 연동": "bg-violet-500/20 text-violet-300 border-violet-400/30",
    "실시간 시스템": "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    "3D 계측·Pose": "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    "3D 정합·역설계": "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/30",
};

const FEATURED: Featured[] = [
    {
        n: "01",
        title: "Eye-in-Hand 6-DoF 포즈 추정 & 기계 동작 연동",
        category: "로봇·비전 연동",
        image: "/images/architecture_cnc.png",
        tags: ["6-DoF Pose", "Hand-Eye Calib (AX=XB)", "FoundationPose", "ICP", "SE(3)", "RGB-D"],
        relevance:
            "이 포지션의 핵심과 직접 일치합니다 — 3D 비전(RGB-D·점군)을 이동식 가공 헤드에 eye-in-hand로 연동해 실시간 6-DoF 포즈로 기계 동작을 제어. 로봇 암 eye-in-hand와 동일한 방식이며, '점군·Pose 기반 로봇 제어' 경험에 직결됩니다.",
        problem:
            "CNC 가공은 공구가 소재에 닿기 전 서브밀리미터 정렬이 필요하며, 전통적으로는 느린 수동 지그 작업이 요구됩니다. 임의의 위치(X/Y/Z)·회전(Roll/Pitch/Yaw)으로 놓인 공작물을 실시간으로 인식해 기계가 스스로 경로를 보정하도록 만들어야 했습니다 — 전형적인 비정형 환경 대응.",
        approach: [
            "이동식 스핀들(가공 헤드)에 RGB-D 센서를 장착하고 hand-eye 캘리브레이션(고전적 AX=XB)을 풀어 카메라 좌표계 → 기계 기구학 좌표계를 매핑 (로봇 암 eye-in-hand와 동일 원리).",
            "zero-shot 6D FoundationPose 모델을 배포 — CAD만 입력하면 신규 부품에도 부품별 학습 없이 포즈를 추정.",
            "RGB에서 공작물을 분할(segment)하고 마스크를 3D 점군으로 리프팅, global registration + ICP 정밀화로 최종 SE(3) 포즈를 확정하고 이를 기계 경로 보정에 반영.",
        ],
        result:
            "경직된 수동 워크플로를 자율 자기정렬 시스템으로 전환 — 임의로 놓인 부품을 실시간 인식·정렬하고 신규 생산에도 재학습 없이 즉시 적용. 비전 → 포즈 → 기계 제어의 완결형 루프를 실제 장비에서 검증했습니다.",
    },
    {
        n: "02",
        title: "실시간 멀티카메라 비전 + PLC·하드웨어 제어 연동",
        category: "실시간 시스템",
        image: "/images/architecture_defect.png",
        tags: ["Hardware-in-the-Loop", "6-Camera Sync", "PLC / GPIO", "<200ms", "Real-time", "Actuation"],
        relevance:
            "실시간 제어·연동, 멀티센서 융합, 산업 현장 배포 요구에 직접 대응 — 비전 인식 결과를 물리적 기계 동작(PLC·공압 밸브)으로 결정론적으로 연결한 hardware-in-the-loop 루프.",
        problem:
            "초당 5개의 고속 라인에서 부품 도착 감지 → 전방위 촬영 → AI 추론 → 물리적 액추에이션까지 200ms 미만에 처리해야 했습니다. 프레임 비동기나 소프트웨어 지연은 곧 불량품 배출 실패로 직결됩니다.",
        approach: [
            "포토센서 GPIO 트리거로 6대 Basler GigE 카메라를 하드웨어 동기화해 360° 사각지대 없는 멀티뷰를 촬영 (멀티센서 융합).",
            "산업용 PC(IPC)에서 경량 YOLO 추론을 6개 뷰에 동시 실행하고 Docker로 24/7 무중단 배포.",
            "NuDAQ 디지털 I/O로 Python 파이프라인과 PLC를 연결 — pass/fail 카운터를 유지하고 공압 밸브를 실시간 트리거해 불량품을 물리적으로 배출.",
        ],
        result:
            "총 지연 ~200ms로 초당 5개 라인을 프레임 드롭 없이 처리하는 결정론적 시스템을 구현 — 센서 입력 → AI → 기계 액추에이션까지 이어지는 완결형 실배포 솔루션.",
    },
    {
        n: "03",
        title: "레이저 스캔 점군 기반 6-DoF 포즈 추정 (C++)",
        category: "3D 계측·Pose",
        image: "/images/architecture_0d.png",
        tags: ["C++17", "ICP", "RANSAC", "6-DoF Pose", "PCL", "Eigen", "OpenMP"],
        relevance:
            "점군 기반 6-DoF 포즈·정합을 C++로 고성능 구현 — 로봇 제어에 필요한 포즈 추정·템플릿 매칭 역량이자, 위드포인츠의 3D 형상 측정 도메인과 직결됩니다.",
        problem:
            "레이저 스캔 점군에서 대상의 정밀 6-DoF 포즈(Tx, Ty, Rx, Ry)를 기준 프레임 대비 계산해야 하며, 센서 노이즈에 강건하면서도 사이클 타임을 지켜야 했습니다.",
        approach: [
            "coarse-to-fine 2단계 ICP로 거친 초기 오프셋에도 템플릿이 정확히 정렬되도록 구현하고, OpenMP로 다중 템플릿을 병렬 평가해 사이클 타임을 단축.",
            "동적 Z-banding과 복잡한 2D 형상(타원·폴리곤 링) 기반 ROI 추출로 두꺼운 브래킷 점군의 노이즈를 제거.",
            "sigma-clipping(RANSAC 계열) 강건 평면 피팅으로 ±40µm 임계 이상치를 반복 제거한 뒤 기준면 대비 상대 틸트 행렬을 계산.",
        ],
        result:
            "C++17·PCL·Eigen·OpenMP 기반으로 캐시·병렬 최적화된 계측 파이프라인을 구현 — 로봇·SLAM·센서 캘리브레이션에 그대로 전이 가능한 포즈·정합 코어를 확보했습니다.",
    },
    {
        n: "04",
        title: "인터랙티브 3D 정합 & 점군 ↔ CAD 메시 정렬 (역설계)",
        category: "3D 정합·역설계",
        image: "/images/architecture_0b.png",
        tags: ["Point Cloud", "Mesh (STL/OBJ)", "SVD Registration", "ICP", "VTK / PyVista", "SE(3)"],
        relevance:
            "원시 스캔을 CAD 메시에 정렬하는 정합·역설계 — 위드포인츠의 정밀 형상관리·역설계 솔루션 도메인과 정확히 일치합니다.",
        problem:
            "원시 점군 스캔(PLY/PCD)을 기준 CAD 메시(STL/OBJ)에 정렬하는 PolyWorks급 워크플로를 재현하고, 노이즈와 100만+ 포인트 데이터를 깔끔하게 처리해야 했습니다.",
        approach: [
            "분할 뷰(split-view) 랜드마크 선택 → 대응점 기반 SVD 강체 초기 정렬, point-to-plane / point-to-point ICP로 미세 정렬.",
            "인터랙티브 lasso 클리닝·멀티앵글 이상치 제거, 상용 계측 SW 호환 4×4 변환 행렬 export.",
            "파일명 패턴 기반 대규모 배치 자동 매칭 및 시각 검증.",
        ],
        result:
            "100만 포인트를 인터랙티브하게 처리하는 최적화 렌더링 파이프라인의 PolyWorks급 정렬 도구 — 스캔 ↔ CAD 정합 및 역설계에 직접 활용 가능합니다.",
    },
    {
        n: "05",
        title: "실시간 3D 점군 처리 & 기하 정합 프레임워크 (C++)",
        category: "실시간 시스템",
        image: "/images/architecture_0a.png",
        tags: ["C++", "PCL", "RANSAC", "Eigen", "Multi-thread", "Coordinate Frame"],
        relevance:
            "대규모 점군의 실시간 처리·강건 기하 피팅·자동 좌표계 추정 — 3D 계측 코어이자 로봇 인식·매핑에 전이 가능한 역량입니다.",
        problem:
            "고밀도 레이저 점군을 실시간으로 처리하면서 엄격한 제조 공차 대비 치수 분석을 정확히 수행해야 했습니다.",
        approach: [
            "RANSAC으로 Datum 평면·에지를 강건하게 피팅하고 Eigen으로 Roll/Pitch/Yaw를 보정해 가상 좌표계를 자동 수립.",
            "멀티스레드(CWinThread) 아키텍처로 좌표계 계산과 검사를 병렬화해 사이클 타임을 최소화.",
            "SOR·voxel 필터링으로 노이즈를 제거하고 동적 ROI로 처리 속도를 높이며, SQL Server 연동으로 스펙 대비 실시간 Pass/Fail 판정.",
        ],
        result:
            "C++·PCL·Eigen 기반 고속 3D 검사 프레임워크 — 대규모 점군을 실시간 처리하는 멀티스레드 정합·계측 파이프라인을 확보했습니다.",
    },
];

const NEED_MAP: { need: string; evidence: string }[] = [
    { need: "3D 비전(점군·Pose) 기반 로봇 제어 (우대)", evidence: "Eye-in-Hand 6-DoF Pose + 기계 동작 연동 (FoundationPose·ICP·SE(3))" },
    { need: "C++ 실시간 제어·연동", evidence: "C++17 3D 계측 파이프라인 (PCL·Eigen·OpenMP), 멀티스레드 실시간 처리" },
    { need: "6-DoF 로봇 암 연동 / Pose Estimation (우대)", evidence: "hand-eye 캘리브레이션(AX=XB), 6-DoF 포즈 추정, CAD 정합" },
    { need: "멀티센서 융합 / 실시간 시스템 최적화 (우대)", evidence: "6-카메라 하드웨어 동기화, RGB-D 융합, TensorRT 엣지 최적화" },
    { need: "산업 현장 배포·유지보수 (우대)", evidence: "공장 검사·CNC·건설 현장 실배포 (PLC/GPIO·Docker)" },
    { need: "3D 형상 측정·역설계 (회사 도메인)", evidence: "레이저 스캔 계측, 점군↔CAD 정합, RANSAC 좌표계 추정" },
    { need: "ROS / ROS2", evidence: "이론 숙지 · 로봇-비전 핵심 프리미티브 실무 경험 — 프레임워크는 단기 습득 (아래 참고)" },
    { need: "비정형 환경 문제해결 · 기술 리더십", evidence: "임의 포즈 공작물 대응, SW 아키텍처 설계, 6년+ 3D Vision 경력" },
];

export default function WithPointsPortfolio() {
    return (
        <main className="bg-[#070A12] min-h-screen text-white relative overflow-hidden">
            {/* 배경 그라디언트 (인쇄 시 숨김) */}
            <div className="fixed inset-0 pointer-events-none z-0 no-print">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px]" />
            </div>

            {/* 상단 컨트롤 (인쇄 시 숨김) */}
            <div className="no-print fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors glass-strong px-4 py-2 rounded-full border border-white/10"
                >
                    <ArrowLeft className="w-4 h-4" /> 사이트
                </Link>
                <button
                    onClick={() => printWithFilename("WithPoints", "Portfolio")}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 px-5 py-2 rounded-full shadow-lg shadow-emerald-500/20 transition-all"
                >
                    <Download className="w-4 h-4" /> PDF 다운로드
                </button>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-24 print:py-0">
                {/* ===== 헤더 ===== */}
                <header className="mb-12 print-section">
                    <p className="text-emerald-400 text-sm font-semibold tracking-wide uppercase mb-3">
                        포트폴리오 · 위드포인츠 (WENECT) — 로봇·비전 연동 SW 개발자 (책임급) 지원
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold font-sans mb-3">
                        Muhammad Tanseef Shahid<span className="text-emerald-400">.</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-5">
                        3D 비전 · 로봇 연동 · 실시간 3D 계측 — 6년+ 3D Vision 경력
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                        <a href="mailto:mtanseefshahid@gmail.com" className="inline-flex items-center gap-1.5 hover:text-emerald-300">
                            <Mail className="w-4 h-4" /> mtanseefshahid@gmail.com
                        </a>
                        <a href="https://tanseefshahid.github.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-300">
                            <Globe className="w-4 h-4" /> tanseefshahid.github.io
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-tanseef-shahid/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-emerald-300">
                            <Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid
                        </a>
                    </div>
                </header>

                {/* ===== 적합성 요약 ===== */}
                <section className="mb-12 glass-strong rounded-2xl p-6 md:p-8 print-section">
                    <h2 className="text-xl font-bold text-white mb-3">
                        <span className="gradient-text-vibrant">위드포인츠</span>와 어떻게 연결되는가
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        위드포인츠는 정밀 3D 형상 측정·분석(withPoints)과 로봇 자동화, 역설계 솔루션을 만듭니다.
                        저는 6년 이상 3D 비전 분야에서 <span className="text-emerald-300">점군 처리</span>,{" "}
                        <span className="text-emerald-300">정합(ICP·RANSAC·SVD)</span>,{" "}
                        <span className="text-emerald-300">6-DoF Pose Estimation</span>을 다뤄왔고, RGB-D 센서를 이동식
                        가공 헤드에 <span className="text-emerald-300">eye-in-hand로 연동해 실시간 포즈로 기계를 제어</span>한
                        경험이 있습니다. 3D 비전을 로봇 시스템과 연동하는 이 포지션의 방향성은 제 배경과 정확히
                        맞닿아 있습니다. 아래 프로젝트는 로봇·비전 연동 직무에 맞춰 선별했습니다.
                    </p>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {NEED_MAP.map((row) => (
                            <div key={row.need} className="flex flex-col border-l-2 border-emerald-500/40 pl-3">
                                <span className="text-sm font-semibold text-white">{row.need}</span>
                                <span className="text-xs text-gray-400">{row.evidence}</span>
                            </div>
                        ))}
                    </div>

                    {/* ROS 관련 정직한 안내 */}
                    <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-500/5 p-4">
                        <p className="text-sm text-amber-100/90 leading-relaxed">
                            <span className="font-semibold text-amber-300">참고 (ROS/ROS2): </span>
                            ROS/ROS2는 이론적으로 숙지하고 있으며 실무 적용 경험은 제한적입니다. 다만 로봇 연동의 핵심 —
                            hand-eye 캘리브레이션, SE(3) 포즈, 멀티센서 동기화, 실시간 인식→제어 루프 — 은 이미 실무로
                            다뤄왔기에, 프레임워크 자체는 동일한 3D 비전-로봇 연동 도메인에서 빠르게 습득 가능하다고 판단합니다.
                        </p>
                    </div>
                </section>

                {/* ===== 주요 프로젝트 ===== */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-8">
                        주요 프로젝트<span className="text-emerald-400">.</span>
                        <span className="block text-sm font-normal text-gray-400 mt-1">
                            로봇·비전 연동 직무 기준으로 각 프로젝트를 문제 → 접근 → 결과 흐름으로 정리했습니다.
                        </span>
                    </h2>

                    <div className="space-y-10">
                        {FEATURED.map((p) => (
                            <article
                                key={p.n}
                                className="glass-strong rounded-2xl overflow-hidden print-section pf-break"
                            >
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div>
                                            <span className="text-emerald-400/70 text-sm font-mono">{p.n}</span>
                                            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                                                {p.title}
                                            </h3>
                                        </div>
                                        <span className={`shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg border ${CATEGORY_STYLE[p.category]}`}>
                                            {p.category}
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {p.tags.map((t) => (
                                            <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-cyan-100 border border-white/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="rounded-xl overflow-hidden border border-white/10 mb-6 bg-slate-900/40">
                                        <img
                                            src={p.image}
                                            alt={p.title}
                                            className="w-full h-auto max-h-72 object-contain mx-auto pf-shot"
                                        />
                                    </div>

                                    <p className="text-sm text-emerald-200/90 italic mb-6">
                                        <span className="font-semibold not-italic text-emerald-300">연관성 → </span>
                                        {p.relevance}
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-400 mb-1">문제</h4>
                                            <p className="text-sm text-gray-300 leading-relaxed">{p.problem}</p>
                                        </div>
                                        {p.hypothesis && (
                                            <div>
                                                <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-400 mb-1">가설</h4>
                                                <p className="text-sm text-gray-300 leading-relaxed">{p.hypothesis}</p>
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-400 mb-1">{p.hypothesis ? "실행" : "접근"}</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                {p.approach.map((a, i) => (
                                                    <li key={i} className="text-sm text-gray-300 leading-relaxed">{a}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        {p.validation && (
                                            <div>
                                                <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-400 mb-1">검증</h4>
                                                <p className="text-sm text-gray-300 leading-relaxed">{p.validation}</p>
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-400 mb-1">결과</h4>
                                            <p className="text-sm text-gray-300 leading-relaxed">{p.result}</p>
                                        </div>
                                    </div>

                                    {p.output && p.output.length > 0 && (
                                        <div className="mt-6">
                                            <h4 className="text-xs font-bold uppercase tracking-wide text-emerald-400 mb-2">결과 이미지</h4>
                                            <div className="space-y-4">
                                                {p.output.map((o) => (
                                                    <figure key={o.src} className="rounded-xl overflow-hidden border border-white/10 bg-slate-900/40">
                                                        <img
                                                            src={o.src}
                                                            alt={o.caption}
                                                            className="w-full h-auto max-h-72 object-contain mx-auto pf-shot"
                                                        />
                                                        <figcaption className="text-xs text-gray-400 text-center py-2 px-3">
                                                            {o.caption}
                                                        </figcaption>
                                                    </figure>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* ===== 기타 관련 경험 ===== */}
                <section className="mt-12 glass-strong rounded-2xl p-6 md:p-8 print-section pf-break">
                    <h2 className="text-xl font-bold text-white mb-4">기타 관련 경험</h2>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>
                            <span className="font-semibold text-white">엣지 실시간 검출 & 공간 존 추적</span> —
                            NVIDIA Jetson·TensorRT 최적화, DeepSORT 추적, 폴리곤 ROI 침입 로직 (실시간 시스템 최적화·현장 배포).
                        </li>
                        <li>
                            <span className="font-semibold text-white">멀티객체 검출·OCR·추적 + 합성 데이터</span> —
                            YOLO·CRNN·DeepSORT 파이프라인, 절차적 합성 데이터로 실데이터 없이 99%+ 정확도.
                        </li>
                        <li>
                            <span className="font-semibold text-white">3D 재구성 & 생성형 AI</span> —
                            단일 이미지→3D 재구성(OpenLRM), Latent Diffusion 합성 — 폭넓은 3D+AI 스펙트럼.
                        </li>
                        <li>
                            <span className="font-semibold text-white">SLAM · 멀티뷰 비전</span> —
                            SLAM 엔지니어로서 멀티카메라 동기화·정합·포즈 추정 실무 (로봇 인식·매핑에 전이 가능).
                        </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-5">
                        기술 스택: C++17 · Python · PCL · Open3D · Eigen · OpenMP · PyTorch · TensorRT · Docker · Ubuntu · ROS/ROS2 (이론·학습 중)
                    </p>
                </section>

                <footer className="mt-12 pt-6 border-t border-white/5 text-center print-section">
                    <p className="text-gray-500 text-sm">Muhammad Tanseef Shahid · 위드포인츠 맞춤 포트폴리오</p>
                    <p className="text-gray-600 text-xs mt-1">mtanseefshahid@gmail.com · tanseefshahid.github.io</p>
                </footer>
            </div>
        </main>
    );
}
