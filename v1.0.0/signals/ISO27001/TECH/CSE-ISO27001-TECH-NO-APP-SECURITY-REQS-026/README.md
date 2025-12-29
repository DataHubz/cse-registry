# CSE-ISO27001-TECH-NO-APP-SECURITY-REQS-026

**Missing Application Security Requirements**

## Signal Overview

| Field           | Value                                               |
|-----------------|-----------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-APP-SECURITY-REQS-026`        |
| Domain          | ISO27001                                            |
| Category        | TECH                                                |
| Status          | Active                                              |
| Introduced In   | 1.0.0                                               |

## Description

Information security requirements are not identified, specified, and approved for application development.

This signal indicates that applications are developed without documented security requirements, security acceptance criteria, or security specifications for authentication, authorization, data protection, and secure functionality.

## Applicability

This signal applies to:

- Web application development projects
- Mobile application development (iOS, Android)
- Desktop application development
- API and microservices development
- Cloud-native application development
- Database applications and stored procedures
- Third-party application integrations
- Application modernization and migration projects
- SaaS application customizations

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Requirements Without Security Specifications

```markdown
# Application Requirements Document
## User Stories
- As a user, I want to login to the system
- As a user, I want to view my profile
- As a user, I want to upload files

# Missing:
- Authentication requirements (MFA, password policy)
- Authorization requirements (RBAC, permissions)
- Data encryption requirements
- Session management requirements
- Input validation requirements
```

### Project Backlog Without Security Requirements

```yaml
# Agile project backlog
epic: "User Management"
stories:
  - id: US-001
    title: "User registration"
    acceptance_criteria:
      - User can create account
      - Email confirmation sent
    # No security acceptance criteria
    # No authentication requirements
    # No password strength requirements
```

### API Without Security Specifications

```yaml
# API specification
openapi: 3.0.0
paths:
  /api/users:
    get:
      summary: Get user list
      responses:
        '200':
          description: Success
# Missing:
# - Authentication requirements
# - Authorization requirements
# - Rate limiting requirements
# - Input validation requirements
# - Encryption requirements
```

### Application Approval Without Security Review

```text
# Application deployment checklist
✓ Functional testing complete
✓ Performance testing complete
✓ User acceptance testing complete
✗ Security requirements defined
✗ Security testing complete
✗ Security approval obtained

Status: Approved for Production
```

### Development Sprint Without Security Tasks

```text
# Sprint Planning
Sprint Goal: Implement payment processing

Tasks:
1. Create payment form UI
2. Integrate payment gateway API
3. Store transaction records
4. Send confirmation emails

Missing Security Tasks:
- Define PCI-DSS requirements
- Implement secure data handling
- Add fraud detection
- Configure encryption
- Security testing
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of security vulnerabilities
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.26**: Application security requirements - Information security requirements should be identified, specified and approved when developing or acquiring applications

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-SDLC-025` — Missing secure development lifecycle
- `CSE-ISO27001-TECH-NO-SECURE-ARCHITECTURE-027` — Lack of secure architecture
- `CSE-ISO27001-TECH-NO-SECURITY-TESTING-029` — Missing security testing

## Notes

Detection of this signal typically involves:

- Review of application requirements documentation
- Analysis of functional specifications and design documents
- Inspection of user stories and acceptance criteria
- Assessment of security requirements catalogs
- Examination of approval processes and security sign-offs
- Review of requirements traceability matrices
- Evaluation of security feature tracking in project management tools

The presence of this signal indicates a condition that warrants review in the context of application security requirements definition.
