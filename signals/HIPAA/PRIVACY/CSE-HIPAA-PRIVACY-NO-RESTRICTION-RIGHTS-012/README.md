# CSE-HIPAA-PRIVACY-NO-RESTRICTION-RIGHTS-012

**No Rights to Request Restrictions**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-RESTRICTION-RIGHTS-012` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Individuals not permitted to request restrictions on uses and disclosures of their PHI.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.522(a)

**Regulatory Text:** "A covered entity must permit an individual to request that the covered entity restrict: (i) Uses or disclosures of protected health information about the individual to carry out treatment, payment, or health care operations; and (ii) Disclosures permitted under § 164.510(b). A covered entity is not required to agree to a restriction, except that a covered entity must agree to the request of an individual to restrict disclosure of protected health information about the individual to a health plan if certain conditions are met."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- Individuals are prevented from making restriction requests
- No process exists for receiving and tracking restriction requests
- Required restrictions (out-of-pocket payment in full) are not honored
- Agreed-upon restrictions are not implemented in systems or workflows
- Restrictions are not properly documented
- Terminated restrictions are not properly communicated to affected parties
- Emergency circumstances exception to restrictions is improperly applied
- Restriction request denials are not properly documented or communicated
