# CSE-FEDRAMP-SC-NO-SESSION-AUTH-011

**No Session Authenticity**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-SESSION-AUTH-011`     |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not protect the authenticity of communications sessions.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-23
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Protect the authenticity of communications sessions."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of session tokens or identifiers, lack of cryptographic mechanisms to protect session authenticity, missing anti-replay protections, no session binding to authenticated identity, vulnerable to session hijacking attacks, inadequate session validation mechanisms, and absence of secure session establishment protocols.
