# CSE-FEDRAMP-CA-NO-INTERCONNECTIONS-003

**No System Interconnection Authorization**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CA-NO-INTERCONNECTIONS-003`     |
| Domain          | FEDRAMP                                      |
| Category        | CA                                           |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

System interconnections between the information system and other systems lack proper authorization, documentation, or security requirements.

This signal indicates that connections between systems are not formally authorized through Interconnection Security Agreements (ISAs) or Memoranda of Understanding/Agreement (MOU/MOA), which is required to ensure that security responsibilities are clearly defined and maintained across system boundaries.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies implementing cloud services
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems requiring authorization

## FedRAMP Context (Informative)

**Control Family:** Security Assessment and Authorization (CA)

**Control:** CA-3 - System Interconnections

**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "The organization: (a) Authorizes connections from the information system to other information systems through the use of Interconnection Security Agreements; (b) Documents, for each interconnection, the interface characteristics, security requirements, and the nature of the information communicated; and (c) Reviews and updates Interconnection Security Agreements [FedRAMP Assignment: at least annually and on input from FedRAMP]."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance:

- Identify all system interconnections and external system connections
- Verify that each interconnection has a documented and approved ISA or MOU/MOA
- Check that ISAs document interface characteristics, security requirements, and information types
- Confirm that interconnection agreements are reviewed and updated at least annually
- Validate that security controls are in place to protect data flowing across interconnections
- Review network diagrams and data flow diagrams for undocumented connections
- Examine firewall rules, API gateways, and VPN configurations for unauthorized connections
- Verify that both parties to an interconnection understand their security responsibilities
- Check for proper authorization from appropriate officials before establishing connections
