---
title: "2- CNC Machine Localization and 6-DoF Pose Estimation"
lang: en
slug: portfolio-02
collection: portfolio
permalink: /en/portfolio/portfolio-02/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Designed a vision system for CNC machines using a 3D depth camera mounted on the drill head to accurately localize objects and estimate their spatial orientation before machining.
---

## Overview

Built a system to detect object position and orientation in 3D space relative to a moving drill head using RGB images and depth data. This enables precise drilling operations by identifying both the location (XYZ) and angular orientation (Yaw, Pitch, Roll) of the part before tool engagement.

## Workflow

1. **Camera Setup**  
   A depth camera is mounted directly on the CNC drill head, capturing both RGB and depth images of the target object.

2. **Object Detection and Segmentation**  
   A real-time segmentation model processes RGB frames to identify and localize the object within the workspace.

3. **Depth-Based Positioning**  
   Using the depth map, the system computes the distance from the drill head to the object and derives its 3D position (X, Y, Z).

4. **Pose Estimation**  
   Calculates the object’s orientation in 3D space, including Roll, Pitch, and Yaw, for precise alignment during machining operations.

## Key Features

- Real-time localization of workpieces with spatial precision.
- Full 6-DoF estimation using combined segmentation and depth data.
- Mounted camera setup ensures consistent frame-of-reference from the drill head.
- Enables automation of positioning and reduces manual setup time.

## Tools and Technologies

- **Hardware**: 3D Depth Camera (mounted on CNC drill head)  
- **Software**: Python, OpenCV, PyTorch  
- **Models**: Custom segmentation network for object detection  
- **Processing**: Depth-based 3D triangulation, Euler angle extraction

## Company

- **Luxolis**, Seoul, South Korea  
- **Role**: SLAM Engineer  
- **Period**: Apr. 2025 – Present
