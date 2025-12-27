# CSE-ISO27001-TECH-NO-CHANGE-MANAGEMENT-032

**Missing Change Management**

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-CHANGE-MANAGEMENT-032`    |
| Domain          | ISO27001                                        |
| Category        | TECH                                            |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

Changes to information processing facilities and systems are not subject to change management procedures.

This signal indicates that system modifications, configuration changes, software updates, or infrastructure changes are performed without formal approval, testing, documentation, or rollback procedures.

## Applicability

This signal applies to:

- Application code deployments and updates
- Infrastructure configuration changes
- Network topology and security changes
- Database schema and data modifications
- Security policy and rule changes
- Patch and update management
- Access control modifications
- Cloud infrastructure changes
- System integrations and dependencies

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Direct Production Changes

```bash
# Developer making direct production changes
ssh prod-server-01
sudo vim /etc/nginx/nginx.conf
sudo systemctl restart nginx

# No change ticket
# No approval
# No testing
# No documentation
# No rollback plan
```

### Deployment Without Approval

```yaml
# CI/CD pipeline with auto-deploy
pipeline:
  stages:
    - build
    - deploy_production

deploy_production:
  script:
    - kubectl apply -f production/
  # No manual approval gate
  # No change request
  # No security review
  # No rollback procedure
```

### No Change Documentation

```text
Incident Report:
"Production database became unavailable at 14:30"

Investigation:
- No change records found
- Schema modification discovered
- No approval documentation
- Unknown who made the change
- No rollback procedure available
```

### Configuration Changes Without Process

```hcl
# Terraform changes without review
resource "aws_security_group_rule" "allow_all" {
  type        = "ingress"
  from_port   = 0
  to_port     = 65535
  protocol    = "-1"
  cidr_blocks = ["0.0.0.0/0"]
}

# Applied directly: terraform apply -auto-approve
# No change request
# No peer review
# No testing in staging
```

### Missing Change Advisory Board

```text
Change Management Process:
❌ Change Advisory Board (CAB)
❌ Change approval workflow
❌ Risk assessment for changes
❌ Testing requirements
❌ Rollback procedures
❌ Change calendar
❌ Post-implementation review

Current state: Ad-hoc changes
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of failed changes
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.32**: Change management - Changes to information processing facilities and systems should be subject to change management procedures

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-SOFTWARE-INSTALL-CONTROLS-019` — Uncontrolled software installation
- `CSE-ISO27001-TECH-NO-ENV-SEPARATION-031` — Missing environment separation
- `CSE-ISO27001-ORG-NO-CONFIGURATION-MGMT-001` — Missing configuration management

## Notes

Detection of this signal typically involves:

- Review of change management policies and procedures
- Analysis of change approval workflows and records
- Inspection of deployment processes and automation
- Assessment of change tracking and logging
- Examination of rollback and recovery procedures
- Review of change advisory board operations
- Evaluation of emergency change procedures
- Assessment of post-implementation reviews

Key change management controls include:
- Formal change request process
- Risk assessment and approval workflow
- Testing in non-production environments
- Documented rollback procedures
- Change calendar and scheduling
- Communication and coordination
- Post-implementation review
- Audit trail and documentation
- Separation of duties
- Emergency change procedures

The presence of this signal indicates a condition that warrants review in the context of change management requirements.
