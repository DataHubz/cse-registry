# CSE-CIS-ASSET-NO-UNAUTHORIZED-DETECTION-002

**Unauthorized Asset Detection Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-ASSET-NO-UNAUTHORIZED-DETECTION-002` |
| Domain | CIS |
| Category | ASSET |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when an organization has no established process or automated capability to identify and address unauthorized assets on their network. Unauthorized assets represent significant security risks as they may be compromised devices, shadow IT, or malicious systems introduced by threat actors. Organizations must have mechanisms to detect these assets and documented procedures to remove them or bring them into compliance.

## Implementation Group

- **IG Level**: IG1
- **Applicable To**: All organizations that manage network-connected assets

## Applicability

- Enterprise IT environments
- Cloud infrastructure
- On-premises data centers
- Remote/hybrid work environments
- Guest and visitor networks
- BYOD (Bring Your Own Device) environments

## Examples (Non-Normative)

### No Unauthorized Asset Detection Process

```yaml
# Detection indicators:
unauthorized_asset_detection: false
network_access_control_enabled: false
automated_alerting: false
remediation_process_documented: false

# Expected state:
unauthorized_asset_detection: true
network_access_control_enabled: true
automated_alerting: true
remediation_process_documented: true
alert_response_time_sla: "24 hours"
```

### Missing NAC Implementation

```yaml
# Current state - no controls:
network_segmentation: "flat network"
mac_filtering: disabled
802.1x_authentication: not_implemented
dhcp_snooping: disabled

# Unauthorized device connected without detection:
device_mac: "AA:BB:CC:DD:EE:FF"
device_ip: "10.1.50.247"
device_type: "unknown"
authorized: false
detected: false
action_taken: null
```

## CIS Controls Context (Informative)

- **Control**: 01 - Inventory and Control of Enterprise Assets
- **Safeguard**: 1.2
- **Safeguard Title**: Address Unauthorized Assets
- **Asset Type**: Devices
- **Security Function**: Respond

## Related Signals

- CSE-CIS-ASSET-NO-INVENTORY-001
- CSE-CIS-ASSET-NO-DHCP-LOGGING-003
- CSE-CIS-ASSET-NO-NETWORK-DISCOVERY-005
- CSE-NISTCSF-DE-ANOMALY-001
- CSE-ISO27001-ORG-ACCESS-CONTROL-001

## Notes

### Detection Guidance

This signal can be detected through:

1. **No Network Access Control (NAC)**: Absence of NAC solution or 802.1X authentication
2. **Missing Detection Tools**: No passive network monitoring or asset discovery tools deployed
3. **Lack of Alerting**: No automated alerts when unknown devices connect to the network
4. **Undocumented Process**: No written procedure for handling unauthorized assets
5. **No Remediation Tracking**: Unauthorized assets identified but not tracked to resolution
6. **Delayed Response**: Unauthorized assets remain connected for extended periods without action

### Implementation Approaches

Organizations can address unauthorized assets through:

- **Network Access Control (NAC)**: Automated quarantine or restricted access for unauthorized devices
- **DHCP Monitoring**: Alerts on new MAC addresses requesting IP assignments
- **Network Scanning**: Regular active and passive network discovery
- **Port Security**: Switch-level MAC address limiting and security
- **VLAN Segmentation**: Isolation of unauthorized devices to restricted network segments
- **Documented Response Procedures**: Clear workflows for investigation, approval, or removal

### Remediation Priority

As an IG1 control, this is fundamental to network security. Organizations should implement at minimum a documented process for handling unauthorized assets, even if full NAC automation is not immediately feasible.
