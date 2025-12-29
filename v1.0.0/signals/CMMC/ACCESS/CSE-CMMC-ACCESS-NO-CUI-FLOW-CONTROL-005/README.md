# CSE-CMMC-ACCESS-NO-CUI-FLOW-CONTROL-005

**CUI Flow Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-CUI-FLOW-CONTROL-005` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The flow of Controlled Unclassified Information (CUI) between systems, networks, or organizational boundaries is not controlled or restricted.

This signal indicates that CUI may be transmitted or shared without appropriate authorization or technical controls.

## Applicability

This signal applies to:

- Data loss prevention (DLP) systems
- Network segmentation and boundary controls
- Email and messaging systems
- File sharing platforms
- Cross-domain solutions
- API data transfer controls

## Examples (Non-Normative)

### No DLP Controls

```
Data Loss Prevention: Not configured
Email filtering: No CUI detection
USB transfer: Unrestricted
```

### Unrestricted Network Flow

```
CUI Network Segment: None defined
Cross-boundary controls: Not implemented
```

## CMMC Context (Informative)

- **AC.L2-3.1.3**: Control the flow of CUI in accordance with approved authorizations

## Related Signals

- `CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-003`
- `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001`
