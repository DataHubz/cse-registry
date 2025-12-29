# CSE-ISO27001-ORG-NO-THREAT-INTELLIGENCE-007

**No Threat Intelligence Program** [NEW IN ISO 27001:2022]

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-THREAT-INTELLIGENCE-007` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization does not collect and analyze threat intelligence to inform security decisions and controls.

## Applicability

- Organizations without threat intelligence feeds or sources
- Environments where security decisions are not informed by current threat landscape
- Companies lacking threat analysis capabilities
- Organizations that do not perform threat hunting activities
- Security programs operating without awareness of emerging threats

## Examples (Non-Normative)

### No Threat Intelligence Sources

```yaml
threat_intelligence:
  program_established: false
  intelligence_sources:
    commercial_feeds: []
    open_source: []
    government_sources: []
    industry_sharing: false
  analysis_capability: null
  integration_with_controls: false
```

### Reactive Security Posture

```yaml
security_operations:
  threat_awareness:
    current_threat_landscape: "unknown"
    sector_specific_threats: "not_monitored"
    emerging_vulnerabilities: "reactive_only"
  control_adjustments:
    based_on_threats: false
    last_threat_briefing: null
  threat_hunting: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.7 Threat intelligence**: Information relating to information security threats should be collected and analyzed to produce threat intelligence. This is a NEW control introduced in ISO 27001:2022 to emphasize the importance of proactive threat awareness in modern security programs.

## Related Signals

- `CSE-ISO27001-ORG-NO-INTEREST-GROUP-CONTACTS-006`
