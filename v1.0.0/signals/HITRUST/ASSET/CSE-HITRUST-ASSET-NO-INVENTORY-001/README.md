# CSE-HITRUST-ASSET-NO-INVENTORY-001

**Asset Inventory Not Maintained**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-HITRUST-ASSET-NO-INVENTORY-001`    |
| Domain          | HITRUST                                 |
| Category        | ASSET                                   |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

An organization lacks a comprehensive inventory of information assets that accurately identifies all hardware, software, data, and systems within the environment.

This signal indicates that there is no systematic tracking of assets, making it difficult to protect, manage, and account for all resources that process, store, or transmit sensitive information.

## Applicability

This signal applies to:

- Physical and virtual servers
- Workstations and end-user devices
- Mobile devices and tablets
- Network infrastructure (routers, switches, firewalls)
- Cloud resources and services
- Software applications and licenses
- Data repositories and databases
- Storage systems and media
- IoT and embedded devices

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Asset Management Database

```text
# No centralized system exists to track:
- Hardware serial numbers and locations
- Software versions and licenses
- System owners and custodians
- Asset criticality and classification
- Lifecycle status (active, retired, decommissioned)
```

### Undocumented Cloud Resources

```yaml
# Cloud resources deployed without tracking
aws_instances:
  - launched_by: developers
    tracked_in_inventory: false
    owner: unknown
    purpose: unclear
```

### Shadow IT Systems

```text
# Departments deploying their own systems without IT knowledge:
- Marketing team using untracked SaaS applications
- Finance department running local databases
- Sales team using personal cloud storage
- No visibility into these assets
```

### Missing Software Inventory

```bash
# No record of installed software across the environment
# Unable to answer questions like:
# - What versions of OpenSSL are deployed?
# - Which systems run end-of-life software?
# - What applications contain sensitive data?
```

## What This Signal Does NOT Assert

- Whether assets are properly secured
- The quality or accuracy of partial inventories that may exist
- Whether asset management tools are installed
- Compliance or non-compliance with HITRUST or any framework
- Required asset management procedures

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **07.a - Inventory of Assets**: Organizations should identify and maintain an inventory of all important information assets

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ASSET-NO-OWNERSHIP-002` — Asset ownership not assigned
- `CSE-HITRUST-ASSET-NO-CLASSIFICATION-004` — Information classification missing
- `CSE-CMMC-CONFIG-NO-BASELINE-001` — Configuration baseline not established (if defined)

## Notes

Detection of this signal typically involves:

- Review of asset management system completeness
- Analysis of configuration management database (CMDB) coverage
- Assessment of IT asset tracking procedures
- Comparison of known assets against discovered systems
- Evaluation of cloud resource tagging and inventory practices

The presence of this signal indicates a condition that warrants review in the context of asset management requirements.
