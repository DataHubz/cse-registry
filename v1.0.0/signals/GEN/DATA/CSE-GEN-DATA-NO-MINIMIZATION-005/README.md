# CSE-GEN-DATA-NO-MINIMIZATION-005

**Data Minimization Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GEN-DATA-NO-MINIMIZATION-005` |
| Domain | GEN (General) |
| Category | DATA |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Collecting or retaining more personal or sensitive data than necessary for the stated purpose.

Organizations gather, process, or store data beyond what is required to achieve the specific, legitimate purpose for which it was collected. This signal indicates a failure to limit data collection to only what is adequate, relevant, and necessary for the intended business function or service.

## Applicability

This signal applies to:

- Data collection forms and user interfaces
- API endpoints and data request scopes
- Database schemas and field requirements
- Registration and onboarding processes
- Analytics and tracking implementations
- Third-party data sharing agreements
- Marketing and customer engagement platforms

## Examples (Non-Normative)

### Excessive Data Collection

```yaml
user_registration:
  purpose: "Newsletter subscription"
  required_fields:
    - email_address                        # Necessary
    - full_name                            # Signal: May not be necessary
    - phone_number                         # Signal: Excessive for newsletter
    - date_of_birth                        # Signal: Not relevant to purpose
    - mailing_address                      # Signal: Not needed for email newsletter
    - social_security_number               # Signal: Clearly excessive
    - annual_income                        # Signal: Not relevant

  justification: "Marketing database"      # Signal: Vague justification
  retention: "indefinite"                  # Signal: No limitation
```

### Unnecessary Data Retention

```yaml
e_commerce_platform:
  order_processing:
    purpose: "Fulfill customer order"
    collected_data:
      - payment_card_full_number           # Signal: Should not store full PAN
      - card_cvv                           # Signal: Should never be retained
      - customer_purchase_history          # Necessary for account
      - browsing_history                   # Signal: Not needed for order fulfillment
      - gps_location_tracking              # Signal: Excessive for delivery address

  analytics:
    purpose: "Improve user experience"
    tracking:
      - page_views: true                   # Reasonable
      - keystroke_logging: true            # Signal: Excessive
      - mouse_movement_heatmaps: true      # May be excessive
      - session_replay_full: true          # Signal: Captures unnecessary PII
      - microphone_activation: true        # Signal: Clearly excessive
```

### Over-broad API Scopes

```
API Integration Analysis:

Third-Party Marketing Tool:
  Requested permissions:
    - Read all customer data
    - Access payment information
    - View employee records
    - Export full database

  Actual requirement:
    - Email addresses for campaign targeting

  Signal: Requesting access far beyond stated purpose

Analytics Service:
  Data shared:
    - Full customer profiles
    - Individual transaction details
    - Personal health information

  Stated purpose:
    - Aggregate traffic statistics

  Signal: Sharing identifiable data when aggregated metrics sufficient
```

## What This Signal Does NOT Assert

- Whether the data collection is unlawful
- The specific data elements that should be collected
- Severity or privacy impact
- Required remediation actions
- Compliance or non-compliance with any framework

## Related Signals

- `CSE-GEN-DATA-NO-RETENTION-POLICY-003` — Retention policy missing
- `CSE-GDPR-PRINCIPLES-NO-DATA-MINIMIZATION` — GDPR minimization principle violated (if defined)
- `CSE-GDPR-DESIGN-NO-DATA-MINIMIZATION-DEFAULT-003` — Minimization not by default

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **GDPR**: Article 5(1)(c) (Data minimization principle)
- **ISO 27001**: A.5.34 (Privacy and protection of PII)
- **CCPA**: Section 1798.100(c) (Collection limitation and purpose specification)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Analyzing data collection forms against stated purposes
- Reviewing database schemas for unnecessary fields
- Examining API scopes and permissions
- Assessing privacy notices against actual data practices
- Conducting Data Protection Impact Assessments (DPIAs)
- Reviewing third-party data sharing agreements
- Analyzing data retention against business necessity

Data minimization reduces privacy risks, limits the attack surface in case of a breach, decreases storage and processing costs, and is a fundamental principle of most data protection regulations. Organizations should regularly review data collection practices to ensure they collect only what is necessary and proportionate to the stated purpose.
