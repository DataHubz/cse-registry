# CSE-GEN-CRYPTO-NO-CERTIFICATE-MGMT-005

**Certificate Management Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-CRYPTO-NO-CERTIFICATE-MGMT-005` |
| Domain          | GEN (General)                            |
| Category        | CRYPTO                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No process for managing digital certificates including issuance, renewal, and revocation.

This signal indicates the absence of formalized certificate lifecycle management practices, which can lead to expired certificates causing service outages, use of untrusted or self-signed certificates in production, inability to revoke compromised certificates, and lack of visibility into certificate inventory across the organization.

## Applicability

This signal applies to:

- Web servers and APIs using TLS/SSL
- Internal PKI infrastructure
- Code signing certificates
- Client authentication certificates
- Email encryption certificates (S/MIME)
- VPN and network device certificates
- Container registry authentication
- Service mesh mutual TLS configurations
- IoT device certificates
- Mobile device management (MDM) certificates

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

```nginx
# Nginx with no certificate expiration monitoring
server {
    listen 443 ssl;
    server_name example.com;
    ssl_certificate /etc/ssl/certs/example.com.crt;
    ssl_certificate_key /etc/ssl/private/example.com.key;
    # No automation or monitoring for certificate renewal
}
```

```yaml
# Kubernetes ingress with self-signed certificate
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  tls:
  - hosts:
    - example.com
    secretName: self-signed-cert  # Self-signed, no renewal process
```

```python
# Application bypassing certificate validation
import requests
response = requests.get('https://api.example.com', verify=False)
# Disabling certificate validation - no cert management
```

```terraform
# AWS ACM certificate without lifecycle management
resource "aws_acm_certificate" "cert" {
  domain_name       = "example.com"
  validation_method = "DNS"
  # No automated renewal notification or process
}
```

```java
// Hardcoded certificate without expiration check
KeyStore keyStore = KeyStore.getInstance("JKS");
FileInputStream fis = new FileInputStream("cert.jks");
keyStore.load(fis, "password".toCharArray());
// No certificate expiration monitoring
```

Organizational indicators:

- No certificate inventory or asset database
- No automated certificate expiration monitoring
- No defined certificate renewal procedures
- No process for certificate revocation
- No documentation of certificate authorities used
- No validation of certificate chains
- No automated certificate deployment process
- Self-signed certificates in production environments
- Expired certificates discovered during outages

## What This Signal Does NOT Assert

- Severity or exploitability in a specific context
- Whether certificates have been compromised
- Whether certificate expiration has caused outages
- Compliance or non-compliance with any framework
- Required certificate authority or validation method
- Specific certificate renewal frequency

## Related Signals

- `CSE-GEN-CRYPTO-NO-ENCRYPTION-TRANSIT-002` — Encryption in transit missing
- `CSE-GEN-CRYPTO-WEAK-ALGORITHMS-004` — Weak cryptographic algorithms used
- `CSE-GEN-CRYPTO-NO-KEY-MGMT-003` — Cryptographic key management missing
- `CSE-GEN-CONFIG-SELF-SIGNED-CERT-001` — Self-signed certificate in production (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: Control 3.11 (Encrypt sensitive data at rest), 13.3 (Deploy an automated software update mechanism)
- **ISO 27001**: A.10.1.2 (Key management), A.14.1.2 (Securing application services on public networks)
- **NIST CSF**: PR.DS-2 (Data-in-transit is protected), ID.AM-2 (Software platforms and applications are inventoried)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning for certificates across infrastructure
- Checking certificate expiration dates
- Identifying self-signed certificates in production
- Reviewing certificate issuance and renewal processes
- Analyzing certificate chain validation
- Checking for certificate revocation list (CRL) or OCSP configurations
- Reviewing automation for certificate deployment
- Examining certificate monitoring and alerting systems
- Assessing certificate inventory and tracking mechanisms

Common certificate management requirements:

- Maintain inventory of all certificates and their locations
- Monitor certificates for expiration (typically 30-90 day warnings)
- Automate certificate renewal where possible (e.g., Let's Encrypt, ACME)
- Use trusted certificate authorities for production systems
- Implement certificate revocation processes
- Validate certificate chains and trust stores
- Use appropriate certificate types for use cases
- Document emergency certificate replacement procedures
- Enforce minimum key lengths (RSA 2048-bit minimum)

The presence of this signal indicates a systemic gap in certificate lifecycle management that may lead to service disruptions or security vulnerabilities.
