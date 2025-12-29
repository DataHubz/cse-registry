# CSE-GDPR-IMPACT-NO-DPIA-PROCESS-001

**DPIA Process Not Established**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-IMPACT-NO-DPIA-PROCESS-001` |
| Domain | GDPR |
| Category | IMPACT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No Data Protection Impact Assessment (DPIA) process exists for processing operations likely to result in high risk to rights and freedoms.

Article 35.1 requires controllers to carry out DPIAs before processing.

## Applicability

- Systematic evaluation of personal aspects (automated decision-making)
- Large-scale processing of special categories of data
- Systematic monitoring of publicly accessible areas
- Processing involving new technologies
- Processing that prevents data subjects from exercising rights

## Examples (Non-Normative)

### No DPIA Process

```yaml
dpia_framework:
  process_established: false
  risk_assessment_criteria: null
  approval_workflow: null
  documentation_requirements: null
```

### Missing DPIA for High-Risk Processing

```
Processing Activity: Customer Profiling System
  Risk Level: High
  DPIA Conducted: No
  DPIA Process Exists: No
  Processing Started: 2024-01-15
```

## GDPR Context (Informative)

- **Art. 35.1**: Where processing is likely to result in a high risk to rights and freedoms, the controller shall carry out a DPIA
- **Art. 35.3**: Lists specific processing operations requiring DPIA

## Related Signals

- `CSE-GDPR-IMPACT-NO-DPIA-DOCUMENTATION-002`
- `CSE-GDPR-IMPACT-NO-DPIA-REVIEW-003`
