# CSE-CMMC-CONFIG-NO-USER-SOFTWARE-CONTROL-006

**User-Installed Software Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-CONFIG-NO-USER-SOFTWARE-CONTROL-006` |
| Domain | CMMC |
| Category | CONFIG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Users can install software without oversight or approval.

This signal indicates that unauthorized applications may be installed by end users, potentially introducing vulnerabilities or policy violations.

## Applicability

- User workstation policies
- Software installation privileges
- Self-service software catalogs
- Endpoint management
- BYOD software controls

## Examples (Non-Normative)

### Users Have Admin Rights

```
User Account Configuration:
  Local Administrator: Yes
  UAC Enforcement: Disabled
  Software Installation: Unrestricted
```

### No Installation Monitoring

```yaml
endpoint_management:
  software_inventory: disabled
  installation_alerts: none
  approval_required: false
```

## CMMC Context (Informative)

- **CM.L2-3.4.9**: Control and monitor user-installed software

## Related Signals

- `CSE-CMMC-CONFIG-NO-AUTHORIZED-SOFTWARE-005`
- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001`
