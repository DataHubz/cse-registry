# CSE-SOC2-PRIV-NO-USE-LIMITATION-006

**No Limitation on Use**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-PRIV-NO-USE-LIMITATION-006` |
| Domain | SOC2 |
| Category | PRIV |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not limit the use of personal information to the purposes identified in the privacy notice and for which the data subject has provided implicit or explicit consent.

## Applicability

- Data processing activities
- Purpose limitation controls
- Secondary use prevention
- Cross-functional data sharing
- Marketing and analytics use
- AI/ML model training
- Research and development use of customer data

## Examples (Non-Normative)

### Unauthorized Purpose Expansion

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-USE-LIMITATION-006
  severity: high
  context:
    issue: "Customer data used for purposes beyond original consent"
    original_purpose: "Order processing and fulfillment"
    actual_uses:
      - "Order processing (authorized)"
      - "Marketing analytics (not disclosed)"
      - "AI model training (not disclosed)"
      - "Product recommendations to third parties (not disclosed)"
  evidence:
    - "Privacy notice only mentions transactional purposes"
    - "Data science team accessing customer data for ML projects"
    - "No purpose limitation controls in place"
  recommendation: "Implement purpose limitation controls and obtain consent for secondary uses"
```

### Cross-Department Data Misuse

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-USE-LIMITATION-006
  severity: high
  context:
    issue: "HR data used for business intelligence"
    original_purpose: "Employee performance management"
    unauthorized_use: "Department budget forecasting"
    data_subjects: "Current employees"
  evidence:
    - "HR analytics system accessed by finance team"
    - "Employee data included in budget models"
    - "No employee consent for this use"
  recommendation: "Restrict data access to authorized purposes and obtain consent for new uses"
```

### Training Data Without Consent

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-USE-LIMITATION-006
  severity: high
  context:
    issue: "Customer support conversations used to train AI without consent"
    original_purpose: "Customer service and support"
    new_purpose: "Machine learning model training"
  recommendation: "Update privacy notice and obtain consent before using data for AI training"
```

## SOC 2 Context (Informative)

- **P4.1**: The entity limits the use of personal information to the purposes identified in the notice and for which the data subject has provided implicit or explicit consent. Personal information is used only for the purposes for which it was collected or for a purpose that is not inconsistent with the original purpose or as required by law. If the entity intends to use personal information for purposes other than those identified in the notice, it will obtain implicit or explicit consent for those purposes.
- **GAPP Principle**: Use, Retention, and Disposal - Personal information should be used only for the purposes identified in the notice and consistent with the choices made by individuals.

## Related Signals

- `CSE-SOC2-PRIV-NO-PRIVACY-NOTICE-001` - Related to notice of purposes
- `CSE-SOC2-PRIV-NO-CONSENT-MECHANISM-003` - Related to consent for new purposes
- `CSE-SOC2-PRIV-NO-COLLECTION-LIMITATION-004` - Related to collection purposes
- `CSE-GDPR-PURPOSE-INCOMPATIBLE-PURPOSE-001` - GDPR purpose limitation
- `CSE-GDPR-LAWFUL-BASIS-NO-LAWFUL-BASIS-001` - GDPR lawful basis requirements
