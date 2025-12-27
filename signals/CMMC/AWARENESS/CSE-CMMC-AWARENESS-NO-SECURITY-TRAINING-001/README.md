# CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001

**Security Awareness Training Not Provided**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001` |
| Domain | CMMC |
| Category | AWARENESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Users do not receive security awareness training on recognizing and reporting potential security threats.

This signal indicates that personnel may lack the knowledge to identify phishing, social engineering, or other security risks.

## Applicability

- New employee onboarding
- Annual security refresher training
- Phishing awareness campaigns
- Social engineering education
- Security policy acknowledgment

## Examples (Non-Normative)

### No Training Program

```yaml
security_training:
  program_exists: false
  last_training_date: null
  completion_tracking: none
```

### Missing Training Records

```
Training Management System:
  Security Awareness Course: Not deployed
  Completion Rate: 0%
  Last Campaign: Never
```

## CMMC Context (Informative)

- **AT.L2-3.2.1**: Ensure that managers, systems administrators, and users of organizational systems are made aware of the security risks associated with their activities and of the applicable policies, standards, and procedures related to the security of those systems
- **AT.L2-3.2.2**: Ensure that personnel are trained to carry out their assigned information security-related duties and responsibilities

## Related Signals

- `CSE-CMMC-AWARENESS-NO-INSIDER-THREAT-TRAINING-002`
- `CSE-CMMC-AWARENESS-NO-ROLE-BASED-TRAINING-003`
