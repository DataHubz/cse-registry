# CSE-CCPA-AUTOMATED-NO-HUMAN-REVIEW-004

**Human Review Not Available**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-AUTOMATED-NO-HUMAN-REVIEW-004`      |
| Domain          | CCPA                                          |
| Category        | AUTOMATED                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business makes consequential automated decisions about consumers but does not provide a process for human review or intervention when consumers request it or when circumstances warrant it. Human oversight is essential for ensuring fairness and accountability in automated decision-making, particularly for decisions with significant impacts.

This signal indicates that businesses lack processes, staffing, or technical infrastructure to provide meaningful human review of automated decisions, leaving consumers without recourse when automated systems make errors or produce questionable outcomes.

## Applicability

This signal applies to:

- Financial institutions making automated lending or credit decisions
- Employers using automated hiring, promotion, or termination systems
- Insurance companies with automated claims denial or pricing
- Healthcare providers using automated treatment or coverage decisions
- Educational platforms making automated admissions or scholarship decisions
- Content platforms with automated account suspension or content removal
- Government services using automated benefit eligibility determinations
- Any business making high-stakes automated decisions without human oversight

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Automated Loan Denial Without Review Process

```python
# Credit decision system with no human review capability
class LoanProcessingSystem:
    def process_loan_application(self, application):
        # Automated credit scoring
        decision = self.credit_model.evaluate(application)

        if decision.approved:
            return self.issue_loan(application)
        else:
            # Automated denial with no human review option
            self.send_denial_letter(application)

            # Missing: Human review process
            # if application.requests_human_review or decision.confidence < 0.7:
            #     self.escalate_to_underwriter(application, decision)
            #     return

            return {"status": "denied", "automated": True}

    # No method exists for human review of automated denials
    # Missing: escalate_to_underwriter(), manual_review_queue, etc.
```

### Content Moderation Without Appeal to Humans

```javascript
// Automated content moderation without human review path
class AutomatedModerationSystem {
  async processReport(contentId, reportReason) {
    const content = await this.getContent(contentId);
    const analysis = await this.mlModel.analyze(content);

    if (analysis.violationProbability > 0.75) {
      // Automated content removal
      await this.removeContent(contentId);
      await this.notifyUser(content.authorId, {
        action: "content_removed",
        reason: "Automated policy violation detection"
      });

      // Missing: Human review option
      // if (user.requestsHumanReview || analysis.confidence === "low") {
      //   await this.humanReviewQueue.add({
      //     contentId,
      //     automatedDecision: analysis,
      //     appealedBy: user
      //   });
      // }

      return { status: "removed", reviewer: "automated" };
    }
  }

  // No human review queue or appeal process exists
}
```

### Automated Hiring Decisions Without HR Review

```java
// Applicant tracking system without human intervention
public class AutomatedHiringSystem {
    public ApplicationDecision processApplication(JobApplication application) {
        // AI-based candidate evaluation
        CandidateScore score = aiEvaluationEngine.scoreCandidate(
            application.getResume(),
            application.getCoverLetter(),
            application.getAnswers()
        );

        if (score.getOverallScore() < MINIMUM_THRESHOLD) {
            // Automatic rejection without HR review
            ApplicationDecision decision = new ApplicationDecision();
            decision.setStatus("REJECTED");
            decision.setReviewedBy("AUTOMATED_SYSTEM");
            decision.setReason("Did not meet minimum qualifications");

            // Missing: Human HR review for borderline cases
            // if (score.getOverallScore() > BORDERLINE_THRESHOLD ||
            //     application.requestsHumanReview()) {
            //     return escalateToHRReview(application, score);
            // }

            sendRejectionEmail(application);
            return decision;
        }

        return processNextStage(application);
    }

    // No HR review queue or manual override capability exists
}
```

### Automated Insurance Claim Denial Without Adjuster Review

```python
# Insurance claim processing without human review option
def process_insurance_claim(claim):
    # Automated claim evaluation
    evaluation = claim_evaluation_model.predict({
        "claim_amount": claim.amount,
        "policy_type": claim.policy_type,
        "claim_history": claim.claimant_history,
        "damage_photos": claim.photos
    })

    if evaluation.decision == "DENY":
        # Automatic denial without adjuster review
        claim.status = "DENIED"
        claim.denial_reason = evaluation.reason
        claim.reviewed_by = "AUTOMATED_SYSTEM"

        # Missing: Human adjuster review
        # if claim.amount > HIGH_VALUE_THRESHOLD or evaluation.confidence < 0.8:
        #     return route_to_adjuster(claim, evaluation)

        send_denial_notification(claim.claimant_email, evaluation.reason)
        return claim

    return approve_claim(claim)

# No claims adjuster review queue or escalation process exists
```

## What This Signal Does NOT Assert

- Whether automated decisions are accurate or appropriate
- The quality or sophistication of the automated system
- Whether human review is legally required in all cases
- The timeline or process for human review when provided
- Compliance or non-compliance with CCPA/CPRA
- Required staffing levels for human review

## CCPA Context (Informative)

This signal is relevant to CCPA/CPRA requirements:

- **Section 1798.185(a)(16)**: The CPPA may adopt regulations requiring human review of consequential automated decisions, particularly when consumers request it
- **Section 1798.185(a)(15)**: Risk assessments for automated decision-making should consider whether adequate human oversight exists
- **Requirement**: Businesses should implement processes for meaningful human review of consequential automated decisions, especially when consumers contest outcomes or when automated systems show low confidence
- **Added by**: CPRA (California Privacy Rights Act amendments, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-AUTOMATED-NO-OPTOUT-003` — Opt-out of automated decisions not available
- `CSE-CCPA-AUTOMATED-NO-ACCESS-LOGIC-002` — Logic of automated decisions not accessible
- `CSE-CCPA-AUTOMATED-NO-DISCLOSURE-001` — Automated decision-making not disclosed
- `CSE-CCPA-AUTOMATED-NO-RISK-ASSESSMENT-005` — Risk assessment for automated decisions missing

## Notes

Detection of this signal typically involves:

- Review of automated decision systems for human review escalation paths
- Analysis of business processes for human oversight and intervention
- Assessment of staffing and resources allocated to reviewing automated decisions
- Testing of appeal and dispute resolution mechanisms
- Inspection of decision confidence thresholds that trigger human review
- Review of quality assurance processes for automated decision outputs
- Evaluation of technical infrastructure for routing cases to human reviewers
- Analysis of response procedures when consumers contest automated decisions

The presence of this signal indicates a condition that warrants review in the context of CPRA requirements for human oversight of automated decision-making.
