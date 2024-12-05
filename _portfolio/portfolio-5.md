---
title: "Automatic License Plate Recognition System for Gas Stations"
excerpt: |
  Designed and implemented a real-time AI system to capture and recognize license plates of vehicles across fueling machines. Leveraged YOLOv2 for detection and OCR for text recognition, supported by synthetic datasets for robust performance in diverse conditions.

  ## Project Overview
  Developed a real-time Automatic License Plate Recognition (ALPR) system to monitor and identify vehicles at gas stations. The system captures license plates from live video feeds, rectifies distortions, and recognizes text for automated vehicle identification and monitoring.

  ## Objective
  To automate vehicle identification across all fueling machines in gas stations, enhancing operational efficiency, monitoring accuracy, and scalability under diverse conditions.

  ## Process and Workflow

  ### License Plate Detection
  - Used **YOLOv2** for detecting license plates in images and video streams.
  - Optimized the model for multi-license plate detection in a single frame, accounting for:
    - Varied lighting conditions.
    - Plate distortions and angles.
    - Diverse license plate formats.

  ### Data Preparation
  - Created and utilized **synthetic datasets** of license plates, simulating variations in:
    - Plate types (e.g., sizes, fonts, and formats).
    - Environmental factors (e.g., lighting, motion blur, and occlusions).
  - Augmented data with transformations like rotation, scaling, and cropping to improve model robustness.

  ### Optical Character Recognition (OCR)
  - Extracted detected license plates and processed them using OCR to recognize alphanumeric characters.
  - Preprocessed plates with techniques such as:
    - **Noise Reduction**: Improved text clarity by removing artifacts.
    - **Contrast Enhancement**: Enhanced character visibility for better recognition accuracy.

  ### Model Training and Optimization
  - Fine-tuned YOLOv2 for license plate detection, achieving high precision and recall.
  - Validated OCR outputs with post-processing to ensure consistent and formatted results.

  ### Deployment
  - Deployed the system for real-time operation, processing live video feeds from gas station cameras.
  - Designed the pipeline to handle multiple fueling stations simultaneously, automating vehicle identification and logging.

  ## Key Achievements
  - Automated the detection and recognition of license plates, significantly improving monitoring efficiency.
  - Developed robust models capable of handling diverse and challenging conditions.
  - Scaled the system to process live feeds across multiple fueling stations in real-time.

  ## Tools and Technologies
  - **Object Detection**: YOLOv2, Keras
  - **Character Recognition**: OCR (Tesseract or custom)
  - **Programming**: Python
  - **Frameworks**: PyTorch, OpenCV
  - **Applications**: Gas Station Monitoring, Vehicle Tracking, Automation

  ## Visual Demonstration
  ![License Plate Recognition Example](/images/alpr.png)

  ## Takeaways
  This project demonstrates expertise in AI-based object detection, OCR, and real-time system deployment, delivering scalable and efficient solutions for automation and monitoring.
  keywords: "License Plate Recognition, YOLOv2, OCR, Gas Station Monitoring, Object Detection, Python"
collection: portfolio

---


