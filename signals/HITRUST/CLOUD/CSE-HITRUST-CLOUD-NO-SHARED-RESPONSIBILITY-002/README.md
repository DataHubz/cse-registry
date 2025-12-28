# CSE-HITRUST-CLOUD-NO-SHARED-RESPONSIBILITY-002

**Shared Responsibility Not Defined**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-CLOUD-NO-SHARED-RESPONSIBILITY-002` |
| Domain          | HITRUST                                    |
| Category        | CLOUD                                      |
| Control Domain  | 14 - Cloud Security                        |
| Control Ref     | 14.b                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

The shared responsibility model between the organization and cloud service provider(s) has not been documented, communicated, or clearly defined for systems processing protected health information (PHI) or sensitive data.

This signal indicates the absence of clear delineation of security and compliance responsibilities between the organization and its cloud service providers. The shared responsibility model should specify which security controls are managed by the provider versus the customer across different service models (IaaS, PaaS, SaaS).

## Applicability

This signal applies to:

- Organizations using cloud infrastructure (IaaS) services
- Applications deployed on Platform-as-a-Service (PaaS)
- Software-as-a-Service (SaaS) solutions for healthcare data
- Multi-vendor cloud environments
- Hybrid cloud deployments combining on-premises and cloud
- Containerized workloads in cloud environments
- Serverless computing architectures

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Undefined Responsibility Matrix

```markdown
# Common indicators:
- No documented shared responsibility model
- Unclear security control ownership
- Missing provider-customer responsibility mapping
- No documented assumptions about provider controls
```

### Missing IaaS Responsibility Documentation

```yaml
# Infrastructure-as-a-Service without defined responsibilities
cloud_infrastructure:
  provider: "AWS/Azure/GCP"
  service_model: "IaaS"
  responsibility_model:
    documented: false
    customer_responsibilities: undefined
    provider_responsibilities: assumed
    control_mapping: missing
```

### SaaS Application Without Clarity

```json
{
  "saas_application": {
    "service": "healthcare_ehr_cloud",
    "data_security": "provider_managed",
    "access_control": "unclear_ownership",
    "encryption": "responsibility_undefined",
    "backup": "assumed_provider_handles",
    "incident_response": "not_documented"
  }
}
```

### Container Platform Confusion

```python
# Kubernetes/container platform without defined responsibilities:
# - Who manages container security scanning?
# - Who is responsible for patch management?
# - Who handles network security controls?
# - Who manages secrets and encryption keys?
# - Who monitors and responds to security events?
```

## What This Signal Does NOT Assert

- Whether the cloud provider has adequate security controls
- Whether the organization is properly managing its responsibilities
- The quality of cloud provider security documentation
- Compliance or non-compliance with HITRUST CSF or any framework
- Whether Business Associate Agreements (BAAs) are in place
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **14.b - Shared Responsibility Model**: Organizations shall document and communicate the shared responsibility model with cloud service providers, clearly delineating security control responsibilities between the provider and customer across all service layers

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-CLOUD-NO-GOVERNANCE-001` - Cloud Governance Missing
- `CSE-HITRUST-CLOUD-NO-CONFIGURATION-005` - Cloud Configuration Management Missing
- `CSE-HITRUST-COMPLY-NO-LEGAL-IDENTIFICATION-001` - Legal Requirements Not Identified
- `CSE-HITRUST-RISK-NO-ASSESSMENT-001` - Risk Assessment Missing

## Notes

Detection of this signal typically involves:

- Review of cloud service provider contracts and agreements
- Assessment of documented responsibility matrices
- Examination of security control inheritance documentation
- Verification of provider security certifications and attestations
- Review of cloud architecture documentation
- Analysis of security control implementation records

The presence of this signal indicates a critical gap in understanding security responsibilities that could lead to control gaps, compliance issues, and increased risk exposure in cloud environments.
