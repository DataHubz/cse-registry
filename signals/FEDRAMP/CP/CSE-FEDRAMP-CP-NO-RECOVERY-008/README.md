# CSE-FEDRAMP-CP-NO-RECOVERY-008

**No System Recovery and Reconstitution**

## Signal Overview

| Field           | Value                                |
|-----------------|--------------------------------------|
| Identifier      | `CSE-FEDRAMP-CP-NO-RECOVERY-008`     |
| Domain          | FEDRAMP                              |
| Category        | CP                                   |
| Status          | Active                               |
| Introduced In   | 1.0.0                                |

## Description

The organization does not provide for the recovery and reconstitution of the information system to a known state after a disruption, compromise, or failure.

This signal indicates that the organization may lack documented procedures and capabilities to restore systems to operational status with security protections intact.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) pursuing FedRAMP authorization
- Federal agencies managing information systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing, storing, or transmitting federal data
- Organizations supporting federal cloud services

## FedRAMP Context (Informative)

### Control Family
Contingency Planning (CP)

### Control
CP-10: Information System Recovery and Reconstitution

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization provides for the recovery and reconstitution of the information system to a known state after a disruption, compromise, or failure.

Enhancement (CP-10(2) - Moderate, High): The information system implements transaction recovery for systems that are transaction-based.

Enhancement (CP-10(4) - High): The organization provides the capability to restore information system components within organization-defined restoration time periods from configuration-controlled and integrity-protected information representing a known, operational state for the components.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-CP-NO-CONTINGENCY-PLAN-002` — No Contingency Plan
- `CSE-FEDRAMP-CP-NO-BACKUP-007` — No System Backup
- `CSE-FEDRAMP-CP-NO-CONTINGENCY-TESTING-004` — No Contingency Plan Testing

## Notes

Detection of this signal typically involves:

- Review of recovery and reconstitution procedures
- Analysis of known-state definitions and baselines
- Verification of restoration time objectives
- Assessment of transaction recovery mechanisms
- Examination of configuration management integration
- Inspection of integrity protection measures
- Review of component restoration capabilities
- Analysis of recovery testing and validation
- Verification of documented recovery procedures
- Assessment of operational state verification methods

The presence of this signal indicates a condition that warrants review in the context of FedRAMP contingency planning requirements.
