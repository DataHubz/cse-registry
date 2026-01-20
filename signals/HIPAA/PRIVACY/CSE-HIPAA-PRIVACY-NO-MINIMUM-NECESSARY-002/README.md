# CSE-HIPAA-PRIVACY-NO-MINIMUM-NECESSARY-002

**No Minimum Necessary Standard**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-MINIMUM-NECESSARY-002` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No reasonable efforts to limit PHI to minimum necessary for the intended purpose.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.502(b)

**Regulatory Text:** "When using or disclosing protected health information or when requesting protected health information from another covered entity or business associate, a covered entity or business associate must make reasonable efforts to limit protected health information to the minimum necessary to accomplish the intended purpose of the use, disclosure, or request."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- PHI disclosures include more information than necessary for the stated purpose
- Policies and procedures for minimum necessary determinations are absent or inadequate
- System configurations allow access to entire medical records when limited access would suffice
- Requests for PHI do not specify the minimum amount needed
- Regular reviews of minimum necessary practices are not conducted
