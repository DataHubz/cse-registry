# CSE-CCPA-TRAINING-NO-REQUEST-HANDLING-002

**Request Handling Training Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-TRAINING-NO-REQUEST-HANDLING-002` |
| Domain | CCPA |
| Category | TRAINING |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business subject to CCPA requirements does not provide specific training to employees responsible for receiving and processing consumer rights requests under CCPA. This signal indicates that personnel who handle requests to know, delete, correct, or opt-out lack documented training on proper verification procedures, response timelines, and required disclosure formats.

Employees handling consumer rights requests must be trained on authentication methods, data retrieval procedures, response deadlines (45 days with possible 45-day extension), and proper communication of consumer rights.

## Applicability

This signal applies to:

- Customer service representatives receiving consumer requests
- Privacy teams responsible for processing rights requests
- IT personnel extracting data for disclosure requests
- Security teams verifying consumer identities
- Call center agents handling phone-based requests
- Email support teams processing written requests
- Chatbot operators managing automated request intake
- Compliance officers overseeing request fulfillment

## Examples (Non-Normative)

### Untrained Support Team

```yaml
# Customer support knowledge base without CCPA procedures
support_procedures:
  - handle_billing_inquiry
  - process_refund_request
  - escalate_technical_issue
  - reset_password
  # No procedures for CCPA rights requests
```

### Missing Request Verification Training

```json
{
  "support_agent": "agent_456",
  "request_type": "data_deletion",
  "status": "pending",
  "verification_attempted": false,
  "notes": "Agent unsure how to verify consumer identity per CCPA requirements"
}
```

### Inadequate Timeline Training

```python
# Support ticket system showing missed deadlines
support_ticket = {
    "ticket_id": "CCPA-789",
    "request_type": "right_to_know",
    "received_date": "2024-01-15",
    "due_date": None,  # Agent did not calculate 45-day deadline
    "status": "open",
    "days_elapsed": 60  # Exceeds CCPA timeline
}
```

## What This Signal Does NOT Assert

- Whether the business is actually subject to CCPA
- The quality of general privacy training (if provided)
- Whether requests are being processed correctly despite lack of formal training
- Compliance or non-compliance with CCPA or other privacy laws
- The business's intent or good faith efforts
- Whether documented procedures exist (training may be missing even if procedures exist)
- Required training delivery method or frequency

## CCPA Context (Informative)

- **Section**: §1798.130(a)(6)
- **Requirement**: Businesses must train individuals responsible for handling consumer inquiries about the business's privacy practices and consumer rights requests to ensure proper and timely responses
- **Added by**: CCPA (original 2018 statute)

CCPA regulations require businesses to process consumer rights requests within specific timeframes (45 days, extendable once by 45 days) and according to specific verification and disclosure requirements. Training is essential to ensure that personnel handling these requests understand:

- The types of rights consumers can exercise
- Proper methods for verifying consumer identity
- Required response formats and content
- Applicable deadlines and extension procedures
- Prohibited fees or obstacles to request fulfillment

## Related Signals

- `CSE-CCPA-TRAINING-NO-PRIVACY-TRAINING-001` — Privacy Training Missing
- `CSE-CCPA-TRAINING-NO-ANNUAL-REFRESH-003` — Annual Training Refresh Missing
- `CSE-CCPA-RIGHTS-NO-VERIFICATION-METHOD-002` — Consumer Verification Method Missing
- `CSE-CCPA-RIGHTS-DELAYED-RESPONSE-004` — Consumer Rights Request Response Delayed

## Notes

Detection of this signal typically involves:

- Reviewing training curricula for consumer rights request handling procedures
- Examining standard operating procedures for request processing workflows
- Checking employee knowledge through testing or spot-checks
- Analyzing request fulfillment metrics for timeline compliance
- Reviewing escalation procedures for complex requests
- Checking for training on reasonable verification methods
- Verifying training on authorized agent procedures
- Examining quality assurance records for request handling accuracy

The presence of this signal indicates a critical gap in the business's ability to properly fulfill consumer rights requests within CCPA-mandated timeframes and procedures.
