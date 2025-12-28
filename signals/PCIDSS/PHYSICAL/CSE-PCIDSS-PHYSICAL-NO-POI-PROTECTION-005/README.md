# CSE-PCIDSS-PHYSICAL-NO-POI-PROTECTION-005

**No POI Device Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-PHYSICAL-NO-POI-PROTECTION-005` |
| Domain          | PCIDSS                                   |
| Category        | PHYSICAL                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Point of interaction (POI) devices are not protected from tampering and substitution.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 9.5 Point of interaction (POI) devices are protected from tampering and unauthorized substitution

**Sub-Requirement:** 9.5.1

**Regulatory Text:** "POI devices are protected from tampering and unauthorized substitution."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of device inventory lists, lack of tamper-evident seals, missing device inspection procedures, no tracking of POI device serial numbers, or evidence of unmonitored payment terminals vulnerable to skimming attacks.
