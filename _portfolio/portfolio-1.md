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
  - Automated end-to-end data processing and fitting workflows, improving efficiency and scalability.  

  ## Tools and Technologies
  - **Programming**: Python, PyTorch, OpenCV, Flask  
  - **Models and Frameworks**: LADi-VTON, DensePose, SCHP (Self Correction for Human Parsing), Pose Estimation  
  - **Deployment**: Docker, AWS S3  
  - **Hardware**: NVIDIA GPUs for training and inference  


collection: portfolio

---


title: "1- Virtual Try-On with Diffusion Models"
excerpt: |
  Developed an application for virtual try-on which enables users to see how clothes fit on a virtual model using AI-based image synthesis.

  ## Project Overview
  Designed a virtual fitting system that processes real-life clothing images and generates realistic visualizations of clothing on virtual models, leveraging generative AI and computer vision techniques.

  ## Process and Workflow

  ### Data Preparation
  - Received real-life clothing images from clients, segmented them, and aligned them onto mannequins for realistic wear visualizations.
  - Adjusted clothing images on virtual models using custom coding for natural and precise fitting.

  ### Data Preprocessing for Training
  To train the LADi-VTON framework effectively, several preprocessing steps were performed:

  1. **Pose Estimation**  
    Used a pose estimation model to identify 18 keypoints, each representing a specific human body joint:

    <div style="text-align: center;">
      <img src="/images/pose.jpg" alt="Pose Estimation">
    </div>
 
  2. **DensePose**  
    Leveraged the Detectron DensePose model to generate dense maps and UV mappings for input data.

    <div style="text-align: center;">
      <img src="/images/densepose.png" alt="DensePose">
    </div>

  3. **SCHP (Self-Correction-Human-Parsing)**  
    Applied SCHP to segment human figures, improving the model’s ability during training to refine and align clothing on different body parts.

    <div style="text-align: center;">
      <img src="/images/schp.png" alt="SCHP">
    </div>

  ### Model Training and Fine-Tuning
  Fine-tuned the **LADi-VTON framework** to enhance output quality by refining multiple modules:
  - **Warping Module**:  Responsible for transforming the clothing item to fit the target model. Improved garment alignment by refining shape and position adjustments to match the body shape and pose effectively.  

    <div style="text-align: center;">
      <img src="/images/warp_image.jpg" alt="Warping Module">
    </div>
      
  - **EMASC Module (Enhanced Mask-Aware Skip Connection)**:
  Enhanced detail preservation by reducing reconstruction error and improving high-frequency details, ensuring realistic and high-quality outputs.
  - **Inversion Module**:  
  Mapped visual garment features to the CLIP token embedding space. Generated pseudo-word token embeddings to condition the generation process, maintaining garment texture and intricate details.

  - **VTON Module (Virtual Try-On)**:  
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
  - Automated end-to-end data processing and fitting workflows, improving efficiency and scalability.  

  ## Tools and Technologies
  - **Programming**: Python, PyTorch, OpenCV, Flask  
  - **Models and Frameworks**: LADi-VTON, DensePose, SCHP (Self Correction for Human Parsing), Pose Estimation  
  - **Deployment**: Docker, AWS S3  
  - **Hardware**: NVIDIA GPUs for training and inference  


collection: portfolio
