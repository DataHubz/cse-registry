# CSE-CIS-EMAIL-NO-URL-FILTERING-003

**URL Filtering Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-EMAIL-NO-URL-FILTERING-003` |
| Domain | CIS |
| Category | EMAIL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

URL filtering and categorization controls are not implemented to block access to malicious or inappropriate websites. Organizations must deploy web filtering solutions that inspect HTTP/HTTPS traffic and block access based on URL reputation, category, and threat intelligence to prevent users from accessing harmful content and enforce acceptable use policies.

## Applicability

- Web proxies and secure web gateways
- Firewall and network security devices
- Endpoint protection platforms
- Cloud access security brokers (CASB)
- Remote access and VPN connections
- Email security gateways

## Examples (Non-Normative)

### No URL Filtering Deployed

```yaml
web_security:
  url_filtering_solution: null               # Signal: No URL filtering
  web_proxy: null                            # Signal: No web proxy
  secure_web_gateway: null                   # Signal: No SWG

network_controls:
  firewall_url_filtering: false              # Signal: Firewall lacks URL filtering
  https_inspection: false                    # Signal: No SSL/TLS inspection

user_protection:
  malicious_url_blocking: false              # Signal: No URL blocking
  category_based_filtering: false            # Signal: No category filtering
  acceptable_use_enforcement: null           # Signal: No AUP enforcement
```

### Inadequate URL Filtering Configuration

```yaml
url_filtering:
  solution: "Palo Alto Networks"
  deployment_status: "active"

  categories_blocked:
    - "malware"
    - "phishing"

  categories_not_blocked:
    - "command-and-control"                  # Signal: C2 not blocked
    - "newly-registered-domains"             # Signal: New domains allowed
    - "parked-domains"                       # Signal: Parked domains allowed
    - "compromised-websites"                 # Signal: Compromised sites allowed

  configuration_gaps:
    ssl_inspection: false                    # Signal: Encrypted traffic not inspected
    url_reputation_checking: "disabled"      # Signal: No reputation checks
    threat_intelligence_integration: null    # Signal: No threat feeds

  coverage:
    office_network: true
    remote_users: false                      # Signal: Remote users unprotected
    mobile_devices: false                    # Signal: Mobile not covered

findings:
  - HTTPS traffic bypasses URL filtering
  - High-risk categories not blocked
  - No real-time threat intelligence updates
  - Inconsistent policy across user groups
```

## CIS Controls v8 Context (Informative)

- **CIS Control 9.3**: Maintain and Enforce Network-Based URL Filters
  - **Implementation Group**: IG2
  - **Asset Type**: Network
  - **Security Function**: Protect
  - **Control Description**: Enforce and update network-based URL filters to limit an enterprise asset from connecting to potentially malicious or unapproved websites. Example implementations include category-based filtering, reputation-based filtering, or through the use of block lists. Enforce filters for all enterprise assets.

## Related Signals

- `CSE-CIS-EMAIL-NO-DNS-FILTERING-002` (DNS filtering controls)
- `CSE-CIS-EMAIL-NO-SUPPORTED-BROWSERS-001` (Browser security)
- `CSE-CIS-EMAIL-NO-FILE-TYPE-BLOCKING-004` (Email file filtering)
