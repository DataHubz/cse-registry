# CSE-CMMC-MEDIA-ACCESS-NOT-CONTROLLED-003

**Media Access Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MEDIA-ACCESS-NOT-CONTROLLED-003` |
| Domain | CMMC |
| Category | MEDIA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Access to media containing CUI is not restricted to authorized individuals.

This signal indicates that sensitive media may be accessible to unauthorized personnel.

## Applicability

- Physical media storage locations
- Digital media access controls
- Backup media access
- Archive storage access
- Removable media handling

## Examples (Non-Normative)

### Unsecured Media Storage

```yaml
media_storage:
  location: Open office area
  access_control: none
  logging: disabled
```

### No Access Restrictions

```
Media Cabinet Assessment:
  Lock: None
  Access List: Not maintained
  Sign-out Log: Not used
```

## CMMC Context (Informative)

- **MP.L2-3.8.1**: Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital

## Related Signals

- `CSE-CMMC-MEDIA-NO-SANITIZATION-001`
- `CSE-CMMC-MEDIA-NOT-ENCRYPTED-002`
