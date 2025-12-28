# CSE-NISTCSF-MI-NO-CONTAINMENT-001

**Incidents Not Contained**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-NISTCSF-MI-NO-CONTAINMENT-001` |
| Domain          | NISTCSF                                  |
| Category        | RS.MI                                    |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Incidents are not contained.

## Applicability

This signal applies to:

- All organizations with incident response capabilities
- Security operations and incident response teams
- Forensics and investigation functions
- Organizations with breach notification requirements

## NIST CSF 2.0 Context (Informative)

**Function:** RESPOND (RS)
**Category:** RS.MI - Incident Mitigation
**Subcategory:** RS.MI-01

**Framework Text:** "Incidents are contained"

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Identify incidents where lateral movement continues after detection, malware spreading beyond initially identified systems, ongoing data exfiltration, or active attacker presence without network segmentation or isolation measures. Monitor for missing containment actions such as system quarantine, network disconnection, account disablement, or firewall rule implementation to limit incident scope.
