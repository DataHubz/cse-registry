# CSE-PCIDSS-NET-NO-UNTRUSTED-MITIGATION-005

**No Untrusted Network Risk Mitigation**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-NET-NO-UNTRUSTED-MITIGATION-005` |
| Domain          | PCIDSS                                   |
| Category        | NET                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Risks from untrusted networks (including the Internet) are not mitigated.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Point-of-sale (POS) systems
- Network infrastructure within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 1.5 Risks to the CDE from computing devices that are able to connect to both untrusted networks and the CDE are mitigated.
**Sub-Requirement:** 1.5.1

**Regulatory Text:** "Security controls are implemented on any computing devices, including company- and employee-owned devices, that connect to both untrusted networks (including the Internet) and the CDE."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Identify dual-homed systems without proper controls, check for missing endpoint protection on devices accessing CDE, verify presence of personal firewall software on portable devices, assess controls for BYOD and contractor devices, and examine whether split-tunneling is properly controlled on VPN connections to CDE.
