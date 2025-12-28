# CSE-HIPAA-TECH-NO-AUTHENTICATION-007

**No Person or Entity Authentication**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-TECH-NO-AUTHENTICATION-007` |
| Domain          | HIPAA                                    |
| Category        | TECH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No procedures to verify that a person or entity seeking access to ePHI is the one claimed.

## Applicability

This signal applies to:

- Electronic health record (EHR) systems
- Health information exchanges (HIEs)
- Patient portals and healthcare applications
- Database systems containing ePHI
- Network infrastructure transmitting ePHI
- Cloud services hosting healthcare data

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.312(d)
**Requirement Type:** Required

**Regulatory Text:** "Person or entity authentication (Required). Implement procedures to verify that a person or entity seeking access to electronic protected health information is the one claimed."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Evaluate authentication mechanisms including password policies, multi-factor authentication, biometric systems, and certificate-based authentication. Check for weak authentication methods such as simple passwords without complexity requirements, absence of account lockout policies, or systems that do not properly verify user credentials before granting access to ePHI.
