# CSE-FEDRAMP-MP-NO-MEDIA-MARKING-003

**No Media Marking**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-MP-NO-MEDIA-MARKING-003` |
| Domain          | FEDRAMP                                  |
| Category        | MP                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Media marking procedures are not implemented to identify information system media indicating distribution limitations and handling caveats.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Media Protection (MP)
**Control:** MP-3
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Mark information system media indicating the distribution limitations, handling caveats, and applicable security markings (if any) of the information."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing media labeling requirements, absence of security classification markings on media, lack of procedures for marking removable media, no guidelines for marking backup tapes or external storage, and missing documentation on handling caveat requirements for different information classifications.
