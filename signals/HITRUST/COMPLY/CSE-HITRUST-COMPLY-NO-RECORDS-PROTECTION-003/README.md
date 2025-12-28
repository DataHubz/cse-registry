# CSE-HITRUST-COMPLY-NO-RECORDS-PROTECTION-003

**Records Not Protected**

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-HITRUST-COMPLY-NO-RECORDS-PROTECTION-003`  |
| Domain          | HITRUST                                         |
| Category        | COMPLY                                          |
| Control Domain  | 06 - Compliance                                 |
| Reference       | 06.c                                            |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

Records are not protected from loss, destruction, falsification, unauthorized access, and unauthorized release in accordance with legislative, regulatory, contractual, and business requirements.

This signal indicates that an organization has not implemented adequate controls to ensure the confidentiality, integrity, availability, and legal admissibility of important records throughout their lifecycle, from creation through retention to disposal.

## Applicability

This signal applies to:

- Healthcare records subject to HIPAA retention requirements
- Financial records subject to SOX, GLBA, or SEC regulations
- Personnel records with privacy and labor law obligations
- Legal and compliance documentation
- Audit logs and security event records
- Business continuity and disaster recovery documentation
- Contract and vendor agreement repositories
- Electronic health records (EHR) systems
- Document management systems and archives

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Unprotected Records Storage

```yaml
# Records stored without adequate protection
medical_records:
  location: "shared_drive"
  encryption: "none"
  access_controls: "not_enforced"
  backup: "not_configured"
  retention_policy: "undefined"
  audit_logging: "disabled"
```

### Missing Records Retention Policy

```json
{
  "record_type": "patient_records",
  "retention_requirements": {
    "documented": false,
    "retention_period": "not_specified",
    "disposal_method": "undefined",
    "legal_hold_process": "none",
    "compliance_review": "not_performed"
  }
}
```

### Inadequate Access Controls

```hcl
# Document repository without proper access restrictions
resource "storage_bucket" "records" {
  name     = "company-records"
  # Missing encryption configuration
  # Missing access controls
  # Missing versioning
  # Missing lifecycle policies
  # Missing audit logging
}
```

### No Records Disposal Procedures

```markdown
# Missing documentation for:
- Secure records disposal procedures
- Certificate of destruction process
- Media sanitization requirements
- Disposal authorization workflow
- Verification of disposal completion
- Legal hold management
- Records destruction audit trail
```

## What This Signal Does NOT Assert

- Whether specific records have been compromised
- The completeness of existing records
- Whether all legal retention periods are known
- The adequacy of backup and recovery procedures
- Compliance or non-compliance with specific regulations
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **06.c Protection of Records**: Records shall be protected from loss, destruction, falsification, unauthorized access, and unauthorized release, in accordance with legislatives, regulatory, contractual, and business requirements

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-COMPLY-NO-LEGAL-IDENTIFICATION-001` — Legal requirements not identified
- `CSE-CMMC-MEDIA-NO-PROTECTION-002` — Media not protected (if defined)
- `CSE-CMMC-AUDIT-NO-RETENTION-002` — Audit logs not retained (if defined)
- `CSE-HITRUST-COMPLY-NO-AUDIT-006` — Compliance audit not conducted

## Notes

Detection of this signal typically involves:

- Review of records management policies and procedures
- Analysis of storage encryption and access controls
- Examination of retention schedules and disposal procedures
- Assessment of backup and recovery capabilities
- Review of audit logging for records access
- Inspection of physical and logical security controls
- Evaluation of records classification and handling procedures
- Assessment of legal hold and e-discovery capabilities

The presence of this signal indicates a condition that warrants review in the context of records protection and retention compliance requirements.
