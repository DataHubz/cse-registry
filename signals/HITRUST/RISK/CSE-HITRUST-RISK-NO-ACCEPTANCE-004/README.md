# CSE-HITRUST-RISK-NO-ACCEPTANCE-004

**Risk Acceptance Not Documented**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-RISK-NO-ACCEPTANCE-004` |
| Domain          | HITRUST                                  |
| Category        | RISK                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Organization has not formally documented risk acceptance decisions with appropriate management authorization. When risks cannot be mitigated to acceptable levels or when mitigation is not cost-effective, formal risk acceptance must be documented with clear justification, management approval, residual risk levels, and review periods.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA requirements
- Organizations handling sensitive health information
- Entities subject to HITRUST CSF certification
- Cloud service providers in healthcare sector
- Business associates and covered entities
- Organizations with residual or accepted risks

## HITRUST CSF Context (Informative)

**Control Reference:** 03.b - Risk Treatment

**Control Domain:** 03 - Risk Management

**Framework Text:** Organizations must formally document and authorize risk acceptance decisions. Risk acceptance should be approved by appropriate management levels based on risk severity, include clear justification and business rationale, specify residual risk levels, and establish review periods. Accepted risks must be monitored and periodically reassessed.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-RISK-NO-TREATMENT-003` (Risk treatment plan missing)
- `CSE-HITRUST-RISK-NO-MONITORING-005` (Risk monitoring not implemented)
- `CSE-HIPAA-ADMIN-NO-RISK-MANAGEMENT` (HIPAA risk management requirement)
- `CSE-NISTCSF-RA-NO-RISK-RESPONSE-006` (NIST CSF risk response management)
- `CSE-ISO27001-ORG-NO-RISK-ACCEPTANCE` (ISO 27001 risk acceptance requirement)

## Notes

Detection of this signal typically involves:

- Review of risk acceptance documentation and approval records
- Examination of management authorization levels for risk acceptance
- Verification of justification and business rationale for accepted risks
- Analysis of residual risk levels and acceptance criteria
- Assessment of risk acceptance review periods and reassessment schedules
- Validation of risk owner accountability for accepted risks

The presence of this signal indicates that risks may be informally or implicitly accepted without proper oversight, potentially exposing the organization to unmonitored threats and accountability gaps.
