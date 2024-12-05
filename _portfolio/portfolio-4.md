---
title: "Clothing Classification with Multi-Class Categories"
excerpt: |
  Designed and trained a multi-class classification model to categorize clothing into 73 classes. The project encompasses top wear, bottom wear, and dresses, providing a comprehensive solution for fashion classification.

  ## Project Overview
  Developed a deep learning model for classifying clothing items into 73 distinct categories across three main types: tops, bottoms, and dresses. This solution is tailored for applications in e-commerce, fashion search, and recommendation systems.

  ## Objective
  To build a robust and scalable clothing classification model capable of accurately identifying fine-grained categories of clothing items.

  ## Process and Workflow

  ### Data Preparation
  - Collected and curated a diverse dataset of clothing images from various sources.
  - Manually labeled the dataset into 73 classes across three primary categories:
    1. **Top Wear**: Shirts, T-shirts, polo shirts, hoodies, jackets, etc.
    2. **Bottom Wear**: Pants, skirts, shorts, jeans, dress pants, etc.
    3. **Dresses**: Long coats, female dresses, and other similar types.
  - Augmented the dataset using techniques like rotation, cropping, and color adjustments to improve model robustness.

  ### Model Design and Training
  - Used a deep learning architecture suitable for multi-class classification:
    - **Backbone Model**: Fine-tuned ResNet50 pre-trained on ImageNet for transfer learning.
    - **Classifier Head**: Added fully connected layers with softmax activation for predicting 73 classes.
  - Optimized model hyperparameters, including learning rate and batch size, for improved performance.

  ### Model Validation
  - Split the dataset into training (70%), validation (15%), and testing (15%) sets.
  - Evaluated the model using metrics like:
    - **Accuracy**: Overall and per-class.
    - **Precision, Recall, and F1-Score**: To handle class imbalances effectively.

  ### Deployment
  - Packaged the trained model into a deployable format using ONNX.
  - Designed a REST API for real-time classification of clothing images.

  ## Key Achievements
  - Achieved over 90% accuracy on the validation set and consistent performance across all classes.
  - Developed a scalable pipeline for training and deploying the model.
  - Successfully handled multi-class classification with diverse and imbalanced data.

  ## Tools and Technologies
  - **Frameworks**: PyTorch, TensorFlow
  - **Programming**: Python
  - **Data Augmentation**: OpenCV, Albumentations
  - **Deployment**: ONNX, Flask, Docker
  - **Applications**: E-commerce, Fashion Search, Recommendation Systems

  ## Visual Demonstration
  ![Classification Results](/images/clothing-classification-example.jpg)

  ## Takeaways
  This project demonstrates expertise in deep learning for multi-class classification, data preparation, and scalable deployment, tailored to the fashion and e-commerce industries.

collection: portfolio
---
