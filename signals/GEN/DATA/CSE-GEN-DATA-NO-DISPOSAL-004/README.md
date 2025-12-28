# CSE-GEN-DATA-NO-DISPOSAL-004

**Secure Data Disposal Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GEN-DATA-NO-DISPOSAL-004` |
| Domain | GEN (General) |
| Category | DATA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No process for securely disposing of data when no longer needed (secure deletion, media destruction).

Organizations lack procedures and mechanisms to permanently and irrecoverably destroy data when it reaches the end of its retention period or is no longer required. This signal indicates data may remain accessible on storage media, backups, or decommissioned systems without proper sanitization or destruction.

## Applicability

This signal applies to:

- Data deletion and purging processes
- Media sanitization and destruction programs
- Decommissioning of storage systems and servers
- Hard drive and backup tape disposal
- Cloud storage lifecycle management
- Database record deletion procedures
- Device disposal and recycling programs

## Examples (Non-Normative)

### No Disposal Process

```yaml
data_disposal:
  disposal_policy: null                    # Signal: No disposal policy
  sanitization_standards: []               # Signal: No standards defined
  disposal_methods: "undefined"            # Signal: No approved methods

deletion_procedures:
  database_records:
    method: "soft delete"                  # Signal: Data not permanently deleted
    verification: false                    # Signal: No deletion verification
    backup_retention: "indefinite"         # Signal: Remains in backups

  storage_media:
    hard_drives:
      sanitization: "not performed"        # Signal: No sanitization
      destruction: "none"                  # Signal: No physical destruction
      certificate: null                    # Signal: No destruction certificate

  decommissioning:
    servers: "donated with data intact"    # Signal: Data not wiped
    laptops: "resold without wiping"       # Signal: Insecure disposal
```

### Inadequate Deletion Methods

```
Disposal Audit Findings:

Database Deletion:
  - Customer records marked deleted but not purged
  - Soft delete flags used (data remains queryable)
  - No process to remove from backups
  - Transaction logs retain deleted data indefinitely

Physical Media:
  - 47 decommissioned hard drives in storage room
  - No sanitization performed before storage
  - 12 backup tapes sent to offsite storage without encryption
  - Surplus laptops sold with data intact

Cloud Storage:
  - S3 versioning retains all deleted objects
  - No lifecycle policies for permanent deletion
  - Snapshots retained indefinitely
  - Deactivated accounts not purged
```

## What This Signal Does NOT Assert

- Whether data has been improperly disclosed
- The specific disposal methods that should be used
- Severity or exploitability of retained data
- Required remediation actions
- Compliance or non-compliance with any framework

## Related Signals

- `CSE-GEN-DATA-NO-RETENTION-POLICY-003` — Retention policy missing
- `CSE-GDPR-RIGHTS-NO-DELETION` — Right to erasure not implemented (if defined)
- `CSE-PCI-DATA-NO-SECURE-DISPOSAL` — PCI DSS secure disposal missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **GDPR**: Article 17 (Right to erasure), Article 5(1)(e) (Storage limitation)
- **PCI DSS**: Requirement 3.1 (Secure deletion of cardholder data), Requirement 9.8 (Media destruction)
- **CIS Controls**: 3.11 (Automate data retention and disposal)
- **ISO 27001**: A.8.10 (Information deletion)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing disposal and sanitization policies
- Examining media destruction logs and certificates
- Checking database deletion procedures (soft vs. hard delete)
- Analyzing decommissioning processes for IT assets
- Assessing cloud storage lifecycle configurations
- Reviewing backup retention and deletion practices
- Inspecting physical security for media disposal

The absence of secure disposal processes creates data breach risks from improperly decommissioned equipment, increases storage costs, complicates compliance with data protection regulations, and may expose sensitive data through surplus equipment sales or donations.

Secure disposal should align with recognized standards such as NIST SP 800-88 (Guidelines for Media Sanitization), DoD 5220.22-M, or equivalent regional standards.
