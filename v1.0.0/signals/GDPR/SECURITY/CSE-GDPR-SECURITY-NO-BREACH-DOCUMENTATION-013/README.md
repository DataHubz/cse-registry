# CSE-GDPR-SECURITY-NO-BREACH-DOCUMENTATION-013

**Breach Documentation Not Maintained**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-BREACH-DOCUMENTATION-013` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization does not document all personal data breaches, including their facts, effects, and remedial actions.

Controllers must maintain comprehensive records of all breaches regardless of whether supervisory authority notification was required.

## Applicability

- All data controllers
- Data protection officers
- Security incident response teams
- Compliance and audit teams
- Organizations subject to supervisory authority inspections

## Examples (Non-Normative)

### Missing Breach Register

```
# Signal Present: No breach documentation system

compliance/
  ├── privacy-policy.md
  ├── data-processing-records.md
  └── consent-records.md
  # Missing: breach-register.md
  # Missing: incident-log/
```

### Incomplete Incident Records

```python
# Signal Present: Minimal incident logging
incident_log = {
    'incident_001': {
        'date': '2025-11-15',
        'type': 'security_breach'
        # Missing: facts, effects, remedial actions
        # Missing: affected data subjects
        # Missing: notification decision
    }
}
```

### No Documentation of Resolution

```
# Signal Present: No record of remedial actions

Incident #042:
  Detected: 2025-12-01
  Type: Unauthorized access
  Status: Closed
  # Missing: How was it resolved?
  # Missing: What measures were taken?
  # Missing: Were data subjects affected?
  # Missing: Was notification required?
```

### Remediation Example

```python
# Signal Resolved: Comprehensive breach documentation system
# breach_register.py

from dataclasses import dataclass, field
from datetime import datetime
from typing import List, Optional
from enum import Enum

class BreachType(Enum):
    CONFIDENTIALITY = "Confidentiality breach (unauthorized access/disclosure)"
    AVAILABILITY = "Availability breach (data loss/destruction)"
    INTEGRITY = "Integrity breach (unauthorized alteration)"

class NotificationStatus(Enum):
    NOT_REQUIRED = "Notification not required (no risk to data subjects)"
    REQUIRED_PENDING = "Notification required, pending submission"
    SUBMITTED_ON_TIME = "Notification submitted within 72 hours"
    SUBMITTED_LATE = "Notification submitted after 72 hours"
    DATA_SUBJECTS_NOTIFIED = "Data subjects notified (high risk)"

@dataclass
class AffectedDataSubjects:
    approximate_number: int
    categories: List[str]  # e.g., "customers", "employees", "children"
    geographical_scope: str  # e.g., "EU", "Ireland", "Global"

@dataclass
class AffectedPersonalData:
    categories: List[str]  # e.g., "names", "emails", "financial data"
    approximate_records: int
    sensitivity: str  # "standard", "special category", "criminal convictions"

@dataclass
class RemedialAction:
    action: str
    implemented_by: str
    implemented_at: datetime
    effectiveness: str  # "effective", "partially effective", "ineffective"

@dataclass
class BreachRecord:
    """Complete breach record per GDPR Art. 33.5"""

    # Identification
    breach_id: str
    detected_at: datetime
    reported_by: str

    # Facts of the breach (Art. 33.5(a))
    breach_type: BreachType
    description: str
    root_cause: str
    how_detected: str
    duration: Optional[str] = None  # How long breach existed before detection

    # Affected parties
    affected_data_subjects: AffectedDataSubjects = None
    affected_personal_data: AffectedPersonalData = None

    # Effects of the breach (Art. 33.5(b))
    immediate_effects: List[str] = field(default_factory=list)
    potential_consequences: List[str] = field(default_factory=list)
    risk_assessment: str = ""  # "no risk", "low risk", "medium risk", "high risk"

    # Remedial actions (Art. 33.5(c))
    containment_actions: List[RemedialAction] = field(default_factory=list)
    mitigation_actions: List[RemedialAction] = field(default_factory=list)
    preventive_actions: List[RemedialAction] = field(default_factory=list)

    # Notification decision
    notification_required: bool = False
    notification_status: Optional[NotificationStatus] = None
    notification_decision_rationale: str = ""
    notification_submitted_at: Optional[datetime] = None
    supervisory_authority_response: Optional[str] = None

    # Data subject notification (if high risk)
    data_subject_notification_required: bool = False
    data_subject_notification_sent_at: Optional[datetime] = None
    data_subjects_notified_count: Optional[int] = None

    # Accountability
    investigated_by: str = ""
    investigation_completed_at: Optional[datetime] = None
    documented_by: str = ""
    documented_at: datetime = field(default_factory=datetime.utcnow)
    reviewed_by_dpo: bool = False
    dpo_review_date: Optional[datetime] = None

    # Lessons learned
    lessons_learned: List[str] = field(default_factory=list)
    policy_changes: List[str] = field(default_factory=list)


class BreachRegister:
    """Maintain register of all personal data breaches"""

    def __init__(self):
        self.breaches: dict[str, BreachRecord] = {}
        self.register_file = '/var/lib/compliance/breach-register.json'

    def record_breach(self, breach: BreachRecord) -> str:
        """Record a new breach in the register"""
        self.breaches[breach.breach_id] = breach
        self.save_register()
        return breach.breach_id

    def update_breach(self, breach_id: str, updates: dict):
        """Update an existing breach record"""
        if breach_id not in self.breaches:
            raise ValueError(f"Breach {breach_id} not found")

        breach = self.breaches[breach_id]
        for key, value in updates.items():
            setattr(breach, key, value)

        self.save_register()

    def add_remedial_action(self, breach_id: str, action: RemedialAction, category: str):
        """Add a remedial action to a breach record"""
        breach = self.breaches[breach_id]

        if category == 'containment':
            breach.containment_actions.append(action)
        elif category == 'mitigation':
            breach.mitigation_actions.append(action)
        elif category == 'preventive':
            breach.preventive_actions.append(action)

        self.save_register()

    def get_breach(self, breach_id: str) -> BreachRecord:
        """Retrieve a breach record"""
        return self.breaches.get(breach_id)

    def get_all_breaches(self) -> List[BreachRecord]:
        """Retrieve all breach records"""
        return list(self.breaches.values())

    def get_breaches_by_period(self, start_date: datetime, end_date: datetime) -> List[BreachRecord]:
        """Get breaches within a time period"""
        return [
            breach for breach in self.breaches.values()
            if start_date <= breach.detected_at <= end_date
        ]

    def get_notifiable_breaches(self) -> List[BreachRecord]:
        """Get all breaches that required notification"""
        return [
            breach for breach in self.breaches.values()
            if breach.notification_required
        ]

    def generate_report(self, year: int) -> dict:
        """Generate annual breach report for supervisory authority"""
        start = datetime(year, 1, 1)
        end = datetime(year, 12, 31, 23, 59, 59)
        yearly_breaches = self.get_breaches_by_period(start, end)

        return {
            'reporting_period': f'{year}',
            'total_breaches': len(yearly_breaches),
            'notified_to_authority': len([b for b in yearly_breaches if b.notification_required]),
            'data_subjects_notified': len([b for b in yearly_breaches if b.data_subject_notification_required]),
            'breach_types': self._count_by_type(yearly_breaches),
            'risk_levels': self._count_by_risk(yearly_breaches),
            'average_detection_time': self._calculate_avg_detection_time(yearly_breaches),
            'breaches_by_month': self._count_by_month(yearly_breaches, year),
            'lessons_learned': self._aggregate_lessons_learned(yearly_breaches)
        }

    def save_register(self):
        """Persist breach register to secure storage"""
        import json
        # In production, encrypt this data
        with open(self.register_file, 'w') as f:
            json.dump(
                {k: self._serialize_breach(v) for k, v in self.breaches.items()},
                f,
                indent=2
            )

    def _serialize_breach(self, breach: BreachRecord) -> dict:
        """Serialize breach record for storage"""
        # Implementation details...
        pass

    def _count_by_type(self, breaches: List[BreachRecord]) -> dict:
        from collections import Counter
        return dict(Counter(b.breach_type.value for b in breaches))

    def _count_by_risk(self, breaches: List[BreachRecord]) -> dict:
        from collections import Counter
        return dict(Counter(b.risk_assessment for b in breaches))

    def _calculate_avg_detection_time(self, breaches: List[BreachRecord]) -> str:
        # Calculate average time from breach occurrence to detection
        return "Implementation details..."

    def _count_by_month(self, breaches: List[BreachRecord], year: int) -> dict:
        months = {i: 0 for i in range(1, 13)}
        for breach in breaches:
            if breach.detected_at.year == year:
                months[breach.detected_at.month] += 1
        return months

    def _aggregate_lessons_learned(self, breaches: List[BreachRecord]) -> List[str]:
        lessons = []
        for breach in breaches:
            lessons.extend(breach.lessons_learned)
        return list(set(lessons))


# Example usage
breach_register = BreachRegister()

# Document a breach
breach = BreachRecord(
    breach_id="BR-2025-001",
    detected_at=datetime(2025, 12, 1, 14, 30),
    reported_by="security_team@company.com",
    breach_type=BreachType.CONFIDENTIALITY,
    description="Unauthorized access to customer database via compromised API credentials",
    root_cause="API key leaked in public GitHub repository",
    how_detected="Anomaly detection system flagged unusual access pattern",
    duration="Approximately 48 hours from key exposure to detection",
    affected_data_subjects=AffectedDataSubjects(
        approximate_number=1250,
        categories=["customers"],
        geographical_scope="EU"
    ),
    affected_personal_data=AffectedPersonalData(
        categories=["names", "email addresses", "order history"],
        approximate_records=1250,
        sensitivity="standard"
    ),
    immediate_effects=[
        "Unauthorized access to customer contact information",
        "Potential exposure of purchase history"
    ],
    potential_consequences=[
        "Targeted phishing attacks",
        "Privacy concerns for affected customers"
    ],
    risk_assessment="medium risk",
    notification_required=True,
    notification_status=NotificationStatus.SUBMITTED_ON_TIME,
    notification_decision_rationale="Medium risk to customer privacy requires notification",
    notification_submitted_at=datetime(2025, 12, 2, 16, 45),
    investigated_by="security_lead@company.com",
    documented_by="dpo@company.com",
    reviewed_by_dpo=True,
    dpo_review_date=datetime(2025, 12, 2, 10, 0)
)

# Add remedial actions
breach.containment_actions = [
    RemedialAction(
        action="Revoked compromised API credentials",
        implemented_by="security_team@company.com",
        implemented_at=datetime(2025, 12, 1, 15, 0),
        effectiveness="effective"
    ),
    RemedialAction(
        action="Blocked unauthorized access IP addresses",
        implemented_by="security_team@company.com",
        implemented_at=datetime(2025, 12, 1, 15, 15),
        effectiveness="effective"
    )
]

breach.mitigation_actions = [
    RemedialAction(
        action="Implemented additional API authentication (MFA)",
        implemented_by="engineering_team@company.com",
        implemented_at=datetime(2025, 12, 3, 9, 0),
        effectiveness="effective"
    )
]

breach.preventive_actions = [
    RemedialAction(
        action="Implemented automated secret scanning in CI/CD",
        implemented_by="devops_team@company.com",
        implemented_at=datetime(2025, 12, 5, 14, 0),
        effectiveness="effective"
    ),
    RemedialAction(
        action="Conducted security awareness training on credential management",
        implemented_by="hr@company.com",
        implemented_at=datetime(2025, 12, 10, 10, 0),
        effectiveness="partially effective"
    )
]

breach.lessons_learned = [
    "API credentials must not be committed to version control",
    "Automated secret scanning is essential in development pipeline",
    "Regular security training reduces human error"
]

breach.policy_changes = [
    "Updated secure coding guidelines to mandate secret scanning",
    "Implemented quarterly security training for all developers"
]

# Record in breach register
breach_register.record_breach(breach)
```

```markdown
# Data Breach Register

This register documents all personal data breaches in compliance with GDPR Article 33.5.

## Purpose
To maintain a comprehensive record of all data breaches for:
- Supervisory authority verification
- Internal analysis and improvement
- Accountability demonstration
- Compliance audit support

## Scope
All personal data breaches, including:
- Breaches requiring supervisory authority notification
- Breaches not requiring notification
- Near-miss incidents with potential for breach

## Breach Records

### BR-2025-001: Unauthorized Database Access

**Detection:**
- Date/Time: 2025-12-01 14:30 UTC
- Detected By: Anomaly detection system
- Reported By: security_team@company.com

**Facts of the Breach:**
- Type: Confidentiality breach (unauthorized access)
- Description: Unauthorized access to customer database via compromised API credentials
- Root Cause: API key accidentally committed to public GitHub repository
- Duration: Approximately 48 hours from exposure to detection

**Affected Data Subjects:**
- Approximate Number: 1,250 customers
- Categories: EU-based customers
- Geographical Scope: European Union

**Affected Personal Data:**
- Categories: Names, email addresses, order history
- Records: ~1,250 records
- Sensitivity: Standard personal data (not special category)

**Effects:**
- Immediate: Unauthorized access to customer contact info and purchase history
- Potential: Targeted phishing attacks, privacy concerns
- Risk Level: Medium risk to customer rights and freedoms

**Remedial Actions Taken:**

*Containment:*
- [2025-12-01 15:00] Revoked compromised API credentials - EFFECTIVE
- [2025-12-01 15:15] Blocked unauthorized IP addresses - EFFECTIVE

*Mitigation:*
- [2025-12-03 09:00] Implemented MFA for API authentication - EFFECTIVE

*Prevention:*
- [2025-12-05 14:00] Deployed automated secret scanning in CI/CD - EFFECTIVE
- [2025-12-10 10:00] Conducted security training on credential management - PARTIALLY EFFECTIVE

**Notification:**
- Supervisory Authority: REQUIRED
- Status: Submitted within 72 hours
- Submitted: 2025-12-02 16:45 UTC
- Rationale: Medium risk to customer privacy requires notification
- Data Subjects: Not required (medium risk, effective mitigation)

**Investigation:**
- Investigated By: security_lead@company.com
- Completed: 2025-12-05
- Reviewed by DPO: Yes (2025-12-02)

**Lessons Learned:**
- API credentials must not be committed to version control
- Automated secret scanning is essential in development pipeline
- Regular security training reduces human error

**Policy Changes:**
- Updated secure coding guidelines to mandate secret scanning
- Implemented quarterly security training for all developers

---

## Annual Summary (2025)

**Total Breaches:** 1
**Notified to Supervisory Authority:** 1
**Data Subjects Notified:** 0
**Average Detection Time:** 48 hours

**Breach Types:**
- Confidentiality: 1
- Integrity: 0
- Availability: 0

**Risk Levels:**
- High Risk: 0
- Medium Risk: 1
- Low Risk: 0

**Key Improvements:**
- Implemented automated secret scanning
- Enhanced security training program
- Improved API authentication requirements
```

## GDPR Context (Informative)

- **Art. 33.5**: Controllers must document all personal data breaches, including facts, effects, and remedial action
- **Art. 5.2**: Documentation demonstrates accountability
- **Recital 87**: Documentation enables supervisory authority to verify compliance
- **Art. 24.1**: Controllers must implement appropriate measures and be able to demonstrate compliance

## Related Signals

- `CSE-GDPR-SECURITY-NO-BREACH-NOTIFICATION-PROCESS-012`
- `CSE-GDPR-SECURITY-NO-BREACH-DETECTION-011`
- `CSE-GDPR-PRINCIPLES-NO-ACCOUNTABILITY-009`
