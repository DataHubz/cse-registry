# CSE-CCPA-OPTOUT-NO-THIRD-PARTY-NOTICE-008

**Third Parties Not Notified of Opt-Out**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-OPTOUT-NO-THIRD-PARTY-NOTICE-008`   |
| Domain          | CCPA                                          |
| Category        | OPTOUT                                        |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business that has sold a consumer's personal information to third parties does not notify those third parties that the consumer has opted out of the sale of their personal information.

This signal indicates that while the business may have stopped selling the consumer's data, it has not fulfilled its obligation to inform downstream recipients of the opt-out, potentially allowing continued unauthorized use or resale of the consumer's information.

## Applicability

This signal applies to:

- Data brokers with networks of third-party buyers
- Marketing platforms with advertising partnerships
- E-commerce sites sharing customer data with affiliates
- Mobile app developers with SDK and analytics partners
- Customer data platforms (CDPs) with data syndication
- Advertising technology companies with data exchanges
- SaaS platforms with third-party integrations
- Any business that has sold PI and receives opt-out requests

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Opt-Out Handler Without Third-Party Notification

```python
# Opt-out processed but third parties not notified
def process_opt_out_request(user_id):
    # Updates internal database
    user = User.query.get(user_id)
    user.ccpa_opt_out_sale = True
    user.opt_out_date = datetime.now()
    db.session.commit()

    # Missing: Notify third parties who received this user's data
    # third_party_recipients = DataSale.query.filter_by(user_id=user_id).all()
    # for recipient in third_party_recipients:
    #     notify_third_party_opt_out(recipient.partner_id, user_id)

    return {"status": "success"}
```

### No Tracking of Third-Party Recipients

```javascript
// System doesn't track who received data
class DataSaleService {
  async sellUserData(userId, personalInfo) {
    // Sends data to partners
    await Promise.all([
      partnerA.sendData(personalInfo),
      partnerB.sendData(personalInfo),
      partnerC.sendData(personalInfo)
    ]);

    // Missing: Record which partners received this user's data
    // await DataSaleLog.create({
    //   userId,
    //   recipients: ['partnerA', 'partnerB', 'partnerC'],
    //   timestamp: new Date()
    // });
  }

  // No way to notify partners of opt-out without recipient records
}
```

### Missing Suppression List Distribution

```java
// Opt-out suppression list not shared with third parties
public class ThirdPartyNotificationService {
    private List<String> optedOutUsers = new ArrayList<>();

    public void addOptOut(String userId) {
        optedOutUsers.add(userId);
        // Missing: Send updated suppression list to third parties
        // distributeSuppressionList();
    }

    // Method exists but never called
    private void distributeSuppressionList() {
        for (ThirdPartyPartner partner : partners) {
            partner.updateSuppressionList(optedOutUsers);
        }
    }
}
```

### Third-Party API Without Opt-Out Endpoint

```typescript
// Third-party integration lacks opt-out notification capability
class DataPartnerAPI {
  async sendCustomerData(customerId: string, data: PersonalInfo) {
    // Can send data to partner
    await this.client.post('/customers', data);
  }

  // Missing: Method to notify partner of opt-out
  // async notifyOptOut(customerId: string) {
  //   await this.client.post('/opt-outs', { customerId });
  // }
}
```

## What This Signal Does NOT Assert

- Whether third parties actually honor the opt-out notice
- The method or mechanism used to notify third parties
- Whether third parties have contractual obligations to honor opt-outs
- The timeliness of third-party notification
- Compliance or non-compliance with CCPA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CCPA requirements:

- **Section 1798.115(d)**: A business that sells consumers' personal information to third parties shall notify the third parties that the consumer has exercised the right to opt-out
- **Requirement**: The business must have mechanisms to identify which third parties received a consumer's PI and communicate opt-out requests to those parties
- **Purpose**: Prevents third parties from continuing to use, sell, or process data after consumer has opted out, even though they received it before the opt-out
- **Added by**: CCPA (original California Consumer Privacy Act of 2018)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-OPTOUT-SALE-AFTER-OPTOUT-007` — PI sold after opt-out
- `CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004` — Global Privacy Control not honored
- `CSE-CCPA-OPTOUT-NO-SALE-LINK-001` — Missing "Do Not Sell" link
- `CSE-CCPA-DISCLOSURE-NO-THIRD-PARTY-LIST-XXX` — Third party recipients not disclosed (if defined)

## Notes

Detection of this signal typically involves:

- Review of opt-out request processing workflows
- Analysis of data sale logging and recipient tracking systems
- Inspection of third-party notification mechanisms (APIs, batch files, etc.)
- Verification of suppression list distribution processes
- Assessment of third-party integration capabilities
- Audit of contractual provisions for opt-out notification
- Testing of notification delivery and confirmation systems
- Review of data processing agreements with third parties

The presence of this signal indicates a condition that warrants review in the context of CCPA third-party notification requirements.
