# CSE-CCPA-CONSENT-NO-REAUTHORIZATION-005

**Opt-In Reauthorization (12-Month Wait) Not Enforced**

## Signal Overview

| Field           | Value                                          |
|-----------------|------------------------------------------------|
| Identifier      | `CSE-CCPA-CONSENT-NO-REAUTHORIZATION-005`      |
| Domain          | CCPA                                           |
| Category        | CONSENT                                        |
| Status          | Active                                         |
| Introduced In   | 1.0.0                                          |

## Description

A business requests opt-in consent from a consumer who has previously refused to authorize the sale of their personal information without waiting at least 12 months from the consumer's refusal. This signal indicates that the system permits re-solicitation of consent before the mandatory 12-month waiting period has elapsed, potentially resulting in harassment or pressure on consumers who have declined consent.

## Applicability

This signal applies to:

- Consent management platforms and preference centers
- Marketing automation and email campaign systems
- Customer relationship management (CRM) systems
- User notification and re-engagement platforms
- Mobile app permission and consent workflows
- Customer service and support ticket systems
- Data sale opt-in request tracking systems

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Consent Request Without 12-Month Waiting Period

```json
{
  "userId": "user_88888",
  "consentHistory": [
    {
      "requestDate": "2024-01-15",
      "consentType": "sale_of_personal_info",
      "response": "denied",
      "denialTimestamp": "2024-01-15T10:30:00Z"
    },
    {
      "requestDate": "2024-04-20",
      "consentType": "sale_of_personal_info",
      "response": "pending",
      "daysSinceLastDenial": 96,
      "twelveMonthWaitingPeriodEnforced": false
    }
  ]
}
```

### Consent Workflow Missing Waiting Period Logic

```yaml
# Consent request configuration without 12-month restriction
consent_requests:
  sale_opt_in:
    enabled: true
    retry_logic:
      max_requests: unlimited
      waiting_period_days: null  # Missing 365-day requirement
      check_previous_denials: false
    notification_schedule:
      - day: 30
      - day: 60
      - day: 90  # Requests before 12 months
```

### Database Query Ignoring Previous Refusals

```sql
-- Query selecting users for opt-in campaign without time check
SELECT u.id, u.email, u.name
FROM users u
LEFT JOIN consent_responses cr
  ON u.id = cr.user_id
  AND cr.consent_type = 'sale_opt_in'
WHERE (cr.response IS NULL OR cr.response = 'denied')
  -- Missing: AND (cr.response_date IS NULL
  --          OR cr.response_date < DATE_SUB(NOW(), INTERVAL 12 MONTH))
  AND u.marketing_enabled = true;
```

### Consent Request Function Without Time Validation

```python
# Function to request opt-in without 12-month check
def request_sale_consent(user_id):
    user = get_user(user_id)

    # Missing: Check for previous denial and 12-month waiting period
    # previous_denial = get_last_consent_denial(user_id, 'sale_opt_in')
    # if previous_denial:
    #     days_since_denial = (datetime.now() - previous_denial.date).days
    #     if days_since_denial < 365:
    #         raise WaitingPeriodNotElapsed(
    #             f"Must wait {365 - days_since_denial} more days"
    #         )

    send_consent_request_email(user, 'sale_opt_in')
    log_consent_request(user_id, 'sale_opt_in')
```

### Marketing Campaign Without Exclusion Logic

```javascript
// Email campaign targeting users without waiting period filter
const createOptInCampaign = async () => {
  const targetUsers = await db.users.find({
    saleConsentStatus: { $in: [null, 'denied'] }
    // Missing: Filter for 12-month waiting period
    // $or: [
    //   { lastConsentDenialDate: { $exists: false } },
    //   { lastConsentDenialDate: { $lt: twelveMonthsAgo } }
    // ]
  });

  await sendCampaign('opt_in_request', targetUsers);
};
```

## What This Signal Does NOT Assert

- Whether consumers have complained about re-solicitation
- Whether the business has legitimate reasons for the request timing
- Whether consent was ultimately granted or denied
- The method or channel of consent solicitation
- Compliance or non-compliance with CCPA or any regulation
- Required remediation actions or specific waiting period implementations

## CCPA Context (Informative)

This signal is relevant to CCPA requirements:

- **Section**: §1798.135(a)(5)
- **Requirement**: A business shall not request that a consumer authorize the sale or sharing of the consumer's personal information if the consumer has previously refused to authorize the sale or sharing of the consumer's personal information, unless a period of 12 months has elapsed since the consumer's refusal.
- **Added by**: CPRA (2020), amending CCPA

This requirement prevents businesses from repeatedly harassing consumers who have declined to authorize the sale or sharing of their personal information. The 12-month waiting period applies from the date of refusal and creates a mandatory cooling-off period.

These references are informative and do not constitute legal or compliance guidance.

## Related Signals

- `CSE-CCPA-CONSENT-NO-INCENTIVE-OPTIN-004` — Financial incentive opt-in missing
- `CSE-CCPA-RIGHTS-NO-DNSMPI-001` — Do Not Sell My Personal Information mechanism missing (if defined)
- `CSE-CCPA-RIGHTS-NO-LIMIT-USE-001` — Limit Use of Sensitive Personal Information mechanism missing (if defined)

## Notes

Detection of this signal typically involves:

- Analysis of consent request scheduling and retry logic
- Review of marketing automation campaign targeting criteria
- Inspection of consent history tracking and timestamp validation
- Examination of database queries selecting users for opt-in solicitation
- Audit of business logic enforcing waiting periods
- Evaluation of CRM workflows and re-engagement campaigns

The presence of this signal indicates a condition that warrants review in the context of CCPA requirements prohibiting premature re-solicitation of consent after refusal.
