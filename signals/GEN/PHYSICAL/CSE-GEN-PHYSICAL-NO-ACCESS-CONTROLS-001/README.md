# CSE-GEN-PHYSICAL-NO-ACCESS-CONTROLS-001

**Physical Access Controls Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-PHYSICAL-NO-ACCESS-CONTROLS-001` |
| Domain          | GEN (General)                            |
| Category        | PHYSICAL                                 |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No controls restricting physical access to facilities, server rooms, data centers, or areas containing sensitive systems and information assets.

This signal indicates the absence of physical access control mechanisms such as badge readers, biometric systems, security personnel, visitor management, access logs, or other controls that prevent unauthorized individuals from entering restricted physical locations where critical IT infrastructure or sensitive data is housed.

## Applicability

This signal applies to:

- Data centers and server rooms
- Network operations centers (NOCs)
- Telecommunications facilities
- Office buildings containing sensitive systems
- Storage areas for physical media
- Backup and disaster recovery sites
- Facilities processing sensitive or regulated data
- Co-location and shared hosting environments

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Physical Access Control System

```text
Indicators of missing physical access controls:
- No badge or key card access system
- No biometric authentication devices
- No security personnel or guards
- Unrestricted entry to server rooms
- No visitor sign-in procedures
- No access control policies
- No physical access audit logs
```

### Missing Access Control Infrastructure

```yaml
# Absent physical access controls
physical_security:
  access_control:
    badge_system: false
    biometric_readers: false
    keypad_entry: false
    security_guards: false
    mantrap_doors: false

  server_room_access:
    restricted_entry: false
    access_logs: null
    authorization_required: false
    escort_policy: null

  visitor_management:
    sign_in_process: false
    visitor_badges: false
    escort_requirements: false
    access_approval: null
```

### No Access Authorization Process

```python
# Missing physical access authorization
def physical_access_program():
    gaps = []

    # No access request process
    if not has_access_request_process():
        gaps.append("No physical access request procedure")

    # No authorization workflow
    if not requires_access_approval():
        gaps.append("No access approval requirements")

    # No access provisioning
    if not provisions_access_credentials():
        gaps.append("No badge or credential provisioning")

    # No access review
    if not reviews_access_rights():
        gaps.append("No periodic access review process")

    # No access revocation
    if not revokes_terminated_access():
        gaps.append("No access revocation for terminated employees")

    # No access monitoring
    if not monitors_physical_access():
        gaps.append("No physical access monitoring or logging")

    return gaps
```

### Lack of Entry Point Security

```json
{
  "facility_access_controls": {
    "main_entrance": {
      "access_control_type": "unlocked door",
      "authentication_required": false,
      "security_personnel": false,
      "access_logging": false
    },
    "server_room": {
      "access_control_type": "standard lock",
      "authentication_required": false,
      "access_logging": false,
      "restricted_access_list": null
    },
    "data_center": {
      "access_control_type": "none",
      "authentication_required": false,
      "biometric_controls": false,
      "mantrap": false,
      "access_logging": false
    }
  }
}
```

### No Access Logging or Monitoring

```text
Missing physical access logging:
- No entry/exit logs for secure areas
- No badge swipe or access event records
- No surveillance camera systems
- No alarm systems for unauthorized entry
- No real-time access monitoring
- No alerts for after-hours access
- No access attempt tracking
- No correlation with employee records
```

### Missing Visitor Controls

```bash
#!/bin/bash
# Physical access control gaps

# No visitor management
echo "Visitor sign-in system: Not implemented"

# No visitor badges
echo "Temporary visitor badges: Not issued"

# No escort requirements
echo "Visitor escort policy: Not enforced"

# No visitor access logs
echo "Visitor access logging: Not maintained"

# No pre-authorization
echo "Visitor pre-authorization: Not required"

# No visitor restrictions
echo "Restricted area access for visitors: Not controlled"
```

### No Multi-Factor Physical Authentication

```yaml
# Advanced physical access controls missing
advanced_controls:
  multi_factor_authentication:
    badge_plus_pin: false
    badge_plus_biometric: false
    dual_factor_required: false

  high_security_areas:
    two_person_rule: false
    security_clearance_required: false
    background_check_required: false

  access_zones:
    security_zones_defined: false
    zone_based_access: false
    progressive_access_levels: false

  monitoring:
    real_time_alerts: false
    access_anomaly_detection: false
    tailgating_prevention: false
```

### No Access Control Documentation

```sql
-- Missing physical access control tracking
-- No database of authorized personnel
-- No access level assignments
-- No access grant/revoke history
-- No compliance audit trail

-- Expected schema not implemented:
-- CREATE TABLE physical_access_authorizations (
--   authorization_id UUID PRIMARY KEY,
--   employee_id VARCHAR(50),
--   facility_id VARCHAR(50),
--   area_id VARCHAR(50),
--   access_level VARCHAR(50),
--   granted_date DATE,
--   granted_by VARCHAR(50),
--   expiration_date DATE,
--   revoked_date DATE,
--   badge_number VARCHAR(50),
--   biometric_enrolled BOOLEAN
-- );
```

## What This Signal Does NOT Assert

- Whether logical access controls are in place
- The specific type of physical access control required
- Whether physical security incidents have occurred
- The adequacy of surveillance or monitoring systems
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Signals

- `CSE-GEN-PHYSICAL-NO-PERIMETER-002` — Physical perimeter security missing
- `CSE-GEN-PHYSICAL-NO-EQUIPMENT-PROTECTION-004` — Equipment protection missing
- `CSE-GEN-AUDIT-NO-ACCESS-REVIEW` — Access review process missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 45 CFR 164.310(a)(1) (Facility access controls)
- **HIPAA**: 45 CFR 164.310(a)(2)(i) (Contingency operations)
- **HIPAA**: 45 CFR 164.310(a)(2)(ii) (Facility security plan)
- **HIPAA**: 45 CFR 164.310(a)(2)(iii) (Access control and validation)
- **ISO 27001**: A.7.2 (Physical entry controls)
- **ISO 27001**: A.7.3 (Securing offices, rooms and facilities)
- **PCI DSS**: Requirement 9.1.1 (Video cameras or access control mechanisms)
- **PCI DSS**: Requirement 9.1.2 (Physical and/or logical access controls)
- **PCI DSS**: Requirement 9.1.3 (Restrict physical access to wireless access points)
- **HITRUST**: 01.k (Physical Entry Controls)
- **NIST CSF**: PR.AC-2 (Physical access is managed)
- **SOC 2**: CC6.4 (Restricts physical access)
- **CIS Controls**: Safeguard 12.1 (Ensure network infrastructure is up-to-date)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Physical inspection of facilities and secure areas
- Review of access control policies and procedures
- Assessment of badge or credential systems
- Examination of access authorization workflows
- Analysis of physical access logs and records
- Review of visitor management processes
- Evaluation of security personnel and monitoring
- Assessment of entry point security mechanisms

Effective physical access control programs typically include:
- **Authentication**: Badge readers, biometrics, PINs, or multi-factor authentication
- **Authorization**: Documented access levels and approval processes
- **Logging**: Comprehensive records of all access events
- **Monitoring**: Real-time surveillance and anomaly detection
- **Visitor Management**: Sign-in, badging, escort, and tracking procedures
- **Access Reviews**: Periodic validation of access rights
- **Revocation**: Timely removal of access for terminated or transferred employees
- **Layered Security**: Multiple access control zones based on sensitivity

The presence of this signal indicates a fundamental gap in protecting physical access to critical infrastructure and sensitive areas, which could enable unauthorized individuals to access, damage, or steal systems and data.
