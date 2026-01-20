# CSE-CMMC-MEDIA-NO-CUI-MARKING-005

**CUI Media Not Marked**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MEDIA-NO-CUI-MARKING-005` |
| Domain | CMMC |
| Category | MEDIA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Media containing Controlled Unclassified Information is not properly marked or labeled.

This signal indicates that CUI media may not be identifiable, leading to improper handling or protection.

## Applicability

- Physical media labels
- Digital file headers
- Storage container markings
- Backup tape labels
- Document classification markings

## Examples (Non-Normative)

### Unmarked CUI Media

```
Media Audit:
  Drive ID: SRV-BACKUP-01
  Contains CUI: Yes
  CUI Marking: None
  Classification Label: Missing
```

### No Marking Standard

```yaml
media_marking:
  cui_label_required: false
  marking_standard: not_defined
  verification_process: none
```

## CMMC Context (Informative)

- **MP.L2-3.8.4**: Mark media with necessary CUI markings and distribution limitations

## Related Signals

- `CSE-CMMC-MEDIA-ACCESS-NOT-CONTROLLED-003`
- `CSE-CMMC-ACCESS-NO-CUI-FLOW-CONTROL-005`
