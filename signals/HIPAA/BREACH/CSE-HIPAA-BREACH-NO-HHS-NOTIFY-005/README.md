# CSE-HIPAA-BREACH-NO-HHS-NOTIFY-005

**No HHS Secretary Notification**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-BREACH-NO-HHS-NOTIFY-005` |
| Domain          | HIPAA                                    |
| Category        | BREACH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

HHS Secretary not notified of breach as required.

## Applicability

This signal applies to:

- Covered entities experiencing data breaches
- Business associates handling ePHI
- Incident response and security teams
- Legal and compliance departments
- Public relations and communications functions
- Healthcare organizations with breach notification obligations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.408

**Regulatory Text:** "(a) Standard: Notice to the Secretary. A covered entity shall, following the discovery of a breach of unsecured protected health information as provided in § 164.404(a)(2), notify the Secretary. (b) Implementation specifications: Breaches involving 500 or more individuals. For breaches of unsecured protected health information involving 500 or more individuals, a covered entity shall, except as provided in § 164.412, provide the notification required by paragraph (a) of this section contemporaneously with the notice required by § 164.404(a) and in the manner specified on the HHS Web site. (c) Implementation specifications: Breaches involving less than 500 individuals. For breaches of unsecured protected health information involving less than 500 individuals, a covered entity shall maintain a log or other documentation of such breaches and, not later than 60 days after the end of each calendar year, provide the notification required by paragraph (a) of this section for breaches discovered during the preceding calendar year, in the manner specified on the HHS Web site."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Verify that HHS notification procedures are documented in incident response plans
- Check for records of HHS breach portal submissions for breaches affecting 500+ individuals
- Ensure contemporaneous notification to HHS when individual notifications are sent for large breaches
- Review annual breach log submissions to HHS for breaches affecting fewer than 500 individuals
- Monitor that annual HHS notifications occur within 60 days after calendar year end
- Audit the use of HHS-specified notification methods and portal access
- Validate that both large (immediate) and small (annual) breach notifications are properly tracked
