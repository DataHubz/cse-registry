# CSE-CIS-SOFTWARE-NO-INVENTORY-001

**Software Inventory Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CIS-SOFTWARE-NO-INVENTORY-001`    |
| Domain          | CIS                                    |
| Category        | SOFTWARE                               |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

An organization does not maintain a comprehensive inventory of authorized software installed on enterprise assets.

This signal indicates that there is no centralized record or automated system tracking all software applications across the organization's infrastructure, making it difficult to identify unauthorized software, manage licenses, or ensure security updates are applied.

## Applicability

This signal applies to:

- Enterprise workstations and laptops
- Servers (physical and virtual)
- Cloud instances and containers
- Mobile devices managed by the organization
- Network devices with installable software
- IoT devices with software components
- Development and testing environments

## Examples (Non-Normative)

### Manual Tracking Only

```bash
# No automated inventory tool deployed
$ which osquery
which: no osquery in (/usr/local/bin:/usr/bin:/bin)

# No centralized asset management
$ ls /var/log/software-inventory*
ls: cannot access '/var/log/software-inventory*': No such file or directory
```

### Missing Software Inventory Database

```sql
-- No software inventory table exists
SELECT * FROM software_inventory;
-- ERROR: relation "software_inventory" does not exist
```

### No Endpoint Management Solution

```powershell
# No SCCM, Intune, or other endpoint management
Get-WmiObject -Class Win32_Product | Select-Object Name, Version
# Manual query required on each endpoint
```

## What This Signal Does NOT Assert

- Whether unauthorized software is present
- The method or tool to be used for inventory
- Compliance or non-compliance with any framework
- The frequency of inventory updates
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 2 - Inventory and Control of Software Assets**
- **Safeguard 2.1**: Establish and maintain a detailed inventory of all licensed software installed on enterprise assets. The software inventory must document the title, publisher, initial install/use date, and business purpose for each entry; where appropriate, include the Uniform Resource Locator (URL), app store(s), version(s), deployment mechanism, and decommission date. Review and update the software inventory bi-annually, or more frequently.
- **Implementation Group**: IG1
- **Asset Type**: Applications
- **Security Function**: Identify

## Related Signals

- `CSE-CIS-SOFTWARE-NO-AUTHORIZED-LIST-002` — Authorized Software List Missing
- `CSE-CIS-SOFTWARE-NO-UNAUTHORIZED-DETECTION-003` — Unauthorized Software Detection Missing
- `CSE-CIS-SOFTWARE-NO-LIBRARY-INVENTORY-004` — Software Library Inventory Missing
