# CSE-HIPAA-BREACH-NO-TIMELY-NOTIFY-002

**No Timely Notification (60 days)**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-BREACH-NO-TIMELY-NOTIFY-002` |
| Domain          | HIPAA                                    |
| Category        | BREACH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Breach notifications not provided within 60 calendar days of discovery.

## Applicability

This signal applies to:

- Covered entities experiencing data breaches
- Business associates handling ePHI
- Incident response and security teams
- Legal and compliance departments
- Public relations and communications functions
- Healthcare organizations with breach notification obligations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.404(b)

**Regulatory Text:** "Except as provided in paragraph (c) of this section, a covered entity shall provide the notification required by paragraph (a) of this section without unreasonable delay and in no case later than 60 calendar days after discovery of a breach."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Implement automated timestamp tracking for breach discovery dates and notification dates
- Monitor the elapsed time between breach discovery and notification delivery
- Set up alerts for approaching 60-day deadlines to prevent late notifications
- Review historical breach incidents to identify patterns of delayed notifications
- Verify that "discovery" date is properly defined and consistently applied across incidents
- Check for documentation explaining any delays and whether they constitute "unreasonable delay"
- Audit notification workflows to identify bottlenecks that could cause timing violations
