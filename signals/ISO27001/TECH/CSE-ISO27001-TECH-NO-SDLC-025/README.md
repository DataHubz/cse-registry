# CSE-ISO27001-TECH-NO-SDLC-025

**Missing Secure Development Life Cycle**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-SDLC-025`         |
| Domain          | ISO27001                                |
| Category        | TECH                                    |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

Rules for secure development of software and systems are not established and applied.

This signal indicates that the organization lacks a formal secure software development lifecycle (SDLC) with security integrated into planning, design, development, testing, and deployment phases.

## Applicability

This signal applies to:

- Custom application development projects
- System integration and configuration
- Infrastructure as code development
- API and microservices development
- Mobile application development
- Web application development
- Database schema and stored procedure development
- Automation scripts and tooling
- Third-party software customization

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Documented SDLC

```text
Development Process:
- No formal SDLC methodology
- No security requirements gathering phase
- No threat modeling or security design review
- No secure coding standards
- No security testing requirements
- No security sign-off before deployment
```

### Development Without Security Gates

```yaml
# CI/CD pipeline without security controls
pipeline:
  stages:
    - build
    - test
    - deploy
  # No SAST scanning
  # No dependency checking
  # No security approval gate
  # No vulnerability assessment
```

### No Security Requirements

```markdown
# Project Requirements Document
## Functional Requirements
- User registration
- Data storage
- Report generation

## Non-Functional Requirements
- Performance: < 2s response time
- Availability: 99.9% uptime

# Missing: Security requirements, threat model, security controls
```

### Deployment Without Security Review

```bash
# Direct deployment to production
git push production main
# No code review for security
# No security testing
# No security architecture review
# No penetration testing
```

### Missing Secure Coding Standards

```python
# Code without security guidelines
def login(username, password):
    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
    # SQL injection vulnerability
    # No input validation
    # No parameterized queries
    # No security code review
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of security vulnerabilities
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.25**: Secure development life cycle - Rules for the secure development of software and systems should be established and applied

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-APP-SECURITY-REQS-026` — Missing application security requirements
- `CSE-ISO27001-TECH-NO-SECURE-CODING-028` — Lack of secure coding practices
- `CSE-ISO27001-TECH-NO-SECURITY-TESTING-029` — Missing security testing
- `CSE-ISO27001-TECH-NO-SECURE-ARCHITECTURE-027` — Lack of secure architecture

## Notes

Detection of this signal typically involves:

- Review of SDLC documentation and procedures
- Analysis of development project lifecycle gates
- Inspection of security requirements in project plans
- Assessment of threat modeling practices
- Examination of secure coding standards and training
- Review of CI/CD pipeline security controls
- Evaluation of security testing integration
- Assessment of security design review processes

The presence of this signal indicates a condition that warrants review in the context of secure development lifecycle requirements.
