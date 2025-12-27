# CSE-CMMC-ENHANCED-NO-DATA-PROVENANCE-018

**Data Provenance Tracking Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-DATA-PROVENANCE-018` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Data provenance and lineage tracking for CUI is not implemented.

This signal indicates that the origin and handling history of sensitive data cannot be verified.

## Applicability

- Data lineage tracking
- Origin verification
- Data handling audit trails
- Transformation logging
- Data integrity verification

## Examples (Non-Normative)

### No Provenance Tracking

```yaml
data_provenance:
  lineage_tracking: not_implemented
  origin_verification: none
  handling_audit: disabled
```

### Unverifiable Data Origin

```
Data Provenance Assessment:
  Lineage System: None
  Origin Tracking: Not available
  Handling History: Unknown
```

## CMMC Level 3 Context (Informative)

- **L3-SI.3.14.5e**: Implement data provenance tracking

## Related Signals

- `CSE-CMMC-ACCESS-NO-CUI-FLOW-CONTROL-005`
- `CSE-CMMC-AUDIT-NO-USER-ACCOUNTABILITY-002`
