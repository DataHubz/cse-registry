# CSE-CIS-EMAIL-NO-SUPPORTED-BROWSERS-001

**Unsupported Browsers in Use**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-EMAIL-NO-SUPPORTED-BROWSERS-001` |
| Domain | CIS |
| Category | EMAIL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Unsupported or outdated web browsers are in use within the organization. Enterprises must maintain supported and up-to-date web browsers to ensure security patches are available and actively maintained by vendors. Using unsupported browsers exposes systems to known vulnerabilities that will never be patched.

## Applicability

- All enterprise workstations and endpoints
- Web application access points
- Remote access and VPN systems
- Public-facing kiosks or terminals
- Mobile device management platforms
- Environments with browser-based applications

## Examples (Non-Normative)

### Unsupported Browser Versions Detected

```yaml
endpoint_inventory:
  workstations:
    - hostname: "ws-finance-01"
      browsers:
        - name: "Internet Explorer 11"
          version: "11.0.9600"
          support_status: "end-of-life"      # Signal: Unsupported browser
          vendor_support_ended: "2022-06-15"

    - hostname: "ws-marketing-05"
      browsers:
        - name: "Chrome"
          version: "95.0.4638"
          support_status: "outdated"         # Signal: Outdated version
          latest_version: "120.0.6099"
          security_updates_available: true

browser_policy:
  approved_browsers:
    - "Chrome (latest stable)"
    - "Firefox (latest stable)"
    - "Edge (latest stable)"
  enforcement: false                         # Signal: No enforcement mechanism
```

### Missing Browser Management

```yaml
browser_management:
  inventory_tracking: false                  # Signal: No browser inventory
  auto_update_policy: null                   # Signal: No auto-update policy
  version_compliance_monitoring: false       # Signal: No compliance checks

findings:
  - Legacy applications requiring IE11
  - No documented browser support policy
  - Mixed browser versions across organization
  - No process to remove unsupported browsers
```

## CIS Controls v8 Context (Informative)

- **CIS Control 9.1**: Ensure Only Approved and Up-to-Date Browsers are Used
  - **Implementation Group**: IG1
  - **Asset Type**: Applications
  - **Security Function**: Protect
  - **Control Description**: Ensure only fully supported and up-to-date web browsers are allowed to execute in the organization, removing all unsupported browsers. The organization should use application allowlisting to ensure that only approved browsers are used.

## Related Signals

- `CSE-CIS-EMAIL-NO-DNS-FILTERING-002` (DNS filtering for malicious sites)
- `CSE-CIS-EMAIL-NO-URL-FILTERING-003` (URL filtering controls)
- `CSE-CIS-ASSET-NO-SOFTWARE-INVENTORY` (If applicable for software inventory)
