# Example: Multi-Turn Intake Flow

This example shows the expected conversation flow when using the case-evidence-collector skill.

---

## Turn 1: Skill Invocation

**User:** `/case-evidence-collector`

**Skill responds with exactly 4 questions:**

> To build your Case Study Research Pack, I need 4 pieces of information:
>
> **1. Company Name**
> Choose the company directly associated with the product. If unsure, check the official product website, launch announcements, or pricing page branding. Avoid the parent company unless it is single-product.
>
> **2. Product Name**
> Choose the specific product surface (e.g., Slack, not Salesforce). Confirm the product was active during the time window you'll specify.
>
> **3. Time Window (2-4 years)**
> Choose a period capturing launch-to-growth, pivot-to-expansion, enterprise transition, or competitive pressure. If unsure: launch year + 3 years, or 2 years pre-IPO to IPO year.
>
> **4. Research Depth Level**
> - Conservative (minimum viable pack)
> - Balanced (strong pack — recommended)
> - Exhaustive (deep research)

---

## Turn 2: User Provides Intake

**User:**
1. Slack Technologies
2. Slack
3. 2014-2017
4. Balanced

**Skill responds:**

> Research Pack initialized:
> - **Company:** Slack Technologies
> - **Product:** Slack
> - **Time Window:** 2014 — 2017
> - **Depth:** Balanced
>
> I've created `CASE_STUDY_PACK_Slack_Slack_2014-2017/` with `00_case_brief.md` and `99_gap_log.md`.
>
> All 6 required evidence categories are currently missing. Let's start with the 3 highest-impact categories:
>
> **1. Category B — Investor Letters / S-1** (impacts Economic Anchor, Benchmarks, Segment)
>
> Search: `"Slack Technologies" S-1 filing SEC`
>
> Extract 10 bullets focusing on: revenue model, TAM, risk factors, target customer, competitive landscape, unit economics.
>
> Paste in this format:
> ```
> ### S-1 / Investor Document
> Source type: S-1 Filing
> Title: [title]
> Date: [date]
> Verbatim / Paraphrased: [choose]
>
> • [Bullet]
> ```
>
> **2. Category E — Review Themes** (impacts Friction Evidence, Competition, Segment)
>
> Search: `"Slack" reviews G2` and `"Slack" reviews Capterra`
>
> Extract: Top 5 praise themes, top 5 complaint themes, 3 adoption blockers, enterprise vs SMB notes.
>
> **3. Category F — Industry Benchmarks** (impacts Benchmarks, Economic Anchor)
>
> Search: `enterprise messaging market size 2015 2016` and `workplace communication productivity statistics`
>
> Extract: 5 numeric benchmarks with values, units, and sources.

---

## Turn 3: User Provides Partial Evidence

**User provides evidence for Categories B and E.**

**Skill responds:**

> Evidence received for 2 categories. Updating Research Pack...
>
> Created: `02_excerpts/investor_excerpts.md` (10 bullets from S-1)
> Created: `02_excerpts/review_themes.md` (5 praise, 5 complaints, 3 blockers)
> Updated: `01_sources_inventory.md` (2 sources added)
> Updated: `99_gap_log.md`
>
> ```
> READINESS STATUS:
>   Economic Anchor:    Pass — Revenue model and ARR KPI identified from S-1
>   Friction Evidence:  Fail — 7 friction bullets (need ≥10), review themes present
>   Benchmarks:         Fail — 0 numeric benchmarks (need ≥3)
>   Timing:             Fail — 0 timing bullets (need ≥3)
>   Competition:        Pass — 2 competitor mentions in S-1 and reviews
>   Segment Clarity:    Pass — Enterprise vs SMB differentiation in reviews
>
>   OVERALL: Not Ready
> ```
>
> **Top 3 gaps to close:**
>
> 1. **Category F — Benchmarks** — Need ≥3 numeric benchmarks.
>    Search: `enterprise collaboration market size 2015 Gartner`
>
> 2. **Category A — Earnings Calls** — Would add 3+ friction bullets and timing context.
>    Search: `"Slack" earnings call transcript 2016`
>
> 3. **Category D — Launch Announcements** — Needed for timing pillar.
>    Search: `"Slack" launch announcement 2014 TechCrunch`

---

## Turn 4: User Provides Remaining Evidence

**User provides evidence for Categories A, D, and F.**

**Skill responds:**

> Evidence received for 3 categories. Updating Research Pack...
>
> Created: `02_excerpts/earnings_excerpts.md`, `02_excerpts/launch_excerpts.md`, `02_excerpts/benchmarks.csv`
> Created: `03_synthesis_prep/friction_candidates.md` (12 friction bullets identified)
> Created: `03_synthesis_prep/preliminary_problem_dimensions.md` (4 dimensions proposed)
> Updated: `01_sources_inventory.md` (5 total sources)
> Updated: `99_gap_log.md`
>
> ```
> READINESS STATUS:
>   Economic Anchor:    Pass — Freemium revenue model, ARR as primary KPI
>   Friction Evidence:  Pass — 12 friction bullets, review themes present, 3 adoption blockers
>   Benchmarks:         Pass — 5 numeric benchmarks including productivity and adoption metrics
>   Timing:             Pass — 4 timing bullets (cloud shift, remote work, mobile-first, email fatigue)
>   Competition:        Pass — HipChat, Microsoft Teams, email referenced across sources
>   Segment Clarity:    Pass — Clear SMB-first strategy with enterprise expansion via Grid
>
>   OVERALL: Ready
> ```
>
> The Research Pack is complete and ready for Skill #2 (Problem Definition).
>
> Pack location: `CASE_STUDY_PACK_Slack_Slack_2014-2017/`

---

## Notes on This Example

- The skill asked only 4 questions at intake — nothing more.
- Evidence was collected over 2 rounds (turns 3 and 4).
- The skill never fabricated data — all evidence came from the user.
- Spoon-fed instructions included exact search queries and paste templates.
- The readiness scorecard was output after each evidence round.
- Missing Category C (blogs) was deprioritized because other sources provided sufficient friction and timing evidence.
- Category G (competitive notes) was not requested because competition passed from other sources.
