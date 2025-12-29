# CSE-HITRUST-CLOUD-NO-CONFIGURATION-005

**Cloud Configuration Management Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-CLOUD-NO-CONFIGURATION-005`   |
| Domain          | HITRUST                                    |
| Category        | CLOUD                                      |
| Control Domain  | 14 - Cloud Security                        |
| Control Ref     | 14.e                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Configuration management processes and controls for cloud infrastructure and services have not been established, documented, or implemented for systems handling protected health information (PHI) or sensitive data.

This signal indicates the absence of systematic controls for managing cloud resource configurations, including secure baseline configurations, configuration drift detection, infrastructure-as-code practices, and configuration change management. Proper cloud configuration management ensures consistent security posture and compliance across cloud environments.

## Applicability

This signal applies to:

- Cloud infrastructure resources (compute, storage, networking)
- Cloud platform services (databases, containers, serverless)
- Cloud security services (IAM, firewalls, security groups)
- Infrastructure-as-Code (IaC) deployments
- Cloud resource tagging and organization
- Multi-account or multi-subscription cloud environments
- Automated cloud provisioning and deployment pipelines

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Configuration Baselines

```markdown
# Common indicators:
- No documented secure configuration baselines
- Lack of configuration standards for cloud resources
- Missing configuration drift detection
- No infrastructure-as-code practices
```

### Manual Cloud Configuration Without Standards

```yaml
# Cloud resources without configuration management
cloud_infrastructure:
  provisioning_method: "manual_console"
  configuration_baseline: none
  infrastructure_as_code: false
  drift_detection: disabled
  configuration_validation: none
  change_tracking: manual
```

### Security Group Without Governance

```json
{
  "security_groups": [
    {
      "name": "production-web-sg",
      "rules": "manually_configured",
      "baseline_compliance": "unknown",
      "change_control": null,
      "review_process": "none",
      "configuration_drift": "not_monitored"
    }
  ]
}
```

### Unmanaged Infrastructure-as-Code

```python
# Cloud deployment without configuration management:
deployment_config = {
    "infrastructure_as_code": False,
    "terraform_state": None,
    "cloudformation_templates": [],
    "configuration_testing": False,
    "automated_compliance_checks": False,
    "version_control": False,
    "peer_review": False
}
```

## What This Signal Does NOT Assert

- Whether cloud resources are currently misconfigured
- The effectiveness of any existing configuration practices
- Whether manual configurations are inherently insecure
- Compliance or non-compliance with HITRUST CSF or any framework
- Whether compensating controls exist
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **14.e - Cloud Configuration Management**: Organizations shall establish and maintain configuration management processes for cloud infrastructure and services, including secure baselines, change control, configuration validation, and drift detection mechanisms

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-CLOUD-NO-GOVERNANCE-001` - Cloud Governance Missing
- `CSE-HITRUST-CLOUD-NO-MONITORING-006` - Cloud Monitoring Missing
- `CSE-HITRUST-OPS-NO-CHANGE-MANAGEMENT-002` - Change Management Missing
- `CSE-HITRUST-OPS-NO-PROCEDURES-001` - Operating Procedures Missing

## Notes

Detection of this signal typically involves:

- Review of infrastructure-as-code repositories and practices
- Assessment of cloud configuration management tools and processes
- Examination of configuration baseline documentation
- Verification of automated configuration validation
- Review of cloud resource provisioning procedures
- Analysis of configuration drift detection mechanisms
- Assessment of change management integration
- Validation of configuration version control practices

The presence of this signal indicates a significant operational risk that may lead to configuration drift, security misconfigurations, compliance violations, and inconsistent security posture across cloud environments.
