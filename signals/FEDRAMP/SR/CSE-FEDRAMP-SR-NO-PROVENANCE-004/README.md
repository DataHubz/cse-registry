# CSE-FEDRAMP-SR-NO-PROVENANCE-004

**No Provenance**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SR-NO-PROVENANCE-004`      |
| Domain          | FEDRAMP                                  |
| Category        | SR                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization does not document, monitor, and maintain valid provenance of systems, system components, and associated data to establish confidence that the supply chain is legitimate and free from tampering or unauthorized modifications.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Federal information systems processing sensitive data

## FedRAMP Context (Informative)

**Control Family:** Supply Chain Risk Management (SR)
**Control:** SR-4
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Document, monitor, and maintain valid provenance of the following systems, system components, and associated data: [Assignment: organization-defined systems, system components, and associated data]; and b. Document the pedigree of the following systems, system components, and associated data: [Assignment: organization-defined systems, system components, and associated data]."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing chain of custody documentation for hardware and software components, absence of supplier authenticity verification, lack of tracking mechanisms for component origins, missing validation of software provenance (e.g., cryptographic signatures, SBOM validation), and absence of processes to verify legitimate supply chain custody throughout acquisition and integration. Check for missing evidence of hardware/software authenticity, lack of tracking for component modifications, and inadequate documentation of the complete supply chain pedigree from manufacturer to deployment.
