---
title: "Camera Module Tilt Analysis (LJ-X8080)"
lang: en
slug: portfolio-0d
collection: portfolio
permalink: /en/portfolio/portfolio-0d/
teaser: /images/architecture_0d.png
excerpt: |
  Developed a high-performance C++ pipeline for processing Keyence LJ-X8080 laser scan data to compute the precise tilt of smartphone camera modules relative to reference brackets. Features parallel ICP matching, robust plane fitting, and automated ROI extraction.
---

## Overview

Built a robust and highly optimized 3D data processing pipeline in C++ explicitly designed for metrology tasks on smartphone camera modules. Utilizing laser scan point clouds acquired via a Keyence LJ-X8080 profile sensor, the system accurately aligns local reference templates and measures precise tilt angles (Tx, Ty, Rx, Ry) relative to base brackets.

<div style="text-align: center;">
  <img src="/images/architecture_0d.png" alt="Camera Module 3D Height Map Visualization">
  <p class="text-sm text-gray-400 mt-2">High-resolution pseudocolor topographic map of camera module scan data.</p>
</div>

## Key Features

### 1. High-Performance ICP Alignment
- **Coarse-to-Fine Alignment**: Employs a robust two-stage Iterative Closest Point (ICP) strategy for complex parts, ensuring templates snap into perfectly aligned positions despite initial rough offsets.
- **Parallel Processing**: Utilizes OpenMP to evaluate multiple templates and target features simultaneously, drastically reducing cycle time.
- **Dynamic Sampling**: Automatically estimates optimal point correspondence distances and downsamples dense laser data dynamically to maintain speed without sacrificing precision.

### 2. Precise ROI Extraction & Analysis
- **Dynamic Z-Banding**: Automatically calculates precise Z-height bounds from aligned templates to filter out irrelevant noise from thick bracket point clouds.
- **Complex Geometric Limits**: Supports extracting 3D points bounded by complex 2D shapes (ellipses, polygon rings) projected into the scan frame.

### 3. Iterative Robust Plane Fitting
- **Sigma Clipping (RANSAC-like)**: Traditional Least Squares plane fitting is overly sensitive to sensor noise and spikes common in laser data. Implemented an iterative robust fitting algorithm that repeatedly removes outliers beyond a strict threshold (e.g., ±40µm) until convergence.
- **Tilt Calculation**: Performs extreme precision relative tilt matrix calculations, comparing feature planes directly against their reference bases to output exact deviation angles.

## Technical Implementation

- **Core Languages**: **C++17** for maximum runtime and cache-level performance.
- **Libraries & Metrology Tools**:
    - **PCL (Point Cloud Library)**: Used for core point cloud object handling, KD-Tree formulation, and generic ICP components.
    - **Eigen3**: Powers all the matrix algebra, geometric transformations, and least-squares solving required for plane fitting.
    - **OpenMP**: For robust multithreading across independent alignment tasks.
- **Data Engineering**: Careful cache-aware structuring; the implementation distinctly separates ROI serial extraction (memory-bandwidth bound) and mathematical ICP convergence (CPU bound) to maximize hardware utilization.

## Company

- **Hyvision**, Seoul, South Korea
- **Role**: 3D Metrology & AI Engineer
- **Period**: Aug 2025 – Present
