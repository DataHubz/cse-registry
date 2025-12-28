# CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004

**Global Privacy Control Not Honored**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004`    |
| Domain          | CCPA                                    |
| Category        | OPTOUT                                  |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

A business does not recognize, process, or honor the Global Privacy Control (GPC) signal sent by a consumer's browser or device as a valid opt-out request for the sale or sharing of personal information.

This signal indicates that the technical infrastructure does not detect or respect GPC signals as required by CPRA, preventing consumers from exercising automated opt-out rights through browser settings.

## Applicability

This signal applies to:

- Web servers and application backends processing HTTP requests
- Content management systems with user tracking
- E-commerce platforms with third-party integrations
- Marketing automation systems with behavioral tracking
- Advertising technology platforms and exchanges
- Customer data platforms (CDPs) processing GPC signals
- API gateways handling consumer data requests
- Any business website or app subject to CPRA opt-out requirements

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Server Not Checking GPC Header

```javascript
// Express.js middleware missing GPC signal detection
app.use((req, res, next) => {
  // Check for DNT but not GPC
  const doNotTrack = req.headers['dnt'];

  // Missing: Check for Sec-GPC header
  // const gpc = req.headers['sec-gpc'];

  next();
});
```

### GPC Signal Ignored in Analytics

```javascript
// Analytics script doesn't respect GPC
(function() {
  // Missing: GPC signal check before initializing tracking
  // if (navigator.globalPrivacyControl) {
  //   console.log('GPC enabled, skipping analytics');
  //   return;
  // }

  // Loads analytics regardless of GPC setting
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-XXXXX');
})();
```

### Third-Party Pixels Not Disabled

```html
<!-- Marketing pixels load even when GPC is enabled -->
<script>
  // Missing GPC detection before loading pixels
  !function(f,b,e,v,n,t,s) {
    // Facebook Pixel loads unconditionally
    // Should check: if (!navigator.globalPrivacyControl)
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
</script>
```

### Backend Sale Processing Without GPC Check

```python
# Python backend doesn't check GPC before data sale
def process_data_sale(request, user_data):
    # Missing GPC signal check
    # gpc_header = request.headers.get('Sec-GPC')
    # if gpc_header == '1':
    #     return None  # Don't sell if GPC enabled

    # Proceeds with sale without checking GPC
    third_party_api.send_user_data(user_data)
```

## What This Signal Does NOT Assert

- Whether GPC is technically implemented but misconfigured
- Whether the business honors other opt-out mechanisms
- Whether the lack of GPC support is intentional
- The business's knowledge of GPC requirements
- Compliance or non-compliance with CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.135(b)(1)**: A business shall treat user-enabled global privacy controls, such as a browser plugin or privacy setting, device setting, or other mechanism, that communicate or signal the consumer's choice to opt-out of the sale or sharing of their personal information as a valid request
- **Requirement**: Businesses must recognize and process GPC signals (typically sent via the "Sec-GPC: 1" HTTP header) as legally binding opt-out requests
- **Added by**: CPRA (California Privacy Rights Act, effective January 1, 2023)
- **Effective Date**: July 1, 2023 for GPC compliance requirement

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-OPTOUT-NO-PREFERENCE-SIGNAL-006` — Other opt-out preference signals not processed
- `CSE-CCPA-OPTOUT-NO-SALE-LINK-001` — Missing "Do Not Sell" link
- `CSE-CCPA-OPTOUT-NO-SHARE-LINK-002` — Missing "Do Not Share" link
- `CSE-CCPA-OPTOUT-SALE-AFTER-OPTOUT-007` — PI sold after opt-out

## Notes

Detection of this signal typically involves:

- Testing website responses to GPC-enabled browsers
- Analysis of server-side request handling code
- Review of HTTP header processing logic
- Inspection of analytics and tracking initialization code
- Verification of third-party script conditional loading
- Assessment of data processing and sale workflows
- Monitoring of actual data sharing behavior with GPC enabled

The presence of this signal indicates a condition that warrants review in the context of CPRA automated opt-out requirements.
