# CSE-GDPR-IMPACT-NO-DPIA-REVIEW-003

**DPIA Review Not Conducted**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-IMPACT-NO-DPIA-REVIEW-003` |
| Domain | GDPR |
| Category | IMPACT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data Protection Impact Assessment is not reviewed when there is a change to the risk represented by processing operations.

Article 35.11 requires controllers to assess whether processing is performed in accordance with the DPIA.

## Applicability

- Material changes to processing operations
- Evolution of risks over time
- Adoption of new technologies
- Changes in data categories or purposes
- Significant increase in data volume or scope

## Examples (Non-Normative)

### No DPIA Review After Changes

```yaml
dpia_review:
  original_dpia_date: "2022-03-15"
  processing_changes: ["New AI model deployed", "Data retention extended"]
  last_review_date: null
  review_triggered: false
```

### Outdated DPIA

```
DPIA for Marketing Platform:
  Original Assessment: January 2021
  Material Changes Since:
    - Added behavioral tracking (June 2023)
    - Integrated third-party analytics (Nov 2023)
    - Expanded to new jurisdictions (Mar 2024)
  DPIA Review Conducted: No
  Current Risk Assessment: Not performed
```

## GDPR Context (Informative)

- **Art. 35.11**: Controller shall assess whether processing is performed in accordance with the DPIA, at least when there is a change of the risk

## Related Signals

- `CSE-GDPR-IMPACT-NO-DPIA-PROCESS-001`
- `CSE-GDPR-IMPACT-NO-DPIA-DOCUMENTATION-002`
