# CSE-CMMC-MAINTENANCE-REMOTE-NOT-AUTHORIZED-005

**Remote Maintenance Not Authorized**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MAINTENANCE-REMOTE-NOT-AUTHORIZED-005` |
| Domain | CMMC |
| Category | MAINTENANCE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Remote maintenance connections are established without proper authorization or authentication.

This signal indicates that unauthorized parties may perform remote maintenance activities.

## Applicability

- Remote maintenance authorization
- Vendor access approval
- MFA for remote maintenance
- Just-in-time access provisioning
- Maintenance access controls

## Examples (Non-Normative)

### No Authorization Required

```yaml
remote_maintenance_access:
  authorization_workflow: none
  approval_required: false
  mfa_enabled: false
```

### Persistent Vendor Access

```
Vendor Remote Access:
  Account: vendor_support
  Access Type: Permanent
  MFA: Not required
  Session Approval: Not required
```

## CMMC Context (Informative)

- **MA.L2-3.7.5**: Require multifactor authentication to establish nonlocal maintenance sessions via external network connections and terminate such connections when nonlocal maintenance is complete

## Related Signals

- `CSE-CMMC-MAINTENANCE-REMOTE-NOT-MONITORED-004`
- `CSE-CMMC-IDENTITY-NO-MFA-001`
