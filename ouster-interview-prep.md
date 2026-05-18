# Ouster Interview Prep — Handoff Document

**Purpose:** This document hands off the full context of my Ouster interview prep work so a new conversation can start cold and pick up where we left off. Read this top to bottom before doing anything else.

**Candidate:** Muhammad Tanseef Shahid
**Currently based in:** Seoul, South Korea
**Citizenship:** Pakistani
**Current role:** SLAM & 3D Metrology Engineer at Hyvision System (since Aug 2025)

---

## ⚡ LATEST UPDATES (read this section first)

Three big updates from the most recent prep session that change strategy materially. The rest of the doc still applies but THESE sections take precedence:

### Update 1: Custom Loss Story Is Real

**Earlier in this prep I assumed I had no real custom loss to talk about.** That was wrong. I have shipped a real combined Dice + Focal Tversky loss for defect segmentation. Full code is preserved in section "Custom Loss — The Real Story" below.

This changes interview strategy: **lead with the defect segmentation custom loss when asked**, not the hierarchical classifier. Full new strategy and the 90-second walkthrough script are in that section.

### Update 2: VP of Software is First Meeting

First scheduled interview is with the **VP of Software**, likely early next week. This is almost certainly NOT a coding interview. It's a hiring-manager-style conversation about background, motivation, and project depth. Don't burn the weekend on coding drills — focus on:

- Owning my 3 anchor projects cold (elevator pitches, architecture diagrams, follow-up questions)
- "Why Ouster / Why Now" answer
- "Why looking to leave Hyvision after ~10 months" answer (**TENURE: Aug 2025 to May 2026 = ~9-10 months, NOT 3 months**)
- Good questions to ask the VP back

### Update 3: "LIDAR-class point cloud" Phrasing is Slightly Stretched

The resume bullet says "LIDAR-class point cloud data" but my actual experience is Keyence LJ-X8080 structured-light laser profiler, not time-of-flight LIDAR. Different sensor physics, same downstream algorithms. The cover letter already has the right disclaimer. Prepared answer for "what LIDAR have you worked with?" is in the "Critical Risk Areas" section below.

---

## Why This Opportunity Matters

Ouster is an unusually high-stakes opportunity for me. Key reasons:

- **Salary:** USD $162,000-$180,000 + equity (substantially above my current trajectory)
- **Visa path:** Sponsored visa to US or Vancouver, BC office; potential path to PR and eventually citizenship
- **As a Pakistani citizen in Korea, this is a once-in-several-years opportunity** — well-funded mid-stage LIDAR company hiring senior ML talent with open immigration support

**Current interview status:** First meeting being scheduled, likely early next week. The recruiter mentioned this will be a meeting with the **VP of Software**, not a coding round. Likely format: hiring-manager-style conversation about background, motivation, and project depth — possibly some technical deep-dive but not live coding.

I am prepping aggressively across the weekend (2-3 hours weekdays, 6-8 hours weekend days) with the goal of being interview-ready by Monday.

---

## The Ouster Role: Job Description Summary

**Title:** Machine Learning Engineer (Object Detection and Tracking)

**Compensation:** $162,000 - $180,000 base + equity + benefits

**Key responsibilities:**

- Architect Unified Models: Design and train DNN models that perform Object Detection and Tracking simultaneously, leveraging temporal information to improve consistency
- Research to Production: Evaluate state-of-the-art research papers and prototype these concepts (turning papers into code) and adapt them into robust, production-grade solutions
- Deep Model Customization: Go beyond standard libraries by implementing custom loss functions, modifying internal model architectures, and designing specific data augmentation strategies to squeeze out maximum performance
- Edge Optimization: Ensure high accuracy is matched by high efficiency. Optimize models for real-time inference and on-device deployment
- Data Strategy: Develop training recipes for data-constrained environments and effective post-training strategies

**Required qualifications:**

- 5+ years proficiency in Python and PyTorch
- 3+ years proficiency in C++ for production deployment and optimization
- Deep theoretical and practical understanding of modern object detectors (Transformers, YOLO variants, R-CNNs) and tracking algorithms (DeepSORT, Kalman Filters, Optical Flow)
- Proven experience NOT being dependent on "out-of-the-box" APIs; track record of modifying model architectures via extensive experimentation
- Experience improving model generalization with limited data using Transfer Learning, Domain Adaptation, or Few-Shot Learning
- Strong grasp of linear algebra and probability as it applies to custom loss function design and geometric 3D vision

**Preferred:**

- Hands-on 3D Point Cloud (LiDAR) experience — "massive plus"
- TensorRT, ONNX Runtime, NVIDIA Jetson

---

## What's in the Ouster Resume I Submitted

The resume is at `src/app/resume/ouster/page.tsx` in this repo. Key positioning decisions:

**Summary positioning:** Lead with detection/tracking + custom loss + foundation models + edge deployment + LIDAR-class point cloud data.

**Job titles reframed for ML angle:**
- Ellexi → "Machine Learning Engineer (Detection, Tracking & Edge AI)"
- PERSPECTIVE → "Machine Learning Engineer (Architecture & Foundation Models)"
- Luxolis → "Machine Learning & 3D Perception Engineer"
- Hyvision → "3D Perception & C++ Engineer"

**Experience ordering:** Ellexi placed first (out of chronological order) because YOLO + DeepSORT + Jetson is closest match to Ouster's job description. PERSPECTIVE second to demonstrate architecture-customization credibility.

**Key resume claims (some are accurate, some are GENEROUS framing — see "Risk Areas" below):**

1. "Designed a custom PyTorch loss function for a hierarchical ResNet50 classifier" (PERSPECTIVE)
2. "Architecture Modification of OpenLRM (Large Reconstruction Model): modifying internal layers, conditioning strategies, and view-rendering heads"
3. "Latent Diffusion Fine-Tuning with Custom Conditioning"
4. "Fine-tuned U2Net architecture with custom alpha-matting loss"
5. Custom multi-task loss for hierarchical classification reaching >95% top-level and >90% fine-grained accuracy on 73 classes

**Publications listed at the end:**

- Munir, A., Soomro, S., **Shahid, M.T.**, Soomro, T.A., Choi, K.N. "Hybrid active contours driven by edge and region fitting energies based on p-Laplace equation," IEEE Access, 2019.
- Memon, A., Soomro, S., **Shahid, M.T.**, Munir, A., Niaz, A., Choi, K.N. "Segmentation of Intensity-Corrupted Medical Images Using Adaptive Weight-Based Hybrid Active Contours," Computational and Mathematical Methods in Medicine, 2020.

---

## The Ouster Cover Letter

The cover letter is at `src/app/cover-letter/ouster/page.tsx`. Structure:

1. Hook: mirrors Ouster's JD language about custom loss/architecture, low-data regimes, edge inference, and LIDAR fit
2. Detection + tracking war stories (ALPR, Incheon Airport, Luxolis 6-camera YOLO)
3. Architecture customization paragraph (custom multi-task loss + OpenLRM modification)
4. Low-data regimes paragraph (FoundationPose + synthetic data)
5. LIDAR/point cloud paragraph with **explicit honest disclaimer**: "While LJ-X8080 is structured-light line laser rather than time-of-flight LIDAR, the downstream data structures and algorithms (point clouds, registration, primitive fitting, pose estimation) are the same."
6. Edge deployment + math foundation + publications
7. Visa paragraph (open to US or Vancouver — Global Talent Stream framing)
8. Close + portfolio link

---

## Critical Risk Areas to Manage in the Interview

### Risk #1: The "Custom Loss" Claim — STRATEGY REWRITTEN (see Update 1 at top)

**MAJOR UPDATE:** Earlier in prep I thought I had no real custom loss to point to. **I was wrong.** I have a fully shipped combined Dice + Focal Tversky loss for defect-detection segmentation. Full code is in the new section "Custom Loss — The Real Story" below.

**The new strategy is offensive, not defensive:**

When asked about custom loss in the interview, **lead with the defect segmentation work**. Do NOT point to the hierarchical classifier — that one was just weighted multi-task cross-entropy and the resume framing on it was loose.

**Prepared 90-second walkthrough script** (the centerpiece answer for custom loss questions):

> "I worked on a segmentation problem for industrial defect inspection. The challenge was that target defects were tiny — sometimes just a handful of pixels in an image with millions of background pixels. Standard cross-entropy and even standard Dice loss failed because the class imbalance was severe and the network just learned to predict 'background' everywhere.
>
> I built a combined loss: 50% Dice loss plus 50% Focal Tversky loss. Dice handles the spatial overlap — keeps the predicted region coherent and well-shaped. Focal Tversky handles two things: the Tversky index gives me asymmetric control over FP vs FN through α and β parameters, and the focal exponent γ makes the network concentrate gradient signal on hard examples.
>
> Our customer cared much more about missing defects than about false alarms, so I set α=0.2, β=0.8 — heavy penalty on FN. γ=2 gave good focusing on hard examples without destabilizing training. 50/50 between the two losses was the empirical sweet spot — I tried 30/70 and 70/30 and equal was best.
>
> If I were redoing this now I'd consider Lovász hinge loss instead of Dice for nicer IoU optimization properties, or a learnable α/β where the model adapts the FP/FN trade-off per region. But for our use case the static combined loss worked well.
>
> Happy to walk through the implementation if useful — it's a couple of `nn.Module` classes plus the training loop combination."

**If they specifically ask about the hierarchical classifier bullet from the resume:**

> "I should clarify the resume framing on that hierarchical classifier bullet — that one used weighted multi-task cross-entropy with class weights, not a fully custom loss. The 'custom' framing was a stretch. The custom loss work I'm most proud of is actually a different project: a combined Dice + Focal Tversky loss for defect segmentation. Want me to walk through that one instead?"

This is honest, owns the imprecision, and pivots to the stronger real story. The interviewer almost always says yes to the redirect because the defect segmentation work is a stronger story than the hierarchical classifier ever was.

**IMPORTANT: Why this is the right move now:**

The earlier "soft hierarchical CE I'd build this weekend" plan is no longer needed. I have a better story already. Don't waste prep time on fabricated artifacts. Spend it on owning the real Dice + Focal Tversky story cold.

### Risk #2: Other "Architecture Modification" Claims

Need to similarly calibrate before the interview:

- **OpenLRM "architecture modification"** — did I actually modify internal layers, or did I fine-tune the existing architecture? If just fine-tuning, frame as "fine-tuned OpenLRM on a custom dataset" not "modified internal architecture."
- **Latent Diffusion "custom conditioning"** — if I used the LADi-VTON repo as-is and just trained on my data, frame as "fine-tuned LADi-VTON on a custom dataset," not "modified the conditioning mechanism."
- **U2Net "custom alpha-matting loss"** — if loss was standard, frame as "fine-tuned U2Net on a custom dataset with task-specific training recipe."

**Strategy:** Don't volunteer corrections unprompted. But if asked specifically about any of these, use the same pattern as the custom loss reframe: "I want to be precise — what I actually did was X. The genuine custom part was Y."

### Risk #3a: "Why did you leave Luxolis after only 3 months?"

**Tenure:** May 2025 - Jul 2025 = **3 months**. The VP will probably ask about this; it's the shortest stint on the resume and it sits right next to the Hyvision short stint, which makes the recent career arc look like job-hopping unless I handle it well.

**Real reason:** I was the sole 2D/3D vision engineer at Luxolis. The company hit funding issues, the team was contracting, and payroll became uncertain. Hyvision approached me with a stable offer at significantly better pay and a real 3D metrology team. I took the offer.

**Prepared answer:**

> "Luxolis was a 3-month stint, and I want to give you the honest context. I joined as the sole 2D and 3D vision engineer — the entire vision side of the company was me. While I was there I shipped two meaningful pieces of work: a real-time 360° defect detection system with a 6-camera Basler array and PLC integration, and an eye-in-hand 6-DoF pose estimation pipeline using FoundationPose and ICP for autonomous CNC machining.
>
> The reason I left is that the company hit funding issues — payroll became uncertain and the team around me was contracting. With me being the only person on the vision side, there wasn't a clear path to continue building. Hyvision approached me with a stable offer, significantly better pay, and a 3D metrology team I'd be joining rather than carrying alone. I took the offer.
>
> So the short tenure at Luxolis isn't a pattern of job-hopping — it was responding to instability at a startup by moving to a more stable role at a larger company. The 3-and-a-half-plus years at PERSPECTIVE before that, and the 2-year stint at Ellexi before that, are the more representative shape of my career."

**Key tactical notes for delivering this answer:**

- **Frontload the deliverables before the reason.** The interviewer should hear "I shipped X and Y" before they hear "I left." This forms a "this person did real work" impression before the "why did they leave" impression starts forming.
- **The "sole vision engineer" framing converts the short tenure into a senior-engineer signal.** I operated independently, owned the entire vision function, shipped without senior peers. That's a senior trait.
- **"Funding issues" is the right phrasing.** Don't say: "the CEO was incompetent," "they couldn't pay me," "the company was a mess," "I should have seen the red flags." Stick to neutral, factual language: "funding issues," "the team was contracting," "payroll became uncertain."
- **Don't over-explain.** Give enough to satisfy the legitimate-reason check, then stop. No detailed funding-round histories.
- **The closing pivot to PERSPECTIVE (3.5y) and Ellexi (2y) is the most important sentence.** It reframes the recent short stints as outliers inside a pattern of multi-year commitments. Practice it confidently.

**If they push with "but joining a struggling company is its own kind of red flag":**

> "Fair point. The honest version is that the funding situation wasn't visible from the outside when I joined — they were on a contract with a major Korean CNC manufacturer and the engineering work was concrete. The instability emerged a couple of months in. With the benefit of hindsight, I'd have done more diligence on financial runway before joining. Lesson learned."

This is the correct senior-engineer answer: own the joining decision, acknowledge what you'd do differently, don't blame the company.

### Risk #3b: "Why are you looking to leave Hyvision?"

**TENURE CORRECTION:** I joined Hyvision in **August 2025**. Today is **May 2026**. So my tenure at Hyvision is approximately **9-10 months**, NOT 3 months. The VP will likely ask why I'm looking after less than a year, which is a softer question than "after 3 months" but still worth handling carefully.

**Prepared answer:**

> "I joined Hyvision in August 2025 — so I've been there about 9-10 months now. The work has been good: I've shipped a high-speed 3D laser inspection pipeline for an Apple smartphone-camera-module project, built a PolyWorks-style alignment application, and designed the node-based 3D rendering engine with the modular plugin system. So I've delivered concrete value in that time.
>
> The reason I'm looking is that the role has settled into mostly classical 3D metrology in C++. That's valuable work, and I'm strong at it, but the direction the company is going doesn't include the production ML and modern perception work I want to be central to in my next chapter. I have six-plus years across detection, tracking, foundation models, and generative AI, and I want to be back at the center of that. Ouster is at the top of my list because the job description is almost a one-to-one mapping of what I want to do — object detection and tracking, custom loss design, architecture modification, edge optimization, all on LIDAR-class 3D data. It's not that Hyvision is wrong; it's that Ouster is right."

**Key things this answer does:**
- Names the tenure accurately ("about 9-10 months")
- Demonstrates I shipped real work in that time (not a job-hopper who quit early)
- Reframes departure as "moving toward something" not "running away"
- Names Ouster specifically with concrete reasons
- Doesn't bad-mouth Hyvision

**If they push further with "but isn't 10 months still short?":**

> "It is shorter than the 3-4 year stretches I had at PERSPECTIVE and Ellexi, and I'm aware of that. The honest version is that I evaluated Hyvision optimistically when I joined and the role evolved differently from what I expected. I'd rather be deliberate now about finding the right next role than spend another year drifting from where I want my career to go. My intent is for the next role to be a 3-5 year commitment, and Ouster is the kind of company I'd want to grow with."

### Risk #3c: The Combined Career Arc Question

The VP might ask about both short stints together, or combine them into a single "what's been going on the past year?" question. I need a single coherent narrative that ties Luxolis + Hyvision into one story.

**The career arc:**

| Role | Tenure | Length |
|------|--------|--------|
| Ellexi | Nov 2019 - Oct 2021 | 2 years |
| PERSPECTIVE | Dec 2021 - Apr 2025 | 3 years 5 months |
| Luxolis | May 2025 - Jul 2025 | 3 months |
| Hyvision | Aug 2025 - present | ~9-10 months |

Two stable multi-year stints, then two short ones in a row. The combined story:

**Prepared combined-arc answer:**

> "If you look at my full career arc, the pattern is a 2-year stint at Ellexi and a 3.5-year stint at PERSPECTIVE — those are the representative shape. Then 2025 became a transitional year for me. I left PERSPECTIVE in April 2025 because the company's direction shifted away from the 3D reconstruction work I wanted to focus on. I joined Luxolis as the sole 2D/3D vision engineer; that was a 3-month stint that ended because of funding issues at the company. Hyvision came in with a stable offer at much better pay, so I moved there in August. About 10 months in, I've shipped good work — the Apple smartphone-camera-module pipeline, the PolyWorks-style alignment app, the node-based 3D rendering engine — but the role has settled into mostly classical metrology, not the production ML work I want central to my career.
>
> So the two short stints aren't a pattern of restlessness. Luxolis was responding to instability at a startup. Hyvision was a stable landing pad while I figured out the right next chapter. Ouster is the next chapter — and I'm being deliberate about this one because I want it to be a 3-5 year commitment, not another transitional move."

**Key tactical notes:**

- **Anchor on the long stints first.** The first sentence frames the historical pattern as multi-year commitments. This is the lens I want them to read the rest through.
- **Name the transition explicitly.** "2025 became a transitional year" is a senior-engineer framing — it acknowledges the unusual pattern without being defensive about it.
- **Don't apologize for taking the Hyvision offer.** Moving from a struggling startup to a stable larger company for better pay is the *correct* decision. State it confidently.
- **Close with the commitment signal.** "3-5 year commitment, not another transitional move" tells the VP I'm not going to job-hop out of Ouster in a year. This is what they want to hear.
- **Don't apologize for the short stints in the closing.** State them factually and move on.

### Risk #4: The LJ-X8080 vs LIDAR Distinction

My laser profiler work is **structured-light line laser**, not time-of-flight LIDAR. Some Ouster engineers might point this out.

**Already addressed in the cover letter and in the Hyvision project prep doc.** The line to use: "Structured-light line laser is different from time-of-flight LIDAR in sensing physics — line laser is sub-millimeter precision over small areas, LIDAR is lower precision over large areas. But once you have a point cloud, the downstream algorithms (PCL, ICP, RANSAC, primitive fitting, pose estimation) are the same. My algorithmic experience transfers directly; the sensor-noise characteristics would need adaptation."

**ADDITIONAL DETAIL — the resume bullet "LIDAR-class point cloud data" is slightly stretched:**

The Keyence LJ-X8080 is not LIDAR. The exact sensor comparison:

| | LJ-X8080 (mine) | LIDAR (Ouster) |
|---|---|---|
| Sensing principle | Laser triangulation (project line, observe with camera) | Time-of-flight (round-trip pulse timing) |
| Range | ~80mm | Tens to hundreds of meters |
| Precision | Sub-micron / sub-millimeter | Centimeter-class |
| Output | 2.5D height map / dense small-area cloud | Sparse 3D cloud over large scene |
| Category | Structured-light laser profiler | Time-of-flight LIDAR |

If asked specifically "what LIDAR sensors have you actually worked with?" — prepared answer:

> "I want to be precise here. My production point cloud experience is on a Keyence LJ-X8080 laser profiler at Hyvision, which is structured-light line laser rather than time-of-flight LIDAR. The sensing physics is different, but once the data is in memory, the algorithms I work with daily — ICP, RANSAC, primitive fitting, SE(3) registration, PCL/Eigen-based pipelines — are exactly the same as LIDAR processing. I also worked with RGB-D depth at Luxolis, which is closer to LIDAR in some ways. I'd be ramping up on time-of-flight LIDAR characteristics specifically, but the algorithmic foundation transfers directly."

The cover letter already says this honestly. The resume bullet should ideally be tightened from "LIDAR-class point cloud data" to "industrial 3D point cloud data" but the cover letter disclaimer is enough cover if I get probed.

---

## Custom Loss — The Real Story (Dice + Focal Tversky)

**This is the centerpiece technical answer for any "custom loss" question.** Real shipped code from a defect segmentation project. Use this story, NOT the hierarchical classifier story, when probed on custom losses.

### The Problem

Industrial defect inspection segmentation. Target defects were tiny — sometimes a handful of pixels in an image with millions of background pixels. Standard cross-entropy and standard Dice loss both failed because the network would predict "background" everywhere and still achieve >99% pixel accuracy.

### The Solution

A combined custom loss: **50% Dice loss + 50% Focal Tversky loss**.

The math:

`Loss = 0.5 * Dice_Loss + 0.5 * Focal_Tversky_Loss`

Where:
- **Dice Loss** keeps the predicted region coherent and well-shaped (spatial overlap)
- **Focal Tversky Loss** handles class imbalance + asymmetric FP/FN cost + focuses gradient on hard examples
- **Tversky index** = `TP / (TP + α·FP + β·FN)` — α and β control FP vs FN penalty asymmetrically
- **Focal element** = `(1 - Tversky)^γ` — concentrates loss on hard examples (high γ = more focusing)

### Parameter Choices I Made

- **α = 0.2, β = 0.8** — heavy penalty on False Negatives because customer cost asymmetry: missing a defect was much more expensive than a false alarm (false alarms could be filtered downstream, missed defects shipped to customer)
- **γ = 2.0** — strong focusing on hard examples without destabilizing training
- **Dice/Focal Tversky weighting = 50/50** — tried 30/70 and 70/30 in both directions; equal was the empirical sweet spot

### Iteration History (Good Answer to "How Did You Arrive at This Loss")

> "I started with BCE + Dice — the standard combination for segmentation. It worked OK on large defects but completely failed on tiny ones because BCE's gradient gets washed out when 99% of pixels are background. I switched the BCE component to Focal Tversky specifically to handle the imbalance and to control the FP/FN trade-off, and the small-defect detection rate jumped significantly."

(The commented-out `# cost = (dice_loss_weightage * bce_loss_fn) + ((1-dice_loss_weightage) * dice_loss_fn)` line in the training loop literally shows this iteration.)

### The Actual Code (memorize the structure, not verbatim)

```python
import torch

class DiceLoss(torch.nn.Module):
    def forward(self, inputs, targets, smooth=1):
        # comment out if your model contains a sigmoid or equivalent activation layer

        # flatten label and prediction tensors
        inputs = inputs.view(-1)
        targets = targets.view(-1)

        intersection = (inputs * targets).sum()
        dice_loss = 1 - (2. * intersection + smooth) / (inputs.sum() + targets.sum() + smooth)
        Dice_BCE = dice_loss

        return Dice_BCE


class FocalTverskyLoss(torch.nn.Module):
    def __init__(self, alpha=0.2, beta=0.8, gamma=2, smooth=1e-6):
        super(FocalTverskyLoss, self).__init__()
        self.alpha = alpha
        self.beta = beta
        self.smooth = smooth
        self.gamma = gamma

    def forward(self, inputs, targets):
        inputs = inputs.view(-1)
        targets = targets.view(-1)

        # True Positives, False Positives & False Negatives
        TP = (inputs * targets).sum()
        FP = ((1 - targets) * inputs).sum()
        FN = (targets * (1 - inputs)).sum()

        Tversky = (TP + self.smooth) / (TP + self.alpha * FP + self.beta * FN + self.smooth)
        FocalTversky = (1 - Tversky) ** self.gamma

        return FocalTversky


# Initialization
alpha = 0.2
beta = 0.8
gamma = 2.0
dice_loss_weightage = 0.5

loss_fn = FocalTverskyLoss(alpha=alpha, beta=beta, gamma=gamma)
loss_dice_fn = DiceLoss()


# Training loop combined-loss line
cost = (loss_fn(hypothesis, gpu_Y) * (1 - dice_loss_weightage)) + \
       (loss_dice_fn(hypothesis, gpu_Y) * dice_loss_weightage)
cost.backward()
optimizer.step()
```

### Honesty Points to Be Ready For

If they read the code closely, two things to be honest about:

**1. The `Dice_BCE` variable name is a leftover artifact.**

The class returns dice loss only, but the variable is named `Dice_BCE`. That's because an earlier version combined Dice with BCE inside the same class. When I split them and ended up combining Dice with Focal Tversky externally instead, I forgot to rename the variable.

Prepared answer if asked:

> "Honest answer — that's a leftover from an earlier version where I had a combined Dice+BCE loss in a single class. When I split it out and ended up combining Dice with Focal Tversky externally instead, I forgot to rename the variable. Functionally it just returns the dice loss. I'd clean it up before code review."

**2. The model outputs sigmoid probabilities, not raw logits.**

The losses assume inputs are already sigmoid-passed. If asked about numerical stability:

> "The model outputs sigmoid probabilities — sigmoid as the final layer. So the loss functions operate directly on probabilities. The alternative would be to put the sigmoid inside the loss and have the model output raw logits, which is numerically more stable under mixed-precision training. I'd consider that pattern for production."

### Likely Follow-Up Questions (Prep Aloud)

1. **"Why combine Dice and Focal Tversky? Why not just one?"** → Each handles a different failure mode. Dice = shape/overlap coherence. Focal Tversky = imbalance + FP/FN asymmetry + hard-example focusing. Together they cover both axes.

2. **"How did you choose α=0.2 and β=0.8?"** → Customer cost asymmetry: FN >> FP. Started from standard 0.3/0.7, swept a few values, 0.2/0.8 hit the best operating point on PR curve.

3. **"What does γ=2 do mathematically?"** → `(1 - Tversky)^γ` — for easy regions (Tversky close to 1), loss decays toward zero; for hard regions (Tversky low), loss stays close to 1. γ=2 gives strong focusing without instability.

4. **"What's `.view(-1)` doing?"** → Flattens the tensor to 1D before doing the elementwise math.

5. **"Why the `+smooth` term?"** → Avoids division by zero when prediction and target are both empty. Numerical stability.

6. **"What would you do differently today?"** → Lovász hinge loss instead of Dice for direct IoU optimization. Learnable α/β that adapts per region. Maybe a focal version of the Dice term too.

7. **"How did this compare to baselines?"** → If I have real numbers, use them. If not: "On our internal eval set, the combined loss gave a meaningful improvement on small-defect detection over plain BCE+Dice. Performance on large defects was similar. I'd need to dig up my old logs for exact numbers." Don't fabricate specific percentages.

8. **"Did you also try focal loss for segmentation?"** → "Focal loss penalizes misclassified pixels heavily but doesn't directly optimize the Tversky-style FP/FN trade-off. For our FN-dominated cost structure, Focal Tversky was strictly better. If costs had been symmetric, they'd be closer."

### Weekend Prep for This Story

Do NOT need to write new code. The artifact exists. Spend ~2 hours:

1. **30 min:** Re-read the code, make sure I can explain every line
2. **30 min:** Find real numbers if any logs exist (W&B, notebooks, slack)
3. **15 min:** Practice the 90-second walkthrough aloud 3 times
4. **45 min:** Practice the 8 follow-up question answers aloud

---

## Project Deep-Dives (Three Anchor Projects)

I have detailed prep docs for these three projects in the prior conversation. The structure for each is: 60-second elevator pitch → architecture whiteboard → likely interview questions with strong answers → common follow-ups → behavioral story anchors.

### Project 1: Real-Time ALPR with YOLO + CRNN + DeepSORT (Ellexi)

**60-second pitch:**

> "At Ellexi I built a real-time automatic license plate recognition system for gas station automation. The pipeline is three stages: YOLO detects license plates in each camera frame, CRNN recognizes the characters on each detected plate, and DeepSORT tracks each vehicle across frames to associate plates with billing events. The hardest constraint was that we couldn't legally use real Korean license plate data, so I built a procedural synthetic data generator that produced photorealistic plates with varied lighting, perspective distortion, weather, and motion blur. The system reached 98% character recognition accuracy and 97% full-plate accuracy in production — entirely on synthetic training data."

**Architecture flow:**

Camera Feed → YOLO Plate Detection → Per-plate crop + warp → CRNN OCR (characters) → Track ↔ Plate Association → Billing System

Parallel: Vehicle Detector (YOLO) → DeepSORT Tracking (Kalman + Re-ID) → feeds Track ↔ Plate Association

Synthetic Data Pipeline trains YOLO + CRNN offline.

**Likely questions to prep aloud:**

1. Walk through DeepSORT in detail (Kalman state, Mahalanobis distance, appearance embeddings via Re-ID CNN, Hungarian assignment, track creation/deletion)
2. Why DeepSORT and not SORT or ByteTrack? (Occlusion handling, ID switch cost, compute budget OK)
3. Why CRNN for OCR? Why not TrOCR/transformer? (Latency budget, fixed format Korean plates)
4. Walk through the synthetic data pipeline (template generator, rendering, domain randomization, domain-matched backgrounds)
5. If you did this today, what would you change? (DETR for detection, diffusion-rendered plates, ByteTrack/BoT-SORT)
6. Hardest bug or failure mode? (Need to prep a real story — IR hotspot example given as template)
7. How did you measure 98% accuracy? What was in eval set? (Synthetic eval set + small permitted real-world eval set, confidence intervals)
8. How did you handle multi-camera architecture? (Per-camera tracker, cross-camera association at billing layer)

**Note on accuracy of this prep doc:** I told the assistant in the prior conversation that I need to think offline about whether this exactly matches what I built. The assistant agreed to move on but flagged that I should review and either confirm or send corrections.

### Project 2: Luxolis 6-DoF Pose Estimation with FoundationPose + ICP

**60-second pitch:**

> "At Luxolis I built an eye-in-hand 6-DoF pose estimation pipeline for autonomous CNC machining. We mounted an RGB-D camera on the drill head, and as the robot approached a workpiece, the system estimated the part's pose relative to the camera in real time. The model output was a 6-DoF transform that the CNC controller used to adjust its toolpath dynamically, eliminating manual fixturing. The pipeline had two stages: FoundationPose for initial pose estimation from RGB-D plus a CAD model, then ICP refinement on the point cloud to lock in sub-millimeter accuracy. The whole loop ran in real time on the production hardware."

**Architecture flow:**

RGB-D Camera (eye-in-hand) → RGB + Depth + CAD model → FoundationPose (initial pose hypothesis R, t in SE(3)) → Backproject depth → point cloud → ICP Refinement (point-to-plane) → Refined (R, t) → CNC Controller

**Likely questions to prep aloud:**

1. How does FoundationPose actually work? (Pose hypothesis generation via render-and-score with transformer scorer, then iterative refinement network. Foundation model trained on massive synthetic dataset, generalizes to novel CAD models at test time without retraining.)
2. Why still need ICP after FoundationPose? (FoundationPose gives few-mm accuracy; CNC needs sub-mm. ICP closes the gap with classical optimizer. Two-stage pattern: learned init + classical refinement.)
3. Explain ICP in detail. What variant? (Used **point-to-plane** ICP. KD-tree for nearest neighbor, SVD-based closed-form rotation, plane normals from CAD model target.)
4. How do you represent rotations? (Internally 4x4 homogeneous SE(3). FoundationPose output uses 6D continuous representation. Quaternions for storage. Avoid Euler due to gimbal lock.)
5. Failure modes of FoundationPose? (Symmetric objects, heavy occlusion / sensor noise, out-of-distribution CAD)
6. How would you adapt for LIDAR? (Sparser data: use BEV or range view, swap FoundationPose for PointPillars/CenterPoint-class detector. ICP stays the same. Multi-modal fusion with cameras helps.)
7. Latency budget? (Few hundred ms; CNC slow so OK. FoundationPose ~150-200ms dominates. Could distill if needed.)
8. Hardest part of production? (**IMPORTANT CORRECTION:** I confirmed the hand-eye calibration was given to me as a fixed transform, NOT done by me. So substitute one of these real stories: (a) depth quality on specular machined surfaces — added depth inpainting + minimum-valid-depth threshold; or (b) coordinate frame convention bug across 4 frames — added explicit frame-convention checks at each boundary.)

### Project 3: Hyvision Apple Project — Sub-Millimeter 3D Metrology in C++

**60-second pitch:**

> "At Hyvision System I work on a sub-millimeter 3D metrology pipeline for an Apple smartphone-camera-module project. The input is laser-scanned point cloud data from a Keyence LJ-X8080 line laser profiler. The pipeline does ROI extraction, robust plane and edge fitting with RANSAC, coordinate-frame estimation, parallel ICP best-fit alignment, and automated First Article Inspection — comparing measured dimensions against tolerance specifications in SQL Server. All in production C++ on top of PCL and Eigen, processing 1M+ point clouds in real time."

**Architecture flow:**

Keyence LJ-X8080 → Scan Aggregation (line scans → 2.5D height map) → ROI Extraction + Preprocessing → Primitive Fitting via RANSAC (plane, edges, holes) → Coordinate Frame Estimation → Parallel ICP Best-Fit → Dimensional Measurement (tilt Tx, Ty, Rx, Ry) → FAI Validation vs SQL Server → Pass/Fail

**Likely questions to prep aloud:**

1. How does laser profiler data become a point cloud? (Line laser triangulation gives 1D profile per scan. Translate part to stack profiles into 2.5D height map. Convert to point cloud by treating each pixel as 3D point. Structured-light line laser is different from time-of-flight LIDAR — but downstream algorithms are the same.)
2. Walk through RANSAC for plane fitting (Random 3-point sample, fit plane, count inliers within threshold, repeat N iterations, refit best plane on all inliers via SVD)
3. How handle near-symmetric features? (Three approaches: asymmetric feature anchoring like mounting holes, multi-hypothesis ICP enumeration, fixture-constrained initial pose space)
4. Why parallel ICP? How parallelized? (KD-tree nearest neighbor parallelizable across source points via OpenMP. Cross-covariance accumulation as parallel reduction. Batch parts in parallel — embarrassingly parallel.)
5. Why Eigen vs Python+NumPy? (Latency, integration with C++ stack, Eigen's expression templates avoid temporary allocations)
6. Tell me about a hard bug. (Trimmed-ICP residual story: standard ICP averaged residual including outliers at part edges, gave false-fail. Switched to trimmed ICP — discard worst 10% correspondences. Pass rate 94% → 99%. **Note: I told the assistant I need to verify this story matches what I actually did.**)
7. How does FAI vs SQL Server work? (Spec stored per-part-model in SQL: nominal, upper tol, lower tol, measurement procedure. Compare measured to nominal ± tolerance. Log every measurement for traceability — Apple QA audit trail.)
8. If LIDAR instead of laser profiler, what changes? (Sparser data: voxelize/sample first, tune RANSAC thresholds. Object segmentation step first since LIDAR scans whole scene. Temporal aggregation across sweeps. Intensity/reflectivity channel. Core C++ engineering — KD-trees, parallel ICP, Eigen — stays the same.)

---

## Behavioral & Personal Questions (CRITICAL for VP Meeting)

**The VP of Software meeting is at least 50% behavioral.** Technical project depth alone won't carry the conversation. These prepared answers cover the questions almost certain to come up.

**Format per question:**

- **Framing** — what they're really testing
- **Prepared answer** — actual words to say
- **Key beats** — bullet structure if I blank
- **Common follow-ups** — what they'll ask next

**About the placeholder stories:** Some answers (team conflict, biggest failure, project setback) use placeholder specifics — they show the right structure but the details need to be replaced with my actual career stories. Work on these at home with the new Claude conversation, swapping in real incidents.

---

### B1: "Why Ouster specifically?"

**Framing:** Highest-leverage motivation question. VPs reject candidates whose "why us" answer could apply to any company. Be specific about Ouster's product, technology, and the role.

**Prepared answer:**

> "Three reasons. First, Ouster sits at the intersection of two things I've worked on for years: production ML deployment and 3D geometric perception. Most companies do one or the other. Ouster's product requires both, and the job description reflects that — custom loss design, architecture modification, edge optimization, all on 3D point cloud data. That's a rare combination.
>
> Second, LIDAR-based detection is a problem where the algorithmic landscape is still evolving. PointPillars, CenterPoint, range-view detectors, transformer-based 3D detection — there's real room to contribute, not just import an existing solution. The job description explicitly mentions translating research papers into code and modifying internal architectures, which tells me Ouster respects that kind of work.
>
> Third, I'm at a career inflection point. My work at Hyvision is C++ metrology, which is valuable but narrower than what I want to focus on long-term. I want to be back at the center of applied ML on cutting-edge perception. A senior role at a LIDAR company building production detection systems is exactly the right move. And to be honest, Ouster as a company is at the right stage too — past Series A, real revenue, real customers in autonomous driving and robotics — so I'd be building production systems, not slideware."

**Key beats:**

- Production ML + 3D geometric perception is a rare combination, Ouster needs both
- LIDAR detection is algorithmically evolving, not solved — real room to contribute
- Career inflection: I want to be back at the center of applied ML
- Ouster stage: post-Series-A, real revenue, production work not slideware

**Common follow-ups:** "What specifically interests you about our products?" → mention LIDAR digital sensors, autonomous driving customer applications, the perception stack. "What do you know about our team?" → admit honestly what you've researched and ask them to expand.

---

### B2: "Where do you see yourself in 5 to 10 years?"

**Framing:** This is a commitment-signal question. They want to know: will you stay, will you grow with us, or are you using us as a stepping stone? Honest answer that signals long-term commitment but doesn't sound canned.

**Prepared answer:**

> "I think about this on two timelines. In the 5-year window, my goal is to grow on the deep technical track — senior to staff to principal engineer, contributing to architecture-level decisions, mentoring junior ML engineers, and being the person who can take a hard problem from research paper to shipped product without needing hand-holding at any stage. I want to be hands-on with code for the foreseeable future, not move into pure management.
>
> On the 10-year horizon, I'm more open. The deep technical track is one path I'd be excited to continue on. The other path I think about honestly is eventually starting something of my own — if the right opportunity emerges with the right co-founder, the right problem, and the right funding context. I'm not actively planning to leave a senior engineering role to do that — it would have to be a specific opportunity worth the risk. The five years between then and now would be spent learning everything I can about how great products are built and shipped, which is exactly what I'd be doing at Ouster.
>
> What I'm clear on is what I'm not optimizing for: I don't want to job-hop. The 3.5 years at PERSPECTIVE and 2 years at Ellexi are more the shape of how I want to commit to a role. Ouster is the kind of company I'd want to grow with, which is why I'm investing the time to find the right next role rather than taking the first offer."

**Key beats:**

- 5-year: deep IC track — senior → staff → principal, stay hands-on with code
- 10-year: deep IC continued OR start something if right opportunity emerges
- Either way, 5 years between now and then = learning how great products ship
- Closing commitment signal: not job-hopping, looking for the right multi-year role

**Common follow-ups:** "What kind of company would you found?" → "Something in applied AI for industrial or robotics applications — I don't have a specific idea yet, which is why I'm not doing it now. The thinking has to mature first." "Wouldn't you leave us in 2 years?" → "If I were going to do that I wouldn't be investing this much in finding the right next role. I'd be taking any offer that gets me close to founding faster."

---

### B3: "What can you bring to the team?"

**Framing:** Direct value-prop question. Not a humility moment — name your differentiators concretely.

**Prepared answer:**

> "Three things that I think are differentiated.
>
> First, the cross-stack experience. I'm comfortable on both sides of the model-to-deployment handoff — writing PyTorch training code in the morning and writing C++ production code in the afternoon. Most ML engineers can do one. The job description specifically calls out collaboration with the C++ application team, which tells me this is a real need, and it's something I do every week.
>
> Second, the experience taking research papers to shipped products. At PERSPECTIVE I took LADi-VTON, OpenLRM, and DensePose from research repos to a customer-facing AWS deployment. At Luxolis I integrated FoundationPose into a production robotic perception pipeline. These aren't theoretical claims — they're shipped systems with real customers using them. Ouster's job description says 'turning papers into code' is a core responsibility, and that's a track I can already execute.
>
> Third, the math-and-engineering combination. I have peer-reviewed publications on variational methods and PDEs from my Master's, and I work in production C++ daily on point cloud algorithms — RANSAC, ICP, SVD, sub-millimeter precision. Most candidates have either the theoretical depth or the engineering muscle. The combination is rarer, and the job description explicitly asks for both — 'strong grasp of linear algebra and probability as it applies to custom loss function design and geometric 3D vision' is a one-line summary of how I think.
>
> The honest version is that I'd also bring high agency and a strong work ethic. The visa relocation context means I'm bringing real commitment to making this work — this isn't a casual move for me."

**Key beats:**

- Cross-stack: PyTorch + C++ daily (rare combination, called out in JD)
- Research-to-production track: LADi-VTON, OpenLRM, FoundationPose shipped
- Math + engineering combo: publications + production C++ on point clouds
- Personal: high agency, strong commitment given relocation context

**Common follow-ups:** "Give me a concrete example of [one of these]." → pull from the project deep-dives. "How would you onboard?" → see B7 below.

---

### B4: "Tell me about a time you faced a difficult problem and how you solved it."

**Framing:** Classic STAR-method question. Pick a real story with technical depth and a clear "what I learned" close. PLACEHOLDER STORY — replace with real one at home.

**Prepared answer (placeholder — REPLACE WITH REAL STORY at home):**

> "[PLACEHOLDER: Pick a real story. Suggestions from your career:
>
> Option A — Ellexi: The IR hotspot bug on night-time license plates that broke OCR accuracy. (We discussed this earlier as a possible story for the ALPR project.)
>
> Option B — Hyvision: The trimmed-ICP residual bug at the Apple project where standard ICP averaged residuals including outliers and gave false-fails.
>
> Option C — PERSPECTIVE: A specific debugging story from the OpenLRM or LADi-VTON deployment — e.g., a training instability, a memory bottleneck, a customer-facing failure mode you fixed.]
>
> STAR structure to fill in:
>
> **Situation:** [Where you were, what the project was, what role you played, what was at stake]
>
> **Task:** [What specifically you needed to solve and why it was difficult]
>
> **Action:** [Specific steps you took — investigation, hypotheses you ruled out, what you tried that didn't work, what eventually worked, who you collaborated with]
>
> **Result:** [Concrete outcome — metrics improved, deadline met, customer issue resolved, downstream impact]
>
> **Lesson learned:** [The senior-engineer reflection. What you'd do differently next time, or what general principle you took away]"

**Key beats:**

- Pick a real story with technical depth — don't fabricate
- STAR structure: Situation → Task → Action → Result → Lesson
- The Lesson is the senior-engineer differentiator — most candidates skip it
- 2-3 minutes total when delivered well

**Common follow-ups:** "What would you have done differently?" → answer the lesson part if not already covered. "Did you share this with the team?" → talk about how you wrote it up or presented it.

---

### B5: "Tell me about a time you failed."

**Framing:** Senior interviewers value self-aware failure stories more than humble-brag fake failures. Pick a real one. Show what you learned. PLACEHOLDER — replace at home.

**Prepared answer (placeholder — REPLACE WITH REAL STORY at home):**

> "[PLACEHOLDER: A real failure to consider:
>
> Option A — Luxolis joining decision: Joining a startup without doing financial-runway diligence. You acknowledged this as a lesson in our earlier prep — 'with the benefit of hindsight, I'd have done more diligence on financial runway before joining.' This is a strong, mature failure story.
>
> Option B — A technical failure: A model you shipped that had a failure mode you didn't catch in testing, and how you discovered and fixed it in production.
>
> Option C — A timeline failure: A project where you committed to a deadline you couldn't hit and had to renegotiate scope.]
>
> Structure:
>
> **What happened:** [The specific failure, concretely]
>
> **Why it happened:** [Honest root cause — usually a judgment call, missing information, or process gap. Don't blame others.]
>
> **What I did about it:** [The immediate fix and the longer-term change in how you operate]
>
> **What I take from it:** [The lesson, framed as a principle that affects how you work now]"

**Notes on delivery:**

- Don't pick a "humble brag" failure like "I work too hard." Senior interviewers see through this immediately.
- Don't pick a failure that suggests you can't be trusted with responsibility (e.g., shipped broken code to production that hurt the customer). Pick one where the failure was contained and the lesson is clear.
- Owning the failure without blame-shifting is the senior signal. Avoid "well, the team didn't tell me X" or "the customer changed requirements." Even if true, frame it as "I didn't ask the right questions early enough."

**Key beats:**

- Real failure with real consequences (no humble-brag)
- Honest root cause, no blame-shifting
- What you did to fix it AND change how you operate
- The principle you carry forward

**Common follow-ups:** "Has it happened again?" → "Not in the same way, because of [what I changed]." "Did your manager/team know?" → "Yes, I flagged it as soon as I understood the scope. Hiding it would have been worse."

---

### B6: "How do you handle a situation where a client or stakeholder is causing delays or changing requirements?"

**Framing:** This tests whether you're a senior engineer who can manage upward and outward, or just a coder who needs requirements handed to you. Show maturity about how the world actually works.

**Prepared answer:**

> "First, I assume the delay or change is rational from their side — they have information or pressure I don't have visibility into. Reacting defensively or treating them as the adversary is the easy mistake.
>
> Concretely, my approach is:
>
> Step one: get the real picture. Schedule a short conversation, not an email thread. Ask open-ended questions about what's actually changing and why. Often what looks like 'the client is being difficult' turns out to be 'the client's downstream user found a problem we didn't anticipate.'
>
> Step two: separate the technical impact from the timeline impact. Quantify both honestly. If the change adds two weeks to the schedule, say so. If it kills 30% of the existing work, say so. Senior people respect honesty about cost more than optimistic estimates that slip later.
>
> Step three: bring options. Don't show up with just the problem. 'Here are three ways we can absorb this — option A keeps the deadline but cuts scope, option B keeps scope but extends two weeks, option C is somewhere in between with specific trade-offs.' This shifts the conversation from blame to decision-making.
>
> Step four: document the decision and the trade-offs. Email summary, ticket update, whatever fits the team's norms. So three months later, when someone asks 'why didn't we have feature X,' there's a paper trail of the conscious trade-off.
>
> A concrete example: at Hyvision the Apple project had several mid-stream specification changes from the customer because their downstream QA requirements shifted. The first time it happened I almost just absorbed the change quietly. The second time I started doing the explicit trade-off documentation pattern, which made the conversations significantly easier for both sides.
>
> The thing I try to avoid is the engineering anti-pattern of just working harder to absorb scope changes silently. That doesn't help anyone — the customer doesn't know they're getting more than they're paying for, and the engineer burns out."

**Key beats:**

- Assume rational behavior from client side (don't treat as adversary)
- Get the real picture in conversation, not email
- Separate technical impact from timeline impact, quantify honestly
- Bring options, not just problems (3 options with trade-offs)
- Document the decision so there's a paper trail
- Avoid the anti-pattern of silently absorbing scope changes

**Common follow-ups:** "Has this come up in a recent project?" → use the Hyvision Apple project example. "What if the client is being unreasonable?" → "Then it becomes a management question — I escalate with documentation, not just complaints."

---

### B7: "How do you contribute to a team? How do you collaborate?"

**Framing:** Culture fit + collaboration question. Show concrete patterns of how you work with others, not platitudes.

**Prepared answer:**

> "A few patterns I try to bring consistently.
>
> First, I default to being the person who writes things down. After a meeting or a hallway conversation about a decision, I follow up with a short written summary — what we decided, what's still open, who owns what. This costs almost nothing and saves the team a lot of 'wait, what did we agree to?' confusion three weeks later. I do this even when no one asks for it.
>
> Second, I try to ask questions early instead of guessing later. If a spec is ambiguous, I'd rather spend 10 minutes clarifying with the product or research person now than ship the wrong thing and rework it. This sometimes annoys people who want me to just go figure it out, but the rework cost is worse than the annoying-question cost.
>
> Third, when I disagree with a technical decision, I disagree in writing with reasoning, not in a Slack reaction. And I commit to whatever the team decides afterward, including if I lost the argument. 'Disagree and commit' is the principle. The worst engineering culture is one where decisions get re-litigated in side conversations.
>
> Fourth — and this is more relevant for cross-functional work — I try to translate. ML engineers and product people speak different languages. When I'm in a meeting with both, I'll often rephrase what the product person said in technical terms and what the ML person said in product terms, just to make sure both sides actually heard the same thing. Senior engineers do this naturally; junior engineers often don't realize it's needed.
>
> Concretely on a team at Ouster: I'd expect to spend my first month deeply listening — reading the codebase, reading the team's docs, attending design reviews without trying to prove myself. The second month is when I'd start contributing pull requests on smaller bounded problems to demonstrate I understand the team's conventions. By the third month I'd hope to be owning a meaningful piece of work end-to-end. The instinct to come in hot and start changing things on day one usually backfires."

**Key beats:**

- Default to writing things down (decisions, action items, summaries)
- Ask clarifying questions early — rework cost > annoying-question cost
- Disagree in writing with reasoning, then commit to team decision
- Translate between technical and product languages in meetings
- Onboarding pattern: month 1 listen, month 2 small PRs, month 3 own work

**Common follow-ups:** "Tell me about a team you've worked with that was particularly effective." → describe what made it work (clear ownership, written decisions, low-ego culture). "What's your management style?" → if it comes up, see B11 below.

---

### B8: "Tell me about a time you had a conflict with a teammate or manager."

**Framing:** Classic question — they want to see emotional maturity. Show that you can disagree productively without making it personal. PLACEHOLDER STORY — replace at home.

**Prepared answer (placeholder — REPLACE WITH REAL STORY at home):**

> "[PLACEHOLDER: Pick a real low-stakes professional disagreement. Strong options:
>
> Option A — A technical disagreement at PERSPECTIVE about architecture choice (e.g., one approach vs another for the segmentation pipeline, or the right way to integrate the diffusion model).
>
> Option B — A timeline disagreement where you pushed back on a deadline that wasn't realistic.
>
> Option C — A scope disagreement where you advocated for a different priority than what management wanted.
>
> AVOID: Personal conflicts. Stories where you 'won' and the other person was wrong. Stories about being underappreciated.]
>
> STAR-style structure:
>
> **Situation:** [Brief context — what project, what was the disagreement about]
>
> **The disagreement:** [What each side wanted, what was at stake. Frame the other person's position charitably — they had real reasons, not just being difficult.]
>
> **How it played out:** [How you raised it, what conversations happened, who else was involved, how the decision got made]
>
> **The resolution:** [What was decided, whether you got your way or not]
>
> **What I took from it:** [Reflection — the lesson is rarely 'I was right' even if you were. The lesson is usually something like 'I learned to frame disagreements as questions instead of statements' or 'I learned the other person had context I didn't have']"

**Critical tactical notes:**

- The interviewer is **not** evaluating whether you were right. They're evaluating whether you can disagree without making it personal.
- Frame the other person charitably. If you can describe their reasoning as if you were arguing their side, you sound senior. If you can only describe it as "they didn't understand," you sound junior.
- Closing the story with "I learned X" is essential. Without the lesson, the story sounds like you're still litigating it.
- "I was right and we eventually did it my way" is a bad ending unless you frame it as "and I learned to make my case earlier and more clearly next time."

**Key beats:**

- Real disagreement, low-stakes, professional
- Charitable framing of the other side
- How you raised it (in conversation, with reasoning)
- Resolution (often: compromise, or you committed to their decision)
- Lesson about how you operate now, not about who was right

**Common follow-ups:** "Has it affected your relationship with that person?" → ideally "no, we still work well together / they're a colleague I respect." "What if your manager makes a decision you strongly disagree with?" → "I raise it once in writing, commit to executing if they hold the line, and let the result speak for itself."

---

### B9: "What's your greatest strength?"

**Framing:** Don't be generic ("I'm a hard worker"). Pick a specific, defensible strength tied to your actual work.

**Prepared answer:**

> "The strongest thing I bring is the combination of theoretical depth and shipping discipline. I can read a research paper, understand the math underneath, prototype it in PyTorch, and then take it through the engineering work — C++ deployment, edge optimization, integration with industrial hardware — to get it in front of real users. Most engineers I've worked with are strong at one end or the other. The full pipeline from paper to production is rarer.
>
> Concretely, this is what made the LADi-VTON deployment at PERSPECTIVE work. The paper was published, I implemented and fine-tuned it on our domain data, set up the AWS infrastructure, and shipped it to commercial customers. Every step required different skills, and the value comes from being able to hold all of them in your head at once.
>
> The Ouster job description specifically calls out 'translating state-of-the-art research papers into code and adapting them into robust, production-grade solutions.' That's the loop I'm strongest at."

**Key beats:**

- Combination of theoretical depth + shipping discipline (the rare combination)
- Concrete example: LADi-VTON paper-to-production at PERSPECTIVE
- Map back to Ouster JD: "research papers into code" is exactly this strength

---

### B10: "What's your greatest weakness?"

**Framing:** Don't do humble-brag fake weaknesses ("I work too hard"). Pick a real one with a real mitigation. Senior interviewers respect this enormously.

**Prepared answer:**

> "I tend to optimize too long on the algorithm side before talking to the engineering side about deployment constraints. My instinct is to get the model accuracy where I want it, then think about latency, memory, and integration. Sometimes that backfires — I'll spend a week tuning a model that turns out to be three times too slow for the target hardware, and I have to rework the architecture choice from scratch.
>
> What I've learned to do is invert the order: in the first day of a new project, pin down the hard constraints — latency budget, memory budget, deployment target — and use them as a filter on what algorithms are even on the table. It's basic engineering discipline, and I'm better at it now than I was three years ago, but it's something I still consciously have to remind myself of when I'm excited about a new approach.
>
> The other thing I'd call out is that I'm more comfortable in deep technical work than in big-room management presentations. I do them when they're needed, but it's not my natural mode. I've gotten better with practice. It's still a growth area."

**Key beats:**

- Real weakness #1: tendency to over-optimize algorithm before checking deployment constraints
- Real mitigation: pin down hard constraints day 1, use as algorithm filter
- Real weakness #2 (secondary): more comfortable in deep technical work than big presentations
- Tone: matter-of-fact, not apologetic

**Common follow-ups:** "How are you working on it?" → "Constraint-first project setup, plus regular conversations with deployment-focused colleagues early in any project." "Anything else?" → don't volunteer more weaknesses; one strong honest one is better than a list.

---

### B11: "Have you led a team or mentored junior engineers?"

**Framing:** They want to know if you can grow into a tech lead role even if you're applying as an IC. Be honest about what you've actually done.

**Prepared answer:**

> "I've been the most senior person on the vision side at two of my last three companies — Luxolis where I was the sole vision engineer, and the cloth segmentation team at PERSPECTIVE where I was the most senior of the small group. That meant doing a lot of de-facto mentoring even without a formal lead title — code reviews, design reviews, helping junior engineers think through their first production deployments.
>
> What I've done specifically:
>
> Code reviews focused on teaching, not just gatekeeping. The pattern I try to use is: explain why the suggestion matters, not just what to change. A code review comment that says 'rename this variable' teaches less than one that says 'rename this — the current name will confuse the next person who reads it because it's ambiguous with X.'
>
> Pairing on hard debugging sessions when a junior engineer was stuck. The principle I try to hold is: don't take over the keyboard. Walk them through the diagnostic process so they can do it themselves next time.
>
> Architecture conversations early in a project, where the junior engineer presents their approach and I push on the trade-offs they may not have considered yet. The goal is for them to develop the muscle of considering trade-offs proactively.
>
> I haven't formally managed people, and I'm not sure I want to step into people management in the next few years — my preference is the deep IC track. But the mentoring and lead-engineer work I've done has been some of the most rewarding parts of my career, and I'd want to keep doing it at Ouster regardless of the formal title."

**Key beats:**

- Senior position on vision side at Luxolis (sole) and PERSPECTIVE (most senior of small group)
- De-facto mentoring without formal title
- Specific patterns: teaching code reviews, paired debugging, architecture trade-off conversations
- Honest: prefer deep IC track, not people management, but want to keep mentoring

---

### B12: "Why should we hire you over the other candidates?"

**Framing:** Direct competitive question. Don't deflect ("I'm sure they're all great"). Make your case concretely.

**Prepared answer:**

> "I can only argue from what I bring — I don't know the other candidates. What I'd say is: my profile combines four things that are individually common but rare in combination.
>
> Six-plus years of production ML at four companies, with real shipped systems at every one. C++ engineering at production quality for three of those years, with current daily work on a sub-millimeter precision pipeline. Foundation-model deployment experience — taking OpenLRM, LADi-VTON, and FoundationPose from research repos to deployed systems. And edge optimization on NVIDIA Jetson with TensorRT and ONNX.
>
> Most candidates have two or three of these. The full set is rarer, and it's exactly the combination your job description asks for.
>
> The other piece I'd add is the visa-relocation context. I'm not casually interviewing — committing to Ouster means committing to relocation, to a major life change. The opportunity cost on my side is high enough that I'm only going to take this if it's the right role, which means once I commit, I commit hard. That kind of high-stakes commitment is something I think translates into how I'd show up at the team."

**Key beats:**

- Don't compare to others — argue from your own profile
- Four-things-in-combination: production ML + C++ + foundation models + edge deployment
- Map back to JD: exact combination they're asking for
- Personal: visa relocation = high commitment = will show up seriously

---

### B13: "Do you have any questions for me?"

**Framing:** This is not optional. Coming in without questions is a fatal signal that you're not serious. Have 3-4 prepared, ask 2-3, leave space for natural follow-ups.

**Tier-1 questions to ask the VP (pick 2-3):**

> "Where is Ouster's perception stack today versus where you want it to be in 18 months? What's the biggest gap?"

> "How is the detection and tracking team organized? Are you building unified models in-house or starting from open-source baselines and customizing them?"

> "What's the team's split between research-style work — translating papers into code — versus productionization and deployment?"

> "How do you balance accuracy versus latency in your customer-facing models? What's your typical latency budget at the edge?"

> "How do you think about LIDAR-only versus LIDAR-camera fusion? Where does Ouster's strategy land?"

> "What does success look like in this role at 6 months? At 18 months?"

**Tier-2 questions (good if there's time):**

> "What's the biggest technical risk Ouster is carrying right now, from your seat?"

> "Who on the team would I be working most closely with? What's their background?"

> "What's the engineering culture around debugging and incident response — when something breaks in production, how does the team work through it?"

> "How does Ouster decide which research papers are worth implementing versus letting the field mature?"

**Avoid asking:**

- "What's the culture like?" — too generic, no one gives a useful answer
- "What are the benefits?" — save for HR conversations
- "When can I expect to hear back?" — ask the recruiter, not the VP
- Compensation specifics — not in this round

**Key beats:**

- Always have 3-4 ready, ask 2-3
- Pick questions that show you've researched the company and thought about the role
- Open-ended questions get more useful answers than yes/no questions
- "What's the biggest gap?" and "What's the biggest risk?" are senior-engineer questions that VPs respect

---

### B14: "Why are you considering leaving Korea? Why now?"

**Framing:** They may ask this gently if visa is on the table. Answer with personal honesty.

**Prepared answer:**

> "Korea has been a great place to build my career — I've spent the last six-plus years here across four companies, and I've had access to industrial applications and customer relationships that are hard to find elsewhere. That said, the senior ML opportunities here are narrower than what's available in North America. Most of the deep ML research-to-production work I want to do next is in the US, Canada, and a few European hubs. So for the kind of role I'm aiming for, this is the right time to move.
>
> On the personal side: I'm Pakistani, currently on a work visa in Korea. Long-term residency requires planting roots in a country that's open to immigrant tech talent. Canada specifically has a strong pathway — Global Talent Stream, then PR, then citizenship over several years. Vancouver as a city is appealing too, and the AI ecosystem there is real and growing.
>
> Ouster specifically combines all of that: the role I want, the city I'd want to land in, and a company that's at a stage where I can contribute meaningfully. The technical fit and the life-stage fit are aligned. That's why I'm being deliberate about this opportunity rather than waiting another year."

**Key beats:**

- Korea has been great, but senior ML opportunities are narrower than NA/Europe
- Personal: long-term residency goal, Canada has strong pathway (GTS → PR → citizenship)
- Vancouver fits, AI ecosystem real and growing
- Ouster: technical fit + life-stage fit aligned = right time

---

## Behavioral Question Preparation Checklist

**Before the VP meeting, make sure I can deliver these aloud:**

- [ ] B1 — Why Ouster (3 specific reasons)
- [ ] B2 — Where in 5-10 years (deep IC + optional founding)
- [ ] B3 — What I bring (3 differentiators)
- [ ] B4 — Difficult problem (REAL story, STAR structure) **NEEDS REAL STORY**
- [ ] B5 — A failure (REAL story, owns the failure) **NEEDS REAL STORY**
- [ ] B6 — Client delays / scope changes (4-step pattern)
- [ ] B7 — Team contribution (4 patterns + onboarding plan)
- [ ] B8 — Conflict with teammate (REAL story, charitable framing) **NEEDS REAL STORY**
- [ ] B9 — Greatest strength (theoretical depth + shipping discipline)
- [ ] B10 — Greatest weakness (over-optimize before deployment constraints)
- [ ] B11 — Led / mentored (de-facto lead at Luxolis + PERSPECTIVE)
- [ ] B12 — Why hire me over others (4 things in combination)
- [ ] B13 — Questions for them (have 3-4 ready, ask 2-3)
- [ ] B14 — Why leave Korea now (personal + life-stage honesty)

**Plus career-arc answers from earlier section:**

- [ ] Risk #3a — Why leave Luxolis after 3 months
- [ ] Risk #3b — Why looking to leave Hyvision
- [ ] Risk #3c — Combined career arc

**Three highest-priority answers to memorize cold (the VP will almost certainly hit these):**

1. B1 — Why Ouster
2. Risk #3c — Combined career arc (covers Luxolis + Hyvision in one answer)
3. B13 — Questions for them (memorize 4 specific ones)

---

## ML Theory Study Plan (Tier 1 priorities)

### Tier 1A: Detection Landscape

**Must know:** YOLO v3-v8 evolution (anchor-based → anchor-free in v6+), Faster R-CNN (two-stage with RPN), SSD, FCOS (anchor-free with centerness), CenterNet (keypoint heatmap + size), DETR (set prediction + Hungarian matching), Deformable DETR (sparse attention), RT-DETR (real-time variant).

**Self-test:** Anchor-based vs anchor-free trade-offs. Why Hungarian matching for DETR. FPN multi-scale fusion. IoU loss variants (GIoU, DIoU, CIoU).

### Tier 1B: Tracking Algorithms

**Must know cold:** DeepSORT (Kalman + Mahalanobis distance + appearance embeddings via Re-ID CNN + Hungarian). ByteTrack (two-pass high/low confidence association, no Re-ID needed). BoT-SORT/StrongSORT (DeepSORT successors with camera motion comp).

**Joint detection-tracking** (Ouster JD specifically mentions this): FairMOT (single network for detection + Re-ID embeddings), CenterTrack (CenterNet + previous frame input), MOTR/MOTRv2 (transformer-based end-to-end with query propagation).

**Self-test:** Per-frame loop of DeepSORT. Tracking-by-detection vs joint detection-tracking trade-offs. MOTA vs IDF1 metrics. When IoU-based tracking fails and Re-ID needed.

### Tier 1C: Custom Loss Design

**Know the landscape even though I haven't shipped a novel loss:**

- Cross-entropy + weighting; focal loss derivation (down-weight well-classified with `(1-p)^γ`)
- Box regression: L1, L2, Smooth L1 (Huber), IoU, GIoU, DIoU, CIoU — modern detectors use CIoU
- Contrastive/Re-ID: triplet loss, ArcFace, CosFace, circle loss
- Multi-task: hand-tuned weights, uncertainty weighting (Kendall & Gal), GradNorm
- Hierarchical: stacked cross-entropies, soft label propagation, YOLO9000 WordTree

**Self-test:** Derive focal loss. CIoU over MSE for box regression. Hierarchical 3-level taxonomy loss design.

### Tier 1D: 3D Pose Representations

**Rotation representations:** Rotation matrix, Euler angles (gimbal lock!), axis-angle, quaternions (double cover, careful in ML), **6D representation (Zhou et al. 2019)** preferred for ML output because singularity-free and continuous.

**SE(3):** Special Euclidean group, 4x4 homogeneous transform. Tangent space se(3) = 6-vector twist. Lie group optimization for trajectory smoothing.

**Self-test:** Trade-offs across rotation representations. Why 6D preferred for neural net output. Quaternion slerp. SO(3) vs SE(3).

### Tier 1E: ICP Variants

**Must know:** Point-to-point (SVD closed-form), point-to-plane (faster on smooth surfaces, needs normals — I used this), Generalized ICP (probabilistic with local covariances), Color ICP (RGB term), Trimmed ICP (discard worst N% correspondences). Convergence is local; needs good init.

**Self-test:** Point-to-point closed-form solution via SVD. Point-to-plane vs point-to-point when. ICP failure modes and mitigation. GICP differences.

### Tier 2A: Edge Optimization

**Optimization stack:** Quantization (FP32 → FP16 → INT8), layer fusion (Conv+BN+ReLU), kernel auto-tuning (TensorRT), ONNX as interchange format. Jetson family (Nano/TX2/Xavier/Orin).

**Gotchas:** INT8 calibration needs representative data. Attention layers tricky to quantize. ONNX export sometimes fails on custom PyTorch ops.

### Tier 2B: Point Cloud Detection (LIDAR-specific)

**Voxelization-based:** VoxelNet → SECOND (sparse 3D conv) → PointPillars (collapse Z to 2D pillars, very fast)

**Point-based:** PointNet → PointNet++ (permutation invariant via max-pool), Point Transformer

**Range-view:** Project to 2D range image (row = laser beam, col = azimuth) and use 2D CNN. Likely what Ouster uses given native LIDAR layout.

**Birds-eye view:** Standard for autonomous driving. CenterPoint (BEV + center-keypoint head) is production standard.

**Fusion:** TransFusion, BEVFusion for LIDAR + camera.

**Self-test:** PointNet handling of unordered input. Voxel vs point-based trade-offs. Why BEV common for AV. PointPillars at a high level. LIDAR-camera fusion.

---

## What I Need for the New Conversation

I will start a new conversation with **Claude Opus** at home and paste this document at the top with the prompt:

> "I'm preparing for an interview at Ouster (Senior ML Engineer, Object Detection and Tracking). The first round is a meeting with the VP of Software, likely early next week. Please read the attached prep document carefully — it contains the full context of my prep work so far, what I've submitted in my resume, the risk areas I need to manage, and the project deep-dives I've already worked on. Pay special attention to the 'LATEST UPDATES' section at the top and the 'Custom Loss — The Real Story' section. Then we'll continue prepping. Acknowledge that you've read it, summarize back to me what you understand my situation to be, and propose what we should work on first."

**What's most useful for the new conversation to help with (updated priorities):**

1. **Highest priority:** Mock the VP of Software meeting. Act as the VP, ask realistic questions, give detailed feedback on my answers.
2. **Drill the Dice + Focal Tversky custom loss story** until I can deliver the 90-second walkthrough cold and field all 8 follow-up questions confidently. This is my single most important technical answer.
3. **Behavioral story prep:** Help me develop structured STAR-method answers for likely behavioral questions, especially "why leaving Hyvision," "tell me about a time you failed," "tell me about a conflict on your team."
4. **Project depth drilling:** Quiz me on the three anchor projects (ALPR, Luxolis 6-DoF, Hyvision metrology). Find the gaps. Suggest specifically what to study or memorize.
5. **Calibration audit for the OTHER potentially-overstated claims:** Help me go through the "architecture modification" claims (OpenLRM, Latent Diffusion, U2Net) and prepare honest reframe answers for each, parallel to the new loss-story strategy. The LIDAR phrasing also needs a clean prepared answer (already drafted in this doc, just needs practicing aloud).
6. **ML theory drilling:** Quiz me on Tier 1 topics in a back-and-forth so I can identify weak spots before the technical screen.
7. **Coding practice if time allows:** Walk me through implementing IoU, NMS, focal loss, and one ICP iteration from scratch. I have **coding rust** from doing AI-assisted vibe coding lately and need to rebuild the muscle. **Note:** First interview is the VP meeting which is NOT coding, so this is lower priority than (1)-(5) for the immediate next round.
8. **Ouster company research:** Help me dig into Ouster's product, recent blog posts, technical papers, and team structure so I can talk fluently in the VP meeting.

**Critical instruction for the new Claude conversation:**

Earlier in the prep, I floated the idea of fabricating a custom loss artifact and claiming it was production work. The previous Claude pushed back hard and we landed on the honest approach. **Do not suggest any kind of fabrication or "creative truth" strategy.** The interview strategy is: own the imprecise resume bullets honestly when probed, lead with the real Dice + Focal Tversky story for custom loss questions, and rely on the genuinely strong rest of the resume. This decision is settled — do not revisit it.

---

## Honest Self-Assessment Summary

**Strengths I should lean into:**

- 6+ years production C++ with PCL and Eigen
- Daily work on point cloud algorithms (ICP, RANSAC, SVD) at sub-millimeter precision
- Multiple shipped detection + tracking systems (ALPR, Incheon Airport, Pungkang 6-camera)
- Foundation-model integration in production (FoundationPose, OpenLRM, LADi-VTON)
- Edge GPU deployment experience (Jetson + TensorRT + ONNX)
- Synthetic data generation for low-data regimes (Ellexi license plates)
- **Real custom loss function shipped: combined Dice + Focal Tversky for defect segmentation** (full code preserved in "Custom Loss — The Real Story" section above)
- Math background with peer-reviewed publications (IEEE Access on p-Laplace PDEs)
- MS in Computer Vision from Chung-Ang University

**Real gaps to manage:**

- ~~Custom loss function — claim is generous~~ **RESOLVED:** I have a real custom loss (Dice + Focal Tversky for defect segmentation) — see new strategy in Risk #1 and the dedicated section
- "Architecture modification" claims for OpenLRM/LADi-VTON/U2Net likely need similar honest reframing — pattern: acknowledge fine-tuning vs novel architecture, pivot to genuine technical depth
- "LIDAR-class point cloud data" phrasing on resume is stretched — actually structured-light laser profiler, not time-of-flight LIDAR. Cover letter handles it. Resume bullet should ideally be tightened to "industrial 3D point cloud data" but cover letter disclaimer is enough cover. Prepared answer drafted in Risk #4.
- Coding rust from vibe-coding lately — need 2-3 days of practice before technical screen (lower priority since first interview is non-coding VP meeting)
- 3D Gaussian Splatting and visual geometry transformers — currently studying, framed as "active research interest" not production experience
- RL / Imitation Learning — fundamentals only, not production (less relevant for Ouster than for Sanctuary AI, but worth noting)

**The bet:**

Be aggressively honest about the framing issues *before they probe* if asked, but never volunteer corrections unprompted. Lead with the real Dice + Focal Tversky custom loss when custom loss comes up. Lean hard on the genuine strengths: production C++ + point cloud + detection/tracking + foundation models + edge deployment + a real shipped custom segmentation loss is a genuinely rare combination, and the senior interviewers at Ouster will recognize it.

---

## Schedule Summary

- **Friday night:** Re-read this document, ALPR + Luxolis + Hyvision prep docs. Light coding warmup if time.
- **Saturday:** Project elevator pitches aloud. Theory: Tier 1A, 1B, 1C, 1D, 1E. Whiteboard architectures from memory.
- **Sunday:** Tier 2A, 2B. Coding drills (IoU, NMS, focal loss as nn.Module). Mock VP meeting.
- **Monday:** Light review, behavioral story rehearsal, Ouster company research. Early sleep.

---

## End of Handoff

This document is the complete handoff context. Paste it at the start of the new Claude Opus conversation and we can continue prep without losing context.
