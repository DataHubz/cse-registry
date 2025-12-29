# CSE-CIS-DATA-NO-DLP-008

**Data Loss Prevention Missing**

## Signal Overview

| Field           | Value                          |
|-----------------|--------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-DLP-008`     |
| Domain          | CIS                            |
| Category        | DATA                           |
| Control         | 03 - Data Protection           |
| Safeguard       | 3.8                            |
| IG Level        | IG2                            |
| Asset Type      | Data                           |
| Security Function | Protect                      |
| Status          | Active                         |
| Introduced In   | 1.0.0                         |

## Description

An organization lacks data loss prevention (DLP) capabilities to detect and prevent unauthorized data exfiltration or sharing of sensitive information.

This signal indicates that there are no technical controls to monitor, detect, or block sensitive data from leaving the organization's control through email, web uploads, removable media, or other channels.

## Applicability

This signal applies to:

- Email systems and gateways
- Web browsers and proxies
- Cloud application access (SaaS)
- File sharing and collaboration platforms
- Endpoint devices (laptops, workstations)
- USB and removable media
- Network data transfers
- Mobile device communications
- Print and fax systems

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Email DLP Controls

```yaml
# Email gateway without DLP
email_gateway:
  spam_filter: enabled
  virus_scanning: enabled
  dlp_scanning: disabled
  # No content inspection for:
  # - Credit card numbers
  # - Social security numbers
  # - Confidential documents
  # - Proprietary information
```

### Unrestricted Cloud Uploads

```text
# Web proxy without DLP
Users can upload to:
- Personal cloud storage (Dropbox, Google Drive)
- File sharing services (WeTransfer, SendAnywhere)
- Code repositories (GitHub, GitLab)
- Social media platforms
# No scanning for sensitive data
# No blocking of unauthorized uploads
```

### Endpoint Without DLP Agent

```powershell
# Windows endpoint configuration
PS> Get-Service -Name *DLP*
# No DLP service found
# Users can:
# - Copy files to USB drives
# - Email attachments unrestricted
# - Take screenshots
# - Print documents
# No monitoring or prevention
```

### Network Traffic Unmonitored

```python
# Application data transfer without DLP
def export_customer_data(customer_id):
    data = database.get_customer_data(customer_id)

    # No DLP inspection before transfer
    response = requests.post(
        "https://external-api.example.com/upload",
        json=data
    )
    # Sensitive data leaves network without controls
    return response
```

## What This Signal Does NOT Assert

- Whether DLP is required for all data types
- The specific DLP solution or vendor required
- Whether compensating controls exist
- The effectiveness of manual monitoring
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.8**: Document Data Flows

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-CLASSIFICATION-007` — Data Classification Missing
- `CSE-CIS-DATA-NO-ENCRYPTION-TRANSIT-010` — Encryption in Transit Missing
- `CSE-CIS-DATA-NO-ENCRYPTION-REMOVABLE-009` — Removable Media Encryption Missing

## Notes

Detection of this signal typically involves:

- Review of DLP solution deployment
- Assessment of email gateway DLP capabilities
- Examination of endpoint DLP agents
- Analysis of web proxy content filtering
- Verification of cloud access security brokers (CASB)
- Review of network DLP monitoring
- Assessment of data exfiltration detection rules
- Examination of removable media controls
- Analysis of DLP policy configurations

The presence of this signal indicates a condition that warrants review in the context of data protection and exfiltration prevention requirements.
