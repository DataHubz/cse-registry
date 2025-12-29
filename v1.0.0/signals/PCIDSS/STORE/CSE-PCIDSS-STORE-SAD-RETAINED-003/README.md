# CSE-PCIDSS-STORE-SAD-RETAINED-003

**Sensitive Authentication Data Retained**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-STORE-SAD-RETAINED-003` |
| Domain          | PCIDSS                                   |
| Category        | STORE                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Sensitive authentication data (full track data, CVV, PIN) is stored after authorization.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment processors and service providers
- E-commerce platforms and merchants
- Database systems containing payment card data
- Data transmission channels and APIs

## PCI DSS Context (Informative)

**Requirement:** 3.3 Sensitive authentication data is not stored after authorization

**Sub-Requirement:** 3.3.1, 3.3.2, 3.3.3

**Regulatory Text:** "Sensitive authentication data (SAD) is not retained after authorization, even if encrypted. SAD includes full track data (magnetic-stripe data or equivalent on a chip), card verification code or value, and PINs/PIN blocks."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Scan databases, log files, and storage systems for prohibited sensitive authentication data elements. Check for full magnetic stripe data (tracks 1, 2, or equivalent chip data), CVV2/CVC2/CID values, and PIN/PIN block data. Review application code and data flows to identify improper retention. Monitor backup systems and archived data for SAD presence post-authorization.
