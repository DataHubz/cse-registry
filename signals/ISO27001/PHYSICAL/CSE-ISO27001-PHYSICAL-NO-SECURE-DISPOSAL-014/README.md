# CSE-ISO27001-PHYSICAL-NO-SECURE-DISPOSAL-014

**No Secure Disposal or Re-use Procedures**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-SECURE-DISPOSAL-014` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Items containing storage media are not verified to ensure sensitive data is removed before disposal or re-use. This indicates a lack of secure disposal and sanitization procedures, creating risks of data exposure through discarded or repurposed equipment.

## Applicability

- End-of-life computer equipment
- Decommissioned servers and storage systems
- Retired mobile devices and laptops
- Removable storage media (USB drives, external drives)
- Backup tapes and optical media
- Hard copy documents and printouts
- Printers and multifunction devices with storage
- Equipment being sold, donated, or returned to vendors

## Examples (Non-Normative)

### No Disposal Procedures

```yaml
disposal_program:
  policy_defined: false
  procedures:
    data_sanitization: undefined
    physical_destruction: undefined
    verification_process: undefined
  equipment_disposal:
    inventory_tracking: false
    sanitization_methods: null
    destruction_vendor: unverified
    certificates_of_destruction: false
```

### Insecure Equipment Re-use

```yaml
equipment_reuse:
  computers:
    data_wiping: false
    secure_erase: false
    verification: false
  storage_media:
    sanitization_method: "delete_files"
    overwrite_passes: 0
    degaussing: false
    physical_destruction: false
  documentation:
    disposal_records: not_maintained
    chain_of_custody: false
    compliance_verification: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.14**: Items of equipment containing storage media should be verified to ensure that any sensitive data and licensed software has been removed or securely overwritten prior to disposal or re-use. This includes proper sanitization methods appropriate to the classification level and ensuring complete data destruction.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-MEDIA-CONTROLS-010`
- `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-MAINTENANCE-013`
- `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-PROTECTION-008`
