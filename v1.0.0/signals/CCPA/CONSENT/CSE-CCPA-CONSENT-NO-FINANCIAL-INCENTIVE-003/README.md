# CSE-CCPA-CONSENT-NO-FINANCIAL-INCENTIVE-003

**Financial Incentive Notice Missing**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-CCPA-CONSENT-NO-FINANCIAL-INCENTIVE-003`     |
| Domain          | CCPA                                              |
| Category        | CONSENT                                           |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

A business offers a financial incentive or price or service difference related to the collection, sale, or deletion of personal information without providing the required notice of the financial incentive. This signal indicates that a system implements differential pricing, rewards, or benefits tied to personal information practices without maintaining or presenting the mandatory disclosure explaining the material terms of the program.

## Applicability

This signal applies to:

- Loyalty and rewards program platforms
- Subscription services with data-sharing tiers
- E-commerce platforms offering discounts for data collection
- Marketing platforms with incentive programs
- Mobile applications with premium/free tiers based on data sharing
- Retailer systems with price discrimination based on personal information
- Membership programs with data-related benefits

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Loyalty Program Without Financial Incentive Notice

```json
{
  "programId": "rewards_premium",
  "programName": "Premium Rewards Plus",
  "benefits": [
    "20% discount on purchases",
    "Early access to sales",
    "Personalized recommendations"
  ],
  "requirements": {
    "dataSharing": true,
    "personalInfoCollection": ["location", "purchase_history", "browsing_data"]
  },
  "financialIncentiveNotice": null,
  "noticeUrl": null,
  "materialTermsExplanation": null
}
```

### Pricing Tier Configuration Missing Required Notice

```yaml
# Subscription tiers with data-based pricing
subscription_tiers:
  basic:
    price: 9.99
    data_collection: minimal
    financial_incentive_notice: null  # Missing
  premium:
    price: 4.99  # Lower price for more data sharing
    data_collection: comprehensive
    financial_incentive_notice: null  # Missing required notice
    value_calculation: null  # Missing value explanation
```

### Discount Code System Without Disclosure

```javascript
// Promotional discount without financial incentive notice
const applyDataSharingDiscount = (userId) => {
  const user = getUser(userId);

  if (user.optedIntoDataSharing) {
    // Applying 15% discount for data sharing
    // Missing: financial incentive notice and explanation
    return {
      discountPercent: 15,
      reason: "Data sharing participant"
      // Missing: financialIncentiveNoticeUrl
      // Missing: valueCalculationMethod
    };
  }

  return { discountPercent: 0 };
};
```

### Database Missing Financial Incentive Documentation

```sql
-- Incentive programs table missing required notice fields
CREATE TABLE incentive_programs (
  id INT PRIMARY KEY,
  program_name VARCHAR(255),
  discount_amount DECIMAL(10,2),
  requires_data_sharing BOOLEAN,
  data_types_collected TEXT,
  -- Missing: financial_incentive_notice_text TEXT
  -- Missing: notice_url VARCHAR(500)
  -- Missing: value_calculation_method TEXT
  -- Missing: material_terms TEXT
  created_at TIMESTAMP
);
```

## What This Signal Does NOT Assert

- Whether the financial incentive program is discriminatory or unlawful
- Whether the value calculation methodology is reasonable or accurate
- Whether consumers have actually received the notice through other means
- The validity or enforceability of the incentive program
- Compliance or non-compliance with CCPA or any regulation
- Required remediation actions or specific notice content

## CCPA Context (Informative)

This signal is relevant to CCPA requirements:

- **Section**: §1798.125(b)
- **Requirement**: A business that offers a financial incentive or a price or service difference [...] shall notify consumers of the financial incentive or price or service difference [...]. The notice of financial incentive shall: (1) Describe the material terms of the financial incentive or price or service difference; (2) Explain how the financial incentive or price or service difference is reasonably related to the value of the consumer's data.
- **Added by**: CCPA (2018), clarified by CPRA (2020)

Businesses offering financial incentives tied to personal information must provide transparency about these programs. The notice must explain the material terms and provide a good-faith estimate of the value of the consumer's data that forms the basis for the incentive.

These references are informative and do not constitute legal or compliance guidance.

## Related Signals

- `CSE-CCPA-CONSENT-NO-INCENTIVE-OPTIN-004` — Financial incentive opt-in missing
- `CSE-CCPA-RIGHTS-NO-DNSMPI-001` — Do Not Sell My Personal Information mechanism missing (if defined)
- `CSE-CCPA-NOTICE-NO-COLLECTION-001` — Notice at collection missing (if defined)

## Notes

Detection of this signal typically involves:

- Analysis of pricing and subscription tier configurations
- Review of loyalty and rewards program data structures
- Inspection of promotional and discount systems tied to data sharing
- Examination of consent and notice management systems
- Audit of privacy notice repositories and links
- Evaluation of data value calculation documentation

The presence of this signal indicates a condition that warrants review in the context of CCPA financial incentive disclosure requirements.
