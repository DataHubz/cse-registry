# CSE-PCIDSS-LOG-NO-TIME-SYNC-006

**No Time Synchronization**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-LOG-NO-TIME-SYNC-006` |
| Domain          | PCIDSS                                   |
| Category        | LOG                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Time synchronization is not implemented for consistent log timestamps.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 10.6 Time synchronization mechanisms support consistent time settings across all systems

**Sub-Requirement:** 10.6.1

**Regulatory Text:** "System clocks and time are synchronized using time-synchronization technology."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for missing NTP configuration, systems with inconsistent time settings, absence of authoritative time sources, disabled time sync services, or evidence of significant clock drift across CDE systems that would compromise log correlation.
