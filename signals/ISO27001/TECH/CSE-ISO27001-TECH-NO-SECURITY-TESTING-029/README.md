# CSE-ISO27001-TECH-NO-SECURITY-TESTING-029

**Missing Security Testing in Development**

## Signal Overview

| Field           | Value                                               |
|-----------------|-----------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-SECURITY-TESTING-029`         |
| Domain          | ISO27001                                            |
| Category        | TECH                                                |
| Status          | Active                                              |
| Introduced In   | 1.0.0                                               |

## Description

Security testing processes are not defined and implemented in the development lifecycle.

This signal indicates that applications and systems are developed and deployed without appropriate security testing such as static analysis, dynamic analysis, penetration testing, or vulnerability scanning.

## Applicability

This signal applies to:

- Application development projects
- Infrastructure as code deployments
- System configuration changes
- API and microservices development
- Mobile application releases
- Web application deployments
- Container image builds
- Cloud infrastructure deployments
- Third-party software integrations

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### CI/CD Pipeline Without Security Testing

```yaml
# Pipeline without security tests
stages:
  - build
  - test
  - deploy

build:
  script:
    - npm install
    - npm run build

test:
  script:
    - npm run test
  # No SAST scanning
  # No dependency checking
  # No container scanning
  # No security test cases

deploy:
  script:
    - kubectl apply -f deployment.yaml
  # No security approval gate
```

### No Static Analysis

```text
Development Workflow:
1. Write code
2. Run unit tests
3. Code review (functional only)
4. Merge to main
5. Deploy

Missing:
- SAST (Static Application Security Testing)
- Dependency vulnerability scanning
- Secret scanning
- Code quality security rules
```

### Deployment Without Security Validation

```bash
# Deployment script
#!/bin/bash
docker build -t myapp:latest .
docker push myapp:latest
kubectl set image deployment/myapp myapp=myapp:latest

# No image scanning
# No vulnerability assessment
# No security testing
# No penetration testing
```

### Missing DAST

```text
Testing Plan:
✓ Functional testing
✓ Performance testing
✓ Integration testing
✗ Dynamic Application Security Testing (DAST)
✗ Penetration testing
✗ Security regression testing
✗ Authentication/authorization testing
```

### No Security Acceptance Criteria

```yaml
# Release checklist
- name: "Release v2.0"
  requirements:
    - unit_tests_pass: true
    - integration_tests_pass: true
    - performance_acceptable: true
    # Missing security testing requirements:
    # - sast_scan_pass: false
    # - dependency_scan_pass: false
    # - dast_scan_pass: false
    # - penetration_test_complete: false
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of undetected vulnerabilities
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.29**: Security testing in development and acceptance - Security testing processes should be defined and implemented in the development life cycle

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-SDLC-025` — Missing secure development lifecycle
- `CSE-ISO27001-TECH-NO-SECURE-CODING-028` — Missing secure coding practices
- `CSE-ISO27001-TECH-NO-VULNERABILITY-MGMT-013` — Inadequate vulnerability management

## Notes

Detection of this signal typically involves:

- Review of CI/CD pipeline configurations
- Analysis of security testing tool deployment and usage
- Inspection of test plans and test cases
- Assessment of SAST/DAST implementation
- Examination of penetration testing schedules and reports
- Review of dependency and vulnerability scanning
- Evaluation of security test automation
- Assessment of security acceptance criteria

Types of security testing include:
- Static Application Security Testing (SAST)
- Dynamic Application Security Testing (DAST)
- Interactive Application Security Testing (IAST)
- Software Composition Analysis (SCA)
- Container and image scanning
- Infrastructure as code scanning
- Penetration testing
- Security regression testing
- Fuzz testing

The presence of this signal indicates a condition that warrants review in the context of security testing requirements.
