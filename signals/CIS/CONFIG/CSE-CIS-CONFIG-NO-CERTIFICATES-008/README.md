# CSE-CIS-CONFIG-NO-CERTIFICATES-008

**Certificate Management Missing**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-CIS-CONFIG-NO-CERTIFICATES-008`    |
| Domain          | CIS                                     |
| Category        | CONFIG                                  |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

The organization lacks a formal process for managing digital certificates, including certificate issuance, renewal, revocation, and inventory management for unencrypted network traffic.

This signal indicates that certificate lifecycle management may be ad-hoc, leading to expired certificates, unauthorized certificate usage, or lack of visibility into certificate inventory.

## Applicability

This signal applies to:

- SSL/TLS certificates for web services
- Code signing certificates
- Email certificates (S/MIME)
- Client authentication certificates
- Internal CA infrastructure
- Certificate inventory and tracking
- Certificate renewal processes
- Certificate revocation procedures

## Examples (Non-Normative)

### No Certificate Inventory

```text
# No centralized certificate tracking
- Certificates issued manually without records
- No expiration tracking system
- Unknown number of active certificates
- No ownership assignment
```

### Expired Certificates in Production

```bash
# Web server with expired certificate
$ openssl s_client -connect example.com:443 -servername example.com
...
Verify return code: 10 (certificate has expired)
depth=0 CN = example.com
verify error:num=10:certificate has expired
notAfter=Jan 15 23:59:59 2024 GMT
```

### Self-Signed Certificates in Use

```yaml
# Application using self-signed certificates
web_service:
  certificate:
    type: "self-signed"
    issuer: "localhost"
    trusted_ca: false
    expiration_monitoring: false
    renewal_process: "none"
```

## What This Signal Does NOT Assert

- Whether current certificates are valid
- The appropriate certificate authority to use
- Whether compensating controls exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to:

- **CIS Control 04**: Secure Configuration of Enterprise Assets and Software
- **Safeguard 4.8**: Uninstall or Disable Unnecessary Services on Enterprise Assets and Software (IG2)
- **Asset Type**: Applications
- **Security Function**: Protect

## Related Signals

- `CSE-CIS-CONFIG-NO-SECURE-PROCESS-001` — Secure Configuration Process Missing
- `CSE-CIS-CONFIG-NO-NETWORK-SECURITY-002` — Network Infrastructure Security Configuration Missing
