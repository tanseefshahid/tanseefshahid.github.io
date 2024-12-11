---
title: "Action Recognition with Human Pose Estimation"
excerpt: |
  Contributed to a team project for monitoring abnormal actions at an airport using YOWO and human pose estimation models. The system successfully detected multiple abnormal actions, such as falling down and dashing, in real-time.

  ## Project Overview
  Developed an action recognition system for airport security to monitor and detect abnormal human behaviors using YOWO (You-Only-Watch-Once) and human pose estimation techniques. The system was optimized for real-time performance to ensure prompt alerts and responses.

  ## Objective
  To create a real-time action recognition system capable of identifying multiple abnormal actions (e.g., falling down, dashing) in crowded airport environments, enhancing security and safety measures.

  ## Process and Workflow

  ### Model Design and Implementation
  - **YOWO (You-Only-Watch-Once)**:
    - Implemented YOWO for video-based action recognition, leveraging its efficiency in spatiotemporal feature extraction.
    - Trained the model to recognize abnormal behaviors, focusing on falling and dashing actions.
  - **Human Pose Estimation**:
    - Integrated human pose estimation models to identify key body movements and postures.
    - Extracted pose keypoints and trajectories to validate action predictions and reduce false positives.

  ### Data Preparation
  - Collected and annotated a diverse dataset of video sequences with both normal and abnormal actions in airport scenarios.
  - Preprocessed video frames using OpenCV for augmentation and normalization:
    - Adjusted lighting, scaling, and rotation to simulate varied environments.
    - Labeled abnormal actions with detailed timestamps for training and evaluation.

  ### Model Training and Optimization
  - Fine-tuned YOWO on the annotated dataset to improve accuracy for detecting targeted actions.
  - Combined pose estimation results with YOWO predictions for robust recognition, especially in crowded or partially obscured environments.

  ## Deployment
  - Designed a pipeline to process live video feeds and generate real-time alerts for detected abnormal actions.
  - Integrated with airport security systems to provide actionable insights.

  ## Tools and Technologies
  - **Models**: YOWO, Human Pose Estimation 
  - **Programming**: Python
  - **Frameworks**: PyTorch, OpenCV
  - **Applications**: Airport Security, Abnormal Action Detection, Real-Time Surveillance

  ## Pose Estimation Output:
  ![Abnormal Action Recognition Example](/images/hpe.png)

collection: portfolio

---
