# CSE-CMMC-INCIDENT-NO-REPORTING-003

**Incident Reporting Not Configured**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-CMMC-INCIDENT-NO-REPORTING-003`    |
| Domain          | CMMC                                    |
| Category        | INCIDENT                                |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

Processes and mechanisms for reporting security incidents to appropriate stakeholders are not established.

This signal indicates that incidents may not be communicated to management, legal, regulatory authorities, or affected parties as required.

## Applicability

This signal applies to:

- Internal escalation procedures
- Management notification processes
- Regulatory reporting requirements
- Customer and partner notifications
- Law enforcement coordination
- Public disclosure procedures
- Documentation and record-keeping

## Examples (Non-Normative)

### Missing Escalation Matrix

```
No defined escalation contacts for:
- Critical security incidents
- Data breaches
- Ransomware events
```

### No Regulatory Reporting Process

```markdown
# Incident Response Plan

## Reporting
Contact IT.
# No regulatory reporting procedures
# No DIBNet reporting process for CUI incidents
```

### Missing Communication Templates

```
/templates/
├── # No incident notification templates
└── # No regulatory reporting forms
```

## What This Signal Does NOT Assert

- Whether incidents have gone unreported
- Regulatory penalties or exposure
- Whether informal reporting occurs
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **IR.L2-3.6.2**: Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization
- **IR.L2-3.6.3**: Test the organizational incident response capability

## Related Signals

- `CSE-CMMC-INCIDENT-NO-PLAN-001` — Incident Response Plan Not Established
- `CSE-CMMC-INCIDENT-NO-DETECTION-002` — Incident Detection Capability Not Implemented
