---
title: "9- Action Recognition with Human Pose Estimation"
lang: en
slug: portfolio-09
collection: portfolio
permalink: /en/portfolio/portfolio-09/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Contributed to a team project for monitoring abnormal actions at an airport using YOWO and human pose estimation models. The system successfully detected multiple abnormal actions, such as falling down and dashing, in real-time.
---

## Project Overview
Developed an action recognition system for airport security to monitor and detect abnormal human behaviors using YOWO (You-Only-Watch-Once) and human pose estimation techniques. The system was optimized for real-time performance to ensure prompt alerts and responses.

## Objective
To create a real-time action recognition system capable of identifying multiple abnormal actions (e.g., falling down, dashing) in crowded airport environments, enhancing security and safety measures.

## Process and Workflow

### Model Design and Implementation
- **YOWO (You-Only-Watch-Once)**: Implemented YOWO for video-based action recognition, leveraging its efficiency in spatiotemporal feature extraction.
- **Human Pose Estimation**: Integrated human pose estimation models to identify key body movements and postures.

### Data Preparation
- Collected and annotated diverse video sequences with normal and abnormal actions.
- Preprocessed frames using OpenCV for augmentation and normalization.

### Model Training and Optimization
- Fine-tuned YOWO and combined pose estimation outputs with predictions to reduce false positives.

## Deployment
- Designed a pipeline to process live video feeds and generate real-time alerts for detected abnormal actions.

## Tools and Technologies
- **Models**: YOWO, Human Pose Estimation
- **Programming**: Python
- **Frameworks**: PyTorch, OpenCV

## Pose Estimation Output:
![Abnormal Action Recognition Example](/images/hpe.png)

collection: portfolio
