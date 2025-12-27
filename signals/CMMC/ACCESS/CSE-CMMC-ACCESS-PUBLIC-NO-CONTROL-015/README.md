# CSE-CMMC-ACCESS-PUBLIC-NO-CONTROL-015

**Publicly Accessible System Content Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-PUBLIC-NO-CONTROL-015` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Content posted on publicly accessible systems is not reviewed or controlled before publication.

This signal indicates that sensitive or unauthorized information may be inadvertently disclosed through public-facing systems.

## Applicability

- Public websites
- External-facing APIs
- Public file sharing services
- Social media accounts
- Press releases and public documents

## Examples (Non-Normative)

### No Content Review Process

```yaml
content_publishing:
  review_required: false
  approval_workflow: none
  cui_scanning: disabled
```

### Direct Public Access

```
Public Web Server:
  Content Review: Not implemented
  CUI Detection: Disabled
  Publishing: Direct upload allowed
```

## CMMC Context (Informative)

- **AC.L2-3.1.22**: Control CUI posted or processed on publicly accessible information systems

## Related Signals

- `CSE-CMMC-ACCESS-NO-CUI-FLOW-CONTROL-005`
- `CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-002`
