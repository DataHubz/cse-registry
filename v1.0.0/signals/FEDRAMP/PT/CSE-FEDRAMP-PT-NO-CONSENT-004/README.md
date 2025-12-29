# CSE-FEDRAMP-PT-NO-CONSENT-004

**No Consent Mechanisms**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PT-NO-CONSENT-004`         |
| Domain          | FEDRAMP                                  |
| Category        | PT                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization does not implement mechanisms to obtain consent from individuals for the collection, use, or disclosure of PII when required by applicable laws, regulations, or policies.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information containing PII

## FedRAMP Context (Informative)

**Control Family:** PII Processing and Transparency (PT)
**Control:** PT-4
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Implement [Assignment: organization-defined tools or mechanisms] for individuals to consent to the [Assignment: organization-defined processing] of their personally identifiable information prior to its collection that facilitate individuals' informed decision-making."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing consent mechanisms in user interfaces and workflows, lack of documented consent tools or processes, absence of consent records, no mechanisms for individuals to make informed choices about PII processing, missing consent withdrawal capabilities, and processing of PII without required consent.
