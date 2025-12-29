# CSE-CIS-AUDIT-NO-URL-LOGGING-006

**URL Request Logging Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-AUDIT-NO-URL-LOGGING-006` |
| Domain          | CIS                                |
| Category        | AUDIT                              |
| Control         | 08 - Audit Log Management          |
| Safeguard       | 8.6                                |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

Web proxy, firewall, or gateway systems are not configured to log URL requests from internal users and systems.

This signal indicates that HTTP/HTTPS requests are not being logged, preventing visibility into web-based threats, data exfiltration attempts, policy violations, or malicious website access.

## Applicability

This signal applies to:

- Web proxy servers (Squid, Blue Coat, Zscaler)
- Web application firewalls (WAF)
- Cloud access security brokers (CASB)
- Next-generation firewalls (NGFW)
- Secure web gateways (SWG)
- Web content filtering solutions
- Network traffic analysis tools
- Browser-based security extensions

## Examples (Non-Normative)

### Squid Proxy Without Access Logging

```conf
# /etc/squid/squid.conf
# Access logging disabled or not configured
# access_log none
cache_log /var/log/squid/cache.log
```

### NGINX Proxy Without URL Logging

```nginx
server {
    listen 8080;
    server_name proxy.example.com;

    # Access log disabled
    access_log off;

    location / {
        proxy_pass http://backend;
    }
}
```

### Firewall Without HTTP Inspection Logging

```
# Palo Alto Networks firewall
URL filtering: enabled
Logging: disabled

show log-settings
  traffic: no
  url: no
  data: no
```

### Zscaler Logging Disabled

```json
{
  "policy": "web_security",
  "url_filtering": true,
  "logging": {
    "enabled": false,
    "log_accepted": false,
    "log_blocked": true
  }
}
```

### Apache Proxy Without Combined Log Format

```apache
<VirtualHost *:80>
    ProxyPreserveHost On
    ProxyPass / http://backend/

    # No CustomLog directive for proxy requests
</VirtualHost>
```

### Cloud Gateway Minimal Logging

```yaml
# AWS Network Firewall
firewall_policy:
  stateful_engine_options:
    rule_order: "DEFAULT_ACTION_ORDER"
  logging_configuration:
    # Only logging denied requests, not all URL requests
    log_destination_configs:
      - log_type: "ALERT"
        log_destination: {}
```

### Content Filter Without Request Logging

```python
# Web filtering enabled but no request logging
content_filter = {
    "enabled": True,
    "block_categories": ["malware", "phishing"],
    "log_requests": False,
    "log_blocks_only": True
}
```

## What This Signal Does NOT Assert

- Whether web filtering or blocking is configured
- Whether malicious URLs have been accessed
- The effectiveness of content filtering
- Compliance or non-compliance with any framework
- Required log retention periods
- Privacy implications of URL logging

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 8: Audit Log Management**
- **Safeguard 8.6**: Collect DNS query audit logs. Collect DNS query logging to detect hostname lookups for known malicious domains

## Related Signals

- `CSE-CIS-AUDIT-NO-PROCESS-001` — Audit Log Management Process Missing
- `CSE-CIS-AUDIT-NO-DNS-LOGGING-005` — DNS Query Logging Missing
- `CSE-CIS-AUDIT-NO-CENTRALIZED-007` — Centralized Log Management Missing
- `CSE-CIS-AUDIT-NO-REVIEW-008` — Audit Log Review Missing
