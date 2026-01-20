# CSE-HIPAA-PRIVACY-NO-SALE-PROHIBITION-008

**No PHI Sale Prohibition**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-SALE-PROHIBITION-008` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

PHI disclosed for remuneration without proper authorization.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.508(a)(4)

**Regulatory Text:** "A covered entity or business associate must obtain an authorization for a use or disclosure of protected health information that is a sale of protected health information. Such authorization must state that the disclosure will result in remuneration to the covered entity or business associate."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- PHI is disclosed in exchange for direct or indirect remuneration without authorization
- Authorization for sale of PHI does not explicitly state that remuneration is involved
- Exceptions for public health purposes, research, treatment/payment, business associate services, or individual-requested disclosures are improperly applied
- Financial arrangements involving PHI disclosure are not properly documented
- Data brokers or third parties receive PHI in exchange for payment without proper authorization
- Reasonable cost-based fees are exceeded, constituting remuneration
