# CSE-HITRUST-OPS-NO-ENVIRONMENT-SEPARATION-004

**Environment Separation Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-OPS-NO-ENVIRONMENT-SEPARATION-004` |
| Domain          | HITRUST                                    |
| Category        | OPS                                        |
| Control Domain  | 09 - Communications and Operations Management |
| Control Ref     | 09.d                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Development, testing, and production environments are not adequately separated to reduce the risk of unauthorized access or changes to the operational environment.

This signal indicates that environments lack proper segregation, which may lead to accidental production changes, exposure of production data in non-production environments, or security vulnerabilities.

## Applicability

This signal applies to:

- Cloud infrastructure and account separation
- Network segmentation between environments
- Database and data storage separation
- Application deployment environments
- CI/CD pipeline environment isolation
- IAM and access control separation
- Secret and credential management
- DNS and service discovery separation

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Shared Cloud Account for All Environments

```yaml
# Single AWS account for all environments
aws_account: "123456789012"
environments:
  development:
    vpc: "vpc-dev123"  # Same account as production
  staging:
    vpc: "vpc-stage456"  # Same account as production
  production:
    vpc: "vpc-prod789"  # No account-level separation
```

### Production and Development in Same Network

```terraform
# Insufficient network separation
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_subnet" "dev" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"  # Dev and prod in same VPC
}

resource "aws_subnet" "prod" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.2.0/24"  # Minimal separation
}
```

### Shared Database for Multiple Environments

```sql
-- Single database instance for all environments
CREATE DATABASE production_db;
CREATE DATABASE development_db;
CREATE DATABASE staging_db;
-- Same server, same instance, minimal isolation
```

### Production Secrets Accessible from Dev

```yaml
# Secrets management without environment separation
apiVersion: v1
kind: Secret
metadata:
  name: database-credentials
  namespace: default  # Shared namespace
data:
  prod_password: cHJvZHBhc3N3b3Jk
  dev_password: ZGV2cGFzc3dvcmQ=
  # Both accessible from same environment
```

## What This Signal Does NOT Assert

- Whether environment separation is completely absent
- Whether data is replicated from production to non-production
- The specific separation mechanisms required
- Compliance or non-compliance with HITRUST CSF or any framework
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **09.d - Separation of Development, Test, and Operational Facilities**: Development, test, and operational facilities shall be separated to reduce the risks of unauthorized access or changes to the operational environment

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-OPS-NO-CHANGE-MANAGEMENT-002` - Change Management Missing
- `CSE-CMMC-ACCESS-NO-SEPARATION-DUTIES-006` - Separation of Duties Missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of cloud account architecture and organization
- Assessment of network segmentation and isolation
- Examination of IAM policies and role separation
- Verification of data storage and database isolation
- Review of CI/CD pipeline environment controls
- Analysis of secret and credential management per environment
- Inspection of deployment and promotion processes

The presence of this signal indicates a condition that warrants review in the context of production environment protection requirements.
