# CSE-GEN-VULN-NO-PENETRATION-TESTING-005

**Penetration Testing Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-GEN-VULN-NO-PENETRATION-TESTING-005` |
| Domain          | GEN (General)                            |
| Category        | VULN                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

No security testing by simulated attackers to identify exploitable vulnerabilities in systems, applications, and networks.

This signal indicates the absence of penetration testing activities that validate security controls through authorized simulated attacks, attempting to exploit weaknesses in a controlled manner to assess real-world security posture.

## Applicability

This signal applies to:

- External-facing web applications and APIs
- Internal network infrastructure
- Cloud environments and configurations
- Mobile applications (iOS, Android)
- Wireless networks
- Physical security controls
- Social engineering susceptibility
- Red team/purple team exercises

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Penetration Testing Program

```text
Indicators of missing penetration testing:
- No documented penetration testing policy
- No scheduled penetration tests
- No penetration testing vendor or team
- No rules of engagement defined
- No test scoping procedures
- No remediation tracking from pen tests
- No retest verification process
```

### Missing Test Coverage

```yaml
# Absent penetration testing activities
penetration_testing:
  network_testing:
    external_perimeter: false
    internal_network: false
    wireless_networks: false
    frequency: null
  application_testing:
    web_applications: false
    mobile_applications: false
    apis: false
    frequency: null
  specialized_testing:
    cloud_infrastructure: false
    iot_devices: false
    social_engineering: false
    physical_security: false
  red_team_exercises:
    conducted: false
    frequency: null
```

### No Testing Methodology

```python
# Missing penetration testing framework
def penetration_testing_program():
    gaps = []

    # No test planning
    if not has_pentest_methodology():
        gaps.append("No defined testing methodology")

    # No scoping process
    if not performs_test_scoping():
        gaps.append("No test scope definition process")

    # No qualified testers
    if not has_certified_pentesters():
        gaps.append("No qualified penetration testers")

    # No rules of engagement
    if not has_rules_of_engagement():
        gaps.append("No documented rules of engagement")

    # No findings management
    if not tracks_pentest_findings():
        gaps.append("No penetration test findings tracking")

    # No remediation verification
    if not performs_retesting():
        gaps.append("No retest after remediation")

    return gaps
```

### Lack of Testing Schedule

```json
{
  "penetration_testing_schedule": {
    "external_tests": {
      "last_test_date": null,
      "next_scheduled": null,
      "frequency": "none"
    },
    "internal_tests": {
      "last_test_date": null,
      "next_scheduled": null,
      "frequency": "none"
    },
    "application_tests": {
      "last_test_date": null,
      "next_scheduled": null,
      "frequency": "none"
    },
    "cloud_tests": {
      "last_test_date": null,
      "next_scheduled": null,
      "frequency": "none"
    }
  }
}
```

### No Test Documentation

```text
Missing penetration testing documentation:
- No test plans and scopes
- No rules of engagement documents
- No authorization and approval records
- No test reports and findings
- No remediation tracking
- No executive summaries
- No technical details and proof of concepts
- No retest validation reports
```

### Missing Test Types

```bash
#!/bin/bash
# Penetration testing gaps

# No external penetration tests
echo "External network penetration test: Not conducted"

# No web application penetration tests
echo "Web application penetration test: Not conducted"

# No API security testing
echo "API penetration test: Not conducted"

# No social engineering assessments
echo "Social engineering test: Not conducted"

# No wireless security testing
echo "Wireless network penetration test: Not conducted"

# No physical security testing
echo "Physical security assessment: Not conducted"
```

### No Specialized Testing

```yaml
# Advanced penetration testing missing
advanced_testing:
  red_team_operations:
    adversary_simulation: false
    multi_vector_attacks: false
    persistence_testing: false
  purple_team_exercises:
    detection_validation: false
    response_validation: false
    control_effectiveness: false
  assumed_breach_testing:
    internal_threat_simulation: false
    lateral_movement_testing: false
    data_exfiltration_testing: false
  cloud_specific:
    misconfig_exploitation: false
    iam_testing: false
    container_escape_testing: false
```

### No Findings Management

```sql
-- Missing penetration test tracking
-- No database of penetration test results
-- No finding severity classification
-- No remediation status tracking
-- No trend analysis

-- Expected schema not implemented:
-- CREATE TABLE pentest_findings (
--   finding_id UUID PRIMARY KEY,
--   test_date DATE,
--   test_type VARCHAR(50),
--   target_system VARCHAR(255),
--   finding_title VARCHAR(255),
--   severity VARCHAR(20),
--   cvss_score DECIMAL(3,1),
--   status VARCHAR(20),
--   remediation_date DATE,
--   retest_verified BOOLEAN
-- );
```

## What This Signal Does NOT Assert

- Whether vulnerabilities exist in the environment
- The effectiveness of vulnerability scanning
- Whether security assessments occur through other means
- The specific penetration testing methodology to be used
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Signals

- `CSE-GEN-VULN-NO-VULNERABILITY-MGMT-001` — Vulnerability management program missing
- `CSE-GEN-VULN-NO-SCANNING-002` — Vulnerability scanning missing
- `CSE-GEN-INCIDENT-NO-TESTING-001` — Incident response testing missing (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **PCI DSS**: Requirement 11.4.1 (Penetration testing methodology)
- **PCI DSS**: Requirement 11.4.2 (External penetration testing)
- **PCI DSS**: Requirement 11.4.3 (Internal penetration testing)
- **PCI DSS**: Requirement 11.4.7 (Multi-tenant testing)
- **CIS Controls**: Safeguard 18.2 (Penetration tests)
- **NIST CSF**: DE.CM-8 (Vulnerability scans are performed)
- **ISO 27001**: A.12.6.1 (Management of technical vulnerabilities)
- **FedRAMP**: CA-8 (Penetration Testing)
- **CMMC**: CA.L2-3.12.2 (Scan for vulnerabilities)
- **SOC 2**: CC7.1 (Detect vulnerabilities)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of penetration testing policies and procedures
- Assessment of testing schedules and frequency
- Examination of penetration test reports and findings
- Analysis of test scope and coverage
- Review of tester qualifications and certifications
- Evaluation of remediation and retest processes
- Assessment of methodology and standards adherence

Effective penetration testing programs typically include:
- **Planning**: Defining scope, objectives, and rules of engagement
- **Testing**: Executing tests using recognized methodologies (PTES, OWASP, etc.)
- **Reporting**: Documenting findings with technical details and business impact
- **Remediation**: Tracking and addressing identified vulnerabilities
- **Retesting**: Validating that remediation efforts are effective
- **Frequency**: Regular testing based on risk and compliance requirements
- **Coverage**: External, internal, application, cloud, and social engineering
- **Expertise**: Qualified and certified penetration testers

The presence of this signal indicates a gap in validating security controls through real-world attack simulation, which is essential for understanding actual security posture beyond automated scanning.
