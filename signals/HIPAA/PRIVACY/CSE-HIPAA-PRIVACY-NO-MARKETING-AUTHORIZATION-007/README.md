# CSE-HIPAA-PRIVACY-NO-MARKETING-AUTHORIZATION-007

**No Marketing Authorization**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-MARKETING-AUTHORIZATION-007` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

PHI used for marketing without required authorization or disclosure of financial remuneration.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.508(a)(3)

**Regulatory Text:** "A covered entity must obtain an authorization for any use or disclosure of protected health information for marketing, except if the communication is in the form of: (i) A face-to-face communication made by a covered entity to an individual; or (ii) A promotional gift of nominal value provided by the covered entity. If the marketing involves financial remuneration to the covered entity from a third party, the authorization must state that such remuneration is involved."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- Marketing communications are sent without obtaining required authorization
- Authorizations for marketing fail to disclose financial remuneration from third parties
- Treatment or health plan communications are mischaracterized to avoid marketing authorization requirements
- Refill reminders or health-related product recommendations contain marketing elements without authorization
- Face-to-face exception or nominal gift exception is improperly applied
- Financial incentives for marketing are not disclosed in authorizations
