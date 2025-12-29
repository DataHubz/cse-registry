# CSE-SOC2-PRIV-NO-ACCESS-DENIAL-NOTICE-011

**No Access Denial Notification**

## Signal Overview

| Field           | Value                                          |
|-----------------|------------------------------------------------|
| Identifier      | `CSE-SOC2-PRIV-NO-ACCESS-DENIAL-NOTICE-011`    |
| Domain          | SOC2                                           |
| Category        | PRIV                                           |
| Status          | Active                                         |
| Introduced In   | 1.0.0                                          |

## Description

The entity does not inform data subjects if access to their personal information is denied and provides the reason for denial.

This signal indicates that individuals are not adequately notified when their access requests are rejected, which undermines transparency and privacy rights.

## Applicability

This signal applies to:

- Data subject access request (DSAR) workflows
- Access denial procedures and protocols
- Customer service response templates
- Self-service portal messaging
- Access request management systems
- Privacy team operations
- Compliance reporting systems
- Automated request processing workflows

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### DSAR Workflow Without Denial Notification

```yaml
# Access request workflow configuration
access_request_workflow:
  intake: automated
  verification: identity_check
  approval_process: manual_review
  approval_notification: true
  denial_notification: false  # No denial notification
  denial_reason_required: false
```

### Incomplete Access Request Response

```javascript
// Access request handler without denial notification
async function handleAccessRequest(request) {
  const verified = await verifyIdentity(request);

  if (!verified) {
    // Silently deny - no notification sent
    return updateStatus(request.id, 'denied');
  }

  if (verified) {
    await sendAccessData(request);
    return updateStatus(request.id, 'fulfilled');
  }
}
```

### Customer Service Without Denial Protocol

```text
Access Request Procedure:
1. Receive access request
2. Verify identity
3. If approved: Provide data within 30 days
4. If denied: Update status in system
5. Missing: Notification to requester
6. Missing: Explanation of denial reason
```

### Portal Without Denial Messaging

```json
{
  "request_statuses": {
    "pending": "Your request is being processed",
    "approved": "Your data is ready for download",
    "denied": "Request closed"  // No explanation provided
  }
}
```

## What This Signal Does NOT Assert

- Whether access denials are justified
- The specific reasons for denial
- Whether alternative communication channels exist
- Compliance or non-compliance with SOC 2 or any framework
- Required notification methods or timelines

## SOC 2 Context (Informative)

This signal is relevant to SOC 2 Privacy criteria:

- **P5.3**: The entity informs data subjects and, if required, regulators and others if a request for access is denied and provides the reasons for the denial.
- **GAPP Principle**: Individual participation and access

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-SOC2-PRIV-NO-SUBJECT-ACCESS-009` — Missing data subject access mechanisms
- `CSE-SOC2-PRIV-NO-IDENTITY-VERIFICATION-010` — Missing identity verification
- `CSE-GDPR-RIGHTS-NO-ACCESS-001` — GDPR right of access violation (if defined)

## Notes

Detection of this signal typically involves:

- Review of DSAR procedures and documentation
- Examination of notification templates
- Analysis of workflow automation and status updates
- Assessment of customer service scripts
- Inspection of denial tracking and reporting
- Review of privacy policy commitments

Common reasons for access denial that should be communicated:
- Identity verification failure
- Fraudulent request suspected
- Legally prohibited disclosure
- Third-party rights protection
- Excessive or repetitive requests

The presence of this signal indicates a condition that warrants review in the context of privacy transparency and data subject rights requirements.
