# CSE-ISO27001-TECH-NO-ENV-SEPARATION-031

**Missing Environment Separation**

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-ENV-SEPARATION-031`       |
| Domain          | ISO27001                                        |
| Category        | TECH                                            |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

Development, testing, and production environments are not separated and secured.

This signal indicates that different environment types share infrastructure, credentials, data, or network access without appropriate isolation controls, potentially allowing development activities to impact production systems or production data to be exposed in non-production environments.

## Applicability

This signal applies to:

- Production, staging, QA, and development environments
- Cloud accounts and subscriptions
- Network segments and VPCs
- Database instances and schemas
- Application deployments
- Container clusters and namespaces
- CI/CD pipelines and tools
- Credentials and secrets management
- Data storage and backups

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Shared Database Instance

```sql
-- Single database with multiple schemas
Database: production_db
Schemas:
  - production
  - staging
  - development
  - test

-- Shared credentials
-- Same server, same resources
-- No network isolation
```

### Cloud Environment Without Separation

```hcl
# Single AWS account for all environments
resource "aws_instance" "servers" {
  count = 3
  tags = {
    Name = "app-${count.index}"
    # dev, staging, prod all in same VPC
  }
  # Shared IAM roles
  # Same security groups
  # Same network
}
```

### Kubernetes Without Namespace Isolation

```yaml
# Single cluster, minimal separation
apiVersion: v1
kind: Namespace
metadata:
  name: default

# Production and dev pods in same namespace
# Shared service accounts
# No network policies
# No resource quotas
```

### Shared Credentials Across Environments

```bash
# Same API keys and secrets for all environments
export DATABASE_URL="postgresql://user:pass@db.example.com/myapp"
export API_KEY="sk_live_51HxYz2eSeIySiQkwJ9zRpQX"

# Used in dev, test, and production
# No environment-specific credentials
```

### Production Data in Development

```python
# Development environment configuration
DATABASE_BACKUP_SOURCE = "production_db_backup"

# Developers working with production data
# No data masking
# No anonymization
# PII accessible in development
```

### No Network Segregation

```text
Network Architecture:
10.0.0.0/16 - Corporate Network
  - 10.0.1.0/24: Developer workstations
  - 10.0.2.0/24: Development servers
  - 10.0.3.0/24: Testing servers
  - 10.0.4.0/24: Production servers

# All subnets can communicate freely
# No firewall rules between environments
# Developers can access production
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of cross-environment incidents
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.31**: Separation of development, test and production environments - Development, testing and production environments should be separated and secured

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-NETWORK-SEGREGATION-022` — Lack of network segregation
- `CSE-ISO27001-TECH-NO-ACCESS-CONTROL-008` — Missing access controls
- `CSE-ISO27001-TECH-NO-TEST-DATA-CONTROLS-033` — Inadequate test data controls

## Notes

Detection of this signal typically involves:

- Review of environment architecture and topology
- Analysis of cloud account and subscription structure
- Inspection of network segmentation and isolation
- Assessment of credential and secrets management
- Examination of data flows between environments
- Review of access control policies
- Evaluation of deployment pipeline separation
- Assessment of resource tagging and organization

Key separation controls include:
- Separate cloud accounts/subscriptions per environment
- Network isolation (VPCs, subnets, firewalls)
- Separate credentials and secrets per environment
- Role-based access controls by environment
- Data masking/anonymization for non-production
- Separate CI/CD pipelines
- Environment-specific configurations
- Monitoring and alerting per environment

The presence of this signal indicates a condition that warrants review in the context of environment separation requirements.
