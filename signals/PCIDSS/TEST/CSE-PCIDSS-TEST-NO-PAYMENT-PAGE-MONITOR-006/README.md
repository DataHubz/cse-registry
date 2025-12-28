# CSE-PCIDSS-TEST-NO-PAYMENT-PAGE-MONITOR-006

**No Payment Page Change Detection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-TEST-NO-PAYMENT-PAGE-MONITOR-006` |
| Domain          | PCIDSS                                   |
| Category        | TEST                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Changes to payment pages are not detected for tamper prevention.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Security and compliance teams
- Human resources and training departments
- Third-party service providers (TPSPs)
- Incident response teams

## PCI DSS Context (Informative)

**Requirement:** 11.6 - Unauthorized changes on payment pages are detected and responded to

**Sub-Requirement:** 11.6.1

**Regulatory Text:** "A change- and tamper-detection mechanism is deployed as follows: To alert personnel to unauthorized modification (including indicators of compromise, changes, additions, and deletions) to the HTTP headers and the contents of payment pages as received by the consumer browser."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor for file integrity monitoring (FIM) or change detection mechanisms on payment pages and scripts. Verify automated alerts for unauthorized modifications to payment forms, JavaScript, and related content. Check for regular reviews of payment page integrity and incident response procedures for detected changes.
