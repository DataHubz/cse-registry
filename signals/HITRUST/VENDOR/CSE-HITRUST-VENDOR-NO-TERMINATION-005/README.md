# CSE-HITRUST-VENDOR-NO-TERMINATION-005

**Vendor Termination Process Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-VENDOR-NO-TERMINATION-005` |
| Domain | HITRUST |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of formal vendor termination and offboarding processes. Organizations must establish documented procedures for terminating vendor relationships, including data return or destruction, access revocation, asset recovery, final security assessments, and contractual closeout activities to ensure secure and complete disengagement from third-party service providers.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector
- Organizations managing vendor lifecycle

## Examples (Non-Normative)

### Missing Termination Process

```yaml
# Example: No evidence of vendor termination process
vendor_termination:
  termination_process_documented: false
  data_return_procedures: null
  data_destruction_verification: null
  access_revocation_checklist: null
  asset_recovery_process: null
  knowledge_transfer_plan: null
  final_security_assessment: false
  contract_closeout: null
```

## HITRUST Context (Informative)

- **Control Domain**: 16 - Third Party Security
- **Control Reference**: 16.e
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-VENDOR-NO-CONTRACT-REQUIREMENTS-002
- CSE-HITRUST-VENDOR-NO-MONITORING-004
- CSE-HITRUST-ACCESS-NO-TERMINATION-003
- CSE-SOC2-CC9-NO-VENDOR-OFFBOARDING-005
- CSE-ISO27001-VENDOR-NO-TERMINATION-004
