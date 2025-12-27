# CSE-GDPR-PRINCIPLES-NO-PURPOSE-LIMITATION-004

**Purpose Limitation Not Enforced**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-PURPOSE-LIMITATION-004` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personal data is collected for specified purposes but processed for incompatible purposes without proper justification.

Data must only be used for purposes that are compatible with the original collection purpose.

## Applicability

- Data sharing with third parties
- Secondary analytics and profiling
- Cross-departmental data use
- Data enrichment activities
- Marketing repurposing

## Examples (Non-Normative)

### Incompatible Purpose

```yaml
data_usage:
  original_purpose: "Order fulfillment"
  new_purpose: "Political profiling"
  compatibility_assessment: "Not performed"
```

### Undocumented Purpose Expansion

```
Processing Record:
  Collected For: Customer support
  Used For: Behavioral advertising
  Consent for New Purpose: No
  Compatibility: Not assessed
```

## GDPR Context (Informative)

- **Art. 5.1(b)**: Personal data shall be collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes

## Related Signals

- `CSE-GDPR-PRINCIPLES-NO-LAWFULNESS-001`
- `CSE-GDPR-CONTROLLER-NO-PROCESSING-RECORDS-008`
