# CSE-CCPA-AUTOMATED-NO-ACCESS-LOGIC-002

**Logic of Automated Decisions Not Accessible**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-AUTOMATED-NO-ACCESS-LOGIC-002`      |
| Domain          | CCPA                                          |
| Category        | AUTOMATED                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business uses automated decision-making technology but does not provide consumers with meaningful information about the logic involved in such decisions when requested. Consumers have the right to understand how automated systems use their personal information to make decisions that affect them.

This signal indicates that businesses lack processes, documentation, or technical capabilities to explain automated decision logic to consumers in an accessible manner, preventing consumers from understanding the basis of consequential decisions.

## Applicability

This signal applies to:

- Financial services with algorithmic underwriting or credit scoring
- Hiring platforms using automated candidate evaluation
- Insurance providers with automated risk assessment models
- Content platforms with recommendation algorithms affecting user experience
- Educational institutions using automated admissions or grading systems
- Healthcare platforms with automated diagnostic or treatment decision support
- Advertising platforms with automated targeting and profiling
- Any business using opaque AI/ML models for consequential decisions

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Access Request Without Logic Explanation

```python
# Data access response missing automated decision logic
def handle_access_request(consumer_id):
    consumer_data = {
        "personal_info": get_personal_info(consumer_id),
        "transactions": get_transactions(consumer_id),
        "preferences": get_preferences(consumer_id)
    }

    # Missing: Explanation of automated decision logic
    # if has_automated_decisions(consumer_id):
    #     consumer_data["automated_decisions"] = {
    #         "credit_score": {
    #             "decision": "denied",
    #             "logic": "Score based on payment history (40%), debt-to-income (30%), credit utilization (20%), account age (10%)",
    #             "factors": get_decision_factors(consumer_id)
    #         }
    #     }

    return generate_access_report(consumer_data)
```

### Black Box Model Without Explainability

```javascript
// ML model used for decisions without explanation capability
class LoanApprovalSystem {
  async evaluateApplication(application) {
    // Complex neural network produces decision
    const prediction = await deepLearningModel.predict(application);

    if (prediction.approval_score < 0.5) {
      // Automated denial without explanation
      return {
        status: "denied",
        // Missing: Meaningful explanation of logic
        // explanation: {
        //   primary_factors: ["debt_to_income_ratio", "recent_delinquencies"],
        //   score_breakdown: {...},
        //   logic_description: "..."
        // }
      };
    }

    return { status: "approved" };
  }
}
```

### Profiling Without Transparency

```java
// User profiling system without accessible logic explanation
public class UserProfilingEngine {
    public UserProfile generateProfile(String userId) {
        // Complex algorithmic profiling
        double[] features = extractFeatures(userId);
        String[] segments = clusteringModel.predict(features);

        UserProfile profile = new UserProfile();
        profile.setSegments(segments);
        profile.setRiskScore(calculateRisk(features));

        // Missing: Logic explanation consumers can access
        // profile.setLogicExplanation(
        //     "Your profile is based on browsing patterns (35%), " +
        //     "purchase history (30%), demographic data (20%), " +
        //     "and device characteristics (15%)"
        // );

        return profile;
    }

    // No method exists to explain profiling logic to consumers
}
```

### Automated Pricing Without Factor Disclosure

```python
# Dynamic pricing algorithm without accessible explanation
def calculate_personalized_price(user_id, product_id):
    user_features = feature_extractor.get_user_features(user_id)

    # Proprietary pricing algorithm
    price_multiplier = pricing_model.predict(user_features)
    final_price = base_prices[product_id] * price_multiplier

    # Stores decision but no logic explanation available
    log_pricing_decision(user_id, product_id, final_price)

    # Missing: Accessible explanation of pricing factors
    # explanation = {
    #     "base_price": base_prices[product_id],
    #     "adjustment_factors": [
    #         {"factor": "location", "impact": "+5%"},
    #         {"factor": "browsing_history", "impact": "+3%"},
    #         {"factor": "time_of_day", "impact": "-2%"}
    #     ],
    #     "final_price": final_price
    # }

    return final_price
```

## What This Signal Does NOT Assert

- Whether the automated decision-making system is fair or accurate
- The technical sophistication or complexity of the algorithm
- Whether the business has internal documentation of logic
- Whether other forms of transparency are provided
- Compliance or non-compliance with CCPA/CPRA
- Required level of technical detail in explanations

## CCPA Context (Informative)

This signal is relevant to CCPA/CPRA requirements:

- **Section 1798.185(a)(16)**: Regulations may require businesses to provide meaningful information about the logic involved in automated decision-making processes
- **Section 1798.110**: Consumers have the right to know what personal information is collected and how it is used, which extends to automated decision-making contexts
- **Requirement**: When consumers exercise their right to know, businesses using automated decision-making should provide accessible explanations of the logic involved
- **Added by**: CPRA (California Privacy Rights Act amendments, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-AUTOMATED-NO-DISCLOSURE-001` — Automated decision-making not disclosed
- `CSE-CCPA-AUTOMATED-NO-OPTOUT-003` — Opt-out of automated decisions not available
- `CSE-CCPA-RIGHTS-NO-ACCESS-001` — Right to access not supported
- `CSE-GDPR-RIGHTS-NO-AUTOMATED-DECISION-DISCLOSURE-016` — Similar GDPR requirement

## Notes

Detection of this signal typically involves:

- Testing of data access request responses for automated decision explanations
- Review of consumer-facing documentation about algorithmic decision logic
- Analysis of model explainability and interpretability capabilities
- Assessment of technical infrastructure for generating explanations
- Inspection of logged decision data for factor attribution information
- Review of customer support responses to logic-related inquiries
- Evaluation of model documentation and explanation generation processes

The presence of this signal indicates a condition that warrants review in the context of CPRA requirements for transparency in automated decision-making.
