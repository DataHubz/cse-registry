# CSE-HITRUST-OPS-NO-MEDIA-MANAGEMENT-011

**Media Management Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-OPS-NO-MEDIA-MANAGEMENT-011`  |
| Domain          | HITRUST                                    |
| Category        | OPS                                        |
| Control Domain  | 09 - Communications and Operations Management |
| Control Ref     | 09.k                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Procedures for the management of removable media and the secure disposal of media are not implemented to prevent unauthorized disclosure, modification, removal, or destruction of information.

This signal indicates that an organization lacks controls for media handling, which may result in data leakage, unauthorized access to sensitive information, or improper disposal of media containing confidential data.

## Applicability

This signal applies to:

- Removable storage devices (USB drives, external drives)
- Optical media (CDs, DVDs, Blu-ray)
- Magnetic media (backup tapes, hard drives)
- Printed documents and reports
- Mobile devices and tablets
- Legacy media formats
- Cloud storage transfer media
- Disposal and destruction of media

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Uncontrolled Removable Media Access

```yaml
# Workstation policy without media controls
endpoint_policy:
  usb_devices:
    enabled: true
    restrictions: none
    encryption_required: false
    logging: disabled
  optical_media:
    enabled: true
    burning_allowed: true
    controls: none
```

### Missing Data Disposal Procedures

```bash
# Decommissioned server without secure disposal
# Hard drives removed from server
# No data sanitization performed
# No certificate of destruction
# Drives discarded in regular trash
```

### Backup Media Without Management

```python
# Backup system without media tracking
class BackupManager:
    def create_backup(self, data):
        # Write to removable media
        self.write_to_tape(data)
        # No media inventory
        # No encryption verification
        # No tracking of media location
        # No retention policy enforcement
```

### Cloud Storage Without Transfer Controls

```terraform
# S3 bucket for data transfer without controls
resource "aws_s3_bucket" "transfer" {
  bucket = "data-transfer-bucket"

  # No encryption requirement
  # No access logging
  # No lifecycle policies
  # No versioning for audit trail
}
```

## What This Signal Does NOT Assert

- Whether media is currently in use
- Whether any informal media handling procedures exist
- The specific media types requiring management
- Compliance or non-compliance with HITRUST CSF or any framework
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **09.k - Management of Removable Media**: Procedures shall be implemented for the management of removable media to prevent unauthorized disclosure, modification, removal, or destruction of information stored on media

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-OPS-NO-PROCEDURES-001` - Operating Procedures Not Documented
- `CSE-CMMC-MEDIA-NO-SANITIZATION-001` - Media Sanitization Missing (if defined)
- `CSE-CMMC-MEDIA-NO-PROTECTION-002` - Media Protection Missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of media management policies and procedures
- Assessment of removable media access controls
- Examination of media inventory and tracking systems
- Verification of media encryption requirements
- Review of media disposal and sanitization procedures
- Analysis of media transport and storage security
- Inspection of media labeling and classification
- Verification of media retention and destruction records

The presence of this signal indicates a condition that warrants review in the context of data protection and information disclosure prevention requirements.
