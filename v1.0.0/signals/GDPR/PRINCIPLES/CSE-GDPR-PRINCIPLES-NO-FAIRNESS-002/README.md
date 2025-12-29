# CSE-GDPR-PRINCIPLES-NO-FAIRNESS-002

**Unfair Processing Practices**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-FAIRNESS-002` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personal data is processed in ways that are detrimental, unexpected, or misleading to data subjects.

Fair processing requires that data handling does not adversely affect individuals in ways they would not reasonably expect.

## Applicability

- Automated decision-making systems
- Profiling and scoring mechanisms
- Secondary uses of collected data
- Data combination from multiple sources
- Algorithmic processing with significant effects

## Examples (Non-Normative)

### Unexpected Secondary Use

```yaml
data_processing:
  original_purpose: "Service delivery"
  actual_use: "Credit scoring without notice"
  disclosed_to_subject: false
```

### Misleading Data Collection

```
Collection Practice:
  Stated Purpose: "Improve user experience"
  Actual Use: Selling data to third parties
  Fair Processing: No
```

## GDPR Context (Informative)

- **Art. 5.1(a)**: Personal data shall be processed lawfully, fairly and in a transparent manner in relation to the data subject

## Related Signals

- `CSE-GDPR-PRINCIPLES-NO-TRANSPARENCY-003`
- `CSE-GDPR-RIGHTS-NO-AUTOMATED-DECISION-DISCLOSURE-016`
