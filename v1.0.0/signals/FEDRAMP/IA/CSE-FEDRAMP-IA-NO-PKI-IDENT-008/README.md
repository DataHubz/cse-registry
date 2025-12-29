# CSE-FEDRAMP-IA-NO-PKI-IDENT-008

**No Non-Organizational User Identification**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-IA-NO-PKI-IDENT-008` |
| Domain          | FEDRAMP                                  |
| Category        | IA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information systems do not uniquely identify and authenticate non-organizational users (or processes acting on behalf of non-organizational users).

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Identification and Authentication (IA)
**Control:** IA-8
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Uniquely identify and authenticate non-organizational users (or processes acting on behalf of non-organizational users)."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for systems accepting external users without unique identification, missing authentication mechanisms for non-organizational users (contractors, partners, public users), shared credentials for external users, absence of federated identity management for external access, systems not using PIV credentials or approved alternatives for non-organizational users when required, and missing integration with external identity providers. Review access for contractors, third-party vendors, and public-facing services.
