# CSE-FEDRAMP-IA-NO-AUTH-MGMT-005

**No Authenticator Management**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-IA-NO-AUTH-MGMT-005` |
| Domain          | FEDRAMP                                  |
| Category        | IA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Authenticators (passwords, tokens, PKI certificates) are not properly managed through their lifecycle, including initial distribution, handling lost/compromised authenticators, and enforcing content requirements.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Identification and Authentication (IA)
**Control:** IA-5
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Manage information system authenticators by: a. Verifying, as part of the initial authenticator distribution, the identity of the individual, group, role, or device receiving the authenticator; b. Establishing initial authenticator content for authenticators defined by the organization; c. Ensuring that authenticators have sufficient strength of mechanism for their intended use; d. Establishing and implementing administrative procedures for initial authenticator distribution, for lost/compromised or damaged authenticators, and for revoking authenticators; e. Changing default content of authenticators prior to information system installation; f. Establishing minimum and maximum lifetime restrictions and reuse conditions for authenticators; g. Changing/refreshing authenticators [Assignment: organization-defined time period by authenticator type]; h. Protecting authenticator content from unauthorized disclosure and modification; and i. Requiring individuals to take, and having devices implement, specific security safeguards to protect authenticators."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for weak password policies (length, complexity, history), default authenticators still in use, missing authenticator change procedures, authenticators stored in plain text or weakly encrypted, no procedures for lost/compromised authenticators, authenticators without lifecycle management, missing multi-factor authentication for privileged access, and authenticators that don't meet FedRAMP password requirements (minimum 12 characters for Moderate/High baselines).
