# CSE-FEDRAMP-MP-NO-MEDIA-ACCESS-002

**No Media Access Control**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-MP-NO-MEDIA-ACCESS-002` |
| Domain          | FEDRAMP                                  |
| Category        | MP                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Media access control procedures are not implemented to restrict access to digital and non-digital media.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Media Protection (MP)
**Control:** MP-2
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Restrict access to information system media to authorized individuals... and sanitize or destroy information system media before disposal or release for reuse."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing media access authorization procedures, lack of media inventory tracking, absence of access controls for media libraries, no audit trail for media access, and missing restrictions on who can access, distribute, or transport media containing sensitive information.
