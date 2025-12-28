# CSE-HIPAA-PRIVACY-NO-AUTHORIZATION-005

**No Valid Authorization**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-AUTHORIZATION-005` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No valid written authorization obtained when required for uses and disclosures.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.508

**Regulatory Text:** "A covered entity or business associate may not use or disclose protected health information without an authorization that is valid under this section, except as otherwise permitted or required by this subpart."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- PHI is used or disclosed without obtaining required written authorization
- Authorizations are missing required core elements (description of PHI, purpose, expiration, etc.)
- Authorizations lack required statements (right to revoke, treatment/payment not conditioned, etc.)
- Authorizations are obtained through defective notices or forms
- Authorizations are used beyond their expiration date
- Compound authorizations are improperly combined
- Revoked authorizations are not honored
