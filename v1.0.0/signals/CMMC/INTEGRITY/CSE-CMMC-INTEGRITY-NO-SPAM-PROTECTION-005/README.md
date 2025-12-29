# CSE-CMMC-INTEGRITY-NO-SPAM-PROTECTION-005

**Spam Protection Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-INTEGRITY-NO-SPAM-PROTECTION-005` |
| Domain | CMMC |
| Category | INTEGRITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Email systems do not implement spam filtering and protection mechanisms.

This signal indicates that phishing, malware, and unwanted messages may reach users without filtering.

## Applicability

- Spam filtering
- Email security gateways
- Phishing detection
- Malicious attachment scanning
- URL reputation checking

## Examples (Non-Normative)

### No Email Filtering

```yaml
email_security:
  spam_filter: disabled
  phishing_detection: none
  attachment_scanning: disabled
```

### Unprotected Email Flow

```
Email Security Assessment:
  Spam Gateway: Not deployed
  Phishing Protection: None
  Malware Scanning: Disabled
  DMARC/DKIM/SPF: Not configured
```

## CMMC Context (Informative)

- **SI.L2-3.14.5**: Implement email forgery protections

## Related Signals

- `CSE-CMMC-INTEGRITY-NO-MALWARE-PROTECTION-001`
- `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001`
