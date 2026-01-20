# CSE-CIS-EMAIL-NO-SANDBOX-006

**Email Attachment Sandboxing Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-EMAIL-NO-SANDBOX-006` |
| Domain | CIS |
| Category | EMAIL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Email attachment sandboxing capabilities are not deployed to detonate and analyze suspicious files in an isolated environment. Organizations must implement sandbox technology that executes email attachments in a controlled, virtualized environment to detect malicious behavior before delivering files to end users, protecting against zero-day threats and advanced malware.

## Applicability

- Email security gateways and platforms
- Advanced threat protection solutions
- Microsoft 365 Defender/Safe Attachments
- Cloud email security services (Proofpoint, Mimecast)
- On-premises email security appliances
- Integrated email and endpoint protection platforms

## Examples (Non-Normative)

### No Email Sandboxing Deployed

```yaml
email_security_stack:
  gateway: "Microsoft Exchange Online Protection"

  threat_protection:
    antivirus_scanning: true
    signature_based_detection: true
    sandbox_analysis: false                  # Signal: No sandboxing

  attachment_handling:
    static_analysis: true
    dynamic_analysis: false                  # Signal: No dynamic analysis
    behavioral_analysis: false               # Signal: No behavior detection

  advanced_threats:
    zero_day_protection: false               # Signal: No zero-day protection
    evasion_technique_detection: false       # Signal: Can't detect evasion
    polymorphic_malware_detection: false     # Signal: Limited malware detection

findings:
  - Relying solely on signature-based detection
  - No capability to analyze unknown file types
  - Zero-day threats can reach users
  - No insight into attachment behavior
```

### Partial Sandbox Implementation

```yaml
sandbox_solution:
  product: "Proofpoint Targeted Attack Protection"
  deployment_status: "active"

  configuration:
    sandbox_enabled: true
    analysis_depth: "basic"                  # Signal: Limited analysis depth

  file_types_sandboxed:
    - ".exe"
    - ".dll"

  file_types_not_sandboxed:
    - ".pdf"                                 # Signal: PDFs not sandboxed
    - ".docx"                                # Signal: Office docs not sandboxed
    - ".xlsx"                                # Signal: Excel not sandboxed
    - ".pptx"                                # Signal: PowerPoint not sandboxed
    - ".zip"                                 # Signal: Archives not sandboxed
    - ".rtf"                                 # Signal: RTF not sandboxed
    - ".js"                                  # Signal: Scripts not sandboxed

  analysis_settings:
    execution_timeout: "60s"                 # Signal: Short timeout
    os_environments:
      - "Windows 10"                         # Signal: Limited OS coverage
    office_versions: []                      # Signal: No Office environment
    pdf_readers: []                          # Signal: No PDF environment

  delivery_behavior:
    hold_during_analysis: false              # Signal: Files delivered before analysis
    user_notification: false                 # Signal: No user awareness
    admin_alerts: "high_confidence_only"     # Signal: Limited alerting
```

### Inadequate Sandbox Coverage

```yaml
email_threat_protection:
  sandbox_vendor: "Microsoft Defender for Office 365"
  safe_attachments_enabled: true

  coverage_gaps:
    internal_email: false                    # Signal: Internal email not scanned
    forwarded_email: false                   # Signal: Forwards not scanned
    calendar_invites: false                  # Signal: Calendar files not scanned

  policy_configuration:
    default_action: "monitor"                # Signal: Not blocking threats
    unknown_malware_response: "deliver"      # Signal: Unknown threats delivered
    timeout_response: "deliver"              # Signal: Timeouts allowed through

  analysis_limitations:
    file_size_limit: "10MB"                  # Signal: Large files skip sandbox
    analysis_time_limit: "5min"              # Signal: Limited analysis time
    reanalysis_enabled: false                # Signal: Files not rechecked

  integration:
    threat_intelligence_sharing: false       # Signal: No TI integration
    siem_integration: false                  # Signal: No SIEM alerts
    incident_response_workflow: null         # Signal: No IR integration

findings:
  - Sandbox only analyzes external emails
  - Large attachments bypass sandbox analysis
  - Suspicious files delivered during analysis
  - No retroactive scanning of delivered emails
  - Sandbox detections not feeding threat intelligence
```

## CIS Controls v8 Context (Informative)

- **CIS Control 9.6**: Block Unnecessary File Types
  - **Implementation Group**: IG2
  - **Asset Type**: Applications
  - **Security Function**: Protect
  - **Control Description**: Block unnecessary file types attempting to enter the enterprise's email gateway. Use sandboxing to analyze and block inbound email attachments with suspicious behavior. Organizations should implement sandbox analysis for email attachments to detect malicious behavior before files reach end users.

## Related Signals

- `CSE-CIS-EMAIL-NO-FILE-TYPE-BLOCKING-004` (Email file type blocking)
- `CSE-CIS-EMAIL-NO-DMARC-005` (Email authentication)
- `CSE-CIS-EMAIL-NO-URL-FILTERING-003` (URL filtering in emails)
