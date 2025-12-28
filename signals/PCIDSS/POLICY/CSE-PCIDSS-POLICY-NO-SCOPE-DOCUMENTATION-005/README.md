# CSE-PCIDSS-POLICY-NO-SCOPE-DOCUMENTATION-005

**No PCI DSS Scope Documentation**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-POLICY-NO-SCOPE-DOCUMENTATION-005` |
| Domain          | PCIDSS                                   |
| Category        | POLICY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

PCI DSS scope is not documented and validated.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Security and compliance teams
- Human resources and training departments
- Third-party service providers (TPSPs)
- Incident response teams

## PCI DSS Context (Informative)

**Requirement:** 12.5 - PCI DSS scope is documented and validated

**Sub-Requirement:** 12.5.1, 12.5.2

**Regulatory Text:** "An inventory of system components that are in scope for PCI DSS is maintained and kept current, including a description of function/use for each component, and documented confirmation that PCI DSS scope is accurate and up to date at least once every 12 months."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Verify existence of current system inventory documenting all in-scope components, network diagrams showing CDE boundaries, data flow diagrams, and annual scope validation documentation. Monitor for scope changes and corresponding documentation updates.
