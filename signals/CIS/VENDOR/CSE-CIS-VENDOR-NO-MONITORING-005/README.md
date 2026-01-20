# CSE-CIS-VENDOR-NO-MONITORING-005

**Service Provider Monitoring Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-VENDOR-NO-MONITORING-005` |
| Domain | CIS |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal detects when an organization fails to monitor service providers on an ongoing basis to ensure they are meeting their contractual security obligations and maintaining adequate security controls. While initial and periodic assessments validate security at specific points in time, continuous or regular monitoring detects security degradation, configuration changes, emerging threats, or compliance drift between formal assessments. Without ongoing monitoring, organizations lack visibility into the current security state of critical service providers and cannot respond promptly to security incidents or changes in the threat landscape.

## Implementation Group

- **IG Level**: IG3
- **Applicable To**: Organizations with mature security programs and critical dependencies on service providers

## Applicability

- Large enterprises with extensive service provider ecosystems
- Organizations processing highly sensitive or regulated data through vendors
- Companies with critical infrastructure dependencies on service providers
- Financial institutions with real-time transaction processors
- Healthcare organizations with critical health IT service providers
- Organizations subject to continuous compliance requirements
- Companies with stringent security SLAs and commitments
- Enterprises requiring real-time threat intelligence sharing

## Examples (Non-Normative)

### No Ongoing Monitoring Program

```yaml
# Detection indicators:
vendor_monitoring_program:
  program_exists: false
  monitoring_tools_deployed: false
  security_metrics_collected: false
  performance_reviews_scheduled: false
  continuous_compliance_monitoring: false
  threat_intelligence_sharing: false

# Expected state for IG3 organizations:
vendor_monitoring_program:
  program_exists: true
  monitoring_frequency: "Continuous and quarterly reviews"
  metrics_tracked: 15
  automated_monitoring: true
```

### Missing Security Performance Monitoring

```yaml
# No metrics or KPIs tracked:
provider_monitoring:
  provider: "Critical Cloud Infrastructure Provider"
  classification: "Tier 1 - Critical"
  sla_monitoring:
    uptime_tracked: true
    performance_tracked: true
    security_metrics_tracked: false
  security_kpis:
    incident_response_time: "not monitored"
    vulnerability_remediation_time: "not monitored"
    patch_compliance_rate: "not monitored"
    security_event_volume: "not monitored"
    access_review_completion: "not monitored"

# Security metrics should be monitored alongside operational metrics
```

### No Change Notification Process

```yaml
# Missing awareness of provider changes:
change_management:
  provider: "SaaS Application Provider"
  last_notification_received: null
  infrastructure_changes: "unknown"
  security_control_changes: "unknown"
  subprocessor_changes: "unknown"
  certification_status_changes: "unknown"
  contractual_requirement: "30-day advance notice"
  compliance_status: "not monitored"

# Organization should receive and track all material changes
```

### Comprehensive Monitoring Example

```yaml
# Well-implemented monitoring program:
vendor_monitoring:
  provider: "Critical Payment Processor"
  classification: "Tier 1 - Critical High Risk"

  automated_monitoring:
    security_posture_scanning: "Daily"
    certificate_expiration_monitoring: "Continuous"
    threat_intelligence_feeds: "Real-time"
    vulnerability_disclosure_monitoring: "Continuous"
    news_and_breach_monitoring: "Daily"

  performance_metrics:
    security_incident_count:
      current_quarter: 2
      threshold: 5
      status: "Within SLA"
    mean_time_to_patch_critical:
      current: "12 days"
      sla: "15 days"
      status: "Compliant"
    security_assessment_score:
      current: 94
      previous: 92
      trend: "Improving"

  periodic_reviews:
    quarterly_business_review: "2025-12-15"
    security_scorecard_review: "Monthly"
    compliance_status_review: "Quarterly"
    executive_risk_review: "Annual"

  change_notifications:
    subprocessor_additions: "Tracked - 2 additions in Q4"
    infrastructure_changes: "Tracked - 3 notifications received"
    certification_renewals: "Tracked - SOC 2 renewed 2025-11-01"

  incident_tracking:
    breaches_reported: 0
    security_incidents_disclosed: 1
    response_time_sla_compliance: "100%"

  threat_intelligence:
    provider_mentioned_in_threats: false
    dark_web_monitoring: "Active"
    industry_alerts_relevant: 2
```

### Monitoring Automation Example

```yaml
# Automated monitoring tools:
monitoring_automation:
  security_rating_service: "SecurityScorecard"
  providers_monitored: 47

  automated_alerts:
    - alert_type: "Security rating decrease"
      threshold: "Drop of 10+ points"
      notification: "Risk team + Provider management"

    - alert_type: "Breach disclosure"
      threshold: "Any public disclosure"
      notification: "CISO + Legal + Provider management"

    - alert_type: "Certificate expiration"
      threshold: "30 days before expiration"
      notification: "Compliance team"

    - alert_type: "New critical vulnerability"
      threshold: "CVSS 9.0+ affecting provider"
      notification: "Security team + Provider management"
```

## CIS Controls Context (Informative)

- **Control**: 15 - Service Provider Management
- **Safeguard**: 15.5
- **Safeguard Title**: Assess Service Providers
- **Asset Type**: N/A (Service Providers)
- **Security Function**: Identify

## Related Signals

- CSE-CIS-VENDOR-NO-INVENTORY-001
- CSE-CIS-VENDOR-NO-CLASSIFICATION-002
- CSE-CIS-VENDOR-NO-REQUIREMENTS-003
- CSE-CIS-VENDOR-NO-ASSESSMENT-004
- CSE-CIS-MONITOR-NO-LOGGING-001
- CSE-SOC2-CC9-VENDOR-005

## Notes

### Detection Guidance

This signal can be detected through:

1. **No Monitoring Program**: Organization lacks defined processes for ongoing service provider monitoring
2. **Missing Security Metrics**: Security performance indicators not tracked or measured
3. **No Automated Monitoring**: Reliance solely on periodic manual reviews without continuous monitoring
4. **Missing Change Notifications**: Organization not notified or tracking provider changes (infrastructure, personnel, certifications, subprocessors)
5. **No Incident Tracking**: Provider security incidents not logged, tracked, or analyzed
6. **Missing Business Reviews**: No regular security-focused reviews or meetings with critical providers
7. **No Threat Intelligence**: Organization not monitoring for threats, breaches, or vulnerabilities affecting providers
8. **Compliance Drift**: No monitoring of ongoing compliance with contractual security requirements

### Monitoring Components

Effective service provider monitoring programs include:

**Continuous/Automated Monitoring**
- Security rating services (BitSight, SecurityScorecard, Panorays)
- Certificate and compliance status monitoring
- Vulnerability and threat intelligence feeds
- Dark web and breach disclosure monitoring
- News and public information monitoring
- External attack surface scanning

**Performance Metrics and KPIs**
- Security incident frequency and severity
- Mean time to detect and respond to incidents
- Vulnerability remediation timeframes
- Patch management compliance rates
- Access review completion rates
- Backup and recovery test success rates
- Security training completion rates
- Audit finding remediation rates

**Regular Reviews and Reporting**
- Monthly/quarterly security scorecards
- Quarterly business reviews with security component
- Annual comprehensive security reviews
- Executive risk reporting
- Trend analysis and benchmarking

**Change Management**
- Notification of infrastructure changes
- Notification of security control changes
- Subprocessor/subcontractor additions or changes
- Certification and compliance status changes
- Material security incidents or breaches
- Changes in key personnel
- Merger, acquisition, or ownership changes

**Incident and Issue Tracking**
- Security incidents affecting the organization
- Provider security breaches or incidents
- SLA violations and remediation
- Audit findings and corrective actions
- Regulatory actions or violations
- Customer complaints related to provider

**Threat Intelligence**
- Provider-specific threat intelligence
- Industry and sector threat alerts
- Emerging vulnerabilities affecting provider technology
- Dark web mentions or credential exposures
- Ransomware or targeted attack intelligence

### Monitoring Frequency by Classification

**Tier 1 - Critical/High Risk**
- Continuous automated monitoring
- Monthly security scorecard reviews
- Quarterly business reviews with security focus
- Immediate incident notification and response

**Tier 2 - Moderate Risk**
- Weekly or monthly automated monitoring
- Quarterly security scorecard reviews
- Semi-annual business reviews
- 24-48 hour incident notification

**Tier 3 - Low Risk**
- Monthly or quarterly automated monitoring
- Annual security reviews
- Material incident notification as-needed

### Integration Points

Vendor monitoring should integrate with:

- Risk management programs and risk registers
- Incident response and security operations
- Compliance and audit programs
- Business continuity and disaster recovery planning
- Procurement and contract management
- Executive and board reporting

### Remediation Priority

This IG3 control is critical for organizations with mature security programs and critical service provider dependencies. Ongoing monitoring enables organizations to:

- Detect security degradation or compliance drift between assessments
- Respond promptly to provider security incidents
- Identify and manage emerging risks in real-time
- Validate ongoing compliance with contractual obligations
- Support continuous improvement of vendor security
- Provide current risk information for decision-making
- Demonstrate due diligence and active risk management
- Meet regulatory expectations for ongoing vendor oversight

Organizations should implement risk-based monitoring that balances automation for efficiency with human review for critical decisions. Monitoring should be proportional to provider classification and the criticality of services provided.
