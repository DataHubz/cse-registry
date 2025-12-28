# CSE-HITRUST-CLOUD-NO-ENCRYPTION-004

**Cloud Encryption Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-CLOUD-NO-ENCRYPTION-004`      |
| Domain          | HITRUST                                    |
| Category        | CLOUD                                      |
| Control Domain  | 14 - Cloud Security                        |
| Control Ref     | 14.d                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Encryption controls for data at rest and in transit have not been implemented or properly configured in cloud environments storing or processing protected health information (PHI) or sensitive data.

This signal indicates the absence of adequate encryption mechanisms in cloud infrastructure, including storage encryption, database encryption, transmission encryption, and key management. Cloud encryption should protect data confidentiality using industry-standard cryptographic algorithms and proper key management practices.

## Applicability

This signal applies to:

- Cloud storage services (object storage, block storage, file storage)
- Cloud databases and data warehouses
- Virtual machine disk encryption
- Cloud-based messaging and queuing services
- Cloud API communications and data transfers
- Cloud backup and snapshot encryption
- Container and Kubernetes persistent volumes

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Unencrypted Cloud Storage

```markdown
# Common indicators:
- Storage buckets without encryption enabled
- Databases without encryption at rest
- Unencrypted VM disks or volumes
- Missing TLS/SSL for data in transit
```

### Storage Bucket Without Encryption

```yaml
# S3/Blob storage without encryption
storage_bucket:
  name: "patient-records-prod"
  encryption_at_rest: false
  default_encryption: none
  kms_key: null
  encryption_policy_enforced: false
  public_access_blocked: true
```

### Database Without Encryption

```json
{
  "database_instance": {
    "engine": "postgresql",
    "contains_phi": true,
    "encryption_at_rest": false,
    "tde_enabled": false,
    "ssl_required": false,
    "kms_key_id": null
  }
}
```

### Unencrypted VM Disks

```python
# Virtual machine configuration without encryption:
vm_config = {
    "instance_type": "standard_d4s_v3",
    "os_disk": {
        "encryption": False,
        "encryption_type": None
    },
    "data_disks": [
        {"size_gb": 500, "encryption": False},
        {"size_gb": 1000, "encryption": False}
    ],
    "contains_sensitive_data": True
}
```

## What This Signal Does NOT Assert

- Whether data has been compromised due to lack of encryption
- The strength or quality of encryption algorithms if implemented
- Whether encryption keys are properly managed
- Compliance or non-compliance with HITRUST CSF or any framework
- Whether compensating controls exist
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **14.d - Cloud Encryption**: Organizations shall implement and maintain encryption for data at rest and in transit within cloud environments using industry-standard cryptographic algorithms, with proper key management and protection mechanisms

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-CLOUD-NO-CONFIGURATION-005` - Cloud Configuration Management Missing
- `CSE-HITRUST-CLOUD-NO-SHARED-RESPONSIBILITY-002` - Shared Responsibility Not Defined
- `CSE-HITRUST-SDLC-NO-INTEGRITY-CONTROLS-003` - Cryptographic Controls Missing (if defined)
- `CSE-HITRUST-OPS-NO-PROCEDURES-001` - Operating Procedures Missing

## Notes

Detection of this signal typically involves:

- Review of cloud storage configuration settings
- Assessment of database encryption settings
- Examination of virtual machine disk encryption status
- Verification of TLS/SSL configuration for APIs and services
- Review of encryption key management practices
- Analysis of data classification and encryption requirements
- Assessment of cloud provider encryption capabilities
- Validation of encryption-in-transit policies

The presence of this signal indicates a critical security gap that exposes sensitive data to unauthorized access and may violate regulatory requirements such as HIPAA, requiring immediate attention.
