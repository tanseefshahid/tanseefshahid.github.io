---
title: "4- Clothing Classification with Multi-Class Categories"
excerpt: |
  Designed and trained a multi-class classification model to categorize clothing into 73 classes. The project encompasses top wear, bottom wear, and dresses, providing a comprehensive solution for fashion classification.

  ## Project Overview
  Developed a deep learning model for classifying clothing items into 73 distinct categories across three main types: tops, bottoms, and dresses. This solution is tailored for applications in virtual fitting and recommendation systems.

  ## Process and Workflow

  ### Data Preparation
  - Collected and curated a diverse dataset of clothing images from various sources.
  - Manually labeled the dataset into 73 classes across three primary categories:
    1. **Top Wear**: Shirts, T-shirts, polo shirts, hoodies, jackets, etc.
    2. **Bottom Wear**: Pants, skirts, shorts, jeans, dress pants, etc.
    3. **Dresses**: Long coats, female dresses, and other similar types.
  - Augmented the dataset using techniques like rotation, cropping, and color adjustments to improve model robustness.

  ### Model Design and Training
  - Used a deep learning architecture suitable for multi-class classification:
    - **Backbone Model**: Fine-tuned ResNet50 pre-trained on ImageNet for transfer learning.
    - **Classifier Head**: Added fully connected layers with softmax activation for predicting 73 classes.
  - Optimized model hyperparameters, including learning rate and batch size, for improved performance.

  ## Key Achievements
  - Achieved over 90% accuracy on the validation set and consistent performance across all classes.
  - Developed a scalable pipeline for training and deploying the model.
  - Successfully handled multi-class classification with diverse and imbalanced data.

  ## Tools and Technologies
  - **Frameworks**: PyTorch, TensorFlow
  - **Programming**: Python
  - **Data Augmentation**: OpenCV, PyTorch

collection: portfolio
---


---
title: "4- 다중 클래스 카테고리를 활용한 의류 분류"
excerpt: |
  의류를 73개 카테고리로 분류하는 다중 클래스 분류 모델을 설계하고 훈련하였습니다. 이 프로젝트는 상의, 하의, 원피스를 포함하는 패션 분류 솔루션으로, 가상 피팅 및 추천 시스템과 같은 애플리케이션에 최적화되었습니다.

  ## 프로젝트 개요
  딥러닝 기반 모델을 활용하여 의류 아이템을 73개 세부 카테고리로 분류하는 솔루션을 개발했습니다. 이 모델은 가상 피팅 시스템 및 추천 엔진과 같은 패션 기술 응용 분야에 적용할 수 있도록 설계되었습니다.

  ## 과정 및 워크플로우

  ### 데이터 준비
  - 다양한 출처에서 의류 이미지를 수집하고 정제하여 다양성을 갖춘 데이터셋을 구축.
  - 수작업으로 73개 클래스로 주석 처리하여 세 가지 주요 카테고리로 분류:
    1. **상의(Top Wear)**: 셔츠, 티셔츠, 폴로셔츠, 후드티, 재킷 등
    2. **하의(Bottom Wear)**: 바지, 치마, 반바지, 청바지, 정장 바지 등
    3. **원피스(Dresses)**: 롱코트, 여성 드레스 등
  - 모델의 강인성을 높이기 위해 회전, 크롭, 색상 조정 등의 데이터 증강 기법 적용.

  ### 모델 설계 및 훈련
  - 다중 클래스 분류에 적합한 딥러닝 아키텍처 적용:
    - **백본 모델(Backbone Model)**: ImageNet으로 사전 훈련된 ResNet50을 전이 학습(Fine-tuning)
    - **분류기(Classifier Head)**: **완전 연결 계층(FC Layers)**과 소프트맥스(Softmax) 활성화 함수 추가하여 73개 클래스 예측
  - 학습률(Learning Rate) 및 배치 크기(Batch Size)와 같은 **초매개변수(Hyperparameters)**를 최적화하여 성능 개선.

  ## 주요 성과
  - 검증 데이터(Validation Set)에서 90% 이상의 정확도 달성.
  - 확장 가능한 학습 및 배포 파이프라인 구축.
  - 다양한 의류 스타일 및 불균형한 데이터에서도 일관된 성능 유지.

  ## 사용 기술
  - **프레임워크**: PyTorch, TensorFlow
  - **프로그래밍**: Python
  - **데이터 증강**: OpenCV, PyTorch

collection: portfolio
---
