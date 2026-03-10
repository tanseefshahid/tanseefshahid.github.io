---
title: "Real-Time PPE Compliance & Spatial Hazard Detection at the Edge"
excerpt: |
  Architected and deployed a fully automated, edge-computed safety monitoring system for construction sites. The system enforces PPE compliance at access points and provides real-time spatial tracking within hazardous zones, immediately alerting workers and managers to safety violations.

  ## Project Overview

  Architected and deployed a fully automated, edge-computed safety monitoring system for active construction sites. The system enforced PPE compliance at access points and provided real-time spatial tracking within hazardous zones.

  ## The Challenge

  Construction sites are highly dynamic with heavy occlusions, fluctuating lighting, and strict zero-latency requirements.

  ## Technical Approach & Architecture

  ### Multi-Class Edge Detection (PPE)
  - Trained lightweight YOLOv5 to detect hardhats, high-visibility vests, and safety boots.
  - Multi-class logic flags non-compliant combinations at access points.

  ### Spatial Tracking & Dynamic Hazard Zones
  - Integrated DeepSORT for persistent worker tracking.
  - Custom polygonal ROI monitoring for temporary hazards.

  ### Hardware Integration & Edge Deployment
  - Deployed on **NVIDIA Jetson** with **TensorRT** optimization.
  - SMS alerts and PA speaker integration for real-time warnings.

  ## Impact & Results
  - 24/7 automated PPE compliance enforcement.
  - Zero-latency hazard zone warnings.

  ## Tools and Technologies
  - **Computer Vision & Tracking:** YOLOv5, DeepSORT
  - **Edge Computing:** NVIDIA Jetson, TensorRT
  - **Languages & Frameworks:** Python, OpenCV, PyTorch
  - **Integration:** SMS API, GPIO / Audio Hardware Integration

collection: portfolio
---
