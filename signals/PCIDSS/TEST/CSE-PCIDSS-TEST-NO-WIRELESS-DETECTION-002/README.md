# CSE-PCIDSS-TEST-NO-WIRELESS-DETECTION-002

**No Wireless AP Detection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-TEST-NO-WIRELESS-DETECTION-002` |
| Domain          | PCIDSS                                   |
| Category        | TEST                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Wireless access points are not monitored for unauthorized devices.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Security and compliance teams
- Human resources and training departments
- Third-party service providers (TPSPs)
- Incident response teams

## PCI DSS Context (Informative)

**Requirement:** 11.2 - Wireless access points are identified and monitored, and unauthorized wireless access points are addressed

**Sub-Requirement:** 11.2.1

**Regulatory Text:** "Authorized and unauthorized wireless access points are managed as follows: Testing for the presence of wireless (802.11) access points is performed and all unauthorized wireless access points are addressed."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Check for automated wireless detection systems or manual testing procedures. Verify that wireless scans are conducted at least quarterly and after significant changes. Alert on absence of wireless detection logs or tools.
