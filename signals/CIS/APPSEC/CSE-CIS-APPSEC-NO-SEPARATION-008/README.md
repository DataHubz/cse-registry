# CSE-CIS-APPSEC-NO-SEPARATION-008

**Production Separation Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-SEPARATION-008`       |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not established proper separation between production and non-production application environments.

This signal indicates the absence of adequate isolation between development, testing, staging, and production environments to prevent unauthorized access, data leakage, and security misconfigurations from affecting production systems.

## Applicability

This signal applies to:

- DevOps and DevSecOps teams
- Application development teams
- Infrastructure teams
- Cloud operations teams
- Platform engineering teams
- Database administrators
- Security operations teams
- IT operations teams

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Shared Infrastructure Across Environments

```yaml
# Single cluster hosting all environments
kubernetes_cluster:
  name: shared-cluster
  namespaces:
    - development
    - testing
    - staging
    - production
  # Missing proper separation:
  network_policies: not_configured
  resource_quotas: not_enforced
  rbac_isolation: insufficient
  data_isolation: none
```

### Production Data in Non-Production Environments

```sql
-- Development database using production data copy
-- Executed: 2024-01-15
RESTORE DATABASE dev_database
FROM BACKUP = '/backups/production_database.bak'

-- Issues:
-- - Real customer PII in development
-- - Production secrets in dev environment
-- - Compliance violations (GDPR, HIPAA, PCI-DSS)
-- - Data breach risk through dev systems
```

### Shared Credentials Across Environments

```bash
# .env file used across all environments
DATABASE_HOST=db.example.com
DATABASE_USER=app_user
DATABASE_PASSWORD=shared_password_123
API_KEY=pk_live_production_key_abc123
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

# Missing environment-specific credentials
# Missing secrets management
# Production keys exposed to dev/test
```

### No Network Segmentation

```text
Network architecture without environment separation:
- All environments on same VPC/VLAN
- No firewall rules between environments
- Development can access production databases
- Testing can access production APIs
- No network access controls
- Shared load balancers and proxies
```

### Missing Access Controls

```json
{
  "iam_policy": {
    "developers": {
      "permissions": [
        "dev:*",
        "test:*",
        "staging:*",
        "prod:read",
        "prod:write"
      ]
    }
  }
}
```

### Shared Service Accounts

```python
# Application configuration
class Config:
    # Same service account across environments
    EMAIL_SERVICE_KEY = "sg_production_key_xyz"
    PAYMENT_API_KEY = "pk_live_production_payment_key"
    MONITORING_TOKEN = "prod_datadog_token_123"

    # Used in development, testing, and production
    # No environment-specific credentials
    # Production quota consumed by dev/test
```

### No Data Masking or Anonymization

```javascript
// Test data generation using production data
async function seedTestDatabase() {
    // Copying production user data to test environment
    const prodUsers = await prodDB.query('SELECT * FROM users');

    // No data masking:
    // - Real email addresses
    // - Real names
    // - Real phone numbers
    // - Real addresses
    // - Payment information

    await testDB.insert('users', prodUsers);
}
```

### Insufficient Configuration Management

```dockerfile
# Same Docker image for all environments
FROM node:18

COPY . /app
WORKDIR /app

# Production configuration baked into image
ENV NODE_ENV=production
ENV API_URL=https://api.production.com
ENV DATABASE_URL=postgres://prod-db:5432

# Missing:
# - Environment-specific configurations
# - Runtime configuration injection
# - Secrets management
```

### Shared Logging and Monitoring

```yaml
# Centralized logging without environment separation
logging:
  destination: logs.example.com
  index: application-logs
  # All environments writing to same index:
  # - Development logs mixed with production
  # - No environment filtering
  # - Potential data leakage in logs
  # - Compliance issues
```

## What This Signal Does NOT Assert

- Whether production is secure
- The number of environments required
- Whether data is being protected
- The specific isolation mechanisms to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required infrastructure architecture

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.8**: Separate Production and Non-Production Systems
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Maintain separate environments for production and non-production systems. Developers should not have unmonitored access to production environments."

This safeguard emphasizes the critical need for isolation between environments to protect production systems and data while allowing development and testing activities to proceed safely.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-SDLC-001` — Secure SDLC missing
- `CSE-CIS-DATA-NO-PROTECTION-001` — Data protection missing (if defined)
- `CSE-CIS-ACCESS-NO-LEAST-PRIVILEGE-001` — Least privilege missing (if defined)
- `CSE-CIS-CONFIG-NO-BASELINE-001` — Configuration baseline missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of environment architecture and topology
- Assessment of network segmentation and isolation
- Evaluation of access control policies
- Examination of data handling practices
- Review of credential and secrets management
- Assessment of configuration management processes
- Analysis of developer access to production

Proper environment separation typically includes:

**Infrastructure isolation:**
- Separate networks/VPCs for each environment
- Network segmentation and firewall rules
- Separate Kubernetes clusters or isolated namespaces
- Distinct cloud accounts or subscriptions
- Dedicated compute and storage resources

**Data protection:**
- No production data in non-production environments
- Data masking and anonymization for test data
- Synthetic data generation
- Separate backup and disaster recovery systems
- Encrypted data at rest and in transit

**Access controls:**
- Role-based access control (RBAC)
- Principle of least privilege
- Just-in-time access for production
- Monitored and audited production access
- Separate credentials per environment

**Configuration management:**
- Environment-specific configurations
- Secrets management (HashiCorp Vault, AWS Secrets Manager)
- Environment variables and configuration injection
- Infrastructure as Code (IaC) per environment

**Common environments:**
- Development: Active coding and unit testing
- Testing/QA: Integration and functional testing
- Staging: Pre-production validation
- Production: Live customer-facing systems

The presence of this signal indicates a condition that warrants review in the context of production environment separation requirements.
