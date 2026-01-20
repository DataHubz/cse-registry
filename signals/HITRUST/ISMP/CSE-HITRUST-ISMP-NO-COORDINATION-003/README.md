# CSE-HITRUST-ISMP-NO-COORDINATION-003

**Security Coordination Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ISMP-NO-COORDINATION-003` |
| Domain | HITRUST |
| Category | ISMP |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of coordination between security functions, departments, and stakeholders. Effective security programs require coordinated activities across IT, legal, compliance, HR, and business units. This includes regular communication, cross-functional collaboration, and unified incident response capabilities.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector

## Examples (Non-Normative)

### Missing Coordination Mechanisms

```yaml
# Example: No evidence of security coordination
security_coordination:
  cross_functional_team: false
  regular_meetings: false
  communication_channels: null
  incident_coordination: false
  stakeholder_engagement: false
```

## HITRUST Context (Informative)

- **Control Domain**: 00 - Information Security Management Program
- **Control Reference**: 00.b
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-ISMP-NO-PROGRAM-001
- CSE-HITRUST-ISMP-NO-RESPONSIBILITIES-004
- CSE-HITRUST-ISMP-NO-MANAGEMENT-COMMITMENT-002
- CSE-ISO27001-ORG-NO-COORDINATION-003
