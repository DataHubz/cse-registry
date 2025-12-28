# CSE-HITRUST-OPS-NO-INFORMATION-EXCHANGE-012

**Information Exchange Procedures Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-OPS-NO-INFORMATION-EXCHANGE-012` |
| Domain          | HITRUST                                    |
| Category        | OPS                                        |
| Control Domain  | 09 - Communications and Operations Management |
| Control Ref     | 09.l                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Formal policies, procedures, and controls are not established to protect the exchange of information through the use of all types of communication facilities.

This signal indicates that an organization lacks adequate controls for information exchange, which may result in unauthorized disclosure, interception, or modification of sensitive data during transmission or sharing.

## Applicability

This signal applies to:

- Email communications and attachments
- File transfer protocols and services
- API data exchange and integration
- Electronic messaging and collaboration platforms
- Cloud file sharing and synchronization
- Business partner data exchange
- Third-party integrations and data feeds
- Physical media exchange and courier services

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Unencrypted Email Communication

```yaml
# Email server without encryption requirements
mail_server:
  smtp_config:
    tls_required: false
    opportunistic_tls: false
  attachment_controls:
    scanning: disabled
    encryption_enforcement: none
    dlp_inspection: disabled
```

### File Transfer Without Security Controls

```bash
# FTP server configuration without security
/etc/vsftpd.conf:
ssl_enable=NO
# Plain text FTP allowed
# No encryption in transit
# No file transfer logging
# No data loss prevention
```

### API Without Data Exchange Controls

```python
# API endpoint without information exchange controls
@app.route('/api/export-data', methods=['GET'])
def export_data():
    # No data classification verification
    # No encryption requirement
    # No access logging
    # No DLP controls
    # No agreement validation
    return send_file(sensitive_data)
```

### Cloud Sharing Without Restrictions

```terraform
# S3 bucket for file sharing without controls
resource "aws_s3_bucket" "file_share" {
  bucket = "company-file-share"

  # No encryption at rest required
  # No encryption in transit enforced
  # No expiration policies
  # No access agreements tracked
  # No classification-based controls
}
```

## What This Signal Does NOT Assert

- Whether data exchange currently occurs
- Whether some informal exchange controls exist
- The specific information exchange mechanisms in use
- Compliance or non-compliance with HITRUST CSF or any framework
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **09.l - Information Exchange Policies and Procedures**: Formal exchange policies, procedures, and controls shall be in place to protect the exchange of information through the use of all types of communication facilities

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-OPS-NO-PROCEDURES-001` - Operating Procedures Not Documented
- `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001` - Encryption in Transit Missing (if defined)
- `CSE-HITRUST-OPS-NO-MEDIA-MANAGEMENT-011` - Media Management Missing

## Notes

Detection of this signal typically involves:

- Review of information exchange policies and procedures
- Assessment of email security configurations
- Examination of file transfer service security
- Verification of API data exchange controls
- Review of data sharing agreements and approvals
- Analysis of encryption requirements for data in transit
- Inspection of data loss prevention (DLP) controls
- Verification of third-party data exchange security
- Review of information classification handling

The presence of this signal indicates a condition that warrants review in the context of data protection during exchange and transmission requirements.
