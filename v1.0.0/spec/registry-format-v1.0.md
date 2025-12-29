# CSE Registry Format Specification  
**Version 1.0**

**Status:** Normative  
**Applies to:** CSE Registry v1.x  
**Canonical URL:** https://cse-registry.org/spec/registry-format-v1.0

## 1. Purpose

This document defines the **normative machine-readable format** of the CSE registry artifact (`cse-registry.json`).

It specifies:
- Required and optional fields
- Field semantics and constraints
- Structural rules for scalability
- Backward-compatibility guarantees

This specification applies to all registry versions compatible with **CSE Specification v1.0**.

## 2. Design Principles

The registry format is designed to be:

- **Stable**: identifiers and meanings never change
- **Deterministic**: registry artifacts can be generated reproducibly
- **Scalable**: supports tens of thousands of signals
- **Implementation-neutral**: no tool-specific assumptions
- **Cache-friendly**: safe for aggressive caching and mirroring

## 3. Top-Level Structure

The registry MUST be a single JSON object with the following top-level fields:

```json
{
  "registry": { ... },
  "spec": { ... },
  "signals": [ ... ]
}
```

## 4. Registry Metadata Object
### 4.1 registry
```json
Copy code
"registry": {
  "version": "1.0.0",
  "published_at": "2025-01-01",
  "status": "stable",
  "checksum": "sha256:..."
}
```

### Required Fields

| Field          | Type              | Description                            |
| -------------- | ----------------- | -------------------------------------- |
| `version`      | string            | Registry version (semantic versioning) |
| `published_at` | string (ISO 8601) | Publication timestamp                  |
| `status`       | string            | One of `stable`, `deprecated`          |
| `checksum`     | string            | Optional self-reference hash           |


## 5. Specification Reference Object
### 5.1 spec
```json
Copy code
"spec": {
  "name": "CSE Specification",
  "version": "1.0",
  "url": "https://cse-registry.org/spec/cse-spec-v1.0"
}
```
This object declares which specification governs the registry content.

## 6. Signal Index Array
### 6.1 signals

The signals field MUST be an array of signal index entries.

Each entry represents one Compliance Signal, not a finding.

Example:

```json
Copy code
{
  "id": "CSE-CMMC-ACCESS-UNAUTHORIZED-ADMIN-001",
  "domain": "CMMC",
  "category": "ACCESS",
  "name": "Unauthorized Administrative Access",
  "definition_ref": "/v1.0.0/signals/CMMC/ACCESS/CSE-CMMC-ACCESS-UNAUTHORIZED-ADMIN-001/",
  "introduced_in": "1.0.0",
  "status": "active"
}
```
## 7. Signal Index Entry Fields
### 7.1 Required Fields

| Field            | Type   | Description                             |
| ---------------- | ------ | --------------------------------------- |
| `id`             | string | Globally unique CSE identifier          |
| `domain`         | string | High-level domain or framework          |
| `category`       | string | Functional signal category              |
| `name`           | string | Short canonical name                    |
| `definition_ref` | string | Relative path to canonical definition   |
| `introduced_in`  | string | Registry version where first introduced |
| `status`         | string | `active` or `deprecated`                |

### 7.2 Optional Fields

| Field           | Type          | Description                       |
| --------------- | ------------- | --------------------------------- |
| `deprecated_in` | string        | Registry version where deprecated |
| `replaced_by`   | string        | Replacement CSE identifier        |
| `tags`          | array[string] | Informative classification tags   |

Optional fields MUST NOT change signal meaning.

## 8. Identifier Constraints

- Identifiers MUST conform to the format defined in cse-spec-v1.0
- Identifiers MUST be unique across the entire registry
- Identifiers MUST NOT be reused or repurposed

## 9. Backward Compatibility Rules

- New registry versions MAY add new signal entries
- Existing signal entries MUST NOT change normative fields
- Optional metadata MAY be extended in minor versions
- Deprecated signals MUST remain resolvable indefinitely

## 10. Prohibited Content

The registry MUST NOT include:

- Findings
- Severity scores
- Compliance assertions
- Remediation instructions
- Tool-specific metadata

## 11. Relationship to Signal Definitions

The registry is an index.

The authoritative semantic definition of each signal resides in its corresponding /v1.0.0/signals/... directory and MUST be consistent with the registry entry.

## 12. Validation
Registry artifacts SHOULD be validated against the official registry JSON schema published in /v1.0.0/schemas.

## 13. Disclaimer
This format specification is informational and does not imply compliance or certification.