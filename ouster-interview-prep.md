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

## Basic-Level Warm-Up Questions (Likely VP Opening Material)

**Context:** Glassdoor reviews of Ouster interviews suggest VPs sometimes warm up with average-difficulty technical questions before going deep. These are NOT meant to stump the candidate — they're meant to:

- Confirm I actually know basics (not just framework names)
- Calibrate my communication style on simple material
- Find the lowest-difficulty level where I struggle, then dig in

**Strategy:** Answer concisely (2-4 sentences for warm-ups), demonstrate I can explain to a junior engineer, mention 1 trade-off or gotcha to show depth without over-explaining. If they push further, go deeper. **Do not over-answer warm-ups.**

---

### W1: Point Cloud Preprocessing (most likely Ouster warm-up territory)

#### W1.1 — "How would you downsample a dense point cloud?"

**Quick answer:**

> "Three common approaches. Voxel grid downsampling divides space into 3D cells of a fixed size and replaces all points in a cell with their centroid — very fast, gives uniform density. Random subsampling just picks N random points — fastest but doesn't preserve structure. Farthest point sampling picks points iteratively to maximize coverage — slower but preserves shape better. For most preprocessing I'd use voxel grid with a cell size tuned to the application; for downstream tasks that need geometric coverage like surface reconstruction I'd consider farthest point sampling."

**If pushed deeper:** Voxel grid in PCL is `pcl::VoxelGrid<PointT>::filter()` with `setLeafSize`. The cell size trade-off: smaller cells preserve detail but keep more points, larger cells lose detail but compress more.

**Trap to avoid:** Don't just say "voxel grid" without mentioning the cell-size trade-off.

#### W1.2 — "What's the Statistical Outlier Removal (SOR) filter?"

**Quick answer:**

> "SOR removes points that are statistical outliers relative to their local neighborhood. For each point, it computes the mean distance to its K nearest neighbors. Across all points, it computes the global mean and standard deviation of those distances. Any point whose mean K-NN distance is more than N standard deviations from the global mean is flagged as an outlier and removed. Common parameters are K=50 neighbors and N=1.0 standard deviations. It's useful for removing sensor noise spikes and floating points from depth sensors."

**If pushed deeper:** PCL implementation is `pcl::StatisticalOutlierRemoval`. Trade-off: aggressive SOR (small N) can remove real thin structures, conservative SOR (large N) leaves noise. Tune by visualizing on representative data.

**Trap to avoid:** Don't confuse SOR with Radius Outlier Removal (which just checks if a point has fewer than N neighbors within radius R).

#### W1.3 — "What's a bilateral filter on a point cloud?"

**Quick answer:**

> "It's an edge-preserving smoothing filter. Standard Gaussian smoothing averages over a spatial neighborhood, which blurs everything including edges. Bilateral filtering weights neighbors by two factors: spatial distance and feature similarity — for point clouds, the feature is typically normal direction or intensity. Points that are spatially close AND have similar normals get high weight; points with different normals (across an edge) get low weight. The result is smoothing within flat regions while preserving sharp edges and corners."

**If pushed deeper:** Computationally expensive — O(N*K) per point with K-NN lookup. PCL has `pcl::BilateralFilter`. For LIDAR data, normal-based bilateral is more useful than intensity-based.

**Trap to avoid:** Don't describe it as "just smoothing" — the edge-preservation is the whole point.

#### W1.4 — "What's a KD-tree and why use it for point clouds?"

**Quick answer:**

> "KD-tree is a binary space-partitioning data structure for organizing points in k-dimensional space. At each node, it splits the points along one axis at the median, alternating axes as you go down the tree. The benefit is fast nearest-neighbor queries — O(log N) average case for balanced trees versus O(N) for brute force linear search. For point cloud algorithms like ICP, RANSAC, and normal estimation that do millions of nearest-neighbor queries, the KD-tree is essential. PCL uses FLANN under the hood for the actual implementation."

**If pushed deeper:** Trade-off: building the tree is O(N log N), but you pay it once and amortize across many queries. KD-trees degrade in high dimensions (curse of dimensionality), so for very high-D feature spaces alternatives like ball trees or LSH may be better. For 3D point clouds (low dimensionality), KD-tree is optimal.

**Trap to avoid:** Don't confuse KD-tree with octree — both are spatial indexing structures but octrees split space uniformly into 8 cells per node, KD-trees split along a chosen axis at the median.

#### W1.5 — "What's an octree? When would you use it over a KD-tree?"

**Quick answer:**

> "Octree is a tree where each internal node has exactly 8 children, splitting space uniformly into 8 octants. KD-tree splits along one axis per node, alternating. For point clouds, octrees are better when the geometry has hierarchical spatial structure you want to exploit — like multi-resolution voxelization where you can prune entire subtrees that are empty or fully occupied. KD-trees are better for pure nearest-neighbor queries because they adapt to the data distribution. PCL has both; voxel grid filtering and occupancy mapping use octrees, nearest-neighbor search uses KD-trees."

**Trap to avoid:** Don't confuse use cases — for "find the closest point" use KD-tree, for "is this region occupied" use octree.

---

### W2: 2D Image Processing Fundamentals

#### W2.1 — "Explain what a convolution is."

**Quick answer:**

> "A convolution is a sliding-window operation where a small kernel is applied at every position in an input. At each position, you take the dot product between the kernel and the local image patch. The output is a new image where each pixel summarizes the response of the local region to the kernel pattern. Different kernels do different things: Sobel kernels detect edges, Gaussian kernels blur, sharpening kernels enhance high-frequencies. In deep learning, the kernel weights are learned rather than hand-designed."

**If pushed deeper:** Mathematically, true convolution flips the kernel before sliding (`y[n] = sum x[k] * h[n-k]`), but in deep learning we usually do cross-correlation without flipping. The terminology has drifted — what frameworks call "convolution" is technically cross-correlation. Doesn't matter for ML because learned kernels can compensate either way.

**Trap to avoid:** Don't just say "filter" — be specific about the dot-product operation.

#### W2.2 — "Implement a 1D edge detection from scratch in code."

**Quick answer:**

> "Simplest edge detector is the gradient — first derivative. For 1D, the discrete approximation is `dx[i] = x[i+1] - x[i-1]` (central difference). Higher response where the signal changes rapidly. Threshold the absolute value to get edge pixels."

```python
import numpy as np

def edge_detect_1d(signal):
    # Central difference gradient
    grad = np.zeros_like(signal, dtype=float)
    grad[1:-1] = (signal[2:] - signal[:-2]) / 2.0
    return np.abs(grad)

# Usage
signal = np.array([1, 1, 1, 5, 5, 5, 1, 1, 1])
edges = edge_detect_1d(signal)
# edges around index 3 and 6 will have high values
```

**If pushed deeper:** For 2D, Sobel kernels combine smoothing with differentiation (`[1, 2, 1] * [-1, 0, 1]` outer product gives the Sobel x-kernel). Canny edge detector adds non-maximum suppression and hysteresis thresholding on top of gradient magnitude.

**Trap to avoid:** Don't use forward difference (`x[i+1] - x[i]`) without explaining you're doing first-order — central difference is symmetric and more accurate.

#### W2.3 — "What's a separable filter and why is it efficient?"

**Quick answer:**

> "A 2D filter is separable if it can be decomposed into a 1D row filter followed by a 1D column filter that gives the same result. Gaussian blur is the classic example: a 5x5 Gaussian kernel can be applied as a 5-element horizontal pass then a 5-element vertical pass. The cost goes from O(K²) per pixel to O(2K). For a 5x5 kernel that's 25 multiplies vs 10 — over 2x faster. Sobel kernels are also separable. For arbitrary kernels you can check separability with SVD: if the kernel matrix has rank 1, it's separable."

**Trap to avoid:** Don't claim all 2D filters are separable — most aren't. Gaussian, Sobel, and box filters are; arbitrary learned conv kernels usually aren't.

#### W2.4 — "Why use Gaussian blur before edge detection?"

**Quick answer:**

> "Edge detection is essentially differentiation, and differentiation amplifies high-frequency noise. Gaussian blur is a low-pass filter that suppresses noise before differentiation, so you get cleaner edge response. The trade-off is that more blur also smooths out real edges, so you tune the Gaussian sigma to your noise level. This combined operation — Gaussian smoothing then differentiation — is what makes Canny edge detection work robustly."

**Trap to avoid:** Don't say "noise reduction" without explaining the differentiation-amplifies-noise reason.

---

### W3: Edge Device / Real-Time Performance

#### W3.1 — "How do you make a deep learning model run faster on edge devices?"

**Quick answer:**

> "Four main levers in priority order. First, model architecture choice — use mobile-class backbones like MobileNet or EfficientNet instead of ResNet-152. Second, quantization — convert FP32 weights to FP16 or INT8, giving 2-4x speedup with minor accuracy loss. Third, model pruning and distillation — train a smaller student model to match the larger teacher's output, or zero-out unimportant weights. Fourth, runtime optimization — convert to ONNX and compile with TensorRT or similar to fuse layers and tune kernels for the specific GPU."

**If pushed deeper:** Order of operations matters. Quantization happens after training. Pruning during or after. Distillation is a parallel training process. Runtime compilation is the last step before deployment. Each layer compounds — don't skip steps to chase headline speedup.

**Trap to avoid:** Don't say "just use quantization" — it's one tool, not the whole answer.

#### W3.2 — "How do you profile a slow model? Where would you look?"

**Quick answer:**

> "Profile first, optimize second. For PyTorch, `torch.profiler` gives per-operation timing and identifies which layers dominate. For ONNX/TensorRT, the `trtexec` tool benchmarks the engine and shows per-layer cost. Common bottlenecks: large fully-connected layers near the end of classifier networks, attention layers in transformers (quadratic in sequence length), large convolutions with small batch size (kernel launch overhead). Memory transfers between CPU and GPU also dominate if you're not careful — `pin_memory=True` for DataLoader and avoiding unnecessary `.cpu()` calls helps."

**Trap to avoid:** Don't speculate about bottlenecks without measuring. Senior interviewers love "profile first, optimize second."

#### W3.3 — "What's the difference between FP16 and INT8 quantization?"

**Quick answer:**

> "FP16 is half-precision floating point — 16 bits per number instead of 32. Same approximate range as FP32 but less precision. On modern NVIDIA GPUs with Tensor Cores, FP16 is roughly 2x faster than FP32 with usually no accuracy loss for inference. INT8 is 8-bit integer quantization — 4x smaller than FP32 and roughly 3-4x faster on supported hardware. The accuracy loss with INT8 is real (typically 1-3% on classification, more on detection) so it requires calibration with representative data to find optimal scale and zero-point per layer. Mixed precision is common — use INT8 for compute-bound layers and FP16 for accuracy-sensitive layers."

**Trap to avoid:** Don't conflate "smaller model size" with "faster inference" — they're correlated but not the same thing. Speed depends on hardware support for the data type.

#### W3.4 — "What's layer fusion in TensorRT?"

**Quick answer:**

> "Layer fusion combines adjacent operations into a single GPU kernel to reduce kernel launch overhead and memory round-trips. Classic example: Conv + BatchNorm + ReLU. Separately, each requires a kernel launch, GPU memory read, compute, memory write. Fused, it's one kernel that does all three in registers without intermediate writes to global memory. TensorRT does this automatically during compilation. Other common fusions: element-wise ops chained together, attention QKV projection into one matmul. The speedup depends on the model — heavy fusion candidates can see 2-3x improvement."

**Trap to avoid:** Don't say "TensorRT magic" — explain the kernel-launch and memory-round-trip mechanics.

---

### W4: Algorithm / Coding Warm-Ups

These are short coding questions a VP might use as a 5-minute warm-up. Have crisp Python answers ready. Talk through approach before writing.

#### W4.1 — "How would you merge K sorted arrays?"

**Quick answer (verbal):**

> "Standard approach is a min-heap of size K. Push the first element of each array onto the heap with a (value, array_index, element_index) tuple. Pop the smallest, add it to the output, then push the next element from the same array. Repeat until the heap is empty. Time complexity is O(N log K) where N is total elements and K is number of arrays. Space is O(K) for the heap. Naive merge-two-at-a-time gives O(N*K) which is much worse."

```python
import heapq

def merge_k_sorted(arrays):
    heap = []
    for i, arr in enumerate(arrays):
        if arr:  # skip empty arrays
            heapq.heappush(heap, (arr[0], i, 0))

    result = []
    while heap:
        val, arr_idx, elem_idx = heapq.heappop(heap)
        result.append(val)
        if elem_idx + 1 < len(arrays[arr_idx]):
            next_val = arrays[arr_idx][elem_idx + 1]
            heapq.heappush(heap, (next_val, arr_idx, elem_idx + 1))
    return result
```

**Trap to avoid:** Don't suggest concatenate-and-sort — that's O(N log N), loses the pre-sorted property, and is the answer a junior engineer gives.

#### W4.2 — "Implement IoU between two 2D bounding boxes."

**Quick answer:**

```python
def iou_2d(box1, box2):
    # box format: (x1, y1, x2, y2)  with x2>x1, y2>y1
    x1 = max(box1[0], box2[0])
    y1 = max(box1[1], box2[1])
    x2 = min(box1[2], box2[2])
    y2 = min(box1[3], box2[3])

    # No overlap
    if x2 <= x1 or y2 <= y1:
        return 0.0

    intersection = (x2 - x1) * (y2 - y1)
    area1 = (box1[2] - box1[0]) * (box1[3] - box1[1])
    area2 = (box2[2] - box2[0]) * (box2[3] - box2[1])
    union = area1 + area2 - intersection

    return intersection / union if union > 0 else 0.0
```

**Talk through:**

> "Intersection rectangle is defined by the max of the lower corners and the min of the upper corners. If those don't form a valid rectangle (`x2 <= x1` or `y2 <= y1`), there's no overlap and IoU is 0. Otherwise, intersection area divided by union area, where union is sum of areas minus intersection. The edge case to handle is two boxes with zero overlap — without the early return, the math still gives 0 but might log warnings on negative-area calculations."

**Trap to avoid:** Don't forget the no-overlap case. Don't compute area as `(x2 - x1 + 1) * (y2 - y1 + 1)` — that's the pixel-count convention (e.g., COCO), but for continuous boxes use plain `(x2 - x1) * (y2 - y1)`. Be ready to explain which convention you're using.

#### W4.3 — "Implement non-maximum suppression (NMS) in pure Python."

**Quick answer:**

```python
def nms(boxes, scores, iou_threshold=0.5):
    # boxes: list of (x1, y1, x2, y2); scores: list of confidences
    indices = sorted(range(len(scores)), key=lambda i: scores[i], reverse=True)
    keep = []

    while indices:
        # Take highest-scoring remaining box
        current = indices[0]
        keep.append(current)
        # Filter out boxes with high IoU vs current
        indices = [i for i in indices[1:]
                   if iou_2d(boxes[current], boxes[i]) < iou_threshold]
    return keep
```

**Talk through:**

> "Sort boxes by score descending. Pop the highest-scoring box and keep it. Drop any remaining box that has IoU above the threshold with the kept box — they're considered duplicates. Repeat until no boxes remain. Time complexity is O(N²) in worst case for naïve implementation; the GPU implementations in torchvision are much faster but the algorithmic logic is the same."

**Trap to avoid:** Don't reorder boxes or drop the IoU comparison. Some candidates skip the sort step. Some forget that NMS is per-class — if you have multi-class detection, you run NMS independently per class.

#### W4.4 — "Reverse a linked list" or "find the K-th largest element"

**For reverse linked list:**

```python
def reverse_list(head):
    prev, curr = None, head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev
```

**For K-th largest (heap approach):**

```python
import heapq
def kth_largest(nums, k):
    return heapq.nlargest(k, nums)[-1]
# Or O(n) average with quickselect, but heap is fine for warm-up
```

**Trap to avoid:** Don't overthink these. They're warm-ups. Crisp answer, mention complexity, move on.

---

### W5: General "Show Your Thinking" Questions

#### W5.1 — "How would you go about debugging a model that's working in training but failing in production?"

**Quick answer:**

> "Standard checklist. First, confirm the inference code matches training — same preprocessing pipeline, same input normalization, same data type (FP32 vs FP16). This is the most common cause. Second, check for data distribution shift — production inputs may have different statistics than training data. I'd compare input histograms. Third, check inference-mode subtleties — `model.eval()` is set so dropout and batch norm behave correctly. Fourth, check for hardware-specific numerical issues — quantization or TensorRT compilation can introduce rounding errors that compound. Fifth, look at specific failure cases — collect examples, look for patterns, see if they share input characteristics."

**Trap to avoid:** Don't jump to "retrain the model" — that's expensive and rarely the right first step.

#### W5.2 — "If you had to choose between accuracy and latency, how do you decide?"

**Quick answer:**

> "It's a product question, not a technical one. You decide by asking: what's the customer's tolerance? For autonomous driving perception at highway speed, latency under 100ms is non-negotiable — every 50ms of lag is a meter of car travel. For batch processing of inspection images overnight, accuracy is paramount and latency is irrelevant. So I start by quantifying the customer's actual constraints, then I find the highest-accuracy model that fits within the latency budget. Pareto frontier thinking — there's no general answer, only project-specific trade-offs."

**Trap to avoid:** Don't pick one as a personal preference. Senior engineers know it depends on the use case.

#### W5.3 — "What's the difference between Python and C++ for ML deployment?"

**Quick answer:**

> "Python is the development language — fast iteration, rich ecosystem, easy debugging. PyTorch and TensorFlow are Python-first. For production deployment, Python has two problems: the GIL serializes threads which limits CPU parallelism, and the per-call overhead of Python objects matters when you're trying to hit sub-100ms inference. C++ removes both. Typical pattern: train in Python, export the model to a portable format like ONNX or TorchScript, then run inference from a C++ application that loads the exported model. The Python-to-C++ boundary is at the model artifact, not in the live inference loop."

**Trap to avoid:** Don't dismiss Python as "slow" — it's slow for tight loops, but for orchestration and one-shot inference it's perfectly fine. Use the right tool per layer.

---

### How to Use This Section

**Before the VP meeting, drill these aloud:**

- [ ] W1.1 — Point cloud downsampling (voxel grid + FPS)
- [ ] W1.2 — SOR filter mechanics
- [ ] W1.3 — Bilateral filter (edge-preserving)
- [ ] W1.4 — KD-tree complexity and use case
- [ ] W1.5 — KD-tree vs octree
- [ ] W2.1 — What's a convolution
- [ ] W2.2 — 1D edge detection from scratch
- [ ] W2.3 — Separable filters
- [ ] W3.1 — Making a model faster on edge
- [ ] W3.2 — Profiling a slow model
- [ ] W3.3 — FP16 vs INT8
- [ ] W4.1 — Merge K sorted arrays
- [ ] W4.2 — IoU 2D from scratch
- [ ] W4.3 — NMS from scratch
- [ ] W5.1 — Debug training-passes-production-fails
- [ ] W5.2 — Accuracy vs latency

**Format tips:**

- Answer in 2-4 sentences for warm-ups
- Mention one trade-off or gotcha to show depth
- DON'T over-answer — stop and let them push if they want more
- Talk through approach BEFORE writing code
- For coding questions: clarify input format first ("are these continuous boxes or pixel coordinates?")

---

## Senior-Engineer Supplement (added 2026-05-18, Mon → Fri 10pm KST interview)

**Context:** A Google AI summary of Ouster's typical Senior Software Engineer loop flagged four interview categories: (1) DS&A + low-level optimization, (2) system design, (3) hardware/domain familiarity, (4) senior behavioral. My role is Senior ML Engineer, not Senior SWE, so emphasis will tilt toward ML, but a VP of Software meeting can pull from any of these categories. This supplement covers the highest-probability gaps for a senior-level conversation.

**Timeline reality check:** Interview is Friday at 10pm Korean time. Today is Monday. ~25-35 hours of focused prep available. Triage: master 5-6 critical answers cold, skim the rest.

---

### S1: C++ Multi-Threading — The Real-World Scenarios

**Context:** I've used C++ threading at Hyvision (parallel ICP, parallel raycasting in the simulator) and at Luxolis (multi-camera synchronized capture). The textbook vocabulary may be rusty but the real-world patterns are familiar. The interview-likely questions are scenario-based, not "implement a mutex from scratch."

#### S1.1 — "Walk me through how you'd parallelize a heavy point cloud operation."

**Prepared answer:**

> "It depends on the operation, but the common pattern is data parallelism with OpenMP because point cloud operations are usually embarrassingly parallel at the point level. For example, when I parallelized the nearest-neighbor search in ICP at Hyvision, the KD-tree is built once and treated as read-only shared state, then OpenMP partitions the source points across threads. Each thread does its own queries against the shared tree, writes results to a thread-local buffer, and we merge at the end. No locks needed because writes are partitioned.
>
> For operations with shared mutable state, the pattern changes. If I'm accumulating into a single result, like the cross-covariance matrix in ICP's SVD step, I'd use OpenMP reduction or a per-thread accumulator that gets merged at the end. Reduction is cleaner because OpenMP handles the merge for built-in types.
>
> For producer-consumer patterns, like multi-camera capture feeding inference, I'd use a thread-safe queue with condition variables. Producer threads push frames in; the consumer thread blocks on the queue until a frame is available, processes it, and loops. Standard pattern, well-understood failure modes."

**Key beats:**

- Data parallelism with OpenMP for embarrassingly parallel operations
- Shared read-only state (KD-tree) + thread-local writes = no locks
- Reduction or per-thread accumulator for shared mutable state
- Producer-consumer with thread-safe queue + condition variables for pipelines

#### S1.2 — "One thread finishes before others. How do you handle that?"

**Prepared answer:**

> "Depends on whether the thread is done permanently or just waiting for more work.
>
> If it's permanently done, the standard pattern is a thread pool with a work queue. Idle threads pull from the queue instead of finishing — so a thread that 'finishes early' just goes back to the queue and picks up the next available task. C++ has `std::async` and there are thread pool libraries; for the kind of work I do, I'd use OpenMP's task model or a simple custom pool.
>
> If it's waiting for a barrier — all threads need to sync before proceeding — I'd use `std::barrier` (C++20) or a condition variable with a counter. Threads that arrive early block until the count reaches the expected number.
>
> The anti-pattern to avoid is busy-waiting in a loop checking a flag. That burns CPU. Use condition variables for blocking waits, atomics only for low-frequency state checks."

**Key beats:**

- Permanently done → thread pool with work queue
- Sync point → barrier or condition variable + counter
- Anti-pattern: busy-waiting on a flag

#### S1.3 — "One thread has heavy load, others process data with the spare capacity."

**Prepared answer:**

> "This is a load imbalance problem, very common in real-world parallel processing. Three approaches depending on the situation.
>
> First, dynamic work assignment instead of static partitioning. If I assign work in fixed-size chunks upfront and one chunk is unexpectedly heavy, the assigned thread is overloaded while others sit idle. The fix is to use a shared work queue where any free thread can pull the next task. OpenMP's `schedule(dynamic)` does this automatically for loop parallelism.
>
> Second, work stealing. If threads have their own task queues but one runs out, it can 'steal' tasks from another's queue. Standard in modern parallel runtimes like Intel TBB.
>
> Third, work splitting. If a single task is genuinely too large for one thread, split it. For example, if processing one camera's frame takes 200ms and another's takes 20ms, I'd batch-process multiple frames of the slow camera in parallel rather than one-frame-at-a-time.
>
> In practice for the parallel ICP at Hyvision, I used OpenMP with dynamic scheduling because some source points have much denser local neighborhoods than others, making nearest-neighbor queries take variable time. Static scheduling would have left some threads idle while one finished a hard chunk."

**Key beats:**

- Dynamic work assignment via shared queue (OpenMP `schedule(dynamic)`)
- Work stealing (Intel TBB pattern)
- Work splitting for tasks too large for one thread
- Real example: parallel ICP used dynamic scheduling due to variable neighborhood density

#### S1.4 — Race conditions and how to avoid them (quick answer for warm-up)

> "A race condition is when two or more threads access shared state without synchronization and the outcome depends on which thread runs first. Classic example: two threads incrementing a counter without a lock — final value can be wrong because read-modify-write isn't atomic.
>
> Prevention: use mutexes around critical sections, use atomic types for single-variable updates (`std::atomic<int>` is cheaper than mutex for one counter), or design to avoid shared mutable state entirely (thread-local data + merge at the end). The last one is usually the best — locks are correct but slow; lock-free is fast but hard to get right."

**Key beats:**

- Definition: unsynchronized access to shared state, outcome depends on scheduling
- Three fixes: mutex (correct but slow), atomic (cheaper for single values), avoid shared state (best)

#### S1.5 — Deadlock — the 4 conditions and how to prevent it

> "Deadlock requires four conditions simultaneously: mutual exclusion, hold and wait, no preemption, and circular wait. Break any one and you can't deadlock.
>
> The most practical prevention is breaking circular wait — establish a global lock ordering and always acquire locks in that order across all threads. If thread A always takes lock 1 then lock 2, and thread B does the same, they can't deadlock on those two locks.
>
> Other practical patterns: `std::lock` and `std::scoped_lock` (C++17) atomically acquire multiple locks without ordering issues. Timeout-based acquisition (`try_lock_for`) lets a thread back off if it can't get a lock quickly, preventing indefinite blocking."

**Key beats:**

- Four conditions: mutual exclusion, hold-and-wait, no preemption, circular wait
- Prevention: break circular wait via global lock ordering
- C++17 `std::scoped_lock` for safe multi-lock acquisition
- `try_lock_for` for timeout-based backoff

---

### S2: ML System Design Framework

**Context:** A 45-minute system design question is likely in the technical screen, less likely in the VP meeting but possible. The question will probably be ML-flavored: "Design a real-time detection and tracking system for autonomous trucks using our LIDAR sensor" or similar. Use this 5-step template to structure any system design answer.

#### The 5-Step Framework

**Step 1: Clarify requirements (2-3 minutes)**

Ask before diving in. Examples:

- What's the latency budget? (Real-time at 10Hz vs batch processing)
- What's the data scale? (Single sensor vs fleet of vehicles vs offline corpus)
- Single modality or fused? (LIDAR-only vs LIDAR + camera + IMU)
- What's downstream consuming the output? (Path planner vs visualization vs storage)
- Onboard or offboard compute? (Edge GPU vs cloud server)
- What level of accuracy is needed? (Production-shipped or research prototype)
- Are there safety/redundancy requirements?

**Step 2: High-level architecture (5 minutes)**

Sketch the boxes. For a LIDAR perception system:

```
[LIDAR Sensor] → [Sensor Driver] → [Preprocessing] → [Detector]
                                                          ↓
                                                      [Tracker] → [Output API]
                                                          ↑
[Camera] → [Sync + Calib] ──────────────────────────────┘ (if fusion)
```

Name the technology choice for each box. Use Ouster vocabulary where relevant.

**Step 3: Component deep-dive (15 minutes)**

Go one box at a time. For each, name:

- Algorithm choice (e.g., CenterPoint for detector, ByteTrack for tracker)
- Why this choice given the requirements
- Key parameters
- Failure modes and mitigations

**Step 4: Data pipeline and training (5 minutes)**

How does the model get trained and updated?

- Data source: synthetic, real-world capture, customer fleets, mix
- Labeling: manual, semi-automated, self-supervised
- Training infra: single-GPU vs distributed, framework
- Versioning: model artifacts, dataset versions, reproducibility
- Drift detection: how to know when to retrain

**Step 5: Deployment, monitoring, iteration (5 minutes)**

- Deployment target: edge GPU, what hardware specifically
- Optimization: quantization (INT8?), TensorRT, ONNX
- Latency profiling: how to measure and where to look for bottlenecks
- Monitoring in production: what metrics, what triggers alerts
- Iteration loop: how do production failures feed back into retraining

#### S2 Worked Example: "Design real-time LIDAR detection and tracking for autonomous trucks"

**Clarifying questions to ask:**

> "Quick clarifications. What latency budget — assuming 10Hz LIDAR with detection needed each scan? What's the deployment hardware — Jetson AGX Orin or something more powerful? Are we LIDAR-only or fusing with cameras? And what's downstream — feeding a path planner that needs persistent track IDs, or just per-frame detections for a visualization?"

**Pretend they say: 100ms latency budget, Jetson AGX Orin, LIDAR-only for now, downstream is path planner that needs persistent IDs.**

**High-level architecture:**

> "Five-stage pipeline. Sensor driver pulls raw LIDAR packets from the Ouster sensor over UDP. Preprocessing runs ground removal and ROI cropping. Detector outputs 3D bounding boxes per scan. Tracker associates detections across scans to produce persistent track IDs. Output API publishes tracks to the path planner over a message bus."

**Component deep-dive:**

> "Detector: I'd start with CenterPoint over PointPillars representation. CenterPoint is anchor-free, fast on GPU, and proven on autonomous-driving benchmarks. PointPillars converts the LIDAR point cloud to a pseudo-image by collapsing the Z dimension into pillars, which lets me use 2D convolutions for speed. Inference target around 30-40ms on Orin.
>
> Tracker: ByteTrack on the detections. ByteTrack handles partial occlusion better than vanilla SORT by associating low-confidence detections in a second pass. For autonomous driving, persistence matters for path planning — losing a track of an adjacent vehicle for one frame is dangerous. ByteTrack's two-pass association is the right trade-off.
>
> Preprocessing: ground removal via RANSAC plane fit on the lower portion of the scan. ROI cropping to remove returns from the sky and beyond a configurable range (typically 100m). This drops the point count we feed into the detector by 30-50%, which directly improves latency.
>
> Sync and timing: LIDAR scans typically come asynchronously to other sensors. We'd timestamp every scan at the driver level using PTP synchronization, so downstream consumers can correlate with camera frames or IMU data even though we're LIDAR-only for now."

**Data pipeline:**

> "Training data is the hardest part for autonomous driving. We'd want a mix: customer fleet data with auto-labeled tracks for diversity, hand-labeled validation sets for evaluation, and synthetic data for rare edge cases (occluded pedestrians, unusual vehicles). Auto-labeling uses a heavier offline detection model to bootstrap labels from production data — the offline model can be 10x slower than the online one because it's not latency-constrained.
>
> Drift detection: monitor distribution shift on input statistics (point density, return intensity distribution) and on output statistics (detection counts per class, track lifetimes). Sudden shifts trigger investigation."

**Deployment:**

> "TensorRT compilation with INT8 quantization for the detector, calibrated on production-distribution data. The tracker is lighter weight, runs in pure C++. End-to-end latency target broken down: 5ms for preprocessing, 30-40ms for detector inference, 5ms for tracker association, 5ms for serialization to output. Total ~50ms, comfortably within the 100ms budget with headroom for downstream consumers.
>
> Monitoring: latency histogram per stage, detection count per class per minute, track ID switch rate, dropped frames at the sensor driver. Alerts on sustained latency violations or anomalous detection-count shifts."

#### Key tactical notes for system design

- **Always clarify before designing.** The clarifications are part of the score — they show you don't over-engineer for the wrong constraints.
- **Talk through trade-offs explicitly.** "I chose X because the latency budget rules out Y" is the senior-engineer signal.
- **Name technology choices with reasons, not just buzzwords.** "CenterPoint because it's anchor-free and fast on GPU" is better than "use a state-of-the-art detector."
- **Quantify wherever possible.** "30-40ms detector inference, 5ms preprocessing" is much stronger than "should be fast enough."
- **Acknowledge what you don't know.** "I'd want to benchmark the specific quantization accuracy hit before committing to INT8" is mature.

---

### S3: Senior Behavioral Additions

#### S3.1 — "How do you balance shipping under tight deadlines versus maintaining clean, optimized code?" (Technical Debt)

**Prepared answer:**

> "I treat this as a conscious trade-off conversation, not a personal preference. The framing I use: every shortcut taken to hit a deadline is a loan that has to be paid back with interest. The question isn't 'should we take the shortcut' — it's 'are we tracking the loan, and are we paying it back on a defined timeline?'
>
> Concretely, when I'm pushed to ship faster than would be ideal, I do three things. First, I document the shortcuts in the code itself — a TODO comment with a ticket reference, not just 'TODO fix this later.' Second, I open the actual ticket immediately, scope the work, and put it in the team's backlog with a target sprint. Third, I name the trade-off explicitly to the person asking for the speed — 'we can ship by Friday, but it'll cost us about three days of refactoring within the next two sprints. Confirming that's acceptable.'
>
> The anti-pattern I avoid is silent debt — where the engineer takes the shortcut without flagging it, the manager doesn't see the cost, and the codebase quietly degrades. That's how teams end up with unmaintainable systems and burnt-out engineers.
>
> The other anti-pattern is the opposite: refusing to ever take debt. Sometimes a customer commitment matters more than code quality, and refusing to take any debt is its own kind of failure. The job is judgment about which debts are worth taking, not zero debt."

**Key beats:**

- Debt is a loan that has to be paid back — track it, schedule it, name it
- Three actions: document in code, open ticket immediately, name trade-off to requester
- Anti-pattern 1: silent debt (engineer + manager both lose visibility)
- Anti-pattern 2: refusing all debt (rigidity is its own failure)
- The job is judgment about which debts are worth taking

#### S3.2 — "Tell me about a time you disagreed with a senior engineer or principal on architecture."

**Framing:** PLACEHOLDER — needs real story. Senior interviewers want to see you can disagree productively with someone more senior, not just peers. The story matters more than the answer. Key beats:

- Frame the other person's position charitably (they had real reasoning)
- Describe how I raised the disagreement (in conversation, with data not opinion)
- The resolution (often: I lost the argument, executed their plan, learned something OR I made my case, they updated their view, we landed on a hybrid)
- The lesson about how I operate now

**Strong story patterns to consider for B8 placeholder filling:**

- Architecture choice where I pushed back on a senior's preferred approach with data/benchmarks
- Estimation pushback where I argued the senior's timeline was unrealistic with specifics
- Scope or priority disagreement where I advocated for a different focus

**Avoid:** Stories where I "won" and the senior was clearly wrong. Stories about being underappreciated. Personal conflicts. Stories where I went around the senior to escalate.

#### S3.3 — "How do you explain technical trade-offs to non-software teams (hardware, optics, product)?"

**Prepared answer:**

> "Three principles.
>
> First, lead with the consequence, not the cause. Hardware and product people care about what happens, not how. Instead of 'the model uses a 4-byte FP32 per weight which is too large for our memory constraint,' I'd say 'this model won't fit on our target hardware. To fit, we'd need to either use INT8 quantization, which we'd need to validate, or pick a smaller model architecture, which would cost us about 2% accuracy.' Same information, different framing.
>
> Second, use analogies from their domain. Hardware engineers think about thermal budgets, power envelopes, and tolerances — I can frame ML trade-offs in those terms. 'Latency is to our perception system what bandwidth is to your sensor — there's a hard ceiling, and everything we do has to fit underneath.'
>
> Third, give them concrete trade-off options rather than abstract trade-offs. Don't say 'we can be more accurate or faster.' Say 'option A: 95% accuracy at 100ms, option B: 92% accuracy at 30ms, option C: 96% accuracy at 200ms.' Cross-functional partners can make decisions on concrete numbers; they can't on abstract dimensions.
>
> The mistake I try to avoid is using ML jargon as a shield. Saying 'we'd need to fine-tune with a custom loss function' to a product person is useless. Saying 'we'd need two weeks of model retraining' is the information they actually need."

**Key beats:**

- Lead with consequence, not cause
- Use analogies from their domain (thermal budgets for HW, etc.)
- Concrete trade-off options with numbers, not abstract dimensions
- Avoid: ML jargon as a shield

---

### S4: Network Protocols and Sensor Hardware Basics (for the resume-review category)

**Context:** Ouster engineers may probe how I think about sensor-level data flow. I don't have deep network protocol experience, but I can speak to the basics from my industrial hardware integration work (Basler GigE, PLC, NuDAQ).

#### S4.1 — "How would you handle packet loss in a UDP sensor stream?"

**Prepared answer:**

> "UDP doesn't guarantee delivery, so packet loss is expected and has to be handled at the application layer. Three approaches depending on what's lost.
>
> First, detect and skip. Each packet has a sequence number; the receiver tracks gaps. For perception data where one frame is independent of the next, missing one packet just means dropping that frame and processing the next one. For LIDAR specifically, this might mean dropping a partial scan and waiting for the next complete scan.
>
> Second, request retransmission for critical packets. If the data is small and order-sensitive — like calibration parameters or configuration updates — I'd send those over a reliable channel like TCP, not UDP. UDP is for high-throughput sensor data where occasional loss is acceptable; TCP is for control plane.
>
> Third, application-level FEC. If the data is critical and bandwidth allows, I could send redundant packets so a missing packet can be reconstructed. This is overkill for most LIDAR applications.
>
> For Ouster sensors specifically, the standard pattern would be detect-and-skip on the data plane (UDP) with TCP for the control plane (configuration). I'd build the application to be robust to occasional dropped scans rather than trying to recover every packet."

**Key beats:**

- UDP loss is expected, application layer handles it
- Detect-and-skip for independent frames
- TCP for control plane (calibration, config) — not data plane
- FEC for critical data when bandwidth allows
- Ouster pattern: UDP data + TCP control, app robust to dropped scans

#### S4.2 — "How does multi-camera hardware synchronization work?"

**Prepared answer:**

> "Two main approaches: software sync and hardware sync.
>
> Software sync uses timestamps. Each camera produces frames with a timestamp; the receiving application correlates by timestamp. This works if clocks are loosely synchronized via NTP or PTP, but you get sync precision limited by network and OS scheduling — maybe 10ms in practice. Fine for offline correlation, marginal for real-time perception.
>
> Hardware sync uses a physical trigger. A master trigger signal — generated by a GPIO line, dedicated trigger box, or PTP-synced clock pulse — is wired to all cameras. Each camera exposes its sensor when the trigger arrives. This gives microsecond-level sync precision. Required for stereo or for any application where you need to fuse cross-camera data at the same moment in time.
>
> At Luxolis I worked with a 6-camera Basler GigE array with hardware-triggered synchronization through a NuDAQ I/O board. The PLC drove the trigger signal, all six cameras exposed simultaneously, and the application received six synchronized frames per trigger pulse. Without hardware sync, the 360° defect detection wouldn't have worked because the geometric calibration between cameras assumes simultaneous capture."

**Key beats:**

- Software sync = timestamps + loosely-synced clocks, ~10ms precision
- Hardware sync = physical trigger to all sensors, microsecond precision
- Real example: Luxolis 6-camera Basler GigE + NuDAQ-driven PLC trigger
- Hardware sync was required because cross-camera geometric calibration assumed simultaneous capture

---

### Drill Priority for the Next 4 Days (Mon-Fri)

Given limited time, focus on the highest-probability items:

**Monday (today) — 3 hours:**

- [ ] Read the Senior-Engineer Supplement (S1-S4) once through
- [ ] Memorize S1.3 "load imbalance" answer — most likely threading question
- [ ] Memorize S3.1 technical debt answer
- [ ] Memorize the S2 system design 5-step framework (just the steps, not the worked example)

**Tuesday — 4-6 hours:**

- [ ] Practice the S2 worked example aloud — design LIDAR detection+tracking for autonomous trucks
- [ ] Read project deep-dives (P1-P3) twice through
- [ ] Memorize Risk #3c combined career arc answer
- [ ] Memorize B1 Why Ouster

**Wednesday — 4-6 hours:**

- [ ] Read Model Cheat Sheet M1-M20 once through
- [ ] Memorize top 10 models cold (M1, M2, M3, M11, M12, M13, M14, M15, M17, M18, M19)
- [ ] Drill the Dice + Focal Tversky custom loss walkthrough (centerpiece answer)
- [ ] Practice B13 questions to ask the VP

**Thursday — 4-6 hours:**

- [ ] Mock VP meeting with the new Claude conversation (or self-mock)
- [ ] Drill weak spots identified in mock
- [ ] Final pass on behavioral questions B1-B14
- [ ] Confirm 3 real stories for B4, B5, B8 (these placeholders need real content)

**Friday — 2 hours max + interview at 10pm:**

- [ ] Light re-read only, no new material
- [ ] Confirm tech setup (camera, mic, lighting, water)
- [ ] Eat well, nap if possible
- [ ] Show up rested

**What to deprioritize if time is tight:**

- Skip Tier 2 ML theory entirely (point cloud detection variants, edge optimization deep dive)
- Skip lower-priority models (M4, M5, M6, M7, M8, M9, M10, M16, M20)
- Skip W4 coding warm-ups beyond IoU (focus on warmups W1, W3, W5)
- Skip S4 network protocols unless they ask

---

## Model Cheat Sheet — Mechanics for CV-Listed Techniques

**Context:** Every model named on the resume is a potential interview question. A senior interviewer can pick any one and say "walk me through how that works internally." This section gives me a compact, fluent answer for each — enough mechanical depth to sound credible without overclaiming.

**Format per model:**

- **What it is** — 1 sentence
- **How it works** — 2-3 sentence mechanism
- **Key parameters / variants** — what knobs exist
- **Where I used it** — project context
- **Common interview trap** — what NOT to say

---

### M1: YOLO (You Only Look Once)

- **What it is:** Single-stage real-time object detector that predicts class + bounding box in one forward pass.
- **How it works:** Divides input image into a grid; each grid cell predicts bounding box offsets, objectness score, and class probabilities. Anchor-based versions (v3-v5) use predefined box priors from K-means clustering; anchor-free versions (v6, v8) predict box parameters directly from the feature pixel. Multi-scale via FPN/PAN neck for detecting different object sizes.
- **Key variants:** v3 (anchor + Darknet53), v5 (CSPDarknet + PANet), v8 (anchor-free + decoupled head), YOLOX (anchor-free with SimOTA assignment), YOLO-World (open-vocabulary). Loss = box regression (CIoU) + objectness (BCE) + classification (BCE).
- **Where I used it:** Pungkang 360° defect detection at Luxolis (6-camera real-time inference), Ellexi ALPR (plate detection), PPE compliance on Jetson.
- **Common trap:** Don't say YOLO is "the algorithm" — it's a family. Be ready to name the specific version you used and why (typically YOLOv5 or v8 for production).

---

### M2: DeepSORT (Deep Simple Online Realtime Tracking)

- **What it is:** Tracking-by-detection algorithm that associates per-frame detections into persistent tracks using motion + appearance.
- **How it works:** Per frame: (1) Kalman filter predicts each existing track's location; (2) for each (track, detection) pair, compute association cost = Mahalanobis distance in Kalman state space + cosine distance between appearance embeddings; (3) Hungarian algorithm solves the assignment; (4) update matched tracks, init unmatched detections, delete tracks unseen for N frames.
- **Key parameters:** Max age (frames before deletion), Re-ID feature gallery size per track, Mahalanobis distance gate threshold, cosine distance threshold for appearance.
- **Where I used it:** Ellexi ALPR (multi-vehicle tracking across gas-station cameras for billing association), Incheon Airport (person tracking).
- **Common trap:** Don't say "SORT plus deep features" without explaining the two-distance cost. The Mahalanobis-plus-cosine gating is the key DeepSORT contribution over SORT.

---

### M3: Mask R-CNN

- **What it is:** Two-stage instance segmentation network that extends Faster R-CNN with a parallel mask prediction branch.
- **How it works:** Backbone (typically ResNet+FPN) extracts features. Region Proposal Network (RPN) generates object candidates. ROI Align (not ROI Pooling) extracts fixed-size features per candidate without quantization artifacts. Three parallel heads on each ROI: classification, box regression, and a small FCN producing a binary mask per class.
- **Key parameters:** NMS IoU threshold, ROI batch size per image, mask resolution (typically 28×28 upsampled).
- **Where I used it:** Ellexi gas meter inspection (segmenting heavily degraded plate regions), defect inspection segmentation (where the Dice + Focal Tversky custom loss was applied).
- **Common trap:** Don't say "Faster R-CNN with a mask head" without mentioning ROI Align — that's the technical innovation that made dense mask prediction work at pixel precision.

---

### M4: U-Net / U2Net

- **What U-Net is:** Encoder-decoder segmentation architecture with skip connections from encoder to decoder at each resolution. The "U" shape: downsampling path captures context, upsampling path captures localization, skip connections preserve detail.
- **What U2Net is:** Nested U-Net — each block of the outer U-Net is itself a smaller U-Net (called Residual U-block, RSU). Deeply nested structure captures multi-scale context within each level. Outputs 7 side maps (6 intermediate + 1 fused) for deep supervision during training.
- **Key parameters:** Input resolution (typically 320×320 or 512×512), number of RSU blocks per level (controls capacity vs speed), deep supervision loss weights across the 7 outputs.
- **Where I used it:** PERSPECTIVE cloth segmentation for virtual try-on pipeline (fine-tuned on domain cloth data, standard architecture, BCE loss in production).
- **Common trap:** Don't claim I modified U2Net's internal architecture for production — I explored modifications (boundary-aware loss, trimap branch) but the shipped version was off-the-shelf. See `answer.md` Q1.x for the calibrated answer.

---

### M5: HRNet (High-Resolution Network)

- **What it is:** Backbone designed for tasks needing precise spatial localization (pose estimation, segmentation) by maintaining high-resolution feature maps throughout the network.
- **How it works:** Unlike standard backbones that downsample aggressively then upsample, HRNet keeps a high-resolution branch all the way through, while spawning parallel lower-resolution branches that exchange information at each stage. The output has both fine spatial detail and rich semantic context.
- **Key parameters:** Number of stages (W18 = small, W32/W48 = larger), resolution of each parallel branch.
- **Where I used it:** Incheon Airport human pose estimation as part of the YOWO + HRNet + Re-ID multi-camera pipeline for behavior analysis.
- **Common trap:** Don't say "it's like ResNet" — the parallel multi-resolution branches and the cross-resolution fusion are what make HRNet different. The "high resolution maintained throughout" is the key idea.

---

### M6: YOWO (You Only Watch Once)

- **What it is:** Real-time spatio-temporal action detection network. Detects actions in video by combining 2D appearance features with 3D temporal features.
- **How it works:** Two-branch architecture. 2D backbone (typically Darknet) processes the current frame for spatial features. 3D backbone (3D ResNeXt) processes a clip of K consecutive frames for temporal features. Features are fused at the head, which outputs bounding boxes plus action class. Single-stage, end-to-end trainable.
- **Key parameters:** Clip length K (typically 16 frames), number of action classes, IoU threshold for detection NMS.
- **Where I used it:** Incheon Airport anomaly detection — detecting falls, sprinting, abandoned baggage as time-extended actions, not single-frame classifications.
- **Common trap:** Don't describe YOWO as "just action recognition" — it's spatio-temporal localization, meaning it produces both where (bounding box) and what (action class). That's harder than classification.

---

### M7: Person Re-Identification (Re-ID)

- **What it is:** A learned appearance embedding network that maps an image of a person to a fixed-length feature vector. Same identity → vectors close together; different identities → vectors far apart.
- **How it works:** Backbone (typically ResNet50 or OSNet) extracts features; final layer projects to a 128-dim or 512-dim embedding. Trained with metric learning losses — triplet loss (anchor, positive, negative) or contrastive loss with hard negative mining. At inference, compare embeddings with cosine distance for matching.
- **Key parameters:** Embedding dimension, training dataset (Market-1501, MARS, MSMT17), distance threshold for "same person" decision.
- **Where I used it:** Incheon Airport multi-camera tracking — when a person disappeared from one camera and reappeared in another, Re-ID embeddings determined whether it was the same identity.
- **Common trap:** Don't conflate Re-ID with face recognition. Re-ID uses full-body appearance (clothing, build, gait); face recognition is face-specific. Re-ID is robust to face occlusion but fails when the person changes clothes.

---

### M8: CRAFT (Character Region Awareness for Text Detection)

- **What it is:** Text detection network that produces per-character heatmaps rather than word-level bounding boxes.
- **How it works:** Two output heatmaps: region score (probability that each pixel is inside a character) and affinity score (probability that each pixel is between two adjacent characters). Post-processing groups high-region pixels into character regions, then uses affinity scores to merge adjacent characters into words. Works at pixel level so it handles curved text, rotated text, and varying scale.
- **Key parameters:** Region score threshold, affinity score threshold, text line grouping logic.
- **Where I used it:** Ellexi gas meter inspection (detecting heavily degraded date stamps in field images with arbitrary text orientation).
- **Common trap:** Don't describe CRAFT as outputting bounding boxes directly — it outputs heatmaps. The bounding boxes are derived in post-processing.

---

### M9: CRNN (Convolutional Recurrent Neural Network)

- **What it is:** End-to-end neural network for sequence recognition from images, designed for OCR.
- **How it works:** CNN backbone extracts a sequence of feature columns from the input image (each column = features for a vertical slice). Bidirectional LSTM processes the sequence to capture context in both directions. CTC (Connectionist Temporal Classification) decoder converts the per-column predictions into a variable-length character sequence without requiring per-character alignment in training labels.
- **Key parameters:** Feature column width, LSTM hidden size, CTC blank token for alignment-free training.
- **Where I used it:** Ellexi ALPR (character recognition on cropped, perspective-rectified license plates).
- **Common trap:** Don't forget CTC's role. The reason CRNN works for variable-length sequences is CTC, not the LSTM. Without CTC you'd need per-character bounding box annotations during training, which would be impractical.

---

### M10: Tesseract OCR

- **What it is:** Open-source OCR engine, originally rule-based, modernized to use LSTM-based line recognition in v4+.
- **How it works:** v4+ uses bidirectional LSTM on text line images. Page layout analysis first segments the input into lines, then each line is fed to the LSTM recognizer. Outputs UTF-8 text plus per-character confidence.
- **Key parameters:** Language model (eng, kor, etc.), page segmentation mode (PSM — single line, sparse text, etc.), OCR engine mode.
- **Where I used it:** Ellexi gas meter inspection (extracting date text after CRAFT located it).
- **Common trap:** Don't pitch Tesseract as state-of-the-art. It's reliable, well-supported, and free, but modern transformer-based OCR like TrOCR is more accurate. The reason to use Tesseract is engineering pragmatism (no GPU needed, mature integration), not accuracy.

---

### M11: ResNet50

- **What it is:** 50-layer deep CNN backbone with residual (skip) connections that enabled training very deep networks without vanishing gradients.
- **How it works:** Each "residual block" computes f(x) + x, where f is the learned transformation and the +x is a skip connection that lets the gradient flow directly past the block. Architecture: initial conv + 4 stages of bottleneck residual blocks (with 1x1, 3x3, 1x1 conv pattern), global average pooling, fully connected classifier.
- **Key parameters:** Pretrained weights (ImageNet vs random init), input resolution, batch normalization momentum, learning rate schedule for fine-tuning.
- **Where I used it:** PERSPECTIVE apparel classifier (3-depth hierarchical taxonomy, fine-tuned ResNet50 backbone with weighted multi-task cross-entropy across heads).
- **Common trap:** Don't claim novel architecture work on ResNet50 — it's a backbone, you fine-tuned it. The "custom" part of your apparel classifier work was the multi-head architecture and training recipe, not the backbone itself.

---

### M12: OpenLRM (Large Reconstruction Model)

- **What it is:** Transformer-based single-image-to-3D mesh reconstruction model. Takes one RGB image, outputs a 3D mesh.
- **How it works:** Vision transformer backbone encodes the input image into image tokens. A triplane (3-plane) decoder produces 3-axis-aligned feature maps that implicitly represent a 3D radiance field. Marching cubes or similar mesh extraction converts the implicit field to an explicit triangle mesh. The training objective combines render loss (compare rendered views to ground truth multi-view images) and geometric losses.
- **Key parameters:** Input image resolution, transformer depth, triplane resolution, number of rendered views for training supervision.
- **Where I used it:** PERSPECTIVE single-image to 3D mesh pipeline (IoU 0.80, Chamfer Distance 0.08, trained with custom 24×360° Blender multi-view renders enhanced by ESRGAN).
- **Common trap:** Don't claim I modified internal LRM architecture — what I did was fine-tune on a custom synthetic multi-view dataset and adjusted the input pipeline. The transformer + triplane architecture stayed standard. See the "Architecture Modification" reframe for honesty.

---

### M13: Latent Diffusion (LDM) / Stable Diffusion

- **What it is:** Diffusion model that operates in a learned compressed latent space rather than pixel space, making high-resolution image generation tractable.
- **How it works:** Three-component architecture. (1) VAE compresses 512×512 RGB images to 64×64 latent codes (8x downsampling). (2) U-Net denoiser is trained to predict noise on noisy latents; at inference it iteratively denoises starting from pure noise, conditioned on text or other signals. (3) Text encoder (typically CLIP text encoder) embeds the prompt; cross-attention in the U-Net injects text features at each denoising step.
- **Key parameters:** Number of denoising steps (typically 20-50 with samplers like DDIM or PNDM), classifier-free guidance scale (CFG, typically 7.5), VAE downsampling factor.
- **Where I used it:** PERSPECTIVE virtual try-on (fine-tuned LADi-VTON which builds on LDM, with garment conditioning).
- **Common trap:** Don't say diffusion "generates images from text" without mentioning the iterative denoising loop and the latent-space compression. Those are the two reasons LDM works where pixel-space diffusion didn't scale.

---

### M14: LADi-VTON

- **What it is:** Latent diffusion model specifically designed for virtual try-on — overlaying a target garment onto a person image while preserving identity.
- **How it works:** Built on Stable Diffusion U-Net but with garment-aware conditioning. The denoiser is conditioned on three inputs: the person image (with garment region masked out), the target garment image, and human-pose information from DensePose. Two key innovations: textual inversion of the garment into a learned pseudo-word so CLIP can condition on garment identity, and warping module that pre-aligns the garment to the person's pose before denoising.
- **Key parameters:** Number of denoising steps, CFG scale, pseudo-word token dimension for textual inversion, warping module type.
- **Where I used it:** PERSPECTIVE virtual try-on pipeline (fine-tuned on commercial fashion dataset, deployed on AWS, reached 85%+ visual fidelity).
- **Common trap:** Don't describe LADi-VTON as "just Stable Diffusion for clothes." The textual inversion of garments into pseudo-words and the DensePose + warping conditioning are what make it work for try-on specifically.

---

### M15: CLIP (Contrastive Language-Image Pretraining)

- **What it is:** Joint image + text encoder trained on 400M image-text pairs from the internet. Produces embeddings where images and their text descriptions are close in a shared vector space.
- **How it works:** Two encoders — vision transformer for images, text transformer for text. Trained with contrastive loss: in a batch of N image-text pairs, push correct pair embeddings together, push incorrect pairs apart. After training, can do zero-shot classification by comparing image embedding to text embeddings of class names ("a photo of a dog" vs "a photo of a cat").
- **Key parameters:** Vision backbone (ViT-B/32, ViT-L/14, etc.), text context length, contrastive temperature.
- **Where I used it:** PERSPECTIVE virtual try-on pipeline — CLIP's text encoder for textual inversion of garment identity, projecting the visual garment features into the CLIP text space so the diffusion model could condition on them.
- **Common trap:** Don't describe CLIP as "image classification" — it's a representation learning model. The zero-shot classification is a downstream use; the embeddings are the actual output.

---

### M16: DensePose

- **What it is:** Network that maps every human pixel to its corresponding point on a canonical 3D body model (SMPL).
- **How it works:** Extends Mask R-CNN architecture with two additional heads on each person ROI: (1) part classification (which body part — head, torso, left arm, etc.), (2) per-part UV coordinate regression (continuous 2D coordinates within the part's canonical surface). The output is a dense pixel-to-surface correspondence.
- **Key parameters:** Number of body parts (typically 24 for SMPL), UV resolution per part.
- **Where I used it:** PERSPECTIVE virtual try-on (provided pose-aware human geometry that LADi-VTON conditioned on, so the garment could be warped onto the correct body region).
- **Common trap:** Don't confuse DensePose with 2D pose estimation (which gives keypoints like elbows and wrists). DensePose gives dense surface coordinates, not sparse keypoints. It's a richer representation but harder to compute.

---

### M17: FoundationPose

- **What it is:** Foundation model for 6-DoF object pose estimation that generalizes to novel objects given only their 3D CAD model at test time — no per-object retraining.
- **How it works:** Two phases. (1) Hypothesis generation: render the CAD model from many candidate poses, use a transformer scorer to rank which pose best matches the observed RGB-D. (2) Iterative refinement: a refinement network takes current pose, renders the model at that pose, computes residual, predicts pose delta. Repeat for several iterations.
- **Key parameters:** Number of pose hypotheses sampled, refinement iterations, depth weight in the scoring function.
- **Where I used it:** Luxolis Hwacheon CNC machining (eye-in-hand 6-DoF pose for autonomous workpiece registration, refined with ICP for sub-millimeter alignment).
- **Common trap:** Don't claim FoundationPose alone hit sub-millimeter accuracy. It gave good initialization (few-mm residual); the ICP refinement closed the gap to sub-mm.

---

### M18: ICP (Iterative Closest Point)

- **What it is:** Classical algorithm for finding the rigid transform (rotation + translation) that best aligns two point clouds.
- **How it works:** Loop: (1) for each source point, find closest target point via KD-tree lookup; (2) compute optimal rigid transform from these correspondences (closed-form via SVD on the cross-covariance matrix for point-to-point variant); (3) apply transform to source; (4) repeat until convergence. Variants change the error metric: point-to-point uses Euclidean distance; point-to-plane uses distance to the tangent plane at the target point (faster convergence on smooth surfaces).
- **Key parameters:** Max iterations, convergence threshold, max correspondence distance, variant (point-to-point, point-to-plane, GICP, trimmed ICP).
- **Where I used it:** Hyvision Apple project (sub-millimeter mesh registration), Luxolis 6-DoF pose refinement, multiple metrology pipelines.
- **Common trap:** Don't claim ICP is robust to initialization — it's a local optimizer that converges to local minima. It needs a good initial guess (from FoundationPose, landmark registration, or fixture constraints). See the Hyvision project deep-dive for the symmetric-feature handling story.

---

### M19: RANSAC (Random Sample Consensus)

- **What it is:** Algorithm for robustly fitting a parametric model (line, plane, cylinder) to data with a high outlier rate.
- **How it works:** Iterate: (1) randomly sample the minimum points needed for the model (3 for a plane); (2) fit the model to those points; (3) count inliers — points whose distance to the model is below threshold; (4) keep the model with most inliers. After N iterations, refit using all inliers via least squares. N is chosen so that probability of at least one all-inlier sample is high (e.g., 99%).
- **Key parameters:** Inlier distance threshold (tune to sensor noise), number of iterations N, minimum inlier count to accept the model.
- **Where I used it:** Hyvision Apple project (plane fitting on reference surfaces, edge fitting for coordinate frame estimation), Ellexi geometric measurement.
- **Common trap:** Don't say "RANSAC is for outlier removal" — that's a side effect. RANSAC is for robust model fitting; the inlier/outlier split is the byproduct.

---

### M20: ESRGAN (Enhanced Super-Resolution GAN)

- **What it is:** GAN-based super-resolution network that upscales low-resolution images to high-resolution with photorealistic textures.
- **How it works:** Generator uses Residual-in-Residual Dense Blocks (RRDB) — deeper than original SRGAN. Trained with three losses: pixel-level L1, VGG-based perceptual loss (encourages perceptually similar features), and adversarial loss from a discriminator that distinguishes real high-res from upsampled. The combination produces sharper, more realistic textures than pixel-loss-only methods that tend toward blurry outputs.
- **Key parameters:** Upscale factor (typically 4x), number of RRDB blocks, loss weighting (pixel vs perceptual vs adversarial).
- **Where I used it:** PERSPECTIVE multi-view synthetic data generation — enhanced 24×360° Blender renders before using as OpenLRM training data, to push texture realism closer to real product photos.
- **Common trap:** Don't describe ESRGAN as "upscaling" without mentioning the perceptual + adversarial losses. Pixel-loss-only upscalers (SRCNN, bicubic) produce blurry results. The perceptual + adversarial training is what makes ESRGAN look "real."

---

### Model Cheat Sheet — Drill Priority

**Top 10 to memorize cold given Ouster's job description:**

- [ ] M1 YOLO — central to detection
- [ ] M2 DeepSORT — central to tracking (JD explicitly names it)
- [ ] M17 FoundationPose — most recent ML work, foundation model
- [ ] M18 ICP — daily work, point cloud staple
- [ ] M19 RANSAC — point cloud staple
- [ ] M11 ResNet50 — backbone fundamentals
- [ ] M3 Mask R-CNN — segmentation fundamentals
- [ ] M12 OpenLRM — modern 3D reconstruction
- [ ] M13 Latent Diffusion + M14 LADi-VTON — generative AI fundamentals
- [ ] M15 CLIP — multimodal fundamentals

**Lower priority (drill if time):**

- M4 U2Net, M5 HRNet, M6 YOWO, M7 Person Re-ID, M8 CRAFT, M9 CRNN, M10 Tesseract, M16 DensePose, M20 ESRGAN

**Delivery tips for each:**

- Lead with "what it is" — 1 crisp sentence
- Then "how it works" mechanism — 2-3 sentences
- If they push, name parameters and where I used it
- ALWAYS calibrate the "where I used it" line honestly — see the Common Trap entries

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
