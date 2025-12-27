# CSE-GDPR-DPO-NO-INDEPENDENCE-003

**DPO Independence Not Ensured**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-DPO-NO-INDEPENDENCE-003` |
| Domain | GDPR |
| Category | DPO |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data Protection Officer does not operate with sufficient independence or reports to management in a way that creates conflicts of interest.

Article 38.3 requires DPOs to perform duties independently without instructions.

## Applicability

- All designated DPOs (internal or external)
- DPO must not receive instructions on task performance
- Must report to highest management level
- Must not have conflicting duties or positions

## Examples (Non-Normative)

### DPO With Conflicting Roles

```yaml
dpo_independence:
  reports_to: "IT Director"
  conflicting_duties: ["Head of Marketing", "CTO"]
  receives_instructions: true
  highest_management_access: false
  independent_budget: false
```

### Compromised Independence

```
DPO Structure:
  DPO: Chief Technology Officer (dual role)
  Reports To: CEO (determines processing means)
  Performance Metrics: IT project delivery KPIs
  Conflict: DPO evaluates own IT decisions
  Independence: Compromised
```

## GDPR Context (Informative)

- **Art. 38.3**: DPO shall not receive instructions regarding performance of tasks and shall report to highest management level
- **Art. 38.6**: DPO may fulfill other tasks but must not result in conflict of interest
- **Recital 97**: Position of DPO should be such as to allow independent performance

## Related Signals

- `CSE-GDPR-DPO-NO-DESIGNATION-001`
- `CSE-GDPR-DPO-NO-TASK-RESOURCES-004`
