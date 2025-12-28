# CSE-PCIDSS-POLICY-NO-TPSP-COMPLIANCE-009

**No TPSP Compliance Support**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-POLICY-NO-TPSP-COMPLIANCE-009` |
| Domain          | PCIDSS                                   |
| Category        | POLICY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Third-party service providers do not support customers' PCI compliance.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Security and compliance teams
- Human resources and training departments
- Third-party service providers (TPSPs)
- Incident response teams

## PCI DSS Context (Informative)

**Requirement:** 12.9 - Third-party service providers (TPSPs) support their customers' PCI DSS compliance

**Sub-Requirement:** 12.9.1, 12.9.2

**Regulatory Text:** "Additional requirement for service providers only: TPSPs acknowledge in writing to customers that they are responsible for the security of account data the TPSP possesses or otherwise stores, processes, or transmits on behalf of the customer, or to the extent that they could impact the security of the customer's cardholder data environment."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: For service providers, verify written acknowledgments to customers regarding data security responsibilities, documentation of services provided, and evidence of PCI DSS compliance status communication. Monitor for customer-facing compliance documentation and support processes.
