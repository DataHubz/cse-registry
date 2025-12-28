# CSE-PCIDSS-LOG-NO-FAILURE-DETECTION-007

**No Security Failure Detection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-LOG-NO-FAILURE-DETECTION-007` |
| Domain          | PCIDSS                                   |
| Category        | LOG                                      |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Failures of security systems are not detected, reported, or responded to.

## Applicability

This signal applies to:

- Data centers and server rooms housing CDE
- Point-of-sale (POS) environments
- Payment terminal locations
- SIEM and log management systems
- All systems within CDE scope

## PCI DSS Context (Informative)

**Requirement:** 10.7 Failures of critical security control systems are detected, reported, and responded to promptly

**Sub-Requirement:** 10.7.1

**Regulatory Text:** "Additional requirement for service providers only: Failures of critical security control systems are detected, alerted, and addressed promptly."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of security system health monitoring, lack of alerting for security control failures (firewall, IDS/IPS, logging system failures), missing incident response procedures for security system outages, or evidence of undetected/unreported failures in critical security controls.
