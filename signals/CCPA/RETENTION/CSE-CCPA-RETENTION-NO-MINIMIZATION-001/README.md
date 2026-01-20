# CSE-CCPA-RETENTION-NO-MINIMIZATION-001

**Data Minimization Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RETENTION-NO-MINIMIZATION-001` |
| Domain | CCPA |
| Category | RETENTION |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal indicates that a business is collecting or maintaining personal information without implementing data minimization principles. The business fails to limit collection, use, retention, or disclosure of personal information to what is reasonably necessary and proportionate to achieve the purposes for which it was collected or processed.

## Applicability

- Businesses collecting personal information from California consumers
- Organizations processing PI without documented minimization controls
- Systems that collect or store PI indefinitely without business justification
- Data pipelines that capture more PI fields than necessary for stated purposes

## Examples (Non-Normative)

### Excessive Customer Data Collection

```yaml
# Example: E-commerce site collecting unnecessary data
collection_fields:
  - email  # Required for order confirmation
  - name  # Required for shipping
  - phone  # Required for delivery updates
  - ssn  # NOT NECESSARY - violates minimization
  - income_level  # NOT NECESSARY - violates minimization
  - political_affiliation  # NOT NECESSARY - violates minimization

minimization_policy: null  # Missing
purpose_limitation: false
retention_controls: none
```

### Retention Without Minimization

```yaml
# Example: Customer records retained indefinitely
data_retention:
  customer_records:
    retention_period: "indefinite"  # Violates minimization
    deletion_policy: "never"
    minimization_review: false
    business_justification: null
```

## CCPA Context (Informative)

- **Section**: §1798.100(c)
- **Requirement**: "A business' collection, use, retention, and sharing of a consumer's personal information shall be reasonably necessary and proportionate to achieve the purposes for which the personal information was collected or processed, or for another disclosed purpose that is compatible with the context in which the personal information was collected, and not further processed in a manner that is incompatible with those purposes."
- **Added by**: CPRA (California Privacy Rights Act)

## Related Signals

- `CSE-CCPA-RETENTION-EXCESSIVE-COLLECTION-002`
- `CSE-CCPA-RETENTION-NO-POLICY-003`
- `CSE-CCPA-RETENTION-BEYOND-NECESSARY-004`
- `CSE-CCPA-NOTICE-PURPOSE-CREEP-006`
