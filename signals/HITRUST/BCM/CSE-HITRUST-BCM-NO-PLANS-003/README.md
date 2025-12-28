# CSE-HITRUST-BCM-NO-PLANS-003

**Continuity Plans Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-BCM-NO-PLANS-003` |
| Domain          | HITRUST                                  |
| Category        | BCM                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Organization has not developed and documented business continuity plans to maintain or restore critical business operations during and after disruptions. Comprehensive continuity plans must include detailed procedures for response, recovery, and restoration activities, define roles and responsibilities, identify required resources, and establish communication protocols for various disruption scenarios.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA requirements
- Organizations handling sensitive health information
- Entities subject to HITRUST CSF certification
- Cloud service providers in healthcare sector
- Business associates and covered entities
- Organizations with critical operational requirements
- Entities requiring documented recovery procedures

## HITRUST CSF Context (Informative)

**Control Reference:** 12.c - Business Continuity Plans

**Control Domain:** 12 - Business Continuity Management

**Framework Text:** Organizations must develop and document plans to maintain or restore business operations in the required time scales following interruption to, or failure of, critical business processes. Business continuity plans must address recovery requirements, procedures, responsibilities, and resources necessary to ensure continuity of critical operations.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-BCM-NO-PROGRAM-001` (BCM Program Missing)
- `CSE-HITRUST-BCM-NO-BIA-002` (Business Impact Analysis Missing)
- `CSE-HITRUST-BCM-NO-TESTING-004` (BCM Testing Missing)
- `CSE-FEDRAMP-CP-NO-CONTINGENCY-PLAN-002` (FedRAMP contingency planning)
- `CSE-NISTCSF-RC-NO-RECOVERY-PLAN-001` (NIST CSF recovery planning)
- `CSE-SOC2-CC9-NO-RECOVERY-PROCEDURES` (SOC 2 recovery procedures)

## Notes

Detection of this signal typically involves:

- Review of documented business continuity plans for critical functions
- Examination of plan completeness including procedures and responsibilities
- Verification of recovery strategies aligned with RTOs and RPOs
- Analysis of resource requirements and availability specifications
- Assessment of communication and notification procedures
- Validation of plan accessibility and distribution to relevant personnel
- Review of escalation procedures and decision-making authorities

The presence of this signal indicates that the organization lacks documented procedures to respond to and recover from disruptions, potentially leading to inconsistent response actions, confusion during incidents, extended downtime, and failure to meet recovery objectives for critical healthcare operations.
