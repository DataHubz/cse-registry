# CSE-CIS-ASSET-NO-NETWORK-DISCOVERY-005

**Network-Based Asset Discovery Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-ASSET-NO-NETWORK-DISCOVERY-005` |
| Domain | CIS |
| Category | ASSET |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when an organization lacks an active network-based discovery tool to identify all assets connected to the enterprise's network infrastructure. CIS Control 1.5 requires organizations to use active discovery tools that can identify and enumerate devices, including passive devices that may not be easily detected by other means. Without network-based discovery, organizations have incomplete visibility into their attack surface and cannot effectively manage or secure unknown or unauthorized assets.

## Implementation Group

- **IG Level**: IG3
- **Applicable To**: Organizations with high security maturity, complex environments, or stringent security requirements

## Applicability

- Enterprise IT environments
- Cloud infrastructure
- On-premises data centers
- Remote/hybrid work environments
- Industrial control systems (ICS/SCADA)
- Healthcare environments with medical devices
- Multi-site or distributed networks

## Examples (Non-Normative)

### No Active Discovery Tool Deployed

```yaml
# Current state - no active discovery:
active_discovery_tool: null
network_scanning_enabled: false
asset_discovery_frequency: null
discovery_coverage: 0%
passive_only_detection: true

# Expected state:
active_discovery_tool: "Qualys VMDR"
network_scanning_enabled: true
asset_discovery_frequency: "daily"
discovery_coverage: 98%
passive_detection: true
active_detection: true
```

### Insufficient Discovery Capabilities

```yaml
# Limited discovery capabilities:
discovery_methods:
  passive_monitoring: true  # Only DHCP/DNS logs
  active_scanning: false    # No active probing
  agent_based: true         # Only managed endpoints
  agentless: false          # Cannot detect unmanaged devices

# Assets not detected:
undetected_assets:
  - type: "IoT devices"
    count: 47
    reason: "No active scanning for non-agent capable devices"
  - type: "Network printers"
    count: 23
    reason: "Passive detection only, many use static IPs"
  - type: "Rogue access points"
    count: 5
    reason: "No wireless discovery capability"
  - type: "Legacy systems"
    count: 12
    reason: "Cannot install agents, no active scanning"
```

### Discovery Tool Not Comprehensive

```yaml
# Partial deployment - gaps exist:
discovery_tool: "Nmap Scripts"
deployment_scope: "partial"
coverage:
  corporate_network: true
  dmz: true
  guest_network: false
  iot_vlan: false
  remote_sites: false
  cloud_environments: false

scan_frequency:
  production: "weekly"
  development: "monthly"
  iot_networks: null  # Not scanned

# Expected comprehensive coverage
```

## CIS Controls Context (Informative)

- **Control**: 01 - Inventory and Control of Enterprise Assets
- **Safeguard**: 1.5
- **Safeguard Title**: Use a Passive Asset Discovery Tool
- **Asset Type**: Devices, Network
- **Security Function**: Detect

## Related Signals

- CSE-CIS-ASSET-NO-INVENTORY-001
- CSE-CIS-ASSET-NO-UNAUTHORIZED-DETECTION-002
- CSE-CIS-ASSET-NO-DHCP-LOGGING-003
- CSE-CIS-ASSET-NO-ACCURATE-INVENTORY-004
- CSE-NISTCSF-DE-DISCOVERY-001
- CSE-ISO27001-ORG-NETWORK-MONITORING-001

## Notes

### Detection Guidance

This signal can be detected through:

1. **No Discovery Tool License**: Absence of commercial or open-source network discovery solution
2. **Inactive Scanning**: Discovery tools exist but scanning is not enabled or scheduled
3. **Insufficient Coverage**: Discovery tools deployed but do not cover all network segments
4. **Passive-Only Detection**: Reliance solely on passive methods (DHCP, DNS, NetFlow) without active probing
5. **Agent-Only Strategy**: Only endpoint agents deployed, missing agentless/unmanaged devices
6. **Manual Discovery**: Network asset identification performed manually or ad-hoc
7. **No Cloud Discovery**: Cloud-based assets not included in discovery processes

### Active vs. Passive Discovery

**Passive Discovery** (IG2):
- Monitors network traffic without sending probes
- Sources: DHCP logs, DNS queries, NetFlow/IPFIX, packet capture
- Advantages: Non-intrusive, continuous monitoring
- Limitations: Only detects communicating devices, limited asset details

**Active Discovery** (IG3):
- Sends network probes to identify devices
- Methods: ICMP ping sweeps, port scanning, service enumeration, SNMP queries
- Advantages: Discovers silent devices, detailed OS/service fingerprinting
- Considerations: May trigger IDS/IPS, requires careful scheduling

### Discovery Tool Categories

1. **Network Scanners**: Nmap, Qualys, Tenable.io, Rapid7 InsightVM
2. **Passive Network Monitoring**: NetFlow analyzers, packet capture tools
3. **Agent-Based Discovery**: Endpoint agents reporting to CMDB
4. **Cloud Asset Discovery**: AWS Config, Azure Resource Graph, GCP Asset Inventory
5. **Specialized Discovery**: Wireless (Ekahau, AirMagnet), IoT-specific tools
6. **Integrated Platforms**: ServiceNow Discovery, BMC Discovery, Device42

### Implementation Guidance

Organizations should:

1. **Select Appropriate Tools**: Choose discovery tools that match environment complexity and asset types
2. **Comprehensive Coverage**: Ensure all network segments, VLANs, cloud environments are scanned
3. **Multi-Method Approach**: Combine active scanning, passive monitoring, and agent-based reporting
4. **Regular Scanning Schedule**: Daily or continuous discovery for IG3 environments
5. **Integration with CMDB**: Automated feed of discovered assets into asset inventory
6. **Change Detection**: Alert on new, changed, or disappeared assets
7. **Credentialed Scanning**: Use credentials for deeper inspection where possible
8. **Minimize Impact**: Schedule intensive scans during maintenance windows

### Discovery Best Practices

- **Network Segmentation Awareness**: Ensure discovery can access all network segments
- **Firewall Rules**: Configure firewall exceptions for discovery traffic where needed
- **Authenticated Scans**: Use read-only credentials for enhanced discovery accuracy
- **Regular Validation**: Periodically validate discovery accuracy against known assets
- **Exception Handling**: Document any network segments exempt from discovery with justification
- **Privacy Considerations**: Ensure discovery complies with privacy requirements

### Common Discovery Challenges

- **Encrypted Traffic**: Limits passive discovery effectiveness
- **Ephemeral Assets**: Cloud instances and containers with short lifespans
- **Legacy Systems**: Old devices that may crash or malfunction when scanned
- **Air-Gapped Networks**: Isolated networks requiring separate discovery infrastructure
- **Remote Workers**: Devices outside traditional network perimeter
- **Third-Party Networks**: Managed services or partner networks with limited visibility

### Remediation Priority

As an IG3 control, this represents advanced asset management capability. Organizations should implement this after establishing basic inventory (IG1) and automated update processes (IG2). Network-based discovery provides comprehensive visibility essential for mature security programs and complex environments.
