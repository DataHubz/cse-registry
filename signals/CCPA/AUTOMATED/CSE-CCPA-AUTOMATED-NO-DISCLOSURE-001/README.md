# CSE-CCPA-AUTOMATED-NO-DISCLOSURE-001

**Automated Decision-Making Not Disclosed**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-AUTOMATED-NO-DISCLOSURE-001`        |
| Domain          | CCPA                                          |
| Category        | AUTOMATED                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business uses automated decision-making technology to make consequential decisions about consumers without providing clear disclosure of such use in its privacy notice or at the point of collection. Under CPRA, businesses must disclose whether they use automated decision-making technology and for what purposes.

This signal indicates that automated profiling, scoring, or decision systems are deployed without transparency to consumers, preventing them from understanding how their personal information is being used to make decisions that affect them.

## Applicability

This signal applies to:

- Credit scoring and lending platforms using algorithmic underwriting
- Employment platforms with automated applicant screening or ranking
- Insurance companies with automated risk assessment and pricing
- Healthcare systems using automated diagnosis or treatment recommendations
- Educational platforms with automated admissions or placement decisions
- Marketing platforms with automated consumer profiling and segmentation
- E-commerce sites using automated pricing or product availability decisions
- Any business using AI/ML systems that make consequential decisions about consumers

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Privacy Policy Missing Automated Decision Disclosure

```yaml
# Privacy policy that fails to disclose automated decision-making
privacy_policy:
  data_uses:
    - "We use your information to provide personalized services"
    - "We may share data with service providers"
    - "We analyze your usage patterns"
  # Missing: Disclosure that automated decision-making is used
  # automated_decisions:
  #   - purpose: "Credit eligibility determination"
  #     technology: "Machine learning scoring model"
  #   - purpose: "Content recommendation"
  #     technology: "Automated profiling system"
```

### Automated Screening Without Disclosure

```python
# Automated job applicant screening without disclosure to applicants
def screen_applicant(application):
    # Uses ML model to score and filter applicants
    score = ml_model.predict(application.features)

    if score < THRESHOLD:
        # Automatically rejects without human review
        application.status = "rejected"
        # Missing: Disclosure that automated decision-making was used
        send_rejection_email(application.email)
        return False

    return True

# Application form lacks disclosure
application_form = {
    "fields": ["name", "resume", "experience"],
    # Missing: Notice about automated screening
    # "disclosure": "We use automated decision-making to screen applications"
}
```

### Algorithmic Pricing Without Transparency

```javascript
// Dynamic pricing algorithm without disclosure
function calculatePrice(userId, productId) {
  const userProfile = getUserProfile(userId);

  // Automated decision based on user characteristics
  const priceMultiplier = pricingModel.predict({
    location: userProfile.location,
    browsing_history: userProfile.recentViews,
    purchase_history: userProfile.pastPurchases,
    device_type: userProfile.device
  });

  const finalPrice = basePrice * priceMultiplier;

  // Missing: Disclosure that price was determined algorithmically
  return finalPrice;
}
```

### Credit Decision Without Point-of-Collection Notice

```java
// Credit application processing with automated decision
public class CreditApplicationController {
    @PostMapping("/apply")
    public ResponseEntity<?> submitApplication(CreditApplication app) {
        // Runs automated credit scoring model
        CreditScore score = automatedScoringEngine.evaluate(app);

        if (score.getScore() < MIN_SCORE) {
            // Automated denial without disclosure at collection
            return ResponseEntity.ok(new ApplicationResult("denied"));
        }

        return ResponseEntity.ok(new ApplicationResult("approved"));
    }
}

// Application form HTML missing required disclosure
/*
<form action="/apply" method="POST">
  <!-- Missing disclosure about automated decision-making -->
  <!-- Should include: "We use automated technology to evaluate your
       creditworthiness and make lending decisions." -->
  <input name="income" />
  <input name="employment" />
  <button type="submit">Submit Application</button>
</form>
*/
```

## What This Signal Does NOT Assert

- Whether the automated decision-making is lawful or appropriate
- The accuracy or fairness of automated decisions
- Whether other CPRA requirements for automated decisions are met
- Whether consumers have rights to opt-out or human review
- Compliance or non-compliance with CCPA/CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CCPA/CPRA requirements:

- **Section 1798.185(a)(16)**: The California Privacy Protection Agency shall adopt regulations requiring businesses whose processing of consumers' personal information presents significant risk to consumers' privacy or security to perform a risk assessment and submit it to the Agency, including for profiling
- **Section 1798.100(b)**: At or before the point of collection, businesses must inform consumers of the purposes for which personal information will be used, including automated decision-making
- **Requirement**: Businesses must provide clear and conspicuous disclosure when automated decision-making technology is used to make consequential decisions about consumers
- **Added by**: CPRA (California Privacy Rights Act amendments, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-AUTOMATED-NO-ACCESS-LOGIC-002` — Logic of automated decisions not accessible
- `CSE-CCPA-AUTOMATED-NO-OPTOUT-003` — Opt-out of automated decisions not available
- `CSE-CCPA-NOTICE-NO-COLLECTION-NOTICE-001` — Missing privacy notice at collection
- `CSE-GDPR-RIGHTS-NO-AUTOMATED-DECISION-DISCLOSURE-016` — Similar GDPR requirement

## Notes

Detection of this signal typically involves:

- Review of privacy policies and notices for automated decision-making disclosures
- Analysis of point-of-collection notices on forms and applications
- Inspection of automated decision systems and their deployment contexts
- Comparison of disclosed practices with actual data processing activities
- Assessment of transparency in algorithmic scoring and profiling systems
- Review of terms of service and user agreements for automated decision language
- Testing of user-facing interfaces for adequate disclosure

The presence of this signal indicates a condition that warrants review in the context of CPRA transparency and disclosure requirements for automated decision-making.
