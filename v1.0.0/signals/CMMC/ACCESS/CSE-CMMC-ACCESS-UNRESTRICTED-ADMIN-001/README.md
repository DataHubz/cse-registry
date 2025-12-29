# CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001

**Unrestricted Administrative Access**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` |
| Domain          | CMMC                                     |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Administrative or privileged access to a system, service, or resource is not restricted by defined conditions or constraints.

This signal indicates that administrative privileges are available without limitations such as network boundaries, time-based restrictions, multi-factor authentication requirements, or role-based scoping.

## Applicability

This signal applies to:

- Cloud management consoles (AWS, Azure, GCP)
- Identity providers and directory services
- Server and workstation administration interfaces
- Database management systems
- Network device configurations (firewalls, routers, switches)
- Container orchestration platforms
- CI/CD pipeline administrative access
- SaaS application admin portals

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Cloud IAM Policy Without Conditions

```json
{
  "Effect": "Allow",
  "Action": "*",
  "Resource": "*"
}
```

### SSH Access Without Source Restrictions

```hcl
# Security group allowing SSH from anywhere
resource "aws_security_group_rule" "ssh" {
  type        = "ingress"
  from_port   = 22
  to_port     = 22
  protocol    = "tcp"
  cidr_blocks = ["0.0.0.0/0"]
}
```

### Admin Role Without MFA Requirement

```yaml
# Azure Conditional Access missing MFA for admin roles
conditions:
  users:
    includeRoles:
      - "Global Administrator"
grantControls:
  builtInControls: []  # No MFA required
```

### Database Admin Without IP Restrictions

```sql
-- MySQL user with admin privileges from any host
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of exploitation
- Compliance or non-compliance with CMMC or any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to several CMMC Level 2 practices:

- **AC.L2-3.1.5**: Employ the principle of least privilege, including for specific security functions and privileged accounts
- **AC.L2-3.1.6**: Use non-privileged accounts or roles when accessing nonsecurity functions
- **AC.L2-3.1.7**: Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-GEN-ACCESS-OVERPRIVILEGED-001` — Overly broad access permissions (if defined)
- `CSE-CMMC-IDENTITY-NO-MFA-001` — Missing multi-factor authentication (if defined)

## Notes

Detection of this signal typically involves:

- Analysis of IAM policies and role assignments
- Review of conditional access configurations
- Inspection of network security group rules
- Examination of authentication requirements for privileged operations

The presence of this signal indicates a condition that warrants review in the context of access control requirements.
