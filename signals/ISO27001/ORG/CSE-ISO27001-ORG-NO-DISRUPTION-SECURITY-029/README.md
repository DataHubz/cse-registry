# CSE-ISO27001-ORG-NO-DISRUPTION-SECURITY-029

**No Information Security During Disruption**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-DISRUPTION-SECURITY-029` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Plans for maintaining security at appropriate levels during disruption are not established. Organizations must ensure that information security controls remain effective during business disruptions, emergencies, and crisis situations, maintaining protection of information assets even when normal operations are compromised.

## Applicability

- Organizations with business continuity and disaster recovery plans
- Environments with critical systems and data
- Organizations operating in high-risk geographic areas
- Businesses with regulatory compliance requirements
- Entities with remote work or alternative site capabilities
- Organizations dependent on technology infrastructure

## Examples (Non-Normative)

### Business Continuity Plan Without Security Controls

```yaml
business_continuity_plan:
  disaster_scenarios:
    - natural_disaster
    - pandemic
    - cyber_attack
    - facility_loss

  continuity_procedures:
    alternative_site_activation: "defined"
    remote_work_enablement: "defined"
    data_restoration: "defined"

  security_during_disruption:
    access_controls: null              # Signal: No security controls defined
    authentication: null               # Signal: No authentication requirements
    data_protection: null              # Signal: No data protection measures
    monitoring: null                   # Signal: No security monitoring
    incident_response: null            # Signal: No IR during crisis
```

### Inadequate Security in Emergency Procedures

```yaml
disaster_recovery:
  scenario: "Primary datacenter failure"

  recovery_procedures:
    failover_to_dr_site: true

  security_considerations:
    network_segmentation: "not maintained"      # Signal: Security controls relaxed
    encryption_in_transit: "disabled for speed" # Signal: Security compromised
    access_logging: "suspended"                 # Signal: No audit trail
    privileged_access: "emergency accounts"     # Signal: Weak access controls

  temporary_measures:
    security_review: null              # Signal: No security assessment
    risk_acceptance: "informal"        # Signal: No formal risk decisions
    restoration_of_controls: null      # Signal: No plan to restore security
```

## ISO 27001:2022 Context (Informative)

- **A.5.29 Information security during disruption**: Requires organizations to plan for maintaining information security at an appropriate level during disruption. This includes ensuring security controls remain effective during emergencies, defining security requirements for alternative operating modes, and integrating security into business continuity planning.

## Related Signals

- `CSE-ISO27001-ORG-NO-ICT-CONTINUITY-030` (ICT readiness for business continuity)
- `CSE-ISO27001-ORG-NO-INCIDENT-PLANNING-024` (Incident management planning)
- `CSE-ISO27001-ORG-NO-RISK-ASSESSMENT` (If applicable for continuity risk assessment)
