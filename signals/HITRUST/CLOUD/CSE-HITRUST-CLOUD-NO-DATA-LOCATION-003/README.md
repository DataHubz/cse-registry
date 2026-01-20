# CSE-HITRUST-CLOUD-NO-DATA-LOCATION-003

**Data Location Not Controlled**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-CLOUD-NO-DATA-LOCATION-003`   |
| Domain          | HITRUST                                    |
| Category        | CLOUD                                      |
| Control Domain  | 14 - Cloud Security                        |
| Control Ref     | 14.c                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

The geographic location and jurisdiction of data stored or processed in cloud environments has not been identified, documented, or controlled for systems handling protected health information (PHI) or sensitive data.

This signal indicates the absence of controls to ensure data residency requirements are met, including understanding where data is stored, processed, and backed up across cloud regions and availability zones. Data location controls should address regulatory requirements, privacy laws, and organizational policies.

## Applicability

This signal applies to:

- Cloud storage services (object storage, databases, file systems)
- Cloud backup and disaster recovery services
- Multi-region cloud deployments
- Content delivery networks (CDNs) serving healthcare data
- Cloud-based data analytics and processing platforms
- Database-as-a-Service (DBaaS) offerings
- Cloud archival and long-term storage solutions

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Unknown Data Location

```markdown
# Common indicators:
- No documented data residency requirements
- Unknown geographic location of cloud data
- Lack of region/zone specification in cloud configurations
- Missing data sovereignty controls
```

### Uncontrolled Multi-Region Storage

```yaml
# Cloud storage without location controls
cloud_storage:
  service: "s3/blob/cloud_storage"
  region: "not_specified"
  data_residency_policy: none
  allowed_regions: []
  geo_restrictions: false
  backup_locations: unknown
```

### Database Without Location Governance

```json
{
  "database_service": {
    "type": "managed_database",
    "primary_region": "default",
    "read_replicas": "auto_assigned",
    "backup_geo_replication": true,
    "data_residency_requirements": null,
    "jurisdiction_compliance": "unknown"
  }
}
```

### CDN Without Geographic Controls

```python
# Content Delivery Network configuration:
cdn_config = {
    "edge_locations": "global",  # Data replicated worldwide
    "geo_restrictions": None,
    "allowed_countries": [],
    "phi_data_locations": "unknown",
    "data_residency_enforcement": False
}
```

## What This Signal Does NOT Assert

- Whether data is currently stored in non-compliant locations
- Whether cloud providers have adequate physical security
- The specific data residency requirements for the organization
- Compliance or non-compliance with HITRUST CSF or any framework
- Whether data sovereignty laws are being violated
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **14.c - Data Location and Jurisdiction**: Organizations shall identify, document, and control the geographic location and legal jurisdiction of data stored, processed, and transmitted in cloud environments to meet regulatory, privacy, and organizational requirements

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-CLOUD-NO-GOVERNANCE-001` - Cloud Governance Missing
- `CSE-HITRUST-CLOUD-NO-SHARED-RESPONSIBILITY-002` - Shared Responsibility Not Defined
- `CSE-HITRUST-COMPLY-NO-PRIVACY-COMPLIANCE-004` - Privacy Compliance Missing
- `CSE-HITRUST-ASSET-NO-CLASSIFICATION-004` - Asset Classification Missing

## Notes

Detection of this signal typically involves:

- Review of cloud service configurations and region settings
- Assessment of data residency policies and requirements
- Examination of cloud provider data center locations
- Verification of geo-restriction and location controls
- Review of regulatory compliance requirements (GDPR, HIPAA, etc.)
- Analysis of backup and disaster recovery location settings
- Assessment of data flow diagrams and architecture documentation

The presence of this signal indicates a potential compliance risk related to data sovereignty, privacy regulations, and organizational data residency requirements that should be addressed promptly.
