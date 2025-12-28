# CSE-GEN-PHYSICAL-NO-MEDIA-CONTROLS-003

**Physical Media Controls Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-PHYSICAL-NO-MEDIA-CONTROLS-003` |
| Domain          | GEN (General)                            |
| Category        | PHYSICAL                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No controls for physical storage media (hard drives, USB drives, backup tapes, optical discs, mobile devices) handling, storage, transportation, and disposal to prevent unauthorized access, data leakage, or improper destruction.

This signal indicates the absence of physical media management controls including secure storage, chain of custody tracking, encryption requirements, sanitization procedures, certified destruction methods, or inventory management for removable and portable media containing sensitive data.

## Applicability

This signal applies to:

- Backup tapes and external hard drives
- USB drives and flash storage devices
- Laptop computers and mobile devices
- Optical media (CDs, DVDs, Blu-ray)
- Paper documents containing sensitive data
- Decommissioned storage devices
- Media in transit or offsite storage
- End-of-life equipment disposal

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Physical Media Management

```text
Indicators of missing media controls:
- No media inventory or tracking system
- No secure storage for backup media
- No encryption requirements for removable media
- No sanitization procedures for disposal
- No chain of custody for media transport
- No media classification scheme
- No authorized user lists for media access
```

### Missing Media Lifecycle Controls

```yaml
# Absent physical media controls
media_management:
  media_inventory:
    tracking_system: false
    asset_register: null
    media_labeling: false
    location_tracking: false

  secure_storage:
    locked_cabinets: false
    fireproof_safe: false
    offsite_vault: false
    environmental_controls: false
    access_restricted: false

  media_transport:
    encrypted_media: false
    courier_service: null
    chain_of_custody: false
    tamper_evident_packaging: false

  media_disposal:
    sanitization_policy: null
    certified_destruction: false
    destruction_verification: false
    certificates_retained: false
```

### No Media Handling Procedures

```python
# Missing physical media controls
def media_control_program():
    gaps = []

    # No media inventory
    if not maintains_media_inventory():
        gaps.append("No media inventory tracking system")

    # No secure storage
    if not has_secure_media_storage():
        gaps.append("No secure storage for physical media")

    # No encryption policy
    if not requires_media_encryption():
        gaps.append("No encryption requirements for removable media")

    # No sanitization process
    if not has_sanitization_procedures():
        gaps.append("No media sanitization procedures")

    # No disposal tracking
    if not tracks_media_disposal():
        gaps.append("No tracking of media destruction")

    # No transport security
    if not secures_media_transport():
        gaps.append("No secure transport procedures for media")

    # No authorization controls
    if not controls_media_access():
        gaps.append("No authorization for media access")

    return gaps
```

### Lack of Media Storage Security

```json
{
  "physical_media_controls": {
    "backup_tapes": {
      "inventory_maintained": false,
      "secure_storage": false,
      "encryption_required": false,
      "offsite_storage": false,
      "rotation_schedule": null,
      "access_logging": false
    },
    "usb_drives": {
      "approved_devices_only": false,
      "encryption_required": false,
      "inventory_tracked": false,
      "usage_policy": null
    },
    "decommissioned_drives": {
      "sanitization_method": null,
      "destruction_service": null,
      "certificate_of_destruction": false,
      "audit_trail": false
    },
    "mobile_devices": {
      "inventory_system": false,
      "encryption_enforced": false,
      "remote_wipe_capable": false,
      "storage_policy": null
    }
  }
}
```

### No Media Disposal Procedures

```text
Missing media disposal controls:
- No data sanitization before disposal
- No certified destruction service
- No certificates of destruction
- No verification of complete data erasure
- No physical destruction for highly sensitive media
- No disposal audit trail
- No compliance with data protection regulations
- No degaussing or shredding equipment
```

### Missing Media Transport Security

```bash
#!/bin/bash
# Physical media control gaps

# No encryption for media
echo "Media encryption requirement: Not enforced"

# No transport procedures
echo "Secure media transport policy: Not defined"

# No chain of custody
echo "Chain of custody tracking: Not maintained"

# No courier requirements
echo "Approved courier service: Not designated"

# No tamper protection
echo "Tamper-evident packaging: Not required"

# No transport logging
echo "Media transport logging: Not implemented"
```

### No Media Inventory Management

```yaml
# Advanced media controls missing
advanced_media_controls:
  inventory_system:
    automated_tracking: false
    barcode_rfid_labels: false
    check_in_out_process: false
    location_tracking: false
    custody_records: false

  classification:
    sensitivity_labels: false
    retention_periods: null
    handling_requirements: null
    access_restrictions: null

  lifecycle_management:
    media_age_tracking: false
    replacement_schedule: null
    end_of_life_procedures: null
    disposal_authorization: false

  compliance_controls:
    regulatory_requirements: null
    audit_trail: false
    periodic_inventory: false
    exception_reporting: false
```

### No Media Access Authorization

```sql
-- Missing physical media access tracking
-- No media checkout/checkin system
-- No authorized user list
-- No access approval workflow
-- No usage accountability

-- Expected schema not implemented:
-- CREATE TABLE media_access_log (
--   access_id UUID PRIMARY KEY,
--   media_id VARCHAR(50),
--   media_type VARCHAR(50),
--   user_id VARCHAR(50),
--   checkout_timestamp TIMESTAMP,
--   checkin_timestamp TIMESTAMP,
--   authorized_by VARCHAR(50),
--   purpose VARCHAR(255),
--   location VARCHAR(100),
--   return_condition VARCHAR(50),
--   disposal_date DATE,
--   destruction_certificate VARCHAR(100)
-- );
```

### No Sanitization Standards

```python
# Missing media sanitization controls
def sanitization_requirements():
    standards_missing = []

    # No NIST 800-88 compliance
    if not follows_nist_sanitization():
        standards_missing.append("NIST 800-88 sanitization not implemented")

    # No DoD 5220.22-M wiping
    if not performs_dod_wipe():
        standards_missing.append("DoD-level wiping not performed")

    # No physical destruction
    if not has_destruction_capability():
        standards_missing.append("Physical destruction not available")

    # No verification
    if not verifies_sanitization():
        standards_missing.append("Sanitization verification not performed")

    # No documentation
    if not documents_destruction():
        standards_missing.append("Destruction not documented")

    return standards_missing
```

## What This Signal Does NOT Assert

- Whether electronic data controls are in place
- The specific sanitization methods to be used
- Whether data breaches have occurred
- The adequacy of logical access controls
- Compliance or non-compliance with any framework
- Required retention periods for media

## Related Signals

- `CSE-GEN-PHYSICAL-NO-ACCESS-CONTROLS-001` — Physical access controls missing
- `CSE-GEN-DATA-NO-CLASSIFICATION` — Data classification missing (if defined)
- `CSE-GEN-CRYPTO-NO-ENCRYPTION` — Encryption missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 45 CFR 164.310(d)(1) (Device and media controls)
- **HIPAA**: 45 CFR 164.310(d)(2)(i) (Disposal)
- **HIPAA**: 45 CFR 164.310(d)(2)(ii) (Media re-use)
- **HIPAA**: 45 CFR 164.310(d)(2)(iii) (Accountability)
- **HIPAA**: 45 CFR 164.310(d)(2)(iv) (Data backup and storage)
- **ISO 27001**: A.7.10 (Storage media)
- **ISO 27001**: A.8.10 (Information deletion)
- **ISO 27001**: A.7.14 (Secure disposal or re-use of equipment)
- **PCI DSS**: Requirement 9.8 (Destroy media when no longer needed)
- **PCI DSS**: Requirement 9.8.1 (Shred, incinerate, or pulp hardcopy materials)
- **PCI DSS**: Requirement 9.8.2 (Render cardholder data unrecoverable)
- **NIST SP 800-88**: Guidelines for Media Sanitization
- **SOC 2**: CC6.5 (Restricts access to sensitive information)
- **HITRUST**: 09.o (Disposal of Media)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of media management policies and procedures
- Assessment of media inventory and tracking systems
- Examination of secure storage facilities
- Evaluation of encryption requirements for removable media
- Analysis of sanitization and disposal procedures
- Review of certificates of destruction
- Assessment of media transport security
- Examination of chain of custody records

Effective physical media control programs typically include:
- **Inventory Management**: Complete tracking of all physical media
- **Secure Storage**: Locked, environmentally controlled storage areas
- **Encryption**: Mandatory encryption for removable and portable media
- **Classification**: Labeling based on data sensitivity
- **Access Control**: Authorization and logging of media access
- **Transport Security**: Encryption, chain of custody, tamper-evident packaging
- **Sanitization**: NIST 800-88 compliant data sanitization procedures
- **Certified Destruction**: Third-party destruction with certificates
- **Audit Trail**: Complete lifecycle documentation
- **Periodic Review**: Regular inventory audits and access reviews

The presence of this signal indicates a significant gap in protecting physical media throughout its lifecycle, which could result in unauthorized data access, data breaches through lost or stolen media, improper disposal leading to data recovery by unauthorized parties, or regulatory compliance violations.
