# CSE-PCIDSS-LOG-NO-LOG-REVIEW-004

**No Log Review**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-LOG-NO-LOG-REVIEW-004` |
| Domain          | PCIDSS                                   |
| Category        | LOG                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Audit logs are not reviewed to identify suspicious activity.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 10.4 Audit logs are reviewed to identify anomalies or suspicious activity

**Sub-Requirement:** 10.4.1

**Regulatory Text:** "The following audit logs are reviewed at least once daily: all security events, logs of all system components that store, process, or transmit CHD and/or SAD, logs of all critical system components, logs of all servers and system components that perform security functions."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of log review procedures, lack of documented review activities, missing SIEM alerts or monitoring, no evidence of daily log analysis, or outdated/unreviewed security event logs.
