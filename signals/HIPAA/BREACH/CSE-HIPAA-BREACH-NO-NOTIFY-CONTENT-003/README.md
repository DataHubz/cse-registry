# CSE-HIPAA-BREACH-NO-NOTIFY-CONTENT-003

**Incomplete Notification Content**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-BREACH-NO-NOTIFY-CONTENT-003` |
| Domain          | HIPAA                                    |
| Category        | BREACH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Breach notifications do not contain all required elements (description, types of information, steps to take, entity's actions, contact info).

## Applicability

This signal applies to:

- Covered entities experiencing data breaches
- Business associates handling ePHI
- Incident response and security teams
- Legal and compliance departments
- Public relations and communications functions
- Healthcare organizations with breach notification obligations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.404(c)

**Regulatory Text:** "The notification required by paragraph (a) of this section shall include, to the extent possible: (1) A brief description of what happened, including the date of the breach and the date of the discovery of the breach, if known; (2) A description of the types of unsecured protected health information that were involved in the breach; (3) Any steps individuals should take to protect themselves from potential harm resulting from the breach; (4) A brief description of what the covered entity involved is doing to investigate the breach, to mitigate harm to individuals, and to protect against any further breaches; and (5) Contact procedures for individuals to ask questions or learn additional information."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Review breach notification templates to verify all five required elements are included
- Audit sent notifications against a compliance checklist to ensure completeness
- Check for standardized notification templates that enforce inclusion of required content
- Verify that notifications include specific dates (breach date and discovery date)
- Confirm that descriptions of compromised PHI types are sufficiently detailed
- Ensure protective steps for individuals are clearly outlined and actionable
- Validate that contact information for questions is prominently displayed and functional
