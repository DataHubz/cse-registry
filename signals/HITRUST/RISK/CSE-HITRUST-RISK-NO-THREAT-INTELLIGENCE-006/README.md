# CSE-HITRUST-RISK-NO-THREAT-INTELLIGENCE-006

**Threat Intelligence Not Utilized**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-RISK-NO-THREAT-INTELLIGENCE-006` |
| Domain          | HITRUST                                  |
| Category        | RISK                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Organization does not integrate threat intelligence into risk management processes to identify emerging threats, attack patterns, and adversary tactics relevant to healthcare environments. Threat intelligence must be collected from internal and external sources, analyzed for relevance, and used to update risk assessments, strengthen defenses, and inform security decisions.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA requirements
- Organizations handling sensitive health information
- Entities subject to HITRUST CSF certification
- Cloud service providers in healthcare sector
- Business associates and covered entities
- Organizations facing sophisticated threat actors

## HITRUST CSF Context (Informative)

**Control Reference:** 03.d - Threat Intelligence Integration

**Control Domain:** 03 - Risk Management

**Framework Text:** Organizations must integrate threat intelligence into risk management processes to identify relevant threats, understand adversary capabilities and intentions, assess emerging attack vectors, and update risk assessments accordingly. Threat intelligence sources should include industry-specific feeds, government advisories, security research, and internal incident data.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-RISK-NO-ASSESSMENT-001` (Risk assessment not conducted)
- `CSE-HITRUST-RISK-NO-MONITORING-005` (Risk monitoring not implemented)
- `CSE-HIPAA-ADMIN-NO-THREAT-ANALYSIS` (HIPAA threat analysis requirement)
- `CSE-NISTCSF-RA-NO-THREAT-INFO` (NIST CSF threat information utilization)
- `CSE-ISO27001-ORG-NO-THREAT-INTELLIGENCE` (ISO 27001 threat intelligence)

## Notes

Detection of this signal typically involves:

- Review of threat intelligence sources and subscriptions
- Examination of threat intelligence analysis and dissemination processes
- Verification of threat intelligence integration into risk assessments
- Analysis of threat actor profiles and attack pattern documentation
- Assessment of information sharing with healthcare ISACs and peer organizations
- Validation of threat intelligence-driven security control updates

The presence of this signal indicates that the organization may be unaware of relevant threats targeting healthcare sector, potentially leaving defenses unprepared for known attack techniques and emerging threat campaigns.
