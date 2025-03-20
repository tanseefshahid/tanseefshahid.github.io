---
title: "3- U2Net을 활용한 의류 분할 및 배경 제거"
excerpt: |
  U2Net을 정밀 튜닝하여 의류의 정확한 분할을 수행하고, 배경 제거 및 의류 부위(상의, 하의, 원피스) 식별을 최적화하였습니다. 이 프로젝트는 가상 피팅 및 패션 시각화를 위한 의류 이미지 전처리에 초점을 맞추고 있습니다.

  ## 프로젝트 개요
  배경 제거와 의류 부위 분할을 단일 파이프라인으로 통합한 강력한 솔루션을 개발하였습니다. 이를 통해 AI 기반 패션 및 전자상거래 애플리케이션에서 고품질 의류 전처리를 지원합니다.

  ## 목표
  고정밀 분할을 통해 의류를 배경에서 효과적으로 분리하고, 이를 상의, 하의, 원피스로 분류하는 통합 파이프라인을 구축하는 것이 목표입니다.

  ## 과정 및 워크플로우

  ### 배경 제거
  - U2Net을 세밀하게 조정하여 의류 이미지의 배경을 제거하고, 깨끗하고 선명한 시각적 데이터를 생성.
  - 다양한 배경을 포함한 의류 이미지 데이터셋을 활용하여 모델 학습 진행.
  - 노이즈와 아티팩트를 최소화하여 고품질의 세분화 마스크를 생성.

  ### 배경 제거 모델 결과:

  <div style="text-align: center;">
    <img src="/images/background_rm.jpg" alt="cloth seg">
  </div>

  ### 의류 부위 분할
  - U2Net을 확장하여 의류를 세 가지 주요 카테고리로 분할:
    - **상의(Top):** 셔츠, 블라우스, 재킷 등
    - **하의(Bottom):** 바지, 치마, 반바지 등
    - **원피스(Dress):** 전체 길이의 드레스.
  - 정밀한 주석 데이터를 활용하여 가장자리 및 질감 디테일을 개선하여 모델 정확도를 향상.

  ### 의류 분할 결과:

  <div style="text-align: center;">
    <img src="/images/cloth_seg.JPG" alt="cloth seg">
  </div>

  ### 모델 최적화
  - 다양한 데이터셋을 활용하여 모델을 튜닝하여 다음과 같은 변수에 대응하도록 개선:
    - 다양한 의류 질감(예: 단색, 패턴, 반투명)
    - 조명 및 그림자 변화
    - 포즈 및 의류 겹침
  - 모델이 다양한 스타일의 의류에서도 일반화될 수 있도록 새로운 데이터에 대한 성능 검증 진행.

  ## 배포 및 활용
  - 자동화된 의류 전처리 파이프라인에 모델을 통합하여:
    - 가상 피팅 시스템
    - 패션 디자인 및 시각화

  ## 사용 기술
  - **세분화 모델**: U2Net
  - **프로그래밍**: Python
  - **프레임워크**: PyTorch, OpenCV
  - **적용 분야**: 가상 피팅, 패션 시각화

collection: portfolio
---


---
title: "3- Cloth Segmentation and Background Removal Using U2Net"
excerpt: |
  Fine-tuned U2Net to achieve high-accuracy cloth segmentation for background removal and part identification (top, bottom, and dress). This project focuses on preprocessing clothing images for applications in virtual fitting and fashion visualization.

  ## Project Overview
  Developed a robust solution for cloth segmentation, combining background removal and part segmentation into a single pipeline. The model enables clean and detailed preprocessing for downstream applications in AI-powered fashion and e-commerce.

  ## Objective
  To create a unified segmentation pipeline capable of isolating clothing from backgrounds and categorizing them into parts (top, bottom, dress) with high accuracy.

  ## Process and Workflow

  ### Background Removal
  - Fine-tuned **U2Net** for removing backgrounds from clothing images, creating clean and isolated visuals.
  - Utilized a labeled dataset of clothing images with diverse backgrounds for model training.
  - Achieved high-quality segmentation masks with minimal noise and artifacts.

  ### Background Removal Model:

  <div style="text-align: center;">
    <img src="/images/background_rm.jpg" alt="cloth seg">
  </div>

  ### Cloth Part Segmentation
  - Enhanced U2Net to perform fine-grained segmentation of clothing into three categories:
    - **Top:** Shirts, blouses, jackets.
    - **Bottom:** Pants, skirts, shorts.
    - **Dress:** Full-body dresses.
  - Used labeled datasets with precise annotations to improve model accuracy for edge and texture details.

  ### Cloth Segmentation Output:

  <div style="text-align: center;">
    <img src="/images/cloth_seg.JPG" alt="cloth seg">
  </div>

  ### Model Optimization
  - Fine-tuned on diverse datasets to handle variations in:
    - Clothing textures (e.g., plain, patterned, transparent).
    - Lighting conditions and shadows.
    - Pose and garment overlap.
  - Validated results on unseen clothing images to ensure generalization across multiple styles.

  ## Deployment and Applications
  - Integrated the segmentation model into an automated pipeline for:
    - Virtual fitting systems.
    - Fashion design and visualization.

  ## Tools and Technologies
  - **Segmentation Model**: U2Net
  - **Programming**: Python
  - **Frameworks**: PyTorch, OpenCV
  - **Applications**: Virtual Fitting, Fashion Visualization

collection: portfolio
---
