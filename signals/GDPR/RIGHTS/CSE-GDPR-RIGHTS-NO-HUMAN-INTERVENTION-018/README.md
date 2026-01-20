# CSE-GDPR-RIGHTS-NO-HUMAN-INTERVENTION-018

**Human Intervention Mechanism Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-HUMAN-INTERVENTION-018` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists for data subjects to obtain human intervention, express their point of view, or contest automated decisions.

This applies to decisions producing legal or similarly significant effects.

## Applicability

- Automated credit decisions
- Algorithmic hiring systems
- Insurance underwriting
- Fraud prevention blocks
- Automated account actions

## Examples (Non-Normative)

### No Human Review Available

```yaml
human_intervention:
  request_mechanism: null
  review_process: null
  appeal_right: false
  response_timeframe: null
```

### Inaccessible Review

```
Intervention Assessment:
  Contact Method: None
  Review Available: No
  Express View: Not possible
  Contest Decision: No process
```

## GDPR Context (Informative)

- **Art. 22.3**: The controller shall implement suitable measures to safeguard the data subject's rights and freedoms, including the right to obtain human intervention, express their point of view and contest the decision

## Related Signals

- `CSE-GDPR-RIGHTS-NO-AUTOMATED-DECISION-DISCLOSURE-016`
- `CSE-GDPR-RIGHTS-NO-RESPONSE-MECHANISM-002`
