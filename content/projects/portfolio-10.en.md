---
title: "Automated Gas Meter Inspection & Hazard Detection Pipeline"
lang: en
slug: portfolio-10
collection: portfolio
permalink: /en/portfolio/portfolio-10/
teaser: /images/architecture_gasmeter.png
excerpt: |
  Designed and deployed an end-to-end computer vision system for a gas inspection company to automate maintenance scheduling and proactively detect infrastructure hazards by extracting text data from gas meters and assessing pipe structural integrity.

---

## Project Overview

Designed and deployed an end-to-end computer vision system for a gas inspection company to automate maintenance scheduling and proactively detect infrastructure hazards. The system analyzed field images of gas meters to extract critical text data and mathematically assess pipe structural integrity.

## The Challenge

Field inspectors captured images of gas meters and piping under highly variable lighting, weather, and physical conditions. The system needed to solve two distinct problems: accurately extracting heavily degraded inspection dates to trigger future maintenance cycles, and precisely measuring the "in and out" angles of gas pipes to flag physical erosion, shifting, or structural damage.

## Technical Approach & Architecture

<div style="text-align: center;">
  <img src="/images/architecture_gasmeter.png" alt="Gas Meter Inspection Pipeline Architecture">
</div>

### Deep Learning OCR Pipeline
- Architected a two-stage OCR pipeline, utilizing the **CRAFT** (Character Region Awareness for Text Detection) model to robustly locate text regions on skewed and rusted boiler plates.
- Processed detected text crops through an LSTM-based **Tesseract 4** recognition engine, applying custom regex and validation logic to parse inspection dates with high reliability for automated CRM scheduling.
- Implemented advanced **OpenCV** image preprocessing (adaptive thresholding, morphological operations, and illumination correction) to maximize accuracy on heavily degraded metal surfaces.

### Geometric Anomaly Detection (Pipes)
- Trained a **Mask R-CNN** instance segmentation model on a custom dataset to isolate gas pipes from complex, noisy backgrounds, capturing the exact pixel-level morphology of the pipes rather than just bounding boxes.
- Leveraged geometric computer vision techniques (such as skeletonization and Principal Component Analysis) on the resulting segmentation masks to extract the structural centerlines of the pipes.
- Computed the exact ingress and egress angles based on the centerlines, implementing deviation thresholds to automatically flag pipes exhibiting significant tilt—an early indicator of dangerous erosion.

### Pipeline Integration
- Integrated both the text extraction and segmentation-based geometric analysis modules into a unified, automated inference pipeline deployed in a production environment.

## Impact & Results
- **Automated Scheduling:** Eliminated manual data entry for field technicians, establishing a fully automated system for tracking and scheduling upcoming boiler inspections based on extracted dates.
- **Proactive Safety Alerts:** Enhanced environmental safety by successfully flagging structurally compromised pipes based on micro-deviations in pipe angles, allowing maintenance teams to address hazards before critical failures occurred.

## Tools and Technologies
- **Computer Vision:** Mask R-CNN (Instance Segmentation), CRAFT (Text Detection), Tesseract 4 / EasyOCR
- **Languages & Frameworks:** Python, PyTorch / TensorFlow, OpenCV, NumPy
