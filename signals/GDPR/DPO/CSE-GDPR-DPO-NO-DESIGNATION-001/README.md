# CSE-GDPR-DPO-NO-DESIGNATION-001

**DPO Not Designated**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-DPO-NO-DESIGNATION-001` |
| Domain | GDPR |
| Category | DPO |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data Protection Officer has not been designated when required by Article 37.1.

DPO designation is mandatory for public authorities, large-scale monitoring, or large-scale processing of special categories of data.

## Applicability

- Public authorities and bodies (except courts acting in judicial capacity)
- Core activities require regular and systematic monitoring at large scale
- Large-scale processing of special categories (Art. 9) or criminal data (Art. 10)
- Organizations operating in multiple EU member states

## Examples (Non-Normative)

### No DPO Designation

```yaml
dpo_assessment:
  organization_type: "Public Authority"
  dpo_required: true
  dpo_designated: false
  dpo_contact_published: false
  authority_notified: false
```

### Missing DPO for Large-Scale Monitoring

```
Organization: Online Advertising Platform
  Core Activity: Behavioral tracking and profiling
  Scale: 50 million users across EU
  DPO Required: Yes
  DPO Designated: No
  Processing Commenced: 2023-01-01
```

## GDPR Context (Informative)

- **Art. 37.1**: Controller and processor shall designate DPO in specific cases
- **Art. 37.2**: Group of undertakings may appoint single DPO if accessible from each establishment
- **Art. 37.4**: DPO may be staff member or external service provider

## Related Signals

- `CSE-GDPR-DPO-NO-CONTACT-PUBLISHED-002`
- `CSE-GDPR-DPO-NO-INDEPENDENCE-003`
- `CSE-GDPR-DPO-NO-TASK-RESOURCES-004`
