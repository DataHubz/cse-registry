# CSE-CIS-TRAINING-NO-SECURE-CODING-006

**Secure Coding Training Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-TRAINING-NO-SECURE-CODING-006` |
| Domain          | CIS                                |
| Category        | TRAINING                           |
| Control         | 14 - Security Awareness and Skills Training |
| Safeguard       | 14.6                               |
| IG Level        | IG2                                |
| Asset Type      | Users                              |
| Security Function | Protect                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks secure coding training for software developers and personnel involved in application development.

This signal indicates that there is no formal program to train developers on secure coding practices, common vulnerabilities, defensive programming techniques, and security testing methods appropriate for the languages, frameworks, and platforms used by the organization.

## Applicability

This signal applies to:

- Software development training programs
- Secure coding standards and practices
- Application security initiatives
- Developer onboarding and continuous education
- Third-party developer requirements
- DevSecOps implementation
- Software development lifecycle (SDLC) security

## Examples (Non-Normative)

### Missing Secure Coding Training

```
No documented training exists covering:
- Common vulnerability types (OWASP Top 10)
- Secure coding practices by language/framework
- Input validation and sanitization
- Authentication and authorization
- Cryptography and data protection
- Secure API design and implementation
```

### Undefined Developer Training Requirements

```yaml
# No secure coding training program established
developer_training:
  secure_coding:
    status: undefined
    languages: []
    frameworks: []
    frequency: null
  vulnerability_awareness:
    owasp_top_10: undefined
    cwe_sans_top_25: undefined
  security_testing: undefined
```

### Generic Development Training Only

```
Organization provides:
- Programming language training
- Framework and tool training
- General best practices
- No security-specific coding training
- No vulnerability awareness education
- No secure design principles
```

### Missing Security Integration

```
Developers write code but:
- No training on secure coding practices
- No awareness of common vulnerabilities
- No education on security testing
- No guidance on secure design patterns
- No training on security tools (SAST/DAST)
- No integration of security into SDLC
```

## What This Signal Does NOT Assert

- Whether developers write secure code
- Whether application security vulnerabilities exist
- The effectiveness of code review or testing processes
- Compliance or non-compliance with any framework
- Required remediation actions
- The security posture of developed applications

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 14: Security Awareness and Skills Training**
- **Safeguard 14.6**: Train workforce members on secure authentication and MFA

## Related Signals

- `CSE-CIS-TRAINING-NO-ROLE-SPECIFIC-002` — Role-Specific Training Missing
- `CSE-CIS-TRAINING-NO-SKILLS-ASSESSMENT-005` — Security Skills Assessment Missing
- `CSE-CIS-SOFTWARE-NO-INVENTORY-001` — Software Inventory Missing
