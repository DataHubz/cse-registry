# CSE-PCIDSS-PHYSICAL-NO-ACCESS-CONTROLS-002

**No Physical Access Controls**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-PHYSICAL-NO-ACCESS-CONTROLS-002` |
| Domain          | PCIDSS                                   |
| Category        | PHYSICAL                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Physical access controls do not mediate entry into areas containing cardholder data.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 9.2 Physical access controls manage entry into facilities and systems containing cardholder data

**Sub-Requirement:** 9.2.1

**Regulatory Text:** "Physical access controls are in place to restrict access to systems that store, process, or transmit cardholder data."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for missing badge readers, lack of access control systems, absence of physical barriers, uncontrolled entry points to CDE areas, or evidence of unrestricted physical access to sensitive systems.
