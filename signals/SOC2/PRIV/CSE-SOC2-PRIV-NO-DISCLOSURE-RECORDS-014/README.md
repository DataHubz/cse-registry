# CSE-SOC2-PRIV-NO-DISCLOSURE-RECORDS-014

**No Disclosure Records**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-SOC2-PRIV-NO-DISCLOSURE-RECORDS-014`    |
| Domain          | SOC2                                         |
| Category        | PRIV                                         |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

The entity does not create and retain a complete, accurate, and timely record of detected or reported unauthorized disclosures of personal information.

This signal indicates that privacy incidents involving data disclosure are not properly documented, hindering incident response and accountability.

## Applicability

This signal applies to:

- Privacy incident management systems
- Data breach response procedures
- Security incident tracking
- Unauthorized disclosure monitoring
- Privacy violation reporting
- Compliance incident logs
- Breach notification workflows
- Audit and investigation processes

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Incident Management Without Privacy Tracking

```yaml
# Incident management configuration
incident_management:
  security_incidents: tracked
  availability_incidents: tracked
  privacy_incidents: not_tracked  # No privacy disclosure tracking
  unauthorized_disclosure_logging: false
```

### Missing Disclosure Detection

```javascript
// Security monitoring without privacy disclosure tracking
class SecurityMonitor {
  logUnauthorizedAccess(event) {
    this.securityLog.write(event);
  }

  logDataExfiltration(event) {
    this.securityLog.write(event);
  }

  // Missing: logUnauthorizedDisclosure
  // Missing: Privacy-specific incident tracking
}
```

### Incomplete Breach Records

```json
{
  "incident_tracking": {
    "incident_id": "INC-2024-001",
    "type": "data_exposure",
    "date_detected": "2024-01-15",
    "affected_systems": ["database-prod"],
    "unauthorized_disclosure_details": null,
    "personal_info_affected": "unknown",
    "data_subjects_impacted": "not_tracked"
  }
}
```

### Privacy Incident Without Documentation

```text
Incident Response Procedure:
1. Detect security incident
2. Contain threat
3. Remediate vulnerability
4. Document in ticketing system
5. Missing: Track unauthorized disclosures
6. Missing: Record privacy impact
7. Missing: Document data subjects affected
```

## What This Signal Does NOT Assert

- Whether unauthorized disclosures have occurred
- The specific record-keeping format required
- The retention period for disclosure records
- Compliance or non-compliance with SOC 2 or any framework
- Required incident tracking technology

## SOC 2 Context (Informative)

This signal is relevant to SOC 2 Privacy criteria:

- **P6.3**: The entity creates and retains a complete, accurate, and timely record of detected or reported unauthorized disclosures of personal information, including data elements disclosed, date of disclosure, date of detection, parties involved, and nature of unauthorized disclosure.
- **GAPP Principle**: Disclosure to third parties

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-SOC2-PRIV-NO-BREACH-NOTIFICATION-015` — Missing breach notification
- `CSE-SOC2-PRIV-NO-INCIDENT-REPORTING-021` — Missing privacy incident reporting
- `CSE-SOC2-PRIV-NO-THIRD-PARTY-AUTH-013` — Missing authorized disclosure records
- `CSE-CMMC-INCIDENT-NO-DETECTION-002` — General incident detection deficiency (if defined)

## Notes

Detection of this signal typically involves:

- Review of incident management systems
- Examination of privacy breach logs
- Analysis of security monitoring coverage
- Assessment of incident response procedures
- Inspection of breach documentation practices
- Review of regulatory reporting compliance

Information that should be recorded for unauthorized disclosures:
- Date of unauthorized disclosure
- Date disclosure was detected
- Categories of personal information disclosed
- Number and identity of data subjects affected
- Parties involved in the disclosure
- Nature and circumstances of disclosure
- Root cause analysis
- Remediation actions taken
- Notification actions performed

The presence of this signal indicates a condition that warrants review in the context of privacy incident management and breach accountability requirements.
