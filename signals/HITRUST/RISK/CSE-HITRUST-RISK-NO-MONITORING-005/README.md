# CSE-HITRUST-RISK-NO-MONITORING-005

**Risk Monitoring Not Implemented**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-RISK-NO-MONITORING-005` |
| Domain          | HITRUST                                  |
| Category        | RISK                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Organization has not implemented ongoing risk monitoring processes to track changes in the risk environment, assess control effectiveness, and identify emerging threats. Risk monitoring must continuously evaluate the organization's risk posture, validate that risk treatments are effective, and detect new or evolving risks requiring management attention.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA requirements
- Organizations handling sensitive health information
- Entities subject to HITRUST CSF certification
- Cloud service providers in healthcare sector
- Business associates and covered entities
- Organizations with dynamic threat landscapes

## HITRUST CSF Context (Informative)

**Control Reference:** 03.c - Risk Monitoring and Review

**Control Domain:** 03 - Risk Management

**Framework Text:** Organizations must implement continuous risk monitoring processes to track the effectiveness of risk treatments, detect changes in risk levels, identify new threats and vulnerabilities, and ensure ongoing compliance with risk management objectives. Monitoring should include control effectiveness validation, threat landscape assessment, and risk indicator tracking.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-RISK-NO-ASSESSMENT-001` (Risk assessment not conducted)
- `CSE-HITRUST-RISK-NO-PERIODIC-REVIEW-008` (Periodic risk review not conducted)
- `CSE-HIPAA-ADMIN-NO-EVALUATION` (HIPAA Security Rule evaluation requirement)
- `CSE-NISTCSF-RA-NO-RISK-RESPONSE-006` (NIST CSF risk response management)
- `CSE-ISO27001-ORG-NO-RISK-MONITORING` (ISO 27001 risk monitoring requirement)

## Notes

Detection of this signal typically involves:

- Review of risk monitoring procedures and processes
- Examination of key risk indicators (KRIs) and metrics tracking
- Verification of control effectiveness measurement activities
- Analysis of threat intelligence integration into risk monitoring
- Assessment of risk register updates and change tracking
- Validation of automated monitoring tools and dashboards

The presence of this signal indicates that the organization may be unaware of changing risk conditions, control failures, or emerging threats, potentially leading to undetected security incidents and inadequate risk responses.
