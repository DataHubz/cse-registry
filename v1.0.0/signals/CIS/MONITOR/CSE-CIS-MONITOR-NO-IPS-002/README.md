# CSE-CIS-MONITOR-NO-IPS-002

**Intrusion Prevention Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-MONITOR-NO-IPS-002`       |
| Domain          | CIS                                |
| Category        | MONITOR                            |
| Control         | 13 - Network Monitoring and Defense|
| Safeguard       | 13.2                               |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks an intrusion prevention system (IPS) to actively block or prevent detected threats from compromising network resources.

This signal indicates that there is no automated capability to take preventive action against identified malicious network traffic, attacks, or policy violations in real-time.

## Applicability

This signal applies to:

- Network perimeter defense systems
- Internal network segmentation points
- Host-based intrusion prevention systems
- Active threat blocking capabilities
- Automated incident response systems
- Enterprise network security architecture
- Data center and cloud network protection

## Examples (Non-Normative)

### No IPS Deployment

```
Network environment with:
- No network intrusion prevention system (NIPS)
- No host-based intrusion prevention system (HIPS)
- No automated threat blocking
- No inline traffic filtering
```

### Missing IPS Infrastructure

```yaml
# No IPS configuration present
network_security:
  ips_deployed: false
  nips: none
  hips: none
  prevention_capability: absent
  inline_blocking: false
```

### Detection Without Prevention

```
Organization has:
- Intrusion detection only (alerts only)
- No automated blocking
- Manual response required for all threats
- No real-time attack prevention
- Reactive security posture only
```

### IPS Not Implemented

```
Security infrastructure lacks:
- Inline network traffic inspection
- Automated threat blocking rules
- Real-time attack prevention
- Signature-based blocking
- Behavioral-based prevention
```

## What This Signal Does NOT Assert

- Whether intrusion detection systems are deployed
- The effectiveness of existing security controls
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The type of IPS technology required

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 13: Network Monitoring and Defense**
- **Safeguard 13.2**: Deploy a host-based intrusion prevention solution

## Related Signals

- `CSE-CIS-MONITOR-NO-IDS-001` — Intrusion Detection Missing
- `CSE-CIS-MONITOR-NO-NETFLOW-003` — Network Traffic Collection Missing
- `CSE-CIS-MONITOR-NO-FILTERING-EGRESS-004` — Egress Traffic Filtering Missing
