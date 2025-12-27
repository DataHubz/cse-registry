# CSE-ISO27001-ORG-NO-RECORDS-PROTECTION-033

**No Protection of Records**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-RECORDS-PROTECTION-033` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Records are not protected from loss, destruction, falsification, and unauthorized access. Organizations must implement appropriate controls to protect important records throughout their lifecycle, including storage, handling, retention, and disposal in accordance with legal, regulatory, and business requirements.

## Applicability

- Organizations with legal record retention obligations
- Entities subject to regulatory compliance requirements
- Businesses maintaining financial and business records
- Organizations handling customer or employee records
- Entities with contractual record-keeping requirements
- All organizations with important business documentation

## Examples (Non-Normative)

### No Records Management Program

```yaml
records_management:
  records_policy: null                  # Signal: No records management policy

  classification:
    record_types: "undefined"           # Signal: Records not classified
    retention_schedules: null           # Signal: No retention requirements
    legal_hold_process: null            # Signal: No legal hold procedures

  protection_controls:
    access_controls: null               # Signal: No access restrictions
    integrity_controls: null            # Signal: No integrity protection
    backup_procedures: null             # Signal: Records not backed up
    disaster_recovery: null             # Signal: No recovery plan

  disposal:
    secure_disposal: null               # Signal: No disposal procedures
    disposal_authorization: null        # Signal: No approval process
```

### Inadequate Records Protection

```yaml
business_records:
  financial_records:
    storage_location: "shared drive"
    access_control: "everyone"          # Signal: Unrestricted access
    backup_frequency: "irregular"       # Signal: Inconsistent backups
    retention_period: "unknown"         # Signal: No retention policy
    encryption: false                   # Signal: Not encrypted

  employee_records:
    protection_measures: "minimal"      # Signal: Inadequate protection
    access_logging: false               # Signal: No audit trail
    integrity_verification: null        # Signal: No integrity checks

  legal_records:
    contract_management: "informal"     # Signal: No formal management
    version_control: null               # Signal: No version tracking
    destruction_records: null           # Signal: No disposal tracking

  regulatory_records:
    compliance_documentation: "scattered"  # Signal: Disorganized
    retention_compliance: "uncertain"      # Signal: May not meet requirements
    retrieval_capability: "difficult"      # Signal: Poor accessibility
```

## ISO 27001:2022 Context (Informative)

- **A.5.33 Protection of records**: Requires organizations to protect records from loss, destruction, falsification, unauthorized access, and unauthorized release in accordance with legal, regulatory, contractual, and business requirements. This includes implementing appropriate storage, handling, retention, and disposal procedures.

## Related Signals

- `CSE-ISO27001-ORG-NO-LEGAL-REQUIREMENTS-031` (Legal and regulatory requirements)
- `CSE-ISO27001-ORG-NO-PII-PROTECTION-034` (Privacy and protection of PII)
- `CSE-ISO27001-TECH-NO-BACKUP` (If applicable for records backup)
