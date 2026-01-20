# CSE-CIS-APPSEC-NO-STANDARDS-002

**Secure Coding Standards Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-STANDARDS-002`        |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not established secure coding standards for software development.

This signal indicates the absence of documented secure coding practices, guidelines, and standards that developers must follow to prevent common vulnerabilities and security weaknesses in application code.

## Applicability

This signal applies to:

- Software development teams
- Application developers
- DevOps and DevSecOps teams
- Code review teams
- Quality assurance teams
- Engineering leadership
- Organizations developing custom software
- Third-party development contractors

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Documented Coding Standards

```text
Missing secure coding documentation:
- Input validation standards
- Output encoding guidelines
- Authentication requirements
- Authorization patterns
- Cryptography usage standards
- Error handling practices
- Logging requirements
- Session management guidelines
```

### Lack of Language-Specific Guidelines

```python
# Code without standardized security patterns
def user_login(username, password):
    # Missing input validation
    query = f"SELECT * FROM users WHERE username='{username}' AND password='{password}'"
    # SQL injection vulnerability - no parameterized queries
    # No password hashing verification
    # No brute force protection
    # No secure session management
    return execute_query(query)
```

### Missing OWASP Integration

```yaml
# Coding standards without OWASP references
coding_guidelines:
  style_guide: pep8
  documentation: required
  testing: unit_tests_required
  # Missing:
  # owasp_top_10: not_addressed
  # owasp_proactive_controls: not_referenced
  # cwe_mitigation: not_documented
```

### No Input Validation Standards

```javascript
// API endpoint without validation standards
app.post('/api/user/update', (req, res) => {
    // No input validation
    // No sanitization
    // No type checking
    // No length limits
    const userData = req.body;
    database.update('users', userData);
});
```

### Missing Cryptography Guidelines

```java
// Encryption without standards
public class DataEncryptor {
    // Using deprecated/weak algorithms
    private static final String ALGORITHM = "DES";

    // No key management standards
    private static final String KEY = "12345678";

    // Missing:
    // - Approved encryption algorithms
    // - Key length requirements
    // - IV generation standards
    // - Key rotation policies
}
```

### No Authentication Standards

```text
Missing authentication requirements:
- Password complexity standards
- Multi-factor authentication guidance
- Session timeout policies
- Token management practices
- OAuth/OIDC implementation guidelines
- Credential storage requirements
- Password reset procedures
```

### Lack of Error Handling Standards

```python
# Error handling exposing sensitive information
try:
    execute_database_query(sql)
except Exception as e:
    # Exposing internal details to users
    return f"Database error: {str(e)}"
    # Missing:
    # - Generic user error messages
    # - Secure logging of detailed errors
    # - No sensitive data in error messages
```

## What This Signal Does NOT Assert

- Whether developers write secure code
- The effectiveness of existing development practices
- Whether security training has been provided
- The specific coding standards to be adopted
- Compliance or non-compliance with CIS Controls or any framework
- Required programming languages or frameworks

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.2**: Establish and Maintain a Process to Accept and Address Software Vulnerabilities
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Establish and maintain a process to accept and address reports of software vulnerabilities, including providing a means for external entities to report. The process is to include such items as: a vulnerability handling policy that identifies reporting process, responsible party for handling vulnerability reports, and a process for intake, assignment, remediation, and remediation testing. As part of the process, use a vulnerability tracking system that includes severity ratings and metrics for measuring timing for identification, analysis, and remediation of vulnerabilities. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard. Third-party application developers need to consider this an externally-facing policy that helps to set expectations for outside stakeholders."

This safeguard is closely related to secure coding standards which help prevent vulnerabilities from being introduced in the first place.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-SDLC-001` — Secure SDLC missing
- `CSE-CIS-APPSEC-NO-CODE-REVIEW-009` — Security code review missing
- `CSE-CIS-APPSEC-NO-SAST-005` — Static application security testing missing
- `CSE-CIS-TRAINING-NO-ROLE-TRAINING-002` — Role-based training missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of secure coding documentation and standards
- Assessment of language-specific security guidelines
- Evaluation of OWASP integration in coding practices
- Examination of input validation requirements
- Review of authentication and authorization standards
- Assessment of cryptography usage guidelines
- Analysis of error handling and logging standards

Secure coding standards typically address:
- **Input validation**: Whitelisting, sanitization, type checking
- **Output encoding**: Context-aware encoding, XSS prevention
- **Authentication**: Password policies, MFA, session management
- **Authorization**: Access control patterns, privilege checks
- **Cryptography**: Approved algorithms, key management
- **Error handling**: Secure logging, generic error messages
- **Data protection**: Encryption at rest and in transit
- **OWASP Top 10**: Common vulnerability prevention

The presence of this signal indicates a condition that warrants review in the context of secure coding requirements.
