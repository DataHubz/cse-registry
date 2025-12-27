# CSE-CMMC-PHYSICAL-NO-VISITOR-CONTROL-002

**Visitor Access Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-PHYSICAL-NO-VISITOR-CONTROL-002` |
| Domain | CMMC |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Visitors are not authenticated, escorted, or monitored while in facilities containing CUI.

This signal indicates that unauthorized access by visitors may go undetected.

## Applicability

- Visitor registration
- Badge issuance procedures
- Escort requirements
- Secure area access
- Visitor monitoring

## Examples (Non-Normative)

### No Visitor Procedures

```yaml
visitor_management:
  sign_in_required: false
  visitor_badges: not_issued
  escort_required: false
```

### Unescorted Visitor Access

```
Visitor Log Review:
  Visitor Sign-In: Inconsistent
  Escort Assigned: Rarely
  Badge Worn: Not enforced
  Secure Area Access: Uncontrolled
```

## CMMC Context (Informative)

- **PE.L2-3.10.3**: Escort visitors and monitor visitor activity

## Related Signals

- `CSE-CMMC-PHYSICAL-NO-ACCESS-CONTROL-001`
- `CSE-CMMC-PHYSICAL-NO-ACCESS-LOGS-003`
