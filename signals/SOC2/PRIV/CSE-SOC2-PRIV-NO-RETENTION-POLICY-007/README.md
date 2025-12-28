# CSE-SOC2-PRIV-NO-RETENTION-POLICY-007

**No Retention Policies**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-PRIV-NO-RETENTION-POLICY-007` |
| Domain | SOC2 |
| Category | PRIV |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not retain personal information for only as long as necessary to fulfill the stated purposes or as required by law or regulations.

## Applicability

- Data retention schedules and policies
- Automated deletion processes
- Backup retention periods
- Archive management
- Database lifecycle management
- Log retention practices
- Customer data after account closure

## Examples (Non-Normative)

### No Defined Retention Periods

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-RETENTION-POLICY-007
  severity: medium
  context:
    issue: "No retention policy for customer data"
    data_categories:
      - "Customer profiles"
      - "Transaction history"
      - "Support tickets"
      - "Marketing preferences"
    retention_status: "Indefinite retention"
  evidence:
    - "No documented retention schedule"
    - "Customer data from 2010 still in production systems"
    - "No automated deletion processes"
  recommendation: "Implement retention schedule with defined periods for each data category"
```

### Excessive Backup Retention

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-RETENTION-POLICY-007
  severity: medium
  context:
    issue: "Backup retention exceeds business need"
    production_retention: "2 years"
    backup_retention: "10 years"
    business_justification: "None provided"
  evidence:
    - "Daily backups retained for 10 years"
    - "No legal requirement for extended retention"
    - "Backups contain personal information"
  recommendation: "Align backup retention with production data retention requirements"
```

### Inactive Account Data Retention

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-RETENTION-POLICY-007
  severity: medium
  context:
    issue: "Closed account data retained indefinitely"
    scenario: "User account deletions"
    current_practice: "Soft delete with indefinite retention"
  evidence:
    - "500,000 closed accounts from past 8 years"
    - "Full personal information still accessible"
    - "No automated purge process"
  recommendation: "Implement 90-day retention after account closure, then permanent deletion"
```

## SOC 2 Context (Informative)

- **P4.2**: The entity retains personal information for only as long as necessary to fulfill the stated purposes or as required by law or regulations and thereafter appropriately disposes of such information. Retention periods are established based on the business purpose for collecting the information and compliance with applicable laws and regulations. At the end of the retention period, personal information is destroyed or anonymized.
- **GAPP Principle**: Use, Retention, and Disposal - Personal information should be retained only as long as necessary to fulfill the stated purposes or as required by law.

## Related Signals

- `CSE-SOC2-PRIV-NO-SECURE-PII-DISPOSAL-008` - Related to disposal after retention
- `CSE-SOC2-PRIV-NO-USE-LIMITATION-006` - Related to purpose limitation
- `CSE-GDPR-RETENTION-EXCESSIVE-RETENTION-001` - GDPR storage limitation
- `CSE-GDPR-RETENTION-NO-RETENTION-PERIOD-001` - GDPR retention period requirements
