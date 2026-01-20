# CSE-HITRUST-BCM-NO-PROGRAM-001

**BCM Program Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-BCM-NO-PROGRAM-001` |
| Domain          | HITRUST                                  |
| Category        | BCM                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Organization has not established a business continuity management (BCM) program to ensure the continuity of critical business operations during and after disruptions. A comprehensive BCM program must include governance, policies, procedures, resources, and accountability mechanisms to maintain essential functions during adverse events and recover normal operations efficiently.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA requirements
- Organizations handling sensitive health information
- Entities subject to HITRUST CSF certification
- Cloud service providers in healthcare sector
- Business associates and covered entities
- Organizations with critical operational dependencies
- Financial institutions with continuity requirements

## HITRUST CSF Context (Informative)

**Control Reference:** 12.a - Business Continuity Management Program

**Control Domain:** 12 - Business Continuity Management

**Framework Text:** Organizations must establish, document, implement, and maintain a business continuity management program that addresses the continuity requirements of the organization. The program must define management responsibilities, establish procedures for maintaining business continuity under adverse conditions, and ensure regular review and updates of continuity capabilities.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-BCM-NO-BIA-002` (Business Impact Analysis Missing)
- `CSE-HITRUST-BCM-NO-PLANS-003` (Continuity Plans Missing)
- `CSE-FEDRAMP-CP-NO-POLICY-001` (FedRAMP contingency planning policy)
- `CSE-NISTCSF-RC-NO-RECOVERY-PLAN-001` (NIST CSF recovery planning)
- `CSE-SOC2-CC9-NO-BCM-PROGRAM` (SOC 2 business continuity)

## Notes

Detection of this signal typically involves:

- Review of documented BCM program charter and governance structure
- Examination of business continuity policies and procedures
- Verification of management commitment and resource allocation
- Analysis of BCM roles, responsibilities, and accountability
- Assessment of program scope covering critical business functions
- Validation of integration with risk management and incident response
- Review of program performance metrics and reporting mechanisms

The presence of this signal indicates that the organization lacks a structured approach to ensuring business continuity, potentially leading to extended outages, data loss, and inability to recover from disruptions affecting patient care and critical operations.
