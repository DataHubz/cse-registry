# CSE-NISTCSF-DS-NO-DATA-IN-TRANSIT-002

**Data in Transit Not Protected**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-DS-NO-DATA-IN-TRANSIT-002` |
| Domain          | NISTCSF                                  |
| Category        | Data Security                            |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The confidentiality, integrity, and availability of data-in-transit are not protected.

## Applicability

This signal applies to:

- All organizations implementing cybersecurity safeguards
- Data protection and platform security teams
- Infrastructure resilience programs
- Organizations managing technology platforms

## NIST CSF 2.0 Context (Informative)

**Function:** PROTECT (PR)
**Category:** PR.DS - Data Security
**Subcategory:** PR.DS-02

**Framework Text:** "The confidentiality, integrity, and availability of data-in-transit are protected"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Monitor for unencrypted network communications, weak TLS/SSL configurations, lack of VPN usage for sensitive data transmission, missing integrity checks during data transfer, and inadequate protection of data during network transmission.
