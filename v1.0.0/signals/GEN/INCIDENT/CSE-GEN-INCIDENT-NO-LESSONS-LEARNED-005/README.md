# CSE-GEN-INCIDENT-NO-LESSONS-LEARNED-005

**Post-Incident Review Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-GEN-INCIDENT-NO-LESSONS-LEARNED-005`  |
| Domain          | GEN (General)                              |
| Category        | INCIDENT                                   |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

No process for conducting post-incident analysis and incorporating lessons learned.

This signal indicates that the organization does not systematically review security incidents after resolution to identify root causes, document findings, and implement improvements to prevent recurrence.

## Applicability

This signal applies to:

- Post-incident review processes and procedures
- Incident documentation and reporting systems
- Root cause analysis workflows
- Lessons learned documentation repositories
- Continuous improvement programs
- Incident response process refinement
- Security control enhancement tracking
- Incident metrics and trend analysis

## Examples (Non-Normative)

### No Post-Incident Documentation

```
/incidents/
├── 2024-001-phishing-attack/
│   ├── initial-report.md
│   ├── containment-log.md
│   └── # No post-incident review or lessons learned
├── 2024-002-data-leak/
│   ├── incident-report.md
│   └── # Closed without review
└── 2024-003-malware-infection/
    └── detection-notes.md
```

### Incomplete Post-Incident Process

```markdown
# Incident Response Procedure

## Phases
1. Preparation
2. Detection and Analysis
3. Containment, Eradication, and Recovery
4. Post-Incident Activity

## Post-Incident Requirements
- Document incident timeline
- Close incident ticket

# Missing: root cause analysis, lessons learned,
# improvement actions, process updates
```

### Lessons Learned Not Implemented

```markdown
# Incident 2024-005 - Ransomware Attack

## Lessons Learned
1. Backup restoration took too long
2. No offline backups available
3. Incident response team contacts outdated
4. No clear communication plan

## Action Items
TBD

## Status
Incident closed - 2024-06-15
```

### No Review Template or Process

```markdown
# Incident Tracking

| ID | Date | Type | Status | Review |
|----|------|------|--------|--------|
| 2024-001 | 2024-01-15 | Phishing | Closed | No |
| 2024-002 | 2024-02-03 | Malware | Closed | No |
| 2024-003 | 2024-03-22 | Data Leak | Closed | No |
| 2024-004 | 2024-05-10 | DDoS | Closed | No |
```

## What This Signal Does NOT Assert

- Whether incidents have been properly handled or resolved
- Whether incident documentation exists
- The severity or frequency of security incidents
- Compliance or non-compliance with any specific framework
- Required post-incident review methods or timelines
- Whether informal discussions about incidents occur

## Related Signals

- `CSE-GEN-INCIDENT-NO-RESPONSE-PLAN-001` — Incident Response Plan Missing
- `CSE-GEN-INCIDENT-NO-TESTING-004` — Incident Response Testing Missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: Control 17.8 — Conduct post-incident reviews
- **NIST CSF**: RS.IM (Improvements) — Organizational response activities are improved
- **ISO 27001**: A.16.1.6 — Learning from information security incidents

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning incident records for post-incident review documentation
- Checking for lessons learned reports and action items
- Reviewing incident response procedures for review requirements
- Verifying root cause analysis documentation
- Looking for evidence of process improvements after incidents
- Checking for closed incidents without associated reviews
- Monitoring action item tracking and implementation

The presence of this signal indicates a missed opportunity for continuous improvement, potentially allowing similar incidents to recur without organizational learning.
