# CSE-PCIDSS-CONFIG-NO-SECURE-SYSTEM-CONFIG-002

**No Secure System Configuration**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-CONFIG-NO-SECURE-SYSTEM-CONFIG-002` |
| Domain          | PCIDSS                                   |
| Category        | CONFIG                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

System components are not securely configured (default passwords not changed, unnecessary services enabled).

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Point-of-sale (POS) systems
- Network infrastructure within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 2.2 System components are configured and managed securely.
**Sub-Requirement:** 2.2.1 - 2.2.7

**Regulatory Text:** "Configuration standards are developed and implemented for all system components. Vendor default accounts are managed. Primary functions requiring different security levels are managed by implementing additional security controls. Only necessary services, protocols, daemons, and functions are enabled, and all unnecessary functionality is removed or disabled."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Scan for default credentials and accounts, identify unnecessary services and protocols running on systems, check for missing security patches and hardening measures, verify that configuration standards align with industry best practices (CIS benchmarks, vendor hardening guides), and assess whether single-function servers are properly segregated by security level.
