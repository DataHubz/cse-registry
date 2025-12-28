# CSE-FEDRAMP-SA-NO-LIFECYCLE-003

**No System Development Life Cycle**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-SA-NO-LIFECYCLE-003` |
| Domain          | FEDRAMP                                  |
| Category        | SA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

A system development life cycle (SDLC) that integrates information security and privacy considerations is not managed.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** System and Services Acquisition (SA)
**Control:** SA-3
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Acquire, develop, and manage the system using [Assignment: organization-defined system development life cycle] that incorporates information security and privacy considerations; define and document information security and privacy roles and responsibilities throughout the system development life cycle; identify individuals having information security and privacy roles and responsibilities; and integrate the organizational information security and privacy risk management process into system development life cycle activities."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing SDLC documentation, absence of security and privacy integration in development phases, lack of defined security roles in the SDLC, missing risk management integration, inadequate security requirements in design and development, and absence of security testing in the development lifecycle.
