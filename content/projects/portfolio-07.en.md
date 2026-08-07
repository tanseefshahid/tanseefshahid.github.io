---
title: "Real-Time License Plate Recognition & Vehicle Tracking"
lang: en
slug: portfolio-07
collection: portfolio
permalink: /en/portfolio/portfolio-07/
teaser: /images/architecture_alpr.png
excerpt: |
  End-to-end perception pipeline combining YOLO detection, CRNN OCR, and DeepSORT multi-object tracking, trained on a procedurally generated synthetic dataset (&gt;99% character accuracy). Synthetic data generation, perspective rectification, and tracking-by-detection apply to autonomous driving, surveillance, robotics, and AI/ML data engineering.
order: 11
category: "Perception"
tags: ["YOLO", "CRNN", "DeepSORT"]
company: "Ellexi"
role: "Computer Vision Engineer"
period: "Nov 2019 — Oct 2021"
location: "Seoul, South Korea"
---

## Project Overview

Architected and developed a high-precision Automatic License Plate Recognition (ALPR) and vehicle tracking system designed to automate billing at gas stations. The system tracked vehicles across multiple fueling pumps, rectifying severe perspective distortions to achieve near-perfect plate recognition without relying on restricted real-world datasets.

## The Challenge

The project faced strict data privacy and confidentiality regulations, strictly prohibiting the use of real South Korean license plate datasets for training. Additionally, cameras mounted at gas stations capture plates at extreme, varied angles with significant environmental noise (motion blur, headlight glare, and weather). The system required flawless character recognition to ensure billing systems charged the correct user accounts.

## Technical Approach & Architecture

<div style="text-align: center;">
  <img src="/images/architecture_alpr.png" alt="ALPR Pipeline Architecture">
</div>

### Procedural Synthetic Data Engineering
- Engineered a massive, highly realistic synthetic dataset of license plates from scratch to bypass data privacy restrictions.
- Applied advanced spatial transformations—including programmatic homography projection, occlusion modeling, motion blur, and illumination noise—to perfectly mimic the physical distortions and environmental conditions of real-world gas station cameras.

### State-of-the-Art ALPR Pipeline (ICCV/CVPR Inspired)
- Developed a custom, two-stage detection and recognition pipeline inspired by top-tier academic architectures.
- **Stage 1 (Localization):** Deployed a highly optimized YOLO model to detect vehicle bounding boxes and isolate the license plate region within the frame.
- **Stage 2 (Geometric Rectification & Character Recognition):** Applied geometric homography transformations to spatially warp and flatten severely angled plates. Utilized a custom character-level bounding box and recognition model (CRNN/LPRNet style) to sequentially detect and classify individual alphanumeric characters.

### Multi-Pump Tracking (MTMCT)
- Integrated DeepSORT to assign and maintain a persistent, unique ID for every vehicle entering the station.
- Tracked the vehicle's spatial trajectory from the entrance to specific fueling bays, locking the recognized license plate to the exact pump to enable seamless, automated backend billing.

## Impact & Results
- **Unprecedented Accuracy on Synthetic Data:** Achieved >99% accuracy for individual character recognition and >97% full license plate recognition accuracy on real-world test sets, entirely driven by the robust synthetic training pipeline.
- **Scalable Automation:** Successfully delivered the technical proof-of-concept capable of processing live, multi-camera RTSP feeds in real-time, effectively linking physical vehicle movement to automated transaction systems.

## Tools and Technologies
- **Computer Vision:** YOLO (Object Detection), Character-Level OCR, Geometric Homography, DeepSORT (Tracking)
- **Data Engineering:** Procedural Synthetic Data Generation, Spatial Augmentations
- **Languages & Frameworks:** Python, PyTorch, OpenCV, Keras
