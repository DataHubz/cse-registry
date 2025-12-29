# CSE-CCPA-SENSITIVE-NO-LIMIT-MECHANISM-003

**Limit SPI Use Mechanism Missing**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-SENSITIVE-NO-LIMIT-MECHANISM-003`   |
| Domain          | CCPA                                          |
| Category        | SENSITIVE                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business that uses or discloses sensitive personal information beyond permitted purposes does not provide a functional mechanism for consumers to limit such use. This signal indicates that while the business may display a "Limit the Use of My Sensitive Personal Information" link, the underlying system to process and honor these requests is missing, incomplete, or non-functional.

## Applicability

This signal applies to:

- Websites with opt-out links that lead to non-functional forms or broken pages
- Mobile apps displaying sensitive PI limitation options without backend implementation
- Platforms that acknowledge limitation requests but fail to apply them to data processing
- Services lacking technical controls to enforce SPI use restrictions
- Systems where limitation requests are not propagated to third-party processors
- Applications without audit mechanisms to verify SPI limitation compliance
- Businesses collecting SPI limitation requests but not implementing restrictions
- Any business using sensitive PI beyond permitted purposes without working limitation controls

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Non-Functional Limitation Form

```html
<!-- SPI limitation link present but form doesn't work -->
<footer>
  <a href="/limit-sensitive-info">Limit the Use of My Sensitive Personal Information</a>
</footer>

<!-- Limitation page with broken form submission -->
<form id="spi-limit-form" action="/api/limit-spi" method="POST">
  <button type="submit">Submit Request</button>
</form>

<script>
// Form submission handler missing or broken
document.getElementById('spi-limit-form').addEventListener('submit', function(e) {
  e.preventDefault();
  // No actual API call or request processing
  alert('Thank you for your request'); // Misleading - request not actually processed
});
</script>
```

### Backend Processing Not Implemented

```python
# API endpoint exists but doesn't enforce SPI limitations
class SPILimitationAPI:
    def limit_sensitive_use(self, user_id, request_data):
        # Log the request but don't actually enforce limitations
        self.audit_log.write(f"SPI limitation request from {user_id}")

        # Missing: Actual enforcement mechanism
        # Should update user preferences and apply to data processing
        # user_prefs.set_spi_limited(user_id, True)
        # data_processor.apply_spi_restrictions(user_id)

        # Returns success without implementing limitation
        return {"status": "success", "message": "Request received"}

    def process_health_data(self, user_id, health_data):
        # Processes health data without checking limitation preferences
        # Missing: Check if user has limited SPI use
        # if not user_prefs.is_spi_limited(user_id):

        # Uses health data for marketing despite limitation request
        self.marketing_engine.target_user(user_id, health_data)
```

### Missing Third-Party Propagation

```javascript
// SPI limitation not communicated to data processors
class DataSharingService {
  async limitSensitiveUse(userId) {
    // Updates internal preference
    await this.db.users.updateOne(
      { _id: userId },
      { $set: { spiLimited: true } }
    );

    // Missing: Notify third-party processors of limitation
    // await this.notifyServiceProviders(userId, 'limit_spi');
    // await this.notifyAdvertisingPartners(userId, 'limit_spi');
    // await this.notifyAnalyticsPlatforms(userId, 'limit_spi');

    // Data continues flowing to partners without restrictions
    this.thirdPartyAnalytics.sendHealthData(userId, userHealthData);
    this.advertisingNetwork.shareLocationData(userId, locationData);
  }
}
```

### No Technical Enforcement Controls

```java
// System lacks ability to enforce SPI use limitations
public class SensitiveDataProcessor {
    public void processUserData(String userId, SensitiveData data) {
        // Missing: Check limitation preferences before processing
        // UserPreferences prefs = prefsService.get(userId);
        // if (prefs.hasSpiLimitation()) {
        //     return; // Skip non-permitted uses
        // }

        // Processes SPI for secondary purposes without checking limitations
        if (data.hasHealthInfo()) {
            marketingService.targetHealthAds(userId, data.getHealthInfo());
        }

        if (data.hasGeolocation()) {
            behavioralAnalytics.profileLocation(userId, data.getGeolocation());
        }

        if (data.hasBiometrics()) {
            demographicInference.analyze(userId, data.getBiometrics());
        }

        // No mechanism exists to limit these uses based on consumer request
    }
}
```

## What This Signal Does NOT Assert

- Whether the "Limit the Use of My Sensitive Personal Information" link is present
- Whether the business collects or uses sensitive personal information
- Whether limitation requests are being received or logged
- The specific technical implementation approach for limitations
- Compliance or non-compliance with CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.121(a)**: A consumer shall have the right to direct a business that collects sensitive personal information to limit its use to permitted purposes
- **Section 1798.135(a)(5)**: A business shall provide mechanisms for submitting requests to limit use and disclosure of sensitive personal information
- **Section 1798.105(d)**: A business that receives a verifiable consumer request shall delete/limit use of the consumer's personal information and direct any service providers to take the same action
- **Permitted Purposes Only**: After limitation request, SPI may only be used for: providing requested services, security/fraud prevention, short-term transient use, service provider functions, quality verification, and legal compliance
- **Opt-Out Preference Signals**: Businesses must process automated signals like Global Privacy Control for SPI limitations
- **Added by**: CPRA (California Privacy Rights Act, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-SENSITIVE-NO-LIMITATION-001` — SPI use not limited to disclosed purposes
- `CSE-CCPA-SENSITIVE-SECONDARY-USE-004` — SPI used for unauthorized secondary purpose
- `CSE-CCPA-OPTOUT-NO-LIMIT-SPI-LINK-005` — Missing "Limit Use of My Sensitive PI" link
- `CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004` — Global Privacy Control not honored
- `CSE-CCPA-RIGHTS-NO-REQUEST-METHODS-005` — Consumer request methods inadequate

## Notes

Detection of this signal typically involves:

- Testing of SPI limitation request submission workflows
- Backend code analysis to verify enforcement implementation
- Database query monitoring to check limitation preference application
- Third-party data sharing analysis to verify restriction propagation
- API traffic inspection to confirm limited SPI usage after request
- Audit log review to verify limitation requests are being processed
- Service provider contract review for limitation forwarding requirements
- End-to-end testing of limitation request to verify actual restriction of SPI use

The presence of this signal indicates a condition that warrants review in the context of CPRA sensitive personal information limitation rights implementation.
