# CSE-GDPR-DPO-NO-CONTACT-PUBLISHED-002

**DPO Contact Details Not Published**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-DPO-NO-CONTACT-PUBLISHED-002` |
| Domain | GDPR |
| Category | DPO |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Contact details of the Data Protection Officer have not been published or communicated to the supervisory authority.

Article 37.7 requires publication of DPO contact details and communication to the authority.

## Applicability

- All organizations with designated DPO
- Contact details must be publicly accessible
- Supervisory authority must be notified
- Data subjects and authorities must be able to contact DPO directly

## Examples (Non-Normative)

### DPO Contact Not Published

```yaml
dpo_publication:
  dpo_designated: true
  contact_on_website: false
  contact_in_privacy_notice: false
  authority_notified: false
  public_accessibility: false
```

### Incomplete DPO Contact Information

```
DPO Publication Status:
  DPO Designated: John Smith
  Privacy Notice: Generic privacy@company.com (not DPO-specific)
  Website: No DPO contact listed
  Supervisory Authority: Not notified
  Direct Contact Available: No
```

## GDPR Context (Informative)

- **Art. 37.7**: Controller and processor shall publish contact details of DPO and communicate to supervisory authority
- **Art. 38.4**: Data subjects may contact DPO on all issues related to processing and exercise of rights

## Related Signals

- `CSE-GDPR-DPO-NO-DESIGNATION-001`
- `CSE-GDPR-RIGHTS-NO-COLLECTION-NOTICE-004`
