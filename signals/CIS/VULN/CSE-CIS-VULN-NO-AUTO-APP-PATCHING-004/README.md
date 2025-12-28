# CSE-CIS-VULN-NO-AUTO-APP-PATCHING-004

**Automated Application Patching Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-VULN-NO-AUTO-APP-PATCHING-004`  |
| Domain          | CIS                                      |
| Category        | VULN                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not implemented automated application software patch management.

This signal indicates the absence of automated mechanisms to deploy security patches and updates to applications across enterprise assets, potentially leaving applications vulnerable to known exploits.

## Applicability

This signal applies to:

- Web browsers (Chrome, Firefox, Edge, Safari)
- Office productivity suites (Microsoft Office, LibreOffice)
- PDF readers and document viewers
- Email clients
- Collaboration tools (Slack, Teams, Zoom)
- Development tools and IDEs
- Database management systems
- Web servers and application servers
- Third-party applications and utilities

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Manual Application Updates

```text
Applications are updated through:
- Manual user or administrator action
- Ad-hoc update processes
- No centralized update management
- Inconsistent version control
```

### No Application Patch Management Tool

```yaml
# Missing automated application patching
application_patching:
  tool: null
  automation: false
  supported_applications: []
  update_scheduling: null
  version_compliance_monitoring: null
```

### Disabled Auto-Update Features

```javascript
// Browser auto-update disabled
{
  "policies": {
    "UpdateMode": {
      "Value": 0  // Updates disabled
    }
  }
}
```

### No Third-Party Patch Management

```powershell
# No tools like:
# - Ninite
# - Chocolatey with auto-upgrade
# - SCCM application updates
# - Intune application policies
# - PDQ Deploy automation
```

### Container Applications Without Update Automation

```yaml
# Kubernetes deployments without automated image updates
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp
spec:
  template:
    spec:
      containers:
      - name: app
        image: myapp:1.2.3  # Static version, no auto-update
```

### SaaS Application Version Control Missing

```text
SaaS applications without:
- Automated version tracking
- Update notification systems
- API version deprecation monitoring
- Client library update automation
```

## What This Signal Does NOT Assert

- Whether applications are currently patched or unpatched
- Whether manual update processes are effective
- Whether compensating controls exist
- The specific patch management tool to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 7:

- **Control 07**: Continuous Vulnerability Management
- **Safeguard 7.4**: Perform Automated Application Patch Management
- **Implementation Group**: IG1
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Perform application updates on enterprise assets through automated patch management on a monthly, or more frequent, basis."

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-VULN-NO-AUTO-PATCHING-003` — Automated OS patching missing
- `CSE-CIS-VULN-NO-REMEDIATION-002` — Vulnerability remediation process missing
- `CSE-CIS-ASSET-NO-INVENTORY-001` — Asset inventory missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of application patch management tooling
- Assessment of auto-update configurations for installed applications
- Analysis of third-party patch management systems
- Examination of application version compliance reporting
- Review of container image update policies
- Assessment of SaaS application version management

The presence of this signal indicates a condition that warrants review in the context of application patch management requirements.
