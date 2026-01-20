# CSE-CCPA-AUTOMATED-NO-OPTOUT-003

**Opt-Out of Automated Decisions Not Available**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-AUTOMATED-NO-OPTOUT-003`            |
| Domain          | CCPA                                          |
| Category        | AUTOMATED                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business uses automated decision-making technology to make consequential decisions about consumers but does not provide a mechanism for consumers to opt-out of such automated processing. Consumers should have the ability to object to decisions being made solely by automated means when those decisions have legal or similarly significant effects.

This signal indicates that businesses lack technical controls, processes, or interfaces to allow consumers to request that consequential decisions not be made by automated systems alone.

## Applicability

This signal applies to:

- Lending platforms using automated credit decisions
- Employment systems with automated hiring or termination decisions
- Insurance providers using automated underwriting and pricing
- Healthcare platforms making automated treatment recommendations
- Educational institutions using automated admissions decisions
- Content moderation systems making automated account suspension decisions
- Fraud detection systems making automated account closure decisions
- Any business making consequential automated decisions without opt-out mechanisms

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Opt-Out Mechanism for Automated Credit Decisions

```python
# Credit application system without opt-out option
class CreditApplicationSystem:
    def process_application(self, application):
        # Always uses automated decision-making
        credit_score = self.automated_scoring_model.predict(application)

        # Missing: Check if consumer opted out of automated decisions
        # if application.opt_out_automated_decisions:
        #     return self.manual_review_queue.add(application)

        if credit_score >= self.threshold:
            return self.approve_application(application)
        else:
            return self.deny_application(application)

# Application form lacks opt-out option
application_form = {
    "fields": ["name", "income", "employment"],
    # Missing: Opt-out checkbox
    # "opt_out_automated_decision": {
    #     "type": "checkbox",
    #     "label": "Request human review instead of automated decision"
    # }
}
```

### Automated Account Suspension Without Appeal Option

```javascript
// Content moderation with no opt-out from automated decisions
class ContentModerationSystem {
  async moderateContent(userId, content) {
    const prediction = await this.mlModel.classifyContent(content);

    if (prediction.violationScore > 0.8) {
      // Automated account suspension
      await this.suspendAccount(userId, {
        reason: "Automated policy violation detection",
        duration: "30 days"
      });

      // Missing: Option to request human review
      // if (user.preferences.require_human_review) {
      //   await this.queueForHumanReview(userId, content);
      //   return;
      // }

      // Missing: Appeal mechanism for automated decisions
      await this.notifyUser(userId, "Your account has been suspended");
    }
  }
}
```

### Automated Pricing Without Manual Override Request

```java
// Dynamic pricing system without opt-out capability
public class PersonalizedPricingEngine {
    public Price calculatePrice(String userId, String productId) {
        UserProfile profile = userProfileService.getProfile(userId);

        // Automated algorithmic pricing
        BigDecimal adjustedPrice = pricingAlgorithm.calculate(
            basePrice,
            profile.getBrowsingHistory(),
            profile.getPurchaseHistory(),
            profile.getLocation()
        );

        // Missing: Mechanism to opt-out of personalized pricing
        // if (profile.hasOptedOutAutomatedPricing()) {
        //     return new Price(basePrice, "standard");
        // }

        return new Price(adjustedPrice, "personalized");
    }

    // No method exists for consumers to request standard pricing
}
```

### Automated Job Screening Without Human Review Option

```python
# Applicant tracking system without opt-out from automated screening
def screen_job_application(application):
    # Automated resume screening
    screening_result = ai_screening_model.evaluate({
        "resume": application.resume_text,
        "experience": application.years_experience,
        "education": application.education
    })

    if screening_result.score < THRESHOLD:
        # Automatic rejection without human review option
        application.status = "rejected"
        send_rejection_email(application.email)
        return

    # Missing: Opt-out preference check
    # if application.request_human_review:
    #     add_to_human_review_queue(application)
    #     return

    # Proceeds to next automated stage
    schedule_automated_interview(application)

# Job application form missing opt-out option
"""
<form>
  <input name="resume" />
  <input name="cover_letter" />
  <!-- Missing: Checkbox to opt-out of automated screening -->
  <!-- <input type="checkbox" name="request_human_review"
       label="I request human review of my application rather than automated screening" /> -->
</form>
"""
```

## What This Signal Does NOT Assert

- Whether automated decisions are lawful or appropriate
- The accuracy or fairness of automated decision systems
- Whether human review is always required by law
- Whether other consumer rights are provided
- Compliance or non-compliance with CCPA/CPRA
- Required alternative decision-making processes

## CCPA Context (Informative)

This signal is relevant to CCPA/CPRA requirements:

- **Section 1798.185(a)(16)**: The CPPA may adopt regulations concerning automated decision-making, including requirements for opt-out mechanisms
- **Section 1798.120**: Consumers have the right to opt-out of certain types of automated processing of their personal information
- **Requirement**: Businesses should provide consumers with the ability to opt-out of consequential automated decision-making and request human review when appropriate
- **Added by**: CPRA (California Privacy Rights Act amendments, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-AUTOMATED-NO-DISCLOSURE-001` — Automated decision-making not disclosed
- `CSE-CCPA-AUTOMATED-NO-ACCESS-LOGIC-002` — Logic of automated decisions not accessible
- `CSE-CCPA-AUTOMATED-NO-HUMAN-REVIEW-004` — Human review not available
- `CSE-CCPA-OPTOUT-NO-SALE-LINK-001` — Missing opt-out mechanisms generally

## Notes

Detection of this signal typically involves:

- Review of application forms and user interfaces for opt-out options
- Analysis of automated decision-making systems for override capabilities
- Testing of consumer preference systems for automated decision opt-outs
- Inspection of business processes for human review escalation paths
- Assessment of privacy settings and consent management platforms
- Review of customer support capabilities for automated decision appeals
- Evaluation of technical controls for routing opted-out decisions to human review

The presence of this signal indicates a condition that warrants review in the context of CPRA requirements for consumer control over automated decision-making.
