# CSE-ISO27001-ORG-NO-ASSET-INVENTORY-009

**No Inventory of Information and Associated Assets**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-ASSET-INVENTORY-009` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization lacks a maintained inventory of information assets and associated assets with identified owners.

## Applicability

- Organizations without a comprehensive asset inventory
- Environments where asset owners are not identified
- Companies unable to list all information systems and data repositories
- Organizations lacking automated asset discovery
- Environments where asset inventory is outdated or incomplete

## Examples (Non-Normative)

### Missing Asset Inventory

```yaml
asset_management:
  inventory_exists: false
  asset_tracking:
    hardware: "spreadsheet_outdated_2_years"
    software: "partial_licensing_records_only"
    data_repositories: "unknown"
  asset_owners:
    assigned: false
    documented: false
```

### Incomplete Asset Ownership

```yaml
asset_review:
  total_assets_discovered: 847
  assets_with_owners: 132
  ownership_coverage: "15.6%"
  critical_assets_without_owners:
    - "customer_database_production"
    - "financial_reporting_system"
    - "intellectual_property_repository"
```

## ISO 27001:2022 Context (Informative)

- **A.5.9 Inventory of information and other associated assets**: An inventory of information and other associated assets, including owners, should be developed and maintained. The inventory should include all information and other associated assets that are relevant to the information security management system.

## Related Signals

- `CSE-ISO27001-ORG-NO-INFO-CLASSIFICATION-012`
- `CSE-ISO27001-ORG-NO-ACCEPTABLE-USE-POLICY-010`
