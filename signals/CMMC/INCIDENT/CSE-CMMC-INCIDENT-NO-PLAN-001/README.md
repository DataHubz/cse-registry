# CSE-CMMC-INCIDENT-NO-PLAN-001

**Incident Response Plan Not Established**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-CMMC-INCIDENT-NO-PLAN-001`       |
| Domain          | CMMC                                  |
| Category        | INCIDENT                              |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

The organization does not have a documented incident response plan or the plan does not address key incident handling procedures.

This signal indicates that the organization may lack defined processes for detecting, responding to, and recovering from security incidents.

## Applicability

This signal applies to:

- Incident response policies and procedures
- Incident classification and categorization
- Roles and responsibilities documentation
- Communication and escalation procedures
- Recovery and lessons learned processes
- Incident response playbooks

## Examples (Non-Normative)

### Missing Incident Response Documentation

```
/policies/
├── acceptable-use.md
├── access-control.md
└── # No incident response plan
```

### Incomplete Incident Response Plan

```markdown
# Incident Response Plan

## Overview
We respond to incidents.

## Procedures
TBD

## Contacts
TBD
```

## What This Signal Does NOT Assert

- Whether incidents have occurred without proper response
- The organization's actual response capabilities
- Whether informal processes exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **IR.L2-3.6.1**: Establish an operational incident-handling capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities
- **IR.L2-3.6.2**: Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization

## Related Signals

- `CSE-CMMC-INCIDENT-NO-DETECTION-002` — Incident Detection Capability Not Implemented
- `CSE-CMMC-INCIDENT-NO-REPORTING-003` — Incident Reporting Not Configured
