# CSE-HITRUST-VENDOR-NO-DUE-DILIGENCE-003

**Vendor Due Diligence Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-VENDOR-NO-DUE-DILIGENCE-003` |
| Domain | HITRUST |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of ongoing due diligence processes for vendors and third-party service providers. Organizations must conduct periodic due diligence reviews to verify that vendors continue to meet security requirements, maintain appropriate controls, comply with contractual obligations, and address emerging risks throughout the business relationship lifecycle.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector
- Organizations with long-term vendor relationships

## Examples (Non-Normative)

### Missing Ongoing Due Diligence

```yaml
# Example: No evidence of vendor due diligence process
vendor_due_diligence:
  periodic_reviews_required: true
  periodic_reviews_performed: false
  last_review_date: null
  security_controls_verified: false
  compliance_status_checked: false
  performance_metrics_reviewed: false
  remediation_tracking: null
```

## HITRUST Context (Informative)

- **Control Domain**: 16 - Third Party Security
- **Control Reference**: 16.c
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-VENDOR-NO-RISK-ASSESSMENT-001
- CSE-HITRUST-VENDOR-NO-CONTRACT-REQUIREMENTS-002
- CSE-HITRUST-VENDOR-NO-MONITORING-004
- CSE-SOC2-CC9-NO-VENDOR-REVIEW-003
- CSE-ISO27001-VENDOR-NO-REVIEW-002
