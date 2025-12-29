# CSE-CCPA-SENSITIVE-INFERENCE-UNCONTROLLED-006

**SPI Inferences Not Controlled**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-SENSITIVE-INFERENCE-UNCONTROLLED-006` |
| Domain          | CCPA                                          |
| Category        | SENSITIVE                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business creates inferences or derives characteristics that qualify as sensitive personal information from non-sensitive data, or uses such inferences for purposes beyond those permitted under CPRA, without providing consumers the ability to limit such use. This signal indicates that the business is inferring sensitive attributes (health status, sexual orientation, religious beliefs, racial/ethnic origin) through profiling, algorithmic analysis, or data correlation, effectively creating new sensitive PI that is not subject to appropriate controls.

## Applicability

This signal applies to:

- Social media platforms inferring health conditions from behavioral patterns
- Advertising networks deriving sexual orientation from browsing history
- E-commerce sites inferring religious beliefs from purchase patterns
- Data brokers creating health risk scores from non-health data
- Mobile apps inferring precise geolocation from network signals
- Analytics platforms deriving racial/ethnic characteristics from demographic data
- Dating apps creating sexual orientation profiles from interaction patterns
- Any business generating sensitive personal information through inference or profiling

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Health Inferences from Behavior

```python
# Social media platform inferring health conditions from activity
class BehavioralHealthInference:
    def analyze_user_activity(self, user_id):
        # Collect non-sensitive behavioral data
        posts = self.get_user_posts(user_id)
        search_queries = self.get_search_history(user_id)
        engagement_patterns = self.get_engagement_data(user_id)

        # Infer sensitive health information (creates new SPI)
        health_inferences = {
            'likely_depressed': self.detect_depression_indicators(posts),
            'substance_abuse_risk': self.analyze_addiction_patterns(posts),
            'pregnancy_likelihood': self.infer_pregnancy(search_queries),
            'chronic_illness': self.predict_health_conditions(engagement_patterns),
            'mental_health_status': self.assess_mental_health(posts)
        }

        # Use health inferences for ad targeting without limitation mechanism
        if health_inferences['likely_depressed']:
            self.ad_platform.target_user(user_id, 'mental-health-services')

        if health_inferences['pregnancy_likelihood'] > 0.7:
            self.ad_platform.target_user(user_id, 'pregnancy-products')

        # Store inferred sensitive PI without treating it as SPI
        # Missing: Provide limitation mechanism for inferred health data
        # Missing: Apply SPI protections to inferred characteristics
        self.user_profiles.update(user_id, health_inferences)
```

### Sexual Orientation Inference

```javascript
// Advertising network deriving sexual orientation from browsing
class SexualOrientationProfiling {
  buildUserProfile(userId, browsingHistory) {
    // Analyze non-sensitive browsing data to infer sensitive characteristic
    const visitedSites = browsingHistory.map(h => h.domain);
    const searchTerms = browsingHistory.map(h => h.searchQuery);
    const contentEngagement = this.analyzeEngagement(browsingHistory);

    // Infer sexual orientation (creates sensitive PI under CPRA)
    const orientationScore = this.inferOrientation({
      lgbtqSiteVisits: this.countLGBTQSites(visitedSites),
      datingAppUsage: this.analyzeDatingPatterns(visitedSites),
      contentPreferences: contentEngagement,
      socialMediaSignals: this.analyzeSocialSignals(userId)
    });

    // Create sensitive PI inference
    const inferredOrientation = {
      category: this.classifyOrientation(orientationScore),
      confidence: orientationScore.confidence,
      derivedFrom: 'behavioral_analysis'
    };

    // Use for ad targeting without SPI limitation controls
    if (inferredOrientation.confidence > 0.6) {
      this.adTargeting.addSegment(userId,
        `sexual_orientation_${inferredOrientation.category}`);
    }

    // Share inferred sensitive data with partners
    this.dataPartners.forEach(partner => {
      partner.updateUserSegment(userId, inferredOrientation);
    });

    // Missing: Treat inferred orientation as sensitive PI
    // Missing: Provide limitation mechanism for inferred characteristics
  }
}
```

### Religious Belief Inference

```java
// E-commerce platform inferring religious beliefs from purchases
public class ReligiousProfileBuilder {
    public void analyzeUserPurchases(String userId, List<Purchase> purchases) {
        // Extract patterns from non-sensitive purchase data
        Map<String, Integer> productCategories = categorizePurchases(purchases);
        List<String> bookPurchases = filterBooks(purchases);
        Map<String, LocalDate> seasonalPatterns = analyzeSeasonalBuying(purchases);

        // Infer religious beliefs and practices (creates sensitive PI)
        ReligiousProfile inference = new ReligiousProfile();

        // Detect religious affiliation from purchase patterns
        if (productCategories.containsKey("kosher_food")) {
            inference.setLikelyReligion("judaism");
            inference.setConfidence(0.8);
        }

        if (bookPurchases.stream().anyMatch(b -> b.contains("quran") || b.contains("islamic"))) {
            inference.setLikelyReligion("islam");
            inference.setPracticing(true);
        }

        if (seasonalPatterns.containsKey("ramadan") || seasonalPatterns.containsKey("christmas")) {
            inference.setReligiousObservance(true);
        }

        // Use inferred religious beliefs for marketing
        if (inference.getLikelyReligion() != null) {
            marketingEngine.targetReligiousSegment(userId, inference);
            emailCampaigns.addToReligiousHolidayList(userId, inference.getLikelyReligion());
        }

        // Store and share inferred sensitive characteristic
        userProfileDB.updateReligiousProfile(userId, inference);
        dataPartners.shareReligiousSegment(userId, inference);

        // Missing: Consumer control over inferred religious beliefs
        // Missing: Limitation mechanism for sensitive inferences
        // Missing: Disclosure that religious beliefs are being inferred
    }
}
```

### Precise Location Inference

```swift
// Mobile app inferring precise geolocation without permission
class LocationInferenceEngine {
    func inferPreciseLocation(userId: String) -> CLLocationCoordinate2D {
        // Collect non-location data
        let wifiNetworks = networkScanner.getAvailableWiFiNetworks()
        let bluetoothBeacons = bluetoothScanner.getNearbyBeacons()
        let cellTowers = cellularInfo.getConnectedTowers()
        let ipAddress = networkInfo.getCurrentIPAddress()

        // Infer precise geolocation from indirect signals (creates sensitive PI)
        let wifiLocation = wifiLocationDB.lookup(wifiNetworks.map { $0.bssid })
        let beaconLocation = beaconLocationDB.lookup(bluetoothBeacons.map { $0.uuid })
        let cellLocation = cellTowerDB.triangulate(cellTowers)
        let ipLocation = ipGeolocationService.lookup(ipAddress)

        // Create precise geolocation inference
        let inferredLocation = locationFusion.combine(
            wifiLocation,
            beaconLocation,
            cellLocation,
            ipLocation
        )

        // Use inferred precise location for profiling without limitation
        let visitedPlaces = placeRecognition.identifyPlaces(inferredLocation)
        if visitedPlaces.contains(where: { $0.category == "healthcare" }) {
            healthProfiler.markHealthcareVisit(userId: userId)
        }

        if visitedPlaces.contains(where: { $0.category == "religious" }) {
            religionProfiler.inferReligiousAffiliation(userId: userId,
                                                       place: visitedPlaces.first!)
        }

        // Share inferred precise location with advertisers
        adNetwork.updateLocationProfile(userId: userId, location: inferredLocation)

        // Missing: Treat inferred location as precise geolocation (sensitive PI)
        // Missing: Provide limitation mechanism for location inferences
        // Missing: Obtain consent before inferring precise location

        return inferredLocation
    }
}
```

## What This Signal Does NOT Assert

- Whether the underlying data collection is lawful
- Whether the inference algorithms are accurate or discriminatory
- Whether consumers have been notified about inference activities
- Whether inferred data is actually sensitive personal information under CPRA
- Compliance or non-compliance with CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.140(ae)**: "Personal information" includes inferences drawn from personal information to create a profile about a consumer, and such inferences may constitute sensitive personal information if they reveal the sensitive categories
- **Section 1798.121**: If inferred data reveals health information, sexual orientation, religious beliefs, racial/ethnic origin, or other sensitive categories, it is subject to SPI limitation rights
- **Sensitive Inference Categories**: Inferences that reveal or create:
  - Health data or medical conditions
  - Sex life or sexual orientation
  - Religious or philosophical beliefs
  - Racial or ethnic origin
  - Citizenship or immigration status
  - Genetic information
  - Biometric information for identification
  - Precise geolocation
- **Section 1798.100(b)**: Businesses must disclose inference activities that create sensitive PI
- **Section 1798.135**: Consumers must be able to limit use of inferred sensitive PI just as they can limit collected sensitive PI
- **Algorithmic Profiling**: CPRA's definition of "profiling" includes automated processing to evaluate, analyze, or predict characteristics, which may create sensitive PI
- **Added by**: CPRA (California Privacy Rights Act, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-SENSITIVE-NO-LIMITATION-001` — SPI use not limited to disclosed purposes
- `CSE-CCPA-SENSITIVE-SECONDARY-USE-004` — SPI used for unauthorized secondary purpose
- `CSE-CCPA-SENSITIVE-NO-LIMIT-MECHANISM-003` — Limit SPI use mechanism missing
- `CSE-CCPA-NOTICE-NO-SPI-DISCLOSURE-007` — Sensitive PI collection not disclosed
- `CSE-CCPA-NOTICE-NO-PURPOSE-DISCLOSURE-004` — Purpose of collection not disclosed

## Notes

Detection of this signal typically involves:

- Machine learning model auditing to identify sensitive characteristic inference
- Data flow analysis to track creation of sensitive inferences from non-sensitive inputs
- User profile schema review to find inferred sensitive attributes
- Algorithmic transparency assessment to reveal inference mechanisms
- Code review to identify profiling logic that creates sensitive PI
- Advertising targeting analysis to detect use of sensitive inferences
- Privacy policy review to check disclosure of inference activities
- Testing of limitation mechanisms to verify they apply to inferred SPI
- Third-party data sharing review to detect transmission of sensitive inferences

The presence of this signal indicates a condition that warrants review in the context of CPRA's treatment of inferences as personal information and sensitive PI limitation requirements.
