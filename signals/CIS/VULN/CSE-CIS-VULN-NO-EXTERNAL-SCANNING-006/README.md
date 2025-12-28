# CSE-CIS-VULN-NO-EXTERNAL-SCANNING-006

**External Vulnerability Scanning Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-VULN-NO-EXTERNAL-SCANNING-006`  |
| Domain          | CIS                                      |
| Category        | VULN                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not implemented automated external vulnerability scanning for internet-facing assets.

This signal indicates the absence of regular, automated scanning of externally accessible assets to identify vulnerabilities, misconfigurations, and security weaknesses from an attacker's perspective.

## Applicability

This signal applies to:

- Public-facing web applications and APIs
- External DNS servers
- Email servers (SMTP, IMAP, POP3)
- VPN gateways and remote access portals
- Cloud infrastructure with public endpoints
- Content Delivery Networks (CDNs)
- External load balancers
- Public SaaS application configurations
- SSL/TLS configurations
- Open ports and services

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No External Scanner Deployed

```text
No external vulnerability scanning services configured such as:
- Qualys External Scanning
- Tenable.io Web Application Scanning
- Rapid7 InsightAppSec
- Acunetix
- Burp Suite Enterprise
- OWASP ZAP automation
- HackerOne Attack Surface Management
```

### No External Scanning Schedule

```yaml
# Missing external scanning configuration
external_scanning:
  scanner: null
  schedule: null
  scan_frequency: null
  asset_discovery: false
  web_app_scanning: false
  ssl_tls_scanning: false
  dns_scanning: false
```

### Manual Penetration Testing Only

```text
External security assessment limited to:
- Annual penetration testing only
- No continuous or automated scanning
- No regular vulnerability assessments
- No ongoing attack surface monitoring
```

### Cloud Assets Without External Scanning

```hcl
# Public-facing cloud resources without external scanning
resource "aws_lb" "public" {
  name               = "public-lb"
  internal           = false
  load_balancer_type = "application"
  # No external vulnerability scanning
  # No web application firewall scanning
}

resource "aws_api_gateway_rest_api" "api" {
  name = "public-api"
  # No API security scanning
  # No OWASP API Top 10 testing
}
```

### Web Applications Without Scanning

```javascript
// Production web application without automated scanning
{
  "url": "https://app.example.com",
  "environment": "production",
  "scanning": {
    "dast": false,
    "ssl_check": false,
    "header_security": false,
    "vulnerability_scan": false
  }
}
```

### No Attack Surface Monitoring

```text
No continuous monitoring for:
- New public-facing assets (shadow IT)
- Subdomain enumeration
- Port changes
- Certificate expiration
- Security header configurations
- Exposed sensitive endpoints
```

### Missing OWASP Top 10 Scanning

```yaml
# No web application vulnerability scanning for:
web_app_vulnerabilities:
  - SQL Injection: not_tested
  - XSS: not_tested
  - CSRF: not_tested
  - Authentication_flaws: not_tested
  - Security_misconfigurations: not_tested
```

## What This Signal Does NOT Assert

- Whether vulnerabilities currently exist in external assets
- Whether manual security assessments are being performed
- Whether penetration testing is conducted
- The specific scanning tool to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 7:

- **Control 07**: Continuous Vulnerability Management
- **Safeguard 7.6**: Perform Automated Vulnerability Scans of Externally-Exposed Enterprise Assets
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Identify

**Safeguard Description:** "Perform automated vulnerability scans of externally-exposed enterprise assets using a SCAP-compliant vulnerability scanning tool. Perform scans on a monthly, or more frequent, basis."

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-VULN-NO-INTERNAL-SCANNING-005` — Internal vulnerability scanning missing
- `CSE-CIS-VULN-NO-PROCESS-001` — Vulnerability management process missing
- `CSE-CIS-ASSET-NO-EXTERNAL-INVENTORY-001` — External asset inventory missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of external vulnerability scanning tool deployments
- Assessment of scanning schedules and frequency for public assets
- Analysis of scan coverage across externally-facing asset inventory
- Examination of web application security testing (DAST)
- Review of SSL/TLS and certificate monitoring
- Assessment of attack surface management capabilities
- Review of API security scanning configurations

The presence of this signal indicates a condition that warrants review in the context of external vulnerability scanning requirements.
