# CSE-HIPAA-BREACH-NO-INDIVIDUAL-NOTIFY-001

**No Individual Notification**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-BREACH-NO-INDIVIDUAL-NOTIFY-001` |
| Domain          | HIPAA                                    |
| Category        | BREACH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Individuals whose unsecured PHI was breached not notified of the breach.

## Applicability

This signal applies to:

- Covered entities experiencing data breaches
- Business associates handling ePHI
- Incident response and security teams
- Legal and compliance departments
- Public relations and communications functions
- Healthcare organizations with breach notification obligations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.404(a)

**Regulatory Text:** "A covered entity shall, following the discovery of a breach of unsecured protected health information, notify each individual whose unsecured protected health information has been, or is reasonably believed by the covered entity to have been, accessed, acquired, used, or disclosed as a result of such breach."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Review incident response procedures to verify individual notification processes are defined and documented
- Examine breach incident logs and cross-reference with notification records to ensure all affected individuals were notified
- Verify that notification tracking systems capture all individuals whose PHI was compromised
- Check for automated notification workflows that trigger when breach thresholds are met
- Audit communication logs to confirm notification delivery to all affected parties
- Review business associate agreements to ensure notification responsibilities are clearly defined
