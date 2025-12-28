# CSE-SOC2-PRIV-NO-SECURE-PII-DISPOSAL-008

**No Secure PII Disposal**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-PRIV-NO-SECURE-PII-DISPOSAL-008` |
| Domain | SOC2 |
| Category | PRIV |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not securely dispose of personal information to meet the entity's objectives related to privacy.

## Applicability

- Database record deletion
- Backup media destruction
- Physical document shredding
- Hard drive and storage media disposal
- Cloud data deletion
- Decommissioned system data sanitization
- Third-party data deletion verification

## Examples (Non-Normative)

### Soft Delete Without Secure Disposal

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-SECURE-PII-DISPOSAL-008
  severity: high
  context:
    issue: "Personal information soft-deleted but recoverable"
    deletion_method: "Status flag set to 'deleted'"
    actual_deletion: "Data remains in database"
    recoverability: "Full recovery possible via SQL query"
  evidence:
    - "DELETE operations only set is_deleted=true"
    - "Personal information still in database tables"
    - "No secure deletion or overwriting process"
  recommendation: "Implement hard deletion process with secure data sanitization"
```

### Unverified Third-Party Disposal

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-SECURE-PII-DISPOSAL-008
  severity: high
  context:
    issue: "No verification of third-party data deletion"
    third_party: "Cloud storage provider XYZ"
    deletion_request: "Sent via API"
    verification: "None performed"
  evidence:
    - "Deletion API called but no confirmation received"
    - "No certificate of destruction obtained"
    - "No audit of third-party deletion practices"
  recommendation: "Obtain deletion certificates and audit third-party disposal procedures"
```

### Physical Media Disposal

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-SECURE-PII-DISPOSAL-008
  severity: high
  context:
    issue: "Hard drives containing PII disposed without destruction"
    disposal_method: "General waste disposal"
    data_sanitization: "Not performed"
    media_type: "Hard disk drives from decommissioned servers"
  evidence:
    - "5 hard drives found in general disposal area"
    - "Drives contain customer database backups"
    - "No degaussing or physical destruction performed"
  recommendation: "Implement secure media destruction process including physical destruction or degaussing"
```

### Backup Disposal

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-SECURE-PII-DISPOSAL-008
  severity: high
  context:
    issue: "Expired backups not securely deleted"
    retention_period: "Exceeded by 2 years"
    disposal_status: "Backups still accessible"
    data_sensitivity: "Contains PII and payment information"
  recommendation: "Securely delete expired backups using cryptographic erasure or overwriting methods"
```

## SOC 2 Context (Informative)

- **P4.3**: The entity securely disposes of personal information to meet the entity's objectives related to privacy. When personal information is no longer needed, it is destroyed, erased, or otherwise made unreadable. The disposal method is appropriate to the sensitivity of the information and the media on which it is stored.
- **GAPP Principle**: Use, Retention, and Disposal - Personal information should be securely disposed of once it is no longer needed for business or legal purposes.

## Related Signals

- `CSE-SOC2-PRIV-NO-RETENTION-POLICY-007` - Related to retention before disposal
- `CSE-SOC2-CC-NO-MEDIA-SANITIZATION-001` - Common Criteria media sanitization
- `CSE-GDPR-RETENTION-NO-DELETION-MECHANISM-001` - GDPR right to erasure
- `CSE-GDPR-SECURITY-INADEQUATE-DATA-DESTRUCTION-001` - GDPR secure deletion requirements
