# CSE-ISO27001-TECH-NO-SECURE-CODING-028

**Missing Secure Coding Practices**

*New in ISO 27001:2022*

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-SECURE-CODING-028`        |
| Domain          | ISO27001                                        |
| Category        | TECH                                            |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

Secure coding principles are not applied to software development.

This signal indicates that developers lack secure coding standards, guidelines, training, or enforcement mechanisms to prevent common vulnerabilities such as injection flaws, authentication bypasses, and insecure data handling.

## Applicability

This signal applies to:

- Application source code (all languages)
- Infrastructure as code (Terraform, CloudFormation, etc.)
- Automation scripts (Python, Bash, PowerShell, etc.)
- Database queries and stored procedures
- API implementations
- Mobile application code
- Web application code
- Configuration files and templates
- Container definitions and Dockerfiles

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### SQL Injection Vulnerability

```python
# Insecure code with SQL injection
def get_user(username):
    query = f"SELECT * FROM users WHERE username = '{username}'"
    cursor.execute(query)
    # Should use parameterized queries
    # Correct: cursor.execute("SELECT * FROM users WHERE username = ?", (username,))
```

### Hardcoded Credentials

```javascript
// Hardcoded secrets in code
const API_KEY = "sk_live_51HxYz2eSeIySiQkwJ9zRpQX";
const DB_PASSWORD = "mypassword123";

// Should use environment variables or secret management
```

### Missing Input Validation

```java
// No input validation
public void processUserInput(String input) {
    // Direct use without validation
    executeCommand(input);
    // Should validate and sanitize input
}
```

### Insecure Deserialization

```python
# Unsafe deserialization
import pickle

def load_data(data):
    return pickle.loads(data)
    # Should use safe serialization formats like JSON
```

### Cross-Site Scripting (XSS)

```php
<!-- Insecure output without encoding -->
<div>Welcome, <?php echo $_GET['name']; ?></div>

<!-- Should use: htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8') -->
```

### Weak Cryptography

```javascript
// Weak hashing algorithm
const crypto = require('crypto');
const hash = crypto.createHash('md5').update(password).digest('hex');

// Should use bcrypt, scrypt, or Argon2 for passwords
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of vulnerability exploitation
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.28**: Secure coding - Secure coding principles should be applied to software development

This control is new in ISO 27001:2022. These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-SDLC-025` — Missing secure development lifecycle
- `CSE-ISO27001-TECH-NO-SECURITY-TESTING-029` — Missing security testing
- `CSE-ISO27001-TECH-NO-APP-SECURITY-REQS-026` — Missing application security requirements

## Notes

Detection of this signal typically involves:

- Static Application Security Testing (SAST) results
- Code review findings
- Review of secure coding standards documentation
- Assessment of developer training programs
- Analysis of code quality metrics and linting rules
- Examination of CI/CD pipeline security gates
- Review of OWASP Top 10 vulnerability patterns
- Assessment of dependency management practices

Common secure coding principles include:
- Input validation and sanitization
- Output encoding
- Parameterized queries
- Proper authentication and authorization
- Secure session management
- Cryptographic best practices
- Error handling and logging
- Least privilege principle
- Defense in depth

The presence of this signal indicates a condition that warrants review in the context of secure coding requirements.
