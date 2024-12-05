---
title: "Gas Boilers Text Extraction and Pipe Detection"
excerpt: |
  Developed a system for extracting text from boiler plates and detecting gas pipes for safety monitoring. The solution utilized Tesseract-OCR for text recognition and MobileNetSSD for real-time pipe detection.

  ## Project Overview
  Designed and implemented a safety monitoring system for gas boilers to extract critical text information from boiler plates and detect gas pipes. The system enhances safety by automating inspections and identifying potential hazards.

  ## Objective
  To ensure safety in gas boiler installations by automating the extraction of boiler plate information and detecting gas pipes for inspection and monitoring purposes.

  ## Process and Workflow

  ### Text Extraction from Boiler Plates
  - Used **Tesseract-OCR** to extract text from images of boiler plates.
  - Preprocessed images to improve OCR accuracy:
    - **Noise Reduction**: Removed unwanted artifacts.
    - **Contrast Adjustment**: Enhanced text visibility for better recognition.
  - Validated and formatted extracted text to ensure reliability and usability for inspections.

  ### Gas Pipe Detection
  - Implemented **MobileNetSSD** for detecting gas pipes in images.
  - Fine-tuned the model on a custom dataset of gas pipes under diverse conditions.
  - Optimized the detection pipeline for real-time performance to support immediate safety checks.

  ### Deployment
  - Integrated the text extraction and pipe detection modules into a single automated pipeline.
  - Designed the system to process live camera feeds or pre-recorded images for flexible deployment in different environments.

  ## Key Achievements
  - Automated the extraction of critical safety information from boiler plates, reducing manual effort.
  - Developed a reliable gas pipe detection model capable of operating in real-time.
  - Improved safety monitoring processes by providing accurate and actionable insights.

  ## Tools and Technologies
  - **Text Recognition**: Tesseract-OCR
  - **Object Detection**: MobileNetSSD
  - **Programming**: Python
  - **Frameworks and Libraries**: OpenCV, TensorFlow
  - **Applications**: Gas Boiler Safety, Inspection Automation

  ## Takeaways
  This project highlights expertise in OCR, object detection, and safety automation, showcasing the ability to develop real-world solutions for critical monitoring tasks.
  keywords: "Tesseract-OCR, MobileNetSSD, Safety Automation, Gas Boiler Monitoring, Python"
collection: portfolio
---
