# CSE-CCPA-OPTOUT-SALE-AFTER-OPTOUT-007

**Personal Information Sold After Opt-Out**

## Signal Overview

| Field           | Value                                      |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-CCPA-OPTOUT-SALE-AFTER-OPTOUT-007`   |
| Domain          | CCPA                                      |
| Category        | OPTOUT                                    |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

A business continues to sell a consumer's personal information to third parties after the consumer has submitted a valid request to opt-out of the sale of their personal information.

This signal indicates that opt-out request processing is not functioning correctly, that opt-out preferences are not being honored in data sale operations, or that insufficient controls exist to prevent post-opt-out sales.

## Applicability

This signal applies to:

- Data brokers and aggregators with customer opt-out lists
- Marketing platforms with third-party data sharing
- E-commerce sites selling customer data to advertisers
- Mobile applications with data monetization programs
- Analytics platforms sharing PI with partners
- Advertising technology companies processing opt-outs
- Customer data platforms (CDPs) managing consent
- Any business that sells PI and receives opt-out requests

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Opt-Out Not Applied to Sale Operations

```python
# Backend continues selling data without checking opt-out status
def daily_data_export_to_partners():
    # Gets all users without checking opt-out preferences
    users = User.query.all()

    # Missing: Filter out users who opted out
    # opted_in_users = [u for u in users if not u.ccpa_opt_out_sale]

    for user in users:
        # Sends all user data including opted-out consumers
        third_party_api.send_customer_data(user.personal_info)
```

### Asynchronous Sale Pipeline Missing Opt-Out Check

```javascript
// Data sale job doesn't verify current opt-out status
async function processSaleQueue() {
  const batch = await salesQueue.getBatch(100);

  for (const saleRequest of batch) {
    // Missing: Check if user has opted out since request was queued
    // const user = await User.findById(saleRequest.userId);
    // if (user.ccpaOptOutSale) continue;

    // Proceeds with sale without checking current opt-out status
    await dataPartner.purchaseUserData(saleRequest);
  }
}
```

### Cookie Sync After GPC Signal

```javascript
// Third-party pixel fires even after GPC opt-out received
window.addEventListener('load', function() {
  // Checks GPC but still syncs cookies
  if (navigator.globalPrivacyControl) {
    console.log('GPC detected');
    // Missing: Actually prevent the sale/sync
  }

  // Cookie sync proceeds regardless of GPC
  loadThirdPartyPixels();
  syncCrossDeviceIdentifiers();
});
```

### Opt-Out Not Persisted Across Sessions

```java
// Opt-out stored in session but not persisted to database
public class OptOutController {
    @PostMapping("/opt-out-sale")
    public ResponseEntity<?> optOutOfSale(HttpSession session) {
        // Only sets session variable
        session.setAttribute("ccpa_opt_out_sale", true);

        // Missing: Persist to user record in database
        // userRepository.updateOptOutStatus(userId, true);

        // Subsequent data sales don't check session, only database
        return ResponseEntity.ok("Opt-out recorded");
    }
}
```

## What This Signal Does NOT Assert

- Whether the sale was intentional or due to technical error
- Whether the opt-out request was properly submitted
- The time period between opt-out and subsequent sale
- Whether compensating controls exist
- Compliance or non-compliance with CCPA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CCPA requirements:

- **Section 1798.120(d)**: A business that has received direction from a consumer not to sell the consumer's personal information shall be prohibited from selling the consumer's personal information unless the consumer subsequently provides explicit authorization
- **Section 1798.135(a)(4)**: A business shall not request that the consumer authorize the sale of the consumer's personal information for at least 12 months after the consumer opts out
- **Requirement**: Once a valid opt-out is received, all sales of that consumer's PI must cease immediately and cannot resume without explicit consumer authorization
- **Added by**: CCPA (original California Consumer Privacy Act of 2018)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004` — Global Privacy Control not honored
- `CSE-CCPA-OPTOUT-NO-THIRD-PARTY-NOTICE-008` — Third parties not notified of opt-out
- `CSE-CCPA-OPTOUT-NO-PREFERENCE-SIGNAL-006` — Opt-out preference signal not processed
- `CSE-CCPA-OPTOUT-NO-SALE-LINK-001` — Missing "Do Not Sell" link

## Notes

Detection of this signal typically involves:

- Monitoring of data export and sharing activities post-opt-out
- Analysis of third-party API calls and data transfers
- Review of opt-out preference storage and retrieval systems
- Testing of data sale pipelines with opted-out user records
- Inspection of cookie syncing and tracking pixel behavior
- Verification of database queries for sale operations
- Audit of third-party data sharing agreements and actual transfers

The presence of this signal indicates a condition that warrants review in the context of CCPA opt-out enforcement requirements.
