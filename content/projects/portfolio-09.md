---
title: "Real-Time Anomaly Detection & Multi-Camera Tracking System (Incheon Airport)"
excerpt: |
  Architected and developed a real-time video surveillance pipeline for Incheon International Airport to identify anomalous human behaviors and track flagged individuals across a distributed camera network, enhancing security response times in highly crowded environments.

  ## Project Overview

  Architected and developed a real-time video surveillance pipeline for Incheon International Airport research to identify anomalous human behaviors and track flagged individuals across a distributed camera network.

  ## The Challenge

  Airport security environments present extreme challenges due to severe occlusions, dynamic lighting, and dense crowds. The objective was to detect anomalies—such as falls, sprinting, rushing through immigration, and abandoned baggage—and track subjects across non-overlapping camera feeds.

  ## Technical Approach & Architecture

  ### Hybrid Action Recognition Pipeline
  - Deployed **YOWO** as a base 3D-CNN spatiotemporal feature extractor.
  - Integrated **Human Pose Estimation** (HRNet/OpenPose) for skeletal kinematics to filter false positives.

  ### Complex Event & Interaction Logic
  - Custom spatio-temporal heuristics for abandoned baggage detection via Human-Object Interaction.
  - Trajectory and speed analysis for unauthorized rushing detection.

  ### Multi-Target Multi-Camera Tracking (MTMCT)
  - **DeepSORT** for temporal tracking combined with **Person Re-Identification (Re-ID)** embeddings.

  ## Impact & Results
  - Real-time alert system reducing cognitive load on security personnel.
  - Robust identity tracking across disconnected camera fields of view.

  ## Tools and Technologies
  - **Computer Vision:** YOWO, HRNet / OpenPose, Person Re-ID
  - **Tracking Algorithms:** DeepSORT, MTMCT techniques
  - **Languages & Frameworks:** Python, PyTorch, OpenCV

collection: portfolio
---
