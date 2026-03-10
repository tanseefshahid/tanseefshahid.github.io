---
title: "Real-Time ALPR & Automated Fueling Tracking Pipeline"
excerpt: |
  Architected and developed a high-precision Automatic License Plate Recognition and vehicle tracking system to automate billing at gas stations, achieving >99% character recognition and >97% full plate accuracy using a robust synthetic training pipeline.

  ## Project Overview

  Architected and developed a high-precision ALPR and vehicle tracking system designed to automate billing at gas stations. The system tracked vehicles across multiple fueling pumps, rectifying severe perspective distortions to achieve near-perfect plate recognition.

  ## The Challenge

  Strict data privacy regulations prohibited using real South Korean license plate datasets. Cameras capture plates at extreme angles with significant environmental noise.

  ## Technical Approach & Architecture

  ### Procedural Synthetic Data Engineering
  - Engineered a massive, realistic synthetic dataset of license plates from scratch.
  - Applied homography projection, occlusion modeling, motion blur, and illumination noise.

  ### State-of-the-Art ALPR Pipeline
  - **Stage 1:** YOLO detection for vehicle and plate localization.
  - **Stage 2:** Geometric homography rectification and CRNN/LPRNet character recognition.

  ### Multi-Pump Tracking (MTMCT)
  - Integrated DeepSORT for persistent vehicle tracking across fueling bays.

  ## Impact & Results
  - >99% individual character recognition and >97% full plate accuracy.
  - Real-time processing of multi-camera RTSP feeds.

  ## Tools and Technologies
  - **Computer Vision:** YOLO, Character-Level OCR, Geometric Homography, DeepSORT
  - **Data Engineering:** Procedural Synthetic Data Generation, Spatial Augmentations
  - **Languages & Frameworks:** Python, PyTorch, OpenCV, Keras

collection: portfolio
---
