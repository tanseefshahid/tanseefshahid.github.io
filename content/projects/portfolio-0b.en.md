---
title: "0B- PolyWorks-Style 3D Alignment Tool"
lang: en
slug: portfolio-0b
collection: portfolio
permalink: /en/portfolio/portfolio-0b/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Developed a professional 3D metrology tool for aligning point clouds to CAD models. Features include landmark-based registration, ICP best-fit refinement, lasso-based noise removal, and batch verification of alignment results.
---

## Overview

Built a desktop-based 3D metrology application designed to replicate the alignment workflows of industry-standard software like PolyWorks. The tool enables users to align raw point cloud scans (PLY, PCD, TXT) to reference CAD models (STL, OBJ) using a combination of manual landmark selection and automated Iterative Closest Point (ICP) algorithms. It also includes comprehensive tools for data cleaning and batch alignment verification.

<div className="my-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
  <video 
    controls 
    className="w-full" 
    poster="/assets/images/portfolio/placeholder.svg"
  >
    <source src="/assets/videos/alignment_demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
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
- **Role**: 3D Metrology & AI Engineer
- **Period**: Aug 2025 – Present
