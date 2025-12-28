# CSE-SOC2-CC-NO-BOUNDARY-PROTECTION-023

**No External Threat Protection**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-BOUNDARY-PROTECTION-023` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not implement logical access security measures to protect against threats from sources outside its system boundaries.

## Applicability

- Firewalls and network security appliances
- Network perimeter controls
- Intrusion detection and prevention systems
- DMZ and segmentation implementations

## Examples (Non-Normative)

### Missing Firewall Protection

```yaml
finding:
  type: CSE-SOC2-CC-NO-BOUNDARY-PROTECTION-023
  severity: critical
  description: Production network lacks perimeter firewall
  evidence:
    - No firewall between internet and internal network
    - All ports open to public internet
    - Missing intrusion detection system
  remediation: Deploy network firewall and boundary protection
```

### Inadequate Boundary Controls

```yaml
finding:
  type: CSE-SOC2-CC-NO-BOUNDARY-PROTECTION-023
  severity: critical
  description: Insufficient protection against external threats
  evidence:
    - Firewall rules allow all traffic
    - No network segmentation
    - Absence of DDoS protection
  remediation: Implement comprehensive boundary security controls
```

## SOC 2 Context (Informative)

- **CC6.6**: The entity implements logical access security measures to protect against threats from sources outside its system boundaries.

## Related Signals

- `CSE-SOC2-CC-NO-LOGICAL-ACCESS-CONTROLS-018`
- `CSE-SOC2-CC-NO-TRANSMISSION-SECURITY-024`
- `CSE-SOC2-CC-NO-MALWARE-PREVENTION-025`
