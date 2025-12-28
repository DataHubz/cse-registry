# CSE-CCPA-OPTOUT-NO-LIMIT-SPI-LINK-005

**"Limit Use of My Sensitive Personal Information" Link Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-CCPA-OPTOUT-NO-LIMIT-SPI-LINK-005`   |
| Domain          | CCPA                                      |
| Category        | OPTOUT                                    |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

A business that uses or discloses sensitive personal information for purposes beyond those permitted without consumer consent does not provide a clear and conspicuous link titled "Limit the Use of My Sensitive Personal Information" on its homepage.

This signal indicates that the CPRA-required opt-out mechanism for limiting the use of sensitive personal information is not present or not properly accessible to consumers, preventing them from restricting how their sensitive data is used.

## Applicability

This signal applies to:

- Healthcare and wellness applications collecting health data
- Financial services platforms processing financial information
- Websites collecting precise geolocation data
- Identity verification services using biometric data
- Social platforms collecting racial or ethnic origin data
- Dating or social apps collecting sexual orientation information
- Authentication systems using government ID numbers
- Any business collecting and using sensitive PI beyond permitted purposes

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Website Missing Sensitive PI Link

```html
<!-- Homepage footer missing required sensitive PI limitation link -->
<footer>
  <nav>
    <a href="/privacy">Privacy Policy</a>
    <a href="/ccpa-opt-out">Do Not Sell or Share My Personal Information</a>
    <!-- Missing: "Limit the Use of My Sensitive Personal Information" -->
  </nav>
</footer>
```

### Mobile App Without Sensitive Data Controls

```swift
// iOS app settings missing sensitive PI limitation option
struct PrivacySettingsView: View {
    var body: some View {
        List {
            NavigationLink("Privacy Policy", destination: PrivacyPolicyView())
            NavigationLink("Do Not Sell or Share My Info", destination: OptOutView())
            // Missing: "Limit the Use of My Sensitive Personal Information"
        }
    }
}
```

### Health App Without Required Link

```kotlin
// Android health app collecting sensitive health data without limit option
class HealthAppActivity : AppCompatActivity() {
    private fun setupPrivacyControls() {
        // App collects health metrics, mental health data, genetic info
        // but provides no way to limit use beyond permitted purposes

        // Missing: UI for "Limit the Use of My Sensitive Personal Information"
    }
}
```

### Privacy Center Missing Sensitive Controls

```javascript
// Privacy preference center without sensitive PI options
const privacyOptions = {
  optOutSale: {
    title: 'Do Not Sell or Share My Personal Information',
    available: true
  }
  // Missing: limitSensitivePI option for health data, biometrics, etc.
};
```

## What This Signal Does NOT Assert

- Whether the business actually uses sensitive PI beyond permitted purposes
- Whether the link text uses the exact prescribed wording
- Whether the limitation mechanism functions when accessed
- What categories of sensitive PI the business collects
- Compliance or non-compliance with CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.135(a)**: A business that uses or discloses a consumer's sensitive personal information for purposes other than those specified in section 1798.121(a) shall provide a clear and conspicuous link on the homepage titled "Limit the Use of My Sensitive Personal Information"
- **Section 1798.121**: Defines sensitive personal information and permitted uses without consumer consent (providing requested services, preventing security incidents, short-term transient use, etc.)
- **Sensitive PI Categories**: Includes Social Security numbers, financial account credentials, precise geolocation, racial/ethnic origin, religious beliefs, genetic data, biometric data, health data, sex life/sexual orientation, citizenship/immigration status
- **Added by**: CPRA (California Privacy Rights Act, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-OPTOUT-NO-SALE-LINK-001` — Missing "Do Not Sell" link
- `CSE-CCPA-OPTOUT-NO-SHARE-LINK-002` — Missing "Do Not Share" link
- `CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004` — Global Privacy Control not honored
- `CSE-CCPA-OPTOUT-NO-PREFERENCE-SIGNAL-006` — Opt-out preference signal not processed

## Notes

Detection of this signal typically involves:

- Automated scanning of website homepage and navigation
- Analysis of mobile application privacy settings menus
- Review of data processing activities to determine if sensitive PI is used
- Assessment of whether uses exceed permitted purposes under CPRA
- Verification of link text and prominence
- Inspection of privacy policy disclosures about sensitive PI

The presence of this signal indicates a condition that warrants review in the context of CPRA sensitive personal information requirements.
