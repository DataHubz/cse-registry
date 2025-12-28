# CSE-HITRUST-NETWORK-NO-MONITORING-004

**Network Monitoring Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-NETWORK-NO-MONITORING-004` |
| Domain | HITRUST |
| Category | NETWORK |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Network monitoring and traffic analysis capabilities have not been implemented to detect security threats and anomalous activities in systems handling protected health information (PHI) or other sensitive data.

This signal indicates the absence of network monitoring, intrusion detection, or traffic analysis tools that continuously observe network activity for suspicious patterns, security incidents, or policy violations. Network monitoring is essential for detecting unauthorized access attempts, malware communications, data exfiltration, and other security threats.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers
- Critical healthcare infrastructure operators

## Examples (Non-Normative)

### No Network Monitoring Tools

```yaml
# Network without monitoring or IDS/IPS
security:
  monitoring:
    network_ids: null
    network_ips: null
    traffic_analysis: false
    packet_capture: false
  logging:
    network_flows: false
    firewall_logs: "not_collected"
```

### Missing Flow Monitoring

```json
{
  "network_visibility": {
    "netflow_enabled": false,
    "sflow_enabled": false,
    "packet_capture": false,
    "baseline_established": false,
    "anomaly_detection": false
  }
}
```

### Cloud Environment Without Network Monitoring

```terraform
# AWS VPC without flow logs or monitoring
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  # VPC Flow Logs not configured
}

# No CloudWatch metrics for network traffic
# No GuardDuty or similar threat detection
```

### Unmonitored Network Segments

```yaml
# Critical segments without monitoring
network_segments:
  phi_database_zone:
    monitoring: false
    ids_coverage: false
    log_collection: false
  application_tier:
    monitoring: false
    ids_coverage: false
    log_collection: false
```

## What This Signal Does NOT Assert

- Whether application-level logging is implemented
- The quality or effectiveness of existing security controls
- Whether the organization is compliant or non-compliant with HITRUST
- The specific monitoring tools or technologies required
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 18 - Network Security
- **Control Reference**: 18.d
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing network monitoring that:
- Continuously monitors network traffic for threats and anomalies
- Implements intrusion detection and prevention capabilities
- Collects and analyzes network flow data
- Establishes baselines and detects deviations
- Correlates network events with security incidents
- Provides alerting for suspicious activities

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-NETWORK-NO-SEGMENTATION-001` - Network segmentation missing
- `CSE-HITRUST-NETWORK-NO-PERIMETER-002` - Network perimeter controls missing
- `CSE-HITRUST-OPS-NO-LOGGING-007` - System logging missing
- `CSE-HITRUST-INCIDENT-NO-DETECTION-002` - Incident detection missing (if defined)
- `CSE-CMMC-INTEGRITY-NO-MONITORING-003` - CMMC monitoring requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of network monitoring tool configurations
- Analysis of IDS/IPS deployment and coverage
- Examination of network flow log collection (NetFlow, sFlow, IPFIX)
- Assessment of SIEM integration for network events
- Verification of packet capture capabilities
- Analysis of network traffic baselines and anomaly detection
- Review of security operations center (SOC) procedures

The presence of this signal indicates a critical gap in security visibility and threat detection capabilities that prevents timely identification of security incidents affecting PHI, and should be addressed as a priority for HITRUST compliance.
