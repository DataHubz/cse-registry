# CSE-CMMC-ACCESS-NO-PRIVACY-NOTICE-008

**Privacy and Security Notice Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-PRIVACY-NOTICE-008` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems do not display approved privacy and security notices before granting access.

This signal indicates that users may not be informed of usage terms, monitoring policies, or acceptable use requirements before accessing systems.

## Applicability

- Operating system login screens
- Application login pages
- SSH and remote access banners
- Network device console access
- VPN client connections

## Examples (Non-Normative)

### No Login Banner

```
# /etc/ssh/sshd_config
Banner none
```

### Missing Terms Acceptance

```html
<!-- Login form without notice -->
<form action="/login">
  <input name="username">
  <input name="password" type="password">
  <button>Login</button>
  <!-- No terms acknowledgment -->
</form>
```

## CMMC Context (Informative)

- **AC.L2-3.1.9**: Provide privacy and security notices consistent with applicable CUI rules

## Related Signals

- `CSE-CMMC-ACCESS-NO-AUTHORIZED-ACCESS-CONTROL-020`
