# CSE-GEN-VULN-NO-SCANNING-002

**Vulnerability Scanning Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-VULN-NO-SCANNING-002`           |
| Domain          | GEN (General)                            |
| Category        | VULN                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Systems and applications are not regularly scanned for known security vulnerabilities using automated vulnerability assessment tools.

This signal indicates the absence of routine vulnerability scanning activities that identify security weaknesses, misconfigurations, missing patches, and other technical vulnerabilities in IT infrastructure and applications.

## Applicability

This signal applies to:

- Enterprise networks and systems
- Web applications and APIs
- Mobile applications
- Cloud infrastructure (IaaS, PaaS, SaaS)
- Database servers and data stores
- Network devices and security appliances
- Operating systems and middleware
- Container images and orchestration platforms

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Vulnerability Scanner Deployed

```text
Indicators of missing vulnerability scanning:
- No vulnerability scanning tool licenses
- No scanner infrastructure deployed
- No scan schedules configured
- No scan results repository
- No scan agent deployment on endpoints
- No API or cloud scanning integration
```

### Missing Scan Coverage

```yaml
# Incomplete or missing scan coverage
vulnerability_scanning:
  network_scanning:
    authenticated: false
    unauthenticated: false
    frequency: null
  application_scanning:
    dast: false  # Dynamic Application Security Testing
    sast: false  # Static Application Security Testing
    sca: false   # Software Composition Analysis
  cloud_scanning:
    infrastructure: false
    configuration: false
    container_images: false
  endpoint_scanning:
    agent_based: false
    agentless: false
```

### No Regular Scan Schedule

```json
{
  "scan_configuration": {
    "internal_network": {
      "last_scan": null,
      "scheduled": false,
      "frequency": "none"
    },
    "external_perimeter": {
      "last_scan": null,
      "scheduled": false,
      "frequency": "none"
    },
    "web_applications": {
      "last_scan": null,
      "scheduled": false,
      "frequency": "none"
    }
  }
}
```

### Missing Scan Types

```python
# Vulnerability scanning gaps
def check_scanning_coverage():
    missing_scans = []

    # Network-based scanning
    if not has_network_vulnerability_scanner():
        missing_scans.append("Network vulnerability scanning")

    # Authenticated scanning
    if not performs_credentialed_scans():
        missing_scans.append("Authenticated/credentialed scanning")

    # Web application scanning
    if not has_web_app_scanner():
        missing_scans.append("Web application vulnerability scanning")

    # Container scanning
    if not scans_container_images():
        missing_scans.append("Container image scanning")

    # Cloud configuration scanning
    if not scans_cloud_configs():
        missing_scans.append("Cloud security posture scanning")

    # Database scanning
    if not scans_databases():
        missing_scans.append("Database vulnerability scanning")

    return missing_scans
```

### Lack of Scan Automation

```terraform
# Missing scanning infrastructure
# No automated vulnerability scanning configured

# resource "aws_inspector2_enabler" "vuln_scanning" {
#   account_ids    = [data.aws_caller_identity.current.account_id]
#   resource_types = ["EC2", "ECR", "LAMBDA"]
# }

# No scheduled scans in CI/CD
# No image scanning before deployment
# No dependency scanning in build pipeline
```

### No Scan Result Processing

```sql
-- Missing vulnerability scan tracking
-- No database table for scan results
-- No vulnerability findings repository
-- No scan history tracking
-- No false positive management
-- No remediation tracking integration

-- Expected schema not implemented:
-- CREATE TABLE vulnerability_scans (
--   scan_id UUID PRIMARY KEY,
--   scan_date TIMESTAMP,
--   scan_type VARCHAR(50),
--   target_systems TEXT[],
--   findings_count INTEGER,
--   scan_status VARCHAR(20)
-- );
```

## What This Signal Does NOT Assert

- Whether vulnerabilities exist in the environment
- The effectiveness of manual security assessments
- Whether compensating detective controls are in place
- The specific scanning tools or vendors to be used
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Signals

- `CSE-GEN-VULN-NO-VULNERABILITY-MGMT-001` — Vulnerability management program missing
- `CSE-GEN-VULN-NO-PATCHING-003` — Patch management missing
- `CSE-GEN-CONFIG-NO-SCANNING-001` — Configuration scanning missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **PCI DSS**: Requirement 11.3.1 (Internal vulnerability scans)
- **PCI DSS**: Requirement 11.3.2 (External vulnerability scans)
- **CIS Controls**: Safeguard 7.3 (Perform automated operating system patch management)
- **CIS Controls**: Safeguard 7.4 (Perform automated application patch management)
- **NIST CSF**: DE.CM-8 (Vulnerability scans are performed)
- **ISO 27001**: A.12.6.1 (Management of technical vulnerabilities)
- **CMMC**: CA.L2-3.12.1 (Identify, report, and correct system flaws)
- **FedRAMP**: RA-5 (Vulnerability Scanning)
- **HITRUST**: 10.m (Vulnerability Management)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of vulnerability scanning tool deployments
- Assessment of scan schedules and frequency
- Examination of scan coverage (systems, applications, networks)
- Analysis of scan types (authenticated, unauthenticated, specialized)
- Review of scan result repositories and reporting
- Evaluation of scan automation and integration
- Assessment of scanner maintenance and updates

Effective vulnerability scanning programs typically include:
- **Network scanning**: Authenticated and unauthenticated scans
- **Application scanning**: DAST, SAST, and dependency analysis
- **Cloud scanning**: Configuration and posture assessment
- **Container scanning**: Image and runtime vulnerability detection
- **Frequency**: Regular scheduled scans and event-driven scans
- **Coverage**: All in-scope systems, applications, and infrastructure
- **Integration**: Automated workflows with ticketing and patch management

The presence of this signal indicates a critical gap in the ability to proactively identify security vulnerabilities before they can be exploited.
