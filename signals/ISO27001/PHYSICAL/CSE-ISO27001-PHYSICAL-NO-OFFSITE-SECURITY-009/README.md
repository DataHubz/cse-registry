# CSE-ISO27001-PHYSICAL-NO-OFFSITE-SECURITY-009

**No Off-Site Asset Security**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-OFFSITE-SECURITY-009` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Off-site assets are not protected considering different risks of working outside organization premises. This indicates inadequate security measures for equipment, data, and personnel working in remote locations, home offices, customer sites, or other off-premises environments.

## Applicability

- Remote and hybrid work arrangements
- Mobile and portable computing devices
- Equipment at customer or vendor sites
- Backup media stored off-site
- Assets in transit
- Field service equipment
- Home office setups
- Co-working spaces and temporary work locations

## Examples (Non-Normative)

### No Remote Work Security

```yaml
remote_work_policy:
  defined: false
  security_requirements:
    secure_workspace: null
    equipment_protection: null
    network_security: null
    data_handling: null
  technical_controls:
    vpn_required: false
    encryption_required: false
    device_tracking: false
    remote_wipe_capability: false
```

### Unprotected Mobile Assets

```yaml
mobile_device_management:
  policy_defined: false
  asset_tracking:
    inventory_maintained: false
    location_tracking: false
  physical_security:
    cable_locks_provided: false
    secure_storage_required: false
    loss_reporting_procedure: null
  data_protection:
    encryption_enforced: false
    backup_required: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.9**: Security should be applied to off-site assets taking into account the different risks of working outside the organization's premises. This includes protecting equipment and media taken off-site and ensuring personnel understand their security responsibilities when working remotely.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-PROTECTION-008`
- `CSE-ISO27001-PHYSICAL-NO-MEDIA-CONTROLS-010`
- `CSE-ISO27001-PHYSICAL-NO-CLEAR-DESK-POLICY-007`
