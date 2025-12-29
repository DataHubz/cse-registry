# CSE-CMMC-IDENTITY-OBSCURED-FEEDBACK-MISSING-011

**Authentication Feedback Not Obscured**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-IDENTITY-OBSCURED-FEEDBACK-MISSING-011` |
| Domain | CMMC |
| Category | IDENTITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Authentication information is displayed in clear text during entry rather than being obscured.

This signal indicates that passwords or other credentials may be visible to shoulder surfing or screen capture.

## Applicability

- Web login forms
- Application authentication dialogs
- Command-line password entry
- Mobile app authentication
- Kiosk and public terminal logins

## Examples (Non-Normative)

### Visible Password Field

```html
<!-- Password displayed as plain text -->
<input type="text" name="password" />
<!-- Should be type="password" -->
```

### Echoed Command Line Password

```bash
# Password visible during entry
read password
echo "Password: $password"
# Should use: read -s password
```

## CMMC Context (Informative)

- **IA.L2-3.5.11**: Obscure feedback of authentication information

## Related Signals

- `CSE-CMMC-IDENTITY-WEAK-PASSWORD-002`
- `CSE-CMMC-IDENTITY-NO-MFA-001`
