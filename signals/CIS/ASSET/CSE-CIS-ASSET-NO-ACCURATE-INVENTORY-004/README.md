# CSE-CIS-ASSET-NO-ACCURATE-INVENTORY-004

**Asset Inventory Not Accurate**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-ASSET-NO-ACCURATE-INVENTORY-004` |
| Domain | CIS |
| Category | ASSET |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when an organization's asset inventory is not maintained with sufficient accuracy or updated frequently enough to reflect the current state of enterprise assets. CIS Control 1.4 requires that the enterprise asset inventory be updated at least weekly, or more frequently, to ensure accuracy. An outdated or inaccurate inventory undermines security operations, incident response, vulnerability management, and compliance efforts.

## Implementation Group

- **IG Level**: IG2
- **Applicable To**: Organizations with moderate security maturity that require operational accuracy in asset management

## Applicability

- Enterprise IT environments
- Cloud infrastructure
- On-premises data centers
- Remote/hybrid work environments
- Dynamic environments with frequent asset changes
- Regulated industries requiring accurate asset tracking

## Examples (Non-Normative)

### Infrequent Inventory Updates

```yaml
# Inventory staleness detected:
inventory_system: "ServiceNow CMDB"
last_full_update: "2025-10-15"  # 73 days ago
update_frequency: "quarterly"
required_frequency: "weekly"
staleness_days: 73
compliant: false

# Expected state:
last_full_update: "2025-12-20"  # 7 days ago
update_frequency: "weekly"
automated_discovery: true
staleness_days: 7
compliant: true
```

### Low Inventory Accuracy

```yaml
# Inventory accuracy metrics:
total_assets_in_inventory: 1250
actual_assets_discovered: 1547
missing_from_inventory: 297
accuracy_percentage: 80.8%
target_accuracy: 98%
compliant: false

# Asset discrepancies:
discrepancies:
  - type: "missing_assets"
    count: 297
    description: "Assets found on network but not in inventory"
  - type: "ghost_assets"
    count: 43
    description: "Assets in inventory but not found on network"
  - type: "outdated_attributes"
    count: 156
    description: "Assets with incorrect or outdated information"
```

### Manual-Only Inventory Process

```yaml
# Detection of manual-only processes:
inventory_update_method: "manual"
automated_discovery_enabled: false
human_verification_only: true
update_time_required: "40 hours per month"
error_rate: "high"
scalability: "poor"

# Expected state for IG2:
inventory_update_method: "automated with manual validation"
automated_discovery_enabled: true
discovery_frequency: "daily"
human_verification: "exception-based"
update_time_required: "4 hours per month"
```

## CIS Controls Context (Informative)

- **Control**: 01 - Inventory and Control of Enterprise Assets
- **Safeguard**: 1.4
- **Safeguard Title**: Use Dynamic Host Configuration Protocol (DHCP) Logging to Update Enterprise Asset Inventory
- **Asset Type**: Devices
- **Security Function**: Identify

## Related Signals

- CSE-CIS-ASSET-NO-INVENTORY-001
- CSE-CIS-ASSET-NO-DHCP-LOGGING-003
- CSE-CIS-ASSET-NO-NETWORK-DISCOVERY-005
- CSE-NISTCSF-AM-ASSET-CURRENCY-001
- CSE-ISO27001-ORG-ASSET-ACCURACY-001

## Notes

### Detection Guidance

This signal can be detected through:

1. **Update Frequency Analysis**: Inventory last updated more than 7 days ago
2. **Accuracy Metrics**: Comparison between inventory and active discovery shows >2% discrepancy
3. **Manual Process Indicators**: Evidence of manual spreadsheet updates without automation
4. **Stale Asset Data**: Asset attributes (IP addresses, locations, owners) outdated or incorrect
5. **Discovery Mismatches**: Network scans reveal assets not in inventory or vice versa
6. **Missing Automation**: No integration between discovery tools and asset management system
7. **Audit Findings**: Internal or external audits identify inventory inaccuracies

### Inventory Accuracy Metrics

Organizations should track:

- **Coverage Percentage**: (Assets in Inventory / Actual Assets) × 100
- **Staleness**: Days since last comprehensive update
- **Attribute Accuracy**: Percentage of assets with correct and current attributes
- **Reconciliation Frequency**: How often inventory is verified against reality
- **Ghost Asset Rate**: Assets in inventory that no longer exist

### Update Frequency Requirements

Minimum update frequency by Implementation Group:
- **IG1**: Monthly (at minimum)
- **IG2**: Weekly or more frequently (required)
- **IG3**: Daily or continuous automated updates (recommended)

### Automation Approaches

Organizations can maintain accuracy through:

1. **Automated Discovery Integration**: Network scanners, endpoint agents, cloud APIs feed directly to CMDB
2. **DHCP Log Correlation**: Automatic updates based on DHCP lease assignments (Safeguard 1.3)
3. **Asset Agent Reporting**: Endpoint agents report asset changes in real-time
4. **API Integration**: Cloud provider APIs automatically sync VM and container inventories
5. **Workflow Automation**: Automated tickets for asset additions, changes, and removals
6. **Continuous Reconciliation**: Scheduled comparison jobs between discovery sources and inventory

### Common Accuracy Challenges

- **Shadow IT**: Unauthorized cloud services and applications not captured
- **Ephemeral Assets**: Containers, VMs, and cloud instances with short lifecycles
- **Remote Workers**: Laptops and devices outside traditional network boundaries
- **IoT Devices**: Network-connected devices lacking agents or standard protocols
- **Decommissioned Assets**: Assets removed from service but not removed from inventory

### Remediation Priority

As an IG2 control, this builds upon basic inventory establishment (IG1). Organizations should prioritize implementing automated discovery and update processes to maintain accuracy without excessive manual effort.
