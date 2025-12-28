# CSE-FEDRAMP-SC-NO-NET-DISCONNECT-007

**No Network Disconnect**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-NET-DISCONNECT-007`   |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not terminate network connections at the end of sessions or after a defined period of inactivity.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-10
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Terminate the network connection associated with a communications session at the end of the session or after a defined period of inactivity."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing session timeout configurations, network connections that persist indefinitely, no automatic termination of idle sessions, lack of defined inactivity periods for different connection types, absence of connection cleanup mechanisms, and persistent connections without activity monitoring.
