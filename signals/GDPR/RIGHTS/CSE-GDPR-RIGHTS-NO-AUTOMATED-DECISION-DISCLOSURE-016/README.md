# CSE-GDPR-RIGHTS-NO-AUTOMATED-DECISION-DISCLOSURE-016

**Automated Decision-Making Not Disclosed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-AUTOMATED-DECISION-DISCLOSURE-016` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data subjects are not informed about the existence of automated decision-making including profiling.

Information about the logic involved and significance of consequences must be provided.

## Applicability

- Credit scoring systems
- Automated recruitment screening
- Insurance risk assessment
- Fraud detection systems
- Personalization algorithms

## Examples (Non-Normative)

### Undisclosed Automation

```yaml
automated_decisions:
  existence_disclosed: false
  logic_explained: false
  consequences_described: false
  opt_out_available: false
```

### Hidden Profiling

```
Automated Decision Assessment:
  System: Credit scoring algorithm
  Disclosure: None
  Logic Explanation: Not provided
  Impact Information: Not communicated
```

## GDPR Context (Informative)

- **Art. 22.1**: The data subject shall have the right not to be subject to a decision based solely on automated processing
- **Art. 13.2(f)**: Must provide meaningful information about the logic involved and significance

## Related Signals

- `CSE-GDPR-RIGHTS-NO-HUMAN-INTERVENTION-018`
- `CSE-GDPR-IMPACT-NO-DPIA-PROCESS-001`
