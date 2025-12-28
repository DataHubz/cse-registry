# CSE-GEN-INCIDENT-NO-RECOVERY-PLAN-003

**Disaster Recovery Plan Missing**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-GEN-INCIDENT-NO-RECOVERY-PLAN-003`   |
| Domain          | GEN (General)                             |
| Category        | INCIDENT                                  |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

No plan for recovering critical systems and operations after a major incident or disaster.

This signal indicates that the organization lacks documented procedures for restoring IT systems, infrastructure, and business operations following catastrophic events such as natural disasters, major system failures, or large-scale cyberattacks.

## Applicability

This signal applies to:

- Business continuity and disaster recovery documentation
- IT system recovery procedures
- Infrastructure failover and redundancy planning
- Recovery time objective (RTO) and recovery point objective (RPO) definitions
- Critical system and service identification
- Alternative site and backup facility planning
- Communication and notification procedures during disasters

## Examples (Non-Normative)

### Missing Recovery Documentation

```
/business-continuity/
├── emergency-contacts.md
├── evacuation-procedures.md
└── # No disaster recovery plan
```

### Incomplete Disaster Recovery Plan

```markdown
# Disaster Recovery Plan

## Scope
This plan covers IT system recovery.

## Systems
- Production servers
- Database systems
- Network infrastructure

## Recovery Procedures
To be developed

## Testing Schedule
Annual testing planned
```

### No Critical System Prioritization

```markdown
# IT Systems Inventory

| System | Function | Owner |
|--------|----------|-------|
| Web Server | Public website | IT Team |
| Database | Customer data | IT Team |
| Email | Communications | IT Team |

# Missing: RTO/RPO, recovery priority, dependencies
```

### Outdated Recovery Plan

```markdown
# Disaster Recovery Plan
Last Updated: 2018
Status: Under Review

## Recovery Procedures
1. Restore from tape backups
2. Rebuild on-premises servers
3. Reconfigure network

# Note: Infrastructure migrated to cloud in 2022
```

## What This Signal Does NOT Assert

- Whether business continuity planning exists for non-IT functions
- Whether backup systems or redundancy are in place
- The organization's actual ability to recover from disasters
- Compliance or non-compliance with any specific framework
- Required RTO or RPO targets
- Whether the plan has been tested

## Related Signals

- `CSE-GEN-INCIDENT-NO-RESPONSE-PLAN-001` — Incident Response Plan Missing
- `CSE-GEN-INCIDENT-NO-BACKUP-002` — Data Backup Missing
- `CSE-GEN-INCIDENT-NO-TESTING-004` — Incident Response Testing Missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 45 CFR 164.308(a)(7)(ii)(B) — Disaster recovery plan
- **ISO 27001**: A.17.1.2 — Implementing information security continuity
- **SOC 2**: A1.2 — Business continuity and disaster recovery

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning documentation repositories for disaster recovery plans
- Checking for required plan components (recovery procedures, RTOs, RPOs)
- Reviewing business continuity documentation
- Verifying plan approval and currency
- Looking for system recovery prioritization and dependencies
- Checking for alternative site or failover documentation

The presence of this signal indicates a significant gap in organizational preparedness for major disruptive events.
