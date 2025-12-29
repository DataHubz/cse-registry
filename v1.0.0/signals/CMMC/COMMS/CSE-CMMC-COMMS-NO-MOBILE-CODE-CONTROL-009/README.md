# CSE-CMMC-COMMS-NO-MOBILE-CODE-CONTROL-009

**Mobile Code Execution Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-MOBILE-CODE-CONTROL-009` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Mobile code such as JavaScript, ActiveX, and macros is not controlled or restricted.

This signal indicates that malicious mobile code may execute without user awareness or authorization.

## Applicability

- Browser security settings
- Office macro restrictions
- Plugin and extension controls
- Script execution policies
- Active content filtering

## Examples (Non-Normative)

### Unrestricted Macro Execution

```yaml
office_security:
  macro_execution: enabled
  macro_notification: disabled
  trusted_locations: all
```

### No Browser Restrictions

```
Browser Configuration:
  JavaScript: Unrestricted
  ActiveX: Allowed
  Plugin Auto-install: Enabled
  Pop-ups: Allowed
```

## CMMC Context (Informative)

- **SC.L2-3.13.13**: Control and monitor the use of mobile code

## Related Signals

- `CSE-CMMC-INTEGRITY-NO-MALWARE-PROTECTION-001`
- `CSE-CMMC-CONFIG-NO-AUTHORIZED-SOFTWARE-005`
