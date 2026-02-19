# Output File Specifications

Detailed content requirements for every file in the Research Pack.

---

## 00_case_brief.md

The intake summary. Created immediately after the user answers the 4 intake questions.

**Required fields:**
- Company name
- Product name
- Time window (start year — end year)
- Target segment (if known from intake; otherwise "TBD — pending evidence")
- Research depth level (Conservative / Balanced / Exhaustive)
- Assumptions policy (No modeling / Authorized — [stance])

---

## 01_sources_inventory.md

A running inventory of all sources provided. Updated each time new evidence is submitted.

**Table columns:**
| # | Source Type | Title / Identifier | Date | Provenance | Notes |
|---|------------|-------------------|------|------------|-------|

**Provenance values:** Verbatim, User-paraphrased, Aggregated summary

**Notes column:** Brief note on what the source covers (e.g., "Growth drivers, enterprise adoption")

---

## 02_excerpts/ — Excerpt Files

Each excerpt file groups evidence by source. Every entry must have a provenance header.

### Provenance header format:
```
### [Source Title]
- Source type: [type]
- Date: [date]
- Provenance: [Verbatim / User-paraphrased]
```

### earnings_excerpts.md
Group bullets by quarter/year. Focus on: growth drivers, adoption friction, competitive mentions, segment commentary, financial milestones.

### investor_excerpts.md
Group by document (S-1, 10-K, investor letter). Focus on: revenue model, TAM, risk factors, unit economics, competitive landscape.

### blog_excerpts.md
Group by post. Focus on: problem statements, user pain descriptions, vision framing, technical constraints.

### launch_excerpts.md
Group by announcement. Focus on: launch context, value propositions, partnerships, funding, market positioning.

### review_themes.md
Structured sections (not grouped by individual review):

```markdown
## Top Praise Themes
1. [Theme] — [source count or description]
...

## Top Complaint Themes
1. [Theme] — [source count or description]
...

## Adoption Blockers
1. [Blocker] — [description]
...

## Enterprise vs SMB Differentiation
• [Observation]
...
```

### benchmarks.csv
CSV format with these columns:
```
benchmark_name,year,metric,value,unit,context,reliability_notes
```

Minimum 3 rows required. Each row must have all columns populated.

---

## 03_synthesis_prep/ — Synthesis Files

These files derive structured observations from the raw evidence. They do NOT interpret — they organize.

### friction_candidates.md

A list of friction bullets extracted from evidence. Each bullet must cite its source file.

**Format:**
```markdown
## Friction Candidates

| # | Friction Description | Source File | Source Entry |
|---|---------------------|-------------|-------------|
| 1 | [description] | [e.g., review_themes.md] | [e.g., Complaint #3] |
| 2 | [description] | [e.g., blog_excerpts.md] | [e.g., "Why We Built" post] |
```

Create this file once ≥ 5 friction bullets exist across sources.

### preliminary_problem_dimensions.md

Candidate problem dimensions grouped from friction evidence. Propose 3-7 dimensions.

**Format per dimension:**
```markdown
### Dimension [N]: [Pain Label]
- **Suspected root cause:** [one sentence]
- **Evidence references:**
  - [Source file]: [specific entry]
  - [Source file]: [specific entry]
```

No interpretation beyond grouping related friction bullets under a label. The Problem Definition Skill handles analysis.

### assumptions.md (conditional)

Only created if user authorizes modeling. See `references/assumption-policy.md` for format.

---

## evidence_trail_report.md

The final auditable record of all evidence used in the pack. **Created once — only after the pack is declared Ready (all 6 pillars pass).** Saved in the Research Pack root directory alongside `00_case_brief.md`.

**Purpose:** Allows the Problem Definition author (Skill #2) to trace every claim back to its original source, understand what was actually said vs. inferred, and know how much confidence to place in each piece of evidence.

---

### Required Report Header

```markdown
# Evidence Trail Report
## [Company] — [Product]
## Case Window: [Start] – [End]
## Generated: [date]
## Pack Confidence: [High / Medium / Low]
```

---

### Required Sections (one per readiness pillar)

Each pillar section must contain:

1. **Section header** — e.g., `## PILLAR 1 — ECONOMIC ANCHOR`
2. **Pass/Fail and Confidence line** — e.g., `Status: PASS | Confidence: Medium`
3. **One entry per claim** in the following format:

```markdown
### [Pillar N].[Entry number] — [Short descriptive title of the claim]

| Field | Detail |
|-------|--------|
| **Source** | [Document or article title] |
| **URL** | [Full URL, or "URL not provided" if unavailable] |
| **Date** | [Publication date] |
| **Provenance quality** | [🟢 Verbatim contemporaneous / 🟡 Paraphrased contemporaneous / 🟠 Secondary aggregation / 🔴 Retrospective] |
| **What the source stated** | [Exact quote or close paraphrase of what the source said] |
| **How used** | [Explanation of what analytical work this evidence does — which argument it supports and why] |
| **Sub-requirement satisfied** | [The specific pillar sub-item this fulfills, e.g., "Economic Anchor — ARR by year"] |
| **Claim confidence** | [High / Medium / Low] — [one-sentence reason if Medium or Low] |
```

Rules for entries:
- Every row in `benchmarks.csv` gets its own entry under Pillar 3.
- Every row in `friction_candidates.md` gets its own entry under Pillar 2.
- If two pillars use the same source for different purposes, create separate entries under each pillar.
- If provenance quality is 🔴 Retrospective, the claim confidence cannot be higher than Medium.
- If a source carries a documented provenance warning (secondary pull, paywall-limited, unverified date), state the specific warning in the claim confidence field.

---

### Required: Confidence Summary Table

After all 6 pillar sections, include:

```markdown
## Confidence Summary

| Pillar | Pass/Fail | Confidence | Key Caveat (if Medium or Low) |
|--------|-----------|------------|-------------------------------|
| Economic Anchor | Pass | Medium | Revenue figures via secondary analyses, not direct S-1 table extraction |
| Friction Evidence | Pass | High | — |
| Benchmarks | Pass | Medium | SaaS NDR benchmark applied retrospectively |
| Timing | Pass | High | — |
| Competition | Pass | Medium | Most competitive evidence is retrospective (2018–2025) |
| Segment Clarity | Pass | Medium | Enterprise differentiation primarily from aggregated review themes |

**Overall Pack Confidence: [High / Medium / Low]**

[Insert the appropriate plain-language description from readiness-validation.md]
```

---

### Required: Documented Negative Findings and Confirmed Absences

Final section of the report. Must list every item that was investigated but not found, or confirmed as absent from the case window:

```markdown
## Documented Negative Findings and Confirmed Absences

| Claim Investigated | Finding | Source | Status |
|-------------------|---------|--------|--------|
| [What was looked for] | [What was found or not found] | [Source checked] | [✅ Closed as confirmed absence / ⚠️ Open residual — not blocking] |
```

Include:
- Claims that were expected but not found (e.g., "$1B ARR in window")
- Sources that were sought but unavailable (e.g., "native slack.com/blog posts")
- Metrics that could not be precisely sourced (e.g., "exact fiscal year for NRR")
- Any item logged in `99_gap_log.md` as a residual open item

---

### File Placement

```
CASE_STUDY_PACK_{company}_{product}_{start}-{end}/
  00_case_brief.md
  01_sources_inventory.md
  evidence_trail_report.md        ← created here, at pack root
  02_excerpts/
  03_synthesis_prep/
  99_gap_log.md
```

---

## 99_gap_log.md

The state tracker. Updated after every evidence submission round.

**Required sections:**

```markdown
## Missing Categories
Categories with zero evidence provided.

| Category | Status | Impact on Readiness |
|----------|--------|-------------------|
| [category] | Missing | [which pillars affected] |

## Weak Categories
Categories with some evidence but below minimum requirements.

| Category | Current Count | Required (for depth level) | Gap |
|----------|--------------|---------------------------|-----|
| [category] | [N] bullets | [M] bullets | [M-N] more needed |

## Next Steps
Prioritized list of what to gather next (max 3 items).

1. **[Category]** — [brief reason this is highest priority]
   - Search: `[query]`
   - Extract: [what to look for]
   - Template: [paste template reference]

2. ...

## Collection History
| Round | Date | Categories Provided | Notes |
|-------|------|-------------------|-------|
| 1 | [date] | [list] | [notes] |
```
