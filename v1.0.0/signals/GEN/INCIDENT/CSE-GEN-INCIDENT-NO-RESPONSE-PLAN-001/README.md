# CSE-GEN-INCIDENT-NO-RESPONSE-PLAN-001

**Incident Response Plan Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|---------------------------------------------|
| Identifier      | `CSE-GEN-INCIDENT-NO-RESPONSE-PLAN-001`    |
| Domain          | GEN (General)                              |
| Category        | INCIDENT                                   |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

No documented plan for detecting, responding to, and recovering from security incidents.

This signal indicates that the organization lacks formal procedures for incident handling, which may result in inconsistent or ineffective responses to security events.

## Applicability

This signal applies to:

- Incident response policies and procedures
- Security incident documentation repositories
- Incident response team structures
- Communication and escalation procedures
- Recovery and business continuity processes
- Incident response playbooks and runbooks
- Security operations centers (SOCs)

## Examples (Non-Normative)

### Missing Incident Response Documentation

```
/security/policies/
├── acceptable-use-policy.md
├── password-policy.md
├── access-control-policy.md
└── # No incident response plan found
```

### Incomplete Incident Response Plan

```markdown
# Incident Response

## Introduction
This document outlines our incident response approach.

## Process
- Detect incidents
- Respond appropriately
- Document findings

# Missing: specific procedures, roles, contact lists,
# escalation paths, detection methods, recovery steps
```

### Outdated or Placeholder Plan

```markdown
# Incident Response Plan

Status: DRAFT - Not approved
Last Updated: 2019

## Procedures
TODO: Define incident response procedures
```

## What This Signal Does NOT Assert

- Whether informal incident response processes exist
- Whether the organization has previously handled incidents
- The actual effectiveness of incident response capabilities
- Compliance or non-compliance with any specific framework
- Required remediation actions or specific plan components
- Whether incidents have been mishandled

## Related Signals

- `CSE-GEN-INCIDENT-NO-TESTING-004` — Incident Response Testing Missing
- `CSE-GEN-INCIDENT-NO-RECOVERY-PLAN-003` — Disaster Recovery Plan Missing
- `CSE-GEN-INCIDENT-NO-LESSONS-LEARNED-005` — Post-Incident Review Missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 45 CFR 164.308(a)(6) — Security incident procedures
- **SOC 2**: CC7.3 — Incident response procedures
- **ISO 27001**: A.16.1.1 — Responsibilities and procedures
- **PCI DSS**: Requirement 12.10 — Implement incident response plan
- **CIS Controls**: Control 17 — Incident Response Management
- **NIST CSF**: RS.CO (Response Communication), RS.AN (Analysis)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning documentation repositories for incident response plans
- Checking for required plan components (roles, procedures, contacts)
- Reviewing policy management systems
- Verifying plan approval and maintenance status
- Checking incident response team documentation

The presence of this signal indicates a documentation gap that may affect the organization's ability to respond effectively to security incidents.
