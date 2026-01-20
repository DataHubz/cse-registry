# CSE-FEDRAMP-CP-NO-BACKUP-007

**No System Backup**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-FEDRAMP-CP-NO-BACKUP-007`      |
| Domain          | FEDRAMP                             |
| Category        | CP                                  |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

The organization does not conduct backups of user-level information, system-level information, and information system documentation at required frequencies, or does not protect backup information.

This signal indicates that the organization may not be able to restore information in the event of data loss, corruption, or system failures.

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
CP-9: Information System Backup

### Baseline
Low, Moderate, High

### NIST SP 800-53 Rev. 5
The organization:
- Conducts backups of user-level information contained in the information system [FedRAMP Assignment: daily incremental; weekly full]
- Conducts backups of system-level information contained in the information system [FedRAMP Assignment: daily incremental; weekly full]
- Conducts backups of information system documentation including security-related documentation [FedRAMP Assignment: daily incremental; weekly full]
- Protects the confidentiality, integrity, and availability of backup information at storage locations

Enhancement (CP-9(1) - Moderate, High): The organization tests backup information [FedRAMP Assignment: at least annually] to verify media reliability and information integrity.

Enhancement (CP-9(3) - High): The organization stores backup copies of the operating system and other critical information system software, as well as copies of the information system inventory in a separate facility or in a fire-rated container that is not collocated with the operational system.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-FEDRAMP-CP-NO-ALTERNATE-STORAGE-005` — No Alternate Storage Site
- `CSE-FEDRAMP-CP-NO-RECOVERY-008` — No System Recovery and Reconstitution

## Notes

Detection of this signal typically involves:

- Review of backup schedules and configurations
- Analysis of backup frequency and scope
- Verification of user-level, system-level, and documentation backups
- Assessment of backup integrity and reliability testing
- Examination of backup protection mechanisms
- Inspection of backup storage locations and security
- Review of backup retention policies
- Analysis of backup restoration procedures and testing
- Verification of geographic separation for critical backups

The presence of this signal indicates a condition that warrants review in the context of FedRAMP contingency planning requirements.
