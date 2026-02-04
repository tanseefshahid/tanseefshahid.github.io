---
title: "0A- 3D Laser Inspection System for UMP Modules"
lang: en
slug: portfolio-0a
collection: portfolio
permalink: /en/portfolio/portfolio-0a/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Built a high-performance 3D inspection framework for UMP modules. Features automated coordinate system alignment using RANSAC and PCL, DB-driven FAI measurements, and multi-threaded processing.
---

## Overview

Developed a high-speed 3D inspection framework designed for the automated quality control of UMP modules. The system captures high-density point cloud data using laser profiles and performs real-time dimensional analysis. It utilizes a sophisticated C++ architecture to handle massive datasets, ensuring accurate metrology results against strict manufacturing tolerances.

## Key Features

### 1. Automated Coordinate System Alignment
- **Datum Establishment**: Automatically identifies Datum A (Plane) and Datum B/C (Edges) to establish a virtual coordinate system.
- **Algorithm**: Uses **RANSAC** for robust plane/line fitting and **Eigen** for matrix transformations (Roll/Pitch/Yaw correction).
- **Edge Detection**: Custom **PCL-based** algorithms to detect sub-millimeter edges within specific Regions of Interest (ROI).

### 2. Intelligent Data Processing
- **Multi-Threaded Architecture**: Dedicated threads (`CWinThread`) for parallel coordinate system calculation and FAI inspection to minimize cycle time.
- **Noise Reduction**: Statistical outlier removal and voxel grid filtering to clean raw scan data.
- **ROI Management**: Dynamic extraction of Regions of Interest for targeted analysis, improving processing speed.

### 3. FAI (First Article Inspection) System
- **Database Integration**: Fetches inspection specifications (USL, LSL, Nominal) directly from an **SQL Server** via ODBC.
- **Automated Validation**: Compares measured dimensions against spec limits in real-time, logging Pass/Fail results.
- **Reporting**: Generates detailed CSV logs and updates the central manufacturing database with inspection results.

## Technical Implementation

- **Language**: C++ (MFC Framework for UI/Threading)
- **3D Library**: **PCL (Point Cloud Library)** for segmentation, filtering, and feature estimation.
- **Math Library**: **Eigen** for high-performance linear algebra and transformation matrices.
- **Algorithm**: Custom RANSAC implementation for line/plane fitting, SVD for rigid transforms.
- **Database**: SQL Server integration using ODBC for specification management.

## Company

- **Hyvision**, Seoul, South Korea
- **Role**: 3D Metrology & AI Engineer
- **Period**: Aug 2025 – Present
