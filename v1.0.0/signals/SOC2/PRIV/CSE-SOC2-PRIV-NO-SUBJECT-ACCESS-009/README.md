# CSE-SOC2-PRIV-NO-SUBJECT-ACCESS-009

**No Data Subject Access**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-SOC2-PRIV-NO-SUBJECT-ACCESS-009`    |
| Domain          | SOC2                                     |
| Category        | PRIV                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

The entity does not provide data subjects with access to their personal information for review and update.

This signal indicates that individuals lack the ability to view, verify, or modify their own personal data held by the organization, which is a fundamental privacy requirement.

## Applicability

This signal applies to:

- Customer portals and self-service platforms
- Data subject access request (DSAR) workflows
- Privacy management systems
- User profile management interfaces
- Mobile applications with user data
- SaaS platforms handling personal information
- Healthcare patient portals
- Financial services customer platforms

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Self-Service Access Portal

```yaml
# Application configuration without user data access
privacy_features:
  data_access: false
  self_service_portal: false
  access_request_workflow: false
```

### Privacy Policy Without Access Provisions

```text
Privacy Policy:
- Data collection: YES
- Data usage: Documented
- Third-party sharing: Documented
- Data subject access: NOT MENTIONED
- Update mechanisms: NONE
```

### System Without Access Request Process

```json
{
  "privacy_procedures": {
    "consent_management": true,
    "data_retention": true,
    "access_requests": false,
    "update_procedures": false
  }
}
```

### API Without User Data Endpoints

```javascript
// API routes missing personal data access endpoints
app.post('/api/user/create', createUser);
app.post('/api/user/login', loginUser);
// Missing: GET /api/user/data
// Missing: PUT /api/user/data
// Missing: GET /api/user/export
```

## What This Signal Does NOT Assert

- Whether the absence is intentional or accidental
- Whether alternative access mechanisms exist
- The complexity of implementing data access
- Compliance or non-compliance with SOC 2 or any framework
- Required implementation approach

## SOC 2 Context (Informative)

This signal is relevant to SOC 2 Privacy criteria:

- **P5.1**: The entity grants identified and authenticated data subjects the ability to access their stored personal information for review and, upon request, provides physical or electronic copies of that information to data subjects. If access is denied, data subjects are informed of the denial and reason for such denial.
- **GAPP Principle**: Individual participation and access

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-SOC2-PRIV-NO-IDENTITY-VERIFICATION-010` — Missing identity verification for access
- `CSE-SOC2-PRIV-NO-ACCESS-DENIAL-NOTICE-011` — Missing access denial notification
- `CSE-GDPR-RIGHTS-NO-ACCESS-001` — GDPR right of access violation (if defined)

## Notes

Detection of this signal typically involves:

- Review of privacy policies and notices
- Examination of self-service portal capabilities
- Analysis of DSAR procedures and workflows
- Assessment of user profile management features
- Inspection of API endpoints for data access
- Review of documentation for access request processes

The presence of this signal indicates a condition that warrants review in the context of privacy and data subject rights requirements.
