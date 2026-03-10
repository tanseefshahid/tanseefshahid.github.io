---
title: "Eye-in-Hand 6-DoF Pose Estimation & Autonomous CNC Localization"
excerpt: |
  Architected and deployed a high-precision spatial awareness system for autonomous CNC machining. Using an eye-in-hand 3D RGB-D camera mounted on the drill head, the system performs real-time 6-DoF pose estimation by registering workpieces against CAD models, eliminating manual fixturing.

  ## Project Overview

  Architected and deployed a high-precision spatial awareness system for autonomous CNC machining. Utilizing an eye-in-hand 3D RGB-D camera mounted directly on the moving drill head, the system performs real-time 6-DoF (Degrees of Freedom) pose estimation by registering physical workpieces against their digital CAD models, completely eliminating the need for rigid manual fixturing.

  ## The Challenge

  CNC operations require exact sub-millimeter spatial alignment before the tool engages the material. Traditionally, this requires time-consuming manual jigging and zero-point calibration. The objective was to make the CNC machine dynamically aware of its environment, allowing it to mathematically adjust its toolpath to accommodate a workpiece dropped dynamically into the workspace at any arbitrary translation (X, Y, Z) or rotation (Roll, Pitch, Yaw).

  ## Technical Approach & Architecture

  ### Eye-in-Hand Calibration & Sensor Fusion
  - Mounted a high-resolution 3D depth sensor to the CNC spindle.
  - Executed rigorous hand-eye calibration (solving the classic AX=XB spatial transformation problem) to map the camera's local coordinate frame directly to the CNC machine's global kinematic coordinate system.

  ### Zero-Shot Foundation Pose Estimation
  - Implemented a state-of-the-art 6D Foundation Pose model to achieve zero-shot object localization. This bypassed the need to train custom networks for individual parts, allowing the system to generalize to any newly manufactured part simply by ingesting its target CAD model.
  - Applied a custom real-time segmentation pipeline to isolate the workpiece from the metallic CNC bed in the RGB frame, using the masked region to extract the corresponding 3D point cloud from the depth map.

  ### CAD-to-Point-Cloud Registration
  - Designed an alignment algorithm to spatially match the extracted RGB-D point cloud against the ground-truth geometry of the CAD model.
  - Utilized global registration followed by Iterative Closest Point (ICP) refinement to lock in the final 6-DoF pose matrix with the extreme precision required for machining.

  ## Impact & Results
  - **Fully Autonomous Setup:** Transformed a rigid, manual CNC workflow into a dynamic, autonomous system capable of locating and adapting to randomly oriented parts on the fly.
  - **Scalable Production:** By leveraging CAD-based foundation models, the system achieved immediate zero-shot deployment for new manufacturing runs without requiring expensive data collection or model retraining.

  ## Tools and Technologies
  - **3D Vision & Metrology:** 6D Foundation Pose Models, RGB-D Sensor Fusion, Point Cloud Processing (ICP)
  - **Robotics:** Eye-in-Hand Calibration, Spatial Kinematics (SE(3) Transformations)
  - **Languages & Frameworks:** Python, PyTorch, OpenCV, Open3D

  ## Company

  - **Luxolis**, Seoul, South Korea
  - **Role**: SLAM Engineer
  - **Period**: Apr. 2025 – Present

collection: portfolio
---
