# CSE-ISO27001-TECH-NO-SOURCE-CODE-ACCESS-004

**No Source Code Access Control**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-SOURCE-CODE-ACCESS-004` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Read and write access to source code, development tools, and libraries is not appropriately managed. This signal indicates inadequate access controls for source code repositories, development environments, and software development assets.

## Applicability

- Organizations that develop software internally or for customers
- Environments with source code repositories (Git, SVN, etc.)
- Systems where development tools and libraries are not access-controlled
- Organizations without branch protection or code review requirements
- Environments lacking segregation between development and production

## Examples (Non-Normative)

### Unrestricted Repository Access

```yaml
source_repository:
  platform: github
  access_control:
    public_repositories: true
    branch_protection: disabled
    code_review_required: false
    commit_signing: not_enforced
    access_by_role: all_employees_write
    external_collaborators: unrestricted
```

### Unsecured Development Environment

```yaml
development_environment:
  version_control: git
  access_management:
    authentication: password_only
    mfa_required: false
    access_review: never
  library_management:
    dependency_scanning: disabled
    private_registry: not_used
  segregation:
    dev_prod_separation: none
```

## ISO 27001:2022 Context (Informative)

- **A.8.4 Access to source code**: Read and write access to source code, development tools and software libraries shall be appropriately managed.

## Related Signals

- `CSE-ISO27001-TECH-NO-ACCESS-RESTRICTION-003`
- `CSE-ISO27001-TECH-NO-PRIVILEGED-ACCESS-MGMT-002`
- `CSE-ISO27001-TECH-NO-CONFIG-MANAGEMENT-009`
- `CSE-ISO27001-TECH-NO-LOGGING-015`
