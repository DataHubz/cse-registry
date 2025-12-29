# CSE-PCIDSS-POLICY-NO-TPSP-MGMT-008

**No Third-Party Service Provider Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-POLICY-NO-TPSP-MGMT-008` |
| Domain          | PCIDSS                                   |
| Category        | POLICY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Third-party service provider risks are not managed.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Security and compliance teams
- Human resources and training departments
- Third-party service providers (TPSPs)
- Incident response teams

## PCI DSS Context (Informative)

**Requirement:** 12.8 - Risk to information assets associated with third-party service provider (TPSP) relationships is managed

**Sub-Requirement:** 12.8.1, 12.8.2

**Regulatory Text:** "A list of all third-party service providers (TPSPs) with which account data is shared or that could affect the security of account data is maintained, including a description of the services provided. Written agreements with TPSPs are maintained that include acknowledgment that the TPSPs are responsible for the security of account data."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Verify existence of TPSP inventory, due diligence procedures, written agreements addressing data security responsibilities, and ongoing monitoring processes. Monitor for PCI DSS compliance status tracking of TPSPs and evidence of annual reviews.
