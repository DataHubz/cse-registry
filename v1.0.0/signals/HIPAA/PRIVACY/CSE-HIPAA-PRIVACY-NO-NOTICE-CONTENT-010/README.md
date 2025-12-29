# CSE-HIPAA-PRIVACY-NO-NOTICE-CONTENT-010

**Incomplete Notice Content**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-NOTICE-CONTENT-010` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Notice of Privacy Practices does not contain all required elements.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.520(b)

**Regulatory Text:** "The notice must contain: (i) A header; (ii) A description of the uses and disclosures; (iii) A description of the individual's rights; (iv) A description of the covered entity's duties; (v) A statement of the individual's right to complain; (vi) A contact person or office; (vii) The effective date; and (viii) Other required statements."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- Notice lacks required header stating "THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED..."
- Description of uses and disclosures is incomplete or inaccurate
- Individual rights section omits required rights (access, amendment, accounting, restrictions, confidential communications)
- Covered entity duties are not properly described
- Complaint procedures and contact information are missing or incomplete
- Effective date is absent or incorrect
- Required statements about marketing, fundraising, or sale of PHI are missing
- Notice does not describe state law protections that are more stringent than HIPAA
