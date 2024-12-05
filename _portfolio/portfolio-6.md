---
title: "Personal Protective Equipment (PPE) Detection on Construction Sites"
excerpt: |
  Developed a real-time AI system using YOLOv3 to detect PPE components (hardhat, vest) and track worker locations on construction sites. The system identifies safety compliance and alerts when workers enter dangerous zones, deployed on an NVIDIA Jetson board for edge computing.

  ## Project Overview
  Created a safety monitoring system for construction sites to ensure proper use of Personal Protective Equipment (PPE) and track workers in real-time. The system reduces accident risks by automating safety checks and notifying workers or supervisors about potential hazards.

  ## Objective
  To enhance safety on construction sites by detecting PPE compliance and monitoring worker locations for hazard prevention in real-time.

  ## Process and Workflow

  ### PPE Detection
  - Implemented **YOLOv3** for object detection to identify:
    - **Hardhats**
    - **Safety Vests**
  - Trained the model on a custom dataset of construction worker images under diverse conditions (e.g., lighting, angles, and occlusions).
  - Achieved high precision in detecting PPE components, even in crowded environments.

  ### Worker Tracking and Hazard Notifications
  - Integrated a tracking algorithm to monitor worker locations over time.
  - Designed a zone monitoring system to:
    - Identify hazardous areas.
    - Notify workers or supervisors if someone enters a dangerous zone without proper PPE.
  - Processed video streams in real-time to ensure prompt alerts.

  ### Deployment
  - Deployed the system on an **NVIDIA Jetson board**, enabling efficient edge computing for real-time detection and tracking.
  - Optimized the pipeline for low latency and scalability, ensuring reliable performance in dynamic construction environments.

  ## Key Achievements
  - Automated PPE compliance monitoring, reducing manual inspection effort.
  - Improved construction site safety by providing real-time alerts for hazardous situations.
  - Delivered a scalable and deployable solution for edge computing environments.

  ## Tools and Technologies
  - **Object Detection**: YOLOv3
  - **Programming**: Python
  - **Frameworks**: OpenCV, TensorFlow/Keras
  - **Hardware**: NVIDIA Jetson Board
  - **Applications**: Construction Safety, Real-Time Tracking, Edge Computing

  ## Visual Demonstration
  ![PPE Detection Example](/images/ppe.png)

  ## Takeaways
  This project showcases expertise in real-time object detection, tracking, and edge deployment, providing a practical solution for improving safety in high-risk environments.
  keywords: "Object Detection, YOLOv3, Worker Tracking, Video Processing, Edge Computing, Python"
collection: portfolio
---
