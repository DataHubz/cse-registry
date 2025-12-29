# CSE-CIS-EMAIL-NO-DNS-FILTERING-002

**DNS Filtering Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-EMAIL-NO-DNS-FILTERING-002` |
| Domain | CIS |
| Category | EMAIL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

DNS filtering is not configured to block access to known malicious domains. Organizations must implement DNS-layer security to prevent users from accessing malicious or unwanted websites by blocking DNS resolution requests for known bad domains, including those used for malware, phishing, and command-and-control communications.

## Applicability

- All enterprise DNS infrastructure
- Network security controls and firewalls
- Remote access and VPN connections
- Public Wi-Fi and guest networks
- Cloud and hybrid environments
- Endpoints and mobile devices

## Examples (Non-Normative)

### No DNS Filtering Implementation

```yaml
dns_infrastructure:
  primary_dns_servers:
    - ip: "8.8.8.8"
      provider: "Google Public DNS"
      filtering_enabled: false               # Signal: No DNS filtering

    - ip: "192.168.1.1"
      provider: "Internal DNS"
      filtering_enabled: false               # Signal: No DNS filtering
      threat_intelligence: null              # Signal: No threat feeds

network_security:
  dns_security_solution: null                # Signal: No DNS security product
  malicious_domain_blocking: false           # Signal: No domain blocking
  dns_query_logging: false                   # Signal: No DNS logging
```

### Incomplete DNS Filtering Coverage

```yaml
dns_filtering:
  solution_deployed: "Cisco Umbrella"
  deployment_status: "partial"

  coverage:
    corporate_network: true
    vpn_connections: false                   # Signal: VPN traffic not filtered
    mobile_devices: false                    # Signal: Mobile not protected
    remote_workers: false                    # Signal: Remote users unprotected

  configuration:
    malware_blocking: true
    phishing_blocking: false                 # Signal: Phishing not blocked
    threat_intelligence_feeds: "limited"     # Signal: Limited threat feeds
    custom_block_lists: null                 # Signal: No custom lists

findings:
  - DNS filtering only covers on-premises network
  - Remote workers bypass DNS controls
  - No monitoring of DNS filter effectiveness
```

## CIS Controls v8 Context (Informative)

- **CIS Control 9.2**: Use DNS Filtering Services
  - **Implementation Group**: IG1
  - **Asset Type**: Network
  - **Security Function**: Protect
  - **Control Description**: Use DNS filtering services on all enterprise assets to block access to known malicious domains and to prevent communication with malicious Internet resources. DNS filtering services should be configured to block malicious domains and enforce acceptable use policies.

## Related Signals

- `CSE-CIS-EMAIL-NO-SUPPORTED-BROWSERS-001` (Browser security controls)
- `CSE-CIS-EMAIL-NO-URL-FILTERING-003` (URL filtering controls)
- `CSE-CIS-NETWORK-NO-FIREWALL` (If applicable for network security)
