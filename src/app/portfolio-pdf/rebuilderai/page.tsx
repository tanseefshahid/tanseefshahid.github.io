"use client";

import { printWithFilename } from "@/lib/printWithFilename";
import { Download, ArrowLeft, Mail, Globe, Linkedin } from "lucide-react";
import Link from "next/link";

/**
 * 리빌더AI (VRING:ON) — AI 엔지니어 맞춤 포트폴리오 (국문).
 *
 * 로컬 개발 전용 (라우트 폴더는 gitignore, 배포 제외). 리빌더AI의
 * 2D→3D 생성 / 미분가능 렌더링 / NeRF / diffusion / 메시·CAD 스택과
 * 가장 연관성 높은 프로젝트를 선별했습니다. 각 프로젝트는 공고가 요구하는
 * 서술 구조(문제 정의 → 접근/실행 → 결과)를 따릅니다.
 * 버튼으로 PDF 저장 (파일명: Portfolio-Muhammad-Tanseef-Shahid-RebuilderAI).
 */

type Category = "3D 생성" | "생성형 AI" | "3D 비전" | "그래픽스";

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
    output?: { src: string; caption: string }[];
};

const CATEGORY_STYLE: Record<Category, string> = {
    "3D 생성": "bg-violet-500/20 text-violet-300 border-violet-400/30",
    "생성형 AI": "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/30",
    "3D 비전": "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    그래픽스: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
};

const FEATURED: Featured[] = [
    {
        n: "01",
        title: "단일 이미지 → 3D 메시 복원 (뉴럴 렌더링)",
        category: "3D 생성",
        image: "/images/architecture_3d.png",
        tags: ["OpenLRM", "NeRF", "PyTorch3D", "Triplane", "Blender (bpy)", "Mesh Extraction"],
        relevance:
            "리빌더AI의 핵심과 정확히 일치합니다 — 단일 2D 입력을 제조 가능한 3D 자산으로 변환하는 피드포워드 복원, 미분가능 멀티뷰 렌더링, 그리고 시각적 품질이 아닌 기하학적 정합성 검증.",
        problem:
            "단일 2D 이미지에서 3D 지오메트리를 복원하는 것은 깊이 모호성(depth ambiguity) 때문에 ill-posed 문제입니다. Occupancy Network는 깊이 해상도가 부족했고, NeRF는 품질은 개선했으나 장면마다 비용이 큰 최적화가 필요해 실시간 자산 생성에는 부적합했습니다.",
        approach: [
            "Blender(bpy)로 대규모 CAD 가구 데이터셋에 대한 절차적 합성 데이터 파이프라인을 구축 — 객체당 24 × 360° 뷰를 카메라 포즈·초점거리·조명을 최적화하여 렌더링.",
            "ESRGAN 초해상화로 고주파 텍스처를 주입하여 생성 메시가 뭉개져 보이지 않도록 처리.",
            "암시적(implicit) NeRF 표현에서 트랜스포머 기반 OpenLRM으로 전환하여 triplane 특징 예측 → 깨끗한 manifold 메시 추출.",
            "2D 시각 품질이 아니라 표면 법선(surface normal)·포인트 클라우드 편차 기준으로 ground-truth CAD와 비교 검증.",
        ],
        result:
            "복잡한 형상에서 IoU 0.80 · Chamfer Distance 0.08 · Normal Consistency 0.82 달성 — 무거운 NeRF 최적화를 실시간 피드포워드 트랜스포머 파이프라인으로 대체하여 프로덕션 자산 생성에 적합.",
        output: [
            { src: "/images/render.png", caption: "Blender 절차적 합성 · 멀티뷰 렌더링 (객체당 24 × 360°)" },
        ],
    },
    {
        n: "02",
        title: "Latent Diffusion 기반 사실적 이미지 합성 & 조건부 생성",
        category: "생성형 AI",
        image: "/images/architecture_vton.png",
        tags: ["Latent Diffusion", "LADi-VTON", "CLIP Textual Inversion", "DensePose", "Geometry-Aware"],
        relevance:
            "엄격한 정체성·기하 보존을 갖춘 확산(diffusion) 생성 경험 — SDXL / Trellis-3D 계열 파이프라인의 핵심 역량이며, 리빌더AI의 풋웨어·의류(ASICS 등) 파트너십과도 직결됩니다.",
        problem:
            "확산 모델은 원본 의류의 텍스처·로고·구조적 정체성을 임의로 변형(hallucinate)하는 경향이 있습니다. 목표는 새로운 체형·포즈에 맞춰 의류를 기하학적으로 워핑하면서도, 원본의 스타일과 원단 속성을 수학적으로 강제 보존하는 것이었습니다.",
        approach: [
            "멀티모달 전처리 스택 구성: 18-keypoint 포즈, DensePose UV(3D→2D 표면), SCHP 시맨틱 파싱.",
            "생성 이전에 2D 의류를 추정된 3D DensePose 좌표로 변형하는 공간 워핑 모듈 설계.",
            "의류 특징을 CLIP 토큰 임베딩 공간에 매핑(textual inversion)하여 확산 과정을 시각적 정체성에 조건화.",
            "EMASC skip connection을 추가해 VAE 병목을 우회하고 고주파 디테일(솔기·패턴·로고)을 디코더에 직접 주입.",
        ],
        result:
            "다양한 체형·포즈·난이도 높은 원단에서 상용 수준의 사실적 합성 달성, 미학습 실제 의류에도 강건하게 일반화 — Docker / Flask / AWS 기반 컨테이너 GPU 파이프라인으로 배포.",
        output: [
            { src: "/images/ladi-vton.png", caption: "가상 피팅 결과 — 상의·하의·원피스 합성 (LADi-VTON)" },
        ],
    },
    {
        n: "03",
        title: "Eye-in-Hand 6-DoF 포즈 추정 & CAD 정합",
        category: "3D 비전",
        image: "/images/architecture_cnc.png",
        tags: ["6-DoF Pose", "SE(3)", "FoundationPose", "Hand-Eye Calib (AX=XB)", "ICP", "RGB-D"],
        relevance:
            "3D 비전 / 멀티뷰 지오메트리: 카메라 모델, 포즈 추정, CAD-포인트클라우드 정합 — 파운데이션 모델 기반 zero-shot 방식으로 공고의 우대 경험과 일치합니다.",
        problem:
            "CNC 가공은 공구가 소재에 닿기 전 서브밀리미터 수준의 공간 정렬이 필요하며, 전통적으로는 느린 수동 지그 작업이 요구됩니다. 임의의 위치(X/Y/Z)·회전(Roll/Pitch/Yaw)으로 놓인 공작물을 실시간으로 CAD 모델에 정렬해야 했습니다.",
        approach: [
            "스핀들에 RGB-D 센서를 장착하고 hand-eye 캘리브레이션(고전적 AX=XB)을 풀어 카메라 좌표계 → 기계 기구학 좌표계를 매핑.",
            "zero-shot 6D FoundationPose 모델을 배포 — CAD만 입력하면 신규 부품에도 부품별 학습 없이 일반화.",
            "금속 베드에서 공작물을 분할(segment)하고 마스크를 3D 포인트 클라우드로 리프팅, global registration + ICP 정밀화로 최종 SE(3) 포즈 확정.",
        ],
        result:
            "경직된 수동 CNC 워크플로를 자율 자기정렬 시스템으로 전환 — 신규 생산에 데이터 수집·재학습 없이 즉시 zero-shot 배포.",
    },
    {
        n: "04",
        title: "인터랙티브 3D 정합 & 포인트 클라우드 ↔ 메시 정렬",
        category: "3D 비전",
        image: "/images/architecture_0b.png",
        tags: ["Point Cloud", "Mesh (STL/OBJ)", "SVD Registration", "ICP", "VTK / PyVista", "SE(3)"],
        relevance:
            "직무가 요구하는 핵심 3D 데이터 엔지니어링: 메시·포인트·카메라 전처리, 곡면 처리, 원시 스캔과 CAD 표면 간 gradient 기반 정밀 정합.",
        problem:
            "원시 포인트 클라우드 스캔(PLY/PCD)을 기준 CAD 메시(STL/OBJ)에 정렬 — PolyWorks 같은 상용 도구를 재현하며, 노이즈와 100만+ 포인트 데이터를 깔끔하게 처리해야 했습니다.",
        approach: [
            "분할 뷰(split-view) 랜드마크 선택 → 대응점 기반 SVD 강체 초기 정렬.",
            "point-to-plane / point-to-point ICP 정밀화로 미세 정렬.",
            "인터랙티브 lasso 클리닝, 멀티앵글 이상치 제거, 상용 계측 SW 호환 4×4 변환 행렬 export를 통한 배치 검증.",
        ],
        result:
            "100만 포인트 클라우드를 인터랙티브하게 처리하는 최적화 렌더링 파이프라인의 PolyWorks급 정렬 도구 — 스캔 간 정렬 및 곡면 모델 저작에 이식 가능.",
    },
    {
        n: "05",
        title: "노드 기반 파이프라인 저작이 가능한 모듈형 3D 렌더링 엔진",
        category: "그래픽스",
        image: "/images/architecture_0c.png",
        tags: ["Rendering Engine", "ECS", "DirectX 11", "Node Graph", "Plugin API", ".NET 8 / WPF"],
        relevance:
            "컴퓨터 그래픽스 & 렌더링 파이프라인 엔지니어링: 노드 기반 에디터를 갖춘 커스텀 실시간 렌더러 — 리빌더AI가 디자인→제조 미분가능 파이프라인을 구성하는 저작 모델과 동일한 방식입니다.",
        problem:
            "하드코딩된 3D 처리 파이프라인은 재컴파일 없이 새로운 형상에 대응할 수 없습니다. 사용자가 커스텀 파이프라인을 시각적으로 구성·재배선할 수 있어야 했습니다.",
        approach: [
            "고성능 및 데이터·로직 분리를 위한 순수 ECS(Entity-Component-System) 코어 구축.",
            "지오메트리·검사·처리 노드(RANSAC/PCA 피팅, ICP, 필터링)를 갖춘 드래그앤드롭 노드 에디터 설계.",
            "HelixToolkit / DirectX 11 기반 하드웨어 가속 시각화, INodePlugin DLL API를 통한 확장성 확보.",
        ],
        result:
            "재컴파일 없이 드래그앤드롭으로 커스텀 3D 파이프라인을 구성하는 플러그인 확장형 엔진 — 시뮬레이션·절차적 생성·3D 콘텐츠 저작에 적용 가능.",
    },
];

const NEED_MAP: { need: string; evidence: string }[] = [
    { need: "2D 입력 → 고품질 3D 자산 생성·복원", evidence: "단일 이미지→3D (OpenLRM/Triplane), Latent-Diffusion 합성" },
    { need: "Differentiable Rendering & 최적화", evidence: "Blender 멀티뷰 렌더 파이프라인, PyTorch3D, ICP/SVD gradient 정합" },
    { need: "3D 전처리 (메시·포인트·카메라) / 멀티뷰 재구성", evidence: "포인트클라우드↔메시 정합, hand-eye 카메라 캘리브레이션, 24뷰 합성 캡처" },
    { need: "3D Vision / MVG — 카메라·포즈·NeRF", evidence: "6-DoF FoundationPose + ICP, NeRF→피드포워드 복원" },
    { need: "생성 모델 (Diffusion / SDXL·Trellis-3D)", evidence: "LADi-VTON latent diffusion, CLIP textual inversion, EMASC 조건화" },
    { need: "Computer Graphics / 커스텀 렌더러", evidence: "ECS + 노드 기반 DirectX 11 렌더링 엔진" },
    { need: "3D 도메인 (Mesh / CAD / 곡면)", evidence: "CAD-포인트클라우드 정합, STL/OBJ 메시 정렬, 기하 계측" },
    { need: "성능 최적화 (CUDA / TensorRT) · 서빙", evidence: "TensorRT 엣지 추론, AWS Docker GPU 서빙" },
];

export default function RebuilderAIPortfolio() {
    return (
        <main className="bg-[#070A12] min-h-screen text-white relative overflow-hidden">
            {/* 배경 그라디언트 (인쇄 시 숨김) */}
            <div className="fixed inset-0 pointer-events-none z-0 no-print">
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[150px]" />
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
                    onClick={() => printWithFilename("RebuilderAI", "Portfolio")}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 px-5 py-2 rounded-full shadow-lg shadow-cyan-500/20 transition-all"
                >
                    <Download className="w-4 h-4" /> PDF 다운로드
                </button>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-24 print:py-0">
                {/* ===== 헤더 ===== */}
                <header className="mb-12 print-section">
                    <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-3">
                        포트폴리오 · 리빌더AI (VRING:ON) — AI 엔지니어 지원
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold font-sans mb-3">
                        Muhammad Tanseef Shahid<span className="text-cyan-400">.</span>
                    </h1>
                    <p className="text-lg text-gray-300 mb-5">
                        3D 계측 &amp; AI 엔지니어 — 2D→3D 생성, 미분가능 렌더링, 멀티뷰 지오메트리
                    </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400">
                        <a href="mailto:mtanseefshahid@gmail.com" className="inline-flex items-center gap-1.5 hover:text-cyan-300">
                            <Mail className="w-4 h-4" /> mtanseefshahid@gmail.com
                        </a>
                        <a href="https://tanseefshahid.github.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan-300">
                            <Globe className="w-4 h-4" /> tanseefshahid.github.io
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-tanseef-shahid/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan-300">
                            <Linkedin className="w-4 h-4" /> linkedin.com/in/muhammad-tanseef-shahid
                        </a>
                    </div>
                </header>

                {/* ===== 적합성 요약 ===== */}
                <section className="mb-12 glass-strong rounded-2xl p-6 md:p-8 print-section">
                    <h2 className="text-xl font-bold text-white mb-3">
                        <span className="gradient-text-vibrant">리빌더AI</span>와 어떻게 연결되는가
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        리빌더AI는 한 장의 스케치나 이미지를 제조 가능한 3D CAD로 변환하여 디자인과 제조 사이의 벽을
                        허뭅니다. 제 경험은 바로 그 접점에 있습니다:{" "}
                        <span className="text-cyan-300">단일 이미지→3D 복원</span> 파이프라인(OpenLRM / triplane /
                        PyTorch3D), <span className="text-cyan-300">기하 보존형 latent-diffusion 생성</span>,{" "}
                        <span className="text-cyan-300">6-DoF 포즈 &amp; CAD 정합</span>, 그리고{" "}
                        <span className="text-cyan-300">커스텀 노드 기반 3D 렌더링 엔진</span>. 아래 프로젝트는 AI
                        엔지니어 직무에 맞춰 선별·정리했습니다.
                    </p>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                        {NEED_MAP.map((row) => (
                            <div key={row.need} className="flex flex-col border-l-2 border-cyan-500/40 pl-3">
                                <span className="text-sm font-semibold text-white">{row.need}</span>
                                <span className="text-xs text-gray-400">{row.evidence}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 주요 프로젝트 ===== */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-8">
                        주요 프로젝트<span className="text-cyan-400">.</span>
                        <span className="block text-sm font-normal text-gray-400 mt-1">
                            채용 공고의 포트폴리오 가이드에 따라 문제 → 접근 → 결과 흐름으로 정리했습니다.
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
                                            <span className="text-cyan-400/70 text-sm font-mono">{p.n}</span>
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

                                    <p className="text-sm text-violet-200/90 italic mb-6">
                                        <span className="font-semibold not-italic text-violet-300">연관성 → </span>
                                        {p.relevance}
                                    </p>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wide text-cyan-400 mb-1">문제</h4>
                                            <p className="text-sm text-gray-300 leading-relaxed">{p.problem}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wide text-cyan-400 mb-1">접근</h4>
                                            <ul className="list-disc pl-5 space-y-1">
                                                {p.approach.map((a, i) => (
                                                    <li key={i} className="text-sm text-gray-300 leading-relaxed">{a}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wide text-cyan-400 mb-1">결과</h4>
                                            <p className="text-sm text-gray-300 leading-relaxed">{p.result}</p>
                                        </div>
                                    </div>

                                    {p.output && p.output.length > 0 && (
                                        <div className="mt-6">
                                            <h4 className="text-xs font-bold uppercase tracking-wide text-cyan-400 mb-2">결과 이미지</h4>
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
                            <span className="font-semibold text-white">실시간 3D 포인트 클라우드 처리 &amp; 기하 정합</span> —
                            C++/PCL/Eigen, RANSAC 프리미티브 피팅, 대규모 스캔의 자동 좌표계 추정.
                        </li>
                        <li>
                            <span className="font-semibold text-white">고정밀 시맨틱 분할 &amp; 알파 매팅</span> —
                            픽셀 단위 전경 추출을 위한 U²Net 파인튜닝 (2D→3D 파이프라인 전처리).
                        </li>
                        <li>
                            <span className="font-semibold text-white">절차적 합성 데이터 생성</span> —
                            프로그래매틱 homography·가림·조명 모델링으로 실데이터 없이 99%+ 다운스트림 정확도 견인.
                        </li>
                        <li>
                            <span className="font-semibold text-white">엣지 추론 &amp; 최적화</span> —
                            NVIDIA Jetson TensorRT, 실시간 저지연 배포를 위한 Docker GPU 서빙.
                        </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-5">
                        기술 스택: Python · PyTorch · PyTorch3D · Open3D / PCL · Blender (bpy) · CUDA / TensorRT · Docker · Ubuntu
                    </p>
                </section>

                <footer className="mt-12 pt-6 border-t border-white/5 text-center print-section">
                    <p className="text-gray-500 text-sm">Muhammad Tanseef Shahid · 리빌더AI 맞춤 포트폴리오</p>
                    <p className="text-gray-600 text-xs mt-1">mtanseefshahid@gmail.com · tanseefshahid.github.io</p>
                </footer>
            </div>
        </main>
    );
}
