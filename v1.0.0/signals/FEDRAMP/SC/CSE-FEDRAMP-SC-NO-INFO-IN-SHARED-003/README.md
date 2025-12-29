# CSE-FEDRAMP-SC-NO-INFO-IN-SHARED-003

**No Information in Shared System Resources**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SC-NO-INFO-IN-SHARED-003`   |
| Domain          | FEDRAMP                                  |
| Category        | SC                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information system does not prevent unauthorized and unintended information transfer via shared system resources.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Communications Protection (SC)
**Control:** SC-4
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Prevent unauthorized and unintended information transfer via shared system resources."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for inadequate memory isolation between processes, lack of secure resource deallocation procedures, residual data in shared resources (memory, storage, cache), no sanitization of shared resources before reallocation, and potential for information leakage through covert channels in multi-tenant environments.
