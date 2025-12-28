# CSE-HIPAA-ADMIN-NO-ACCESS-AUTH-009

**No Access Authorization**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-ADMIN-NO-ACCESS-AUTH-009` |
| Domain          | HIPAA                                    |
| Category        | ADMIN                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No policies and procedures exist for granting access to electronic protected health information (ePHI), including workstations, transactions, programs, and processes.

This signal indicates the absence of documented processes that govern how access to ePHI is requested, approved, and provisioned.

## Applicability

This signal applies to:

- Covered entities (healthcare providers, health plans, healthcare clearinghouses)
- Business associates handling ePHI
- Health information systems and EHR platforms
- Cloud service providers hosting ePHI
- IT infrastructure supporting healthcare operations

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.308(a)(4)(ii)(B)
**Requirement Type:** Addressable

**Regulatory Text:** "Implement policies and procedures for granting access to electronic protected health information, for example, through access to a workstation, transaction, program, process, or other mechanism."

These references are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of access authorization policies and procedures
- Examination of access request and approval workflows
- Analysis of access provisioning documentation
- Verification of authorization criteria and approval authorities
- Assessment of access granting consistency and controls

The presence of this signal indicates that access to ePHI may be granted without proper authorization or oversight.
