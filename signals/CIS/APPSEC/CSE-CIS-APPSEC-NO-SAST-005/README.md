# CSE-CIS-APPSEC-NO-SAST-005

**Static Application Security Testing Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-SAST-005`             |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not implemented static application security testing (SAST) in the software development lifecycle.

This signal indicates the absence of automated source code analysis to identify security vulnerabilities, coding errors, and security weaknesses before code is compiled or executed.

## Applicability

This signal applies to:

- Software development teams
- Application security teams
- DevOps and DevSecOps teams
- Security engineering teams
- Quality assurance teams
- CI/CD pipeline administrators
- Code review teams
- Organizations developing custom software

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No SAST Tools Implemented

```text
Missing static analysis capabilities:
- Source code vulnerability scanning
- Secure coding standards enforcement
- Code quality analysis
- Security weakness detection
- Compliance rule checking
- Custom security rules
- IDE integration
- CI/CD integration
```

### CI/CD Pipeline Without SAST

```yaml
# CI/CD pipeline missing security scanning
pipeline:
  stages:
    - build:
        - compile_code
        - run_unit_tests
    - deploy:
        - deploy_to_staging
    # Missing:
    # - sast_scan:
    #     - static_code_analysis
    #     - security_vulnerability_scan
    #     - compliance_check
```

### No Pre-Commit Security Checks

```python
# Git hooks without security validation
# .git/hooks/pre-commit
#!/bin/bash

# Code formatting
black .

# Linting
pylint src/

# Missing:
# SAST scanning
# bandit --recursive src/
# semgrep --config auto src/
# Security credential scanning
# gitleaks protect --staged
```

### Missing Language-Specific Scanners

```text
Development environment without SAST tools:
- Java: No SpotBugs, FindSecBugs, or Checkmarx
- Python: No Bandit, Semgrep, or pylint security plugins
- JavaScript: No ESLint security plugin, SonarQube
- C/C++: No Coverity, Clang static analyzer
- .NET: No Security Code Scan, SonarQube
- Go: No gosec, staticcheck
```

### No Security Rule Configuration

```json
// Linter configuration without security rules
{
  "eslintConfig": {
    "extends": ["eslint:recommended"],
    "rules": {
      "no-unused-vars": "error",
      "no-console": "warn"
    }
  }
}
```

### Lack of Vulnerability Findings Management

```sql
-- Missing SAST findings tracking
-- No database or system to track:
-- - Identified vulnerabilities
-- - False positive markings
-- - Remediation status
-- - Trend analysis
-- - Developer assignments
-- - SLA tracking
```

### No Security Gate in Build Process

```groovy
// Jenkins pipeline without security gates
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        // Missing security stage:
        // stage('SAST Scan') {
        //     steps {
        //         sh 'mvn dependency-check:check'
        //         sh 'java -jar spotbugs.jar'
        //     }
        //     post {
        //         failure {
        //             error('Security vulnerabilities found')
        //         }
        //     }
        // }
        stage('Deploy') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}
```

## What This Signal Does NOT Assert

- Whether code is secure
- The effectiveness of manual code reviews
- Whether other security testing is performed
- The specific SAST tools to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required vulnerability fix timelines

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.5**: Use Up-to-Date and Trusted Third-Party Software Components
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Use up-to-date and trusted third-party software components. When possible, choose established and proven frameworks and libraries that provide adequate security. Acquire these components from trusted sources or evaluate the software for vulnerabilities before use."

Note: While this safeguard focuses on third-party components, SAST is a critical tool for identifying vulnerabilities in both custom code and the integration of third-party components. SAST helps ensure secure coding practices as part of CIS Control 16's comprehensive application security approach.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-SDLC-001` — Secure SDLC missing
- `CSE-CIS-APPSEC-NO-STANDARDS-002` — Secure coding standards missing
- `CSE-CIS-APPSEC-NO-DAST-006` — Dynamic application security testing missing
- `CSE-CIS-APPSEC-NO-CODE-REVIEW-009` — Security code review missing

## Notes

Detection of this signal typically involves:

- Review of CI/CD pipeline configurations
- Assessment of security testing tools integration
- Evaluation of SAST tool deployment and usage
- Examination of security scanning frequency
- Review of vulnerability findings management
- Assessment of security gate enforcement
- Analysis of IDE security plugin usage

SAST implementation typically includes:

- **Tool selection**: Language-specific analyzers, commercial or open-source
- **Integration points**: IDE, pre-commit hooks, CI/CD pipeline
- **Rule configuration**: Security standards, compliance requirements, custom rules
- **Scan frequency**: Every commit, daily builds, release gates
- **Findings management**: Triage, false positive handling, remediation tracking
- **Quality gates**: Build failure thresholds, blocking criteria
- **Developer training**: Tool usage, finding remediation

Common SAST capabilities:
- SQL injection detection
- Cross-site scripting (XSS) identification
- Hardcoded secrets discovery
- Insecure cryptography usage
- Authentication/authorization flaws
- Input validation issues
- Code quality and complexity
- OWASP Top 10 coverage

Common SAST tools:
- Open source: Semgrep, Bandit, ESLint security, gosec, SpotBugs
- Commercial: Checkmarx, Veracode, Fortify, Snyk Code, SonarQube

The presence of this signal indicates a condition that warrants review in the context of static application security testing requirements.
