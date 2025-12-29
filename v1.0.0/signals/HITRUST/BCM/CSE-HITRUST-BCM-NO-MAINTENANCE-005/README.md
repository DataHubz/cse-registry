# CSE-HITRUST-BCM-NO-MAINTENANCE-005

**BCM Maintenance Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-BCM-NO-MAINTENANCE-005` |
| Domain          | HITRUST                                  |
| Category        | BCM                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Organization has not established processes to maintain and update business continuity plans and capabilities to ensure they remain current and effective. Comprehensive BCM maintenance must include regular reviews of plans, updates based on organizational changes, incorporation of lessons learned from testing and incidents, validation of contact information and resources, and reassessment of recovery strategies to reflect evolving business requirements and threat landscapes.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA requirements
- Organizations handling sensitive health information
- Entities subject to HITRUST CSF certification
- Cloud service providers in healthcare sector
- Business associates and covered entities
- Organizations with dynamic operational environments
- Entities with changing technology infrastructures

## HITRUST CSF Context (Informative)

**Control Reference:** 12.e - Business Continuity Maintenance

**Control Domain:** 12 - Business Continuity Management

**Framework Text:** Organizations must maintain business continuity plans through regular reviews and updates to ensure they remain current, effective, and aligned with organizational changes. Maintenance activities must address changes to business processes, personnel, systems, technologies, and lessons learned from testing and actual disruptions.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-BCM-NO-PROGRAM-001` (BCM Program Missing)
- `CSE-HITRUST-BCM-NO-PLANS-003` (Continuity Plans Missing)
- `CSE-HITRUST-BCM-NO-TESTING-004` (BCM Testing Missing)
- `CSE-FEDRAMP-CP-NO-PLAN-UPDATE-004` (FedRAMP plan updates)
- `CSE-NISTCSF-RC-NO-PLAN-UPDATES-003` (NIST CSF plan updates)
- `CSE-SOC2-CC9-NO-PLAN-MAINTENANCE` (SOC 2 plan maintenance)

## Notes

Detection of this signal typically involves:

- Review of documented BCM maintenance procedures and schedules
- Examination of plan review history and update records
- Verification of change management integration with BCM updates
- Analysis of processes for incorporating organizational changes
- Assessment of contact list currency and accuracy
- Validation of resource availability and configuration updates
- Review of lessons learned integration from tests and incidents
- Examination of version control and plan distribution processes

The presence of this signal indicates that continuity plans may be outdated and ineffective, contain inaccurate information about personnel and resources, fail to reflect current business operations and dependencies, and may not work as expected during actual disruptions, potentially leading to failed recovery attempts and extended outages of critical healthcare operations.
