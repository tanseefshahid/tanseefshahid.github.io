---
title: "PolyWorks-Style 3D Alignment & Point Cloud Inspection App"
lang: en
slug: portfolio-0b
collection: portfolio
permalink: /en/portfolio/portfolio-0b/
teaser: /images/architecture_0b.png
excerpt: |
  Desktop application for aligning point clouds (PLY/PCD) to mesh models (STL/OBJ) using landmark-based SVD registration, ICP refinement, and interactive editing. Core registration and SE(3) alignment techniques transfer to SLAM loop closure, 3D scan-to-scan alignment, and AR/VR scene anchoring.
order: 7
category: "3D & SLAM"
tags: ["WPF", "SVD", "ICP"]
company: "Hyvision System"
role: "3D Metrology & Machine Learning Engineer"
period: "Aug 2025 — Present"
location: "Seoul, South Korea"
---

## Overview

Built a desktop-based 3D metrology application designed to replicate the alignment workflows of industry-standard software like PolyWorks. The tool enables users to align raw point cloud scans (PLY, PCD, TXT) to reference CAD models (STL, OBJ) using a combination of manual landmark selection and automated Iterative Closest Point (ICP) algorithms. It also includes comprehensive tools for data cleaning and batch alignment verification.

<div style="text-align: center;">
  <img src="/images/architecture_0b.png" alt="3D Alignment Tool Architecture">
</div>

<div class="screen-only my-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
  <video 
    controls 
    className="w-full" 
  >
    <source src="/assets/videos/alignment_demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<div class="print-only" style="text-align: center;">
  <img src="/assets/images/Interactive-3D-Registration.png" alt="Interactive 3D Registration application interface" />
</div>

## Key Features

### 1. 3D Alignment Workflow
- **Split-View Interface**: Side-by-side visualization of CAD and Point Cloud for precise landmark selection.
- **Landmark Registration**: Manual selection of 3+ point pairs to establish initial rough alignment.
- **ICP Refinement**: Automated "Best-Fit" algorithm (Iterative Closest Point) to fine-tune alignment accuracy.
- **Matrix Export**: Generates and exports 4x4 transformation matrices compatible with commercial metrology software.

### 2. Point Cloud Cleaning (Noise Removal)
- **Lasso Selection Tool**: Interactive, polygon-based lasso tool to manual select outliers and noise.
- **Multi-Angle Cleaning**: Supports additive selections from different camera angles before deletion.
- **Non-Destructive Workflow**: Visual highlighting of selected points before permanent removal.

### 3. Batch Verification
- **Automated Matching**: Algorithmically pairs large datasets of point clouds with transformation matrices based on filename patterns.
- **Visual Validation**: Loads and applies transforms to multiple datasets simultaneously for visual inspection of alignment quality.

## Technical Implementation

- **Core Engine**: Built with **Python** and **VTK/PyVista** for high-performance 3D rendering.
- **Algorithms**: 
    - **Landmark Transform**: SVD-based rigid body transformation from paired points.
    - **ICP**: Point-to-plane and point-to-point variants for fine registration.
- **UI Framework**: **PyQt/PySide** for the split-panel interface and interactive toolbar controls.
- **Data Handling**: Efficient processing of large point clouds (>1M points) with optimized rendering pipelines.

## Company

- **Hyvision**, Seoul, South Korea
- **Role**: 3D Metrology & Machine Learning Engineer
- **Period**: Aug 2025 – Present
