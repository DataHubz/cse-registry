# CSE-CIS-MONITOR-NO-FILTERING-EGRESS-004

**Egress Traffic Filtering Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-MONITOR-NO-FILTERING-EGRESS-004` |
| Domain          | CIS                                |
| Category        | MONITOR                            |
| Control         | 13 - Network Monitoring and Defense|
| Safeguard       | 13.4                               |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks egress traffic filtering to monitor and control outbound network communications.

This signal indicates that there is no systematic filtering or inspection of traffic leaving the network, which could allow data exfiltration, command and control communications, or connections to malicious external resources.

## Applicability

This signal applies to:

- Network perimeter security controls
- Firewall egress rules and policies
- Data loss prevention (DLP) systems
- Command and control (C2) prevention
- Malware communication blocking
- Data exfiltration prevention
- Enterprise network security architecture

## Examples (Non-Normative)

### No Egress Filtering

```
Network configuration with:
- No outbound traffic restrictions
- Allow-all egress firewall rules
- No destination filtering
- No application-level controls
```

### Missing Egress Controls

```yaml
# No egress filtering configured
firewall_policy:
  egress_filtering: false
  outbound_rules: allow_all
  destination_filtering: none
  application_control: disabled
```

### Uncontrolled Outbound Traffic

```
Organization allows:
- All outbound connections
- No DNS filtering
- No IP reputation checking
- No protocol restrictions
- No bandwidth controls
```

### Egress Monitoring Absent

```
Network security lacks:
- Outbound traffic inspection
- Data exfiltration detection
- C2 communication blocking
- Unauthorized upload prevention
- Egress traffic logging
```

## What This Signal Does NOT Assert

- Whether ingress filtering is configured
- The effectiveness of existing security controls
- Whether data exfiltration has occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- Specific filtering technologies required

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 13: Network Monitoring and Defense**
- **Safeguard 13.4**: Perform traffic filtering between network segments

## Related Signals

- `CSE-CIS-MONITOR-NO-ACCESS-CONTROL-005` — Network Access Control Missing
- `CSE-CIS-MONITOR-NO-IDS-001` — Intrusion Detection Missing
- `CSE-CIS-MONITOR-NO-NETFLOW-003` — Network Traffic Collection Missing
