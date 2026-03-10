---
title: "OpenLRM 및 뉴럴 렌더링 기반 단일 이미지 3D 복원 파이프라인"
lang: ko
slug: portfolio-04
collection: portfolio
permalink: /ko/portfolio/portfolio-04/
teaser: /images/architecture_3d.png
excerpt: |
  단일 2D 이미지에서 고충실도 3D 메시를 생성하는 고급 이미지-3D 생성 파이프라인을 설계·훈련했습니다. OpenLRM 프레임워크와 맞춤형 합성 렌더링 파이프라인을 활용하여 AR/VR, 가상 스테이징 및 게이밍 환경을 위한 실시간 3D 에셋 생성을 지원합니다.
---

## 프로젝트 개요

단일 2D 이미지에서 고충실도 3D 메시를 생성할 수 있는 고급 이미지-3D 생성 파이프라인을 설계·훈련했습니다. OpenLRM(Large Reconstruction Model) 프레임워크를 활용하며, 맞춤형 합성 렌더링 파이프라인의 지원을 받아 AR/VR, 가상 스테이징 및 게이밍 환경을 위한 실시간 3D 에셋 생성을 가능하게 합니다.

<div style="text-align: center;">
  <img src="/images/architecture_3d.png" alt="단일 이미지 3D 복원 아키텍처">
</div>

## 과제

단일 2D 이미지에서 정확한 3D 기하학을 추출하는 것은 심각한 깊이 모호성으로 인해 부적정 문제입니다. 기존 다중 뷰 픽셀 매칭 및 Occupancy Networks를 사용한 초기 반복은 깊이 해상도에서 어려움을 겪었습니다. 이후 NeRF 구현이 시각적 품질을 향상시켰지만, 장면당 계산 비용이 높은 최적화가 필요했습니다. 목표는 차원 정확도를 타협하지 않으면서 정확하고 텍스처가 있는 3D 토폴로지를 즉시 생성할 수 있는 빠른 피드포워드 네트워크를 구축하는 것이었습니다.

## 기술적 접근 방식 및 아키텍처

### 절차적 합성 데이터 생성
- **Blender(bpy 스크립팅)**를 사용하여 가구(테이블, 의자, 책장, 침대, 소파)의 대규모 CAD 데이터셋을 처리하는 자동화된 렌더링 파이프라인을 구축했습니다.
- 객체당 24개의 정밀한 360도 뷰를 추출하고, 카메라 회전, 초점 거리, 조명을 최적화하여 복잡한 표면 지형을 완벽하게 캡처했습니다.
- **ESRGAN**(향상된 초해상도 GAN)을 통합하여 렌더링된 이미지를 업스케일하고, 고주파 텍스처 디테일을 주입하여 훈련 중 3D 모델이 스무딩되거나 흐릿하게 나타나는 것을 방지했습니다.

### 모델 R&D 및 OpenLRM 미세 조정
- 암묵적 신경 표현(NeRF)에서 트랜스포머 기반 **OpenLRM** 아키텍처로 전환하여 빠른 피드포워드 3D 생성을 달성했습니다.
- 고해상도 합성 데이터셋에서 모델을 미세 조정하여 정확한 트라이플레인 표현을 예측하고 깨끗한 매니폴드 메시를 추출하도록 네트워크를 최적화했습니다.

### 계측 및 기하학적 평가
- 2D 시각적 충실도뿐만 아니라 표면 법선과 포인트 클라우드 편차에 초점을 맞추어 생성된 메시의 구조적 무결성을 기준 CAD 모델과 비교 측정하는 엄격한 평가 프로토콜을 수립했습니다.

## 시각적 데모

아래는 입력 이미지와 복원 모델이 생성한 3D 모델입니다:

<div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
  <div style="flex: 1;">
    <img src="/images/input_3D_image.png" alt="입력 2D 이미지" style="max-width: 100%; height: auto; max-height: 200px;">
  </div>
  <div style="flex: 1;">
    <iframe title="2a1d80a0aa67ee7585d33ad8f24c4885"
            frameborder="0"
            allowfullscreen
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/27745858326e41c39ebafe2e99133cff/embed"
            style="width: 100%; height: 200px;">
    </iframe>
  </div>
</div>

## 성과 및 결과
- **고정밀 기하학:** 복잡한 가구 토폴로지에서 뛰어난 계측 정확도를 달성하여 **IoU 0.80**, **Chamfer Distance 0.08**, **Normal Consistency 0.82**를 기록했습니다.
- **확장 가능한 3D 생산:** 계산 비용이 높은 NeRF 최적화를 피드포워드 트랜스포머 파이프라인으로 성공적으로 대체하여 추론 시간을 대폭 줄이고 공간 컴퓨팅 애플리케이션을 위한 실시간 에셋 생성을 가능하게 했습니다.

## 사용 기술
- **3D 딥러닝:** OpenLRM, NeRF, Occupancy Networks, 트라이플레인 표현
- **렌더링 및 증강:** Blender(bpy), Objaverse 기법, ESRGAN
- **언어 및 프레임워크:** Python, PyTorch, Py3D
