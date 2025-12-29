# CSE-PCIDSS-LOG-NO-LOGGING-PROCESS-001

**No Logging Processes**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-LOG-NO-LOGGING-PROCESS-001` |
| Domain          | PCIDSS                                   |
| Category        | LOG                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No defined processes for logging and monitoring access.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 10.1 Processes and mechanisms for logging and monitoring all access to system components and cardholder data are defined and documented

**Sub-Requirement:** 10.1.1

**Regulatory Text:** "All security policies and operational procedures that are identified in Requirement 10 are documented, kept up to date, and in use."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of logging policies, lack of documented logging procedures, missing log management processes, or evidence of undefined audit trail requirements for CDE systems.
