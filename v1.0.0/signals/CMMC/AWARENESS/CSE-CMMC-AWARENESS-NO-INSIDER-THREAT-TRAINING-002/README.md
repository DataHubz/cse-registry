# CSE-CMMC-AWARENESS-NO-INSIDER-THREAT-TRAINING-002

**Insider Threat Awareness Training Not Provided**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-AWARENESS-NO-INSIDER-THREAT-TRAINING-002` |
| Domain | CMMC |
| Category | AWARENESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personnel do not receive training on recognizing and reporting potential insider threat indicators.

This signal indicates that employees may not understand how to identify suspicious behavior from colleagues or themselves.

## Applicability

- Insider threat awareness programs
- Behavioral indicator training
- Reporting procedures education
- Privileged user training
- Security clearance holder training

## Examples (Non-Normative)

### No Insider Threat Module

```yaml
training_curriculum:
  insider_threat_module: false
  behavioral_indicators: not_covered
  reporting_procedures: not_included
```

### Missing Insider Threat Content

```
Training Program Review:
  Security Awareness: Present
  Phishing Training: Present
  Insider Threat: Missing
```

## CMMC Context (Informative)

- **AT.L2-3.2.3**: Provide security awareness training on recognizing and reporting potential indicators of insider threat

## Related Signals

- `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001`
- `CSE-CMMC-AWARENESS-NO-ROLE-BASED-TRAINING-003`
