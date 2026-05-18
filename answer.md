# Interview Q&A — Prepared Answers

> ⚠️ READ FIRST: This file contains prepared answers for specific interview questions. Each answer is calibrated to the truth: what I actually shipped vs. what I explored vs. what I'd do today. **Do not overclaim.** When the answer says "explored but did not ship," say exactly that. Senior interviewers can smell fabrication — calibrated honesty is the strongest move.

---

## How to Use This File

- Read the question, then the framing notes, then the prepared answer aloud
- Practice each answer 3-5 times until the structure is natural (don't memorize word-for-word)
- The **Key beats** list at the bottom of each answer is what to remember if you blank in the interview
- The **Common follow-ups** are the next questions the interviewer is likely to ask after this one

---

## Section 1: U2Net Cloth Segmentation — Exploration vs. Shipped

**Critical context for this whole section:** At PERSPECTIVE, I shipped a fine-tuned U2Net using standard architecture and standard losses. Separately, I explored more advanced techniques (boundary-aware loss, attention modules, trimap-style architecture mods) but these did NOT ship to production. My answers must be honest about this distinction. If asked about U2Net customization, lead with what I actually shipped, then offer the exploration as "what I'd do today."

---

### Q1.1: "Did you customize the U2Net architecture for cloth segmentation?"

**Framing:** They want to know if I'm someone who modifies models or just imports them. Honest answer: the shipped version was largely off-the-shelf, but I have legitimate exploration to talk about. Don't overclaim shipped customization.

**Prepared answer:**

> "The shipped U2Net implementation at PERSPECTIVE was largely off-the-shelf. I fine-tuned it on our domain-specific cloth dataset, tuned the training recipe, and integrated it as the segmentation foundation for the downstream virtual try-on pipeline. The architecture itself stayed standard.
>
> Separately, I spent meaningful time exploring customizations to handle two specific failure modes we saw in production. The first was the halo effect on translucent fabrics like lace, where the model produced soft blurry edges that left ugly white outlines after background removal. The second was the dilution effect, where standard loss functions ignored 2-pixel errors at the edge because the 99% correct interior dominated the gradient.
>
> The exploration included a boundary-aware loss approach and a trimap-style architecture sketch. Neither went to production — we met the customer's accuracy spec with the standard U2Net and careful fine-tuning, so the deeper customization got deprioritized. But the design space is something I've thought about substantially, and it's the direction I'd take if I were optimizing for matting-quality output."

**Key beats:**
- Shipped = standard U2Net + fine-tuning
- Explored = boundary-aware loss, trimap branch, attention modules
- Why didn't ship = met customer spec without it, prioritization
- Closing = direction I'd take today for higher fidelity

**Common follow-ups:** Q1.2, Q1.3, Q1.4, Q1.5 below.

---

### Q1.2: "What was the boundary-aware loss approach you explored?"

**Framing:** They're asking for technical depth on the exploration. I can describe the concept clearly because I understand it. I cannot cite specific code or specific metrics because I didn't ship it. If they ask for code on a whiteboard, be honest that I'd want to verify the exact API but can sketch the core operations.

**Prepared answer:**

> "The core idea was that standard BCE loss treats every pixel equally, so a 2-pixel boundary error on a T-shirt gets drowned out by the millions of correctly-classified interior pixels. The loss doesn't have enough gradient signal at the boundary to drive edge precision.
>
> The approach was a combined loss with three terms. First, a standard global BCE over the whole mask to learn the macro shape. Second, a boundary-targeted BCE that dynamically extracts a 3-pixel edge band from the ground truth using morphological operations — dilation minus erosion gives you the edge — then computes BCE only on those boundary pixels. That term forces the model to obsess over edges. Third, an SSIM term applied to the mask to penalize blurry gray gradients that cause the halo effect on translucent fabrics.
>
> The morphological operations are straightforward in PyTorch — dilation is `F.max_pool2d(mask, kernel)`, erosion is `-F.max_pool2d(-mask, kernel)`, the edge band is the difference. I'd weight the boundary term heavier than the global BCE to push the gradient signal where it matters.
>
> To be precise: I prototyped this but didn't run a full training run to production-grade convergence, so I don't have shipped metrics for it. The concept is sound but the actual training stability and convergence behavior would need empirical work."

**Key beats:**
- Three terms: global BCE (shape) + boundary BCE (edge obsession) + SSIM (anti-halo)
- Boundary extraction via dilate-erode using max_pool2d
- Heavier weight on boundary term to push gradient where it matters
- Honest disclosure: prototyped but not fully shipped, no production metrics

**Common follow-ups:** Q1.3, Q1.5, Q1.6.

---

### Q1.3: "Walk me through implementing the boundary extraction on a whiteboard."

**Framing:** Technical depth check. I can write pseudocode. If I'm uncertain about exact PyTorch API details, say so honestly — better than writing wrong code confidently.

**Prepared answer (verbal sketch):**

> "Sure. The principle is morphological operations on the binary mask. Dilation expands the white region by a pixel-radius; erosion shrinks it. The difference is the boundary band.
>
> In PyTorch, you can implement both with max-pooling. For dilation with thickness 1, you'd use `F.max_pool2d(mask, kernel_size=3, stride=1, padding=1)` — that takes the max over a 3x3 neighborhood, which effectively expands any white pixel into its neighbors.
>
> For erosion, the trick is to negate the input, max-pool, and negate again: `-F.max_pool2d(-mask, kernel_size=3, stride=1, padding=1)`. Taking the max of the negative is equivalent to taking the min, which shrinks the white region.
>
> The boundary is `dilated - eroded`. You'd get a 1-pixel-thick band where the dilated and eroded masks disagree.
>
> For the loss, you then compute `pred_at_boundary = pred * boundary_mask` and `target_at_boundary = target * boundary_mask`, and run BCE on those.
>
> To be precise: I'd want to double-check the padding behavior for image edges before committing this to production. And the kernel size controls the band thickness — for thickness 2 you'd use kernel size 5, padding 2."

**Key beats:**
- Dilation = max_pool2d on positive mask
- Erosion = negate, max_pool2d, negate (trick to get min via max)
- Boundary = dilated - eroded
- Mask the pred and target by the boundary, then compute BCE
- Honest hedge: padding behavior, kernel size to thickness mapping

**Common follow-ups:** Q1.4, Q1.6.

---

### Q1.4: "Why SSIM on a binary mask? SSIM is normally for natural images."

**Framing:** Sharp technical question. Be honest that this is an unusual choice with gotchas.

**Prepared answer:**

> "Fair point — SSIM is unusual on masks. The motivation is that SSIM penalizes structural and luminance differences, so applied to a soft-output mask it discourages blurry gray gradients in favor of sharp 0-or-1 transitions. That directly attacks the halo problem on translucent fabrics where the model hedges with soft gray edges.
>
> The gotchas are real. SSIM's denominator involves luminance and contrast statistics, which can behave weirdly when both pred and target are mostly zero — large background regions with near-uniform low values. You can get unstable gradients or near-zero loss signal from those regions. In a production training run I'd want to either restrict SSIM to a region around the foreground, or weight it down relative to the other terms.
>
> Honestly — I explored this conceptually but didn't run a full training to characterize the failure modes. If you've worked with SSIM on masks in production, I'd be curious how you handled the all-zero region behavior."

**Key beats:**
- SSIM penalizes blur → anti-halo motivation
- Acknowledge gotcha: weird behavior on near-uniform zero regions
- Honest disclosure of exploration depth
- Offer to learn from interviewer's experience (shows humility + curiosity)

**Common follow-ups:** Q1.5, Q1.6.

---

### Q1.5: "What was the trimap-style architecture modification you sketched?"

**Framing:** This is sophisticated work to describe — Deep Image Matting territory (Xu et al. 2017). Be precise about it being a sketch, not a shipped implementation.

**Prepared answer:**

> "The motivation was that binary segmentation forces the model to make a hard yes/no decision on every pixel, including pixels that are genuinely ambiguous — like a strand of hair, a lace edge, or a translucent fabric where the right answer is an alpha value between 0 and 1.
>
> The sketched architecture replaced the final 1x1 convolution of U2Net with a branching head that produced three outputs in parallel: one channel for absolute foreground confidence, one for absolute background confidence, and a third for an unknown-boundary region — essentially a 5-pixel band along the predicted edge. The unknown-region pixels would then route to a small matting head that solves for the continuous alpha value rather than a hard label.
>
> The inspiration is Deep Image Matting style approaches. The challenge with shipping this is that supervised trimap training typically needs ground-truth alpha mattes, which we didn't have. The workaround I'd explore is synthesizing trimaps from binary masks using the same dilate-erode trick — automatically generate a known-foreground core, a known-background outer region, and an unknown band in between — and train the matting head with a composition loss that compares `pred_alpha * fg + (1 - pred_alpha) * bg` against the ground truth composite.
>
> To be precise: this was a paper-and-whiteboard exploration, not implemented or trained. If we'd needed matting-quality output for the try-on pipeline, this is the direction I'd have prototyped first."

**Key beats:**
- Why: binary forces hard decisions on ambiguous edges (hair, lace, translucent)
- Architecture: branch final conv into 3 outputs (FG, BG, unknown boundary band)
- Routes unknown-region pixels to matting head for continuous alpha
- Inspired by Deep Image Matting (Xu et al. 2017)
- Trimap supervision challenge: synthesize from binary via dilate-erode
- Honest: paper-and-whiteboard, not implemented

**Common follow-ups:** Q1.6, Q1.7.

---

### Q1.6: "How would you generate trimaps for training if you didn't have ground-truth alpha mattes?"

**Framing:** They're testing whether I understand the data side, not just the architecture. This is a real engineering question.

**Prepared answer:**

> "The standard trick is to bootstrap trimaps from your existing binary masks. You take the binary ground truth and apply morphological operations: erode aggressively to get a known-foreground core that you're confident is interior, dilate aggressively to get a region you're confident contains the object, then everything between the eroded interior and the dilated exterior becomes the unknown band where the model needs to predict alpha.
>
> The bandwidth of the unknown region is a hyperparameter. Narrower bands give cleaner training signal but limit how much edge ambiguity the model can handle at inference. Wider bands handle more ambiguity but make the matting task harder. I'd start with something like 5-10 pixels on each side of the binary boundary and tune empirically.
>
> The downside of this approach is that you're not actually training on true alpha values — your supervision signal is still based on binary masks. So the model learns to produce sensible-looking alpha values in the unknown region, but you can't formally measure matting accuracy. For really high-end matting you'd want a small set of hand-annotated alpha mattes for validation, even if your training data is bootstrapped.
>
> The composition loss helps because it doesn't directly require alpha supervision — you composite predicted alpha against background and compare to the ground truth image, which works on standard RGB data."

**Key beats:**
- Bootstrap trimaps from binary via dilate-erode
- Known-FG = aggressive erosion; known-BG = inverse aggressive dilation; unknown = the gap
- Bandwidth is a hyperparameter (5-10 px each side as starting point)
- Honest tradeoff: bootstrapped supervision can't validate true matting accuracy
- Composition loss = train via RGB compositing, doesn't require alpha supervision

**Common follow-ups:** Q1.7, Q2.1.

---

### Q1.7: "Did you actually ship any of the matting work? What's the production version?"

**Framing:** Direct truth question. Answer honestly.

**Prepared answer:**

> "No, the matting work didn't ship. The production cloth segmentation at PERSPECTIVE was fine-tuned U2Net with standard binary cross-entropy loss, producing binary masks that fed into the downstream Latent Diffusion virtual try-on pipeline. That was sufficient for the product targets we had — the diffusion model could handle some edge softness on its own.
>
> The matting exploration was driven by a specific failure case where lace and translucent fabrics looked unnatural after compositing, and I was looking ahead at what we'd need if we pushed for higher visual fidelity. It got prioritized below other work that had clearer product impact, so it stayed as exploration.
>
> If I were rebuilding the pipeline today for higher-fidelity output, matting is where I'd invest. The infrastructure for evaluating it — collecting a small alpha-matte test set, setting up the composition loss with synthetic trimaps — is the first thing I'd build."

**Key beats:**
- Shipped = standard U2Net + BCE + binary masks
- Sufficient because downstream diffusion model tolerated some edge softness
- Matting exploration was forward-looking, deprioritized for higher-impact work
- If rebuilding today: invest in matting, start with eval infrastructure

**Common follow-ups:** End of section, or transition to general questions about prioritization.

---

## Section 2: General Custom Architecture / Loss Questions

---

### Q2.1: "Tell me about a custom loss function you've implemented in production."

**Framing:** This is the centerpiece question. Lead with Dice + Focal Tversky (real shipped code). Do NOT lead with the U2Net boundary-aware loss (didn't ship). Do NOT lead with the hierarchical classifier weighted-multi-task (was generously framed as custom on resume but is really just weighted CE).

**Prepared answer:**

> "I worked on a segmentation problem for industrial defect inspection where target defects were tiny — sometimes just a handful of pixels in an image with millions of background pixels. Standard cross-entropy and even standard Dice loss both failed because the network would predict 'background' everywhere and still achieve over 99% pixel accuracy.
>
> I built a combined loss: 50% Dice loss plus 50% Focal Tversky loss. Dice handles the spatial overlap — keeps the predicted region coherent and well-shaped. Focal Tversky handles two things: the Tversky index gives me asymmetric control over false positives versus false negatives through alpha and beta parameters, and the focal exponent gamma makes the network concentrate gradient signal on hard examples.
>
> Our customer cared much more about missing a defect than about a false alarm, so I set alpha equal to 0.2 and beta equal to 0.8 — heavy penalty on false negatives. Gamma equal to 2 gave good focusing on hard examples without destabilizing training. The 50/50 weighting between Dice and Focal Tversky was the empirical sweet spot — I tried 30/70 and 70/30 in both directions and equal was best.
>
> I started with BCE plus Dice, which is the standard segmentation combination, but BCE's gradient gets washed out when 99% of pixels are background. Switching to Focal Tversky specifically addressed the class-imbalance problem.
>
> If I were redoing this today I'd consider Lovász hinge loss for direct IoU optimization, or a learnable alpha-beta where the model adapts the FP/FN tradeoff per region. Happy to walk through the implementation code if useful."

**Key beats:**
- Problem: tiny defects, severe class imbalance, standard losses fail
- Solution: 50/50 Dice + Focal Tversky
- Dice = spatial coherence; Focal Tversky = imbalance + FP/FN asymmetry + hard-example focus
- Parameters: alpha=0.2, beta=0.8, gamma=2.0, weighting=0.5/0.5
- Iteration history: BCE+Dice → FocalTversky+Dice (commented out in code)
- Today: Lovász hinge or learnable alpha-beta

**Common follow-ups:** Q2.2, Q2.3, the 8 follow-ups from the prep doc.

---

### Q2.2: "Tell me about a custom architecture modification you've done."

**Framing:** This is harder than Q2.1 because my strongest architecture-modification story is the U2Net trimap branch which didn't ship. Be honest about what I actually shipped vs. explored. Real shipped architecture work includes the node-based 3D rendering engine at Hyvision (ECS plugin architecture is a real system design) but that's not a deep learning architecture. For DL architecture modification, my honest answer involves smaller shipped modifications rather than novel architectures.

**Prepared answer:**

> "I want to be precise about what I've shipped versus explored. The shipped DL architecture work is mostly fine-tuning and head replacement — adapting existing architectures to new domains rather than designing novel networks. For example, at PERSPECTIVE I worked with OpenLRM, a transformer-based 3D reconstruction model, and adapted it for our use case by fine-tuning on a custom synthetic multi-view dataset and adjusting the input pipeline. The internal layers stayed largely standard.
>
> The deeper architecture exploration I did was on U2Net cloth segmentation, where I sketched a trimap-style head that would branch the final layer into foreground, background, and unknown-boundary outputs with a dedicated matting calculation for the unknown region. That sketch didn't ship — we met our accuracy targets with the standard architecture — but it's the kind of architecture-level thinking I'd apply if a customer requirement pushed for matting-quality output.
>
> On the systems side, I did ship a significant architecture: a modular 3D rendering engine in C# .NET 8 with an entity-component-system pattern and a plugin system. It's a software architecture rather than a neural network architecture, but it's a real production system I designed end-to-end. It enables non-programmers to compose inspection pipelines through a node-based visual editor, which is the kind of customer-facing tooling pattern that translates well to ML-tooling work too.
>
> If the question is specifically about modifying deep neural network internals, my honest answer is that I'm comfortable with fine-tuning, custom losses, head replacement, and architecture sketching for specific failure modes — but I haven't designed a novel architecture from scratch and shipped it. That's an area where I'd want to grow."

**Key beats:**
- Be honest: shipped DL work = fine-tuning + head replacement, not novel architectures
- Shipped non-DL architecture: Hyvision 3D rendering engine with ECS + plugin
- Explored DL architecture: U2Net trimap branch (didn't ship)
- Honest growth statement at the end — senior trait
- Don't claim novel architecture design

**Common follow-ups:** Q1.5 (if they pull on the trimap thread), or transition to other topics.

---

### Q2.3: "What's the difference between custom layers, custom architecture, and custom loss?"

**Framing:** Conceptual depth check. Cheap to answer well. Use the factory analogy from concepts.md.

**Prepared answer:**

> "Three different levels of intervention:
>
> Custom layers are the building blocks — specialized operations you insert at specific points in the network. An example is a Spatial Edge-Attention module that takes a deep semantic feature map, runs it through sigmoid to create an attention mask, and multiplies it against a shallow feature map to filter out background noise from the high-resolution path. It's a localized intervention that changes what specific features flow forward.
>
> Custom architecture is the layout — how layers are wired together into a network. An example is replacing a final binary classification head with a three-way trimap branch that produces foreground, background, and unknown-boundary outputs in parallel. You're changing the topology of the network, not just its components.
>
> Custom loss is the supervision — the signal that tells the network what good looks like during training. An example is a boundary-aware loss that extracts the edge band from the ground truth and weights gradient signal on those pixels specifically, so the network is mathematically motivated to optimize for edge precision rather than just interior accuracy.
>
> The three work together. A custom layer or architecture without a custom loss often just produces random noise in the new components because there's no gradient signal pushing them to do their job. A custom loss without architecture support can fail to converge because the existing architecture has no capacity to satisfy the new objective. You need to design all three coherently when you're attacking a specific failure mode."

**Key beats:**
- Custom layer = specialized building block (e.g., spatial attention module)
- Custom architecture = topology change (e.g., trimap branching head)
- Custom loss = supervision signal (e.g., boundary-aware loss)
- They need to work together — loss provides the math motivation for architecture changes

**Common follow-ups:** Q2.1 (custom loss deep-dive), Q2.2 (architecture deep-dive), Q1.x (U2Net-specific).

---

## Section 3: General "Do You Remember the Details?" Recovery

Sometimes an interviewer will push for code-level or numeric specifics I don't remember. The right move is calibrated honesty, not bluffing.

---

### Q3.1: "What was the exact IoU improvement on [project]?"

**Prepared answer:**

> "I'd want to check my old logs for the exact numbers — I don't trust myself to quote a percentage from memory accurately. The qualitative result was a meaningful improvement on small-defect detection specifically, with similar performance on large defects. If exact metrics matter for this conversation I can pull them from Weights and Biases history after the interview."

---

### Q3.2: "Walk me through the exact PyTorch code for [thing I don't remember exactly]."

**Prepared answer:**

> "Let me sketch the structure rather than commit to exact API calls — I'd want to verify the signature before writing production code. The core idea is [explain concept clearly]. The PyTorch implementation would roughly involve [list main operations] — happy to whiteboard the structure or write it out if you'd like, with the caveat that I'd double-check exact API details before shipping."

---

### Q3.3: "Did you use [specific technique X] for that?"

**Prepared answer if I didn't:**

> "Not in the shipped version. We used [what I actually did]. I'm familiar with [technique X] as an approach — it would have been a reasonable alternative — but it wasn't what we landed on. If we'd hit limits with [what I actually did] I'd have considered [technique X] next."

**Prepared answer if I don't remember:**

> "Honestly I don't remember the exact technique. Let me describe the problem we were solving and the approach we took at a higher level, and you can probe whether that matched what you're thinking."

---

## Section 4: Status Tracking

| Section | Topic | Source of Truth |
|---------|-------|-----------------|
| Section 1 (Q1.x) | U2Net cloth segmentation | Explored at PERSPECTIVE but did NOT ship — be honest |
| Section 2 Q2.1 | Custom loss (Dice + Focal Tversky) | Real shipped code at defect inspection project — full code in ouster-interview-prep.md |
| Section 2 Q2.2 | Custom architecture (DL) | Mostly fine-tuning + head replacement; trimap branch was exploration |
| Section 2 Q2.2 | Custom architecture (systems) | Hyvision 3D rendering engine with ECS + plugin — real shipped |
| Section 2 Q2.3 | Conceptual layer/arch/loss distinction | Conceptual — defensible from understanding alone |

---

## End of File

When interviewing, lead with shipped work. Acknowledge exploration as exploration. Demonstrate design-space awareness when asked "what would you do today." Never fabricate metrics or code from projects that didn't ship to production.