# CSE-PCIDSS-CONFIG-NO-WIRELESS-SECURITY-003

**No Wireless Security Configuration**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-CONFIG-NO-WIRELESS-SECURITY-003` |
| Domain          | PCIDSS                                   |
| Category        | CONFIG                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Wireless environments are not securely configured and managed.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Point-of-sale (POS) systems
- Network infrastructure within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 2.3 Wireless environments are configured and managed securely.
**Sub-Requirement:** 2.3.1 - 2.3.2

**Regulatory Text:** "For wireless environments connected to the CDE or transmitting account data, all wireless vendor defaults are changed at installation, including but not limited to default encryption keys, passwords, and SNMP community strings. Wireless networks transmitting account data or connected to the CDE use industry best practices to implement strong cryptography for authentication and transmission."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Identify wireless access points with default credentials or SSIDs, check for weak encryption protocols (WEP, WPA), verify wireless networks are properly isolated from CDE, assess whether rogue access points are being detected, and examine wireless authentication mechanisms for compliance with current security standards (WPA2/WPA3 with strong encryption).
