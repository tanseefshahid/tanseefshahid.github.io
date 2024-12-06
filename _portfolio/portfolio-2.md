---
title: "Image-to-3D Reconstruction Using Open LRM"
excerpt: |
  Developed a robust image-to-3D reconstruction pipeline using Open LRM, incorporating advanced data rendering techniques, enhanced image resolution with ESRGAN, and training models for realistic 3D object reconstruction.

  ## Project Overview
  Designed and implemented a pipeline for generating high-quality 3D models from 2D images using Open LRM. The solution involved custom data preparation, realistic rendering, and advanced training techniques.

  ## Process and Workflow

  ### Data Rendering for Training
  - Used Objaverse GitHub techniques for 3D object rendering.
  - Improved the realism of rendered images by:
    - **Camera Rotations**: Applied appropriate angles to capture diverse perspectives.
    - **Camera Distance**: Optimized the positioning to highlight object details.
    - **Lighting Adjustments**: Enhanced illumination to mimic real-life conditions.
  - Applied **ESRGAN (Enhanced Super-Resolution Generative Adversarial Network)** to upscale and refine rendered images, improving visual quality for training.

  ### Model Training
  - Trained Open LRM for image-to-3D reconstruction using the prepared dataset.
  - Focused on five key object categories: **tables, chairs, bookshelves, beds, and sofas**.
  - Applied advanced techniques to improve 3D reconstruction accuracy and visual realism.

  ### Key Enhancements
  - Achieved significant improvements in the realism and detail of 3D reconstructions for furniture and household objects.
  - Achieved notable performance metrics:
    - **IoU**: 0.80  
    - **Chamfer Distance**: 0.08  
    - **Normal Consistency**: 0.82
  - Optimized the training workflow for scalability and quality enhancement.


  ### Deployment
  - Enabled real-time generation of 3D models for use in AR/VR applications, virtual staging, and game design.

  ## Tools and Technologies
  - **Rendering Tools**: Objaverse GitHub, Blender (bpy scripting)
  - **Resolution Enhancement**: ESRGAN
  - **Training Framework**: Open LRM, PyTorch
  - **Programming**: Python
  - **3D Applications**: AR/VR, CAD, Gaming

collection: portfolio
---
