# CSE-CCPA-AUTOMATED-NO-RISK-ASSESSMENT-005

**Automated Decision Risk Assessment Missing**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-AUTOMATED-NO-RISK-ASSESSMENT-005`   |
| Domain          | CCPA                                          |
| Category        | AUTOMATED                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business uses automated decision-making technology that processes consumers' personal information in ways that present significant risk to consumers' privacy or security, but has not performed a comprehensive risk assessment as required by CPRA regulations. Risk assessments are essential for identifying and mitigating potential harms from automated profiling and decision-making systems.

This signal indicates that businesses have deployed automated decision systems without conducting proper due diligence on privacy and security risks, preventing them from identifying and addressing potential harms to consumers.

## Applicability

This signal applies to:

- Financial services using automated credit scoring or lending decisions
- Healthcare platforms with automated diagnosis or treatment recommendations
- Employment platforms using automated hiring or performance evaluation
- Insurance companies with automated underwriting and pricing algorithms
- Educational institutions using automated admissions or placement systems
- Law enforcement agencies using automated risk assessment or predictive policing
- Social media platforms with automated content recommendation and profiling
- Any business whose automated decision-making presents significant privacy/security risks

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Automated Decision System Deployed Without Risk Assessment

```python
# Credit scoring system deployed without documented risk assessment
class CreditScoringSystem:
    def __init__(self):
        self.model = load_ml_model("credit_scoring_v2.pkl")

        # Missing: Risk assessment documentation
        # self.risk_assessment = {
        #     "assessment_date": "2024-01-15",
        #     "system_description": "ML-based credit scoring for loan decisions",
        #     "data_processed": ["income", "employment", "credit_history", "location"],
        #     "privacy_risks": [...],
        #     "security_risks": [...],
        #     "bias_analysis": [...],
        #     "mitigation_measures": [...],
        #     "reviewed_by": "Privacy Officer",
        #     "approved_by": "Chief Risk Officer"
        # }

    def score_applicant(self, applicant_data):
        # Makes consequential decisions without risk assessment
        return self.model.predict(applicant_data)

# No documentation of privacy/security risk analysis exists
```

### Profiling System Without Privacy Impact Assessment

```javascript
// User profiling engine without risk assessment
class UserProfilingEngine {
  constructor() {
    this.segmentationModel = loadModel('user_segmentation_v3');

    // Missing: Privacy impact assessment for profiling activities
    // this.riskAssessment = {
    //   purpose: "Automated user segmentation for targeted marketing",
    //   personalDataCategories: ["browsing history", "purchase data", "demographics"],
    //   significantRisks: [
    //     "Potential for discriminatory targeting",
    //     "Sensitive inference from non-sensitive data",
    //     "Data security risks from centralized profiling database"
    //   ],
    //   safeguards: [...],
    //   assessmentDate: "2024-02-01",
    //   nextReviewDate: "2025-02-01"
    // };
  }

  async profileUser(userId) {
    // Automated profiling without documented risk assessment
    const userData = await this.fetchUserData(userId);
    const profile = this.segmentationModel.predict(userData);
    return profile;
  }
}
```

### Automated Hiring System Without Bias Assessment

```java
// Applicant screening system without fairness/bias risk assessment
public class AutomatedScreeningSystem {
    private MLModel screeningModel;

    public AutomatedScreeningSystem() {
        this.screeningModel = MLModel.load("applicant_screening.model");

        // Missing: Risk assessment for discriminatory outcomes
        /*
        RiskAssessment assessment = new RiskAssessment.Builder()
            .setSystem("Automated Applicant Screening")
            .addDataCategory("Resume text")
            .addDataCategory("Work history")
            .addDataCategory("Education")
            .addPrivacyRisk("Inference of protected characteristics")
            .addBiasRisk("Potential gender bias in technical role screening")
            .addBiasRisk("Potential age bias from education recency signals")
            .addMitigation("Regular fairness audits across demographic groups")
            .addMitigation("Human review of all rejections")
            .setAssessor("AI Ethics Team")
            .setDate(LocalDate.now())
            .build();

        this.riskAssessment = assessment;
        */
    }

    public ScreeningResult screenApplicant(JobApplication application) {
        // Makes hiring decisions without documented risk assessment
        return screeningModel.evaluate(application);
    }
}
```

### Algorithmic Pricing Without Consumer Harm Analysis

```python
# Dynamic pricing system without risk assessment
class PersonalizedPricingEngine:
    def __init__(self):
        self.pricing_model = load_pricing_model()

        # Missing: Risk assessment for potential consumer harm
        # self.risk_assessment = RiskAssessment(
        #     system_name="Personalized Pricing Algorithm",
        #     processing_activities=[
        #         "Collection of browsing behavior",
        #         "Analysis of purchase history",
        #         "Real-time price adjustment based on user profile"
        #     ],
        #     privacy_risks=[
        #         "Excessive data collection for pricing decisions",
        #         "Potential for price discrimination",
        #         "Lack of transparency in pricing logic"
        #     ],
        #     security_risks=[
        #         "Centralized database of consumer behavior profiles",
        #         "API exposure of pricing algorithm"
        #     ],
        #     consumer_harms=[
        #         "Economic harm from discriminatory pricing",
        #         "Dignity harm from unfair treatment"
        #     ],
        #     mitigations=[
        #         "Price variation caps by user segment",
        #         "Regular algorithmic audit for discriminatory patterns",
        #         "Consumer opt-out of personalized pricing"
        #     ],
        #     assessed_by="Privacy Team",
        #     assessment_date=date.today(),
        #     next_review=date.today() + timedelta(days=365)
        # )

    def calculate_price(self, user_id, product_id):
        # Applies algorithmic pricing without risk assessment
        user_features = self.get_user_features(user_id)
        return self.pricing_model.predict(user_features, product_id)
```

## What This Signal Does NOT Assert

- Whether the automated decision-making is lawful or unlawful
- The actual risk level posed by the automated system
- Whether informal risk analysis has been conducted
- Whether the system causes actual harm to consumers
- Compliance or non-compliance with CCPA/CPRA
- Required content or format of risk assessments

## CCPA Context (Informative)

This signal is relevant to CCPA/CPRA requirements:

- **Section 1798.185(a)(15)**: The CPPA shall issue regulations governing access and opt-out rights with respect to businesses' use of automated decision-making technology, including profiling
- **Section 1798.185(a)(16)**: The CPPA shall adopt regulations requiring businesses whose processing of consumers' personal information presents significant risk to consumers' privacy or security to perform a risk assessment and submit it to the Agency
- **Requirement**: Businesses using automated decision-making that presents significant risk must conduct and document comprehensive risk assessments covering privacy risks, security risks, potential for bias or discrimination, and mitigation measures
- **Added by**: CPRA (California Privacy Rights Act amendments, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-AUTOMATED-NO-DISCLOSURE-001` — Automated decision-making not disclosed
- `CSE-CCPA-AUTOMATED-NO-HUMAN-REVIEW-004` — Human review not available
- `CSE-CCPA-AUTOMATED-NO-OPTOUT-003` — Opt-out of automated decisions not available
- `CSE-GDPR-ACCOUNTABILITY-NO-DPIA-001` — Similar GDPR Data Protection Impact Assessment requirement

## Notes

Detection of this signal typically involves:

- Review of privacy program documentation for automated decision risk assessments
- Analysis of deployment processes for new automated decision systems
- Assessment of risk management frameworks for AI/ML systems
- Inspection of privacy impact assessment procedures and templates
- Review of governance documentation for high-risk processing activities
- Evaluation of algorithmic fairness testing and bias auditing practices
- Analysis of security risk assessments for automated decision infrastructure
- Assessment of processes for identifying significant privacy/security risks
- Review of submission records to the California Privacy Protection Agency

The presence of this signal indicates a condition that warrants review in the context of CPRA requirements for risk assessment of automated decision-making systems.
