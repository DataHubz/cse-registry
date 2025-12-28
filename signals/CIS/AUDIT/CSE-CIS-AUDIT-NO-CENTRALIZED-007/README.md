# CSE-CIS-AUDIT-NO-CENTRALIZED-007

**Centralized Log Management Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-AUDIT-NO-CENTRALIZED-007` |
| Domain          | CIS                                |
| Category        | AUDIT                              |
| Control         | 08 - Audit Log Management          |
| Safeguard       | 8.7                                |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks a centralized log management system or SIEM platform to aggregate and analyze logs from distributed systems.

This signal indicates that logs remain dispersed across individual systems without central collection, making it difficult to correlate events, detect distributed attacks, perform comprehensive security monitoring, or conduct effective incident response.

## Applicability

This signal applies to:

- Security information and event management (SIEM) platforms
- Log aggregation and centralization tools
- Cloud-based logging services (CloudWatch, Azure Monitor, Stackdriver)
- Open-source log management (ELK Stack, Graylog, Fluentd)
- Syslog servers and forwarders
- Enterprise monitoring platforms
- Security operations centers (SOC)
- Distributed system architectures

## Examples (Non-Normative)

### No SIEM Platform Deployed

```
Organization status:
- 150+ servers generating logs locally
- No centralized log collection
- No correlation engine
- Each system maintains own logs
- Manual log review per system required
```

### Syslog Not Configured

```bash
# /etc/rsyslog.conf - No remote logging configured
$ grep "@@" /etc/rsyslog.conf
# No results - not forwarding to central syslog server

# Systems logging only locally
*.* /var/log/messages
```

### Cloud Logs Not Aggregated

```json
{
  "aws_accounts": [
    {
      "account_id": "123456789012",
      "cloudtrail": {
        "enabled": true,
        "destination": "local_s3_bucket"
      },
      "central_logging": false
    }
  ],
  "log_aggregation": null
}
```

### Application Logs Scattered

```yaml
# Microservices architecture without centralized logging
services:
  - name: api-service
    logging: stdout
    log_storage: local
  - name: auth-service
    logging: /var/log/auth.log
    log_storage: local
  - name: payment-service
    logging: /app/logs/payment.log
    log_storage: local

centralized_logging: false
```

### Windows Event Forwarding Not Configured

```powershell
Get-WinEvent -ListLog ForwardedEvents

# Output:
LogName: ForwardedEvents
IsEnabled: False
# No events being forwarded to central collector
```

### ELK Stack Not Deployed

```
Log Infrastructure Status:
- Elasticsearch: not installed
- Logstash: not installed
- Kibana: not installed
- Filebeat/agents: not deployed
- Systems: logging to local disk only
```

### Docker Containers Without Log Driver

```yaml
# docker-compose.yml
services:
  web:
    image: nginx
    # No logging driver configured - defaults to json-file
    # Logs remain on local docker host
    ports:
      - "80:80"
```

## What This Signal Does NOT Assert

- Whether individual systems are generating logs
- The quality or completeness of local logs
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- Required SIEM platform or vendor
- Cost implications of centralized logging

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 8: Audit Log Management**
- **Safeguard 8.7**: Collect URL request audit logs. Collect URL request logging to detect malicious content for stored data

## Related Signals

- `CSE-CIS-AUDIT-NO-PROCESS-001` — Audit Log Management Process Missing
- `CSE-CIS-AUDIT-NO-ADEQUATE-STORAGE-002` — Audit Log Storage Inadequate
- `CSE-CIS-AUDIT-NO-REVIEW-008` — Audit Log Review Missing
