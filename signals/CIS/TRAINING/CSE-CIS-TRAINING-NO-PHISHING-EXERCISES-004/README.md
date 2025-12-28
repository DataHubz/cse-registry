# CSE-CIS-TRAINING-NO-PHISHING-EXERCISES-004

**Phishing Exercises Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-TRAINING-NO-PHISHING-EXERCISES-004` |
| Domain          | CIS                                |
| Category        | TRAINING                           |
| Control         | 14 - Security Awareness and Skills Training |
| Safeguard       | 14.4                               |
| IG Level        | IG1                                |
| Asset Type      | Users                              |
| Security Function | Protect                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks a program to conduct simulated phishing exercises to test and reinforce security awareness training.

This signal indicates that there is no formal program to regularly test users' ability to recognize and respond to phishing attempts through controlled simulation exercises, measure effectiveness, and provide targeted training based on results.

## Applicability

This signal applies to:

- Security awareness training validation programs
- Phishing simulation and testing initiatives
- User behavior measurement and analytics
- Training effectiveness assessment
- Security culture development programs
- Incident response readiness testing
- Continuous security improvement initiatives

## Examples (Non-Normative)

### Missing Phishing Exercise Program

```
No documented program exists defining:
- Phishing simulation frequency and scope
- Exercise design and approval process
- Target audience and coverage requirements
- Metrics and success criteria
- Remedial training for users who fail
- Program governance and oversight
```

### Undefined Simulation Requirements

```yaml
# No phishing exercise program established
phishing_program:
  simulations:
    status: undefined
    frequency: null
    coverage: null
    tracking: false
  remedial_training: false
  metrics: undefined
```

### Training Without Validation

```
Organization provides:
- Phishing awareness training content
- No practical testing of user awareness
- No simulated phishing campaigns
- No measurement of training effectiveness
- No feedback loop for improvement
- No identification of high-risk users
```

### Missing Exercise Infrastructure

```
No capability exists to:
- Send simulated phishing emails
- Track user responses and click-through rates
- Provide immediate feedback to users
- Generate reports and metrics
- Target remedial training
- Measure improvement over time
```

## What This Signal Does NOT Assert

- Whether phishing awareness training exists
- Whether the organization has experienced real phishing attacks
- The effectiveness of technical email security controls
- Compliance or non-compliance with any framework
- Required remediation actions
- User susceptibility to phishing attacks

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 14: Security Awareness and Skills Training**
- **Safeguard 14.4**: Conduct routine testing of workforce members' understanding of phishing and social engineering attacks

## Related Signals

- `CSE-CIS-TRAINING-NO-SOCIAL-ENGINEERING-003` — Social Engineering Awareness Missing
- `CSE-CIS-TRAINING-NO-PROGRAM-001` — Security Awareness Program Missing
- `CSE-CIS-TRAINING-NO-SKILLS-ASSESSMENT-005` — Security Skills Assessment Missing
