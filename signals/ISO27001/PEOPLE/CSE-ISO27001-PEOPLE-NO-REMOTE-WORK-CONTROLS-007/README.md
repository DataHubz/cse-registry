# CSE-ISO27001-PEOPLE-NO-REMOTE-WORK-CONTROLS-007

**No Remote Working Security Controls**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PEOPLE-NO-REMOTE-WORK-CONTROLS-007` |
| Domain | ISO27001 |
| Category | PEOPLE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security measures for remote working are not implemented to protect information accessed or processed. As remote work becomes increasingly common, inadequate security controls for remote environments create significant vulnerabilities including data exposure, unauthorized access, and compromised endpoints.

## Applicability

- Remote and hybrid work policies
- Home office security requirements
- Mobile device management and BYOD policies
- VPN and secure remote access
- Video conferencing and collaboration tool security
- Remote worker training and awareness

## Examples (Non-Normative)

### Missing Remote Work Security Policy

```yaml
remote_work_policy:
  enabled: true
  eligibility: "all_employees"

  requirements:
    - stable_internet_connection
    - dedicated_workspace
    # No security requirements defined

  security_controls:
    vpn_required: false
    endpoint_protection: false
    encrypted_storage: false
    secure_wifi: false
    physical_security: false
```

### Inadequate Endpoint Protection

```yaml
remote_worker:
  employee: "Alice Cooper"
  work_location: "home"

  device_security:
    company_laptop: true
    antivirus: "outdated"
    firewall: "disabled"
    disk_encryption: false
    screen_lock: "not_configured"

  network_security:
    vpn_usage: "optional"
    home_wifi: "unsecured"
    public_wifi_policy: "none"

  data_handling:
    local_storage_allowed: true
    cloud_backup: "personal_account"
    printer_usage: "unrestricted"
```

### Uncontrolled BYOD Access

```yaml
byod_policy:
  allowed: true
  restrictions: null

  devices:
    - device_type: "personal_laptop"
      security_controls: []
      access_level: "full"
      mdm_enrolled: false

    - device_type: "personal_phone"
      security_controls: []
      corporate_email: true
      mdm_enrolled: false

  data_protection:
    containerization: false
    remote_wipe: false
    encryption_required: false
```

## ISO 27001:2022 Context (Informative)

- **A.6.7 Remote working**: Security measures should be implemented when personnel are working remotely to protect information accessed, processed or stored outside the organization's premises.

## Related Signals

- `CSE-ISO27001-PEOPLE-NO-SECURITY-TRAINING-003`
- `CSE-ISO27001-TECHNICAL-NO-ENCRYPTION`
- `CSE-ISO27001-TECHNICAL-NO-NETWORK-SECURITY`
- `CSE-ISO27001-TECHNICAL-NO-ENDPOINT-PROTECTION`
