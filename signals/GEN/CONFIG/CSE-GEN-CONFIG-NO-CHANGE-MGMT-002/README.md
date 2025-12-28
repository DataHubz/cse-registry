# CSE-GEN-CONFIG-NO-CHANGE-MGMT-002

**Change Management Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-GEN-CONFIG-NO-CHANGE-MGMT-002`    |
| Domain          | GEN (General)                          |
| Category        | CONFIG                                 |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

No formal process for requesting, approving, testing, and documenting system changes exists or is being followed.

This signal indicates that configuration and system modifications may occur without proper oversight, documentation, or validation, leading to unauthorized changes, configuration drift, or unintended service disruptions.

## Applicability

This signal applies to:

- Production system configuration changes
- Infrastructure modifications
- Application deployments and updates
- Network configuration changes
- Security policy modifications
- Cloud resource provisioning and changes
- Database schema and configuration changes
- Emergency or break-fix changes

## Examples (Non-Normative)

### Direct Production Changes Without Tracking

```bash
# Manual production change with no documentation
ssh production-server
sudo vi /etc/nginx/sites-available/default
sudo systemctl reload nginx
# No ticket, no approval, no record of change
```

### Cloud Changes Without Version Control

```bash
# Manual AWS console changes (ClickOps)
# Security group modified through web UI
# No CloudFormation/Terraform tracking
# No git commit or change record
```

### No Change Advisory Board Process

```markdown
# Evidence of missing CAB process:
- No change request forms
- No approval workflow
- No change calendar
- No impact assessment documentation
- No rollback procedures defined
```

### Deployment Without Testing

```yaml
# CI/CD pipeline with no approval gate
stages:
  - build
  - deploy

deploy_prod:
  stage: deploy
  script:
    - kubectl apply -f manifests/
  # No manual approval required
  # No staging environment test
  # Deploys directly to production
```

### Configuration Drift Detection Disabled

```python
# Infrastructure-as-code not enforced
# Manual changes allowed to persist
# No drift detection configured

# Example: Terraform state not used
# $ terraform plan
# Warning: State file not found
# Resources may have been modified outside Terraform
```

## What This Signal Does NOT Assert

- Whether unauthorized changes have occurred
- The appropriateness of any specific change
- The impact or risk level of changes
- Compliance or non-compliance with any framework
- Whether emergency change procedures exist
- Required remediation actions

## Related Framework Signals

This signal may be relevant to signals in various frameworks:

- `CSE-ISO27001-CONFIG-CHANGE-MGMT-*` — ISO 27001 change management controls
- `CSE-SOC2-CONFIG-CHANGE-CONTROL-*` — SOC 2 change control requirements
- `CSE-PCIDSS-CONFIG-CHANGE-TRACKING-*` — PCI DSS change tracking
- `CSE-CMMC-CONFIG-NO-CHANGE-CONTROL-002` — CMMC change control

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: A.12.1.2 (Change management), A.14.2.2 (System change control procedures)
- **SOC 2**: CC8.1 (The entity authorizes, designs, develops or acquires, configures, documents, tests, approves, and implements changes to infrastructure, data, software, and procedures)
- **PCI DSS**: Requirement 6.4 (Follow change control processes and procedures for all changes to system components)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing for documented change management policies and procedures
- Checking for change request ticketing systems
- Validating approval workflows and audit trails
- Examining version control usage for infrastructure-as-code
- Assessing configuration drift between documented and actual state
- Reviewing deployment pipeline controls and approval gates

The presence of this signal indicates that change management practices should be established or strengthened.
