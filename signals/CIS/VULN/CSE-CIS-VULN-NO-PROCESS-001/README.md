# CSE-CIS-VULN-NO-PROCESS-001

**Vulnerability Management Process Missing**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-CIS-VULN-NO-PROCESS-001`       |
| Domain          | CIS                                 |
| Category        | VULN                                |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

An organization lacks a documented and established vulnerability management process.

This signal indicates the absence of a formal, repeatable process for identifying, classifying, remediating, and mitigating vulnerabilities across the enterprise's technology assets.

## Applicability

This signal applies to:

- Enterprise vulnerability management programs
- Security operations teams
- IT asset owners and administrators
- Cloud infrastructure environments
- Application development teams
- Third-party service providers

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Vulnerability Management Policy

```text
No documented policy or procedure exists that defines:
- Vulnerability identification methods
- Classification and prioritization criteria
- Remediation timelines and SLAs
- Roles and responsibilities
- Reporting and escalation procedures
```

### Ad-Hoc Vulnerability Handling

```text
Vulnerabilities are addressed reactively without:
- Systematic scanning schedules
- Defined remediation workflows
- Tracking mechanisms
- Success metrics or KPIs
```

### No Process Documentation

```yaml
# Missing process elements
vulnerability_management:
  policy: null
  procedures: null
  workflows: null
  roles_responsibilities: null
  metrics: null
```

## What This Signal Does NOT Assert

- Whether vulnerabilities currently exist in the environment
- The effectiveness of any informal vulnerability handling
- Whether other security controls compensate for the missing process
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 7:

- **Control 07**: Continuous Vulnerability Management
- **Safeguard 7.1**: Establish and Maintain a Vulnerability Management Process
- **Implementation Group**: IG1
- **Asset Type**: Applications
- **Security Function**: Identify

**Safeguard Description:** "Establish and maintain a documented vulnerability management process for enterprise assets. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard."

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-VULN-NO-REMEDIATION-002` — Vulnerability remediation process missing
- `CSE-CIS-VULN-NO-INTERNAL-SCANNING-005` — Internal vulnerability scanning missing
- `CSE-CIS-VULN-NO-EXTERNAL-SCANNING-006` — External vulnerability scanning missing

## Notes

Detection of this signal typically involves:

- Review of security policies and procedures documentation
- Interviews with security and IT operations teams
- Assessment of vulnerability management tooling and workflows
- Examination of vulnerability tracking and reporting mechanisms

The presence of this signal indicates a condition that warrants review in the context of vulnerability management requirements.
