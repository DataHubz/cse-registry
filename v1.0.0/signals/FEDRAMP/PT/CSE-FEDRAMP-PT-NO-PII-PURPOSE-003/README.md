# CSE-FEDRAMP-PT-NO-PII-PURPOSE-003

**No PII Processing Purposes**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PT-NO-PII-PURPOSE-003`     |
| Domain          | FEDRAMP                                  |
| Category        | PT                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The organization does not identify and document the purpose(s) for which PII is collected, used, maintained, and shared, or processes PII outside of documented purposes.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information containing PII

## FedRAMP Context (Informative)

**Control Family:** PII Processing and Transparency (PT)
**Control:** PT-3
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "a. Identify and document the purpose(s) for which personally identifiable information (PII) is collected, used, maintained, and shared in its privacy notices; b. Describe the purpose(s) in sufficient detail to allow assessment of compliance with applicable privacy protection requirements; and c. Restrict the [Assignment: organization-defined processing] of PII to only that which is compatible with the identified purpose(s)."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing purpose documentation in privacy notices and system documentation, vague or overly broad purpose statements, lack of processing restrictions aligned with stated purposes, absence of purpose specification reviews, and evidence of PII processing that is incompatible with documented purposes.
