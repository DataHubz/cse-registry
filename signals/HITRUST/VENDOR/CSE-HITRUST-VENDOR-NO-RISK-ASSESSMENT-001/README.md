# CSE-HITRUST-VENDOR-NO-RISK-ASSESSMENT-001

**Vendor Risk Assessment Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-VENDOR-NO-RISK-ASSESSMENT-001` |
| Domain | HITRUST |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of formal vendor risk assessments before engaging third-party service providers. Organizations must conduct comprehensive risk assessments of vendors and third-party service providers that will access, process, store, or transmit sensitive information, including evaluation of their security controls, compliance status, and potential risks to the organization's information assets.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector
- Organizations using cloud services or SaaS applications

## Examples (Non-Normative)

### Missing Vendor Risk Assessment

```yaml
# Example: No evidence of vendor risk assessment
vendor_management:
  risk_assessment_required: true
  risk_assessment_performed: false
  vendor_security_evaluation: null
  compliance_verification: null
  risk_rating: null
```

## HITRUST Context (Informative)

- **Control Domain**: 16 - Third Party Security
- **Control Reference**: 16.a
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-VENDOR-NO-CONTRACT-REQUIREMENTS-002
- CSE-HITRUST-VENDOR-NO-DUE-DILIGENCE-003
- CSE-HITRUST-VENDOR-NO-MONITORING-004
- CSE-HITRUST-RISK-NO-ASSESSMENT-001
- CSE-SOC2-CC9-NO-VENDOR-ASSESSMENT-001
