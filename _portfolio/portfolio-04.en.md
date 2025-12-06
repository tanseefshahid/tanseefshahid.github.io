---
title: "4- Image-to-3D Reconstruction Using Open LRM"
lang: en
slug: portfolio-04
collection: portfolio
permalink: /en/portfolio/portfolio-04/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Developed a robust image-to-3D reconstruction pipeline using Open LRM, incorporating advanced data rendering techniques, enhanced image resolution with ESRGAN, and training models for realistic 3D object reconstruction.
---

## Project Overview
Designed and implemented a pipeline for generating high-quality 3D models from 2D images using Open LRM. The solution involved custom data preparation, realistic rendering, and advanced training techniques.

## Process and Workflow

### Data Rendering for Training
- Used Objaverse GitHub techniques for 3D object rendering.
- Improved the realism of rendered images by:
  - **Camera Rotations**: Applied appropriate angles to capture diverse perspectives.
  - **Camera Distance**: Optimized the positioning to highlight object details.
  - **Lighting Adjustments**: Enhanced illumination to mimic real-life conditions.
- Applied **ESRGAN** to upscale and refine rendered images, improving visual quality for training.

Below is a 3D model and its rendered 360 Images used for training:

<div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
  <div style="flex: 1;">
    <iframe title="2b1af04045c8c823f51f77a6d7299806" frameborder="0" allowfullscreen src="https://sketchfab.com/models/c00cd46903164e43ab18fb07f194bbf0/embed" style="width: 100%; height: 200px;"></iframe>
  </div>
  <div style="flex: 1;">
    <img src="/images/render.png" alt="Description of image" style="max-width: 100%; height: auto; max-height: 200px;">
  </div>
</div>

### Model Training
- Trained Open LRM for image-to-3D reconstruction using the prepared dataset.
- Focused on five key object categories: **tables, chairs, bookshelves, beds, and sofas**.
- Applied advanced techniques to improve 3D reconstruction accuracy and visual realism.

## Image to 3D Reconstruction:
Below is an input Image and 3D model created by reconstruction model

<div style="display: flex; align-items: center; justify-content: center; gap: 20px;">
  <div style="flex: 1;">
    <img src="/images/input_3D_image.png" alt="Description of image" style="max-width: 100%; height: auto; max-height: 200px;">
  </div>
  <div style="flex: 1;">
    <iframe title="2a1d80a0aa67ee7585d33ad8f24c4885" frameborder="0" allowfullscreen src="https://sketchfab.com/models/27745858326e41c39ebafe2e99133cff/embed" style="width: 100%; height: 200px;"></iframe>
  </div>
</div>

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
