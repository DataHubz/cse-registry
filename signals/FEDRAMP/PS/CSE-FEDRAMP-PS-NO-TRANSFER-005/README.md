# CSE-FEDRAMP-PS-NO-TRANSFER-005

**No Personnel Transfer**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PS-NO-TRANSFER-005`          |
| Domain          | FEDRAMP                                   |
| Category        | PS                                        |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

The organization does not review and confirm ongoing operational need for current logical and physical access authorizations to information systems and facilities when individuals are reassigned or transferred to other positions within the organization.

This signal indicates that personnel transfers may result in inappropriate access retention, where individuals accumulate excessive privileges as they move between positions or departments.

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
PS-5: Personnel Transfer

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Reviews and confirms ongoing operational need for current logical and physical access authorizations to systems and facilities when individuals are reassigned or transferred to other positions within the organization;
- Initiates [Assignment: organization-defined transfer or reassignment actions] within [FedRAMP Assignment: 5 days for transfers, 5 days for reassignments];
- Modifies access authorization as needed to correspond with any changes in operational need due to reassignment or transfer; and
- Notifies [Assignment: organization-defined personnel or roles] within [FedRAMP Assignment: 5 days for transfers, 5 days for reassignments].

Personnel transfer actions include termination of unnecessary access authorizations, return of organizational property, briefings on new responsibilities, and ensuring that individuals possess appropriate clearances and access authorizations. This control ensures that access privileges are updated to reflect the individual's new role and responsibilities.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-PS-NO-PERSONNEL-POLICY-001` — No Personnel Security Policy
- `CSE-FEDRAMP-PS-NO-TERMINATION-004` — No Personnel Termination
- `CSE-FEDRAMP-AC-NO-ACCOUNT-MANAGEMENT-002` — No Account Management
- `CSE-FEDRAMP-AC-NO-LEAST-PRIVILEGE-006` — No Least Privilege

## Notes

Detection of this signal typically involves:

- Review of personnel transfer procedures and documentation
- Analysis of access review processes during transfers
- Verification of 5-day timeline compliance for transfer actions
- Assessment of access modification workflows
- Examination of operational need confirmation records
- Inspection of notification processes to relevant personnel
- Review of logical and physical access adjustments
- Verification of unnecessary access termination
- Analysis of property return procedures during transfers
- Examination of role-based access updates

The presence of this signal indicates a condition that warrants review in the context of FedRAMP personnel security requirements. Personnel transfer procedures should ensure timely access reviews and modifications to prevent privilege accumulation and maintain least privilege.
