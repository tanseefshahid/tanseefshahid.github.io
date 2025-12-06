---
title: "10- Gas Boilers Text Extraction and Pipe Detection"
lang: en
slug: portfolio-10
collection: portfolio
permalink: /en/portfolio/portfolio-10/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Developed a system for extracting text from boiler plates and detecting gas pipes for safety monitoring. The solution utilized Tesseract-OCR for text recognition and MobileNetSSD for real-time pipe detection.
---

## Project Overview
Designed and implemented a safety monitoring system for gas boilers to extract critical text information from boiler plates and detect gas pipes. The system enhances safety by automating inspections and identifying potential hazards.

## Process and Workflow

### Text Extraction from Boiler Plates
- Used **Tesseract-OCR** to extract text from images of boiler plates.
- Preprocessed images to improve OCR accuracy: noise reduction and contrast adjustment.
- Validated and formatted extracted text to ensure reliability for inspections.

### Gas Pipe Detection
- Implemented **MobileNetSSD** for detecting gas pipes in images.
- Fine-tuned the model on a custom dataset of gas pipes under diverse conditions.
- Optimized the detection pipeline for real-time performance.

### Deployment
- Integrated the text extraction and pipe detection modules into a single automated pipeline.

## Tools and Technologies
- **Text Recognition**: Tesseract-OCR
- **Object Detection**: MobileNetSSD
- **Programming**: Python
- **Frameworks and Libraries**: OpenCV, TensorFlow

collection: portfolio
