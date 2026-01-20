# CSE-HIPAA-PRIVACY-NO-ACCESS-TIMELINESS-015

**No Timely Access Response**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-PRIVACY-NO-ACCESS-TIMELINESS-015` |
| Domain          | HIPAA                                    |
| Category        | PRIVACY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Access requests not responded to within 30 days (with possible 30-day extension).

## Applicability

This signal applies to:

- Healthcare providers with direct patient relationships
- Health plans and insurers
- Healthcare clearinghouses
- Business associates handling PHI
- Patient-facing systems and portals
- Human resources and workforce management functions

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.524(b)(2)

**Regulatory Text:** "The covered entity must act on the request for access no later than 30 calendar days after receipt of the request... The covered entity may extend the time for action by no more than 30 calendar days, provided that the covered entity, within the initial 30-day period, provides the individual with a written statement of the reasons for the delay and the date by which the covered entity will complete its action on the request."

These references are informative and do not constitute compliance guidance.

## Notes

Detect access requests pending beyond the 30-day timeframe without proper extension notification, or requests that exceed the maximum 60-day response time (30 days plus one 30-day extension). Monitor request tracking systems for overdue access requests.
