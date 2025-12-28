# CSE-HITRUST-CLOUD-NO-GOVERNANCE-001

**Cloud Governance Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-CLOUD-NO-GOVERNANCE-001`      |
| Domain          | HITRUST                                    |
| Category        | CLOUD                                      |
| Control Domain  | 14 - Cloud Security                        |
| Control Ref     | 14.a                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

A cloud governance framework has not been established or documented for an organization utilizing cloud services to process, store, or transmit protected health information (PHI) or other sensitive data.

This signal indicates the absence of a formal governance structure for cloud services, including policies, procedures, standards, and oversight mechanisms. Cloud governance should define decision-making authority, risk management processes, compliance requirements, and accountability for cloud service usage.

## Applicability

This signal applies to:

- Healthcare organizations utilizing cloud services for PHI
- Business associates hosting applications in cloud environments
- Organizations pursuing HITRUST certification using cloud infrastructure
- Multi-cloud or hybrid cloud deployments
- Organizations using SaaS, PaaS, or IaaS cloud services
- Cloud service providers serving healthcare clients
- Healthcare applications migrating to cloud platforms

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Cloud Governance Framework

```markdown
# Common indicators:
- No documented cloud governance policies or procedures
- Lack of cloud service approval process
- Missing cloud risk assessment framework
- No defined roles and responsibilities for cloud oversight
```

### Uncontrolled Cloud Service Adoption

```yaml
# Cloud services without governance
cloud_environment:
  governance_framework: none
  approval_process: missing
  cloud_policy: undocumented
  oversight_committee: not_established
  vendor_management: ad_hoc
```

### Shadow IT Cloud Services

```json
{
  "cloud_usage": {
    "authorized_services": [],
    "governance_model": null,
    "approval_workflow": "none",
    "business_units_using_cloud": ["multiple"],
    "centralized_oversight": false
  }
}
```

### Lack of Cloud Decision Framework

```python
# No documented governance for:
# - Cloud service selection criteria
# - Data residency requirements
# - Cloud security standards
# - Compliance validation procedures
# - Cost management and optimization
# - Exit strategy and data portability
```

## What This Signal Does NOT Assert

- Whether cloud services are being used securely
- Whether informal cloud governance practices exist
- The quality or effectiveness of any existing cloud controls
- Compliance or non-compliance with HITRUST CSF or any framework
- Whether specific cloud providers are approved or prohibited
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **14.a - Cloud Governance**: Organizations shall establish, document, and maintain a cloud governance framework that defines policies, procedures, roles, and responsibilities for cloud service adoption, management, and oversight

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-CLOUD-NO-SHARED-RESPONSIBILITY-002` - Shared Responsibility Not Defined
- `CSE-HITRUST-CLOUD-NO-DATA-LOCATION-003` - Data Location Not Controlled
- `CSE-HITRUST-RISK-NO-ASSESSMENT-001` - Risk Assessment Missing
- `CSE-HITRUST-POLICY-NO-DOCUMENT-001` - Policy Documentation Missing

## Notes

Detection of this signal typically involves:

- Review of cloud governance documentation and frameworks
- Assessment of cloud service approval processes
- Examination of cloud strategy and planning documents
- Verification of cloud oversight committees or roles
- Review of cloud vendor management procedures
- Analysis of cloud risk management processes

The presence of this signal indicates a foundational gap in cloud governance that should be addressed as a priority for HITRUST compliance and secure cloud operations.
