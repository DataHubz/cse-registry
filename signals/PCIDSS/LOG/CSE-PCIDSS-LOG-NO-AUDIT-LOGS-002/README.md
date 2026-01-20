# CSE-PCIDSS-LOG-NO-AUDIT-LOGS-002

**No Audit Logs**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-LOG-NO-AUDIT-LOGS-002` |
| Domain          | PCIDSS                                   |
| Category        | LOG                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Audit logs are not implemented for threat detection and forensic analysis.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 10.2 Audit logs are implemented to support the detection of anomalies and suspicious activity, and the forensic analysis of events

**Sub-Requirement:** 10.2.1

**Regulatory Text:** "Audit logs are enabled and active for all system components and cardholder data."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for disabled logging on CDE systems, absence of audit trail generation, missing log data for critical events (authentication, access, changes), or evidence of insufficient logging coverage for security-relevant activities.
