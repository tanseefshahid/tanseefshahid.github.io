---
title: "8- Personal Protective Equipment (PPE) Detection on Construction Sites"
lang: en
slug: portfolio-08
collection: portfolio
permalink: /en/portfolio/portfolio-08/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Developed a real-time AI system using YOLO to detect PPE components (hardhat, vest) and track worker locations on construction sites. The system identifies safety compliance and alerts when workers enter dangerous zones, deployed on an NVIDIA Jetson board for edge computing.
---

## Project Overview
Created a safety monitoring system for construction sites to ensure proper use of Personal Protective Equipment (PPE) and track workers in real-time. The system reduces accident risks by automating safety checks and notifying workers or supervisors about potential hazards.

## Process and Workflow

### PPE Detection
- Implemented **YOLO** for object detection to identify:
  - **Hardhats**
  - **Safety Vests**
  - **Shoes**
- Trained the model on a custom dataset of construction worker images under diverse conditions (e.g., lighting, angles, and distances).

### Worker Tracking and Hazard Notifications
- Integrated a tracking algorithm to monitor worker locations over time.
- Designed a zone monitoring system to identify hazardous areas and notify workers or supervisors if someone enters a dangerous zone without proper PPE.

### Deployment
- Deployed the system on an **NVIDIA Jetson board**, enabling efficient edge computing for real-time detection and tracking.
- Optimized the pipeline for low latency and scalability.

## Tools and Technologies
- **Object Detection**: YOLO
- **Programming**: Python
- **Frameworks**: OpenCV, TensorFlow/Keras
- **Hardware**: NVIDIA Jetson Board

## Visual Demonstration
![PPE Detection Example](/images/ppe.png)

collection: portfolio
