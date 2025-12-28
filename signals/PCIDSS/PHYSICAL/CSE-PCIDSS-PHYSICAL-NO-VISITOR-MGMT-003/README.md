# CSE-PCIDSS-PHYSICAL-NO-VISITOR-MGMT-003

**No Visitor Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-PHYSICAL-NO-VISITOR-MGMT-003` |
| Domain          | PCIDSS                                   |
| Category        | PHYSICAL                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Physical access for visitors and personnel is not authorized and managed.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 9.3 Physical access for personnel and visitors is authorized and managed

**Sub-Requirement:** 9.3.1

**Regulatory Text:** "Procedures are implemented for authorizing and managing physical access of personnel to the cardholder data environment."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of visitor logs, lack of escort procedures, missing visitor badge systems, no authorization process for CDE access, or evidence of unmanaged visitor access to sensitive areas.
