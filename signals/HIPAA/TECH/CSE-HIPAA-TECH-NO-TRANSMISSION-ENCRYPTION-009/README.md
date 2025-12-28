# CSE-HIPAA-TECH-NO-TRANSMISSION-ENCRYPTION-009

**No Transmission Encryption**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HIPAA-TECH-NO-TRANSMISSION-ENCRYPTION-009` |
| Domain          | HIPAA                                    |
| Category        | TECH                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No mechanism to encrypt ePHI whenever deemed appropriate during transmission.

## Applicability

This signal applies to:

- Electronic health record (EHR) systems
- Health information exchanges (HIEs)
- Patient portals and healthcare applications
- Database systems containing ePHI
- Network infrastructure transmitting ePHI
- Cloud services hosting healthcare data

## HIPAA Context (Informative)

**CFR Reference:** 45 CFR 164.312(e)(2)(ii)
**Requirement Type:** Addressable

**Regulatory Text:** "Encryption (Addressable). Implement a mechanism to encrypt electronic protected health information whenever deemed appropriate."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Analyze network traffic and communication channels for unencrypted ePHI transmission. Check for proper implementation of TLS/SSL for web applications, VPN usage for remote access, and encrypted protocols for file transfers (SFTP, FTPS). Verify that email containing ePHI uses encryption (S/MIME, PGP, or secure email gateways) and that API communications use HTTPS.
