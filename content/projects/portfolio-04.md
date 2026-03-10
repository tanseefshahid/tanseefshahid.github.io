---
title: "Single-Image to 3D Reconstruction Pipeline via OpenLRM & Neural Rendering"
excerpt: |
  Architected and trained an advanced image-to-3D generative pipeline capable of producing high-fidelity 3D meshes from a single 2D image using the OpenLRM framework, supported by a custom synthetic rendering pipeline for AR/VR, virtual staging, and gaming environments.

  ## Project Overview

  Architected and trained an advanced image-to-3D generative pipeline capable of producing high-fidelity 3D meshes from a single 2D image. The system leverages the OpenLRM (Large Reconstruction Model) framework, supported by a custom synthetic rendering pipeline, to enable real-time 3D asset generation for AR/VR, virtual staging, and gaming environments.

  ## The Challenge

  Extracting accurate 3D geometry from a single 2D image is an ill-posed problem due to severe depth ambiguity. Initial iterations using traditional multi-view pixel matching and Occupancy Networks struggled with depth resolution. While subsequent NeRF implementations improved visual quality, they required computationally expensive per-scene optimization. The objective was to build a fast, feed-forward network capable of generating accurate, textured 3D topology instantly.

  ## Technical Approach & Architecture

  ### Procedural Synthetic Data Generation
  - Built an automated rendering pipeline using **Blender (bpy scripting)** to process a large-scale CAD dataset of furniture.
  - Extracted 24 precise 360-degree views per object.
  - Integrated **ESRGAN** to upscale the rendered images.

  ### Model R&D and OpenLRM Fine-Tuning
  - Transitioned from NeRFs to a transformer-based **OpenLRM** architecture for rapid, feed-forward 3D generation.
  - Fine-tuned the model on high-resolution synthetic datasets.

  ### Metrology & Geometric Evaluation
  - Established rigorous evaluation protocols measuring surface normals and point-cloud deviations.

  ## Impact & Results
  - **High-Precision Geometry:** IoU of 0.80, Chamfer Distance of 0.08, Normal Consistency of 0.82.
  - **Scalable 3D Production:** Replaced NeRF optimizations with a feed-forward transformer pipeline.

  ## Tools and Technologies
  - **3D Deep Learning:** OpenLRM, NeRF, Occupancy Networks, Triplane Representations
  - **Rendering & Augmentation:** Blender (bpy), Objaverse techniques, ESRGAN
  - **Languages & Frameworks:** Python, PyTorch, Py3D

collection: portfolio
---
