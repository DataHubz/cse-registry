# CSE-CIS-EMAIL-NO-DMARC-005

**DMARC Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CIS-EMAIL-NO-DMARC-005` |
| Domain | CIS |
| Category | EMAIL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Domain-based Message Authentication, Reporting, and Conformance (DMARC) is not implemented for organizational email domains. Organizations must deploy DMARC policies along with SPF and DKIM to prevent email spoofing, protect brand reputation, and gain visibility into email authentication failures. Without DMARC, attackers can more easily spoof organizational domains in phishing attacks.

## Applicability

- All organizational email domains
- Email infrastructure and mail servers
- DNS management systems
- Third-party email service providers
- Marketing and transactional email systems
- Partner and vendor email integrations

## Examples (Non-Normative)

### No DMARC Implementation

```yaml
email_authentication:
  domain: "example.com"

  spf_record:
    configured: true
    record: "v=spf1 include:_spf.google.com ~all"

  dkim:
    configured: true
    selector: "google"

  dmarc:
    configured: false                        # Signal: No DMARC record
    policy: null                             # Signal: No policy defined
    reporting: null                          # Signal: No reporting configured

findings:
  - No DMARC DNS record found
  - Domain vulnerable to email spoofing
  - No visibility into authentication failures
  - No protection against domain impersonation
```

### Weak DMARC Configuration

```yaml
dmarc_implementation:
  domain: "example.com"

  dmarc_record:
    configured: true
    record: "v=DMARC1; p=none; rua=mailto:dmarc@example.com"

  policy_settings:
    policy: "none"                           # Signal: Policy set to monitoring only
    subdomain_policy: "none"                 # Signal: Subdomains not protected
    percentage: 100
    alignment_mode_spf: "relaxed"
    alignment_mode_dkim: "relaxed"

  reporting:
    aggregate_reports: "dmarc@example.com"
    forensic_reports: null                   # Signal: No forensic reports
    report_monitoring: false                 # Signal: Reports not monitored

  enforcement_status:
    policy_enforcement: "monitoring"         # Signal: Not enforcing rejection
    quarantine_policy_tested: false          # Signal: Not tested
    reject_policy_planned: false             # Signal: No enforcement plan

findings:
  - DMARC policy set to 'none' (monitor only)
  - No progression plan to 'quarantine' or 'reject'
  - Aggregate reports not being analyzed
  - Subdomain spoofing still possible
```

### Incomplete DMARC Deployment

```yaml
multi_domain_organization:
  primary_domain:
    domain: "example.com"
    dmarc_policy: "reject"
    configured: true

  subsidiary_domains:
    - domain: "subsidiary1.com"
      dmarc_policy: null                     # Signal: No DMARC
      configured: false                      # Signal: Not configured

    - domain: "subsidiary2.com"
      dmarc_policy: "none"                   # Signal: Monitoring only
      configured: true

    - domain: "marketing.example.com"
      dmarc_policy: null                     # Signal: Subdomain not protected
      configured: false

  third_party_senders:
    - provider: "SendGrid"
      authorized_in_spf: true
      dkim_configured: true
      dmarc_tested: false                    # Signal: Not tested with DMARC

findings:
  - Inconsistent DMARC policies across domains
  - Some organizational domains lack DMARC
  - Third-party email senders not validated
  - No centralized DMARC management
```

## CIS Controls v8 Context (Informative)

- **CIS Control 9.5**: Implement DMARC
  - **Implementation Group**: IG2
  - **Asset Type**: Network
  - **Security Function**: Protect
  - **Control Description**: To lower the chance of spoofed or modified emails from valid domains, implement DMARC policy and verification, starting with implementing the Sender Policy Framework (SPF) and the DomainKeys Identified Mail (DKIM) standards. Progressively move from monitoring (p=none) to quarantine (p=quarantine) to reject (p=reject) policies as appropriate.

## Related Signals

- `CSE-CIS-EMAIL-NO-FILE-TYPE-BLOCKING-004` (Email attachment security)
- `CSE-CIS-EMAIL-NO-SANDBOX-006` (Email sandboxing)
- `CSE-CIS-EMAIL-NO-DNS-FILTERING-002` (DNS security)
