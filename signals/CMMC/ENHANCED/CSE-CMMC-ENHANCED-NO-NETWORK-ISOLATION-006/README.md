# CSE-CMMC-ENHANCED-NO-NETWORK-ISOLATION-006

**Network Isolation for High-Value Assets Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-NETWORK-ISOLATION-006` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

High-value assets are not isolated on dedicated network segments.

This signal indicates that critical systems may be accessible through compromised standard network segments.

## Applicability

- High-value asset identification
- Network micro-segmentation
- Isolated management networks
- Air-gapped systems
- Zero trust network access

## Examples (Non-Normative)

### No Asset Isolation

```yaml
network_isolation:
  high_value_segment: not_defined
  micro_segmentation: disabled
  management_network: shared
```

### Flat Network for Critical Assets

```
Network Assessment:
  Critical Servers: Same VLAN as workstations
  Management Access: Standard network
  Isolation: None implemented
```

## CMMC Level 3 Context (Informative)

- **L3-SC.3.13.1e**: Isolate high-value assets from other organizational systems

## Related Signals

- `CSE-CMMC-ENHANCED-NO-SECURITY-DOMAIN-002`
- `CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-002`
