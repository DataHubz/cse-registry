# CSE-CMMC-PHYSICAL-NO-DEVICE-CONTROL-004

**Physical Access Devices Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-PHYSICAL-NO-DEVICE-CONTROL-004` |
| Domain | CMMC |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Physical access devices such as keys, badges, and combinations are not managed throughout their lifecycle.

This signal indicates that lost or compromised access devices may provide unauthorized physical access.

## Applicability

- Key management
- Badge inventory and tracking
- Combination management
- Access card lifecycle
- Biometric enrollment management

## Examples (Non-Normative)

### No Key Control

```yaml
key_management:
  key_inventory: not_maintained
  key_sign_out_log: none
  key_return_verification: none
```

### Unmanaged Badge Lifecycle

```
Badge Management Review:
  Active Badges: 500
  Employees: 300
  Badge Inventory: Not reconciled
  Lost Badge Process: Informal
```

## CMMC Context (Informative)

- **PE.L2-3.10.5**: Control and manage physical access devices

## Related Signals

- `CSE-CMMC-PHYSICAL-NO-ACCESS-CONTROL-001`
- `CSE-CMMC-IDENTITY-NO-IDENTIFIER-MANAGEMENT-006`
