# CSE-PCIDSS-NET-NO-CONNECTION-CONTROL-004

**No Network Connection Control**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-NET-NO-CONNECTION-CONTROL-004` |
| Domain          | PCIDSS                                   |
| Category        | NET                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Network connections between trusted and untrusted networks are not controlled.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Point-of-sale (POS) systems
- Network infrastructure within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 1.4 Network connections between trusted and untrusted networks are controlled.
**Sub-Requirement:** 1.4.1 - 1.4.5

**Regulatory Text:** "NSCs are implemented between trusted and untrusted networks. Inbound traffic from untrusted networks to trusted networks is restricted. Anti-spoofing measures are implemented. System components that store cardholder data are not directly accessible from untrusted networks."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Check for missing controls at trust boundaries, verify anti-spoofing measures (such as RFC 1918 filtering), examine whether public-facing systems can directly access CDE, assess controls on VPN and remote access connections, and review filtering of internal IP addresses at external network boundaries.
