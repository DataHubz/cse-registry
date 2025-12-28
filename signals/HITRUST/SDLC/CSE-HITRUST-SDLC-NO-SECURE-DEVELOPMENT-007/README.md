# CSE-HITRUST-SDLC-NO-SECURE-DEVELOPMENT-007

**Secure Development Practices Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-SDLC-NO-SECURE-DEVELOPMENT-007` |
| Domain | HITRUST |
| Category | SDLC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Secure development practices and secure coding standards have not been established or followed in the development of information systems processing protected health information (PHI) or other sensitive data.

This signal indicates the absence of formal secure development lifecycle (SDLC) processes, secure coding guidelines, developer training, security tools integration, and quality assurance practices that ensure security is built into applications from inception. Secure development practices include threat modeling, security requirements, secure design principles, code analysis, and security testing.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Software development teams building healthcare applications
- Organizations procuring custom software
- Medical device manufacturers
- Healthcare SaaS providers
- Organizations with in-house development teams

## Examples (Non-Normative)

### Missing Secure Coding Standards

```markdown
# Development Team Documentation
## Coding Standards
- Use consistent indentation
- Follow naming conventions
- Write unit tests for new features

# Security Standards - NOT DEFINED
# No secure coding guidelines
# No OWASP Top 10 training
# No security review requirements
```

### Development Without Security Tools

```yaml
# CI/CD pipeline without security integration
pipeline:
  stages:
    - build
    - test
    - deploy

  build:
    - npm install
    - npm run build

  test:
    - npm run unit-tests

  # Missing security stages:
  # - SAST (Static Application Security Testing)
  # - Dependency scanning
  # - Container scanning
  # - DAST (Dynamic Application Security Testing)
```

### Uncontrolled Third-Party Dependencies

```javascript
// package.json without security considerations
{
  "dependencies": {
    "express": "*",  // Wildcard version - no version pinning
    "mongoose": "^5.0.0",  // Outdated major version
    "some-unknown-package": "1.0.0"  // Unvetted dependency
  }
  // No dependency scanning
  // No vulnerability monitoring
  // No license compliance checking
}
```

## What This Signal Does NOT Assert

- Whether developers follow general coding best practices
- The quality or functionality of developed applications
- Whether the organization is compliant or non-compliant with HITRUST
- The specific secure development framework to be used
- Whether security controls exist in production systems
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 10 - Information Systems Acquisition, Development, and Maintenance
- **Control Reference**: 10.g
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for secure development that:
- Establishes secure coding standards and guidelines
- Provides security training for developers
- Implements threat modeling during design phase
- Integrates security tools into development pipeline
- Conducts regular security assessments of code
- Manages third-party dependencies and components
- Implements secure configuration management
- Documents security architecture and design decisions
- Reviews and approves security exceptions

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-SDLC-NO-REQUIREMENTS-001` - Security requirements not specified
- `CSE-HITRUST-SDLC-NO-CODE-REVIEW-008` - Code review not conducted
- `CSE-HITRUST-SDLC-NO-TESTING-009` - Security testing missing
- `CSE-HITRUST-OPS-NO-CHANGE-MANAGEMENT-002` - Change management missing
- `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001` - Security training missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of development lifecycle documentation
- Examination of coding standards and guidelines
- Assessment of developer security training programs
- Analysis of CI/CD pipeline configurations
- Review of security tool integration (SAST, DAST, SCA)
- Evaluation of threat modeling practices
- Assessment of dependency management processes
- Review of security architecture documentation
- Verification of security review and approval processes

The presence of this signal indicates a systemic gap in the development process that likely results in applications with multiple security vulnerabilities. Establishing secure development practices is essential for preventing security issues rather than attempting to fix them after deployment.
