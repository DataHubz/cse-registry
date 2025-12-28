# CSE-CIS-MONITOR-NO-IDS-001

**Intrusion Detection Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-MONITOR-NO-IDS-001`       |
| Domain          | CIS                                |
| Category        | MONITOR                            |
| Control         | 13 - Network Monitoring and Defense|
| Safeguard       | 13.1                               |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks an intrusion detection system (IDS) to monitor network traffic for malicious activity and policy violations.

This signal indicates that there is no network-based or host-based intrusion detection capability deployed to identify potential security incidents, unauthorized access attempts, or anomalous network behavior.

## Applicability

This signal applies to:

- Network perimeter security monitoring
- Internal network traffic analysis
- Host-based intrusion detection systems
- Security operations center (SOC) capabilities
- Threat detection infrastructure
- Enterprise network security architecture
- Data center and cloud network monitoring

## Examples (Non-Normative)

### No IDS Deployment

```
Network environment with:
- No network intrusion detection system (NIDS)
- No host-based intrusion detection system (HIDS)
- No signature-based detection
- No anomaly-based detection
```

### Missing IDS Infrastructure

```yaml
# No IDS configuration present
network_security:
  ids_deployed: false
  nids: none
  hids: none
  detection_capability: absent
```

### Unmonitored Network Traffic

```
Organization relies on:
- Firewall logs only
- No deep packet inspection
- No behavioral analysis
- No intrusion signatures
- Manual incident detection only
```

### IDS Not Implemented

```
Security infrastructure lacks:
- Network traffic monitoring sensors
- Intrusion detection rules
- Alert generation capabilities
- Pattern matching for known threats
- Real-time threat detection
```

## What This Signal Does NOT Assert

- Whether other security controls are in place
- The effectiveness of existing security measures
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The type of IDS technology required

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 13: Network Monitoring and Defense**
- **Safeguard 13.1**: Centralize security event alerting

## Related Signals

- `CSE-CIS-MONITOR-NO-IPS-002` — Intrusion Prevention Missing
- `CSE-CIS-MONITOR-NO-NETFLOW-003` — Network Traffic Collection Missing
- `CSE-CIS-MONITOR-NO-SIEM-007` — SIEM/Log Correlation Missing
