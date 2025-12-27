# CSE-CMMC-MEDIA-NO-PHYSICAL-PROTECTION-007

**Media Physical Protection Insufficient**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MEDIA-NO-PHYSICAL-PROTECTION-007` |
| Domain | CMMC |
| Category | MEDIA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Physical protection measures for CUI-containing media are inadequate against environmental threats or tampering.

This signal indicates media may be vulnerable to damage, theft, or unauthorized modification.

## Applicability

- Fire protection for media
- Environmental controls
- Tamper-evident seals
- Secure containers
- Climate-controlled storage

## Examples (Non-Normative)

### Inadequate Environmental Protection

```yaml
media_environment:
  fire_suppression: none
  climate_control: not_monitored
  flood_protection: none
```

### No Tamper Protection

```
Media Security Assessment:
  Container Type: Standard cardboard box
  Tamper-Evident Seals: Not used
  Secure Cabinet: No
```

## CMMC Context (Informative)

- **MP.L2-3.8.1**: Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital

## Related Signals

- `CSE-CMMC-MEDIA-STORAGE-NOT-CONTROLLED-006`
- `CSE-CMMC-MEDIA-ACCESS-NOT-CONTROLLED-003`
