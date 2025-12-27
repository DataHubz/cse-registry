# CSE-CMMC-COMMS-NO-DNS-PROTECTION-013

**DNS Protection Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-COMMS-NO-DNS-PROTECTION-013` |
| Domain | CMMC |
| Category | COMMS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

DNS resolution is not protected against spoofing or manipulation attacks.

This signal indicates that DNS responses may be forged to redirect traffic to malicious destinations.

## Applicability

- DNSSEC validation
- DNS over HTTPS (DoH)
- DNS over TLS (DoT)
- Internal DNS security
- DNS query filtering

## Examples (Non-Normative)

### No DNSSEC Validation

```yaml
dns_config:
  dnssec_validation: disabled
  dns_over_https: not_configured
  query_logging: disabled
```

### Unprotected DNS Resolution

```
DNS Configuration:
  DNSSEC: Not enabled
  DoH/DoT: Not configured
  Upstream DNS: Public without protection
```

## CMMC Context (Informative)

- **SC.L2-3.13.11**: Employ FIPS-validated cryptography when used to protect the confidentiality of CUI

## Related Signals

- `CSE-CMMC-COMMS-NO-BOUNDARY-PROTECTION-002`
- `CSE-CMMC-COMMS-WEAK-CRYPTO-004`
