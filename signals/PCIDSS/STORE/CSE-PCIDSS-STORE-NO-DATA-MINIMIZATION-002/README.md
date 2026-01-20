# CSE-PCIDSS-STORE-NO-DATA-MINIMIZATION-002

**No Account Data Minimization**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-STORE-NO-DATA-MINIMIZATION-002` |
| Domain          | PCIDSS                                   |
| Category        | STORE                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Account data in storage exceeds the minimum necessary for business operations.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Database systems containing payment card data
- Data transmission channels and APIs

## PCI DSS Context (Informative)

**Requirement:** 3.2 Account data storage is kept to a minimum

**Sub-Requirement:** 3.2.1

**Regulatory Text:** "Account data storage is kept to a minimum through implementation of data retention and disposal policies, procedures, and processes."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Audit data storage repositories to identify cardholder data that exceeds business justification. Review data retention policies and verify implementation. Check for excessive storage duration, unnecessary data fields, or redundant copies of cardholder data. Examine database schemas and storage systems for compliance with data minimization principles.
