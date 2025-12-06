---
title: "8- 가스 보일러 텍스트 추출 및 배관 감지 시스템"
lang: ko
slug: portfolio-10
collection: portfolio
permalink: /ko/portfolio/portfolio-10/
excerpt: |
  가스 보일러의 명판(Boiler Plates)에서 텍스트를 추출하고 가스 배관을 감지하는 시스템을 개발하였습니다. Tesseract-OCR을 활용하여 보일러 명판의 중요한 정보를 인식하고, MobileNetSSD를 사용하여 가스 배관을 실시간으로 탐지하는 솔루션을 구축하였습니다.
---

## 프로젝트 개요
본 시스템은 가스 보일러의 안전 점검을 자동화하여 중요한 텍스트 정보 추출 및 배관 감지를 통해 잠재적인 위험 요소를 식별하고 예방하는 기능을 수행합니다.

## 과정 및 워크플로우

### 보일러 명판의 텍스트 추출
- **Tesseract-OCR**을 사용하여 보일러 명판에서 텍스트를 추출했습니다.
- OCR 인식 정확도를 향상시키기 위해 이미지 전처리(노이즈 제거, 명암 조정)를 적용했습니다.

### 가스 배관 감지
- MobileNetSSD 모델을 사용하여 가스 배관을 탐지했습니다.
- 다양한 조건에서 배관을 탐지할 수 있도록 커스텀 데이터셋으로 미세 조정했습니다.

### 시스템 배포
- 텍스트 추출 및 배관 감지 모듈을 통합한 자동화 파이프라인으로 구성했습니다.

## 사용 기술
- **텍스트 인식**: Tesseract-OCR
- **객체 탐지**: MobileNetSSD
- **프로그래밍**: Python
- **프레임워크 및 라이브러리**: OpenCV, TensorFlow

collection: portfolio
