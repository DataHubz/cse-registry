# CSE-FEDRAMP-PL-NO-BEHAVIOR-RULES-003

**No Rules of Behavior**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-FEDRAMP-PL-NO-BEHAVIOR-RULES-003`    |
| Domain          | FEDRAMP                                   |
| Category        | PL                                        |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

The organization does not establish and maintain rules of behavior that describe responsibilities and expected behavior for individuals accessing the information system.

This signal indicates that users may not have clear guidance on acceptable use, security responsibilities, and consequences of noncompliance when accessing federal information systems.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) pursuing FedRAMP authorization
- Federal agencies managing information systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing, storing, or transmitting federal data
- Organizations supporting federal cloud services

## FedRAMP Context (Informative)

### Control Family
Planning (PL)

### Control
PL-4: Rules of Behavior

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Establishes and makes readily available to individuals requiring access to the system, the rules that describe their responsibilities and expected behavior for information and system usage, security, and privacy
- Receives a documented acknowledgment from such individuals, indicating that they have read, understand, and agree to abide by the rules of behavior, before authorizing access to information and the system
- Reviews and updates the rules of behavior [FedRAMP Assignment: at least every 3 years]
- Requires individuals who have acknowledged a previous version of the rules of behavior to read and re-acknowledge [Selection (one or more): [FedRAMP Assignment: at least every 3 years]; when the rules are revised or updated]

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-PL-NO-PLANNING-POLICY-001` — No Planning Policy
- `CSE-FEDRAMP-AT-NO-AWARENESS-TRAINING-002` — No Security Awareness Training
- `CSE-FEDRAMP-AC-NO-ACCESS-POLICY-001` — No Access Control Policy

## Notes

Detection of this signal typically involves:

- Review of rules of behavior documentation
- Analysis of responsibilities and acceptable use provisions
- Verification of security and privacy behavior requirements
- Assessment of consequences for noncompliance
- Examination of user acknowledgment records
- Inspection of rules availability and accessibility to users
- Review of rules update schedules and version control
- Verification of re-acknowledgment processes after updates

The presence of this signal indicates a condition that warrants review in the context of FedRAMP planning requirements. Rules of behavior should be specific to the system and clearly communicate user responsibilities.
