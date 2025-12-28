# CSE-NISTCSF-MI-NO-ERADICATION-002

**Incidents Not Eradicated**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-MI-NO-ERADICATION-002` |
| Domain          | NISTCSF                                  |
| Category        | RS.MI                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Incidents are not eradicated.

## Applicability

This signal applies to:

- All organizations with incident response capabilities
- Security operations and incident response teams
- Forensics and investigation functions
- Organizations with breach notification requirements

## NIST CSF 2.0 Context (Informative)

**Function:** RESPOND (RS)
**Category:** RS.MI - Incident Mitigation
**Subcategory:** RS.MI-02

**Framework Text:** "Incidents are eradicated"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for recurring incidents from the same root cause, persistence mechanisms not removed (backdoors, scheduled tasks, registry modifications), malware remnants or infected files not deleted, compromised credentials still active, or vulnerabilities exploited in the incident remaining unpatched. Monitor for incidents marked resolved without evidence of complete threat removal or system restoration to known-good state.
