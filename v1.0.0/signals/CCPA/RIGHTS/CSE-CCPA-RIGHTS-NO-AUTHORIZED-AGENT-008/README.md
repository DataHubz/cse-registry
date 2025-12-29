# CSE-CCPA-RIGHTS-NO-AUTHORIZED-AGENT-008

**Authorized Agent Requests Not Supported**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-AUTHORIZED-AGENT-008` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists to accept and process consumer rights requests submitted by authorized agents on behalf of consumers.

CCPA requires businesses to accept requests from authorized agents, who may be registered with the California Secretary of State or have written permission from the consumer.

## Applicability

- Consumer request intake systems
- Privacy portal submission forms
- Customer service request workflows
- Data subject access request (DSAR) platforms
- Verification and authentication systems
- Third-party request processing interfaces

## Examples (Non-Normative)

### No Authorized Agent Option

```yaml
request_submission:
  authorized_agent_option: false
  power_of_attorney_upload: null
  written_permission_verification: null
  agent_identity_verification: null
  consumer_confirmation_process: null
```

### Missing Verification Process

```
Authorized Agent Assessment:
  Agent Request Acceptance: Not supported
  Power of Attorney Verification: No process
  Written Permission Documentation: Cannot be submitted
  Consumer Identity Verification: Not implemented
  Agent Registration Check: None
  Dual Verification Process: Missing
```

### Inadequate Intake Form

```json
{
  "request_form": {
    "submitter_type_options": ["consumer_only"],
    "authorized_agent_option": false,
    "permission_document_upload": false,
    "agent_verification_fields": null,
    "consumer_confirmation_required": false,
    "power_of_attorney_validation": false,
    "california_registration_check": false
  }
}
```

## CCPA Context (Informative)

- **Section**: §1798.185(a)(7)
- **Requirement**: The regulations shall include establishing any mechanisms to enable consumers to submit requests via an authorized agent, and to verify the authorized agent's authority to act on behalf of the consumer
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-REQUEST-METHODS-005`
- `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001`
- `CSE-CCPA-RIGHTS-NO-DELETE-MECHANISM-002`
