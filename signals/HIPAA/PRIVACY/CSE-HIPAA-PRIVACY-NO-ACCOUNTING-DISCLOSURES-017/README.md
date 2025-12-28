# CSE-HIPAA-PRIVACY-NO-ACCOUNTING-DISCLOSURES-017

**No Accounting of Disclosures**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-ACCOUNTING-DISCLOSURES-017` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No accounting of disclosures provided when requested.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Human resources and workforce management functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.528

**Regulatory Text:** "An individual has a right to receive an accounting of disclosures of protected health information made by a covered entity in the six years prior to the date on which the accounting is requested, except for disclosures: (i) To carry out treatment, payment and health care operations; (ii) To individuals of protected health information about them; (iii) Incident to a use or disclosure otherwise permitted or required; (iv) Pursuant to an authorization; (v) For the facility's directory or to persons involved in the individual's care; (vi) For national security or intelligence purposes; (vii) To correctional institutions or law enforcement officials; (viii) As part of a limited data set."

These references are informative and do not constitute compliance guidance.

## Notes

Detect absence of disclosure tracking mechanisms, incomplete accounting records, or failure to provide accounting within 60 days of request (with possible 30-day extension). Monitor for disclosure logs that do not capture required information (date, recipient, description, purpose).
