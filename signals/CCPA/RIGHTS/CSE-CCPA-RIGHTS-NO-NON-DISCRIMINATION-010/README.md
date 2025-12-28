# CSE-CCPA-RIGHTS-NO-NON-DISCRIMINATION-010

**Discrimination for Exercising Rights**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-NON-DISCRIMINATION-010` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Consumers are discriminated against for exercising their CCPA rights through denial of goods or services, different pricing or rates, different service levels, or suggestion that they will receive a different price or quality.

CCPA prohibits businesses from discriminating against consumers who exercise their privacy rights, with limited exceptions for financial incentive programs.

## Applicability

- E-commerce pricing systems
- Subscription service tiers
- Customer loyalty programs
- Service level agreements
- Access control and feature flags
- Dynamic pricing algorithms

## Examples (Non-Normative)

### Service Denial After Opt-Out

```yaml
consumer_treatment:
  opt_out_sale_impact:
    service_access: "Denied"
    feature_restrictions: ["premium_features", "support"]
    pricing_tier: "Downgraded"
  non_discrimination_policy: false
```

### Differential Pricing

```
Discrimination Assessment:
  Consumers Who Exercised Rights:
    Price Tier: Higher
    Service Level: Reduced
    Feature Access: Limited
  Financial Incentive Program: Not properly disclosed
  Reasonably Related to Value: Not calculated
  Opt-In Notice: Missing
```

### Feature Restriction

```json
{
  "consumer_status": {
    "exercised_deletion_right": true,
    "consequences": {
      "account_features_removed": ["analytics", "export"],
      "service_tier_downgraded": true,
      "price_increased": true,
      "support_level_reduced": true
    },
    "financial_incentive_disclosure": false,
    "value_relationship_documented": false
  }
}
```

## CCPA Context (Informative)

- **Section**: §1798.125(a)
- **Requirement**: A business shall not discriminate against a consumer because the consumer exercised any of the consumer's rights under this title, including by denying goods or services, charging different prices or rates, providing a different level or quality of goods or services, or suggesting that the consumer will receive a different price or rate or level or quality
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001`
- `CSE-CCPA-RIGHTS-NO-DELETE-MECHANISM-002`
