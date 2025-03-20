---
title: "8- 가스 보일러 텍스트 추출 및 배관 감지 시스템"
excerpt: |
  가스 보일러의 명판(Boiler Plates)에서 텍스트를 추출하고 가스 배관을 감지하는 시스템을 개발하였습니다. Tesseract-OCR을 활용하여 보일러 명판의 중요한 정보를 인식하고, MobileNetSSD를 사용하여 가스 배관을 실시간으로 탐지하는 솔루션을 구축하였습니다.

  ## 프로젝트 개요
  본 시스템은 가스 보일러의 안전 점검을 자동화하여 중요한 텍스트 정보 추출 및 배관 감지를 통해 잠재적인 위험 요소를 식별하고 예방하는 기능을 수행합니다.

  ## 과정 및 워크플로우

  ### 보일러 명판의 텍스트 추출
  - **Tesseract-OCR을** 사용하여 보일러 명판에서 텍스트를 추출.
  - OCR 인식 정확도를 향상시키기 위해 이미지 전처리 적용:
    - **노이즈 제거**: 불필요한 배경 및 잡음 제거.
    - **명암 대비 조정**: 텍스트 가독성을 향상시켜 OCR 성능 개선.
  - 추출된 텍스트를 검증 및 형식화하여 안전 점검 시 신뢰할 수 있도록 처리.

  ### 가스 배관 감지
  - MobileNetSSD 모델을 사용하여 가스 배관을 감지.
  - 다양한 환경에서 배관을 탐지할 수 있도록 커스텀 데이터셋을 활용하여 모델을 세밀하게 튜닝.
  - 실시간 감지를 지원하기 위해 탐지 파이프라인을 최적화하여 높은 처리 속도를 유지.

  ### 시스템 배포
  - 텍스트 추출 및 배관 감지 모듈을 통합된 자동화 파이프라인으로 구성.
  - 실시간 카메라 스트리밍 및 사전 녹화된 이미지를 처리할 수 있도록 유연한 배포 옵션 제공.

  ## 사용 기술
  - **텍스트 인식**: Tesseract-OCR
  - **객체 탐지**: MobileNetSSD
  - **프로그래밍**: Python
  - **프레임워크 및 라이브러리**: OpenCV, TensorFlow
  - **응용 분야**: 가스 보일러 안전 점검, 검사 자동화

collection: portfolio
---


---
title: "8- Gas Boilers Text Extraction and Pipe Detection"
excerpt: |
  Developed a system for extracting text from boiler plates and detecting gas pipes for safety monitoring. The solution utilized Tesseract-OCR for text recognition and MobileNetSSD for real-time pipe detection.

  ## Project Overview
  Designed and implemented a safety monitoring system for gas boilers to extract critical text information from boiler plates and detect gas pipes. The system enhances safety by automating inspections and identifying potential hazards.

  ## Process and Workflow

  ### Text Extraction from Boiler Plates
  - Used **Tesseract-OCR** to extract text from images of boiler plates.
  - Preprocessed images to improve OCR accuracy:
    - **Noise Reduction**: Removed unwanted artifacts.
    - **Contrast Adjustment**: Enhanced text visibility for better recognition.
  - Validated and formatted extracted text to ensure reliability and usability for inspections.

  ### Gas Pipe Detection
  - Implemented **MobileNetSSD** for detecting gas pipes in images.
  - Fine-tuned the model on a custom dataset of gas pipes under diverse conditions.
  - Optimized the detection pipeline for real-time performance to support immediate safety checks.

  ### Deployment
  - Integrated the text extraction and pipe detection modules into a single automated pipeline.
  - Designed the system to process live camera feeds or pre-recorded images for flexible deployment in different environments.

  ## Tools and Technologies
  - **Text Recognition**: Tesseract-OCR
  - **Object Detection**: MobileNetSSD
  - **Programming**: Python
  - **Frameworks and Libraries**: OpenCV, TensorFlow
  - **Applications**: Gas Boiler Safety, Inspection Automation

collection: portfolio
---
