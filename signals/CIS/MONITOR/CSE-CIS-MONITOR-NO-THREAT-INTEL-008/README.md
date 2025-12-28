# CSE-CIS-MONITOR-NO-THREAT-INTEL-008

**Threat Intelligence Integration Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-MONITOR-NO-THREAT-INTEL-008` |
| Domain          | CIS                                |
| Category        | MONITOR                            |
| Control         | 13 - Network Monitoring and Defense|
| Safeguard       | 13.8                               |
| IG Level        | IG3                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks integration of external threat intelligence feeds into security monitoring and defense systems.

This signal indicates that there is no systematic use of threat intelligence data (indicators of compromise, threat actor TTPs, vulnerability information) to enhance detection capabilities, prioritize responses, and proactively defend against known threats.

## Applicability

This signal applies to:

- Security information and event management (SIEM) platforms
- Intrusion detection and prevention systems
- Firewall and network security controls
- Endpoint detection and response (EDR) systems
- Security operations center (SOC) operations
- Threat hunting programs
- Incident response capabilities

## Examples (Non-Normative)

### No Threat Intelligence

```
Security environment with:
- No threat feed subscriptions
- No indicator of compromise (IoC) integration
- No threat actor tracking
- Limited threat awareness
```

### Missing Threat Intel Integration

```yaml
# No threat intelligence configured
threat_intelligence:
  feeds_integrated: false
  ioc_sources: []
  threat_sharing: disabled
  intel_platform: none
  automated_blocking: false
```

### Isolated Security Operations

```
Organization operates:
- Without external threat context
- No industry threat sharing
- No proactive threat hunting
- Reactive detection only
- Limited threat visibility
```

### Threat Intelligence Not Implemented

```
Security infrastructure lacks:
- Threat feed ingestion
- IoC matching capabilities
- Threat correlation with events
- Automated indicator blocking
- Threat intelligence platforms (TIP)
- STIX/TAXII integration
- Threat actor profiling
```

## What This Signal Does NOT Assert

- Whether other security monitoring exists
- The effectiveness of existing detection
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The specific threat intelligence sources required

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 13: Network Monitoring and Defense**
- **Safeguard 13.8**: Deploy a network intrusion prevention solution

## Related Signals

- `CSE-CIS-MONITOR-NO-SIEM-007` — SIEM/Log Correlation Missing
- `CSE-CIS-MONITOR-NO-IDS-001` — Intrusion Detection Missing
- `CSE-CIS-MONITOR-NO-IPS-002` — Intrusion Prevention Missing
