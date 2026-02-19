# Readiness Validation — 6-Pillar Scoring Logic

Run this validation after each evidence submission round. All 6 pillars must pass for the pack to be declared "Ready."

---

## Pillar 1: Economic Anchor

**Pass criteria (ALL required):**
- [ ] Revenue model identified (subscription, usage-based, freemium, etc.)
- [ ] At least one economic KPI identified (ARR, MRR, ARPU, LTV, CAC, etc.)
- [ ] At least one excerpt referencing a growth driver or financial focus

**Where to find evidence:**
- Category A (earnings calls): executive commentary on revenue
- Category B (S-1 / investor letters): revenue model description, unit economics
- Category F (benchmarks): market size, TAM

**Fail reasons:**
- No revenue model stated anywhere in evidence
- No financial metric or KPI referenced
- Growth drivers are vague or unattributed

---

## Pillar 2: Friction Evidence

**Pass criteria (ALL required):**
- [ ] ≥ 10 total friction bullets across all sources
- [ ] Aggregated review themes present (from Category E)
- [ ] ≥ 1 adoption blocker pattern identified

**Counting rules:**
- Friction bullets come from: complaint themes (E), problem framing (C), risk factors (B), adoption barriers (any source)
- Each bullet must cite its source file
- Duplicate friction points across sources count as 1 bullet

**Where to find evidence:**
- Category C (product blogs): problem framing statements
- Category E (reviews): complaint themes, adoption blockers
- Category B (S-1): risk factors section

**Fail reasons:**
- Fewer than 10 unique friction bullets
- No review themes provided
- No clear adoption blocker pattern

---

## Pillar 3: Quantifiable Benchmarks

**Pass criteria (ALL required):**
- [ ] ≥ 3 numeric benchmarks relevant to the product domain
- [ ] At least one benchmark tied to productivity, adoption, retention, or cost
- [ ] Each benchmark includes: name, year, metric, value, unit, context

**Counting rules:**
- Benchmarks must be numeric (not qualitative assessments)
- Must include units (%, $, hours, users, etc.)
- Must have a source or reliability note
- Market size alone does not satisfy the productivity/adoption/retention/cost requirement

**Where to find evidence:**
- Category F (industry benchmarks): primary source
- Category A (earnings calls): company-specific metrics
- Category B (S-1): financial benchmarks

**Fail reasons:**
- Fewer than 3 numeric benchmarks
- No benchmark addresses productivity, adoption, retention, or cost
- Benchmarks lack units or context

---

## Pillar 4: Timing ("Why Now")

**Pass criteria (ALL required):**
- [ ] ≥ 3 bullets explaining market shift, strategic inflection, or timing rationale

**What counts as a timing bullet:**
- Technology shift enabling the product (e.g., cloud, mobile, AI)
- Market behavior change (e.g., remote work, digital transformation)
- Regulatory change creating opportunity or pressure
- Competitive gap or incumbent stagnation
- Economic conditions (e.g., cost pressure driving adoption)

**Where to find evidence:**
- Category D (launch announcements): market context at launch
- Category A (earnings calls): strategic commentary
- Category B (S-1): market opportunity section
- Category C (blogs): vision/timing narratives

**Fail reasons:**
- Fewer than 3 timing bullets
- Timing bullets are generic ("the market is growing") without specifics
- No connection to why this product at this moment

---

## Pillar 5: Competitive Tension

**Pass criteria (ALL required):**
- [ ] ≥ 1 mention of incumbents, competitors, or competitive pressure

**What counts:**
- Named competitor referenced in any source
- "Compared to alternatives" statements from reviews
- Competitive positioning in launch announcements
- S-1 competitive landscape section
- Market share data

**Where to find evidence:**
- Category G (competitive notes): primary source
- Category E (reviews): alternative comparisons
- Category A (earnings calls): competitive mentions
- Category B (S-1): competitive risks
- Category D (press releases): positioning statements

**Fail reasons:**
- Zero mentions of any competitor, incumbent, or alternative
- Only vague references ("other solutions") without specifics

---

## Pillar 6: Segment Clarity

**Pass criteria (ONE of the following):**
- [ ] Evidence differentiating enterprise vs SMB customer behavior, needs, or adoption patterns
- [ ] Clear primary segment focus stated (e.g., "built for mid-market SaaS teams")

**What counts:**
- Pricing tiers indicating segment targeting
- Review themes split by company size
- Explicit "we focus on [segment]" statements
- Different adoption patterns by segment

**Where to find evidence:**
- Category E (reviews): segment-specific themes
- Category A (earnings calls): customer segment commentary
- Category B (S-1): target customer description
- Category C (blogs): "who this is for" framing

**Fail reasons:**
- No indication of target segment anywhere
- Evidence is entirely segment-agnostic with no differentiation

---

## Scoring Output Format

After evaluating all 6 pillars, output:

```
READINESS STATUS:
  Economic Anchor:    [Pass / Fail]   [Confidence: High / Medium / Low] — [brief reason if Fail or Low]
  Friction Evidence:  [Pass / Fail]   [Confidence: High / Medium / Low] — [brief reason if Fail or Low]
  Benchmarks:         [Pass / Fail]   [Confidence: High / Medium / Low] — [brief reason if Fail or Low]
  Timing:             [Pass / Fail]   [Confidence: High / Medium / Low] — [brief reason if Fail or Low]
  Competition:        [Pass / Fail]   [Confidence: High / Medium / Low] — [brief reason if Fail or Low]
  Segment Clarity:    [Pass / Fail]   [Confidence: High / Medium / Low] — [brief reason if Fail or Low]

  OVERALL: [Ready / Not Ready]   [Pack Confidence: High / Medium / Low]
```

**If Not Ready:** List only the top 3 highest-impact gaps with spoon-fed collection instructions.

**If Ready:** Confirm the pack is complete and ready for Skill #2 (Problem Definition). Then immediately run Phase 6 (Evidence Trail Report).

---

## Confidence Scoring Rubric

Confidence is separate from Pass/Fail. A pillar can **Pass** (meets minimum evidence count) but still earn **Low** confidence (because all evidence is retrospective or secondary-aggregated). Apply these rules to every pillar and to the overall pack.

---

### Per-Claim Provenance Labels

Assign one of these four labels to every individual evidence entry:

| Label | Symbol | Definition |
|-------|--------|------------|
| Verbatim, contemporaneous | 🟢 | Direct quote from a source published **during or near the case window** (within ~2 years after window close) |
| Paraphrased, contemporaneous | 🟡 | User's summary of a source published during or near the case window |
| Secondary aggregation | 🟠 | Paraphrased from a synthesis, analysis, or aggregation of multiple primary sources (e.g., analyst reports, benchmark studies) |
| Retrospective | 🔴 | Source published **more than 2 years after the case window ends**, describing past events |

---

### Per-Pillar Confidence Score

Look at the provenance labels of **all claims that support that pillar**. Apply the rule that matches first (top of list takes priority):

| Rule | Assign |
|------|--------|
| Majority of supporting claims are 🟢 Verbatim contemporaneous, AND no claim is solely 🔴 Retrospective | **High** |
| Mix of 🟢/🟡 contemporaneous claims with some 🟠 secondary aggregation; at least one 🟢 or 🟡 claim present | **Medium** |
| No 🟢 verbatim contemporaneous claims in the pillar | **Low** |
| All supporting claims are 🔴 Retrospective or 🟠 Secondary aggregation only | **Low** |
| A key metric for this pillar (e.g., the sole benchmark, the sole competitive source) carries a documented provenance warning (e.g., secondary pull, paywall-limited, unverified date) | **Low** (regardless of other claims) |

**Additional downgrade rules** (apply after the main rule above):
- If the pillar's pass threshold was met only by counting paraphrased items where verbatim sources were specifically requested → downgrade one level (High → Medium, Medium → Low).
- If a negative finding (confirmed absence) exists for a required sub-item of the pillar → downgrade one level.

---

### Per-Pillar Confidence: Pillar-Specific Guidance

#### Pillar 1 — Economic Anchor
- Key risk: Revenue/DAU figures cited from secondary analyses rather than direct primary filing table extraction → **Medium** maximum unless primary filing is directly quoted.
- NRR without confirmed fiscal year → **Medium** maximum.
- No CAC/payback number at all → acceptable at **Medium**; does not force **Low** alone.

#### Pillar 2 — Friction Evidence
- ≥8 of the friction bullets from 🟢/🟡 contemporaneous sources → **High** eligible.
- Activation threshold from a single retrospective source → **Medium** maximum.
- All friction from aggregated review themes (🟠) with no contemporaneous primary → **Low**.

#### Pillar 3 — Benchmarks
- At least one benchmark from a primary report (McKinsey, Gartner, IDC) published within or near the window → **High** eligible.
- All benchmarks from secondary aggregations or applied retrospectively → **Medium** maximum.
- Any benchmark marked "imprecise — directional only" is still counted toward the ≥3 minimum but caps the pillar at **Medium**.

#### Pillar 4 — Timing
- All timing milestones have contemporaneous sources (contemporaneous press, investor PR, filings) → **High** eligible.
- Any timing milestone relies solely on a retrospective source → **Medium** maximum for that claim; does not alone force pillar to Low.
- Majority of timing evidence is retrospective → **Low**.

#### Pillar 5 — Competition
- Named competitors with contemporaneous sources (in-window press, S-1 competitive section, CEO interview during window) → **High** eligible.
- All competitive evidence from retrospective analyses (post-window) → **Low**.
- Mix of in-window CEO quote + retrospective market analyses → **Medium**.

#### Pillar 6 — Segment Clarity
- Enterprise/SMB differentiation from both review data AND investor/S-1 sourcing → **High** eligible.
- Enterprise differentiation solely from aggregated review themes → **Medium** maximum.
- No contemporaneous segment-specific source → **Low**.

---

### Overall Pack Confidence Score

Count the confidence levels across all 6 pillars and apply:

| Distribution | Overall Pack Confidence |
|-------------|------------------------|
| 5 or 6 pillars at High | **High** |
| 3 or 4 pillars at High, none at Low | **Medium** |
| 3 or more pillars at High, 1 at Low | **Medium** |
| 2 or fewer pillars at High, OR 2+ pillars at Low | **Low** |
| Any pillar is Fail (regardless of confidence scores) | **Not Ready** — confidence score suspended until all pillars pass |

**Plain-language descriptions to include in the report:**

- **High:** The evidence foundation is strong. Most claims are sourced from contemporaneous, verbatim or paraphrased primary sources. The Problem Definition author can rely on these claims with minimal additional verification.
- **Medium:** The evidence foundation is solid but has notable provenance gaps — some key figures come from secondary analyses, retrospective sources, or aggregated summaries. The Problem Definition author should flag medium-confidence claims when making precise quantitative arguments and consider additional verification for the most critical metrics.
- **Low:** The evidence foundation is directionally useful but relies heavily on retrospective, aggregated, or secondary sources. Claims should be treated as indicative rather than definitive. The Problem Definition author should not make precise quantitative arguments based on this pack without additional primary research.

---

### Confidence Score: What It Does NOT Affect

- Confidence scoring **does not change the Pass/Fail outcome** of any pillar. A pillar passes if it meets the evidence count and type requirements, regardless of confidence level.
- Confidence scoring **does not block the pack from being declared Ready**. A pack can be Ready with Medium or even Low overall confidence — the score is informational for the downstream skill user.
- Confidence scoring **does not require re-collection**. If the user wants to upgrade confidence, they can provide additional primary sources, but this is optional.
