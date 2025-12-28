# CSE-HITRUST-VENDOR-NO-INHERITANCE-006

**Control Inheritance Not Documented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-VENDOR-NO-INHERITANCE-006` |
| Domain | HITRUST |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of documented control inheritance from vendors and third-party service providers. Organizations must formally document which security controls are inherited from vendors, verify vendor implementation and effectiveness of inherited controls, maintain evidence of vendor compliance, and understand the shared responsibility model to ensure comprehensive security coverage and avoid gaps in control implementation.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector
- Organizations using cloud services, SaaS, or managed services

## Examples (Non-Normative)

### Missing Control Inheritance Documentation

```yaml
# Example: No evidence of control inheritance mapping
control_inheritance:
  inheritance_documented: false
  shared_responsibility_matrix: null
  inherited_controls_identified: false
  vendor_control_verification: null
  control_gaps_assessed: false
  attestation_reports_reviewed: false
  compliance_mapping: null
```

## HITRUST Context (Informative)

- **Control Domain**: 16 - Third Party Security
- **Control Reference**: 16.f
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-VENDOR-NO-RISK-ASSESSMENT-001
- CSE-HITRUST-VENDOR-NO-CONTRACT-REQUIREMENTS-002
- CSE-HITRUST-VENDOR-NO-DUE-DILIGENCE-003
- CSE-SOC2-CC9-NO-CONTROL-INHERITANCE-006
- CSE-ISO27001-VENDOR-NO-INHERITANCE-005
