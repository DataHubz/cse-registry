# CSE-CMMC-CONFIG-NO-CHANGE-CONTROL-002

**Configuration Change Control Not Implemented**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CMMC-CONFIG-NO-CHANGE-CONTROL-002`    |
| Domain          | CMMC                                       |
| Category        | CONFIG                                     |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Changes to system configurations are not tracked, reviewed, or controlled through a formal change management process.

This signal indicates that configuration modifications may occur without documentation, approval, or the ability to audit who made changes and when.

## Applicability

This signal applies to:

- Infrastructure configuration changes
- Application configuration modifications
- Network device configuration updates
- Cloud resource changes
- Security policy modifications
- Version control for infrastructure-as-code
- Configuration drift detection

## Examples (Non-Normative)

### Direct Production Changes Without Version Control

```bash
# Manual configuration change with no tracking
$ sudo vim /etc/nginx/nginx.conf
# No commit, no review, no audit trail
```

### Cloud Console Changes Without Audit

```json
{
  "cloudtrail": {
    "enabled": false
  }
}
```

### No Infrastructure-as-Code

```
# Manual ClickOps in cloud console
# No Terraform, CloudFormation, or other IaC
# Changes not version controlled
```

## What This Signal Does NOT Assert

- Whether unauthorized changes have occurred
- The impact of configuration changes
- Whether changes are appropriate
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **CM.L2-3.4.3**: Track, review, approve or disapprove, and log changes to organizational systems
- **CM.L2-3.4.4**: Analyze the security impact of changes prior to implementation
- **CM.L2-3.4.5**: Define, document, approve, and enforce physical and logical access restrictions associated with changes to organizational systems

## Related Signals

- `CSE-CMMC-CONFIG-NO-BASELINE-001` — Security Configuration Baseline Not Defined
- `CSE-CMMC-AUDIT-NO-LOGGING-001` — Audit Logging Not Enabled
