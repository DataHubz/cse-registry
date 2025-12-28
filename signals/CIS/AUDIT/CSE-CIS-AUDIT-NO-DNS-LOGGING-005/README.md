# CSE-CIS-AUDIT-NO-DNS-LOGGING-005

**DNS Query Logging Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-AUDIT-NO-DNS-LOGGING-005` |
| Domain          | CIS                                |
| Category        | AUDIT                              |
| Control         | 08 - Audit Log Management          |
| Safeguard       | 8.5                                |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

DNS query logging is not enabled or configured across the organization's DNS infrastructure.

This signal indicates that DNS queries from internal systems are not being logged, preventing the detection of DNS-based attacks, command and control communication, data exfiltration attempts, or reconnaissance activities.

## Applicability

This signal applies to:

- Internal DNS servers (BIND, Windows DNS, dnsmasq)
- Cloud DNS services (Route 53, Azure DNS, Cloud DNS)
- DNS filtering and security services
- Recursive DNS resolvers
- Authoritative DNS servers
- DNS firewalls and security gateways
- Network security monitoring tools
- SIEM and log aggregation platforms

## Examples (Non-Normative)

### BIND Logging Disabled

```conf
# /etc/named.conf
# No query logging configured
options {
    directory "/var/named";
    // querylog not enabled
};
```

### Windows DNS Server Query Logging Off

```powershell
Get-DnsServerDiagnostics

# Output shows:
Queries                          : False
QueryLogging                     : False
EnableLoggingToFile              : False
```

### AWS Route 53 Query Logging Not Configured

```json
{
  "hostedZone": {
    "id": "/hostedzone/Z1234567890ABC",
    "name": "example.com",
    "queryLoggingConfig": null
  }
}
```

### dnsmasq Without Logging

```conf
# /etc/dnsmasq.conf
# No log-queries directive present
log-facility=/var/log/dnsmasq.log
# log-queries not enabled
```

### Cloudflare Gateway Logs Not Enabled

```yaml
# DNS filtering enabled but logging disabled
dns_filtering:
  enabled: true
  logging:
    enabled: false
    retention_days: 0
```

### Pi-hole Query Logging Disabled

```bash
$ pihole status
DNS service: active
Query logging: disabled
Privacy level: 3 (anonymous mode)
```

### Unbound Without Query Logging

```conf
# /etc/unbound/unbound.conf
server:
    verbosity: 1
    # log-queries: no (default, not logging queries)
```

## What This Signal Does NOT Assert

- Whether DNS services are operational
- Whether DNS security controls exist
- Whether malicious DNS activity has occurred
- Compliance or non-compliance with any framework
- Required log retention periods
- DNS query volume or performance impact

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 8: Audit Log Management**
- **Safeguard 8.5**: Collect detailed audit logs. Configure detailed audit logging for enterprise assets containing sensitive data

## Related Signals

- `CSE-CIS-AUDIT-NO-PROCESS-001` — Audit Log Management Process Missing
- `CSE-CIS-AUDIT-NO-URL-LOGGING-006` — URL Request Logging Missing
- `CSE-CIS-AUDIT-NO-CENTRALIZED-007` — Centralized Log Management Missing
- `CSE-CIS-AUDIT-NO-REVIEW-008` — Audit Log Review Missing
