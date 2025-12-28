# CSE-FEDRAMP-SC-NO-DOS-PROTECTION-004

**No Denial-of-Service Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-DOS-PROTECTION-004`   |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not protect against or limit the effects of denial-of-service attacks.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-5
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Protect against or limit the effects of denial-of-service attacks by employing security safeguards."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for lack of rate limiting mechanisms, absence of DDoS mitigation capabilities, no resource allocation controls, missing traffic filtering and inspection, inadequate capacity planning for attack scenarios, and no monitoring for DoS attack patterns or anomalous traffic volumes.
