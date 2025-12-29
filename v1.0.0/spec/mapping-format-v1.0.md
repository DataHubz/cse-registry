# CSE Mapping Format Specification
**Version 1.0**

**Status:** Stable
**Date:** 2025
**Canonical URL:** https://cse-registry.org/spec/mapping-format-v1.0

---

## 1. Introduction

This specification defines the format for **CSE Mappings** — machine-readable relationships between CSE signals and external framework controls, as well as relationships between signals themselves.

Mappings enable:
- Cross-framework compliance correlation
- Automated gap analysis
- Evidence requirement discovery
- Multi-framework reporting from single signal sets

Mappings are **separate artifacts** from signal definitions, ensuring signal stability while allowing mapping evolution.

---

## 2. Scope

This specification covers:
- Mapping data model and required fields
- Relationship type semantics
- Provenance and confidence model
- Versioning rules
- Framework and control reference formats

This specification does **not** cover:
- Signal definitions (see `signal-format-v1.0.md`)
- Registry structure (see `registry-format-v1.0.md`)
- Implementation guidance for consuming mappings

---

## 3. Normative Language

The key words **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** in this document are to be interpreted as described in RFC 2119.

---

## 4. Core Concepts

### 4.1 Mapping

A **Mapping** is a directional relationship between a source and a target, where:
- The **source** is always a CSE signal
- The **target** is either an external control or another CSE signal

Mappings answer questions like:
- "What controls does this signal address?"
- "What signals relate to this control?"
- "Which GEN signal corresponds to this domain-specific signal?"

### 4.2 Relationship

A **Relationship** defines the semantic connection between source and target using formal set-theoretic concepts.

### 4.3 Provenance

**Provenance** declares the origin and authority of a mapping, enabling consumers to assess trustworthiness.

### 4.4 Framework

A **Framework** is an external compliance standard, regulation, or control catalog that defines controls.

### 4.5 Control

A **Control** is a specific requirement, safeguard, or practice defined within a framework.

---

## 5. Mapping Data Model

### 5.1 Mapping Object

A mapping object MUST contain the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | MUST | Unique mapping identifier |
| `source` | object | MUST | Source reference (CSE signal) |
| `target` | object | MUST | Target reference (control or signal) |
| `relationship` | string | MUST | Relationship type |
| `provenance` | object | MUST | Origin and authority |
| `metadata` | object | MUST | Lifecycle metadata |

A mapping object MAY contain the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `confidence` | number | MAY | Confidence score (0.0–1.0) |
| `justification` | string | MAY | Human-readable rationale |

### 5.2 Mapping Identifier Format

Mapping identifiers MUST conform to one of the following patterns:

**Signal-to-Control Mapping:**
```
MAP-<CSE-ID>-TO-<FRAMEWORK>-<CONTROL-ID>
```

**Signal-to-Signal Mapping (Equivalence):**
```
EQ-<CSE-ID>-TO-<CSE-ID>
```

Examples:
```
MAP-CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001-TO-CMMC-AC.L2-3.1.1
EQ-CSE-GEN-AUTH-NO-MFA-002-TO-CSE-CMMC-IDENTITY-NO-MFA-001
```

### 5.3 Source Object

The source object MUST contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | MUST | Always `"cse-signal"` |
| `id` | string | MUST | CSE signal identifier |
| `version` | string | MAY | CSE registry version |

### 5.4 Target Object

The target object MUST contain a `type` field with one of the following values:

#### 5.4.1 Control Target

When `type` is `"control"`:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | MUST | `"control"` |
| `framework` | string | MUST | Framework identifier |
| `version` | string | MUST | Framework version |
| `id` | string | MUST | Control identifier within framework |
| `title` | string | MAY | Control title for display |

#### 5.4.2 Signal Target

When `type` is `"cse-signal"`:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | MUST | `"cse-signal"` |
| `id` | string | MUST | CSE signal identifier |
| `version` | string | MAY | CSE registry version |

---

## 6. Relationship Types

Relationships are based on formal set theory, following the model established by NIST OSCAL.

### 6.1 Defined Relationships

| Type | Symbol | Formal Definition |
|------|--------|-------------------|
| `equivalent` | A ≡ B | A and B have identical scope and meaning |
| `subset` | A ⊂ B | A is fully contained within B; B is broader |
| `superset` | A ⊃ B | A fully contains B; A is broader |
| `intersects` | A ∩ B ≠ ∅ | A and B overlap but neither contains the other |
| `related` | A ~ B | Conceptual relationship without formal overlap |

### 6.2 Relationship Semantics

#### 6.2.1 equivalent

The source signal and target control/signal address **exactly the same** requirement.

Use when:
- A domain-specific signal directly corresponds to a specific control
- A GEN signal is the canonical form of a domain-specific signal

Example: `CSE-CMMC-IDENTITY-NO-MFA-001` is `equivalent` to CMMC IA.L2-3.5.3

#### 6.2.2 subset

The source signal addresses **part of** the target control's scope.

Use when:
- A signal covers one aspect of a multi-part control
- Multiple signals together would satisfy the control

Example: `CSE-GEN-AUDIT-NO-LOGGING-001` is a `subset` of ISO 27001 A.8.15 (which covers logging, monitoring, and alerting)

#### 6.2.3 superset

The source signal's scope **exceeds** the target control's requirements.

Use when:
- A signal covers more than what a control requires
- Satisfying the signal necessarily satisfies the control

Example: A comprehensive encryption signal might be a `superset` of a control requiring only transit encryption

#### 6.2.4 intersects

The source signal and target control have **partial overlap** but neither fully contains the other.

Use when:
- Some aspects of the signal address the control
- Other aspects of both are unrelated

Example: A signal about access logging `intersects` with a control about audit trails that also requires retention

#### 6.2.5 related

The source signal is **conceptually connected** to the target but without formal semantic overlap.

Use when:
- The signal supports achieving the control indirectly
- The relationship is informative rather than demonstrable

Example: A signal about security training is `related` to controls about secure development

### 6.3 Relationship Selection Guidance

When determining relationship type:

1. Start with the **most specific** relationship that applies
2. Prefer `equivalent` or `subset` over `intersects` when possible
3. Use `related` only when no formal overlap exists
4. Consider the **normative text** of both signal and control

---

## 7. Provenance Model

### 7.1 Provenance Object

The provenance object MUST contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `source` | string | MUST | Provenance source type |

The provenance object MAY contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `authority` | string | MAY | Authoritative body or organization |
| `reference` | string | MAY | URL to source documentation |
| `reviewed_date` | string | MAY | Date of last expert review (ISO 8601) |
| `reviewer` | string | MAY | Reviewer identifier or organization |

### 7.2 Provenance Source Types

| Type | Definition | Typical Confidence |
|------|------------|-------------------|
| `authoritative` | From framework authority or official crosswalk | 0.95–1.00 |
| `expert` | Curated by domain experts with justification | 0.80–0.94 |
| `derived` | Algorithmically inferred from definitions | 0.60–0.79 |
| `community` | Community-contributed, may lack review | 0.40–0.59 |

### 7.3 Confidence Score

The `confidence` field is a floating-point number from 0.0 to 1.0.

Interpretation:

| Range | Meaning |
|-------|---------|
| 0.95–1.00 | Verified, authoritative mapping |
| 0.80–0.94 | High confidence, expert-derived |
| 0.60–0.79 | Moderate confidence, derived or inferred |
| 0.40–0.59 | Lower confidence, review recommended |
| < 0.40 | Experimental or disputed |

Confidence SHOULD align with provenance source type but MAY deviate with justification.

---

## 8. Metadata Model

### 8.1 Metadata Object

The metadata object MUST contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `created` | string | MUST | Creation timestamp (ISO 8601) |
| `status` | string | MUST | Mapping status |

The metadata object MAY contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `updated` | string | MAY | Last update timestamp (ISO 8601) |
| `deprecated_by` | string | MAY | Replacement mapping ID if deprecated |
| `notes` | string | MAY | Additional context |

### 8.2 Status Values

| Status | Meaning |
|--------|---------|
| `active` | Mapping is current and valid |
| `review` | Mapping is under review, use with caution |
| `deprecated` | Mapping is superseded, retained for history |

---

## 9. Framework Reference Format

### 9.1 Framework Object

Framework definitions MUST contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | MUST | Unique framework identifier |
| `name` | string | MUST | Human-readable name |
| `version` | string | MUST | Framework version |
| `authority` | string | MUST | Issuing organization |

Framework definitions MAY contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `effective_date` | string | MAY | Date framework became effective |
| `supersedes` | string | MAY | Previous version identifier |
| `source_url` | string | MAY | Official framework URL |
| `control_count` | integer | MAY | Number of controls defined |

### 9.2 Framework Identifier Format

Framework identifiers MUST be uppercase alphanumeric with optional hyphens and version suffix:

```
<FRAMEWORK-NAME>-<VERSION>
```

Examples:
```
CMMC-2.0
ISO27001-2022
NIST-CSF-2.0
PCI-DSS-4.0
SOC2-2017
```

---

## 10. Control Reference Format

### 10.1 Control Object

Control definitions MUST contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | MUST | Control identifier within framework |
| `framework` | string | MUST | Parent framework identifier |
| `title` | string | MUST | Control title |

Control definitions MAY contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | MAY | Control description text |
| `domain` | string | MAY | Control family or domain |
| `level` | string | MAY | Maturity or implementation level |
| `parent` | string | MAY | Parent control ID (for hierarchies) |
| `children` | array | MAY | Child control IDs |
| `source_reference` | string | MAY | Original source (e.g., NIST SP reference) |

### 10.2 Control Identifier Format

Control identifiers SHOULD preserve the original framework's notation:

Examples:
```
AC.L2-3.1.1      (CMMC)
A.8.24           (ISO 27001)
PR.AC-1         (NIST CSF)
3.5.1           (PCI DSS)
CC6.1           (SOC 2)
```

---

## 11. Versioning

### 11.1 Triple Versioning Model

Mappings operate under a triple versioning model:

1. **CSE Registry Version** — Version of signal definitions
2. **Framework Version** — Version of target framework
3. **Mapping Dataset Version** — Version of the mapping collection

### 11.2 Mapping Dataset Versioning

Mapping datasets follow semantic versioning:

- **MAJOR** — Breaking changes to mapping format or schema
- **MINOR** — New mappings or frameworks added
- **PATCH** — Corrections to existing mappings

### 11.3 Compatibility Rules

- Mappings MUST declare the CSE registry version they reference
- Mappings MUST declare the framework version they target
- Mappings SHOULD remain valid across patch-level registry updates
- Mappings MAY require update for minor/major registry changes

---

## 12. Dataset Structure

### 12.1 Index File

Each mapping dataset MUST include an `index.json` with:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `version` | string | MUST | Dataset version |
| `cse_registry_version` | string | MUST | Referenced CSE registry version |
| `created` | string | MUST | Creation timestamp |
| `updated` | string | MUST | Last update timestamp |
| `statistics` | object | MUST | Dataset statistics |
| `frameworks` | array | MUST | List of included frameworks |

### 12.2 Organization Options

Mapping datasets MAY be organized by:
- **CSE Domain** — All mappings for signals in a domain
- **Target Framework** — All mappings to a specific framework
- **Complete** — All mappings in a single file

All organizations MUST contain identical mapping data, differing only in arrangement.

---

## 13. Validation

### 13.1 Schema Validation

Mappings MUST validate against the JSON schemas:
- `mapping.schema.json` — Individual mapping entries
- `framework.schema.json` — Framework definitions
- `control.schema.json` — Control definitions

### 13.2 Referential Integrity

- Source signal IDs MUST exist in the referenced CSE registry version
- Target control IDs MUST exist in the referenced framework definition
- Target signal IDs (for equivalence mappings) MUST exist in the CSE registry

### 13.3 Consistency Rules

- A mapping ID MUST be unique within a dataset
- Relationship types MUST be from the defined set
- Provenance source MUST be from the defined set
- Status MUST be from the defined set

---

## 14. Examples

### 14.1 Signal-to-Control Mapping

```json
{
  "id": "MAP-CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001-TO-CMMC-AC.L2-3.1.1",
  "source": {
    "type": "cse-signal",
    "id": "CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001",
    "version": "1.0.0"
  },
  "target": {
    "type": "control",
    "framework": "CMMC-2.0",
    "version": "2.0",
    "id": "AC.L2-3.1.1",
    "title": "Authorized Access Control"
  },
  "relationship": "subset",
  "confidence": 0.95,
  "provenance": {
    "source": "authoritative",
    "authority": "CMMC-AB",
    "reference": "https://dodcio.defense.gov/CMMC/",
    "reviewed_date": "2025-01-15"
  },
  "justification": "Signal addresses unauthorized administrative access, a specific violation of the authorized access control requirement.",
  "metadata": {
    "created": "2025-01-15T00:00:00Z",
    "status": "active"
  }
}
```

### 14.2 Signal-to-Signal Equivalence

```json
{
  "id": "EQ-CSE-GEN-AUTH-NO-MFA-002-TO-CSE-CMMC-IDENTITY-NO-MFA-001",
  "source": {
    "type": "cse-signal",
    "id": "CSE-GEN-AUTH-NO-MFA-002",
    "version": "1.0.0"
  },
  "target": {
    "type": "cse-signal",
    "id": "CSE-CMMC-IDENTITY-NO-MFA-001"
  },
  "relationship": "equivalent",
  "confidence": 1.0,
  "provenance": {
    "source": "authoritative",
    "authority": "CSE-Registry",
    "reviewed_date": "2025-01-15"
  },
  "justification": "GEN signal is the framework-agnostic canonical form of the CMMC-specific MFA signal.",
  "metadata": {
    "created": "2025-01-15T00:00:00Z",
    "status": "active"
  }
}
```

### 14.3 Cross-Framework Mapping via GEN

```json
{
  "id": "MAP-CSE-GEN-CRYPTO-NO-ENCRYPTION-REST-001-TO-ISO27001-A.8.24",
  "source": {
    "type": "cse-signal",
    "id": "CSE-GEN-CRYPTO-NO-ENCRYPTION-REST-001",
    "version": "1.0.0"
  },
  "target": {
    "type": "control",
    "framework": "ISO27001-2022",
    "version": "2022",
    "id": "A.8.24",
    "title": "Use of cryptography"
  },
  "relationship": "subset",
  "confidence": 0.85,
  "provenance": {
    "source": "expert",
    "reviewed_date": "2025-01-15"
  },
  "justification": "Encryption at rest is one component of the broader cryptography control.",
  "metadata": {
    "created": "2025-01-15T00:00:00Z",
    "status": "active"
  }
}
```

---

## 15. Security Considerations

- Mapping data does not contain sensitive information
- Consumers SHOULD verify dataset integrity via checksums
- Mappings do not assert compliance status
- Provenance and confidence SHOULD inform trust decisions

---

## 16. References

- RFC 2119: Key words for use in RFCs to Indicate Requirement Levels
- NIST OSCAL: Control Mapping Model
- STIX 2.1: Relationship Objects
- CSE Specification v1.0

---

**End of CSE Mapping Format Specification v1.0**
