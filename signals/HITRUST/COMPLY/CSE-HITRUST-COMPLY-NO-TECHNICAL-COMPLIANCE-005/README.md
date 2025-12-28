# CSE-HITRUST-COMPLY-NO-TECHNICAL-COMPLIANCE-005

**Technical Compliance Not Checked**

## Signal Overview

| Field           | Value                                               |
|-----------------|-----------------------------------------------------|
| Identifier      | `CSE-HITRUST-COMPLY-NO-TECHNICAL-COMPLIANCE-005`    |
| Domain          | HITRUST                                             |
| Category        | COMPLY                                              |
| Control Domain  | 06 - Compliance                                     |
| Reference       | 06.e                                                |
| Status          | Active                                              |
| Introduced In   | 1.0.0                                               |

## Description

Information systems have not been regularly checked for compliance with the organization's security implementation standards.

This signal indicates that an organization lacks a systematic process to verify that technical security controls, configurations, and implementations align with established security standards, baselines, and technical compliance requirements.

## Applicability

This signal applies to:

- Cloud infrastructure and platform configurations
- Operating system and application security settings
- Network device and firewall configurations
- Database security configurations
- Cryptographic implementations
- Security hardening baselines (CIS Benchmarks, DISA STIGs)
- Endpoint protection and monitoring tools
- Container and Kubernetes security configurations
- API security implementations

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Technical Compliance Scanning

```yaml
# Infrastructure without regular compliance checks
infrastructure:
  compliance_scanning:
    enabled: false
    last_scan_date: null
    baseline_standard: "not_defined"
    deviation_tracking: "not_configured"
    remediation_workflow: "none"
```

### No Security Baseline Validation

```json
{
  "server": "prod-web-01",
  "security_baseline": {
    "standard": "CIS_Level_2",
    "last_validated": null,
    "compliance_score": "not_measured",
    "findings": [],
    "exceptions_documented": false
  }
}
```

### Undocumented Configuration Standards

```hcl
# Cloud resources deployed without compliance validation
resource "aws_s3_bucket" "data" {
  # No compliance tags
  # No baseline comparison
  # No automated policy checks
  # No deviation alerts
  # No remediation tracking
}
```

### Missing Automated Compliance Checks

```python
# Deployment pipeline without technical compliance gates
def deploy_application(config):
    # No security configuration validation
    # No baseline comparison
    # No vulnerability scanning
    # No compliance policy checks
    # No hardening verification
    deploy_to_production(config)
```

## What This Signal Does NOT Assert

- Whether security controls are actually effective
- The existence of security implementation standards
- Whether compensating controls are in place
- Compliance or non-compliance with specific frameworks
- The severity of configuration deviations
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **06.e Technical Compliance**: Information systems shall be regularly checked for compliance with the organization's security implementation standards

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CMMC-CONFIG-NO-BASELINE-001` — Configuration baseline not established (if defined)
- `CSE-CMMC-ASSESSMENT-NO-CONTINUOUS-MONITORING-004` — Continuous monitoring not implemented (if defined)
- `CSE-HITRUST-COMPLY-NO-AUDIT-006` — Compliance audit not conducted
- `CSE-CMMC-RISK-NO-VULN-SCAN-002` — Vulnerability scanning not performed (if defined)

## Notes

Detection of this signal typically involves:

- Review of security configuration management procedures
- Analysis of compliance scanning tool deployment and usage
- Examination of baseline standards and security hardening guides
- Assessment of configuration drift detection mechanisms
- Review of compliance reporting and metrics
- Inspection of automated compliance validation in CI/CD pipelines
- Evaluation of remediation tracking and closure processes
- Assessment of exception and deviation management procedures

The presence of this signal indicates a condition that warrants review in the context of technical security compliance verification requirements.
