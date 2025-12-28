# CSE-CCPA-SENSITIVE-NO-LIMITATION-001

**SPI Use Not Limited to Disclosed Purposes**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-SENSITIVE-NO-LIMITATION-001`        |
| Domain          | CCPA                                          |
| Category        | SENSITIVE                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business uses or discloses sensitive personal information (SPI) for purposes beyond those disclosed in its privacy policy or permitted under CPRA without obtaining consumer consent. This signal indicates that sensitive data is being processed for secondary purposes that fall outside the narrow exceptions allowed by law, and consumers have not been given the opportunity to limit such use.

## Applicability

This signal applies to:

- Healthcare applications using health data for marketing or analytics beyond treatment purposes
- Financial services platforms sharing financial account credentials beyond transaction processing
- Fitness apps using precise geolocation data for advertising or profiling
- Identity verification services using biometric data for purposes beyond authentication
- Social platforms using racial/ethnic origin data for undisclosed ad targeting
- Dating apps using sexual orientation information for research or data brokerage
- E-commerce sites using Social Security numbers beyond fraud prevention
- Any business using sensitive PI outside permitted purposes without consent

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Health Data Used for Marketing

```javascript
// Health app using medical conditions for targeted advertising
class HealthDataProcessor {
  async processHealthMetrics(userId, healthData) {
    // Store health metrics for treatment tracking (permitted)
    await this.healthDB.save(userId, healthData);

    // Use health conditions for ad targeting (NOT permitted without consent)
    if (healthData.conditions.includes('diabetes')) {
      await this.adPlatform.targetUser(userId, 'diabetes-medication-ads');
    }

    // Share health data with data broker (NOT permitted without consent)
    await this.dataBroker.sendProfile(userId, healthData);
  }
}
```

### Biometric Data for Unauthorized Purpose

```python
# Facial recognition used beyond authentication
class BiometricSystem:
    def process_face_scan(self, user_id, face_data):
        # Authentication use (permitted)
        is_authenticated = self.verify_identity(face_data)

        # Emotion analysis for marketing (NOT permitted without consent)
        emotions = self.analyze_emotions(face_data)
        self.marketing_db.store_emotional_profile(user_id, emotions)

        # Demographic inference from biometrics (NOT permitted without consent)
        demographics = self.infer_demographics(face_data)
        self.analytics.update_user_segment(user_id, demographics)
```

### Financial Data Shared Beyond Necessity

```java
// Payment processor sharing financial data beyond transaction processing
public class PaymentProcessor {
    public void processPayment(String userId, PaymentInfo paymentInfo) {
        // Process transaction (permitted)
        transactionService.charge(paymentInfo.getAccountNumber(), amount);

        // Share financial account details with third-party analytics (NOT permitted)
        analyticsPartner.trackFinancialProfile(userId, paymentInfo.getAccountNumber());

        // Use financial data for credit scoring without disclosure (NOT permitted)
        creditScoreService.updateScore(userId, paymentInfo.getCreditHistory());
    }
}
```

### Geolocation Used for Profiling

```swift
// Location tracking app using precise location beyond service provision
class LocationTracker {
    func processLocation(_ location: CLLocation, userId: String) {
        // Provide local search results (permitted)
        searchService.findNearby(location: location)

        // Build behavioral profile from location history (NOT permitted without consent)
        let visitedLocations = locationHistory.getAll(userId: userId)
        let profile = profileBuilder.inferLifestyle(locations: visitedLocations)

        // Share location patterns with advertisers (NOT permitted without consent)
        adNetwork.targetUser(userId: userId, locationPattern: profile)
    }
}
```

## What This Signal Does NOT Assert

- Whether the business collects sensitive personal information
- Whether consumers have been properly notified of sensitive PI collection
- Whether the privacy policy adequately describes permitted uses
- Whether technical safeguards are in place to protect sensitive PI
- Compliance or non-compliance with CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.121(a)**: A business shall not use or disclose a consumer's sensitive personal information for purposes other than those specified in subdivision (a) if the consumer has exercised the right to limit the use or disclosure
- **Permitted Purposes**: Performing services requested, preventing security incidents, resisting malicious attacks, debugging, short-term transient use, performing services on behalf of the business, quality/safety verification, and legal compliance
- **Section 1798.135**: Businesses must provide a "Limit the Use of My Sensitive Personal Information" link when using SPI beyond permitted purposes
- **Sensitive PI Categories**: Social Security numbers, driver's license, state ID, passport number, financial account credentials, precise geolocation, racial/ethnic origin, religious beliefs, union membership, mail/email/text contents, genetic data, biometric data, health data, sex life/sexual orientation
- **Added by**: CPRA (California Privacy Rights Act, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-SENSITIVE-NO-NECESSITY-002` — SPI collected beyond necessity
- `CSE-CCPA-SENSITIVE-NO-LIMIT-MECHANISM-003` — Limit SPI use mechanism missing
- `CSE-CCPA-SENSITIVE-SECONDARY-USE-004` — SPI used for unauthorized secondary purpose
- `CSE-CCPA-OPTOUT-NO-LIMIT-SPI-LINK-005` — Missing "Limit Use of My Sensitive PI" link
- `CSE-CCPA-NOTICE-NO-SPI-DISCLOSURE-007` — Sensitive PI collection not disclosed

## Notes

Detection of this signal typically involves:

- Code analysis to identify sensitive PI processing flows
- Data flow mapping to track SPI beyond disclosed purposes
- Privacy policy review to identify permitted use disclosures
- API traffic analysis to detect SPI sharing with third parties
- Database query auditing to find SPI used in analytics or profiling
- Third-party service integration review for undisclosed SPI sharing
- Comparison of actual data use against privacy notice disclosures

The presence of this signal indicates a condition that warrants review in the context of CPRA sensitive personal information use limitations.
