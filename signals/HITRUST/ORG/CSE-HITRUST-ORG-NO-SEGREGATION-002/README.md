# CSE-HITRUST-ORG-NO-SEGREGATION-002

**Organizational Segregation Missing**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-HITRUST-ORG-NO-SEGREGATION-002` |
| Domain          | HITRUST                             |
| Category        | ORG                                 |
| Control Domain  | 05 - Organization of Information Security |
| Control Ref     | 05.b                                |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

No segregation exists between security functions and operational functions within the organization.

This signal indicates that the organization has not established separation of duties between those responsible for implementing and enforcing security controls and those performing day-to-day operational activities. This lack of segregation can create conflicts of interest and reduce the effectiveness of security oversight.

## Applicability

This signal applies to:

- Organizational structure and reporting lines
- Role and responsibility definitions
- Access control and privilege assignments
- Change management processes
- Security review and approval workflows
- Audit and compliance functions
- Risk management structures
- Incident response teams

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Single Role for Operations and Security

```yaml
# organizational_structure.yaml
roles:
  - name: IT Manager
    responsibilities:
      - System administration
      - Network operations
      - Security policy enforcement
      - Security incident response
      - Access provisioning
    # Same person handles operations and security oversight
```

### Operations Team Self-Approving Security Changes

```json
{
  "change_request": {
    "id": "CR-2024-001",
    "title": "Firewall rule modification",
    "requested_by": "ops-team@example.com",
    "approved_by": "ops-team@example.com",
    "security_review": "self-reviewed"
  }
}
```

### No Independent Security Review

```python
# deployment_process.py
class DeploymentPipeline:
    def deploy_application(self):
        self.build_code()
        self.run_tests()
        self.deploy_to_production()
        # No independent security review or approval
        self.update_firewall_rules()  # Operations controls security
```

### Combined Access Management

```hcl
# Combined role with conflicting duties
resource "aws_iam_role" "admin_all" {
  name = "operations-and-security-admin"

  assume_role_policy = jsonencode({
    Statement = [{
      Effect = "Allow"
      Principal = { AWS = "arn:aws:iam::123456789012:user/it-manager" }
      Action = "sts:AssumeRole"
    }]
  })
}

resource "aws_iam_role_policy_attachment" "admin_access" {
  role       = aws_iam_role.admin_all.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
  # Same individual has operational and security control
}
```

## What This Signal Does NOT Assert

- Whether the organization has adequate resources
- The size or scale of the organization
- Whether compensating controls exist
- The effectiveness of current security practices
- Compliance or non-compliance with HITRUST CSF or any framework
- Required organizational headcount or structure

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control:

- **05.b - Segregation of Duties**: Conflicting duties and areas of responsibility should be segregated to reduce opportunities for unauthorized or unintentional modification or misuse of the organization's assets

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ORG-NO-ROLES-001` — Security roles not formally defined
- `CSE-HITRUST-ORG-NO-AUTHORITY-003` — No designated authority for security decisions
- `CSE-CMMC-ACCESS-NO-SEPARATION-DUTIES-006` — No separation of duties in access controls

## Notes

Detection of this signal typically involves:

- Analysis of organizational charts and reporting structures
- Review of role definitions and responsibility assignments
- Examination of approval workflows and change control processes
- Assessment of access control matrices
- Inspection of privilege assignments
- Review of security governance documentation

The presence of this signal indicates a condition that warrants review in the context of organizational security independence and oversight requirements.
