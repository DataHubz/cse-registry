# CSE-FEDRAMP-AC-NO-REMOTE-ACCESS-010

**No Remote Access Controls**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AC-NO-REMOTE-ACCESS-010` |
| Domain          | FEDRAMP                                  |
| Category        | AC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Remote access controls are not established and enforced, including authorization, monitoring, and encryption requirements for remote connections.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Access Control (AC)
**Control:** AC-17
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Establish and document usage restrictions, configuration requirements, connection requirements, and implementation guidance for each type of remote access allowed; authorize each type of remote access to the system prior to allowing such connections."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing remote access policies, lack of remote access authorization procedures, no encryption for remote sessions, absence of remote access monitoring, uncontrolled remote access methods, and missing multi-factor authentication for remote access.
