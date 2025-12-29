# CSE-FEDRAMP-PS-NO-TERMINATION-004

**No Personnel Termination**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PS-NO-TERMINATION-004`       |
| Domain          | FEDRAMP                                   |
| Category        | PS                                        |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

The organization does not terminate information system access and retrieve all security-related organizational information system-related property upon termination of individual employment.

This signal indicates that departing personnel may retain access to federal information systems or organizational property after their employment ends, creating security risks from unauthorized access or data exposure.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) pursuing FedRAMP authorization
- Federal agencies managing information systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing, storing, or transmitting federal data
- Organizations supporting federal cloud services

## FedRAMP Context (Informative)

### Control Family
Personnel Security (PS)

### Control
PS-4: Personnel Termination

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization, upon termination of individual employment:
- Disables system access within [FedRAMP Assignment: same day];
- Terminates or revokes any authenticators and credentials associated with the individual;
- Conducts exit interviews that include a discussion of [Assignment: organization-defined information security topics];
- Retrieves all security-related organizational system-related property;
- Retains access to organizational information and systems formerly controlled by terminated individual; and
- Notifies [Assignment: organization-defined personnel or roles] within [FedRAMP Assignment: same day].

Information system-related property includes system administration technical manuals, keys, identification cards, and building passes. Exit interviews ensure that terminated individuals understand the security constraints and responsibilities imposed by being former employees and that proper accountability is achieved for system-related property.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-PS-NO-PERSONNEL-POLICY-001` — No Personnel Security Policy
- `CSE-FEDRAMP-PS-NO-TRANSFER-005` — No Personnel Transfer
- `CSE-FEDRAMP-AC-NO-ACCOUNT-MANAGEMENT-002` — No Account Management
- `CSE-FEDRAMP-IA-NO-AUTHENTICATOR-MANAGEMENT-004` — No Authenticator Management

## Notes

Detection of this signal typically involves:

- Review of termination procedures and documentation
- Analysis of access revocation timelines and compliance
- Verification of same-day access termination requirements
- Assessment of authenticator and credential revocation processes
- Examination of exit interview procedures and completion
- Inspection of property retrieval records and checklists
- Review of notification processes to relevant personnel
- Verification of access to former employee information retention
- Analysis of termination workflow automation
- Examination of contractor and third-party termination procedures

The presence of this signal indicates a condition that warrants review in the context of FedRAMP personnel security requirements. Personnel termination procedures should be prompt, comprehensive, and consistently executed to prevent unauthorized access.
