# CSE-HIPAA-PRIVACY-NO-TPO-LIMITS-004

**No Treatment/Payment/Operations Limits**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-TPO-LIMITS-004` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Uses and disclosures for treatment, payment, or health care operations exceed permitted scope.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.506

**Regulatory Text:** "A covered entity may use or disclose protected health information for its own treatment, payment, or health care operations. A covered entity may disclose protected health information for the treatment activities of a health care provider."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- PHI is disclosed for treatment beyond what is necessary for coordinating care
- Payment-related disclosures exceed billing and reimbursement purposes
- Health care operations uses go beyond permitted activities (quality assessment, training, accreditation, etc.)
- TPO purposes are broadly interpreted to justify inappropriate disclosures
- Notice of Privacy Practices does not adequately describe TPO uses and disclosures
