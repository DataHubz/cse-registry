# CSE-ISO27001-TECH-NO-VULN-MANAGEMENT-008

**No Vulnerability Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-VULN-MANAGEMENT-008` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Information about technical vulnerabilities is not obtained, exposure evaluated, and measures taken. This signal indicates a lack of systematic vulnerability identification, assessment, and remediation processes.

## Applicability

- Organizations without vulnerability scanning capabilities
- Environments lacking patch management processes
- Systems with unpatched critical vulnerabilities
- Organizations that do not subscribe to security bulletins or threat intelligence
- Environments without defined remediation timelines based on risk

## Examples (Non-Normative)

### No Vulnerability Scanning

```yaml
vulnerability_management:
  scanning:
    frequency: never
    tools_deployed: none
    coverage: 0_percent
  patch_management:
    process_defined: false
    patch_deployment: ad_hoc
    testing: not_performed
  tracking:
    vulnerability_database: not_maintained
    cve_monitoring: disabled
    remediation_sla: undefined
```

### Inadequate Patch Management

```yaml
system_patching:
  operating_systems:
    last_patched: 180_days_ago
    critical_vulnerabilities: 45
  applications:
    patch_testing: skipped
    change_management: bypassed
  network_devices:
    firmware_updates: never
    known_vulnerabilities: not_tracked
```

## ISO 27001:2022 Context (Informative)

- **A.8.8 Management of technical vulnerabilities**: Information about technical vulnerabilities of information systems in use shall be obtained, the organization's exposure to such vulnerabilities shall be evaluated and appropriate measures shall be taken.

## Related Signals

- `CSE-ISO27001-TECH-NO-MALWARE-PROTECTION-007`
- `CSE-ISO27001-TECH-NO-CONFIG-MANAGEMENT-009`
- `CSE-ISO27001-TECH-NO-MONITORING-016`
- `CSE-ISO27001-TECH-NO-LOGGING-015`
