# CSE-HITRUST-BCM-NO-BIA-002

**Business Impact Analysis Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-BCM-NO-BIA-002` |
| Domain          | HITRUST                                  |
| Category        | BCM                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Organization has not conducted a business impact analysis (BIA) to identify critical business processes, their dependencies, and the impact of disruptions. A comprehensive BIA must systematically evaluate the consequences of business function interruptions, determine recovery time objectives (RTOs) and recovery point objectives (RPOs), and identify resource requirements for continuity.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA requirements
- Organizations handling sensitive health information
- Entities subject to HITRUST CSF certification
- Cloud service providers in healthcare sector
- Business associates and covered entities
- Organizations with critical service dependencies
- Entities with regulatory continuity requirements

## HITRUST CSF Context (Informative)

**Control Reference:** 12.b - Business Impact Analysis

**Control Domain:** 12 - Business Continuity Management

**Framework Text:** Organizations must conduct a business impact analysis to identify the impact that interruptions to critical business functions and processes would have on the organization. The analysis must identify priorities for recovery, establish recovery time objectives, and determine resource requirements to maintain acceptable levels of operation during disruptions.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-BCM-NO-PROGRAM-001` (BCM Program Missing)
- `CSE-HITRUST-BCM-NO-PLANS-003` (Continuity Plans Missing)
- `CSE-FEDRAMP-CP-NO-CONTINGENCY-PLAN-002` (FedRAMP contingency planning)
- `CSE-NISTCSF-ID-NO-CRITICAL-SERVICES-002` (NIST CSF critical services identification)
- `CSE-ISO27001-OPS-NO-BIA` (ISO 27001 business impact analysis)

## Notes

Detection of this signal typically involves:

- Review of documented BIA methodology and procedures
- Examination of critical business process inventories
- Verification of RTO and RPO definitions for each critical function
- Analysis of dependency mapping for systems and resources
- Assessment of impact scenarios and consequence evaluation
- Validation of stakeholder input and business function prioritization
- Review of resource requirements for continuity operations

The presence of this signal indicates that the organization cannot prioritize recovery efforts effectively, may allocate resources inappropriately during disruptions, and lacks data-driven recovery objectives, potentially resulting in unacceptable downtime for critical healthcare operations.
