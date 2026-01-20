# CSE-CMMC-ACCESS-NO-EXTERNAL-CONN-CONTROL-013

**External System Connections Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-EXTERNAL-CONN-CONTROL-013` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Connections to external systems are not verified or controlled before allowing access to organizational systems.

This signal indicates that external system connections may bypass security verification and authorization processes.

## Applicability

- Partner system interconnections
- Cloud service connections
- Third-party API integrations
- B2B data exchanges
- External vendor access

## Examples (Non-Normative)

### No External Connection Verification

```yaml
external_connections:
  partner_api:
    url: https://partner.example.com/api
    authentication: none
    security_verification: not_performed
```

### Missing Interconnection Agreement

```
External System: Vendor Portal
ISA/MOU Status: Not documented
Security Assessment: Not performed
```

## CMMC Context (Informative)

- **AC.L2-3.1.20**: Verify and control/limit connections to and use of external information systems

## Related Signals

- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001`
- `CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-002`
