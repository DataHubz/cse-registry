# CSE-HITRUST-VENDOR-NO-CONTRACT-REQUIREMENTS-002

**Security Contract Requirements Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-VENDOR-NO-CONTRACT-REQUIREMENTS-002` |
| Domain | HITRUST |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of security requirements in vendor and third-party service provider contracts. Organizations must ensure that contracts with vendors include appropriate security clauses covering data protection, security controls, incident notification, audit rights, compliance obligations, and liability provisions to protect the organization's information assets and maintain regulatory compliance.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector
- Organizations outsourcing critical business functions

## Examples (Non-Normative)

### Missing Contract Security Requirements

```yaml
# Example: No security requirements in vendor contract
vendor_contract:
  security_requirements_included: false
  data_protection_clause: null
  incident_notification_terms: null
  audit_rights: null
  compliance_obligations: null
  liability_provisions: null
  right_to_audit: false
```

## HITRUST Context (Informative)

- **Control Domain**: 16 - Third Party Security
- **Control Reference**: 16.b
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-VENDOR-NO-RISK-ASSESSMENT-001
- CSE-HITRUST-VENDOR-NO-DUE-DILIGENCE-003
- CSE-HITRUST-VENDOR-NO-MONITORING-004
- CSE-SOC2-CC9-NO-VENDOR-CONTRACTS-002
- CSE-ISO27001-VENDOR-NO-AGREEMENTS-001
