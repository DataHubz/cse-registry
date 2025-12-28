# CSE-HITRUST-CLOUD-NO-MONITORING-006

**Cloud Monitoring Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-CLOUD-NO-MONITORING-006`      |
| Domain          | HITRUST                                    |
| Category        | CLOUD                                      |
| Control Domain  | 14 - Cloud Security                        |
| Control Ref     | 14.f                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Security monitoring and logging capabilities for cloud infrastructure and services have not been implemented or properly configured for systems handling protected health information (PHI) or sensitive data.

This signal indicates the absence of comprehensive monitoring controls for cloud environments, including security event logging, activity monitoring, anomaly detection, and alerting mechanisms. Cloud monitoring should provide visibility into security events, compliance status, and potential threats across all cloud resources and services.

## Applicability

This signal applies to:

- Cloud infrastructure activity and API logging
- Cloud security events and alerts
- Cloud access and identity monitoring
- Cloud network traffic and flow logs
- Cloud resource configuration changes
- Cloud compliance and posture monitoring
- Cloud cost and usage anomaly detection

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Cloud Activity Logging

```markdown
# Common indicators:
- Cloud API activity logging not enabled
- No centralized log aggregation for cloud events
- Missing security event monitoring
- Lack of automated alerting for suspicious activity
```

### Unmonitored Cloud Account

```yaml
# Cloud environment without monitoring
cloud_monitoring:
  activity_logging: disabled
  cloudtrail_enabled: false
  security_center: not_configured
  log_aggregation: none
  alert_rules: []
  siem_integration: false
  retention_policy: undefined
```

### Missing Security Event Detection

```json
{
  "security_monitoring": {
    "intrusion_detection": false,
    "anomaly_detection": false,
    "threat_intelligence": "not_integrated",
    "security_alerts": [],
    "incident_response_integration": null,
    "automated_response": false
  }
}
```

### Unmonitored Cloud Resources

```python
# Cloud infrastructure without monitoring:
monitoring_config = {
    "compute_metrics": False,
    "storage_access_logs": False,
    "database_audit_logs": False,
    "network_flow_logs": False,
    "api_gateway_logs": False,
    "lambda_logs": False,
    "container_logs": False,
    "compliance_monitoring": False
}
```

## What This Signal Does NOT Assert

- Whether security incidents have occurred
- The effectiveness of any existing monitoring practices
- Whether cloud provider logging capabilities are available
- Compliance or non-compliance with HITRUST CSF or any framework
- Whether compensating detective controls exist
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **14.f - Cloud Monitoring and Logging**: Organizations shall implement and maintain comprehensive security monitoring and logging for cloud environments, including activity logs, security events, configuration changes, and automated alerting for anomalous or suspicious activities

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-CLOUD-NO-GOVERNANCE-001` - Cloud Governance Missing
- `CSE-HITRUST-CLOUD-NO-CONFIGURATION-005` - Cloud Configuration Management Missing
- `CSE-HITRUST-OPS-NO-LOGGING-007` - Logging Missing
- `CSE-HITRUST-OPS-NO-LOG-PROTECTION-008` - Log Protection Missing
- `CSE-HITRUST-INCIDENT-NO-DETECTION-001` - Incident Detection Missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of cloud logging service configurations
- Assessment of log aggregation and retention policies
- Examination of security monitoring tools and dashboards
- Verification of alert rule configurations
- Review of SIEM integration for cloud events
- Analysis of compliance monitoring capabilities
- Assessment of log analysis and threat detection practices
- Validation of incident response integration

The presence of this signal indicates a critical gap in security visibility that may delay or prevent detection of security incidents, unauthorized access, compliance violations, and other security events in cloud environments.
