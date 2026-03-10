---
title: "Hierarchical Deep Learning for Multi-Granularity Apparel Classification"
excerpt: |
  Architected and trained a fine-grained visual categorization model for a commercial fashion application, accurately classifying apparel across a complex 3-depth hierarchical taxonomy with >95% top-level and >90% fine-grained accuracy across 73 classes.

  ## Project Overview

  Architected and trained a fine-grained visual categorization (FGVC) model for a commercial style and fashion application. The system accurately analyzes user-uploaded images and categorizes apparel across a complex, 3-depth hierarchical taxonomy.

  ## The Challenge

  Fashion datasets suffer from severe class imbalance and massive intra-class variance. The system needed to mathematically respect the nested relationship of the clothing categories (e.g., Upper Body -> Shirt -> Polo).

  ## Technical Approach & Architecture

  ### Hierarchical Classification Strategy
  - Restructured the dataset into a 3-depth nested ontology.
  - Engineered a custom classification head on top of a **ResNet50** backbone with transfer learning from ImageNet.

  ### Data Curation & Robustness
  - Addressed severe class imbalances using advanced sampling strategies and weighted loss functions (e.g., Focal Loss).
  - Implemented dynamic data augmentation pipelines utilizing **OpenCV** and **PyTorch**.

  ### Pipeline Optimization
  - Optimized hyperparameters, learning rate schedules (Cosine Annealing), and batch sizes.

  ## Impact & Results
  - **>95% accuracy** for depth 1 and depth 2 categorizations.
  - **>90% accuracy** across 73 fine-grained classes.

  ## Tools and Technologies
  - **Deep Learning Architecture:** ResNet50, Hierarchical Classification / Multi-Task Learning
  - **Languages & Frameworks:** Python, PyTorch, TensorFlow, OpenCV
  - **Techniques:** FGVC, Transfer Learning, Imbalanced Data Handling

collection: portfolio
---
