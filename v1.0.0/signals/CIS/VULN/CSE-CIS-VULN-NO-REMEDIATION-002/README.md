# CSE-CIS-VULN-NO-REMEDIATION-002

**Vulnerability Remediation Process Missing**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-CIS-VULN-NO-REMEDIATION-002`     |
| Domain          | CIS                                   |
| Category        | VULN                                  |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

An organization lacks a documented and established process for remediating identified vulnerabilities.

This signal indicates the absence of a formal remediation process that defines timelines, prioritization criteria, remediation methods, and verification procedures for addressing discovered vulnerabilities.

## Applicability

This signal applies to:

- Enterprise vulnerability remediation programs
- IT operations and system administration teams
- Application development and DevOps teams
- Cloud infrastructure management
- Third-party managed service providers
- Asset owners across all technology domains

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Remediation Timelines

```text
No defined Service Level Agreements (SLAs) for remediation based on:
- Vulnerability severity (Critical, High, Medium, Low)
- Asset criticality
- Exploitability factors
- Regulatory requirements
```

### No Remediation Workflow

```yaml
# Missing remediation process elements
remediation_process:
  prioritization_criteria: null
  remediation_timelines: null
  assignment_workflow: null
  verification_procedures: null
  exception_handling: null
  escalation_path: null
```

### Undefined Remediation Methods

```text
No documented guidance on acceptable remediation approaches:
- Patching procedures
- Configuration changes
- Compensating controls
- Risk acceptance criteria
- Temporary mitigations
```

### Lack of Tracking Mechanism

```sql
-- No vulnerability tracking system
-- No remediation status tracking
-- No verification of remediation effectiveness
-- No remediation metrics or reporting
```

## What This Signal Does NOT Assert

- Whether discovered vulnerabilities are being remediated
- The effectiveness of any informal remediation activities
- Whether compensating controls exist
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 7:

- **Control 07**: Continuous Vulnerability Management
- **Safeguard 7.2**: Establish and Maintain a Remediation Process
- **Implementation Group**: IG1
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Establish and maintain a risk-based remediation strategy documented in a remediation process, with monthly, or more frequent, reviews."

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-VULN-NO-PROCESS-001` — Vulnerability management process missing
- `CSE-CIS-VULN-NO-RISK-REMEDIATION-007` — Risk-based remediation missing
- `CSE-CIS-VULN-NO-AUTO-PATCHING-003` — Automated OS patching missing

## Notes

Detection of this signal typically involves:

- Review of remediation policies and procedures
- Assessment of vulnerability tracking systems
- Analysis of remediation SLAs and timelines
- Examination of remediation workflows and assignment processes
- Review of remediation verification and validation procedures

The presence of this signal indicates a condition that warrants review in the context of vulnerability remediation requirements.
