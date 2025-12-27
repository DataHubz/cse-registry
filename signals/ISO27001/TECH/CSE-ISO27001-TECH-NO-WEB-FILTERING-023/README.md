# CSE-ISO27001-TECH-NO-WEB-FILTERING-023

**Missing Web Filtering Controls**

*New in ISO 27001:2022*

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-WEB-FILTERING-023`        |
| Domain          | ISO27001                                        |
| Category        | TECH                                            |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

Access to external websites is not managed to reduce exposure to malicious content.

This signal indicates that web filtering, URL categorization, content inspection, or safe browsing controls are not implemented to protect against web-based threats such as malware, phishing, and inappropriate content.

## Applicability

This signal applies to:

- User workstations and laptops
- Mobile devices (smartphones, tablets)
- Servers with internet access
- Proxy servers and web gateways
- DNS resolvers and filtering services
- Cloud security services
- Browser security policies
- Network firewalls with web filtering
- Secure web gateway solutions

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Web Proxy or Filtering

```bash
# Direct internet access without filtering
curl http://potentially-malicious-site.com
# No proxy configuration
# No DNS filtering
# No URL categorization
```

### Unprotected DNS Resolution

```yaml
# DNS configuration without filtering
dns:
  servers:
    - 8.8.8.8
    - 1.1.1.1
  filtering: disabled
  malware_blocking: false
  phishing_protection: false
```

### Browser Without Safe Browsing

```json
{
  "browser_policies": {
    "SafeBrowsingEnabled": false,
    "SafeBrowsingExtendedReportingEnabled": false,
    "URLBlocklist": [],
    "URLAllowlist": ["*"]
  }
}
```

### Proxy Allowing All Content

```conf
# Squid proxy without content filtering
http_access allow all
# No url_rewrite_program
# No external ACL for URL filtering
# No SSL bump for HTTPS inspection
```

### Cloud Firewall Without Web Filtering

```hcl
# AWS Network Firewall without web filtering
resource "aws_networkfirewall_firewall_policy" "policy" {
  firewall_policy {
    stateless_default_actions = ["aws:forward_to_sfe"]
    stateful_rule_group_reference {
      # No domain filtering rules
      # No threat intelligence feeds
    }
  }
}
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of web-based threats
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.23**: Web filtering - Access to external websites should be managed to reduce exposure to malicious content

This control is new in ISO 27001:2022. These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-NETWORK-SECURITY-020` — Inadequate network security
- `CSE-ISO27001-TECH-NO-MALWARE-PROTECTION-014` — Missing malware protection
- `CSE-ISO27001-PEOPLE-NO-SECURITY-AWARENESS-001` — Lack of security awareness

## Notes

Detection of this signal typically involves:

- Review of proxy server and secure web gateway configurations
- Analysis of DNS filtering and DNS security settings
- Inspection of browser security policies and extensions
- Assessment of endpoint protection web filtering features
- Examination of network firewall web filtering capabilities
- Review of URL categorization and blocking policies
- Evaluation of SSL/TLS inspection for HTTPS traffic

The presence of this signal indicates a condition that warrants review in the context of web filtering and content security requirements.
