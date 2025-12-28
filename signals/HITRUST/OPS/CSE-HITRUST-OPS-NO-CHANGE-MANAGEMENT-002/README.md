# CSE-HITRUST-OPS-NO-CHANGE-MANAGEMENT-002

**Change Management Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-OPS-NO-CHANGE-MANAGEMENT-002` |
| Domain          | HITRUST                                    |
| Category        | OPS                                        |
| Control Domain  | 09 - Communications and Operations Management |
| Control Ref     | 09.b                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Changes to information processing facilities, systems, or software are not controlled through a formal change management process.

This signal indicates that an organization lacks a structured approach to managing changes, which may result in unauthorized modifications, system instability, security vulnerabilities, or service disruptions.

## Applicability

This signal applies to:

- Infrastructure changes (servers, network, cloud resources)
- Application code and configuration changes
- Database schema and data modifications
- Security control updates
- Third-party software and library updates
- Operating system and platform changes
- Network topology and firewall rule changes
- IAM and access control modifications

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Direct Production Changes Without Approval

```bash
# Changes applied directly without change control
ssh production-server
vim /etc/nginx/nginx.conf
systemctl restart nginx
# No ticket, no approval, no documentation
```

### Infrastructure Changes Without Process

```terraform
# Production infrastructure modified without:
# - Change request
# - Peer review
# - Approval workflow
# - Rollback plan
# - Testing in lower environments

resource "aws_security_group_rule" "new_rule" {
  # Added directly to production
  type        = "ingress"
  from_port   = 443
  to_port     = 443
  cidr_blocks = ["0.0.0.0/0"]
}
```

### Database Changes Without Change Management

```sql
-- Schema changes without change control process
ALTER TABLE users ADD COLUMN sensitive_data VARCHAR(255);
-- No change request, impact analysis, or rollback plan
```

### Application Deployment Without Controls

```yaml
# CI/CD pipeline with no change management gates
deploy:
  stage: production
  script:
    - kubectl apply -f production/
  # No approval required
  # No change window verification
  # No rollback procedures
```

## What This Signal Does NOT Assert

- Whether changes are tested before deployment
- Whether emergency change procedures exist
- The effectiveness of any informal change processes
- Compliance or non-compliance with HITRUST CSF or any framework
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **09.b - Change Management**: Changes to information processing facilities and systems shall be controlled through formal change management procedures

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-OPS-NO-PROCEDURES-001` - Operating Procedures Not Documented
- `CSE-HITRUST-OPS-NO-ENVIRONMENT-SEPARATION-004` - Environment Separation Missing
- `CSE-CMMC-CONFIG-NO-CHANGE-CONTROL-002` - Configuration Change Control Missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of change management ticketing systems
- Analysis of deployment logs and audit trails
- Assessment of approval workflows
- Examination of change advisory board (CAB) processes
- Review of emergency change procedures
- Verification of change testing and validation processes

The presence of this signal indicates a condition that warrants review in the context of operational stability and security requirements.
