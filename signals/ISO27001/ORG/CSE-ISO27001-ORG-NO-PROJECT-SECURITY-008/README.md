# CSE-ISO27001-ORG-NO-PROJECT-SECURITY-008

**No Information Security in Project Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-PROJECT-SECURITY-008` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Information security is not integrated into project management regardless of project type.

## Applicability

- Projects without security requirements in charters or scope documents
- Development projects lacking security milestones or gates
- Infrastructure projects without security design reviews
- Organizations where security is addressed as an afterthought post-delivery
- Project methodologies that do not include security activities

## Examples (Non-Normative)

### Project Template Without Security

```yaml
project_template:
  phases:
    - initiation
    - planning
    - execution
    - closure
  security_integration:
    requirements_phase: false
    design_review: false
    security_testing: false
    acceptance_criteria: false
  deliverables:
    security_assessment: "not_required"
```

### Post-Delivery Security Retrofit

```yaml
project_status:
  name: "Customer Portal Upgrade"
  completion: "95%"
  security_considerations:
    threat_model: "not_performed"
    security_requirements: "none_defined"
    security_testing: "planned_after_launch"
  risk: "security vulnerabilities discovered post-deployment"
```

## ISO 27001:2022 Context (Informative)

- **A.5.8 Information security in project management**: Information security should be integrated into project management. This should apply to all types of projects, whether conducted by the organization or outsourced, and to all phases of a project.

## Related Signals

- `CSE-ISO27001-ORG-NO-SECURITY-POLICIES-001`
