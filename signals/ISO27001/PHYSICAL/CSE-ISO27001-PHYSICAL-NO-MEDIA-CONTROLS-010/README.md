# CSE-ISO27001-PHYSICAL-NO-MEDIA-CONTROLS-010

**No Storage Media Controls**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-MEDIA-CONTROLS-010` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Storage media is not managed through its lifecycle according to classification and handling requirements. This indicates a lack of comprehensive controls for managing removable and physical storage media from acquisition through secure disposal, including inventory management, secure storage, and controlled access.

## Applicability

- Removable media (USB drives, external hard drives, SD cards)
- Backup tapes and optical media (CDs, DVDs)
- Paper documents and printed materials
- Magnetic media and legacy storage formats
- Mobile devices and laptops with local storage
- Storage systems being decommissioned
- Media used for data transfer or transport

## Examples (Non-Normative)

### No Media Lifecycle Management

```yaml
media_management:
  policy_defined: false
  inventory:
    maintained: false
    classification_tracked: false
  storage_controls:
    secure_storage_required: false
    access_controls: false
    environmental_protection: false
  transportation:
    encryption_required: false
    authorization_required: false
    tracking: false
  disposal:
    secure_disposal_process: false
    verification_required: false
```

### Uncontrolled Removable Media

```yaml
removable_media:
  types:
    - usb_drives
    - external_hdds
    - backup_tapes
  controls:
    inventory_tracking: false
    encryption_enforced: false
    approved_media_list: null
    usage_logging: false
  disposal:
    sanitization_procedure: undefined
    certificate_of_destruction: false
    physical_destruction: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.10**: Storage media should be managed through their lifecycle in accordance with the organization's classification scheme and handling requirements. This includes proper management during acquisition, use, transportation, and disposal to prevent unauthorized disclosure, modification, removal or destruction.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-SECURE-DISPOSAL-014`
- `CSE-ISO27001-PHYSICAL-NO-OFFSITE-SECURITY-009`
- `CSE-ISO27001-PHYSICAL-NO-CLEAR-DESK-POLICY-007`
