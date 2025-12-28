# CSE-PCIDSS-SECDEV-NO-SECURE-CODING-002

**No Secure Coding Practices**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-SECDEV-NO-SECURE-CODING-002` |
| Domain          | PCIDSS                                   |
| Category        | SECDEV                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Custom software is not developed using secure coding practices.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment application developers
- E-commerce platforms and merchants
- Systems and endpoints within CDE scope
- Web applications handling payment data

## PCI DSS Context (Informative)

**Requirement:** 6.2 - Bespoke and custom software are developed securely

**Sub-Requirement:** 6.2.1, 6.2.2, 6.2.3, 6.2.4

**Regulatory Text:** "Bespoke and custom software are developed securely, as follows: Based on industry standards and/or best practices for secure development. Reviewed prior to being released to production or to customers. Code reviews ensure code is developed according to secure coding guidelines. Correction of identified security vulnerabilities."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review code repositories for lack of secure coding standards compliance. Detect common vulnerabilities such as SQL injection, cross-site scripting (XSS), insecure authentication, or hardcoded credentials in source code. Monitor for absence of code review processes or automated security scanning tools. Check for developer training gaps in secure coding techniques. Identify custom applications developed without following OWASP or similar security guidelines.
