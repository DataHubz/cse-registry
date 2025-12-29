# CSE-CIS-MONITOR-NO-SIEM-007

**SIEM/Log Correlation Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-MONITOR-NO-SIEM-007`      |
| Domain          | CIS                                |
| Category        | MONITOR                            |
| Control         | 13 - Network Monitoring and Defense|
| Safeguard       | 13.7                               |
| IG Level        | IG3                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks a Security Information and Event Management (SIEM) system or equivalent capability to collect, correlate, and analyze security events from multiple sources.

This signal indicates that there is no centralized platform for aggregating and analyzing security logs, which limits the ability to detect complex attacks, identify patterns across systems, and conduct effective incident investigation.

## Applicability

This signal applies to:

- Enterprise security operations centers (SOC)
- Security event monitoring and analysis
- Incident detection and response capabilities
- Compliance and audit requirements
- Threat detection and hunting programs
- Multi-source log correlation
- Advanced security analytics

## Examples (Non-Normative)

### No SIEM Deployment

```
Security environment with:
- No centralized log aggregation
- No event correlation engine
- No security analytics platform
- Manual log review only
```

### Missing SIEM Infrastructure

```yaml
# No SIEM configuration present
security_monitoring:
  siem_deployed: false
  log_correlation: none
  event_aggregation: disabled
  analytics_platform: absent
  threat_detection: manual
```

### Siloed Log Management

```
Organization has:
- Individual system logs only
- No cross-system correlation
- No unified security view
- Limited incident visibility
- Reactive security posture
```

### SIEM Not Implemented

```
Security infrastructure lacks:
- Centralized log collection
- Real-time event correlation
- Automated alerting rules
- Security dashboards
- Historical event analysis
- Threat intelligence integration
- Incident investigation tools
```

## What This Signal Does NOT Assert

- Whether individual systems generate logs
- The effectiveness of existing monitoring
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The specific SIEM platform required

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 13: Network Monitoring and Defense**
- **Safeguard 13.7**: Deploy a host-based intrusion detection solution

## Related Signals

- `CSE-CIS-AUDIT-NO-PROCESS-001` — Audit Log Management Process Missing
- `CSE-CIS-MONITOR-NO-IDS-001` — Intrusion Detection Missing
- `CSE-CIS-MONITOR-NO-THREAT-INTEL-008` — Threat Intelligence Integration Missing
