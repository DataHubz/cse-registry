# CSE-PCIDSS-TEST-NO-VULN-SCANNING-003

**No Vulnerability Scanning**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-TEST-NO-VULN-SCANNING-003` |
| Domain          | PCIDSS                                   |
| Category        | TEST                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Internal and external vulnerability scans are not performed quarterly.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Security and compliance teams
- Human resources and training departments
- Third-party service providers (TPSPs)
- Incident response teams

## PCI DSS Context (Informative)

**Requirement:** 11.3 - External and internal vulnerabilities are regularly identified, prioritized, and addressed

**Sub-Requirement:** 11.3.1, 11.3.2

**Regulatory Text:** "Internal and external vulnerability scans are performed as follows: At least once every three months, and after any significant change to the network or systems."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor for absence of quarterly vulnerability scan reports from an Approved Scanning Vendor (ASV) for external scans and internal scanning tools. Verify scan schedules, coverage of all system components in the CDE, and remediation tracking for identified vulnerabilities.
