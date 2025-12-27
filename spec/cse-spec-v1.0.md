# Compliance Signal Enumeration (CSE) Specification  
**Version 1.0**

**Status:** Stable  
**Date:** 2025  
**Canonical URL:** https://cse-registry.org/spec/cse-spec-v1.0

## 1. Introduction

Compliance Signal Enumeration (CSE) is a neutral, framework-agnostic specification for defining **stable identifiers** that represent **recurring, observable technical signals** relevant to compliance, security, privacy, and governance assessments.

This specification defines the **structure, semantics, and governance rules** for CSE identifiers and the registry that maintains them.

CSE exists to provide a **shared reference layer**. It does not assess, certify, score, or remediate.

## 2. Scope and Goals

### 2.1 Goals

CSE is designed to:

- Provide stable, canonical identifiers for compliance-relevant technical signals
- Enable consistent reference across tools, organizations, and assessments
- Support long-term citation and interoperability
- Remain neutral across compliance frameworks and industries
- Be usable by both open-source and proprietary implementations

### 2.2 Non-Goals

CSE explicitly does **not**:

- Define compliance requirements
- Determine compliance status
- Assign severity or exploitability (mandatory)
- Prescribe remediation actions (mandatory)
- Replace existing frameworks or standards
- Act as a certification authority

## 3. Normative Language

The key words **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** in this document are to be interpreted as described in RFC 2119.

## 4. Core Concepts and Definitions

### 4.1 Compliance Signal

A **Compliance Signal** is a named class of observable technical conditions that may be relevant to compliance, security, privacy, or governance evaluations.

Signals are:
- Abstract
- Repeatable
- Context-independent
- Observable from technical artifacts

Examples:
- Presence of plaintext secrets in source code
- Missing access control enforcement in configuration
- Absence of required audit logging

Signals are not findings.

### 4.2 Finding

A **Finding** is a concrete observation of a Compliance Signal in a specific context.

Findings:
- Are implementation-specific
- May include severity, evidence, remediation, and metadata
- Are **not stored or defined in the CSE registry**

### 4.3 Registry

The **CSE Registry** is the authoritative catalog of all defined Compliance Signals, including:

- Identifiers
- Canonical names
- Normative descriptions
- Classification metadata
- Versioning information

The registry is versioned, immutable per release, and publicly accessible.

### 4.4 Implementation

An **Implementation** is any tool, platform, service, or process that:
- Detects signals
- Produces findings
- Consumes or references CSE identifiers

Implementations MAY extend signals with additional metadata but MUST preserve identifier semantics.

## 5. Identifier Format

### 5.1 General Structure

All CSE identifiers MUST conform to the following structure:

```
CSE-<DOMAIN>-<CATEGORY>-<NAME>-<SERIAL>
```

Where:

- `CSE`  
  Fixed prefix identifying the Compliance Signal Enumeration system

- `<DOMAIN>`  
  The high-level domain or framework context  
  Examples: `GEN`, `CMMC`, `ISO27001`, `GDPR`

- `<CATEGORY>`  
  Functional classification of the signal  
  Examples: `ACCESS`, `SECRETS`, `LOGGING`, `CONFIG`

- `<NAME>`  
  Short, uppercase, hyphen-separated descriptive name

- `<SERIAL>`  
  Zero-padded numeric identifier (minimum 3 digits)

### 5.2 Example

```
CSE-CMMC-ACCESS-UNAUTHORIZED-ADMIN-001
```

## 6. Identifier Stability Rules

- Once published, a CSE identifier **MUST NOT** change meaning
- Identifiers **MUST NOT** be reused
- Deprecated identifiers **MUST** remain resolvable
- Corrections **MUST** result in new identifiers
- Clarifications MAY be issued without semantic change

Stability is a core guarantee of CSE.

## 7. Signal Definition Requirements

Each signal definition MUST include:

- Identifier
- Canonical name
- Normative description
- Applicability scope
- Signal category
- Detection intent (informative)
- Version introduced

Signal definitions MUST be written to remain valid even as technologies evolve.

## 8. Optional Metadata Model

CSE supports **optional, non-normative metadata fields** to aid implementations.

These MAY include:

- Suggested severity (informative)
- Suggested remediation guidance (informative)
- Mapped framework references
- Control families
- Risk domains
- Detection confidence hints

Optional metadata:
- MUST be clearly marked as non-normative
- MUST NOT alter signal meaning
- MUST NOT be required for compliance with this specification

## 9. Registry Structure

The registry MUST be published in machine-readable form.

At minimum, registry artifacts MUST include:

- Unique identifier
- Version
- Publication date
- List of signal definitions
- Hashes or checksums for integrity

Registry releases are immutable once published.

## 10. Versioning

### 10.1 Specification Versioning

- Major version changes (v2.0) indicate breaking changes
- Minor revisions (v1.x) indicate clarifications or extensions
- Patch releases correct errors without semantic change

### 10.2 Registry Versioning

- Registry versions are independent but aligned with spec versions
- Each registry release MUST declare the spec version it conforms to

## 11. Governance and Change Control

CSE is stewarded by **DataHubz**.

Governance principles:
- Stability over speed
- Neutrality over opinion
- Compatibility over convenience

Proposed changes may be discussed publicly, but acceptance is discretionary and guided by long-term ecosystem health.

## 12. Security and Misuse Considerations

- CSE identifiers do not assert compliance or non-compliance
- Misuse of identifiers for marketing or certification claims is discouraged
- Implementations are responsible for secure detection and handling of findings
- Registry integrity MUST be protected through versioning and cryptographic verification

## 13. Relationship to Other Standards

CSE is designed to complement, not replace, existing standards such as:

- Compliance frameworks (e.g., CMMC, ISO/IEC 27001, SOC 2, GDPR)
- Vulnerability enumerations
- Software composition standards

CSE focuses exclusively on **signal identification**, not assessment.

## 14. Disclaimer

This specification is provided for informational purposes only.

Use of CSE identifiers does not imply compliance, certification, endorsement, or regulatory approval.

## 15. References

- RFC 2119: Key words for use in RFCs to Indicate Requirement Levels
- Apache License, Version 2.0


**End of CSE Specification v1.0**