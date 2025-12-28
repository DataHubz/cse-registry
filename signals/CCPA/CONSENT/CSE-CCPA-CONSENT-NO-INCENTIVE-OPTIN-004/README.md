# CSE-CCPA-CONSENT-NO-INCENTIVE-OPTIN-004

**Financial Incentive Opt-In Missing**

## Signal Overview

| Field           | Value                                          |
|-----------------|------------------------------------------------|
| Identifier      | `CSE-CCPA-CONSENT-NO-INCENTIVE-OPTIN-004`      |
| Domain          | CCPA                                           |
| Category        | CONSENT                                        |
| Status          | Active                                         |
| Introduced In   | 1.0.0                                          |

## Description

A business enrolls a consumer in a financial incentive program related to the collection, sale, or deletion of personal information without obtaining prior opt-in consent. This signal indicates that the system automatically enrolls consumers or allows participation in incentive programs without requiring the consumer to affirmatively consent after being presented with the notice of financial incentive.

## Applicability

This signal applies to:

- Loyalty program enrollment systems
- Rewards platform registration workflows
- E-commerce checkout with incentive offers
- Subscription management systems with tiered pricing
- Marketing automation platforms with consent management
- Mobile app onboarding flows with data-sharing incentives
- Membership management systems with differential benefits

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### User Enrollment Without Explicit Opt-In

```json
{
  "userId": "user_54321",
  "enrolledPrograms": [
    {
      "programId": "loyalty_plus",
      "programType": "financial_incentive",
      "enrollmentDate": "2024-01-15",
      "enrollmentMethod": "automatic",
      "optInConsent": null,
      "consentTimestamp": null,
      "noticePresented": false
    }
  ]
}
```

### Registration Flow Missing Consent Requirement

```yaml
# User registration configuration
registration:
  default_programs:
    - loyalty_rewards  # Auto-enrolled
  financial_incentive_programs:
    - id: loyalty_rewards
      requires_opt_in: false  # Missing required opt-in
      auto_enroll: true
      consent_required: false
      notice_step: skip  # Should present notice and require consent
```

### API Endpoint Without Consent Validation

```javascript
// Loyalty program enrollment without opt-in check
app.post('/api/programs/enroll', async (req, res) => {
  const { userId, programId } = req.body;

  // Missing: Financial incentive notice presentation
  // Missing: Explicit opt-in consent requirement

  await enrollUserInProgram(userId, programId);

  res.json({
    success: true,
    message: "Enrolled in rewards program"
  });
});
```

### Database Schema Missing Consent Tracking

```sql
-- Program enrollments without opt-in consent fields
CREATE TABLE program_enrollments (
  id INT PRIMARY KEY,
  user_id INT,
  program_id INT,
  enrollment_date TIMESTAMP,
  enrollment_source VARCHAR(50),
  -- Missing: opt_in_consent BOOLEAN
  -- Missing: consent_timestamp TIMESTAMP
  -- Missing: notice_presented BOOLEAN
  -- Missing: notice_version VARCHAR(50)
  status VARCHAR(20)
);
```

### Pre-Checked Consent Form

```html
<!-- HTML form with pre-selected financial incentive opt-in -->
<form id="checkout-form">
  <label>
    <!-- Pre-checked checkbox violates opt-in requirement -->
    <input type="checkbox"
           name="loyalty_program"
           checked>
    Join our rewards program for 10% off
  </label>
  <!-- Missing: Clear financial incentive notice -->
  <!-- Missing: Unchecked default state -->
</form>
```

## What This Signal Does NOT Assert

- Whether consumers have voluntarily participated in practice
- Whether the financial incentive terms are fair or reasonable
- Whether opt-in consent was obtained through other channels
- The validity of consent obtained for other purposes
- Compliance or non-compliance with CCPA or any regulation
- Required remediation actions or specific consent mechanisms

## CCPA Context (Informative)

This signal is relevant to CCPA requirements:

- **Section**: §1798.125(b)(3)
- **Requirement**: A business may enter a consumer into a financial incentive program only if the consumer gives the business prior opt-in consent pursuant to subdivision (a) of Section 1798.135 which clearly describes the material terms of the financial incentive program and which may be revoked by the consumer at any time.
- **Added by**: CCPA (2018)

The opt-in consent requirement ensures consumers make an informed, affirmative choice to participate in financial incentive programs. This consent must be obtained before enrollment and must be preceded by the financial incentive notice describing material terms.

These references are informative and do not constitute legal or compliance guidance.

## Related Signals

- `CSE-CCPA-CONSENT-NO-FINANCIAL-INCENTIVE-003` — Financial incentive notice missing
- `CSE-CCPA-RIGHTS-NO-OPT-OUT-001` — Right to opt-out mechanism missing (if defined)
- `CSE-CCPA-CONSENT-NO-REVOCATION-001` — Consent revocation mechanism missing (if defined)

## Notes

Detection of this signal typically involves:

- Analysis of user enrollment and registration workflows
- Review of consent management system configurations
- Inspection of program enrollment API endpoints and logic
- Examination of database schemas for consent tracking fields
- Audit of user interface forms for pre-checked boxes or auto-enrollment
- Evaluation of consent timestamps and enrollment methods

The presence of this signal indicates a condition that warrants review in the context of CCPA requirements for obtaining prior opt-in consent for financial incentive programs.
