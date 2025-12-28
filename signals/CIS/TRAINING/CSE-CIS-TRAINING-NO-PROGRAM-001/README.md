# CSE-CIS-TRAINING-NO-PROGRAM-001

**Security Awareness Program Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-TRAINING-NO-PROGRAM-001`  |
| Domain          | CIS                                |
| Category        | TRAINING                           |
| Control         | 14 - Security Awareness and Skills Training |
| Safeguard       | 14.1                               |
| IG Level        | IG1                                |
| Asset Type      | Users                              |
| Security Function | Protect                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks a documented and implemented security awareness training program.

This signal indicates that there is no formal program to establish and maintain security awareness training for all users, including requirements for what topics should be covered, training frequency, delivery methods, and tracking of completion.

## Applicability

This signal applies to:

- Enterprise security awareness policies and procedures
- User training and education programs
- Human resources onboarding and continuous training
- Organizational security documentation
- Compliance and governance frameworks
- Security culture development initiatives
- Employee lifecycle management

## Examples (Non-Normative)

### Missing Security Awareness Policy

```
No documented policy exists defining:
- Required security awareness topics
- Training frequency and scheduling
- Target audience and scope
- Training delivery methods
- Completion tracking requirements
```

### Undefined Training Requirements

```yaml
# No configuration management for training requirements
security_awareness:
  status: undefined
  documented: false
  approved: false
  implemented: false
  tracking: false
```

### Ad-Hoc Training Practices

```
Organization relies on:
- Optional or voluntary training
- Inconsistent training across departments
- No standardized curriculum
- No completion tracking or enforcement
- No refresher training schedule
```

### Missing Program Documentation

```
Some training may exist but:
- No documented program requirements
- No standard for training content
- No defined training intervals
- No completion tracking established
- No accountability for participation
```

## What This Signal Does NOT Assert

- Whether individual employees have received any security training
- The quality or effectiveness of any existing training
- Whether security incidents have occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The security posture of the organization

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 14: Security Awareness and Skills Training**
- **Safeguard 14.1**: Establish and maintain a security awareness program to influence behavior among the workforce to be security conscious and properly skilled to reduce cybersecurity risks to the enterprise

## Related Signals

- `CSE-CIS-TRAINING-NO-ROLE-SPECIFIC-002` — Role-Specific Training Missing
- `CSE-CIS-TRAINING-NO-SOCIAL-ENGINEERING-003` — Social Engineering Awareness Missing
- `CSE-CIS-TRAINING-NO-PHISHING-EXERCISES-004` — Phishing Exercises Missing
