# CSE-CIS-EMAIL-NO-FILE-TYPE-BLOCKING-004

**Email File Type Blocking Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-EMAIL-NO-FILE-TYPE-BLOCKING-004` |
| Domain | CIS |
| Category | EMAIL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Email systems do not block or quarantine high-risk file types commonly used to deliver malware. Organizations must configure email security gateways to automatically block or quarantine dangerous file types and extensions that are frequently exploited in phishing and malware campaigns, reducing the attack surface from email-based threats.

## Applicability

- Email security gateways and filters
- Microsoft 365/Exchange Online Protection
- Third-party email security solutions
- Anti-malware scanning systems
- Email attachment handling policies
- Security awareness training programs

## Examples (Non-Normative)

### No Email File Type Restrictions

```yaml
email_security:
  gateway_solution: "Exchange Online Protection"

  attachment_filtering:
    file_type_blocking_enabled: false        # Signal: No file type blocking
    blocked_extensions: []                   # Signal: No blocked extensions
    malware_scanning: true

  configuration:
    allow_executables: true                  # Signal: .exe files allowed
    allow_scripts: true                      # Signal: Scripts allowed
    allow_macros: true                       # Signal: Macro files allowed
    allow_archives: true                     # Signal: No archive restrictions

findings:
  - Users receiving .exe, .scr, .bat files via email
  - No restrictions on compressed archives (.zip, .rar)
  - Office documents with macros unrestricted
  - No policy for handling unknown file types
```

### Incomplete File Type Blocking

```yaml
email_security_gateway:
  vendor: "Proofpoint"
  deployment: "active"

  blocked_file_types:
    - ".exe"
    - ".com"

  risky_types_not_blocked:
    - ".scr"                                 # Signal: Screen savers allowed
    - ".bat"                                 # Signal: Batch files allowed
    - ".cmd"                                 # Signal: Command scripts allowed
    - ".vbs"                                 # Signal: VBScript allowed
    - ".js"                                  # Signal: JavaScript allowed
    - ".jar"                                 # Signal: Java archives allowed
    - ".ps1"                                 # Signal: PowerShell allowed
    - ".hta"                                 # Signal: HTML applications allowed
    - ".wsf"                                 # Signal: Windows Script Files allowed
    - ".msi"                                 # Signal: Installers allowed
    - ".lnk"                                 # Signal: Shortcuts allowed
    - ".iso"                                 # Signal: Disk images allowed

  office_files:
    block_macros: false                      # Signal: Macros not blocked
    macro_enabled_extensions:
      - ".docm"                              # Signal: Allowed
      - ".xlsm"                              # Signal: Allowed
      - ".pptm"                              # Signal: Allowed

  archive_handling:
    scan_archives: true
    block_encrypted_archives: false          # Signal: Password-protected allowed
    block_nested_archives: false             # Signal: Nested archives allowed
    max_archive_depth: null                  # Signal: No depth limit

user_notifications:
  blocked_file_notification: false           # Signal: No user notification
  admin_alerts: false                        # Signal: No admin alerts
```

## CIS Controls v8 Context (Informative)

- **CIS Control 9.4**: Restrict Unnecessary or Unauthorized Browser and Email Client Extensions
  - **Implementation Group**: IG2
  - **Asset Type**: Applications
  - **Security Function**: Protect
  - **Control Description**: Restrict, either through uninstalling or disabling, any unauthorized or unnecessary browser or email client plugins, extensions, and add-on applications. Block or quarantine email attachments with file extensions that are commonly used to transmit malware. This includes executable files, scripts, and other potentially dangerous file types.

## Related Signals

- `CSE-CIS-EMAIL-NO-SANDBOX-006` (Email attachment sandboxing)
- `CSE-CIS-EMAIL-NO-DMARC-005` (Email authentication controls)
- `CSE-CIS-EMAIL-NO-URL-FILTERING-003` (URL filtering in emails)
