# CSE-FEDRAMP-RA-NO-CATEGORIZATION-002

**No Security Categorization**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-RA-NO-CATEGORIZATION-002`  |
| Domain          | FEDRAMP                                  |
| Category        | RA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Security categorization of the system and information it processes, stores, or transmits has not been performed or documented according to FIPS 199.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Risk Assessment (RA)
**Control:** RA-2
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "a. Categorize the system and information it processes, stores, and transmits; b. Document the security categorization results, including supporting rationale, in the security plan for the system; and c. Verify that the authorizing official or authorizing official designated representative reviews and approves the security categorization decision."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing FIPS 199 security categorization documentation, absence of impact analysis for confidentiality, integrity, and availability, no documented rationale for security categorization decisions, and lack of authorizing official review and approval of the categorization.
