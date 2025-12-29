# CSE-FEDRAMP-SI-NO-SPAM-008

**No Spam Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SI-NO-SPAM-008`            |
| Domain          | FEDRAMP                                  |
| Category        | SI                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Spam protection mechanisms are not employed at system entry and exit points.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Information Integrity (SI)
**Control:** SI-8
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Employ spam protection mechanisms at system entry and exit points to detect and act on unsolicited messages."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing email filtering mechanisms, absence of spam detection at mail gateways, lack of anti-spam software or services, and no spam quarantine or blocking capabilities.
