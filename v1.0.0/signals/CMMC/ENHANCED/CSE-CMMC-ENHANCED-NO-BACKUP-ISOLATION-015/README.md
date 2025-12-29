# CSE-CMMC-ENHANCED-NO-BACKUP-ISOLATION-015

**Backup Isolation from Production Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-BACKUP-ISOLATION-015` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Backup systems are not isolated from production networks to prevent compromise.

This signal indicates that ransomware or other attacks may compromise both production and backup data.

## Applicability

- Air-gapped backups
- Immutable storage
- Isolated backup networks
- Offline backup copies
- Ransomware-resistant storage

## Examples (Non-Normative)

### Connected Backup Systems

```yaml
backup_architecture:
  network_isolation: false
  air_gap: not_implemented
  immutable_storage: disabled
```

### Shared Infrastructure

```
Backup Assessment:
  Backup Network: Same as production
  Domain Joined: Yes
  Credentials: Shared with production
  Immutability: Not enabled
```

## CMMC Level 3 Context (Informative)

- **L3-CP.3.4.1e**: Isolate backup systems from production environments

## Related Signals

- `CSE-CMMC-ENHANCED-NO-RECOVERY-PLAN-016`
- `CSE-CMMC-MEDIA-NOT-ENCRYPTED-002`
