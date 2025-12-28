# CSE-HIPAA-BREACH-NO-LOG-MAINTENANCE-007

**No Breach Log for Small Breaches**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-BREACH-NO-LOG-MAINTENANCE-007` |
| Domain          | HIPAA                                    |
| Category        | BREACH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No log or documentation maintained for breaches affecting fewer than 500 individuals.

## Applicability

This signal applies to:

- Covered entities experiencing data breaches
- Business associates handling ePHI
- Incident response and security teams
- Legal and compliance departments
- Public relations and communications functions
- Healthcare organizations with breach notification obligations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.408(c)

**Regulatory Text:** "For breaches of unsecured protected health information involving less than 500 individuals, a covered entity shall maintain a log or other documentation of such breaches and, not later than 60 days after the end of each calendar year, provide the notification required by paragraph (a) of this section for breaches discovered during the preceding calendar year, in the manner specified on the HHS Web site."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Verify that a breach log system exists for tracking breaches affecting fewer than 500 individuals
- Review the breach log to ensure all small breaches are documented with required details
- Check that the log includes discovery dates, number of individuals affected, and breach descriptions
- Ensure the log is maintained in a secure, accessible location with appropriate access controls
- Audit the log for completeness by cross-referencing with incident reports and security event logs
- Verify that annual HHS submissions include all breaches from the log for the preceding year
- Monitor that logs are retained for the required period and are available for regulatory review
