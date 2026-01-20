# CSE-CCPA-SENSITIVE-NO-NECESSITY-002

**SPI Collected Beyond Necessity**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-SENSITIVE-NO-NECESSITY-002`         |
| Domain          | CCPA                                          |
| Category        | SENSITIVE                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business collects sensitive personal information beyond what is reasonably necessary and proportionate to achieve the disclosed purposes of collection. This signal indicates that the scope, granularity, or frequency of sensitive data collection exceeds what would be required to provide the requested service or fulfill the stated business purpose, violating CPRA's data minimization principle for sensitive information.

## Applicability

This signal applies to:

- Mobile apps requesting continuous precise geolocation when approximate location would suffice
- Healthcare platforms collecting complete medical histories when only specific conditions are relevant
- Authentication services storing biometric templates when less sensitive methods would work
- Financial apps requiring full Social Security numbers when partial verification is adequate
- Dating apps collecting detailed sexual orientation data beyond matching requirements
- Fitness trackers collecting health metrics unrelated to fitness features
- Forms requesting government ID numbers when alternative verification is available
- Any business over-collecting sensitive PI relative to disclosed purposes

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Excessive Geolocation Precision

```swift
// Weather app collecting precise GPS coordinates when zip code would suffice
class WeatherService {
    func requestLocationPermission() {
        // Requests precise location (latitude/longitude) - NOT necessary
        locationManager.requestWhenInUseAuthorization()
        locationManager.desiredAccuracy = kCLLocationAccuracyBest // Excessive

        // Zip code or city-level would be sufficient for weather forecast
        // locationManager.desiredAccuracy = kCLLocationAccuracyThreeKilometers
    }

    func getWeather(location: CLLocation) {
        // Weather forecast doesn't need meter-level precision
        api.fetchWeather(lat: location.coordinate.latitude,
                        lon: location.coordinate.longitude)
    }
}
```

### Unnecessary Health Data Collection

```javascript
// Fitness app collecting unrelated health data
const userProfileForm = {
  // Necessary for fitness tracking
  age: true,
  weight: true,
  height: true,
  activityLevel: true,

  // NOT necessary for step counting and calorie tracking
  medicalConditions: true,           // Excessive
  prescriptionMedications: true,     // Excessive
  mentalHealthHistory: true,         // Excessive
  geneticInformation: true,          // Excessive
  sexualHealthData: true             // Excessive
};

async function collectUserHealth(userId, healthData) {
  // Collecting comprehensive medical history for a simple step counter
  await db.users.update(userId, {
    fullMedicalHistory: healthData  // Beyond necessity
  });
}
```

### Over-Collecting Financial Information

```python
# E-commerce checkout requesting unnecessary financial details
class CheckoutForm:
    def collect_payment_info(self, customer_id):
        fields = {
            # Necessary for payment processing
            'card_number': True,
            'expiration_date': True,
            'cvv': True,

            # NOT necessary for one-time purchase
            'full_ssn': True,                    # Excessive - partial SSN may suffice
            'bank_account_number': True,         # Excessive - card payment only
            'bank_routing_number': True,         # Excessive
            'full_credit_report': True,          # Excessive for simple checkout
            'annual_income': True,               # Excessive
            'employment_history': True           # Excessive
        }

        # Stores financial data beyond payment necessity
        self.store_financial_profile(customer_id, fields)
```

### Excessive Biometric Data

```java
// Authentication system collecting multiple biometric identifiers when one suffices
public class BiometricAuth {
    public void enrollUser(String userId) {
        // Collecting multiple biometric identifiers when one would suffice
        byte[] faceTemplate = scanFace();              // One method sufficient
        byte[] fingerprints = scanAllFingerprints();   // Excessive - 10 prints
        byte[] irisScans = scanBothIrises();           // Excessive - redundant
        byte[] voicePrint = recordVoicePattern();      // Excessive - redundant
        byte[] palmPrint = scanPalm();                 // Excessive - redundant
        byte[] gaitAnalysis = analyzeWalkingPattern(); // Excessive - redundant

        // Storing all biometric templates when one authentication method suffices
        biometricDB.storeAll(userId, faceTemplate, fingerprints,
                           irisScans, voicePrint, palmPrint, gaitAnalysis);
    }
}
```

## What This Signal Does NOT Assert

- Whether the sensitive personal information is being used improperly
- Whether the business has legitimate reasons for broader data collection
- Whether consumers have been notified about the extent of collection
- Whether the data collection is technically secure
- Compliance or non-compliance with CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.100(c)**: A business's collection, use, retention, and sharing of a consumer's personal information shall be reasonably necessary and proportionate to achieve the purposes for which the personal information was collected or processed
- **Section 1798.121**: Sensitive personal information is subject to heightened protection and limitation rights
- **Data Minimization Principle**: CPRA strengthens California's data minimization requirements, particularly for sensitive categories
- **Sensitive PI Categories**: Social Security numbers, driver's license, financial account credentials, precise geolocation, racial/ethnic origin, religious beliefs, genetic data, biometric data, health data, sex life/sexual orientation, citizenship/immigration status
- **Added by**: CPRA (California Privacy Rights Act, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-SENSITIVE-NO-LIMITATION-001` — SPI use not limited to disclosed purposes
- `CSE-CCPA-SENSITIVE-NO-LIMIT-MECHANISM-003` — Limit SPI use mechanism missing
- `CSE-CCPA-NOTICE-NO-SPI-DISCLOSURE-007` — Sensitive PI collection not disclosed
- `CSE-CCPA-NOTICE-NO-PURPOSE-DISCLOSURE-004` — Purpose of collection not disclosed

## Notes

Detection of this signal typically involves:

- Form field analysis to identify excessive sensitive data requests
- Permission scope review (e.g., precise vs. approximate location)
- Data schema examination to find unnecessary sensitive PI fields
- Purpose-to-data mapping to identify disproportionate collection
- Comparison of data collected against disclosed business purposes
- Industry benchmarking to assess necessity standards
- Alternative method analysis to determine if less sensitive data would suffice
- Retention period review for unnecessarily long storage of sensitive PI

The presence of this signal indicates a condition that warrants review in the context of CPRA data minimization and proportionality requirements for sensitive personal information.
