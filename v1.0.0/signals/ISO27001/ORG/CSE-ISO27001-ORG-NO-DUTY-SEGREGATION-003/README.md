# CSE-ISO27001-ORG-NO-DUTY-SEGREGATION-003

**No Segregation of Duties**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-DUTY-SEGREGATION-003` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Conflicting duties and areas of responsibility are not segregated to reduce opportunities for unauthorized modification or misuse.

## Applicability

- Organizations where individuals can both initiate and approve transactions
- Environments allowing developers to deploy directly to production without review
- Systems where the same person configures and audits security controls
- Organizations lacking compensating controls for unavoidable duty conflicts
- Financial processes where a single person can authorize and execute payments

## Examples (Non-Normative)

### Developer with Production Access

```yaml
access_analysis:
  user: "developer_001"
  roles:
    - "software_developer"
    - "production_deployer"
  conflict_detected: true
  conflicting_duties:
    - "code_development"
    - "production_deployment"
  compensating_controls: []
```

### Combined Security Configuration and Audit

```yaml
role_conflict:
  user: "security_admin"
  permissions:
    - action: "configure_firewall_rules"
      granted: true
    - action: "audit_firewall_configuration"
      granted: true
  segregation_violated: true
  risk: "self-auditing enables concealment of unauthorized changes"
```

## ISO 27001:2022 Context (Informative)

- **A.5.3 Segregation of duties**: Conflicting duties and conflicting areas of responsibility should be segregated. The organization should consider the need for segregation of duties involving different phases of a task, different stages in the asset's life-cycle, and different levels of authorization.

## Related Signals

- `CSE-ISO27001-ORG-NO-SECURITY-ROLES-002`
- `CSE-ISO27001-ORG-NO-ACCESS-RIGHTS-MGMT-018`
