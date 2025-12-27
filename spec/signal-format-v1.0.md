# CSE Signal Definition Format Specification  
**Version 1.0**

**Status:** Normative  
**Applies to:** All CSE Signals  
**Canonical URL:** https://cse-registry.org/spec/signal-format-v1.0

## 1. Purpose

This document defines the **canonical format** for individual Compliance Signal definitions stored under the `/signals` directory.

Each signal definition represents the **authoritative semantic description** of a single CSE identifier.

## 2. Signal Definition Model

Each Compliance Signal MUST be represented by a **directory** containing:

```json
signal.json
README.md
```

The `signal.json` file is normative.  
The `README.md` file is explanatory and human-oriented.

## 3. signal.json Structure

### 3.1 Required Top-Level Fields

```json
{
  "id": "CSE-CMMC-ACCESS-UNAUTHORIZED-ADMIN-001",
  "canonical_name": "Unauthorized Administrative Access",
  "description": "...",
  "domain": "CMMC",
  "category": "ACCESS",
  "applicability": "...",
  "introduced_in": "1.0.0",
  "status": "active"
}
```
## 4. Required Fields

| Field            | Type   | Description                        |
| ---------------- | ------ | ---------------------------------- |
| `id`             | string | CSE identifier                     |
| `canonical_name` | string | Human-readable canonical name      |
| `description`    | string | Normative definition of the signal |
| `domain`         | string | Applicable domain or framework     |
| `category`       | string | Functional signal category         |
| `applicability`  | string | Scope and context of relevance     |
| `introduced_in`  | string | Registry version                   |
| `status`         | string | `active` or `deprecated`           |


## 5. Description Semantics

The description field MUST:

- Describe what is observable
- Avoid remediation language
- Avoid severity or risk claims
- Remain valid across implementations

Avoid references to specific tools or technologies

## 6. Optional Metadata Object

Signal definitions MAY include an optional metadata object:

```json
"metadata": {
  "suggested_severity": "high",
  "related_controls": ["AC.L2-3.1.1"],
  "risk_domains": ["access-control"],
  "detection_notes": "Often detected via IAM configuration analysis."
}
```

### Rules:

- Metadata MUST be clearly informative
- Metadata MUST NOT redefine signal meaning
- Metadata MAY evolve over time

## 7. Deprecation Rules

If a signal is deprecated:

- `status` MUST be set to `deprecated`
- `deprecated_in` MUST be provided
- `replaced_by` SHOULD be provided if applicable

Deprecated signals MUST remain documented indefinitely.

## 8. Directory Layout Rules
Signals MUST be stored using a hierarchical layout:

```
signals/
  <DOMAIN>/
    <CATEGORY>/
      <CSE-ID>/
        signal.json
        README.md
```

This structure MUST scale to large registries.

## 9. README.md Requirements

Each signal directory MUST include a `README.md` containing:

- Human-readable explanation
- Non-normative examples
- Contextual notes
- Cross-references (informative)

The README MUST NOT contradict signal.json.

## 10. Stability Guarantees

Once published:

- `id`, `canonical_name`, and `description` MUST NOT change
- Optional metadata MAY be extended
- Clarifications MAY be added to README.md

## 11. Validation

Signal definitions SHOULD be validated against the official signal schema published in /schemas.

## 12. Prohibited Content

Signal definitions MUST NOT include:

- Compliance determinations
- Remediation steps
- Severity assertions (normative)
- Marketing language

## 13. Disclaimer
Signal definitions are descriptive references only and do not imply compliance or certification.

**End of Signal Definition Format Specification v1.0**