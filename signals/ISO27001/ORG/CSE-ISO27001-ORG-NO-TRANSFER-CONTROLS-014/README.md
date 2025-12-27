# CSE-ISO27001-ORG-NO-TRANSFER-CONTROLS-014

**No Information Transfer Controls**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-TRANSFER-CONTROLS-014` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Rules, procedures, and agreements for secure information transfer are not in place.

## Applicability

- Organizations without policies for secure information transfer
- Environments allowing unencrypted transmission of sensitive data
- Companies lacking secure file transfer mechanisms
- Organizations without agreements specifying security requirements for external transfers
- Environments where physical media transport is not secured

## Examples (Non-Normative)

### No Transfer Security Controls

```yaml
information_transfer:
  policies:
    electronic_transfer: "not_defined"
    physical_media: "not_defined"
    verbal_communication: "not_defined"
  controls:
    encryption_required: false
    secure_channels: []
    approved_methods: null
  external_transfers:
    security_agreements: false
    verification_procedures: false
```

### Insecure Transfer Methods

```yaml
transfer_assessment:
  observed_methods:
    - method: "email"
      encryption: false
      data_types: ["customer_data", "financial_records"]
    - method: "usb_drive"
      encryption: false
      tracking: false
    - method: "cloud_storage"
      authentication: "shared_password"
      access_controls: false
  approved_transfer_policy: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.14 Information transfer**: Rules, procedures or agreements for information transfer should be in place for all types of transfer facilities. This should ensure the security of information transferred within the organization and with any external party.

## Related Signals

- `CSE-ISO27001-ORG-NO-INFO-CLASSIFICATION-012`
- `CSE-ISO27001-ORG-NO-SUPPLIER-SECURITY-019`
