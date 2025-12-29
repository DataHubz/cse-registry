# CSE-HIPAA-PRIVACY-NO-CONFIDENTIAL-COMMS-013

**No Confidential Communications**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-CONFIDENTIAL-COMMS-013` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No accommodation of requests for confidential communications.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.522(b)

**Regulatory Text:** "A covered entity must permit individuals to request and must accommodate reasonable requests by individuals to receive communications of protected health information from the covered entity by alternative means or at alternative locations. A covered health care provider must accommodate a reasonable request without inquiring as to the reason for the request. A health plan may require that the request include a statement that disclosure of all or part of the information could endanger the individual."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- No process exists for individuals to request confidential communications
- Reasonable requests for alternative communication methods or locations are denied
- Healthcare providers improperly require explanations for confidential communication requests
- Health plans fail to accommodate requests when disclosure could endanger the individual
- Alternative addresses, phone numbers, or email addresses are not honored
- Systems are not configured to support confidential communication preferences
- Staff are not trained on confidential communication obligations
- Documentation of confidential communication requests and accommodations is inadequate
