# CSE-CIS-VULN-NO-INTERNAL-SCANNING-005

**Internal Vulnerability Scanning Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-VULN-NO-INTERNAL-SCANNING-005`  |
| Domain          | CIS                                      |
| Category        | VULN                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not implemented automated internal vulnerability scanning for enterprise assets.

This signal indicates the absence of regular, automated scanning of internal network assets to identify vulnerabilities, misconfigurations, and security weaknesses before they can be exploited by attackers.

## Applicability

This signal applies to:

- Internal network servers and workstations
- Cloud infrastructure and virtual machines
- Databases and data stores
- Network devices and appliances
- Web applications and APIs (internal)
- Container environments
- IoT and OT devices
- Internal SaaS applications

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Vulnerability Scanner Deployed

```text
No internal vulnerability scanning tools deployed such as:
- Tenable Nessus
- Qualys VMDR
- Rapid7 InsightVM
- OpenVAS
- AWS Inspector
- Azure Defender for Cloud
- Google Cloud Security Command Center
```

### No Scanning Schedule

```yaml
# Missing internal scanning configuration
internal_scanning:
  scanner: null
  schedule: null
  scan_frequency: null
  asset_coverage: null
  authenticated_scanning: false
  remediation_tracking: false
```

### Manual or Ad-Hoc Scanning Only

```text
Vulnerability scanning performed:
- Manually on an irregular basis
- Only in response to incidents
- Without comprehensive asset coverage
- Without authenticated credential scans
```

### Cloud Infrastructure Without Scanning

```hcl
# AWS environment without automated scanning
# No AWS Inspector enabled
# No third-party scanner integration
# No Security Hub vulnerability findings

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  # No automated vulnerability scanning configured
}
```

### Container Environment Without Scanning

```yaml
# Kubernetes cluster without vulnerability scanning
apiVersion: v1
kind: Namespace
metadata:
  name: production
# No vulnerability scanning tool deployed:
# - No Trivy
# - No Anchore
# - No Aqua Security
# - No Prisma Cloud
```

### No Authenticated Scanning

```python
# Scanner configured without credentials
scanner_config = {
    "scan_type": "unauthenticated",
    # Missing: SSH keys, Windows credentials,
    # API tokens for comprehensive scanning
}
```

## What This Signal Does NOT Assert

- Whether vulnerabilities currently exist in the environment
- Whether manual scanning is being performed
- Whether other security monitoring tools are in use
- The specific scanning tool to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 7:

- **Control 07**: Continuous Vulnerability Management
- **Safeguard 7.5**: Perform Automated Vulnerability Scans of Internal Enterprise Assets
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Identify

**Safeguard Description:** "Perform automated vulnerability scans of internal enterprise assets on a quarterly, or more frequent, basis. Conduct both authenticated and unauthenticated scans, using a SCAP-compliant vulnerability scanning tool."

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-VULN-NO-EXTERNAL-SCANNING-006` — External vulnerability scanning missing
- `CSE-CIS-VULN-NO-PROCESS-001` — Vulnerability management process missing
- `CSE-CIS-VULN-NO-REMEDIATION-002` — Vulnerability remediation process missing

## Notes

Detection of this signal typically involves:

- Review of vulnerability scanning tool deployments
- Assessment of scanning schedules and frequency
- Analysis of scan coverage across asset inventory
- Examination of authenticated vs. unauthenticated scan configurations
- Review of scan result reporting and remediation tracking
- Assessment of cloud-native scanning capabilities

The presence of this signal indicates a condition that warrants review in the context of internal vulnerability scanning requirements.
