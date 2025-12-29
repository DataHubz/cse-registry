# CSE-HITRUST-BCM-NO-TESTING-004

**BCM Testing Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-BCM-NO-TESTING-004` |
| Domain          | HITRUST                                  |
| Category        | BCM                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Organization has not conducted regular testing and exercises of business continuity plans to verify their effectiveness and identify gaps. Comprehensive BCM testing must include periodic exercises such as tabletop exercises, simulations, and full-scale tests that validate plan procedures, assess personnel readiness, verify recovery capabilities, and ensure continuity objectives can be achieved within defined timeframes.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA requirements
- Organizations handling sensitive health information
- Entities subject to HITRUST CSF certification
- Cloud service providers in healthcare sector
- Business associates and covered entities
- Organizations with critical service requirements
- Entities with regulatory testing requirements

## HITRUST CSF Context (Informative)

**Control Reference:** 12.d - Business Continuity Testing

**Control Domain:** 12 - Business Continuity Management

**Framework Text:** Organizations must test business continuity plans regularly to ensure their effectiveness and the organization's readiness to execute them during actual disruptions. Testing must verify that plans are current, personnel are trained, procedures work as intended, and recovery time objectives can be met.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-BCM-NO-PROGRAM-001` (BCM Program Missing)
- `CSE-HITRUST-BCM-NO-PLANS-003` (Continuity Plans Missing)
- `CSE-HITRUST-BCM-NO-MAINTENANCE-005` (BCM Maintenance Missing)
- `CSE-FEDRAMP-CP-NO-TESTING-003` (FedRAMP contingency plan testing)
- `CSE-NISTCSF-RC-NO-TESTING-002` (NIST CSF recovery plan testing)
- `CSE-SOC2-CC9-NO-TESTING` (SOC 2 continuity testing)

## Notes

Detection of this signal typically involves:

- Review of documented BCM testing schedule and procedures
- Examination of test results, findings, and corrective actions
- Verification of testing frequency meeting regulatory requirements
- Analysis of test scenarios covering various disruption types
- Assessment of participant involvement and role performance
- Validation of recovery capability against defined RTOs and RPOs
- Review of lessons learned and plan improvements from testing
- Examination of testing documentation and evidence retention

The presence of this signal indicates that the organization cannot validate whether its continuity plans are effective, personnel may be unprepared to execute recovery procedures, and undiscovered gaps may prevent successful recovery during actual disruptions, potentially resulting in extended outages and failure to maintain critical healthcare operations.
