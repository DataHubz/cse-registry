# CSE-CIS-TRAINING-NO-ROLE-SPECIFIC-002

**Role-Specific Training Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-TRAINING-NO-ROLE-SPECIFIC-002` |
| Domain          | CIS                                |
| Category        | TRAINING                           |
| Control         | 14 - Security Awareness and Skills Training |
| Safeguard       | 14.2                               |
| IG Level        | IG1                                |
| Asset Type      | Users                              |
| Security Function | Protect                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks role-specific security awareness training for personnel with elevated access or security responsibilities.

This signal indicates that there is no formal program to provide specialized security training tailored to specific job roles, such as administrators, developers, security team members, and others with privileged access or security-critical responsibilities.

## Applicability

This signal applies to:

- Security training programs for privileged users
- Administrator and IT staff training requirements
- Developer security training and secure coding practices
- Security team professional development
- Third-party and contractor training obligations
- Role-based access control (RBAC) implementations
- Separation of duties enforcement

## Examples (Non-Normative)

### Missing Role-Based Training Policy

```
No documented policy exists defining:
- Which roles require specialized training
- Role-specific training content requirements
- Training frequency for different roles
- Prerequisites or certification requirements
- Tracking of role-specific training completion
```

### Undefined Role-Specific Requirements

```yaml
# No differentiation between general and role-specific training
training_program:
  general_awareness: true
  role_specific:
    administrators: undefined
    developers: undefined
    security_team: undefined
    executives: undefined
```

### One-Size-Fits-All Training

```
Organization provides:
- Same training content for all users regardless of role
- No specialized training for privileged users
- No technical security training for IT staff
- No secure coding training for developers
- No advanced training for security personnel
```

### Missing Specialized Training

```
Privileged users exist but:
- Administrators receive no system security training
- Developers receive no secure coding training
- Security team receives no specialized training
- Executives receive no targeted awareness training
- No role-specific training requirements documented
```

## What This Signal Does NOT Assert

- Whether general security awareness training exists
- The effectiveness of any existing training programs
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The competency level of personnel

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 14: Security Awareness and Skills Training**
- **Safeguard 14.2**: Train workforce members to be aware of social engineering and phishing attacks

## Related Signals

- `CSE-CIS-TRAINING-NO-PROGRAM-001` — Security Awareness Program Missing
- `CSE-CIS-TRAINING-NO-SECURE-CODING-006` — Secure Coding Training Missing
- `CSE-CIS-ACCESS-NO-PROCESS-001` — Access Management Process Missing
