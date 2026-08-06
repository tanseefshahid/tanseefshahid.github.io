---
title: "Hierarchical Fine-Grained Visual Categorization (FGVC) with Deep CNNs"
lang: en
slug: portfolio-06
collection: portfolio
permalink: /en/portfolio/portfolio-06/
teaser: /images/architecture_apparel.png
excerpt: |
  Hierarchical ResNet50-based classification system handling severe class imbalance and high intra-class variance across a 3-depth taxonomy of 73 classes (&gt;95% top-level, &gt;90% fine-grained). Hierarchical FGVC and class-imbalance techniques generalize to medical diagnosis, species recognition, defect classification, and 3D model categorization.
order: 10
category: "Perception"
tags: ["ResNet50", "FGVC"]
blurb: "ResNet50 hierarchical classifier handling severe class imbalance across a 3-depth taxonomy of 73 classes — 95%+ top-level, 90%+ fine-grained."
company: "PERSPECTIVE Corp."
role: "3D Reconstruction & Computer Vision Researcher"
period: "Dec 2021 — Apr 2025"
location: "Seoul, South Korea"
---

## Project Overview

Architected and trained a fine-grained visual categorization (FGVC) model for a commercial style and fashion application. The system accurately analyzes user-uploaded images and categorizes apparel across a complex, 3-depth hierarchical taxonomy, enabling highly specific virtual fitting and automated wardrobe tagging.

## The Challenge

Fashion datasets suffer from severe class imbalance and massive intra-class variance (e.g., distinguishing between visually similar garments like a cardigan and a light jacket). Rather than utilizing a flat 73-class architecture—which often leads to gradient confusion and poor performance on rare items—the system needed to mathematically respect the nested relationship of the clothing categories (e.g., Upper Body -> Shirt -> Polo).

## Technical Approach & Architecture

<div style="text-align: center;">
  <img src="/images/architecture_apparel.png" alt="Hierarchical Apparel Classification Architecture">
</div>

### Hierarchical Classification Strategy
- Restructured the dataset into a 3-depth nested ontology: Major categories (Upper Body, Lower Body, Dresses, Coats), Sub-categories (Shorts, Skirts, Shirts), and Fine-grained classes (Denim Shorts, Gym Shorts, Cardigans).
- Engineered a custom classification head on top of a **ResNet50** backbone, fine-tuned using transfer learning from ImageNet. The custom head was designed to output multi-level predictions, allowing the network to learn shared high-level features before branching into highly specific fine-grained feature extraction.

### Data Curation & Robustness
- Curated and rigorously annotated a diverse, multi-source dataset.
- Addressed severe class imbalances in niche clothing items using advanced sampling strategies and weighted loss functions (e.g., Focal Loss).
- Implemented dynamic data augmentation pipelines utilizing **OpenCV** and **PyTorch** (color jitter, affine transformations, and random cropping) to force the model to learn structural garment features rather than relying on color or studio lighting.

### Pipeline Optimization
- Optimized hyperparameters, learning rate schedules (e.g., Cosine Annealing), and batch sizes to ensure smooth convergence across all 73 classes simultaneously.

## Impact & Results
- **Exceptional Top-Level Accuracy:** Achieved **>95% accuracy** for depth 1 and depth 2 categorizations, ensuring that the system almost never confused fundamental garment types.
- **State-of-the-Art Fine-Grained Precision:** Successfully attained **>90% accuracy** across the heavily imbalanced, maximum-depth 73 classes, providing the style app with highly reliable, automated tagging for nuanced fashion recommendations.

## Tools and Technologies
- **Deep Learning Architecture:** ResNet50, Hierarchical Classification / Multi-Task Learning
- **Languages & Frameworks:** Python, PyTorch, TensorFlow, OpenCV
- **Techniques:** Fine-Grained Visual Categorization (FGVC), Transfer Learning, Imbalanced Data Handling
