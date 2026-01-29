---
title: "7- 인간 포즈 추정을 활용한 행동 인식 시스템"
lang: ko
slug: portfolio-09
collection: portfolio
permalink: /ko/portfolio/portfolio-09/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  공항 내 이상 행동 감지를 위한 YOWO 및 인간 포즈 추정 모델을 활용한 모니터링 시스템 개발에 기여하였습니다. 본 시스템은 넘어짐(falling down), 갑작스러운 질주(dashing) 등의 여러 이상 행동을 실시간으로 감지하는 데 성공하였습니다.
---

## 프로젝트 개요
공항 보안 강화를 위해 YOWO(You-Only-Watch-Once) 및 인간 포즈 추정 기술을 활용한 실시간 행동 인식 시스템을 개발하였습니다. 이를 통해 이상 행동을 신속하게 탐지하고 경고를 제공하여 보안 조치를 즉각 수행할 수 있도록 하였습니다.

## 목표
공항과 같이 혼잡한 환경에서 실시간으로 이상 행동(예: 넘어짐, 질주)을 인식할 수 있는 시스템을 구축하여 보안과 안전 조치를 강화하는 것이 목표입니다.

## 과정 및 워크플로우

### 모델 설계 및 구현
- **YOWO (You-Only-Watch-Once)** 기반 행동 인식을 적용했습니다.
- **인간 포즈 추정**을 결합하여 신체 주요 포인트와 궤적을 분석했습니다.

### 데이터 준비
- 다양한 공항 시나리오의 비디오를 수집 및 주석 처리했습니다.
- OpenCV로 프레임 전처리와 증강을 수행했습니다.

### 모델 학습 및 최적화
- YOWO를 미세 조정하고 포즈 추정 결과를 결합하여 정확도를 향상시켰습니다.

## 배포
- 실시간 비디오 스트림을 처리하여 이상 행동이 감지되면 즉시 경고를 생성하도록 파이프라인을 설계했습니다.

## 사용 기술
- **모델**: YOWO, Human Pose Estimation
- **프로그래밍**: Python
- **프레임워크**: PyTorch, OpenCV

## 포즈 추정 결과
![Abnormal Action Recognition Example](/images/hpe.png)

collection: portfolio
