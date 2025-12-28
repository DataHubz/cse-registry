# CSE-CIS-MONITOR-NO-NETFLOW-003

**Network Traffic Collection Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-MONITOR-NO-NETFLOW-003`   |
| Domain          | CIS                                |
| Category        | MONITOR                            |
| Control         | 13 - Network Monitoring and Defense|
| Safeguard       | 13.3                               |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks network traffic flow collection and analysis capabilities for security monitoring and incident investigation.

This signal indicates that there is no systematic collection of network flow data (NetFlow, sFlow, IPFIX, or similar) that enables visibility into network communications, traffic patterns, and potential security incidents.

## Applicability

This signal applies to:

- Network traffic monitoring infrastructure
- Security information and event management (SIEM) systems
- Network behavior analysis platforms
- Incident investigation and forensics
- Threat hunting capabilities
- Enterprise network visibility
- Data exfiltration detection

## Examples (Non-Normative)

### No Flow Collection

```
Network environment with:
- No NetFlow or sFlow enabled
- No IPFIX data collection
- No network traffic metadata capture
- No flow-based analytics
```

### Missing Flow Infrastructure

```yaml
# No network flow collection configured
network_monitoring:
  netflow_enabled: false
  sflow_enabled: false
  ipfix_enabled: false
  flow_collectors: []
  traffic_analysis: none
```

### Packet Capture Only

```
Organization relies on:
- Full packet capture only (resource intensive)
- No summarized flow data
- Limited historical network visibility
- Inefficient traffic analysis
- No scalable monitoring solution
```

### Flow Data Not Collected

```
Network infrastructure lacks:
- Flow export configuration on routers/switches
- Flow collection servers
- Flow data storage
- Traffic pattern analysis tools
- Network baseline capabilities
```

## What This Signal Does NOT Assert

- Whether packet capture is performed
- The effectiveness of existing network monitoring
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The specific flow protocol required

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 13: Network Monitoring and Defense**
- **Safeguard 13.3**: Deploy a network intrusion detection solution

## Related Signals

- `CSE-CIS-MONITOR-NO-IDS-001` — Intrusion Detection Missing
- `CSE-CIS-MONITOR-NO-SIEM-007` — SIEM/Log Correlation Missing
- `CSE-CIS-MONITOR-NO-THREAT-INTEL-008` — Threat Intelligence Integration Missing
