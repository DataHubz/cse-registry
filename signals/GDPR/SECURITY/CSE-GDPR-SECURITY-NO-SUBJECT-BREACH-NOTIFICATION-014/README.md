# CSE-GDPR-SECURITY-NO-SUBJECT-BREACH-NOTIFICATION-014

**Data Subject Breach Notification Process Not Established**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-SUBJECT-BREACH-NOTIFICATION-014` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization lacks a process for notifying data subjects of personal data breaches when the breach is likely to result in a high risk to their rights and freedoms.

Data subject notification must be clear, direct, and timely when high risk is identified.

## Applicability

- All data controllers
- Breach response teams
- Communications teams
- Data Protection Officers
- Customer service teams
- Email and notification systems

## Examples (Non-Normative)

### Missing Notification Process

```
# Signal Present: No data subject notification procedures

incident-response/
  ├── breach-detection.md
  ├── supervisory-authority-notification.md
  └── breach-documentation.md
  # Missing: data-subject-notification.md
  # Missing: notification-templates/
  # Missing: high-risk-assessment-criteria.md
```

### No High-Risk Assessment

```python
# Signal Present: No criteria for determining high risk to data subjects
def handle_breach(breach):
    # Notify supervisory authority
    notify_supervisory_authority(breach)

    # Missing: Assessment of high risk to data subjects
    # Missing: Data subject notification decision
    # Missing: Notification process
```

### No Communication Templates

```
# Signal Present: No prepared notification messages

templates/
  ├── privacy-notice.html
  ├── marketing-email.html
  └── password-reset.html
  # Missing: breach-notification-email.html
  # Missing: breach-notification-sms.txt
  # Missing: breach-notification-letter.pdf
```

### Remediation Example

```python
# Signal Resolved: Comprehensive data subject notification process
# data_subject_notification.py

from dataclasses import dataclass
from datetime import datetime
from typing import List, Optional
from enum import Enum

class HighRiskFactor(Enum):
    IDENTITY_THEFT = "Significant risk of identity theft or fraud"
    FINANCIAL_LOSS = "Risk of financial loss"
    DISCRIMINATION = "Risk of discrimination or stigmatization"
    SPECIAL_CATEGORY = "Special category data exposed"
    CHILDREN_DATA = "Children's data affected"
    LARGE_SCALE = "Large scale breach affecting many individuals"
    VULNERABILITY = "Data subjects in vulnerable position"
    SOPHISTICATED_ATTACK = "Sophisticated attack indicating serious risk"

class NotificationMethod(Enum):
    EMAIL = "email"
    SMS = "sms"
    POSTAL_MAIL = "postal_mail"
    IN_APP = "in_app_notification"
    PUBLIC_COMMUNICATION = "public_communication"

class NotificationException(Enum):
    ENCRYPTION = "Art. 34.3(a): Effective encryption or pseudonymization"
    SUBSEQUENT_MEASURES = "Art. 34.3(b): Subsequent measures eliminate high risk"
    DISPROPORTIONATE_EFFORT = "Art. 34.3(c): Disproportionate effort, public communication instead"

@dataclass
class DataSubjectNotificationProcess:
    """GDPR Art. 34 data subject notification process"""

    def assess_high_risk(self, breach) -> tuple[bool, List[HighRiskFactor]]:
        """
        Assess if breach is likely to result in high risk to data subjects
        per GDPR Art. 34.1
        """
        high_risk_factors = []

        # Special category data (Art. 9)
        special_categories = ['health', 'biometric', 'genetic', 'racial', 'religious',
                            'political', 'sexual_orientation', 'trade_union']
        if any(cat in breach.affected_data_types for cat in special_categories):
            high_risk_factors.append(HighRiskFactor.SPECIAL_CATEGORY)

        # Financial data
        if 'financial' in breach.affected_data_types or 'payment' in breach.affected_data_types:
            high_risk_factors.append(HighRiskFactor.FINANCIAL_LOSS)
            high_risk_factors.append(HighRiskFactor.IDENTITY_THEFT)

        # Children's data
        if 'children' in breach.affected_data_types:
            high_risk_factors.append(HighRiskFactor.CHILDREN_DATA)

        # Large scale
        if breach.affected_data_subjects_count > 10000:
            high_risk_factors.append(HighRiskFactor.LARGE_SCALE)

        # Confidentiality breach with credentials
        if breach.category == 'CONFIDENTIALITY' and 'credentials' in breach.affected_data_types:
            high_risk_factors.append(HighRiskFactor.IDENTITY_THEFT)

        # Sophisticated attack
        if 'targeted_attack' in breach.indicators or 'advanced_persistent_threat' in breach.indicators:
            high_risk_factors.append(HighRiskFactor.SOPHISTICATED_ATTACK)

        # High risk if 2+ factors or certain critical factors
        critical_factors = {
            HighRiskFactor.SPECIAL_CATEGORY,
            HighRiskFactor.CHILDREN_DATA,
            HighRiskFactor.FINANCIAL_LOSS
        }

        is_high_risk = (
            len(high_risk_factors) >= 2 or
            any(factor in critical_factors for factor in high_risk_factors)
        )

        return is_high_risk, high_risk_factors

    def check_exceptions(self, breach) -> Optional[NotificationException]:
        """
        Check if any exceptions apply that would eliminate notification requirement
        per GDPR Art. 34.3
        """

        # Art. 34.3(a): Technical protection measures (encryption)
        if breach.data_encrypted:
            return NotificationException.ENCRYPTION

        # Art. 34.3(b): Subsequent measures taken
        if breach.high_risk_eliminated_by_measures:
            return NotificationException.SUBSEQUENT_MEASURES

        # Art. 34.3(c): Disproportionate effort
        if (breach.affected_data_subjects_count > 100000 or
            not breach.has_contact_information):
            return NotificationException.DISPROPORTIONATE_EFFORT

        return None

    def prepare_notification(self, breach, high_risk_factors: List[HighRiskFactor]) -> dict:
        """
        Prepare notification content per GDPR Art. 34.2
        """
        return {
            # Art. 34.2(a) - Nature of breach
            'subject': 'Important Security Notice: Data Breach Notification',

            'description': self._describe_breach_plainly(breach, high_risk_factors),

            # Art. 34.2(b) - DPO contact
            'dpo_contact': {
                'name': 'Data Protection Officer',
                'email': 'dpo@company.com',
                'phone': '+1-555-0100',
                'office_hours': 'Monday-Friday, 9:00-17:00 UTC'
            },

            # Art. 34.2(c) - Likely consequences
            'likely_consequences': self._explain_consequences(high_risk_factors),

            # Art. 34.2(d) - Measures taken and recommended
            'measures_taken': breach.remedial_actions,
            'recommended_actions': self._recommend_actions(breach, high_risk_factors)
        }

    def _describe_breach_plainly(self, breach, high_risk_factors: List[HighRiskFactor]) -> str:
        """Describe breach in clear, plain language"""
        description = f"""
We are writing to inform you of a data security incident that may affect your personal information.

What happened:
{breach.description}

When it happened:
{breach.detected_at.strftime('%B %d, %Y at %I:%M %p UTC')}

What information was involved:
{', '.join(breach.affected_data_types)}

Why we're notifying you:
"""
        if HighRiskFactor.FINANCIAL_LOSS in high_risk_factors:
            description += "This incident may pose a risk of financial loss or identity theft. "
        if HighRiskFactor.SPECIAL_CATEGORY in high_risk_factors:
            description += "This incident involves sensitive personal information. "
        if HighRiskFactor.CHILDREN_DATA in high_risk_factors:
            description += "This incident affects information about children. "

        return description

    def _explain_consequences(self, high_risk_factors: List[HighRiskFactor]) -> List[str]:
        """Explain potential consequences in plain language"""
        consequences = []

        if HighRiskFactor.IDENTITY_THEFT in high_risk_factors:
            consequences.append(
                "There is a risk that someone could use your personal information "
                "to impersonate you or commit identity fraud."
            )

        if HighRiskFactor.FINANCIAL_LOSS in high_risk_factors:
            consequences.append(
                "There is a risk of unauthorized financial transactions or fraud "
                "using your financial information."
            )

        if HighRiskFactor.DISCRIMINATION in high_risk_factors:
            consequences.append(
                "The exposure of this information could lead to discrimination "
                "or unfair treatment."
            )

        if HighRiskFactor.SPECIAL_CATEGORY in high_risk_factors:
            consequences.append(
                "This incident involves sensitive personal data that could affect "
                "your privacy and dignity if misused."
            )

        return consequences

    def _recommend_actions(self, breach, high_risk_factors: List[HighRiskFactor]) -> List[str]:
        """Recommend protective actions for data subjects"""
        actions = [
            "Monitor your accounts for any unusual or unauthorized activity",
            "Contact us immediately if you notice anything suspicious",
            "Be cautious of phishing emails or calls claiming to be from our company"
        ]

        if HighRiskFactor.FINANCIAL_LOSS in high_risk_factors:
            actions.extend([
                "Consider placing a fraud alert on your credit file",
                "Review your bank and credit card statements carefully",
                "Consider changing your passwords for financial accounts"
            ])

        if 'credentials' in breach.affected_data_types:
            actions.append(
                "Change your password immediately if you used the same password on other sites"
            )

        if HighRiskFactor.IDENTITY_THEFT in high_risk_factors:
            actions.extend([
                "Consider credit monitoring services",
                "Keep records of all communications about this incident"
            ])

        return actions

    def send_notifications(self, breach, notification_content: dict,
                          affected_subjects: List[str]) -> dict:
        """
        Send notifications to affected data subjects
        """
        notification_results = {
            'total_recipients': len(affected_subjects),
            'successful': 0,
            'failed': 0,
            'method_breakdown': {},
            'sent_at': datetime.utcnow()
        }

        # Determine notification method
        if len(affected_subjects) > 50000:
            # Art. 34.3(c) - Public communication for disproportionate effort
            method = NotificationMethod.PUBLIC_COMMUNICATION
            self._publish_public_notice(notification_content)
            notification_results['method_breakdown']['public'] = len(affected_subjects)
            notification_results['successful'] = len(affected_subjects)
        else:
            # Individual notifications
            for subject_id in affected_subjects:
                try:
                    contact_info = get_contact_info(subject_id)

                    # Prefer email
                    if contact_info.get('email'):
                        send_email_notification(
                            to=contact_info['email'],
                            subject=notification_content['subject'],
                            body=self._format_email(notification_content)
                        )
                        notification_results['successful'] += 1
                        notification_results['method_breakdown']['email'] = \
                            notification_results['method_breakdown'].get('email', 0) + 1

                    # Fallback to SMS if available
                    elif contact_info.get('phone'):
                        send_sms_notification(
                            to=contact_info['phone'],
                            message=self._format_sms(notification_content)
                        )
                        notification_results['successful'] += 1
                        notification_results['method_breakdown']['sms'] = \
                            notification_results['method_breakdown'].get('sms', 0) + 1

                    # In-app notification as last resort
                    else:
                        send_in_app_notification(
                            user_id=subject_id,
                            notification=notification_content
                        )
                        notification_results['successful'] += 1
                        notification_results['method_breakdown']['in_app'] = \
                            notification_results['method_breakdown'].get('in_app', 0) + 1

                except Exception as e:
                    notification_results['failed'] += 1
                    log_notification_failure(subject_id, str(e))

        return notification_results

    def _format_email(self, content: dict) -> str:
        """Format notification as email"""
        return f"""
{content['description']}

WHAT WE ARE DOING

We have taken the following steps to address this incident:
{chr(10).join(f'- {action}' for action in content['measures_taken'])}

WHAT YOU SHOULD DO

We recommend you take the following actions to protect yourself:
{chr(10).join(f'- {action}' for action in content['recommended_actions'])}

CONTACT INFORMATION

If you have questions or concerns, please contact our Data Protection Officer:

{content['dpo_contact']['name']}
Email: {content['dpo_contact']['email']}
Phone: {content['dpo_contact']['phone']}
Office Hours: {content['dpo_contact']['office_hours']}

We sincerely apologize for this incident and any concern it may cause.

Sincerely,
[Company Name]
"""

    def _format_sms(self, content: dict) -> str:
        """Format notification as SMS (max 160 chars)"""
        return (
            f"SECURITY ALERT: We experienced a data breach affecting your information. "
            f"Please check your email or visit our website for details and recommended actions. "
            f"Contact our DPO at {content['dpo_contact']['email']}"
        )

    def _publish_public_notice(self, content: dict):
        """Publish public notice for disproportionate effort cases"""
        # Post on website
        publish_to_website({
            'title': 'Data Breach Notification',
            'content': content,
            'published_at': datetime.utcnow()
        })

        # Issue press release if appropriate
        issue_press_release({
            'title': 'Company Announces Data Security Incident',
            'content': content
        })

        # Social media announcement
        post_to_social_media({
            'message': 'Important security notice for our users. '
                      'Please visit our website for information about a recent data security incident.'
        })


# Example usage
def handle_high_risk_breach(breach):
    """Handle breach requiring data subject notification"""

    notification_process = DataSubjectNotificationProcess()

    # Step 1: Assess high risk
    is_high_risk, risk_factors = notification_process.assess_high_risk(breach)

    if not is_high_risk:
        # Only supervisory authority notification required
        return

    # Step 2: Check exceptions
    exception = notification_process.check_exceptions(breach)

    if exception:
        # Document why notification not required
        document_notification_exception(breach, exception)
        return

    # Step 3: Prepare notification
    notification_content = notification_process.prepare_notification(breach, risk_factors)

    # Step 4: Get affected data subjects
    affected_subjects = get_affected_data_subjects(breach)

    # Step 5: Send notifications
    results = notification_process.send_notifications(
        breach,
        notification_content,
        affected_subjects
    )

    # Step 6: Document notification
    document_data_subject_notification(breach, results)

    # Step 7: Alert DPO
    notify_dpo({
        'breach_id': breach.breach_id,
        'subjects_notified': results['successful'],
        'notification_method': results['method_breakdown']
    })
```

```html
<!-- Signal Resolved: Email notification template -->
<!-- templates/breach-notification-email.html -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Important Security Notice</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">

        <h1 style="color: #d9534f;">Important Security Notice</h1>

        <p><strong>Dear [NAME],</strong></p>

        <p>
            We are writing to inform you of a data security incident that may affect
            your personal information. We take the protection of your data very seriously
            and want to provide you with information about what happened and what we
            are doing about it.
        </p>

        <h2>What Happened</h2>
        <p>[BREACH_DESCRIPTION]</p>

        <h2>What Information Was Involved</h2>
        <ul>
            [DATA_TYPES_LIST]
        </ul>

        <h2>When We Discovered This</h2>
        <p>[DETECTION_DATE]</p>

        <h2>What We Are Doing</h2>
        <ul>
            [REMEDIAL_ACTIONS_LIST]
        </ul>

        <h2>What You Should Do</h2>
        <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0;">
            <p><strong>We recommend you take the following actions:</strong></p>
            <ul>
                [RECOMMENDED_ACTIONS_LIST]
            </ul>
        </div>

        <h2>For More Information</h2>
        <p>
            If you have questions or concerns about this incident, please contact
            our Data Protection Officer:
        </p>
        <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
            <p style="margin: 5px 0;"><strong>Data Protection Officer</strong></p>
            <p style="margin: 5px 0;">Email: <a href="mailto:dpo@company.com">dpo@company.com</a></p>
            <p style="margin: 5px 0;">Phone: +1-555-0100</p>
            <p style="margin: 5px 0;">Office Hours: Monday-Friday, 9:00-17:00 UTC</p>
        </div>

        <p style="margin-top: 30px;">
            We sincerely apologize for this incident and any concern it may cause.
            We are committed to protecting your personal information and have taken
            steps to prevent similar incidents in the future.
        </p>

        <p>
            Sincerely,<br>
            <strong>[Company Name]</strong>
        </p>

    </div>
</body>
</html>
```

## GDPR Context (Informative)

- **Art. 34.1**: Notify data subjects without undue delay when breach likely to result in high risk
- **Art. 34.2**: Notification must describe breach in clear and plain language and include DPO contact, likely consequences, and measures taken/recommended
- **Art. 34.3**: Notification not required if data encrypted, subsequent measures eliminate high risk, or notification would involve disproportionate effort
- **Art. 34.4**: If disproportionate effort, public communication is acceptable alternative
- **Recital 86**: High risk means breach could lead to physical, material, or non-material damage

## Related Signals

- `CSE-GDPR-SECURITY-NO-BREACH-NOTIFICATION-PROCESS-012`
- `CSE-GDPR-SECURITY-NO-BREACH-DETECTION-011`
- `CSE-GDPR-SECURITY-NO-ENCRYPTION-002`
