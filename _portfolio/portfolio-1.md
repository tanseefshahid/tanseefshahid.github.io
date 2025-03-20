---
title: "1- 확산 모델을 활용한 가상 피팅"
excerpt: |
  AI 기반 이미지 합성을 사용하여 사용자가 가상 모델을 통해 옷이 어떻게 맞는지 확인할 수 있는 가상 피팅 애플리케이션을 개발했습니다.
  ## 과정 및 워크플로우

  1. **포즈 추정 (Pose Estimation)**  
    포즈 추정 모델을 사용하여 18개의 주요 키포인트를 식별하고, 각 키포인트는 특정 신체 관절을 나타내며 옷 맞춤을 위한 신체 자세를 추출하는 데 사용됩니다.
    <div style="text-align: center;">
      <img src="/images/pose.jpg" alt="Pose Estimation">
    </div>
 
  2. **DensePose 및 UV 맵**  
    DensePose는 실제 사람의 특정 체형과 자세를 반영하는 디지털 아바타를 생성합니다.
    UV 맵은 패브릭 텍스처가 이 아바타에 정확하게 정렬되고 배치되도록 보장합니다.  

    <div style="text-align: center;">
      <img src="/images/densepose.png" alt="DensePose">
    </div>

  3. **SCHP (Self-Correction-Human-Parsing)**  
    SCHP를 적용하여 인간 형상을 세분화하고, 모델의 훈련 과정에서 다양한 신체 부위에 맞게 옷을 정교하게 조정하는 능력을 향상시켰습니다.

    <div style="text-align: center;">
      <img src="/images/schp.png" alt="SCHP">
    </div>


  4. **워핑 모듈 (Warping Module)**:  
  의류 아이템을 대상 모델에 맞게 변형하는 역할을 수행합니다. 신체 형태 및 자세에 효과적으로 맞출 수 있도록 형태 및 위치 조정을 개선하여 의류 정렬을 향상시켰습니다.  

    <div style="text-align: center;">
      <img src="/images/warp_image.jpg" alt="Warping Module">
    </div>
      
  5. **EMASC 모듈 (Enhanced Mask-Aware Skip Connection)**:
  복원 오류를 줄이고 고주파 디테일을 개선하여 현실적이고 고품질의 결과를 보장하는 방식으로 세부 사항을 보존하였습니다.
  6. **반전 모듈 (Inversion Module)**:  
  시각적 의류 특징을 CLIP 토큰 임베딩 공간에 매핑했습니다. 가짜 단어 토큰 임베딩을 생성하여 생성 과정에서 의류 텍스처와 복잡한 디테일을 유지할 수 있도록 했습니다.

  7. **VTON 모듈 (Virtual Try-On)**:  
   워핑된 의류 아이템을 대상 모델 이미지와 결합하여 최종 이미지 생성을 최적화하였습니다. 확산 모델에 노이즈 입력을 통합하여 생동감 있고 시각적으로 매력적인 결과를 보장했습니다.

  ### 가상 피팅 샘플 출력:

  <div style="text-align: center;">
    <img src="/images/ladi-vton.png" alt="Warping Module">
  </div>


  ### 배포
  - 의류 이미지를 자동으로 처리하고 가상 피팅 파이프라인을 실행하여 출력 이미지를 생성하는 워크플로우를 자동화했습니다.  
  - 최종 결과를 AWS S3를 통해 제공하여 클라이언트가 쉽게 접근할 수 있도록 했습니다. 

  ## 주요 성과
  - 다양한 의류 유형 및 체형에서 높은 품질의 현실적인 핏을 달성했습니다.  
  - 맞춤형 훈련 데이터를 준비하고 정제하여 다양한 실제 의류 스타일에 적응할 수 있도록 했습니다.
  - 포즈 추정, 워핑, EMASC, 반전 및 확산 모듈을 세부적으로 조정하여 실시간 시나리오에서 성능을 향상시켰습니다.
  - 다양한 조명, 자세, 복잡한 의류 텍스처에서도 강인성을 높여 표준 데이터셋을 넘어 일반화를 개선했습니다.

  ## 사용 기술
  - **프로그래밍**: Python, PyTorch, OpenCV, Flask  
  - **모델 및 프레임워크**: LADi-VTON, DensePose, SCHP (Self Correction for Human Parsing), 포즈 추정 
  - **배포**: Docker, AWS S3  
  - **하드웨어**:훈련 및 추론을 위한 NVIDIA GPU 


collection: portfolio

---


<!--
---
title: "1- Virtual Try-On with Diffusion Models"
excerpt: |
  Developed an application for virtual try-on which enables users to see how clothes fit on a virtual model using AI-based image synthesis.

  ## Process and Workflow

  1. **Pose Estimation**  
    Used a pose estimation model to identify 18 keypoints, each representing a specific human body joint to get the body pose for cloth fitting.

    <div style="text-align: center;">
      <img src="/images/pose.jpg" alt="Pose Estimation">
    </div>
 
  2. **DensePose and UV Maps**  
    DensePose creates the digital avatar which matches the specific body shape and posture of the real person.
    UV Maps ensure that fabric textures are correctly aligned and placed on this avatar.  

    <div style="text-align: center;">
      <img src="/images/densepose.png" alt="DensePose">
    </div>

  3. **SCHP (Self-Correction-Human-Parsing)**  
    Applied SCHP to segment human figures, improving the model’s ability during training to refine and align clothing on different body parts.

    <div style="text-align: center;">
      <img src="/images/schp.png" alt="SCHP">
    </div>


  4. **Warping Module**:  Responsible for transforming the clothing item to fit the target model. Improved garment alignment by refining shape and position adjustments to match the body shape and pose effectively.  

    <div style="text-align: center;">
      <img src="/images/warp_image.jpg" alt="Warping Module">
    </div>
      
  5. **EMASC Module (Enhanced Mask-Aware Skip Connection)**:
  Enhanced detail preservation by reducing reconstruction error and improving high-frequency details, ensuring realistic and high-quality outputs.
  6. **Inversion Module**:  
  Mapped visual garment features to the CLIP token embedding space. Generated pseudo-word token embeddings to condition the generation process, maintaining garment texture and intricate details.

  7. **VTON Module (Virtual Try-On)**:  
   Optimized the final image generation by combining warped clothing items with the target model’s image. Integrated noise inputs into the diffusion model, ensuring lifelike and visually appealing results.

  ### Virtual Fitting Sample Output:

  <div style="text-align: center;">
    <img src="/images/ladi-vton.png" alt="Warping Module">
  </div>


  ### Deployment
  - Automated the workflow to process incoming clothing images, run the virtual fitting pipeline, and generate output images.  
  - Delivered final results via AWS S3 for easy client access.  

  ## Key Achievements
  - Achieved high-quality, realistic fits across diverse clothing types and body shapes.  
  - Prepared and curated custom training data, ensuring adaptability to diverse real-world clothing styles.
  - Fine-tuned each module (pose estimation, warping, EMASC, inversion, and diffusion) to improve performance on unseen data in real-time scenarios.
  - Enhanced robustness for varied lighting, poses, and complex clothing textures, improving generalization beyond standard datasets.

  ## Tools and Technologies
  - **Programming**: Python, PyTorch, OpenCV, Flask  
  - **Models and Frameworks**: LADi-VTON, DensePose, SCHP (Self Correction for Human Parsing), Pose Estimation  
  - **Deployment**: Docker, AWS S3  
  - **Hardware**: NVIDIA GPUs for training and inference  


collection: portfolio

---
-->