# CSE-GDPR-IMPACT-NO-DPIA-DOCUMENTATION-002

**DPIA Documentation Incomplete**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-IMPACT-NO-DPIA-DOCUMENTATION-002` |
| Domain | GDPR |
| Category | IMPACT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data Protection Impact Assessment exists but does not contain required elements specified in Article 35.7.

Required elements include systematic description of processing, necessity assessment, risk assessment, and mitigation measures.

## Applicability

- All DPIAs conducted under Article 35
- Assessment must contain minimum elements per Art. 35.7
- DPO opinion must be sought where designated
- Views of data subjects should be sought where appropriate

## Examples (Non-Normative)

### Incomplete DPIA Documentation

```yaml
dpia_assessment:
  processing_description: "Complete"
  necessity_assessment: "Missing"
  risk_assessment: "Partial"
  mitigation_measures: "Missing"
  dpo_consulted: false
```

### Missing Required Elements

```
DPIA for Employee Monitoring System:
  Processing Description: Yes
  Necessity & Proportionality: No
  Risk to Rights & Freedoms: No
  Mitigation Measures: No
  DPO Opinion: Not sought
  Data Subject Views: Not obtained
```

## GDPR Context (Informative)

- **Art. 35.7**: DPIA shall contain systematic description, necessity/proportionality assessment, risk assessment, and mitigation measures
- **Art. 35.8**: Compliance with approved codes of conduct shall be taken into account
- **Art. 35.9**: DPO must be consulted where designated

## Related Signals

- `CSE-GDPR-IMPACT-NO-DPIA-PROCESS-001`
- `CSE-GDPR-DPO-NO-TASK-RESOURCES-004`
