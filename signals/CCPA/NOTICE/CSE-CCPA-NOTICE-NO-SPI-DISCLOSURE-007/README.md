# CSE-CCPA-NOTICE-NO-SPI-DISCLOSURE-007

**Sensitive PI Use/Disclosure Not Disclosed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-NOTICE-NO-SPI-DISCLOSURE-007` |
| Domain | CCPA |
| Category | NOTICE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business that collects or uses sensitive personal information fails to disclose this fact or provide a notice of the right to limit use and disclosure. This signal indicates missing or inadequate disclosures about sensitive PI practices, including the absence of required "Limit the Use of My Sensitive Personal Information" notices.

CPRA introduced heightened transparency requirements for sensitive personal information distinct from general personal information disclosures.

## Applicability

This signal applies to:

- Privacy policies and comprehensive privacy notices
- Notice at collection disclosures
- Sensitive personal information collection points (health, financial, biometric)
- "Limit Use of Sensitive Personal Information" notice mechanisms
- Mobile applications collecting precise geolocation or biometric data
- Financial services and healthcare applications
- Account creation flows requesting sensitive data
- Cookie and tracking notices for sensitive data collection

## Examples (Non-Normative)

### Health App Without SPI Disclosure

```swift
// HealthKit data collection without SPI notice
let healthStore = HKHealthStore()
healthStore.requestAuthorization(toShare: [], read: [bloodPressure, heartRate]) { success, error in
    // No disclosure that health data is "sensitive PI" under CCPA
}
```

### Biometric Authentication Without Notice

```javascript
// Face ID implementation without SPI disclosure
const credential = await navigator.credentials.get({
  publicKey: {
    challenge: new Uint8Array(32),
    userVerification: "required"
  }
});
// Missing notice about biometric data as sensitive PI
```

### Privacy Policy Missing SPI Section

```markdown
## Categories of Information We Collect

- Identifiers (name, email, IP address)
- Commercial information (purchase history)
- Precise geolocation data

<!-- Missing: designation of geolocation as "sensitive PI"
     and right to limit disclosure -->
```

### Financial Data Collection Without SPI Notice

```html
<form action="/apply-credit" method="POST">
  <input type="text" name="ssn" placeholder="Social Security Number">
  <input type="text" name="income" placeholder="Annual Income">
  <!-- Missing: notice about sensitive financial data collection
       and right to limit use -->
</form>
```

## What This Signal Does NOT Assert

- Whether the data collected actually qualifies as sensitive PI under CCPA
- Whether the business uses sensitive PI only for disclosed purposes
- The presence or absence of opt-in consent mechanisms
- Compliance with the right to limit processing requirements
- Whether exceptions to the right to limit apply
- The technical implementation of sensitive PI controls

## CCPA Context (Informative)

- **Section**: §1798.121(a)
- **Requirement**: A consumer shall have the right, at any time, to direct a business that collects sensitive personal information about the consumer to limit its use to that use which is necessary to perform the services or provide the goods reasonably expected by an average consumer
- **Added by**: CPRA (2020 amendment)

Sensitive personal information includes (§1798.140(ae)):
- Social security, driver's license, state ID, or passport numbers
- Account log-in, financial account, debit card, or credit card number with access credentials
- Precise geolocation
- Racial or ethnic origin, religious or philosophical beliefs, union membership
- Mail, email, or text message contents (not directed to the business)
- Genetic data
- Biometric information for unique identification
- Health information
- Sex life or sexual orientation information

## Related Signals

- `CSE-CCPA-NOTICE-NO-PI-CATEGORIES-003` — Personal Information Categories Not Disclosed
- `CSE-CCPA-NOTICE-NO-RIGHTS-DISCLOSURE-006` — Consumer Rights Not Disclosed
- `CSE-CCPA-RIGHTS-NO-LIMIT-SPI-LINK-003` — Limit SPI Link Missing (if defined)

## Notes

Detection of this signal typically involves:

- Natural language processing for "sensitive personal information" terminology
- Pattern matching for SPI categories (geolocation, biometric, health, financial, etc.)
- Analysis of permission requests for sensitive data types
- Review of privacy policy sections for SPI-specific disclosures
- Checking for "Limit the Use of My Sensitive Personal Information" links or controls
- Scanning API schemas for sensitive data fields
- Evaluating mobile app privacy manifests for sensitive data declarations

The presence of this signal indicates a CPRA-specific disclosure gap that may expose the business to consumer complaints and limit consumer control over sensitive data.
