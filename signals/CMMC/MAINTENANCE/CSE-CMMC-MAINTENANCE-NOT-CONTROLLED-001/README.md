# CSE-CMMC-MAINTENANCE-NOT-CONTROLLED-001

**System Maintenance Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MAINTENANCE-NOT-CONTROLLED-001` |
| Domain | CMMC |
| Category | MAINTENANCE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

System maintenance activities are not performed according to documented procedures or schedules.

This signal indicates that maintenance may be ad-hoc, undocumented, or performed without proper authorization.

## Applicability

- Scheduled maintenance windows
- Patch management processes
- Hardware maintenance
- Software updates
- Emergency maintenance procedures

## Examples (Non-Normative)

### No Maintenance Schedule

```yaml
maintenance_program:
  schedule_defined: false
  procedures_documented: false
  authorization_required: false
```

### Undocumented Maintenance

```
Maintenance Logs:
  Last Entry: 6 months ago
  Authorization Records: None
  Procedure References: None
```

## CMMC Context (Informative)

- **MA.L2-3.7.1**: Perform maintenance on organizational systems

## Related Signals

- `CSE-CMMC-MAINTENANCE-TOOLS-NOT-CONTROLLED-002`
- `CSE-CMMC-CONFIG-NO-CHANGE-TRACKING-002`
