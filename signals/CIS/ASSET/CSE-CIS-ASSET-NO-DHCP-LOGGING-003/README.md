# CSE-CIS-ASSET-NO-DHCP-LOGGING-003

**DHCP Logging Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-ASSET-NO-DHCP-LOGGING-003` |
| Domain | CIS |
| Category | ASSET |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when DHCP server logging is not enabled or not being actively monitored to identify new or unauthorized assets connecting to the network. DHCP logs provide valuable information about devices requesting network access, including MAC addresses, hostnames, and IP assignments. Without DHCP logging, organizations lose a critical detection mechanism for unauthorized or unknown devices joining their network infrastructure.

## Implementation Group

- **IG Level**: IG2
- **Applicable To**: Organizations with moderate security maturity that operate DHCP infrastructure

## Applicability

- Enterprise IT environments
- Cloud infrastructure with managed DHCP services
- On-premises data centers
- Remote/hybrid work environments
- Branch office networks
- Wireless networks (corporate and guest)

## Examples (Non-Normative)

### DHCP Logging Disabled

```yaml
# DHCP server configuration - logging disabled:
dhcp_server: "10.1.1.1"
logging_enabled: false
log_retention_days: 0
syslog_forwarding: disabled
monitoring_alerts: disabled

# Expected configuration:
dhcp_server: "10.1.1.1"
logging_enabled: true
log_retention_days: 90
syslog_forwarding: "siem.company.local:514"
monitoring_alerts: enabled
alert_on_new_mac: true
```

### Missing DHCP Log Analysis

```yaml
# DHCP logs exist but not monitored:
dhcp_logging: true
log_location: "/var/log/dhcp/dhcpd.log"
log_size: "2.4 GB"
last_reviewed: null
automated_parsing: false
new_device_alerts: false

# Detection example - new unauthorized device (undetected):
timestamp: "2025-12-27T10:15:33Z"
event: "DHCPDISCOVER"
mac_address: "00:11:22:33:44:55"
hostname: "UNKNOWN-LAPTOP"
ip_assigned: "10.1.50.142"
known_asset: false
alert_generated: false
```

## CIS Controls Context (Informative)

- **Control**: 01 - Inventory and Control of Enterprise Assets
- **Safeguard**: 1.3
- **Safeguard Title**: Utilize an Active Discovery Tool
- **Asset Type**: Devices, Network
- **Security Function**: Detect

## Related Signals

- CSE-CIS-ASSET-NO-UNAUTHORIZED-DETECTION-002
- CSE-CIS-ASSET-NO-NETWORK-DISCOVERY-005
- CSE-CIS-ASSET-NO-ACCURATE-INVENTORY-004
- CSE-NISTCSF-DE-MONITORING-001
- CSE-SOC2-CC-LOG-MONITORING-001

## Notes

### Detection Guidance

This signal can be detected through:

1. **DHCP Server Configuration**: Logging disabled in DHCP server settings (dhcpd.conf, Windows DHCP, etc.)
2. **No Log Forwarding**: DHCP logs not sent to centralized logging or SIEM
3. **Insufficient Retention**: DHCP logs retained for inadequate periods or rotated too frequently
4. **Missing Alerting**: No automated alerts on new MAC addresses or unusual DHCP activity
5. **No Log Analysis**: DHCP logs exist but are never reviewed or parsed
6. **Cloud DHCP Visibility**: Cloud-managed DHCP services not configured to export logs

### Key DHCP Log Information

DHCP logs typically contain:
- **MAC Address**: Hardware identifier of the requesting device
- **Hostname**: Device name (if provided in DHCP request)
- **IP Address Assigned**: Network address allocated to the device
- **Timestamp**: When the request occurred
- **Lease Duration**: How long the IP assignment is valid
- **DHCP Message Type**: DISCOVER, OFFER, REQUEST, ACK, NAK, RELEASE

### Implementation Guidance

Organizations should:

1. **Enable Comprehensive Logging**: Configure all DHCP servers to log all DHCP transactions
2. **Centralize Logs**: Forward DHCP logs to SIEM or centralized log management
3. **Maintain Correlation**: Cross-reference DHCP logs with asset inventory to identify unknown devices
4. **Alert on Anomalies**: Configure alerts for new MAC addresses, unusual request patterns, or DHCP exhaustion
5. **Retain Logs**: Keep DHCP logs for minimum 90 days for forensic and compliance purposes
6. **Regular Review**: Periodically analyze DHCP logs for security and operational insights

### Platform-Specific Configuration

- **ISC DHCP (Linux)**: Enable logging in dhcpd.conf and configure syslog
- **Windows DHCP Server**: Enable audit logging in DHCP MMC console
- **Cisco IOS**: Configure DHCP snooping and logging
- **Cloud Providers**: Enable VPC flow logs, CloudWatch (AWS), or equivalent logging services

### Remediation Priority

As an IG2 control, this should be implemented after basic asset inventory processes (IG1) are established. DHCP logging provides automated detection capabilities that significantly enhance asset visibility.
