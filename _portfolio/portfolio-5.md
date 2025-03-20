---
title: "5- Automatic License Plate Recognition and Tracking System for Gas Stations"
excerpt: |
  Designed and implemented a real-time AI system to capture, recognize, and track license plates of vehicles across fueling machines. Leveraged YOLO for detection, OCR for text recognition, and DeepSORT for tracking unique vehicle IDs, supported by synthetic datasets for robust performance in diverse conditions.

  ## Project Overview

  Developed a real-time Automatic License Plate Recognition (ALPR) system to monitor, identify, and track vehicles at gas stations. The system captures license plates from live video feeds, rectifies distortions, and recognizes text for automated vehicle identification and monitoring while maintaining unique IDs for each vehicle entering and exiting the premises.


  ## Process and Workflow

  ### License Plate Detection

  - Used **YOLO** for detecting license plates in images and video streams.
  - Optimized the model for multi-license plate detection in a single frame, addressing:
    - Varied lighting conditions.
    - Plate distortions and angles.
    - Diverse license plate formats.

  ### Vehicle Tracking

  - Integrated **DeepSORT** for robust vehicle tracking, ensuring each car is assigned a unique ID for:
    - Monitoring entry and exit across fueling stations.
    - Automating tracking and logging for operational efficiency.

  ### Data Preparation

  - Created and utilized **synthetic datasets** of license plates, simulating variations in:
    - Plate types (e.g., sizes, fonts, and formats).
    - Environmental factors (e.g., lighting, motion blur, and occlusions).
  - Augmented data with transformations like rotation, scaling, and cropping to improve model robustness.

  ### Model Training and Optimization

  - Fine-tuned YOLO for license plate detection, achieving high precision and recall.
  - Validated OCR outputs with post-processing to ensure consistent and formatted results.

  ### Deployment

  - Deployed the system for real-time operation, processing live video feeds from gas station cameras.
  - Designed the pipeline to handle multiple fueling stations simultaneously, automating vehicle identification, tracking, and logging.

 

  ## Key Achievements

    - Automated detection, recognition, and tracking of license plates and vehicles, significantly improving monitoring efficiency.
    - Developed robust models capable of handling diverse and challenging conditions.
    - Scaled the system to process live feeds across multiple fueling stations in real-time.



  ## Tools and Technologies

    - **Object Detection:** YOLO, Keras
    - **Vehicle Tracking:** DeepSORT
    - **Programming:** Python
    - **Frameworks:** PyTorch, OpenCV
    - **Applications:** Gas Station Monitoring, Vehicle Tracking, Automation

  ## Visual Demonstration
  ![License Plate Recognition Example](/images/alpr.png)

collection: portfolio

---

---
title: "5- 주유소용 차량 번호판 인식 및 추적 시스템"
excerpt: |
  실시간으로 차량의 번호판을 감지, 인식, 추적하는 AI 시스템을 설계하고 구현하였습니다. YOLO를 사용한 번호판 탐지, OCR을 활용한 문자 인식, DeepSORT 기반 차량 ID 추적으로 각 차량을 식별 및 모니터링하며, 다양한 환경에서도 강인한 성능을 발휘할 수 있도록 **합성 데이터셋(Synthetic Datasets)**을 활용하여 학습을 최적화하였습니다.

  ## 프로젝트 개요

  실시간 자동 차량 번호판 인식(ALPR, Automatic License Plate Recognition) 시스템을 개발하여 주유소 내 차량 모니터링, 식별 및 추적을 자동화하였습니다.
  이 시스템은 라이브 비디오 스트림에서 차량 번호판을 캡처하고, 왜곡을 보정한 후 텍스트를 인식하여 출입 차량을 추적하고 기록하는 기능을 수행합니다.


  ## 과정 및 워크플로우

  ### 번호판 감지

  - **YOLO를** 사용하여 이미지 및 영상에서 번호판을 탐지.
  - 다중 번호판 탐지를 최적화하여 한 프레임 내 여러 차량의 번호판을 감지.
  - 다양한 환경을 고려한 개선:
    - 조명 조건 변화 대응
    - 번호판 왜곡 및 각도 보정
    - 다양한 국가별 번호판 형식 지원

  ### 차량 추적

  - **DeepSORT를** 활용하여 차량을 고유 ID로 추적.
  - 차량의 입출차 기록을 자동화하여 운영 효율성을 극대화.

  ### 데이터 준비

  - **합성 데이터셋(Synthetic Datasets)**을 생성하여 다음과 같은 변수를 반영:
    - 번호판 종류 (사이즈, 글꼴, 형식)
    - 환경적 요인 (조명, 모션 블러, 가림 현상)
  - 모델의 일반화를 높이기 위해 회전, 크기 조정, 크롭핑 등 데이터 증강 기법 적용.

  ### 모델 학습 및 최적화

  - YOLO 모델을 미세 조정(Fine-tuning) 하여 높은 **정확도(Precision)와 재현율(Recall)**을 달성.
  - OCR 결과를 후처리(Post-processing)하여 일관된 포맷과 정제된 인식 결과를 보장.

  ### 배포 및 실시간 운영

  - 주유소 카메라에서 실시간 영상 스트림을 처리하도록 시스템 배포.
  - 다수의 주유 기계를 동시에 관리하여 차량 식별, 추적, 로그 기록을 자동화.

 
  ## 주요 성과

    - 번호판 및 차량 자동 탐지, 인식, 추적을 통해 주유소 운영 효율을 크게 향상.
    - 다양한 조명 및 환경 변화에서도 강인한 모델 성능 달성.
    - 실시간 영상 피드를 활용한 다중 주유소 모니터링 시스템으로 확장 가능.

  ## 사용 기술

    - **객체 탐지(Object Detection):** YOLO, Keras
    - **차량 추적(Vehicle Tracking):** DeepSORT
    - **프로그래밍:** Python
    - **프레임워크:** PyTorch, OpenCV
    - **응용 분야:** 주유소 모니터링, 차량 추적, 자동화

  ## 시각적 시연
  ![License Plate Recognition Example](/images/alpr.png)

collection: portfolio

---

