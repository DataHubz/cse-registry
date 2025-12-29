# CSE-PCIDSS-CONFIG-NO-SECURE-CONFIG-PROCESS-001

**No Secure Configuration Processes**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-CONFIG-NO-SECURE-CONFIG-PROCESS-001` |
| Domain          | PCIDSS                                   |
| Category        | CONFIG                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No defined processes for applying secure configurations to system components.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Point-of-sale (POS) systems
- Network infrastructure within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 2.1 Processes and mechanisms for applying secure configurations to all system components are defined and understood.
**Sub-Requirement:** 2.1.1 - 2.1.2

**Regulatory Text:** "All security policies and operational procedures that are identified in Requirement 2 are documented, kept up to date, in use, and known to all affected parties. Roles and responsibilities for performing activities in Requirement 2 are documented, assigned, and understood."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for missing secure configuration standards, lack of hardening procedures for different system types, absence of documented baseline configurations, missing change management processes for security configurations, and no defined responsibilities for maintaining secure configurations across the environment.
