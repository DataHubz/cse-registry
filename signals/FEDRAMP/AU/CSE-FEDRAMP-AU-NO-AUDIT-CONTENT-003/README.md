# CSE-FEDRAMP-AU-NO-AUDIT-CONTENT-003

**No Audit Content Requirements**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-AU-NO-AUDIT-CONTENT-003` |
| Domain          | FEDRAMP                                  |
| Category        | AU                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Audit records do not contain required content to support incident investigations.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Audit and Accountability (AU)
**Control:** AU-3
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Ensure that audit records contain information that establishes what type of event occurred, when the event occurred, where the event occurred, the source of the event, the outcome of the event, and the identity of any individuals or subjects associated with the event."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for audit records missing event type, timestamp, source, outcome, or identity information required for forensic analysis.
