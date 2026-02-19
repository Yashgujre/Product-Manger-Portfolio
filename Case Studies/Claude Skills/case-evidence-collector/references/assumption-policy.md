# Assumption Policy

## Default Behavior

No modeling or estimation is performed. All data in the Research Pack must come directly from user-provided evidence.

## Authorizing Modeling

If the user explicitly states they want modeling (e.g., "you can model estimates" or "use assumptions where needed"), ask them to choose a modeling stance:

| Stance | Description |
|--------|-------------|
| **Conservative** | Lower-bound estimates only. Use the most cautious interpretation of available data. |
| **Moderate** | Mid-range estimates. State assumptions explicitly and use reasonable interpolations. |
| **Aggressive** | Upper-bound projections. Optimistic interpretations with clear caveats on every figure. |

## Modeling Rules

When modeling is authorized:

1. **Label everything.** Every modeled value must be tagged with `[MODELED — {stance}]`.
2. **Show your work.** Include the calculation or reasoning chain for each estimate.
3. **Cite the anchor.** Reference the real data point(s) used as the basis for the estimate.
4. **State assumptions.** List every assumption made, numbered for reference.
5. **Bound the estimate.** Provide a range (low-high) even for Conservative stance.
6. **Separate from facts.** Modeled data goes ONLY in `03_synthesis_prep/assumptions.md`, never in excerpt files.

## Output File: assumptions.md

When modeling is authorized, create `03_synthesis_prep/assumptions.md` with this structure:

```markdown
# Assumptions Log

**Modeling Stance:** [Conservative / Moderate / Aggressive]
**Authorized by user:** [Yes — quote or paraphrase user's authorization]

## Modeled Estimates

### Estimate 1: [Name]
- **Value:** [estimate] [MODELED — {stance}]
- **Range:** [low] — [high]
- **Anchor data:** [cite the real data point(s)]
- **Assumptions:**
  1. [assumption]
  2. [assumption]
- **Calculation:** [show derivation]

### Estimate 2: [Name]
...
```

## What Cannot Be Modeled

Even with authorization, never model:
- Direct quotes or executive statements
- Specific dates or event timelines
- Customer names or counts (unless public)
- Competitive claims not grounded in evidence
