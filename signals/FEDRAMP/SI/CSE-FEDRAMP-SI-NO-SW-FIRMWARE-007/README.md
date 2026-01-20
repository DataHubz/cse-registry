# CSE-FEDRAMP-SI-NO-SW-FIRMWARE-007

**No Software, Firmware, and Information Integrity**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SI-NO-SW-FIRMWARE-007`     |
| Domain          | FEDRAMP                                  |
| Category        | SI                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Software, firmware, and information integrity verification tools are not employed to detect unauthorized changes.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Information Integrity (SI)
**Control:** SI-7
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Employ integrity verification tools to detect unauthorized changes to software, firmware, and information."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing file integrity monitoring (FIM) tools, absence of cryptographic hash verification, lack of digital signature validation, and no integrity checking mechanisms for critical system files.
