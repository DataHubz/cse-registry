# CSE-CIS-APPSEC-NO-CODE-REVIEW-009

**Security Code Review Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-CODE-REVIEW-009`      |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not implemented security-focused code review processes for application development.

This signal indicates the absence of systematic peer review of source code with a specific focus on identifying security vulnerabilities, insecure coding practices, and potential security weaknesses before code is merged and deployed.

## Applicability

This signal applies to:

- Software development teams
- Application security teams
- DevSecOps teams
- Security engineering teams
- Code review teams
- Senior developers and architects
- Quality assurance teams
- Engineering leadership

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Code Review Process

```text
Code commit workflow without review:
1. Developer writes code
2. Developer commits to main branch
3. Code automatically deployed

Missing:
- Peer review requirement
- Security review checklist
- Pull request approval process
- Security-focused reviewers
- Automated security checks
```

### Pull Requests Without Security Focus

```yaml
# Pull request template without security considerations
pull_request_template:
  sections:
    - description: "What does this PR do?"
    - testing: "How was this tested?"
    - breaking_changes: "Any breaking changes?"
  # Missing security review sections:
  # - security_impact: "Security implications?"
  # - threat_model: "Threats addressed/introduced?"
  # - sensitive_data: "Handling of sensitive data?"
  # - authentication: "Auth/authz changes?"
  # - input_validation: "Input validation approach?"
  # - dependencies: "New dependencies and their security?"
```

### No Security Review Checklist

```markdown
<!-- Code review checklist without security items -->
## Review Checklist
- [ ] Code follows style guidelines
- [ ] Tests are included
- [ ] Documentation is updated
- [ ] No console.log statements

<!-- Missing security checks:
- [ ] Input validation implemented
- [ ] Output encoding applied
- [ ] Authentication/authorization proper
- [ ] No hardcoded secrets
- [ ] SQL injection prevented
- [ ] XSS vulnerabilities addressed
- [ ] CSRF protection in place
- [ ] Secure cryptography used
- [ ] Error handling doesn't leak info
- [ ] Logging doesn't expose sensitive data
-->
```

### Missing Security-Trained Reviewers

```python
# GitHub CODEOWNERS without security reviewers
# Functional area owners only
/frontend/          @frontend-team
/backend/           @backend-team
/database/          @database-team
/infrastructure/    @devops-team

# Missing:
# /*/auth/          @security-team @appsec-team
# /*/payment/       @security-team @compliance-team
# /**/crypto/       @security-team
# /**/*secret*      @security-team
# /**/*password*    @security-team
```

### No Automated Security Checks in Review

```json
{
  "github_actions": {
    "pull_request": {
      "checks": [
        "unit-tests",
        "linting",
        "build"
      ]
    }
  }
}
```

### Lack of Security Review for High-Risk Changes

```javascript
// Critical authentication code without security review
// PR #1234 - Merged without security team review
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    // Security issues not caught in review:
    // - No input validation
    // - No rate limiting
    // - Password compared directly (timing attack)
    // - No account lockout
    // - Session token not secure

    const user = await db.query(
        `SELECT * FROM users WHERE username='${username}'`
    );

    if (user && user.password === password) {
        const token = Math.random().toString(36);
        res.json({ token });
    }
});
```

### Missing Review of Third-Party Dependencies

```toml
# Cargo.toml - dependencies added without security review
[dependencies]
serde = "1.0"
tokio = "1.0"
random-crate-from-unknown-author = "0.1.0"  # No security vetting

# Missing review for:
# - Dependency reputation
# - Known vulnerabilities
# - License compatibility
# - Maintenance status
# - Supply chain security
```

### No Post-Deployment Security Review

```bash
#!/bin/bash
# Deployment script without security validation

git checkout main
git pull origin main
npm install
npm run build
kubectl apply -f deployment.yaml

# Missing post-deployment checks:
# - Security configuration review
# - Secrets properly injected
# - Security headers configured
# - HTTPS enforced
# - Security monitoring enabled
# - Incident response plan updated
```

## What This Signal Does NOT Assert

- Whether code reviews are performed
- Whether code is secure
- Whether automated testing exists
- The specific review process to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required number of reviewers or approval gates

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.9**: Train Developers in Application Security Concepts and Secure Coding
- **Implementation Group**: IG3
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Ensure that all software development personnel receive training in writing secure code for their specific development environment and responsibilities. Training can include general security principles and application security standard practices. Conduct training at least annually and design in a way to promote security within the development team, and build a culture of security among the developers."

Note: While this safeguard focuses on training, security code review is a critical mechanism for applying secure coding knowledge, identifying vulnerabilities, and providing real-time education to developers. Code review reinforces training and helps build a security-aware development culture.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-SDLC-001` — Secure SDLC missing
- `CSE-CIS-APPSEC-NO-STANDARDS-002` — Secure coding standards missing
- `CSE-CIS-APPSEC-NO-SAST-005` — Static application security testing missing
- `CSE-CIS-TRAINING-NO-ROLE-TRAINING-002` — Role-based training missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of code review processes and policies
- Assessment of pull request workflows
- Evaluation of security review checklists
- Examination of reviewer qualifications and training
- Review of automated security checks in CI/CD
- Assessment of high-risk code review requirements
- Analysis of security review documentation

Security code review best practices:

**Review process:**
- Mandatory peer review before merge
- Security-focused review checklist
- Dedicated security reviewers for high-risk changes
- Documented review comments and decisions
- Required approvals before deployment

**Security review focus areas:**
- **Authentication/Authorization**: Proper access controls
- **Input validation**: Sanitization and type checking
- **Output encoding**: XSS and injection prevention
- **Cryptography**: Strong algorithms and key management
- **Secrets management**: No hardcoded credentials
- **Error handling**: No information leakage
- **Logging**: Proper audit trails without sensitive data
- **Dependencies**: Security of third-party components
- **API security**: Rate limiting, authentication, validation
- **Data protection**: Encryption and privacy compliance

**Tools to support security review:**
- Code review platforms (GitHub, GitLab, Bitbucket)
- Static analysis (SAST) integration
- Security linters and plugins
- Dependency scanners
- Secret detection tools
- Code annotation and commenting
- Review metrics and tracking

**High-risk changes requiring enhanced review:**
- Authentication and authorization logic
- Cryptographic operations
- Payment processing
- Personal data handling
- Administrative functions
- External integrations
- Security controls and configurations

**Security reviewer qualifications:**
- Security training and certifications
- Knowledge of OWASP Top 10
- Secure coding expertise
- Threat modeling skills
- Vulnerability assessment experience

The presence of this signal indicates a condition that warrants review in the context of security code review requirements.
