# CSE-HIPAA-BREACH-NO-MEDIA-NOTIFY-004

**No Media Notification (500+ affected)**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-BREACH-NO-MEDIA-NOTIFY-004` |
| Domain          | HIPAA                                    |
| Category        | BREACH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Prominent media outlets not notified when breach affects 500+ residents of a state or jurisdiction.

## Applicability

This signal applies to:

- Covered entities experiencing data breaches
- Business associates handling ePHI
- Incident response and security teams
- Legal and compliance departments
- Public relations and communications functions
- Healthcare organizations with breach notification obligations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.406

**Regulatory Text:** "A covered entity that is required by § 164.404(a) to notify individuals of a breach shall notify prominent media outlets serving a State or jurisdiction, following the discovery of a breach described in § 164.404(a), if the unsecured protected health information of 500 or more residents of such State or jurisdiction is, or is reasonably believed to have been, accessed, acquired, used, or disclosed during such breach."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Implement automated counting mechanisms to determine if 500+ individuals are affected
- Monitor breach incident reports for geographic distribution of affected individuals
- Verify that media notification procedures are triggered when the 500-person threshold is met
- Check for documented lists of "prominent media outlets" for each relevant state or jurisdiction
- Review records of media notifications including dates, outlets contacted, and content provided
- Audit incident response playbooks to ensure media notification steps are included for large breaches
- Validate that notification to media occurs within the same 60-day timeframe as individual notifications
