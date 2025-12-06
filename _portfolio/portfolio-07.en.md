---
title: "7- Automatic License Plate Recognition and Tracking System for Gas Stations"
lang: en
slug: portfolio-07
collection: portfolio
permalink: /en/portfolio/portfolio-07/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Designed and implemented a real-time AI system to capture, recognize, and track license plates of vehicles across fueling machines. Leveraged YOLO for detection, OCR for text recognition, and DeepSORT for tracking unique vehicle IDs, supported by synthetic datasets for robust performance in diverse conditions.
---

## Project Overview

Developed a real-time Automatic License Plate Recognition (ALPR) system to monitor, identify, and track vehicles at gas stations. The system captures license plates from live video feeds, rectifies distortions, and recognizes text for automated vehicle identification and monitoring while maintaining unique IDs for each vehicle entering and exiting the premises.

## Process and Workflow

### License Plate Detection

- Used **YOLO** for detecting license plates in images and video streams.
- Optimized the model for multi-license plate detection in a single frame, addressing varied lighting, plate distortions, and diverse plate formats.

### Vehicle Tracking

- Integrated **DeepSORT** for robust vehicle tracking, ensuring each car is assigned a unique ID for monitoring entry and exit across fueling stations.

### Data Preparation

- Created and utilized **synthetic datasets** of license plates, simulating variations in plate types, fonts, and environmental factors.
- Augmented data with rotation, scaling, and cropping to improve robustness.

### Model Training and Optimization

- Fine-tuned YOLO for license plate detection, achieving high precision and recall.
- Validated OCR outputs with post-processing to ensure consistent and formatted results.

### Deployment

- Deployed the system for real-time operation, processing live video feeds from gas station cameras.
- Designed the pipeline to handle multiple fueling stations simultaneously, automating vehicle identification, tracking, and logging.

## Tools and Technologies

- **Object Detection:** YOLO, Keras
- **Vehicle Tracking:** DeepSORT
- **Programming:** Python
- **Frameworks:** PyTorch, OpenCV

## Visual Demonstration
![License Plate Recognition Example](/images/alpr.png)

collection: portfolio
