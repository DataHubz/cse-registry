# CSE-HIPAA-BREACH-NO-BA-NOTIFY-006

**No Business Associate Notification**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-BREACH-NO-BA-NOTIFY-006` |
| Domain          | HIPAA                                    |
| Category        | BREACH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Business associate did not notify covered entity of breach within 60 days.

## Applicability

This signal applies to:

- Covered entities experiencing data breaches
- Business associates handling ePHI
- Incident response and security teams
- Legal and compliance departments
- Public relations and communications functions
- Healthcare organizations with breach notification obligations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.410

**Regulatory Text:** "A business associate shall, following the discovery of a breach of unsecured protected health information, notify the covered entity of such breach. (b) Implementation specifications: Timeliness of notification. A business associate shall provide the notification required by paragraph (a) of this section without unreasonable delay and in no case later than 60 calendar days after discovery of a breach."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Review business associate agreements to verify notification obligations are clearly specified
- Monitor business associate breach notifications for compliance with 60-day timeframe
- Track the discovery date reported by business associates versus the notification date received
- Implement automated alerting when business associate notifications are delayed
- Audit business associate incident response procedures to ensure they include covered entity notification
- Verify that business associates maintain documentation of their breach discovery and notification dates
- Check for evidence of notification channels and escalation procedures between business associates and covered entities
