---
title: 9- Action Recognition with Human Pose Estimation"
excerpt: |
  Contributed to a team project for monitoring abnormal actions at an airport using YOWO and human pose estimation models. The system successfully detected multiple abnormal actions, such as falling down and dashing, in real-time.

  ## Project Overview
  Developed an action recognition system for airport security to monitor and detect abnormal human behaviors using YOWO (You-Only-Watch-Once) and human pose estimation techniques. The system was optimized for real-time performance to ensure prompt alerts and responses.

  ## Objective
  To create a real-time action recognition system capable of identifying multiple abnormal actions (e.g., falling down, dashing) in crowded airport environments, enhancing security and safety measures.

  ## Process and Workflow

  ### Model Design and Implementation
  - **YOWO (You-Only-Watch-Once)**:
    - Implemented YOWO for video-based action recognition, leveraging its efficiency in spatiotemporal feature extraction.
    - Trained the model to recognize abnormal behaviors, focusing on falling and dashing actions.
  - **Human Pose Estimation**:
    - Integrated human pose estimation models to identify key body movements and postures.
    - Extracted pose keypoints and trajectories to validate action predictions and reduce false positives.

  ### Data Preparation
  - Collected and annotated a diverse dataset of video sequences with both normal and abnormal actions in airport scenarios.
  - Preprocessed video frames using OpenCV for augmentation and normalization:
    - Adjusted lighting, scaling, and rotation to simulate varied environments.
    - Labeled abnormal actions with detailed timestamps for training and evaluation.

  ### Model Training and Optimization
  - Fine-tuned YOWO on the annotated dataset to improve accuracy for detecting targeted actions.
  - Combined pose estimation results with YOWO predictions for robust recognition, especially in crowded or partially obscured environments.

  ## Deployment
  - Designed a pipeline to process live video feeds and generate real-time alerts for detected abnormal actions.
  - Integrated with airport security systems to provide actionable insights.

  ## Tools and Technologies
  - **Models**: YOWO, Human Pose Estimation 
  - **Programming**: Python
  - **Frameworks**: PyTorch, OpenCV
  - **Applications**: Airport Security, Abnormal Action Detection, Real-Time Surveillance

  ## Pose Estimation Output:
  ![Abnormal Action Recognition Example](/images/hpe.png)

collection: portfolio

---


---
title: 7- 인간 포즈 추정을 활용한 행동 인식 시스템"
excerpt: |
  공항 내 이상 행동 감지를 위한 YOWO 및 인간 포즈 추정 모델을 활용한 모니터링 시스템 개발에 기여하였습니다. 본 시스템은 넘어짐(falling down), 갑작스러운 질주(dashing) 등의 여러 이상 행동을 실시간으로 감지하는 데 성공하였습니다.

  ## 프로젝트 개요
  공항 보안 강화를 위해 YOWO(You-Only-Watch-Once) 및 인간 포즈 추정 기술을 활용한 실시간 행동 인식 시스템을 개발하였습니다. 이를 통해 이상 행동을 신속하게 탐지하고 경고를 제공하여 보안 조치를 즉각 수행할 수 있도록 하였습니다.

  ## 목표
  공항과 같이 혼잡한 환경에서 실시간으로 이상 행동(예: 넘어짐, 질주)을 인식할 수 있는 시스템을 구축하여 보안과 안전 조치를 강화하는 것이 목표입니다.

  ## 과정 및 워크플로우

  ### 모델 설계 및 구현
  - **YOWO (You-Only-Watch-Once) 기반 행동 인식**:
    - 영상 기반 행동 인식을 위해 YOWO 모델을 활용하여 시공간 특징(Spatiotemporal Features) 추출.
    - 넘어짐(falling), 질주(dashing) 등의 이상 행동 감지를 위해 모델을 학습.
  - **인간 포즈 추정(Human Pose Estimation) 적용**:
    - 신체 주요 포인트(Keypoints) 및 자세(Trajectories) 분석을 통해 행동을 감지.
    - 포즈 데이터와 YOWO 예측 결과를 결합하여 오탐(False Positives) 감소.

  ### 데이터 준비
  - 공항 내 정상 및 이상 행동이 포함된 다양한 비디오 데이터셋 수집 및 주석(annotation) 작업 수행.
  - OpenCV를 활용한 데이터 전처리 및 증강(Augmentation) 적용:
    - 조명, 크기 조정(Scaling), 회전(Rotation) 변형을 적용하여 다양한 환경을 시뮬레이션.
    - 이상 행동을 정확한 타임스탬프와 함께 라벨링하여 학습 데이터로 활용.

  ### 모델 학습 및 최적화
  - YOWO 모델을 이상 행동 감지에 최적화하여 높은 정확도 달성.
  - 포즈 추정 결과와 YOWO 예측을 결합하여 혼잡한 환경이나 부분적으로 가려진 경우에도 강건한 행동 인식 가능.

  ## 시스템 배포
  - 실시간 비디오 스트리밍을 처리하는 파이프라인을 설계하여 이상 행동 감지 시 즉각적인 경고를 생성.
  - 공항 보안 시스템과 통합하여 경고 데이터를 실시간으로 제공.

  ## 사용 기술
  - **모델**: YOWO, Human Pose Estimation 
  - **프로그래밍**: Python
  - **프레임워크**: PyTorch, OpenCV
  - **응용 분야**: 공항 보안, 이상 행동 탐지, 실시간 감시 시스템

  ## 포즈 추정 결과
  ![Abnormal Action Recognition Example](/images/hpe.png)

collection: portfolio

---
