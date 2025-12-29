# CSE-PCIDSS-LOG-NO-LOG-RETENTION-005

**No Log Retention**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-LOG-NO-LOG-RETENTION-005` |
| Domain          | PCIDSS                                   |
| Category        | LOG                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Audit log history is not retained (3 months immediately available, 1 year archived).

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 10.5 Audit log history is retained and available for analysis

**Sub-Requirement:** 10.5.1

**Regulatory Text:** "Retain audit log history for at least 12 months, with at least the most recent three months immediately available for analysis."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for log rotation policies that delete logs too soon, absence of log archival systems, insufficient storage capacity for log retention, missing backup of historical logs, or evidence of logs being retained for less than the required 12-month period.
