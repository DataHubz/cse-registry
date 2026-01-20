# CSE-HIPAA-PRIVACY-NO-DEIDENTIFICATION-003

**No De-identification Standards**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-DEIDENTIFICATION-003` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No proper de-identification of health information using Expert Determination or Safe Harbor methods.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.514(a)-(b)

**Regulatory Text:** "Health information that does not identify an individual and with respect to which there is no reasonable basis to believe that the information can be used to identify an individual is not individually identifiable health information. Implementation specifications: Requirements for de-identification of protected health information."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- De-identified data sets retain identifiers from the Safe Harbor list of 18 identifiers
- No expert determination has been obtained for de-identification methods
- Safe Harbor method is not properly applied with all required identifiers removed
- De-identification processes lack documentation or validation
- Re-identification risk assessments are not performed
- Limited data sets are created without proper data use agreements
