# CSE-CMMC-CONFIG-NO-AUTHORIZED-SOFTWARE-005

**Authorized Software Not Defined**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-CONFIG-NO-AUTHORIZED-SOFTWARE-005` |
| Domain | CMMC |
| Category | CONFIG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A list of authorized software for organizational systems is not maintained or enforced.

This signal indicates that unapproved or potentially malicious software may be installed without detection.

## Applicability

- Application whitelisting
- Software inventory management
- Installation approval processes
- Endpoint software controls
- Server application management

## Examples (Non-Normative)

### No Software Whitelist

```yaml
software_policy:
  whitelist_enabled: false
  authorized_applications: []
  enforcement: none
```

### Unrestricted Installation

```powershell
# AppLocker not configured
Get-AppLockerPolicy -Effective
# Returns: No policies configured
```

## CMMC Context (Informative)

- **CM.L2-3.4.8**: Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software

## Related Signals

- `CSE-CMMC-CONFIG-NO-BLACKLIST-008`
- `CSE-CMMC-CONFIG-NO-USER-SOFTWARE-CONTROL-006`
