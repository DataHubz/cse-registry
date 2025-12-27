# CSE-GDPR-RIGHTS-NO-MARKETING-OPT-OUT-017

**Direct Marketing Opt-Out Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-MARKETING-OPT-OUT-017` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists for data subjects to object to processing for direct marketing purposes.

This right is unconditional and must be presented clearly at first communication.

## Applicability

- Email marketing systems
- SMS marketing platforms
- Direct mail campaigns
- Telemarketing operations
- Behavioral advertising

## Examples (Non-Normative)

### No Opt-Out Mechanism

```yaml
marketing_opt_out:
  unsubscribe_link: false
  preference_center: false
  suppression_list: null
  processing_cessation: null
```

### Hidden Opt-Out

```
Marketing Assessment:
  Unsubscribe: Buried in footer
  Preference Center: None
  Processing Time: 30 days
  Right Communicated: No
```

## GDPR Context (Informative)

- **Art. 21.2**: Where personal data are processed for direct marketing purposes, the data subject shall have the right to object at any time
- **Art. 21.3**: This right shall be explicitly brought to the attention of the data subject at the time of first communication

## Related Signals

- `CSE-GDPR-RIGHTS-NO-OBJECTION-MECHANISM-015`
- `CSE-GDPR-CONSENT-NO-WITHDRAWAL-MECHANISM-004`
