---
title: "Automated Gas Meter Inspection & Hazard Detection Pipeline"
excerpt: |
  Designed and deployed an end-to-end computer vision system for a gas inspection company to automate maintenance scheduling and proactively detect infrastructure hazards by extracting text data from gas meters and assessing pipe structural integrity.

  ## Project Overview

  Designed and deployed an end-to-end computer vision system for a gas inspection company to automate maintenance scheduling and proactively detect infrastructure hazards.

  ## The Challenge

  Field inspectors captured images under variable lighting, weather, and physical conditions. The system needed to extract degraded inspection dates and measure pipe angles to flag structural damage.

  ## Technical Approach & Architecture

  ### Deep Learning OCR Pipeline
  - **CRAFT** for text detection on rusted boiler plates.
  - LSTM-based **Tesseract 4** for recognition with custom validation.
  - Advanced **OpenCV** preprocessing for degraded surfaces.

  ### Geometric Anomaly Detection (Pipes)
  - **Mask R-CNN** instance segmentation for pipe isolation.
  - Skeletonization and PCA for structural centerline extraction.
  - Deviation thresholds for automatic tilt flagging.

  ### Pipeline Integration
  - Unified text extraction and geometric analysis in a production pipeline.

  ## Impact & Results
  - Automated maintenance scheduling via extracted dates.
  - Proactive safety alerts for structurally compromised pipes.

  ## Tools and Technologies
  - **Computer Vision:** Mask R-CNN, CRAFT, Tesseract 4 / EasyOCR
  - **Languages & Frameworks:** Python, PyTorch / TensorFlow, OpenCV, NumPy

collection: portfolio
---