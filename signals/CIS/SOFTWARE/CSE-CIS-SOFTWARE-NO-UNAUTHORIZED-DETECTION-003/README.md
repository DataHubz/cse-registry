# CSE-CIS-SOFTWARE-NO-UNAUTHORIZED-DETECTION-003

**Unauthorized Software Detection Missing**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-CIS-SOFTWARE-NO-UNAUTHORIZED-DETECTION-003`  |
| Domain          | CIS                                               |
| Category        | SOFTWARE                                          |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

An organization does not have automated mechanisms to detect and alert on unauthorized software installations on enterprise assets.

This signal indicates that while a software inventory or authorized software list may exist, there are no active processes to continuously monitor for software that is not on the authorized list, allowing unauthorized applications to remain undetected.

## Applicability

This signal applies to:

- Enterprise workstations and laptops
- Servers (physical and virtual)
- Cloud instances and containers
- Mobile devices managed by the organization
- Network devices with installable software
- Development and testing environments
- Privileged access workstations

## Examples (Non-Normative)

### No Detection Alerts Configured

```yaml
# Security monitoring config without software detection rules
monitoring:
  enabled: true
  rules:
    - network_intrusion
    - file_integrity
    # Missing: unauthorized_software
```

### Manual Detection Only

```bash
# No automated scanning for unauthorized software
$ crontab -l
# No scheduled software compliance scans

# No SIEM rules for unauthorized software
$ grep -r "unauthorized.*software" /etc/splunk/
# No results
```

### Missing EDR Software Control

```json
{
  "edr_config": {
    "malware_detection": true,
    "behavioral_analysis": true,
    "application_control": false
  }
}
```

## What This Signal Does NOT Assert

- Whether unauthorized software is actually installed
- The detection method or frequency
- Compliance or non-compliance with any framework
- The response action when unauthorized software is detected
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 2 - Inventory and Control of Software Assets**
- **Safeguard 2.3**: Use automated software inventory tools, when possible, throughout the enterprise to continuously identify all instances of installed software.
- **Implementation Group**: IG1
- **Asset Type**: Applications
- **Security Function**: Identify

## Related Signals

- `CSE-CIS-SOFTWARE-NO-INVENTORY-001` — Software Inventory Missing
- `CSE-CIS-SOFTWARE-NO-AUTHORIZED-LIST-002` — Authorized Software List Missing
- `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-005` — Software Allowlisting Not Implemented
