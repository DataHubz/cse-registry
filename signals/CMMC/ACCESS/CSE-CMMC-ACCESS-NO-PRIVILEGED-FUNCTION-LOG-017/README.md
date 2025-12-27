# CSE-CMMC-ACCESS-NO-PRIVILEGED-FUNCTION-LOG-017

**Privileged Function Execution Not Logged**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-PRIVILEGED-FUNCTION-LOG-017` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Execution of privileged functions is not logged or audited.

This signal indicates that administrative actions and security-relevant operations may occur without accountability or traceability.

## Applicability

- Administrative console actions
- Security tool operations
- System configuration changes
- User privilege modifications
- Access control changes

## Examples (Non-Normative)

### No Privileged Action Logging

```yaml
audit_config:
  privileged_commands: false
  admin_actions: false
  security_changes: false
```

### Disabled Sudo Logging

```
# /etc/sudoers
Defaults !syslog
Defaults !logfile
```

## CMMC Context (Informative)

- **AC.L2-3.1.7**: Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs

## Related Signals

- `CSE-CMMC-AUDIT-NO-LOGGING-001`
- `CSE-CMMC-AUDIT-NO-USER-ACCOUNTABILITY-002`
