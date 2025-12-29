# CSE-CMMC-MAINTENANCE-PERSONNEL-NOT-SUPERVISED-006

**Maintenance Personnel Not Supervised**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MAINTENANCE-PERSONNEL-NOT-SUPERVISED-006` |
| Domain | CMMC |
| Category | MAINTENANCE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personnel performing maintenance without required access authorizations are not supervised during maintenance activities.

This signal indicates that unauthorized individuals may have unsupervised access to systems.

## Applicability

- Vendor on-site maintenance
- Contractor system access
- Third-party repair services
- Uncleared maintenance personnel
- Temporary maintenance staff

## Examples (Non-Normative)

### Unsupervised Vendor Access

```yaml
maintenance_supervision:
  escort_required: false
  supervision_policy: not_defined
  access_logging: disabled
```

### No Escort Procedures

```
Vendor Maintenance Record:
  Technician: External Contractor
  Security Clearance: None
  Escort Assigned: No
  Supervision: None documented
```

## CMMC Context (Informative)

- **MA.L2-3.7.6**: Supervise the maintenance activities of personnel without required access authorization

## Related Signals

- `CSE-CMMC-MAINTENANCE-NOT-CONTROLLED-001`
- `CSE-CMMC-CONFIG-NO-PHYSICAL-ACCESS-CONTROL-009`
