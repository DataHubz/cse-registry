# CSE-FEDRAMP-CM-NO-LEAST-FUNCTIONALITY-007

**No Least Functionality**

## Signal Overview

| Field           | Value                                            |
|-----------------|--------------------------------------------------|
| Identifier      | `CSE-FEDRAMP-CM-NO-LEAST-FUNCTIONALITY-007`     |
| Domain          | FEDRAMP                                          |
| Category        | CM                                               |
| Status          | Active                                           |
| Introduced In   | 1.0.0                                            |

## Description

The information system has not been configured to provide only essential capabilities, allowing unnecessary functions, ports, protocols, and services to remain enabled.

## Applicability

This signal applies to:

- Cloud Service Providers (CSPs) seeking FedRAMP authorization
- Federal agencies operating cloud systems
- Third Party Assessment Organizations (3PAOs) conducting assessments
- Federal information systems processing government data

## FedRAMP Context (Informative)

**Control Family:** Configuration Management (CM)
**Control Number:** CM-7
**FedRAMP Baseline:** Low, Moderate, High

**NIST SP 800-53 Rev. 5 Text:** "The organization configures the information system to provide only essential capabilities; and prohibits or restricts the use of [Assignment: organization-defined prohibited or restricted functions, ports, protocols, and/or services]."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Examine network scans, port scans, and service inventories to identify running services that are not essential for system operation. Look for unnecessary services running on systems, unused network ports open, unnecessary protocols enabled, or applications with excessive features enabled. Check for presence of development tools on production systems, unused administrative interfaces, or default services that have not been disabled. Review firewall rules and network segmentation to identify overly permissive configurations allowing unnecessary communications.
