---
title: "2- Open LRM을 활용한 이미지-3D 재구성"
lang: ko
slug: portfolio-04
collection: portfolio
permalink: /ko/portfolio/portfolio-04/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Open LRM을 사용하여 강력한 이미지-3D 재구성 파이프라인을 개발하였으며, 고급 데이터 렌더링 기법, ESRGAN을 활용한 이미지 해상도 향상, 그리고 현실적인 3D 객체 재구성을 위한 모델 훈련을 포함하였습니다.
---

## 프로젝트 개요
Open LRM을 활용하여 2D 이미지로부터 고품질 3D 모델을 생성하는 파이프라인을 설계하고 구현하였습니다. 이 솔루션은 맞춤형 데이터 준비, 사실적인 렌더링, 그리고 고급 훈련 기법을 포함합니다.

## 과정 및 워크플로우

### 훈련을 위한 데이터 렌더링
- Objaverse GitHub 기법을 활용하여 3D 객체를 렌더링하였습니다.
- 렌더링된 이미지의 사실감을 향상시키기 위해:
  - **카메라 회전 (Camera Rotations)**: 다양한 시점을 캡처할 수 있도록 적절한 각도를 적용.
  - **카메라 거리 (Camera Distance)**: 객체의 세부 사항을 강조할 수 있도록 최적의 위치 설정.
  - **조명 조정 (Lighting Adjustments)**: 실제와 유사한 조명 환경을 구현하여 이미지 품질 향상.
- ESRGAN을 적용하여 렌더링된 이미지를 업스케일하고 세부 표현을 개선하여 훈련 품질을 높였습니다.

아래는 훈련에 사용된 3D 모델과 360도 렌더링 이미지입니다:

<div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
  <div style="flex: 1;">
    <iframe title="2b1af04045c8c823f51f77a6d7299806" frameborder="0" allowfullscreen src="https://sketchfab.com/models/c00cd46903164e43ab18fb07f194bbf0/embed" style="width: 100%; height: 200px;"></iframe>
  </div>
  <div style="flex: 1;">
    <img src="/images/render.png" alt="Description of image" style="max-width: 100%; height: auto; max-height: 200px;">
  </div>
</div>

### 모델 훈련
- 준비된 데이터셋을 활용하여 Open LRM을 훈련하여 이미지-3D 재구성을 수행하였습니다.
- 테이블, 의자, 책장, 침대, 소파의 5가지 주요 객체 카테고리에 초점을 맞추었습니다.
- 3D 재구성 정확도 및 사실감을 향상시키기 위해 고급 기법을 적용하였습니다.

## 이미지-3D 재구성 결과:
아래는 입력 이미지와 재구성 모델이 생성한 3D 모델입니다.

<div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
  <div style="flex: 1;">
    <img src="/images/input_3D_image.png" alt="Description of image" style="max-width: 100%; height: auto; max-height: 200px;">
  </div>
  <div style="flex: 1;">
    <iframe title="2a1d80a0aa67ee7585d33ad8f24c4885" frameborder="0" allowfullscreen src="https://sketchfab.com/models/27745858326e41c39ebafe2e99133cff/embed" style="width: 100%; height: 200px;"></iframe>
  </div>
</div>

### 주요 개선 사항
- 가구 및 실내 물체의 3D 재구성 사실감 및 세부 표현을 크게 향상시켰습니다.
- 성능 지표에서 뛰어난 결과를 달성하였습니다:
  - **IoU**: 0.80
  - **Chamfer Distance**: 0.08
  - **Normal Consistency**: 0.82
- 훈련 워크플로우를 최적화하여 확장성과 품질을 향상시켰습니다.

### 배포
- AR/VR 애플리케이션, 가상 스테이징, 게임 디자인에서 실시간 3D 모델 생성을 가능하게 하였습니다.

## 사용 기술
- **렌더링 도구**: Objaverse GitHub, Blender (bpy 스크립팅)
- **해상도 향상**: ESRGAN
- **훈련 프레임워크**: Open LRM, PyTorch
- **프로그래밍**: Python
- **3D 애플리케이션**: AR/VR, CAD, Gaming

collection: portfolio
