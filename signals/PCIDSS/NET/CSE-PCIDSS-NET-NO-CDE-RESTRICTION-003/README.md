# CSE-PCIDSS-NET-NO-CDE-RESTRICTION-003

**No CDE Access Restriction**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-NET-NO-CDE-RESTRICTION-003` |
| Domain          | PCIDSS                                   |
| Category        | NET                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Access to the Cardholder Data Environment (CDE) is not properly restricted.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Point-of-sale (POS) systems
- Network infrastructure within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 1.3 Network access to and from the cardholder data environment is restricted.
**Sub-Requirement:** 1.3.1 - 1.3.3

**Regulatory Text:** "Inbound traffic to the CDE is restricted. Outbound traffic from the CDE is restricted. NSCs are installed between all wireless networks and the CDE, regardless of whether the wireless network is a CDE or is connected to the CDE."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Identify unrestricted network paths to CDE, check for missing network segmentation controls, verify wireless network isolation from CDE, examine whether direct Internet access from CDE is properly controlled, and assess if internal networks have unrestricted access to CDE components.
