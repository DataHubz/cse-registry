# CSE-SOC2-PRIV-NO-BREACH-NOTIFICATION-015

**No Data Breach Notification**

## Signal Overview

| Field           | Value                                          |
|-----------------|------------------------------------------------|
| Identifier      | `CSE-SOC2-PRIV-NO-BREACH-NOTIFICATION-015`     |
| Domain          | SOC2                                           |
| Category        | PRIV                                           |
| Status          | Active                                         |
| Introduced In   | 1.0.0                                          |

## Description

The entity does not notify affected data subjects, regulators, and others when a data breach has occurred in accordance with applicable laws and regulations.

This signal indicates that critical breach notification obligations may not be met, potentially violating legal requirements and undermining trust.

## Applicability

This signal applies to:

- Data breach response procedures
- Breach notification workflows
- Regulatory compliance processes
- Incident communication plans
- Data subject notification systems
- Regulatory reporting mechanisms
- Legal and compliance review processes
- Third-party notification obligations

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Incident Response Without Notification Plan

```yaml
# Breach response procedure
breach_response:
  detection: enabled
  containment: enabled
  investigation: enabled
  remediation: enabled
  notification:
    data_subjects: false  # No data subject notification
    regulators: false     # No regulatory notification
    third_parties: false  # No business partner notification
```

### Missing Breach Notification Procedures

```javascript
// Incident handler without notification workflow
class BreachResponseHandler {
  async handleBreach(incident) {
    await this.containThreat(incident);
    await this.investigateRootCause(incident);
    await this.remediateVulnerability(incident);
    await this.documentIncident(incident);

    // Missing: Assess notification requirements
    // Missing: Notify affected data subjects
    // Missing: Report to regulators
    // Missing: Inform business partners
  }
}
```

### Compliance Documentation Without Notification Requirements

```text
Incident Response Plan:
1. Incident Detection
2. Initial Assessment
3. Containment
4. Eradication
5. Recovery
6. Post-Incident Review

Missing: Breach Notification Section
Missing: Data Subject Communication
Missing: Regulatory Reporting
Missing: Notification Timelines
```

### Privacy Policy Without Breach Notification Commitment

```json
{
  "privacy_policy": {
    "data_collection": "documented",
    "data_usage": "documented",
    "data_retention": "documented",
    "data_security": "documented",
    "breach_notification": null,
    "data_subject_notification": "not_mentioned"
  }
}
```

## What This Signal Does NOT Assert

- Whether a breach has occurred
- The specific notification requirements that apply
- The timeline for breach notification
- Compliance or non-compliance with SOC 2 or any framework
- Required notification methods or content

## SOC 2 Context (Informative)

This signal is relevant to SOC 2 Privacy criteria:

- **P6.4**: The entity notifies affected data subjects, regulators, and others about breaches and incidents as required by applicable laws and regulations.
- **GAPP Principle**: Disclosure to third parties

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-SOC2-PRIV-NO-DISCLOSURE-RECORDS-014` — Missing disclosure records
- `CSE-SOC2-PRIV-NO-INCIDENT-REPORTING-021` — Missing privacy incident reporting
- `CSE-CMMC-INCIDENT-NO-REPORTING-003` — General incident reporting deficiency (if defined)

## Notes

Detection of this signal typically involves:

- Review of breach notification procedures
- Examination of incident response plans
- Analysis of regulatory compliance documentation
- Assessment of notification workflow automation
- Inspection of communication templates
- Review of legal and compliance processes

Common breach notification requirements:
- **Data Subjects**: Individual notification when personal data is compromised
- **Regulators**: Notification to data protection authorities (e.g., within 72 hours under GDPR)
- **Business Partners**: Notification to affected vendors, customers, or partners
- **Public Disclosure**: Media or website notification for large-scale breaches
- **Credit Bureaus**: Notification for breaches involving financial data

Key elements of breach notifications:
- Nature of the breach
- Categories and volume of data affected
- Number of individuals impacted
- Likely consequences
- Measures taken to address the breach
- Recommended actions for data subjects
- Contact information for inquiries

The presence of this signal indicates a condition that warrants review in the context of breach notification and regulatory compliance requirements.
