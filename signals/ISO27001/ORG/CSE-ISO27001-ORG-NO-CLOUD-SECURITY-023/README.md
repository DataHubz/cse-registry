# CSE-ISO27001-ORG-NO-CLOUD-SECURITY-023

**No Cloud Services Security Management** [NEW IN ISO 27001:2022]

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-CLOUD-SECURITY-023` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Processes for secure acquisition, use, management, and exit from cloud services are not established. Organizations must implement comprehensive processes to manage information security throughout the entire cloud service lifecycle, from initial selection and onboarding through ongoing operation and eventual service termination.

## Applicability

- Organizations using Infrastructure as a Service (IaaS)
- Software as a Service (SaaS) implementations
- Platform as a Service (PaaS) deployments
- Multi-cloud and hybrid cloud environments
- Cloud storage and backup services
- Cloud-based development and testing environments

## Examples (Non-Normative)

### Ad-Hoc Cloud Adoption Without Security Process

```yaml
cloud_services:
  - service: "SaaS CRM Platform"
    adoption_process:
      security_assessment: null        # Signal: No security evaluation
      data_classification_review: null # Signal: No data protection assessment
      contract_review: null            # Signal: No legal/security contract review

  - service: "Cloud Storage"
    configuration:
      security_baseline: null          # Signal: No secure configuration standard
      access_controls: "default"       # Signal: Using provider defaults
      encryption: "not configured"     # Signal: No encryption requirements
      monitoring: null                 # Signal: No security monitoring

  exit_strategy:
    data_extraction_plan: null         # Signal: No data portability plan
    service_termination_process: null  # Signal: No exit procedures
```

### Missing Cloud Security Governance

```yaml
cloud_governance:
  acquisition:
    approval_process: "informal"                    # Signal: No formal approval
    security_requirements: null                     # Signal: No security criteria
    shared_responsibility_model: "not documented"   # Signal: Unclear responsibilities

  management:
    configuration_management: null     # Signal: No cloud config management
    compliance_monitoring: null        # Signal: No compliance verification
    incident_response: null            # Signal: No cloud incident procedures

  data_protection:
    data_location_controls: null       # Signal: No geographic restrictions
    data_sovereignty: "not considered" # Signal: No regulatory compliance review
    backup_strategy: null              # Signal: No cloud backup requirements
```

## ISO 27001:2022 Context (Informative)

- **A.5.23 Information security for use of cloud services**: This is a NEW control in ISO 27001:2022. It requires processes for the acquisition, use, management, and exit from cloud services in accordance with organizational information security requirements. Organizations must address cloud provider assessment, shared responsibility models, data protection, configuration management, and exit strategies.

## Related Signals

- `CSE-ISO27001-ORG-NO-SUPPLIER-AGREEMENTS-020` (Information security in supplier agreements)
- `CSE-ISO27001-ORG-NO-SUPPLIER-MONITORING-022` (Supplier service monitoring)
- `CSE-ISO27001-TECH-NO-ENCRYPTION` (If applicable for cloud data protection)
