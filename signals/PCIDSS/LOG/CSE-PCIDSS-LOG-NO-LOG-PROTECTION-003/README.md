# CSE-PCIDSS-LOG-NO-LOG-PROTECTION-003

**No Log Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-LOG-NO-LOG-PROTECTION-003` |
| Domain          | PCIDSS                                   |
| Category        | LOG                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Audit logs are not protected from unauthorized modification or deletion.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 10.3 Audit logs are protected from destruction and unauthorized modifications

**Sub-Requirement:** 10.3.1

**Regulatory Text:** "Audit logs are protected from unauthorized modifications."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for world-writable log files, lack of log file integrity monitoring, missing access controls on log directories, absence of centralized logging, or evidence of log tampering or deletion capabilities by unauthorized users.
