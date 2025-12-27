# CSE-ISO27001-ORG-NO-ASSET-RETURN-PROCESS-011

**No Asset Return Process**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-ASSET-RETURN-PROCESS-011` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No process exists for personnel to return organizational assets upon termination or change of employment.

## Applicability

- Organizations without formal offboarding procedures
- Environments lacking asset return checklists
- Companies unable to track which assets are issued to employees
- Organizations with unreturned assets from former personnel
- Environments where asset return is not verified before final departure

## Examples (Non-Normative)

### Missing Return Process

```yaml
offboarding_procedure:
  asset_return_process: false
  checklist: null
  verification_required: false
  former_employees_with_assets:
    - employee_id: "12345"
      departure_date: "2023-08-15"
      assets_unreturned:
        - "laptop_serial_ABC123"
        - "access_badge_5678"
        - "mobile_device_XYZ789"
```

### No Asset Tracking for Returns

```yaml
asset_management:
  issued_assets_tracked: false
  return_verification:
    process_exists: false
    sign_off_required: false
  outstanding_assets:
    count: 47
    oldest_unreturned: "2021-03-12"
  final_paycheck_contingent_on_return: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.11 Return of assets**: Personnel and other interested parties as appropriate should return all of the organization's assets in their possession upon change or termination of their employment, contract or agreement. This includes physical assets, access credentials, keys, identification cards, and any intellectual property.

## Related Signals

- `CSE-ISO27001-ORG-NO-ASSET-INVENTORY-009`
