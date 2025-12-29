# CSE-HIPAA-PRIVACY-NO-PSYCHOTHERAPY-PROTECTION-006

**No Psychotherapy Notes Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-PSYCHOTHERAPY-PROTECTION-006` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Psychotherapy notes used or disclosed without required authorization.

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Marketing and communications functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.508(a)(2)

**Regulatory Text:** "A covered entity or business associate must obtain an authorization for any use or disclosure of psychotherapy notes, except for use by the originator of the psychotherapy notes for treatment, and use or disclosure by the covered entity for certain training programs, defending legal actions, oversight, or as otherwise required by law."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal may occur when:
- Psychotherapy notes are disclosed without specific authorization separate from other PHI authorizations
- Psychotherapy notes are improperly commingled with general medical records
- Notes that do not meet the definition of psychotherapy notes are incorrectly segregated
- Psychotherapy notes are used for purposes beyond the narrow exceptions (originator's treatment use, training, legal defense, oversight)
- Providers fail to maintain separate storage and access controls for psychotherapy notes
