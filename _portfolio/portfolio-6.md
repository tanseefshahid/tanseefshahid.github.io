---
title: "6- 건설 현장에서의 개인 보호 장비(PPE) 감지 시스템"
excerpt: |
  YOLO 기반의 실시간 AI 시스템을 개발하여 건설 현장에서 개인 보호 장비(PPE) 착용 여부를 감지하고 작업자 위치를 추적하는 기능을 구현하였습니다. 해당 시스템은 안전모, 조끼, 신발 착용 여부를 확인하고, 위험 구역 진입 시 경고 알림을 제공합니다. 또한, NVIDIA Jetson 보드에서 엣지 컴퓨팅을 활용하여 실시간으로 동작하도록 배포되었습니다.

  ## 프로젝트 개요
  건설 현장의 작업자들이 적절한 PPE를 착용하고 있는지 자동으로 감지하고, 실시간으로 위치를 추적하는 안전 모니터링 시스템을 개발하였습니다. 이를 통해 사고 위험을 줄이고, 위험 요소 발생 시 즉각적인 알림을 제공할 수 있습니다.

  ## 과정 및 워크플로우

  ### PPE 감지
  - **YOLO** 기반 객체 탐지(Object Detection) 모델을 적용하여 다음을 감지:
    - **안전모 (Hardhat)**
    - **안전 조끼 (Safety Vest)**
    - **작업화 (Shoes)**
  - 다양한 조명, 각도, 거리 조건에서 촬영된 건설 현장 이미지 데이터셋을 활용하여 모델을 학습.
  - 혼잡한 환경에서도 높은 정확도로 PPE 착용 여부 감지 성공.

  ### 작업자 추적 및 위험 감지 알림
  - **추적 알고리즘(Tracking Algorithm)**을 적용하여 작업자의 위치를 지속적으로 모니터링.
  - 위험 구역 감지 시스템을 도입하여:
    - 작업자가 위험 지역에 접근하는 경우 감지.
    - PPE 미착용 상태로 위험 구역 진입 시 경고 알림을 발송.
  - 실시간 영상 스트리밍을 분석하여 즉각적인 안전 조치 가능.

  ### 시스템 배포
  - **NVIDIA Jetson 보드를** 활용하여 엣지 컴퓨팅(Edge Computing) 기반의 실시간 감지 및 추적 기능 구현.
  - 지연 시간을 최소화하고 대규모 건설 현장에서도 확장 가능하도록 시스템 최적화.

  ## 사용 기술
  - **객체 탐지(Object Detection)**: YOLO
  - **프로그래밍**: Python
  - **프레임워크**: OpenCV, TensorFlow/Keras
  - **하드웨어**: NVIDIA Jetson Board
  - **응용 분야**: 건설 현장 안전 관리, 실시간 작업자 추적

  ## 시각적 시연
  ![PPE Detection Example](/images/ppe.png)

collection: portfolio
---


---
title: "6- Personal Protective Equipment (PPE) Detection on Construction Sites"
excerpt: |
  Developed a real-time AI system using YOLO to detect PPE components (hardhat, vest) and track worker locations on construction sites. The system identifies safety compliance and alerts when workers enter dangerous zones, deployed on an NVIDIA Jetson board for edge computing.

  ## Project Overview
  Created a safety monitoring system for construction sites to ensure proper use of Personal Protective Equipment (PPE) and track workers in real-time. The system reduces accident risks by automating safety checks and notifying workers or supervisors about potential hazards.

  ## Process and Workflow

  ### PPE Detection
  - Implemented **YOLO** for object detection to identify:
    - **Hardhats**
    - **Safety Vests**
    - **shoes**
  - Trained the model on a custom dataset of construction worker images under diverse conditions (e.g., lighting, angles, and distances).
  - Achieved high precision in detecting PPE components, even in crowded environments.

  ### Worker Tracking and Hazard Notifications
  - Integrated a tracking algorithm to monitor worker locations over time.
  - Designed a zone monitoring system to:
    - Identify hazardous areas.
    - Notify workers or supervisors if someone enters a dangerous zone without proper PPE.
  - Processed video streams in real-time to ensure prompt alerts.

  ### Deployment
  - Deployed the system on an **NVIDIA Jetson board**, enabling efficient edge computing for real-time detection and tracking.
  - Optimized the pipeline for low latency and scalability, ensuring reliable performance in dynamic construction environments.

  ## Tools and Technologies
  - **Object Detection**: YOLO
  - **Programming**: Python
  - **Frameworks**: OpenCV, TensorFlow/Keras
  - **Hardware**: NVIDIA Jetson Board
  - **Applications**: Construction Safety, Real-Time Tracking

  ## Visual Demonstration
  ![PPE Detection Example](/images/ppe.png)

collection: portfolio