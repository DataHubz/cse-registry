# CSE-CMMC-ENHANCED-NO-DECEPTION-005

**Deception Technologies Not Deployed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-DECEPTION-005` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Deception technologies such as honeypots and honeynets are not deployed to detect attackers.

This signal indicates that adversary reconnaissance and lateral movement may not be detected early.

## Applicability

- Honeypot systems
- Honeynets
- Decoy credentials
- Canary files
- Deception platforms

## Examples (Non-Normative)

### No Deception Deployed

```yaml
deception_technology:
  honeypots: not_deployed
  honeynets: none
  decoy_systems: not_implemented
```

### Missing Early Warning

```
Deception Assessment:
  Honeypots: 0 deployed
  Canary Tokens: None
  Decoy Credentials: Not used
```

## CMMC Level 3 Context (Informative)

- **L3-SC.3.13.3e**: Employ deception technologies to confuse and mislead adversaries

## Related Signals

- `CSE-CMMC-ENHANCED-NO-THREAT-HUNTING-004`
- `CSE-CMMC-ENHANCED-NO-APT-PROTECTION-003`
