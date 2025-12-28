# CSE-PCIDSS-SECDEV-NO-VULN-MGMT-003

**No Vulnerability Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-SECDEV-NO-VULN-MGMT-003` |
| Domain          | PCIDSS                                   |
| Category        | SECDEV                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Software vulnerabilities are not identified and addressed through patching.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment application developers
- E-commerce platforms and merchants
- Systems and endpoints within CDE scope
- Web applications handling payment data

## PCI DSS Context (Informative)

**Requirement:** 6.3 - Security vulnerabilities are identified and addressed

**Sub-Requirement:** 6.3.1, 6.3.2, 6.3.3

**Regulatory Text:** "Security vulnerabilities are identified and managed as follows: New security vulnerabilities are identified using industry-recognized sources. System components and software are managed to minimize the exposure to security vulnerabilities. Deployed software is kept up to date."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor vulnerability scanning results for unpatched systems and applications. Identify systems with outdated software versions or missing critical security patches. Review patch management processes for gaps in vulnerability assessment, prioritization, or remediation timelines. Detect systems excluded from vulnerability scanning without proper justification. Check for absence of vulnerability disclosure monitoring or threat intelligence feeds to identify new vulnerabilities affecting deployed software.
