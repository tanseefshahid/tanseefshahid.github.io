---
title: "6- 건설 현장에서의 개인 보호 장비(PPE) 감지 시스템"
lang: ko
slug: portfolio-08
collection: portfolio
permalink: /ko/portfolio/portfolio-08/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  YOLO 기반의 실시간 AI 시스템을 개발하여 건설 현장에서 개인 보호 장비(PPE) 착용 여부를 감지하고 작업자 위치를 추적하는 기능을 구현하였습니다. 해당 시스템은 안전모, 조끼, 신발 착용 여부를 확인하고, 위험 구역 진입 시 경고 알림을 제공합니다.
---

## 프로젝트 개요
건설 현장의 작업자들이 적절한 PPE를 착용하고 있는지 자동으로 감지하고, 실시간으로 위치를 추적하는 안전 모니터링 시스템을 개발하였습니다. 이를 통해 사고 위험을 줄이고, 위험 요소 발생 시 즉각적인 알림을 제공할 수 있습니다.

### PPE 감지
- **YOLO** 기반 객체 탐지 모델을 적용하여 다음을 감지:
  - **안전모 (Hardhat)**
  - **안전 조끼 (Safety Vest)**
  - **작업화 (Shoes)**
- 다양한 조명, 각도, 거리 조건에서 촬영된 데이터로 모델을 학습시켰습니다.

### 작업자 추적 및 위험 알림
- 추적 알고리즘을 통합하여 작업자의 위치를 지속적으로 모니터링했습니다.
- 위험 구역 진입 시 PPE 미착용 여부를 확인하고 경고를 발송하도록 시스템을 설계했습니다.

### 배포
- **NVIDIA Jetson 보드**에서 엣지 컴퓨팅으로 배포하여 실시간으로 동작하도록 최적화했습니다.

## 사용 기술
- **객체 탐지**: YOLO
- **프로그래밍**: Python
- **프레임워크**: OpenCV, TensorFlow/Keras
- **하드웨어**: NVIDIA Jetson Board

## 시각적 시연
![PPE Detection Example](/images/ppe.png)

collection: portfolio
