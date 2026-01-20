# CSE-CIS-AUDIT-NO-TIMESTAMPS-003

**Audit Log Timestamps Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-AUDIT-NO-TIMESTAMPS-003`  |
| Domain          | CIS                                |
| Category        | AUDIT                              |
| Control         | 08 - Audit Log Management          |
| Safeguard       | 8.3                                |
| IG Level        | IG1                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

Audit logs are missing standardized timestamps or time synchronization is not configured across logging systems.

This signal indicates that log entries lack accurate or consistent timestamps, making it difficult to correlate events across systems, establish timelines for security incidents, or conduct effective forensic investigations.

## Applicability

This signal applies to:

- System and application log files
- Network device logs
- Security tool logs (SIEM, IDS/IPS, firewalls)
- Database audit logs
- Cloud service logs
- Container and orchestration platform logs
- Time synchronization infrastructure (NTP)
- Cross-system log correlation

## Examples (Non-Normative)

### Missing Timestamps in Logs

```
Login successful for user admin
File deleted: /etc/passwd.bak
Connection established from 192.168.1.100
# No timestamps present
```

### Inconsistent Time Formats

```
2024-03-15 14:23:45 - Server A event
Mar 15 2:23:45 PM - Server B event
1710512625 - Server C event (Unix epoch)
# Different formats prevent correlation
```

### NTP Not Configured

```bash
$ systemctl status ntpd
Unit ntpd.service could not be found.

$ timedatectl show
NTP=no
NTPSynchronized=no
```

### System Clock Drift

```
Server A: 2024-03-15 14:23:45
Server B: 2024-03-15 14:31:12
Server C: 2024-03-15 13:58:33
# 33-minute drift between systems
```

### Application Logs Without Time Zone

```json
{
  "event": "login_attempt",
  "user": "admin",
  "timestamp": "2024-03-15 14:23:45",
  "timezone": null
}
```

### Syslog Without Precision

```
Mar 15 14:23 host kernel: event occurred
# Missing seconds, milliseconds
```

## What This Signal Does NOT Assert

- Whether logs are being generated
- The content quality of log entries
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- The accuracy of system clocks
- Required time synchronization protocols

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 8: Audit Log Management**
- **Safeguard 8.3**: Ensure that logging destinations maintain adequate storage to comply with the enterprise's audit log management process

## Related Signals

- `CSE-CIS-AUDIT-NO-PROCESS-001` — Audit Log Management Process Missing
- `CSE-CIS-AUDIT-NO-DETAILED-LOGGING-004` — Detailed Command Logging Missing
- `CSE-CIS-AUDIT-NO-CENTRALIZED-007` — Centralized Log Management Missing
