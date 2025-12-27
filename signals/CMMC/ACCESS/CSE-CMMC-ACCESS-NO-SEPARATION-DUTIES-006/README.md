# CSE-CMMC-ACCESS-NO-SEPARATION-DUTIES-006

**Separation of Duties Not Enforced**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-SEPARATION-DUTIES-006` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Critical functions are not divided among different individuals to reduce the risk of malicious activity without collusion.

This signal indicates that single individuals may have the ability to perform security-critical actions without oversight or checks.

## Applicability

- Financial transaction processing
- Privileged access management
- Change management and deployment
- Security administration
- Audit and compliance functions

## Examples (Non-Normative)

### Single Admin for Critical Functions

```
User: admin@company.com
Roles: DBA, Security Admin, Backup Admin, Audit Reviewer
# No separation of duties
```

### No Dual Control

```
Deployment Pipeline:
- Developer commits code
- Same developer approves PR
- Same developer deploys to production
```

## CMMC Context (Informative)

- **AC.L2-3.1.4**: Separate the duties of individuals to reduce the risk of malevolent activity without collusion

## Related Signals

- `CSE-CMMC-ACCESS-NO-LEAST-PRIVILEGE-002`
