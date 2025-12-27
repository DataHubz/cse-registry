# CSE-ISO27001-ORG-NO-EVIDENCE-COLLECTION-028

**No Evidence Collection Procedures**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-EVIDENCE-COLLECTION-028` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Procedures for identification, collection, and preservation of evidence are not established. Organizations must have documented procedures for properly handling digital and physical evidence related to information security incidents to ensure evidence integrity, maintain chain of custody, and support potential legal or regulatory proceedings.

## Applicability

- Organizations investigating security incidents
- Environments requiring forensic analysis capabilities
- Organizations subject to legal discovery requirements
- Entities pursuing legal action related to security breaches
- Organizations with regulatory compliance obligations
- Businesses handling fraud or criminal investigations

## Examples (Non-Normative)

### No Evidence Handling Procedures

```yaml
incident_investigation:
  evidence_procedures:
    identification: null              # Signal: No evidence identification process
    collection: null                  # Signal: No collection procedures
    preservation: null                # Signal: No preservation methods
    chain_of_custody: null            # Signal: No chain of custody tracking
    storage: null                     # Signal: No secure evidence storage

  forensic_capabilities:
    tools: null                       # Signal: No forensic tools
    trained_personnel: 0              # Signal: No forensic training
    external_resources: null          # Signal: No forensic service providers
```

### Compromised Evidence Integrity

```yaml
security_incident:
  incident_id: "INC-2024-045"
  type: "Data breach investigation"

  evidence_collection:
    server_logs:
      collection_method: "copied while system running"  # Signal: Improper collection
      hash_verification: null                          # Signal: No integrity verification
      chain_of_custody: "not documented"               # Signal: No custody tracking

    disk_image:
      write_protection: false         # Signal: Evidence contamination risk
      forensic_copy: false            # Signal: Not forensically sound
      documentation: "minimal notes"  # Signal: Inadequate documentation

  legal_considerations:
    admissibility_review: null        # Signal: Not evaluated for court use
    legal_counsel_involvement: null   # Signal: No legal guidance
    retention_policy: null            # Signal: No evidence retention
```

## ISO 27001:2022 Context (Informative)

- **A.5.28 Collection of evidence**: Requires organizations to establish and implement procedures for the identification, collection, acquisition, and preservation of evidence. Procedures must ensure evidence integrity, maintain proper chain of custody, and meet legal and regulatory requirements for evidence handling.

## Related Signals

- `CSE-ISO27001-ORG-NO-INCIDENT-RESPONSE-026` (Response to incidents)
- `CSE-ISO27001-ORG-NO-INCIDENT-PLANNING-024` (Incident management planning)
- `CSE-ISO27001-TECH-NO-LOGGING` (If applicable for evidence sources)
