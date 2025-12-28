# CSE-CCPA-VERIFY-NO-AGENT-VERIFICATION-003

**Authorized Agent Verification Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-VERIFY-NO-AGENT-VERIFICATION-003` |
| Domain | CCPA |
| Category | VERIFY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No verification process exists to confirm that an authorized agent has permission from the consumer to submit a request on their behalf.

CCPA permits consumers to designate authorized agents to exercise rights on their behalf, but businesses must verify both the agent's authority and the consumer's identity to prevent unauthorized requests.

## Applicability

- Authorized agent request processing systems
- Privacy request intake workflows
- Third-party service provider integrations
- Consumer rights management platforms
- Legal representative request handlers
- Power of attorney verification systems

## Examples (Non-Normative)

### No Agent Authorization Check

```yaml
agent_verification:
  authorized_agent_support: false
  permission_verification: null
  consumer_confirmation: false
  power_of_attorney_check: false
  written_authorization: "Not required"
```

### Missing Agent Validation

```json
{
  "privacy_request": {
    "submitted_by": "authorized_agent",
    "agent_verification": {
      "permission_verified": false,
      "consumer_confirmed": false,
      "authorization_documentation": null,
      "identity_verification": "skipped"
    }
  }
}
```

### Unverified Agent Request Processing

```
Agent Request Assessment:
  Request Source: Third-party authorized agent
  Consumer Permission Verified: No
  Written Authorization Provided: No
  Power of Attorney Registered: No
  Consumer Identity Confirmed: No
  Processing Status: Accepted without verification
  Risk: Unauthorized access to consumer data
```

## CCPA Context (Informative)

- **Section**: §1798.185(a)(7)
- **Requirement**: Verify that the authorized agent has permission to act on behalf of the consumer, which may include requiring the consumer to directly verify their identity and confirm that they provided the authorized agent permission to submit the request
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-VERIFY-NO-VERIFICATION-PROCESS-001`
- `CSE-CCPA-RIGHTS-NO-AUTHORIZED-AGENT-008`
- `CSE-CCPA-VERIFY-INSUFFICIENT-MATCH-002`
- `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001`
