---
title: "1- Real-Time Defect Detection System with PLC Integration"
lang: en
slug: portfolio-01
collection: portfolio
permalink: /en/portfolio/portfolio-01/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Built and deployed a real-time multi-camera defect detection system triggered by external sensors, integrated with industrial PLCs to automatically reject faulty products on a live production line.

---

## Overview

Developed a fully automated vision system using Basler cameras, Autonics sensors, and a NuDAQ card to detect defective items and trigger air valve-based rejection via PLCs. The system processes each item in under 200ms, handling up to 5 units per second on a live production line.

## Workflow

1. **Sensor Triggering**  
   Autonics sensor detects product arrival and triggers GPIO on each Basler camera.

2. **Image Capture**  
   On trigger, synchronized frames are captured from multiple Basler cameras covering different product angles.

3. **Defect Detection**  
   A lightweight object detection model analyzes the captured images in real time to identify surface defects or misalignments.

4. **Decision & Signaling**  
   Detection results are sent via NuDAQ digital I/O card to the machine's PLC.

5. **Actuation**  
   If defects are detected, the PLC activates an air valve to physically push the faulty item off the conveyor belt.

## Key Features

- Multi-camera vision pipeline with synchronized acquisition.
- Sensor-driven image capture for frame-accurate analysis.
- ~200ms total latency per product; supports 5 products per second.
- Robust in varying factory lighting and motion conditions.

## Tools and Technologies

- **Hardware**: Basler GigE Cameras, Autonics Sensor, NuDAQ Card, PLC, Pneumatic Air Valve  
- **Software**: Python, PyPylon SDK, OpenCV, PyTorch  
- **Detection**: Custom-trained object detection model (YOLO-based)  
- **Deployment**: Real-time on industrial PC with Docker containers  

## Company

- **Luxolis**, Seoul, South Korea  
- **Role**: SLAM Engineer  
- **Period**: Apr. 2025 – Present
