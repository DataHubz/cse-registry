# CSE-GEN-VULN-NO-PATCHING-003

**Patch Management Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-VULN-NO-PATCHING-003`           |
| Domain          | GEN (General)                            |
| Category        | VULN                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No process for evaluating, testing, and applying security patches in a timely manner across systems and applications.

This signal indicates the absence of a systematic patch management program that addresses security updates for operating systems, applications, firmware, and other software components to remediate known vulnerabilities.

## Applicability

This signal applies to:

- Operating systems (Windows, Linux, macOS, Unix)
- Server and endpoint applications
- Network infrastructure devices (routers, switches, firewalls)
- Security appliances and tools
- Firmware and embedded systems
- Virtualization and container platforms
- Database management systems
- Third-party software and libraries

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Patch Management Policy

```text
Indicators of missing patch management:
- No documented patch management policy
- No defined patch evaluation process
- No patch testing procedures
- No patch deployment schedules
- No emergency patching process
- No patch compliance tracking
- No rollback procedures
```

### Missing Patch Infrastructure

```yaml
# Absent patch management components
patch_management:
  patch_repository: null
  deployment_tools: null
  testing_environment: null
  automation_framework: null
  compliance_monitoring: null
  rollback_capability: null
  change_integration: null
```

### No Patch Assessment Process

```python
# Missing patch evaluation workflow
def manage_patches():
    # No patch monitoring
    if not monitors_vendor_advisories():
        return "No vendor security advisory monitoring"

    # No patch evaluation
    if not evaluates_patch_applicability():
        return "No patch applicability assessment"

    # No risk analysis
    if not performs_patch_risk_analysis():
        return "No patch risk evaluation"

    # No testing
    if not has_patch_testing_process():
        return "No patch testing before deployment"

    # No deployment tracking
    if not tracks_patch_deployment():
        return "No patch deployment tracking"
```

### Lack of Patch Automation

```json
{
  "patch_automation": {
    "os_patches": {
      "windows_updates": false,
      "linux_updates": false,
      "automated_deployment": false
    },
    "application_patches": {
      "automated_detection": false,
      "automated_deployment": false
    },
    "third_party_updates": {
      "vulnerability_driven": false,
      "scheduled_updates": false
    }
  }
}
```

### No Patch Compliance Monitoring

```sql
-- Missing patch compliance tracking
-- No database of installed patches
-- No patch baseline definitions
-- No compliance reporting

-- Expected schema not implemented:
-- CREATE TABLE patch_inventory (
--   system_id VARCHAR(100),
--   patch_id VARCHAR(100),
--   patch_name VARCHAR(255),
--   install_date DATE,
--   patch_category VARCHAR(50),
--   severity VARCHAR(20),
--   compliance_status VARCHAR(20)
-- );
```

### Missing SLA and Timelines

```yaml
# No patch deployment timelines defined
patch_sla:
  critical_patches:
    evaluation_deadline: null
    testing_deadline: null
    deployment_deadline: null
  high_severity_patches:
    evaluation_deadline: null
    deployment_deadline: null
  regular_patches:
    deployment_cycle: null
  emergency_patches:
    expedited_process: null
```

### No Integration with Change Management

```text
Patch management gaps:
- No integration with change management process
- No patch deployment approval workflow
- No maintenance window scheduling
- No stakeholder notification process
- No deployment verification procedures
- No post-deployment monitoring
- No incident response for failed patches
```

## What This Signal Does NOT Assert

- Whether systems are currently unpatched
- The specific patching tools or solutions to be used
- Whether manual patching occurs on an ad-hoc basis
- The effectiveness of compensating controls
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Signals

- `CSE-GEN-VULN-NO-VULNERABILITY-MGMT-001` — Vulnerability management program missing
- `CSE-GEN-VULN-NO-SCANNING-002` — Vulnerability scanning missing
- `CSE-GEN-CONFIG-NO-CHANGE-MGMT-001` — Change management missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: Safeguard 7.3 (Automated operating system patch management)
- **CIS Controls**: Safeguard 7.4 (Automated application patch management)
- **CMMC**: SI.L2-3.14.1 (Identify and remediate flaws)
- **NIST CSF**: PR.IP-12 (Vulnerability management plan)
- **PCI DSS**: Requirement 6.3.3 (Patch deployment process)
- **ISO 27001**: A.12.6.1 (Management of technical vulnerabilities)
- **FedRAMP**: SI-2 (Flaw Remediation)
- **HIPAA**: 164.308(a)(5)(ii)(B) (Protection from malicious software)
- **SOC 2**: CC7.2 (Detection and mitigation of system threats)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of patch management policies and procedures
- Assessment of patch deployment tools and infrastructure
- Examination of patch testing environments
- Analysis of patch deployment schedules and timelines
- Review of patch compliance reports and metrics
- Evaluation of emergency patching procedures
- Assessment of integration with change management

A comprehensive patch management program typically includes:
- **Monitoring**: Tracking vendor security advisories and patch releases
- **Assessment**: Evaluating patch applicability and criticality
- **Testing**: Validating patches in non-production environments
- **Deployment**: Systematic rollout according to risk-based timelines
- **Verification**: Confirming successful patch installation
- **Documentation**: Maintaining patch inventory and audit trails
- **Exception Management**: Handling systems that cannot be patched
- **Emergency Process**: Expedited procedures for critical vulnerabilities

The presence of this signal indicates a fundamental gap in the ability to systematically address known security vulnerabilities through timely patching.
