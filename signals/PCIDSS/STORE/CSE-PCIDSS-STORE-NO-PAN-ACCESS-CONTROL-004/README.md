# CSE-PCIDSS-STORE-NO-PAN-ACCESS-CONTROL-004

**No PAN View/Copy Access Control**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-STORE-NO-PAN-ACCESS-CONTROL-004` |
| Domain          | PCIDSS                                   |
| Category        | STORE                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No restrictions on view and copy access to Primary Account Numbers (PAN).

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Database systems containing payment card data
- Data transmission channels and APIs

## PCI DSS Context (Informative)

**Requirement:** 3.4 Access to displays of full PAN and ability to copy PAN is restricted

**Sub-Requirement:** 3.4.1, 3.4.2

**Regulatory Text:** "Access to displays of full PAN and the ability to copy cardholder data is restricted according to role-based access controls and only for personnel with a legitimate business need."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Review access control configurations for applications, databases, and systems displaying PANs. Verify implementation of masking or truncation for users without legitimate business need. Test copy/paste functionality and screen capture controls. Audit user roles and permissions to ensure least privilege. Check for unmasked PANs in user interfaces, reports, and logs.
