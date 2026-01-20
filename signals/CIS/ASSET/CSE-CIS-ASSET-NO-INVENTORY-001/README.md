# CSE-CIS-ASSET-NO-INVENTORY-001

**Enterprise Asset Inventory Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-ASSET-NO-INVENTORY-001` |
| Domain | CIS |
| Category | ASSET |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when an organization lacks an accurate and up-to-date inventory of all enterprise assets (end-user devices, network devices, non-computing/IoT devices, and servers) on the network, where the address space is assigned by the organization. Without a comprehensive inventory, organizations cannot effectively manage, secure, or monitor their assets, leading to increased security risks and potential unauthorized access.

## Implementation Group

- **IG Level**: IG1
- **Applicable To**: All organizations regardless of size or security maturity level

## Applicability

- Enterprise IT environments
- Cloud infrastructure
- On-premises data centers
- Remote/hybrid work environments
- Manufacturing facilities with IoT devices
- Healthcare organizations with medical devices

## Examples (Non-Normative)

### Missing Asset Inventory System

```yaml
# Detection indicators:
asset_inventory_system: null
inventory_last_updated: null
total_assets_tracked: 0
inventory_completeness: 0%

# Expected state:
asset_inventory_system: "ServiceNow CMDB"
inventory_last_updated: "2025-12-27"
total_assets_tracked: 1547
inventory_completeness: 95%
```

### Incomplete Asset Categories

```yaml
# Detected gaps in inventory:
end_user_devices_tracked: true
network_devices_tracked: false
iot_devices_tracked: false
servers_tracked: true
mobile_devices_tracked: false

# All categories should be tracked
```

## CIS Controls Context (Informative)

- **Control**: 01 - Inventory and Control of Enterprise Assets
- **Safeguard**: 1.1
- **Safeguard Title**: Establish and Maintain Detailed Enterprise Asset Inventory
- **Asset Type**: Devices
- **Security Function**: Identify

## Related Signals

- CSE-CIS-ASSET-NO-UNAUTHORIZED-DETECTION-002
- CSE-CIS-ASSET-NO-ACCURATE-INVENTORY-004
- CSE-CIS-ASSET-NO-NETWORK-DISCOVERY-005
- CSE-NISTCSF-AM-ASSET-001
- CSE-ISO27001-ORG-ASSET-001

## Notes

### Detection Guidance

This signal can be detected through:

1. **Absence of Asset Management System**: No CMDB, asset management database, or inventory tracking system exists
2. **Missing Asset Data**: Critical asset attributes (hardware make/model, network address, purpose, owner) not documented
3. **Outdated Records**: Inventory has not been updated within required timeframes
4. **Incomplete Coverage**: Significant asset categories are not included in the inventory
5. **Manual Processes**: Reliance solely on manual tracking methods (spreadsheets) without automated discovery

### Remediation Priority

This is a foundational IG1 control. Organizations should prioritize establishing an asset inventory immediately as it is prerequisite to most other security controls and risk management activities.
