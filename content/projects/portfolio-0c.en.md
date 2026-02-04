---
title: "0C- 3D Rendering Engine with Node-Based Workflow Editor"
lang: en
slug: portfolio-0c
collection: portfolio
permalink: /en/portfolio/portfolio-0c/
teaser: /assets/images/portfolio/placeholder.svg
excerpt: |
  Built a flexible 3D inspection platform featuring a visual node editor. Users can design custom metrology workflows by connecting processing nodes for alignment, measurement, and defect detection.
---

## Overview

Developed a modular, node-based 3D inspection engine designed to offer greater flexibility than traditional hard-coded metrology software. The system allows users to construct custom inspection pipelines by visually connecting nodes, making it easy to adapt to new part geometries or inspection requirements without recompiling code.

<div className="my-8 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
  <video 
    controls 
    className="w-full" 
    poster="/assets/images/portfolio/placeholder.svg"
  >
    <source src="/assets/videos/nodegraph_demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

## Key Features

### 1. Visual Node Editor
- **Drag-and-Drop Interface**: intuitive canvas for adding and connecting processing nodes.
- **Node Library**: Comprehensive set of pre-built nodes for geometry creation, measurement, and logic.
- **Execution Flow**: Visualizes the data flow and execution order, with real-time feedback on node status.

### 2. Specialized Node Types
- **Geometry Nodes**: RANSAC/PCA Line fitting, Plane fitting (Least Squares/RANSAC), Circle & Cylinder construction.
- **Inspection Nodes**: Datum alignment (Datum A/B), Matrix calculation, and FAI (First Article Inspection) automated testing.
- **Processing Nodes**: Point cloud filtering (SOR), Boundary detection, and Edge detection.
- **Data Nodes**: Support for PCD/PLY point clouds, CSV-based specification loading, and ROI management.

### 3. Advanced Architecture
- **ECS (Entity-Component-System)**: Built on a pure ECS architecture for high performance and decoupling of data from logic.
- **Plugin System**: Extensible `INodePlugin` interface allows adding custom algorithms and node types via external DLLs.
- **.NET 8 & WPF**: Modern tech stack ensuring high responsiveness and native Windows integration.
- **3D Rendering**: Integrated **Helix Toolkit** for hardware-accelerated visualization of point clouds and inspection results.

## Technical Implementation

- **Framework**: .NET 8.0 (WPF)
- **Architecture**: Entity-Component-System (ECS) pattern
- **Rendering**: HelixToolkit.Wpf.SharpDX (DirectX 11)
- **Extensibility**: Custom Plugin API with NuGet support
- **Algorithms**: RANSAC, PCA, ICP, and geometric fitting libraries

## Company

- **Hyvision**, Seoul, South Korea
- **Role**: 3D Metrology & AI Engineer
- **Period**: Aug 2025 – Present
