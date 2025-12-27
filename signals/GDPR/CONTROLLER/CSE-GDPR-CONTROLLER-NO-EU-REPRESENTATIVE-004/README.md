# CSE-GDPR-CONTROLLER-NO-EU-REPRESENTATIVE-004

**EU Representative Not Designated**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-EU-REPRESENTATIVE-004` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A controller or processor not established in the EU but subject to GDPR has not designated a representative in the European Union as required by Article 27.

The representative must be established in a Member State where data subjects whose data is processed are located.

## Applicability

- Non-EU controllers offering goods/services to EU subjects
- Non-EU processors handling EU personal data
- Organizations monitoring behavior of EU data subjects
- Excludes occasional, non-systematic processing
- Excludes public authorities and bodies

## Examples (Non-Normative)

### Missing EU Representative

```yaml
organization:
  establishment: "United States"
  eu_operations: "Offers services to EU customers"
  gdpr_applicability: true
  eu_representative:
    designated: false
    location: null
    mandate: null
    contact_details: "Not published"
```

### Inadequate Representative Designation

```
Company Profile:
  - Headquarters: Singapore
  - Services: E-commerce platform targeting EU
  - EU Customers: 40% of user base
  - EU Representative: None designated
  - Privacy Policy: Lists only Singapore address
  - Supervisory Authority Contact: No EU point
```

## GDPR Context (Informative)

- **Art. 27.1**: Non-EU controllers/processors must designate representative in the Union
- **Art. 27.3**: Representative shall be mandated to address matters regarding processing
- **Art. 27.4**: Designation does not affect liability of controller/processor

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-POLICY-DOCUMENTATION-002`
- `CSE-GDPR-RIGHTS-NO-TRANSPARENT-COMMUNICATION-001`
- `CSE-GDPR-CONTROLLER-NO-COMPLIANCE-MEASURES-001`
