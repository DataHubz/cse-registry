# CSE-ISO27001-ORG-NO-SUPPLIER-MONITORING-022

**No Supplier Service Monitoring and Review**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-SUPPLIER-MONITORING-022` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Supplier service delivery is not regularly monitored, reviewed, and audited for security compliance. Organizations must actively oversee supplier performance and security practices to ensure contractual obligations are met and security risks are managed throughout the supplier relationship lifecycle.

## Applicability

- Active supplier and vendor relationships
- Managed service providers and outsourcing arrangements
- Cloud service provider engagements
- Critical third-party service dependencies
- Suppliers with access to sensitive organizational data
- Long-term supplier contracts requiring ongoing oversight

## Examples (Non-Normative)

### No Supplier Monitoring Program

```yaml
supplier_management:
  active_suppliers: 45

  monitoring_program:
    regular_reviews: null              # Signal: No scheduled supplier reviews
    performance_metrics: null          # Signal: No SLA monitoring
    security_audits: null              # Signal: No security assessments
    compliance_verification: null      # Signal: No compliance checks

  change_management:
    supplier_change_notifications: false  # Signal: Not tracking supplier changes
    impact_assessments: null              # Signal: No assessment of supplier changes
```

### Inadequate Supplier Oversight

```yaml
supplier: "Cloud Services Provider Inc"

oversight:
  last_security_review: "2020-03-15"   # Signal: Reviews not conducted regularly
  audit_schedule: null                  # Signal: No planned audits

  performance_monitoring:
    sla_tracking: false                 # Signal: SLAs not monitored
    incident_response_time: "unknown"   # Signal: Not measuring response times
    security_incidents: "not tracked"   # Signal: No incident tracking

  compliance:
    certification_verification: "never checked"  # Signal: Not verifying certifications
    policy_updates: "not reviewed"               # Signal: Not reviewing policy changes
```

## ISO 27001:2022 Context (Informative)

- **A.5.22 Monitoring, review and change management of supplier services**: Requires organizations to regularly monitor, review, and audit supplier service delivery and manage changes to supplier services. This includes reviewing security performance, conducting periodic audits, tracking incidents, and managing changes that could affect security.

## Related Signals

- `CSE-ISO27001-ORG-NO-SUPPLIER-AGREEMENTS-020` (Information security in supplier agreements)
- `CSE-ISO27001-ORG-NO-SUPPLY-CHAIN-SECURITY-021` (ICT supply chain security)
- `CSE-ISO27001-ORG-NO-CLOUD-SECURITY-023` (Cloud services security)
