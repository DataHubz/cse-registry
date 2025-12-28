# CSE-CCPA-OPTOUT-NO-PREFERENCE-SIGNAL-006

**Opt-Out Preference Signal Not Processed**

## Signal Overview

| Field           | Value                                         |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-CCPA-OPTOUT-NO-PREFERENCE-SIGNAL-006`   |
| Domain          | CCPA                                         |
| Category        | OPTOUT                                       |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

A business does not recognize or process an opt-out preference signal transmitted by a platform, technology, or mechanism authorized by the consumer to communicate their opt-out choice.

This signal indicates that the business's systems fail to detect, interpret, or honor user-enabled privacy signals beyond Global Privacy Control (GPC), preventing consumers from exercising automated opt-out rights through various privacy-preserving technologies.

## Applicability

This signal applies to:

- Web applications processing browser privacy signals
- Mobile applications with system-level privacy settings
- IoT devices and connected products with privacy controls
- Smart TV platforms with advertising preferences
- Automotive systems with data sharing controls
- Wearable devices with health data sharing settings
- Voice assistants with privacy preference APIs
- Any digital platform receiving opt-out preference signals

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### iOS App Tracking Transparency Ignored

```swift
// iOS app ignores ATT (App Tracking Transparency) framework signal
import AppTrackingTransparency

class AnalyticsManager {
    func initializeTracking() {
        // Missing: Check ATT status before tracking
        // if ATTrackingManager.trackingAuthorizationStatus != .authorized {
        //     return  // Don't track if user opted out
        // }

        // Proceeds with tracking regardless of ATT status
        Analytics.shared.startSession()
        Advertising.shared.loadAds()
    }
}
```

### Android Privacy Sandbox Signals Not Honored

```kotlin
// Android app ignores Privacy Sandbox opt-out signals
class AdManager(private val context: Context) {
    fun loadPersonalizedAds() {
        // Missing: Check Topics API consent status
        // val topicsManager = TopicsManager.obtain(context)
        // if (!topicsManager.hasConsent()) return

        // Loads ads without checking privacy preferences
        val adRequest = AdRequest.Builder().build()
    }
}
```

### Do Not Track Header Ignored

```javascript
// Server-side code ignores DNT header (legacy but still relevant)
app.use((req, res, next) => {
  // Missing: Check for DNT header
  // const doNotTrack = req.headers['dnt'];
  // if (doNotTrack === '1') {
  //   req.trackingAllowed = false;
  // }

  // Proceeds with tracking without checking preferences
  trackingService.recordVisit(req);
  next();
});
```

### Platform-Specific Privacy API Not Checked

```javascript
// Web app doesn't check Privacy Sandbox Topics API
async function loadRelevantContent() {
  // Missing: Check Topics API opt-out status
  // if ('browsingTopics' in document && document.featurePolicy.allowsFeature('browsing-topics')) {
  //   const topics = await document.browsingTopics();
  //   if (!topics || topics.length === 0) {
  //     // User has opted out of Topics
  //     return loadGenericContent();
  //   }
  // }

  // Loads personalized content without checking opt-out signals
  loadPersonalizedContent();
}
```

## What This Signal Does NOT Assert

- Which specific preference signal mechanisms are available
- Whether GPC compliance is also missing (separate signal)
- Whether the business is aware of the signal being sent
- The technical feasibility of processing the signal
- Compliance or non-compliance with CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.135(b)**: A business shall treat user-enabled global privacy controls, such as a browser plugin or privacy setting, device setting, or other mechanism, that communicate or signal the consumer's choice to opt-out as a valid request to opt-out
- **Requirement**: The statute uses the phrase "or other mechanism," indicating that businesses must honor various types of privacy preference signals, not just browser-based controls
- **Added by**: CPRA (California Privacy Rights Act, effective January 1, 2023)
- **Scope**: Applies to any technology or platform that can communicate consumer opt-out preferences

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004` — Global Privacy Control specifically not honored
- `CSE-CCPA-OPTOUT-NO-SALE-LINK-001` — Missing "Do Not Sell" link
- `CSE-CCPA-OPTOUT-SALE-AFTER-OPTOUT-007` — PI sold after opt-out
- `CSE-CCPA-OPTOUT-NO-THIRD-PARTY-NOTICE-008` — Third parties not notified of opt-out

## Notes

Detection of this signal typically involves:

- Testing application response to platform privacy signals
- Analysis of code handling device-level privacy settings
- Review of API integrations with privacy frameworks
- Inspection of server-side request processing for privacy headers
- Verification of mobile app permissions and privacy API usage
- Assessment of IoT device privacy control implementation
- Monitoring of actual behavioral changes when signals are sent

The presence of this signal indicates a condition that warrants review in the context of broader opt-out preference signal requirements.
