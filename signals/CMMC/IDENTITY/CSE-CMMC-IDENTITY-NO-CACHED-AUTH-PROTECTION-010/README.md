# CSE-CMMC-IDENTITY-NO-CACHED-AUTH-PROTECTION-010

**Cached Authenticators Not Protected**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-IDENTITY-NO-CACHED-AUTH-PROTECTION-010` |
| Domain | CMMC |
| Category | IDENTITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Cached authentication credentials are not protected from unauthorized access or extraction.

This signal indicates that stored credentials may be vulnerable to theft through credential dumping attacks.

## Applicability

- Windows credential manager
- Browser password storage
- SSH key protection
- Application credential caches
- Service account credentials

## Examples (Non-Normative)

### Unprotected Credential Cache

```powershell
# Cached credentials accessible
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon"
# DefaultPassword visible in plain text
```

### Unencrypted SSH Keys

```bash
# Private key without passphrase
ssh-keygen -y -P "" -f ~/.ssh/id_rsa
# Key accessible without protection
```

## CMMC Context (Informative)

- **IA.L2-3.5.10**: Store and transmit only cryptographically-protected passwords

## Related Signals

- `CSE-GEN-SECRETS-PLAINTEXT-001`
- `CSE-CMMC-IDENTITY-WEAK-PASSWORD-002`
