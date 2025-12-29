# CSE-CCPA-SENSITIVE-SECONDARY-USE-004

**SPI Used for Unauthorized Secondary Purpose**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-SENSITIVE-SECONDARY-USE-004`        |
| Domain          | CCPA                                          |
| Category        | SENSITIVE                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business uses sensitive personal information collected for a primary permitted purpose for secondary purposes that are not reasonably necessary to the original purpose and fall outside CPRA's permitted uses. This signal indicates that sensitive data initially collected for legitimate functions is being repurposed for activities like profiling, behavioral advertising, or data brokerage without consumer consent to limit such use.

## Applicability

This signal applies to:

- Healthcare apps using medical data collected for treatment to build advertising profiles
- Financial services using account credentials collected for authentication to assess creditworthiness
- Navigation apps using geolocation collected for directions to infer lifestyle patterns
- Biometric authentication systems using face scans to infer demographic characteristics
- Genetic testing services using DNA data to create research datasets without consent
- Mental health apps using therapy data for product development or analytics
- Government ID verification systems retaining documents for unauthorized purposes
- Any business repurposing sensitive PI beyond the original collection purpose

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Health Data Repurposed for Marketing

```python
# Telemedicine app repurposing medical consultation data
class TelehealthPlatform:
    def process_consultation(self, patient_id, consultation_data):
        # Primary purpose: Provide medical consultation (permitted)
        self.medical_records.store(patient_id, consultation_data)
        self.doctor_portal.make_available(consultation_data)

        # Secondary purpose: Build marketing profile (NOT permitted without consent)
        conditions = self.extract_conditions(consultation_data)
        self.marketing_db.create_health_profile(
            patient_id=patient_id,
            medical_conditions=conditions,  # Repurposing for ads
            prescription_likelihood=self.predict_prescriptions(conditions)
        )

        # Secondary purpose: Sell insights to pharma companies (NOT permitted)
        self.data_broker.send_patient_insights(
            demographics=self.infer_demographics(patient_id),
            conditions=conditions,
            treatment_patterns=consultation_data.history
        )
```

### Biometric Data Used for Profiling

```swift
// Face recognition app repurposing biometric data
class FaceAuthenticator {
    func authenticate(faceImage: UIImage, userId: String) -> Bool {
        // Primary purpose: User authentication (permitted)
        let faceTemplate = extractBiometricTemplate(from: faceImage)
        let isAuthenticated = compareBiometrics(faceTemplate, userId: userId)

        // Secondary purpose: Demographic profiling (NOT permitted without consent)
        let demographics = inferDemographics(from: faceImage)
        let ageRange = estimateAge(from: faceImage)
        let gender = predictGender(from: faceImage)
        let ethnicity = classifyEthnicity(from: faceImage)

        // Store demographic inferences for analytics and advertising
        analyticsDB.updateUserProfile(
            userId: userId,
            estimatedAge: ageRange,
            inferredGender: gender,
            inferredEthnicity: ethnicity  // Repurposing sensitive biometric data
        )

        return isAuthenticated
    }
}
```

### Financial Data Used for Credit Scoring

```javascript
// Payment app repurposing transaction data
class PaymentProcessor {
  async processTransaction(userId, paymentMethod, amount) {
    // Primary purpose: Process payment (permitted)
    await this.chargeCard(paymentMethod.cardNumber, amount);
    await this.recordTransaction(userId, amount);

    // Secondary purpose: Build credit profile (NOT permitted without consent)
    const financialProfile = {
      accountNumber: paymentMethod.accountNumber,
      spendingPatterns: await this.analyzeSpendingHistory(userId),
      creditworthiness: this.assessCreditRisk(userId),
      incomeEstimate: this.estimateIncome(userId)
    };

    // Share with credit bureaus without disclosure
    await this.creditBureau.reportFinancialBehavior(userId, financialProfile);

    // Use for loan targeting
    if (financialProfile.creditworthiness > 700) {
      await this.loanOffers.targetUser(userId, 'prime-rate-loans');
    }
  }
}
```

### Location Data Repurposed for Profiling

```java
// Ride-sharing app repurposing location history
public class RideService {
    public void completeRide(String userId, Ride ride) {
        // Primary purpose: Provide transportation service (permitted)
        chargeUser(userId, ride.getFare());
        recordRideHistory(userId, ride);

        // Secondary purpose: Behavioral profiling (NOT permitted without consent)
        LocationHistory history = getLocationHistory(userId);

        // Infer sensitive lifestyle information from locations
        boolean visitsHealthcare = inferHealthcareVisits(history);
        boolean attendsReligiousServices = inferReligiousAffiliation(history);
        String politicalLeanings = inferPoliticalViews(history);
        List<String> socialPatterns = analyzeSocialBehavior(history);

        // Use precise geolocation to build behavioral profile
        userProfileDB.update(userId, new Profile()
            .setHealthConcerns(visitsHealthcare)
            .setReligiousAffiliation(attendsReligiousServices)
            .setPoliticalProfile(politicalLeanings)
            .setSocialBehavior(socialPatterns));

        // Share profile with advertising partners
        adPartners.targetUser(userId, userProfileDB.get(userId));
    }
}
```

## What This Signal Does NOT Assert

- Whether the initial collection of sensitive PI was lawful
- Whether the primary purpose was adequately disclosed
- Whether consumers have been given the opportunity to limit SPI use
- Whether the secondary use is technically secure
- Compliance or non-compliance with CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.121(a)**: Businesses may only use sensitive PI for permitted purposes unless consumer has been given opportunity to limit and has not done so
- **Section 1798.100(b)**: Businesses must inform consumers of the purposes for which sensitive PI will be used
- **Compatible Uses**: CPRA limits secondary uses of sensitive PI to those compatible with disclosed primary purpose and within permitted purposes
- **Permitted Purposes Only**: Providing requested services, security/fraud prevention, short-term transient use, service provider functions, quality/safety verification, legal compliance
- **Secondary Use Restrictions**: Using SPI for profiling, advertising, inference of characteristics, or sale/sharing requires consumer opportunity to limit
- **Sensitive PI Categories**: Social Security numbers, financial account credentials, precise geolocation, racial/ethnic origin, religious beliefs, genetic data, biometric data, health data, sex life/sexual orientation, citizenship/immigration status, contents of mail/email/text
- **Added by**: CPRA (California Privacy Rights Act, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-SENSITIVE-NO-LIMITATION-001` — SPI use not limited to disclosed purposes
- `CSE-CCPA-SENSITIVE-NO-NECESSITY-002` — SPI collected beyond necessity
- `CSE-CCPA-SENSITIVE-NO-LIMIT-MECHANISM-003` — Limit SPI use mechanism missing
- `CSE-CCPA-SENSITIVE-INFERENCE-UNCONTROLLED-006` — SPI inferences not controlled
- `CSE-CCPA-NOTICE-NO-PURPOSE-DISCLOSURE-004` — Purpose of collection not disclosed

## Notes

Detection of this signal typically involves:

- Data flow analysis to track SPI from collection point to secondary uses
- Code review to identify purpose drift in sensitive data processing
- Database query analysis to find SPI used in analytics or profiling systems
- API integration review to detect SPI sharing with ad networks or data brokers
- Privacy policy comparison against actual data use practices
- Machine learning model auditing to find SPI used in inference systems
- Third-party data processor contract review for unauthorized secondary uses
- Purpose limitation testing to verify SPI is restricted to disclosed uses

The presence of this signal indicates a condition that warrants review in the context of CPRA sensitive personal information purpose limitation requirements.
