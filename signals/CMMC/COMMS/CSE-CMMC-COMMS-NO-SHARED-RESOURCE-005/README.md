# CSE-CMMC-COMMS-NO-SHARED-RESOURCE-005

**Shared System Resource Protection Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-SHARED-RESOURCE-005` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Protection mechanisms for shared system resources are not implemented to prevent unauthorized data disclosure.

This signal indicates that information may leak between processes or users through shared resources.

## Applicability

- Multi-tenant environments
- Shared memory protection
- Process isolation
- Storage partitioning
- Cache protection

## Examples (Non-Normative)

### No Process Isolation

```yaml
system_isolation:
  memory_isolation: disabled
  process_separation: minimal
  cache_partitioning: none
```

### Shared Storage Without Controls

```
Multi-Tenant Configuration:
  Storage Isolation: Not implemented
  Tenant Separation: Logical only
  Cross-tenant Access: Possible
```

## CMMC Context (Informative)

- **SC.L2-3.13.4**: Prevent unauthorized and unintended information transfer via shared system resources

## Related Signals

- `CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-002`
- `CSE-CMMC-ACCESS-NO-CUI-FLOW-CONTROL-005`
