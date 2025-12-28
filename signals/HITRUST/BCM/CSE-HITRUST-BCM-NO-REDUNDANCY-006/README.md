# CSE-HITRUST-BCM-NO-REDUNDANCY-006

**Information Redundancy Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-BCM-NO-REDUNDANCY-006` |
| Domain          | HITRUST                                  |
| Category        | BCM                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Organization has not implemented adequate redundancy for critical information, systems, and infrastructure components to ensure availability during disruptions. Comprehensive information redundancy must include backup systems, redundant infrastructure components, geographically distributed resources, data replication mechanisms, and failover capabilities that enable continuity of operations when primary systems or facilities become unavailable.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA requirements
- Organizations handling sensitive health information
- Entities subject to HITRUST CSF certification
- Cloud service providers in healthcare sector
- Business associates and covered entities
- Organizations with high availability requirements
- Entities with critical data protection needs

## HITRUST CSF Context (Informative)

**Control Reference:** 12.f - Information Redundancy

**Control Domain:** 12 - Business Continuity Management

**Framework Text:** Organizations must implement redundancy for information processing facilities and information to ensure availability and business continuity. Redundancy must be sufficient to meet business continuity requirements including recovery time objectives and recovery point objectives for critical information and systems.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-BCM-NO-PROGRAM-001` (BCM Program Missing)
- `CSE-HITRUST-BCM-NO-BIA-002` (Business Impact Analysis Missing)
- `CSE-HITRUST-OPS-NO-BACKUP-006` (Backup procedures missing)
- `CSE-FEDRAMP-CP-NO-ALTERNATE-SITE-005` (FedRAMP alternate processing site)
- `CSE-NISTCSF-PR-NO-REDUNDANCY-004` (NIST CSF information redundancy)
- `CSE-SOC2-A1-NO-AVAILABILITY` (SOC 2 availability)

## Notes

Detection of this signal typically involves:

- Review of redundancy architecture for critical systems and data
- Examination of backup and replication strategies and implementation
- Verification of geographic distribution of redundant resources
- Analysis of failover capabilities and automatic switching mechanisms
- Assessment of redundancy testing and validation procedures
- Validation of capacity planning for redundant infrastructure
- Review of single points of failure in critical systems
- Examination of RTO and RPO alignment with redundancy capabilities

The presence of this signal indicates that the organization lacks technical safeguards to maintain operations during system failures or facility disruptions, may experience data loss exceeding acceptable thresholds, cannot meet recovery objectives for critical systems, and faces extended outages when primary systems fail, potentially compromising patient care and critical healthcare operations.
