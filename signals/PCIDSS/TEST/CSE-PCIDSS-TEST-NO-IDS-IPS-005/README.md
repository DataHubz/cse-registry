# CSE-PCIDSS-TEST-NO-IDS-IPS-005

**No Intrusion Detection/Prevention**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-TEST-NO-IDS-IPS-005` |
| Domain          | PCIDSS                                   |
| Category        | TEST                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No intrusion detection/prevention systems to detect unauthorized network activity.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Security and compliance teams
- Human resources and training departments
- Third-party service providers (TPSPs)
- Incident response teams

## PCI DSS Context (Informative)

**Requirement:** 11.5 - Network intrusions and unexpected file changes are detected and responded to

**Sub-Requirement:** 11.5.1

**Regulatory Text:** "Intrusion-detection and/or intrusion-prevention techniques are used to detect and/or prevent intrusions into the network as follows: All traffic is monitored at the perimeter of the CDE, at critical points in the CDE, and traffic is analyzed to identify suspicious or anomalous activity."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Verify deployment of IDS/IPS solutions at the CDE perimeter and critical internal points. Monitor for active alerting mechanisms, signature updates, and response procedures. Check for continuous monitoring coverage and alert review processes.
