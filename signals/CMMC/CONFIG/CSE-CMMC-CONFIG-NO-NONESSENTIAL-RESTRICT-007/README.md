# CSE-CMMC-CONFIG-NO-NONESSENTIAL-RESTRICT-007

**Nonessential Functions Not Restricted**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-CONFIG-NO-NONESSENTIAL-RESTRICT-007` |
| Domain | CMMC |
| Category | CONFIG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Nonessential programs, functions, ports, protocols, and services are not disabled or restricted.

This signal indicates that the attack surface may be unnecessarily expanded due to unused functionality remaining enabled.

## Applicability

- System hardening
- Service minimization
- Port and protocol management
- Feature restriction
- Default installation cleanup

## Examples (Non-Normative)

### Unnecessary Services Running

```bash
# Telnet service enabled when not required
systemctl status telnet
# Active: active (running)
```

### Excessive Open Ports

```
Port Scan Results:
  21/tcp  open  ftp        (Not required)
  23/tcp  open  telnet     (Not required)
  80/tcp  open  http       (Required)
  443/tcp open  https      (Required)
  3389/tcp open rdp        (Not required)
```

## CMMC Context (Informative)

- **CM.L2-3.4.7**: Restrict, disable, or prevent the use of nonessential programs, functions, ports, protocols, and services

## Related Signals

- `CSE-CMMC-CONFIG-INSECURE-DEFAULT-001`
- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
