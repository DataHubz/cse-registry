# CSE-GDPR-SECURITY-NO-BREACH-NOTIFICATION-PROCESS-012

**Breach Notification Process Not Established**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-BREACH-NOTIFICATION-PROCESS-012` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization lacks a documented process for notifying supervisory authorities of personal data breaches within 72 hours.

A breach notification process must include incident assessment, notification procedures, contact information, and decision workflows.

## Applicability

- All data controllers
- All data processors
- Incident response teams
- Security operations
- Legal and compliance teams
- Data Protection Officers

## Examples (Non-Normative)

### Missing Breach Response Plan

```
# Signal Present: No breach notification procedures

documentation/
  ├── privacy-policy.md
  ├── terms-of-service.md
  └── security-policy.md
  # Missing: breach-response-plan.md
  # Missing: notification-procedures.md
  # Missing: supervisory-authority-contacts.md
```

### No Assessment Criteria

```python
# Signal Present: No process to assess if breach requires notification
def handle_security_incident(incident):
    # No criteria to determine if this is a "breach"
    # No assessment of risk to data subjects
    # No decision tree for notification requirement
    # No tracking of 72-hour deadline
    log_incident(incident)
```

### Undefined Responsibilities

```
# Signal Present: Roles and responsibilities not documented

Incident Response Team:
  - Security Engineer: ?
  - DPO: ?
  - Legal: ?
  - Communications: ?
  # No clear ownership of breach notification
  # No escalation procedures
```

### Remediation Example

```python
# Signal Resolved: Comprehensive breach notification process
# breach_notification_process.py

from dataclasses import dataclass
from datetime import datetime, timedelta
from enum import Enum
from typing import List, Optional

class BreachCategory(Enum):
    CONFIDENTIALITY_BREACH = "Unauthorized access or disclosure"
    AVAILABILITY_BREACH = "Loss of access or destruction"
    INTEGRITY_BREACH = "Unauthorized alteration"

class RiskLevel(Enum):
    NO_RISK = "Unlikely to result in risk to rights and freedoms"
    LOW_RISK = "Limited impact on data subjects"
    MEDIUM_RISK = "Significant impact on data subjects"
    HIGH_RISK = "Severe impact on data subjects"

@dataclass
class BreachIncident:
    incident_id: str
    detected_at: datetime
    category: BreachCategory
    description: str
    affected_data_types: List[str]
    affected_data_subjects_count: int
    geographical_scope: str
    estimated_risk_level: Optional[RiskLevel] = None
    notification_required: Optional[bool] = None
    notification_sent_at: Optional[datetime] = None

class BreachNotificationProcess:
    """GDPR Art. 33 breach notification process"""

    def __init__(self):
        self.supervisory_authority = {
            'name': 'Data Protection Commission (Ireland)',
            'email': 'info@dataprotection.ie',
            'phone': '+353 (0)761 104 800',
            'portal': 'https://forms.dataprotection.ie/breach-notification'
        }

        self.incident_response_team = {
            'dpo': 'dpo@company.com',
            'security_lead': 'security@company.com',
            'legal': 'legal@company.com',
            'communications': 'comms@company.com'
        }

    def assess_breach(self, incident: BreachIncident) -> RiskLevel:
        """
        Assess risk level to determine notification requirement
        per GDPR Art. 33.1
        """
        risk_factors = []

        # Nature of personal data
        sensitive_data_types = ['health', 'financial', 'biometric', 'children', 'criminal']
        if any(dt in incident.affected_data_types for dt in sensitive_data_types):
            risk_factors.append('sensitive_data')

        # Volume of affected data subjects
        if incident.affected_data_subjects_count > 1000:
            risk_factors.append('large_scale')

        # Severity of consequences
        if incident.category == BreachCategory.CONFIDENTIALITY_BREACH:
            risk_factors.append('identity_theft_risk')

        # Determine risk level
        if len(risk_factors) >= 2 or 'sensitive_data' in risk_factors:
            return RiskLevel.HIGH_RISK
        elif len(risk_factors) == 1:
            return RiskLevel.MEDIUM_RISK
        else:
            return RiskLevel.LOW_RISK

    def requires_notification(self, incident: BreachIncident) -> bool:
        """
        Determine if breach requires supervisory authority notification
        per GDPR Art. 33.1
        """
        risk = self.assess_breach(incident)
        incident.estimated_risk_level = risk

        # No notification required only if unlikely to result in risk
        if risk == RiskLevel.NO_RISK:
            return False

        # All other cases require notification
        return True

    def calculate_deadline(self, detected_at: datetime) -> datetime:
        """Calculate 72-hour notification deadline"""
        return detected_at + timedelta(hours=72)

    def initiate_notification(self, incident: BreachIncident):
        """Initiate breach notification process"""

        # Step 1: Immediate alerts
        self.alert_incident_response_team(incident)

        # Step 2: Assess notification requirement
        incident.notification_required = self.requires_notification(incident)

        if not incident.notification_required:
            # Document decision not to notify
            self.document_no_notification_decision(incident)
            return

        # Step 3: Calculate deadline
        deadline = self.calculate_deadline(incident.detected_at)
        hours_remaining = (deadline - datetime.utcnow()).total_seconds() / 3600

        # Step 4: Prepare notification
        notification_content = self.prepare_notification(incident)

        # Step 5: Alert team of deadline
        self.alert_deadline({
            'incident_id': incident.incident_id,
            'deadline': deadline,
            'hours_remaining': hours_remaining,
            'content': notification_content
        })

        # Step 6: Track notification
        self.track_notification(incident, deadline)

    def prepare_notification(self, incident: BreachIncident) -> dict:
        """
        Prepare breach notification content per GDPR Art. 33.3
        """
        return {
            # Art. 33.3(a) - Nature of breach
            'nature_of_breach': {
                'category': incident.category.value,
                'description': incident.description,
                'detected_at': incident.detected_at.isoformat()
            },

            # Art. 33.3(b) - DPO contact
            'dpo_contact': {
                'name': 'Data Protection Officer',
                'email': self.incident_response_team['dpo'],
                'phone': '+1-555-0100'
            },

            # Art. 33.3(c) - Likely consequences
            'likely_consequences': self.assess_consequences(incident),

            # Art. 33.3(d) - Measures taken
            'measures_taken': {
                'containment': [],  # To be filled during response
                'mitigation': [],   # To be filled during response
                'remediation': []   # To be filled during response
            },

            # Additional information
            'affected_data_subjects': {
                'approximate_number': incident.affected_data_subjects_count,
                'categories': self.categorize_affected_subjects(incident)
            },

            'affected_data': {
                'categories': incident.affected_data_types,
                'approximate_number_of_records': incident.affected_data_subjects_count
            }
        }

    def assess_consequences(self, incident: BreachIncident) -> List[str]:
        """Assess likely consequences for data subjects"""
        consequences = []

        if 'financial' in incident.affected_data_types:
            consequences.append('Potential financial fraud')

        if 'health' in incident.affected_data_types:
            consequences.append('Potential discrimination or stigmatization')

        if incident.category == BreachCategory.CONFIDENTIALITY_BREACH:
            consequences.append('Identity theft risk')
            consequences.append('Loss of privacy')

        if incident.category == BreachCategory.AVAILABILITY_BREACH:
            consequences.append('Inability to access services')

        return consequences

    def categorize_affected_subjects(self, incident: BreachIncident) -> List[str]:
        """Categorize affected data subjects"""
        categories = []

        if 'children' in incident.affected_data_types:
            categories.append('Children under 16')

        if 'employee' in incident.affected_data_types:
            categories.append('Employees')

        if 'customer' in incident.affected_data_types:
            categories.append('Customers')

        return categories or ['Data subjects']

    def send_notification(self, incident: BreachIncident, content: dict):
        """Send notification to supervisory authority"""

        # Submit via official channel
        response = submit_to_supervisory_authority(
            authority=self.supervisory_authority,
            incident_id=incident.incident_id,
            content=content
        )

        # Record notification
        incident.notification_sent_at = datetime.utcnow()

        # Document notification
        breach_documentation.record({
            'incident_id': incident.incident_id,
            'notification_sent_at': incident.notification_sent_at,
            'supervisory_authority': self.supervisory_authority['name'],
            'response': response,
            'hours_after_detection': (
                incident.notification_sent_at - incident.detected_at
            ).total_seconds() / 3600
        })

    def alert_incident_response_team(self, incident: BreachIncident):
        """Alert incident response team"""
        for role, contact in self.incident_response_team.items():
            send_alert({
                'to': contact,
                'subject': f'URGENT: Data Breach Detected - {incident.incident_id}',
                'body': f"""
                A potential personal data breach has been detected.

                Incident ID: {incident.incident_id}
                Detected: {incident.detected_at}
                Category: {incident.category.value}
                Affected Subjects: ~{incident.affected_data_subjects_count}

                Immediate action required for breach assessment and notification.
                72-hour deadline: {self.calculate_deadline(incident.detected_at)}
                """
            })

    def alert_deadline(self, info: dict):
        """Alert team of approaching deadline"""
        send_alert({
            'to': self.incident_response_team['dpo'],
            'priority': 'HIGH',
            'subject': f"Breach Notification Deadline: {info['hours_remaining']:.1f} hours remaining",
            'body': f"""
            Supervisory authority notification required within 72 hours.

            Incident: {info['incident_id']}
            Deadline: {info['deadline']}
            Hours Remaining: {info['hours_remaining']:.1f}

            Notification content prepared and ready for review.
            """
        })

    def track_notification(self, incident: BreachIncident, deadline: datetime):
        """Track notification status and deadline"""
        tracking.create_task({
            'task': 'Breach notification to supervisory authority',
            'incident_id': incident.incident_id,
            'deadline': deadline,
            'status': 'pending',
            'assigned_to': self.incident_response_team['dpo']
        })

    def document_no_notification_decision(self, incident: BreachIncident):
        """Document decision not to notify (must still be recorded)"""
        breach_documentation.record({
            'incident_id': incident.incident_id,
            'notification_required': False,
            'reason': f"Risk level assessed as {incident.estimated_risk_level.value}",
            'assessment_date': datetime.utcnow(),
            'assessed_by': 'DPO'
        })


# Example usage
def handle_detected_breach(incident_details):
    """Handle newly detected breach"""

    # Create incident record
    incident = BreachIncident(
        incident_id=generate_incident_id(),
        detected_at=datetime.utcnow(),
        category=BreachCategory.CONFIDENTIALITY_BREACH,
        description=incident_details['description'],
        affected_data_types=incident_details['data_types'],
        affected_data_subjects_count=incident_details['subject_count'],
        geographical_scope='EU'
    )

    # Initiate notification process
    process = BreachNotificationProcess()
    process.initiate_notification(incident)
```

```markdown
# Data Breach Notification Procedures

## Purpose
This document defines procedures for notifying supervisory authorities of personal data breaches in compliance with GDPR Article 33.

## Scope
Applies to all personal data breaches that are likely to result in a risk to the rights and freedoms of data subjects.

## Timeline
- **Detection to Assessment**: Immediate (within 1 hour)
- **Assessment to Decision**: Within 24 hours
- **Notification to Supervisory Authority**: Within 72 hours of detection

## Roles and Responsibilities

### Data Protection Officer (DPO)
- Assess whether notification is required
- Prepare notification content
- Submit notification to supervisory authority
- Maintain breach documentation

### Security Team
- Detect and contain breach
- Investigate scope and impact
- Implement remediation measures

### Legal Team
- Review notification content
- Assess legal consequences
- Coordinate with external counsel if needed

### Communications Team
- Prepare data subject communications (if required under Art. 34)
- Manage external communications
- Coordinate with PR if needed

## Notification Decision Tree

1. **Is this a personal data breach?**
   - Yes → Continue
   - No → Document and close

2. **Is the breach likely to result in risk to data subjects?**
   - Yes → Notification required
   - No → Document decision not to notify

3. **Is the breach likely to result in HIGH risk?**
   - Yes → Also notify data subjects (Art. 34)
   - No → Supervisory authority notification only

## Notification Content (Art. 33.3)

All notifications must include:
- [ ] Nature of the breach
- [ ] DPO contact information
- [ ] Likely consequences for data subjects
- [ ] Measures taken to address the breach
- [ ] Number of affected data subjects (approximate)
- [ ] Categories of data affected
- [ ] Number of affected personal data records (approximate)

## Supervisory Authority Contact

**Data Protection Commission (Ireland)**
- Email: info@dataprotection.ie
- Phone: +353 (0)761 104 800
- Portal: https://forms.dataprotection.ie/breach-notification

## Escalation

If notification cannot be made within 72 hours:
1. Document reasons for delay
2. Include reasons in notification when submitted
3. Notify supervisory authority of delay as soon as possible

## Documentation

All breaches must be documented, including:
- Facts of the breach
- Effects of the breach
- Remedial action taken
- Whether notification was required
- If notified, when notification was sent
- If not notified, justification for decision
```

## GDPR Context (Informative)

- **Art. 33.1**: Notification to supervisory authority within 72 hours unless unlikely to result in risk
- **Art. 33.2**: Processor must notify controller without undue delay
- **Art. 33.3**: Notification must include specific information
- **Art. 33.4**: Delayed information may be provided in phases if not all available within 72 hours
- **Recital 85**: Notification should be made without undue delay, no later than 72 hours

## Related Signals

- `CSE-GDPR-SECURITY-NO-BREACH-DETECTION-011`
- `CSE-GDPR-SECURITY-NO-BREACH-DOCUMENTATION-013`
- `CSE-GDPR-SECURITY-NO-SUBJECT-BREACH-NOTIFICATION-014`
