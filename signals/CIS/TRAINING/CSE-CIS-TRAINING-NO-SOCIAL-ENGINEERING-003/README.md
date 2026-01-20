# CSE-CIS-TRAINING-NO-SOCIAL-ENGINEERING-003

**Social Engineering Awareness Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-TRAINING-NO-SOCIAL-ENGINEERING-003` |
| Domain          | CIS                                |
| Category        | TRAINING                           |
| Control         | 14 - Security Awareness and Skills Training |
| Safeguard       | 14.3                               |
| IG Level        | IG1                                |
| Asset Type      | Users                              |
| Security Function | Protect                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks training to make workforce members aware of social engineering and phishing attacks.

This signal indicates that there is no formal training program focused on teaching users to recognize and respond to social engineering tactics, including phishing, pretexting, baiting, quid pro quo, and other manipulation techniques used by attackers.

## Applicability

This signal applies to:

- Security awareness training programs
- Phishing and social engineering awareness initiatives
- User education on email security
- Incident reporting procedures
- Human resources security training requirements
- Third-party and vendor personnel training
- Remote workforce security education

## Examples (Non-Normative)

### Missing Social Engineering Training

```
No documented training exists covering:
- Types of social engineering attacks
- Phishing email identification
- Suspicious link and attachment recognition
- Phone-based social engineering (vishing)
- In-person social engineering threats
- Incident reporting procedures
```

### Undefined Social Engineering Content

```yaml
# Security awareness program lacks social engineering focus
awareness_training:
  password_security: true
  physical_security: true
  social_engineering:
    phishing: undefined
    pretexting: undefined
    baiting: undefined
    reporting: undefined
```

### Generic Security Training Only

```
Organization provides:
- General security policy overview
- Password best practices
- Physical security guidelines
- No specific social engineering content
- No phishing awareness training
- No examples of attack techniques
```

### Missing Attack Recognition Training

```
Users are not trained to:
- Identify phishing emails
- Recognize suspicious requests
- Verify sender authenticity
- Avoid clicking malicious links
- Report suspicious activity
- Respond appropriately to social engineering attempts
```

## What This Signal Does NOT Assert

- Whether general security awareness training exists
- Whether users have been targeted by social engineering attacks
- The effectiveness of technical email security controls
- Compliance or non-compliance with any framework
- Required remediation actions
- The organization's susceptibility to social engineering

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 14: Security Awareness and Skills Training**
- **Safeguard 14.3**: Train workforce members to be aware of social engineering and phishing attacks

## Related Signals

- `CSE-CIS-TRAINING-NO-PROGRAM-001` — Security Awareness Program Missing
- `CSE-CIS-TRAINING-NO-PHISHING-EXERCISES-004` — Phishing Exercises Missing
- `CSE-CIS-EMAIL-NO-SUPPORTED-BROWSERS-001` — Email Security Controls Missing
