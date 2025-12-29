# CSE-CMMC-MAINTENANCE-MEDIA-NOT-SANITIZED-003

**Maintenance Media Not Sanitized**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MAINTENANCE-MEDIA-NOT-SANITIZED-003` |
| Domain | CMMC |
| Category | MAINTENANCE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Media containing diagnostic or maintenance data is not sanitized before reuse or disposal.

This signal indicates that sensitive information captured during maintenance may be exposed.

## Applicability

- Diagnostic log storage
- Memory dumps
- Backup media from maintenance
- USB drives used for diagnostics
- Vendor-provided maintenance media

## Examples (Non-Normative)

### Unsanitized Diagnostic Media

```yaml
maintenance_media:
  sanitization_required: false
  sanitization_verification: none
  media_tracking: not_implemented
```

### Retained Sensitive Data

```
Maintenance USB Drive Review:
  Memory Dumps: Present
  Configuration Files: Present
  Credentials: Found
  Sanitization Status: Never performed
```

## CMMC Context (Informative)

- **MA.L2-3.7.3**: Ensure equipment removed for off-site maintenance is sanitized of any CUI

## Related Signals

- `CSE-CMMC-MEDIA-NO-SANITIZATION-001`
- `CSE-CMMC-MAINTENANCE-NOT-CONTROLLED-001`
