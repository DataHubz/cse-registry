# CSE-FEDRAMP-MP-NO-MEDIA-SANITIZATION-005

**No Media Sanitization**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-MP-NO-MEDIA-SANITIZATION-005` |
| Domain          | FEDRAMP                                  |
| Category        | MP                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Media sanitization procedures are not implemented to sanitize information system media prior to disposal, release out of organizational control, or reuse.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Media Protection (MP)
**Control:** MP-6
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Sanitize information system media... prior to disposal, release out of organizational control, or release for reuse... and employ sanitization mechanisms with the strength and integrity commensurate with the security category or classification of the information."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing media sanitization procedures, lack of approved sanitization methods and tools, absence of sanitization verification processes, no documentation of sanitization activities, missing procedures for different media types (hard drives, SSDs, removable media, mobile devices), and inadequate tracking of media through the sanitization lifecycle.
