# CSE-PCIDSS-NET-NO-NSC-CONFIG-002

**No Network Security Control Configuration**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-NET-NO-NSC-CONFIG-002` |
| Domain          | PCIDSS                                   |
| Category        | NET                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Network Security Controls (NSC) such as firewalls, virtual devices, and cloud access controls are not properly configured and managed.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Point-of-sale (POS) systems
- Network infrastructure within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 1.2 Network security controls (NSCs) are configured and maintained.
**Sub-Requirement:** 1.2.1 - 1.2.8

**Regulatory Text:** "Configuration standards for NSC rulesets are defined, implemented, and maintained. NSCs restrict connections between untrusted networks and system components in the CDE. Inbound and outbound traffic to the CDE is restricted to that which is necessary and all other traffic is denied."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review firewall configurations for default-allow rules, check for undocumented rules, verify NSCs are installed at all network boundaries, examine cloud security group configurations, and assess whether all inbound/outbound traffic to CDE is explicitly authorized and documented.
