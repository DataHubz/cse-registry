# CSE-PCIDSS-SECDEV-NO-SECURE-DEV-PROCESS-001

**No Secure Development Processes**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-SECDEV-NO-SECURE-DEV-PROCESS-001` |
| Domain          | PCIDSS                                   |
| Category        | SECDEV                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No defined processes for developing secure systems and software.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment application developers
- E-commerce platforms and merchants
- Systems and endpoints within CDE scope
- Web applications handling payment data

## PCI DSS Context (Informative)

**Requirement:** 6.1 - Processes and mechanisms for developing and maintaining secure systems and software are defined and understood

**Sub-Requirement:** 6.1.1

**Regulatory Text:** "All security policies and operational procedures that are identified in Requirement 6 are documented, kept up to date, actively used, and known to all affected parties."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor for absence of secure software development lifecycle (SDLC) documentation and procedures. Review development processes for lack of security requirements, design reviews, or security testing phases. Check for missing secure coding standards, guidelines, or training materials. Identify gaps in development environment security controls and separation of duties. Verify that security activities are integrated throughout the development lifecycle rather than added as an afterthought.
