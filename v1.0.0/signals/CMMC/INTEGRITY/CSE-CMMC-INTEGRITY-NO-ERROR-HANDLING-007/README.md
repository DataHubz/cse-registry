# CSE-CMMC-INTEGRITY-NO-ERROR-HANDLING-007

**Secure Error Handling Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-INTEGRITY-NO-ERROR-HANDLING-007` |
| Domain | CMMC |
| Category | INTEGRITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Error messages reveal sensitive system information or implementation details.

This signal indicates that error handling may expose information useful to attackers.

## Applicability

- Web application errors
- API error responses
- Database error messages
- Stack trace exposure
- Debug information disclosure

## Examples (Non-Normative)

### Verbose Error Message

```
Error: Connection to database failed
Server: db.internal.corp:3306
Username: app_user
Password: [masked]
Stack trace: /var/www/app/db/connector.py line 45
```

### Debug Mode in Production

```yaml
application_config:
  environment: production
  debug_mode: true
  detailed_errors: enabled
```

## CMMC Context (Informative)

- **SI.L2-3.14.7**: Identify unauthorized use of organizational systems

## Related Signals

- `CSE-CMMC-INTEGRITY-NO-INPUT-VALIDATION-006`
- `CSE-CMMC-CONFIG-INSECURE-DEFAULT-001`
