# CSE Glossary

This glossary defines the terminology used in the Compliance Signal Enumeration (CSE) specification and registry. Terms are organized hierarchically, with foundational concepts presented first.

## Core Concepts

### Compliance Signal

A **Compliance Signal** is a named class of observable technical conditions that may be relevant to compliance, security, privacy, or governance evaluations.

Signals are:
- **Abstract** — They define a class of conditions, not a specific instance
- **Repeatable** — The same signal can be observed multiple times
- **Context-independent** — The definition does not depend on where it is observed
- **Observable** — Derived from technical artifacts (code, configuration, infrastructure)

**Example:** "Plaintext secret in source code" is a signal. A specific API key found in `config.py` is a finding.

Signals are **descriptive, not prescriptive**. They name what is observable without asserting compliance status, severity, or remediation requirements.

### Finding

A **Finding** is a concrete observation of a Compliance Signal in a specific context.

Findings are:
- **Implementation-specific** — Created by tools, scanners, or assessments
- **Contextual** — Include location, evidence, timestamps
- **Actionable** — May include severity, remediation guidance, ownership

Findings are **not stored in the CSE registry**. CSE defines signals; implementations produce findings that reference those signals.

### Artifact

An **Artifact** is any technical object from which signals can be observed.

Examples of artifacts:
- Source code files
- Configuration files (YAML, JSON, HCL, INI)
- Infrastructure-as-code (Terraform, CloudFormation, Pulumi)
- Container images and Dockerfiles
- Kubernetes manifests
- Cloud resource configurations
- CI/CD pipeline definitions
- Identity and access management policies
- Network security rules
- Audit logs and runtime metadata

## Identifier Structure

### CSE Identifier

A **CSE Identifier** (also: CSE-ID, Signal ID) is the unique, stable reference for a Compliance Signal.

Format:
```
CSE-<DOMAIN>-<CATEGORY>-<NAME>-<SERIAL>
```

Example: `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001`

CSE Identifiers are:
- **Immutable** — Once published, meaning never changes
- **Permanent** — Never reused or reassigned
- **Resolvable** — Always point to a valid definition

### Domain

A **Domain** is the top-level grouping of signals aligned with a compliance framework, regulation, or thematic area.

| Domain | Description |
|--------|-------------|
| GEN | General, framework-agnostic security signals |
| CCPA | California Consumer Privacy Act |
| CIS | CIS Controls |
| CMMC | Cybersecurity Maturity Model Certification |
| FEDRAMP | Federal Risk and Authorization Management Program |
| GDPR | General Data Protection Regulation |
| HIPAA | Health Insurance Portability and Accountability Act |
| HITRUST | HITRUST Common Security Framework |
| ISO27001 | ISO/IEC 27001 Information Security |
| NISTCSF | NIST Cybersecurity Framework |
| PCIDSS | Payment Card Industry Data Security Standard |
| SOC2 | SOC 2 Trust Services Criteria |

Domains are uppercase alphabetic strings (e.g., `CMMC`, `GDPR`, `ISO27001`).

### Category

A **Category** is a functional subdivision within a domain that groups related signals.

Examples:
- `ACCESS` — Access control and authorization
- `AUDIT` — Audit logging and monitoring
- `CONFIG` — Configuration and hardening
- `CRYPTO` — Cryptographic controls
- `DATA` — Data protection and handling
- `IDENTITY` — Identity and authentication
- `INCIDENT` — Incident response
- `SECRETS` — Secrets management

Categories are uppercase alphabetic strings. Each domain defines its own set of categories aligned with the framework's structure.

### Name

The **Name** component is a short, descriptive identifier for the specific signal within its category.

Naming conventions:
- Uppercase letters and hyphens only
- Describes the observable condition
- Often uses prefixes like `NO-`, `MISSING-`, `WEAK-`, `UNRESTRICTED-`

Examples: `UNRESTRICTED-ADMIN`, `NO-ENCRYPTION`, `WEAK-PASSWORD`, `PLAINTEXT`

### Serial

The **Serial** is a zero-padded numeric suffix (minimum 3 digits) that ensures uniqueness within the domain-category-name combination.

Examples: `001`, `002`, `015`, `100`

Serials are assigned sequentially and never reused.

## Registry Concepts

### Registry

The **CSE Registry** is the authoritative catalog of all defined Compliance Signals.

The registry contains:
- Signal identifiers and definitions
- Domain and category classifications
- Version and status information
- Integrity checksums

The registry is:
- **Versioned** — Each release has a unique version number
- **Immutable** — Published versions never change
- **Public** — Freely accessible

### Registry Version

A **Registry Version** identifies a specific, immutable snapshot of the registry.

Format: Semantic versioning (`MAJOR.MINOR.PATCH`)

- **MAJOR** — Breaking structural changes
- **MINOR** — Additive signal definitions
- **PATCH** — Corrections without semantic change

Example: `v1.0.0`

### Signal Definition

A **Signal Definition** is the canonical, normative description of a Compliance Signal.

Required elements:
- Identifier
- Canonical name
- Normative description
- Domain and category
- Version introduced
- Status (active/deprecated)

Signal definitions are stored in `/signals/<DOMAIN>/<CATEGORY>/<CSE-ID>/README.md`.

### Registry Artifact

A **Registry Artifact** is a machine-readable file generated from signal definitions.

| Artifact | Format | Purpose |
|----------|--------|---------|
| `cse-registry.json` | JSON | Full registry with formatting |
| `cse-registry.min.json` | Minified JSON | Bandwidth-optimized |
| `cse-registry.ndjson` | NDJSON | Streaming/line processing |
| `domains/<DOMAIN>.json` | JSON | Per-domain subsets |
| `index.json` | JSON | Registry metadata |
| `SHA256SUMS` | Text | Integrity verification |

## Status and Lifecycle

### Active

An **Active** signal is currently valid and may be referenced in findings.

Active signals:
- Have stable, normative definitions
- Are included in registry releases
- May be used by implementations

### Deprecated

A **Deprecated** signal is no longer recommended for new use but remains valid for historical reference.

Deprecated signals:
- Retain their original meaning
- Remain in the registry indefinitely
- Should not be used in new findings
- May indicate a replacement signal

### Normative

**Normative** content defines requirements and semantics that implementations MUST respect.

Normative elements in CSE:
- Signal identifiers
- Canonical names
- Signal descriptions
- Identifier format rules

### Non-Normative (Informative)

**Non-Normative** (or **Informative**) content provides guidance but does not define requirements.

Non-normative elements:
- Suggested severity levels
- Remediation guidance
- Framework control mappings
- Detection hints
- Examples

## Implementation Concepts

### Implementation

An **Implementation** is any tool, platform, service, or process that interacts with CSE.

Implementations may:
- Detect signals in artifacts
- Produce findings referencing CSE identifiers
- Consume registry data for display or analysis
- Extend signals with additional metadata

### Detection

**Detection** is the process of identifying a signal in an artifact.

Detection is performed by implementations, not by CSE itself. CSE defines what signals mean; implementations determine where and when they occur.

## Mapping Concepts

### Mapping

A **Mapping** is a directional relationship between a CSE signal and a target (either an external control or another signal).

Mappings are:
- **Directional** — Source is always a CSE signal
- **Versioned** — Track CSE version, framework version, and dataset version
- **Separate** — Maintained independently from signal definitions
- **Informative** — Do not alter signal semantics

Example:
```
CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001 → CMMC AC.L2-3.1.1 (subset)
```

See [Mapping Format Specification v1.0](spec/mapping-format-v1.0.md) for the full specification.

### Relationship Type

A **Relationship Type** defines the semantic connection between a signal and its target using set-theoretic concepts.

| Type | Symbol | Meaning |
|------|--------|---------|
| `equivalent` | ≡ | Signal and target have identical scope |
| `subset` | ⊂ | Signal addresses part of target |
| `superset` | ⊃ | Signal exceeds target scope |
| `intersects` | ∩ | Partial overlap between signal and target |
| `related` | ~ | Conceptual relationship without formal overlap |

### Provenance

**Provenance** declares the origin and authority of a mapping.

| Source | Description | Typical Confidence |
|--------|-------------|-------------------|
| `authoritative` | From framework authority | 0.95–1.00 |
| `expert` | Domain expert curated | 0.80–0.94 |
| `derived` | Algorithmically inferred | 0.60–0.79 |
| `community` | Community contributed | 0.40–0.59 |

### Confidence Score

A **Confidence Score** is a numeric value (0.0–1.0) indicating the reliability of a mapping.

Higher confidence indicates:
- Verified by authoritative sources
- Expert review completed
- Strong semantic alignment

### Signal Equivalence

**Signal Equivalence** is a mapping between two CSE signals indicating they represent the same concept.

Used primarily for:
- GEN signals ↔ domain-specific signals
- Cross-domain signal relationships

Example: `CSE-GEN-AUTH-NO-MFA-002` ≡ `CSE-CMMC-IDENTITY-NO-MFA-001`

### Mapping Dataset

A **Mapping Dataset** is a versioned collection of mappings.

Contains:
- Framework definitions
- Control definitions
- Signal-to-control mappings
- Signal-to-signal equivalences
- Cross-framework mappings

Organized in `/mappings/v<VERSION>/`.

## Related Standards

### Compliance Framework

A **Compliance Framework** is an external standard, regulation, or certification program that defines security or privacy requirements.

Examples: CMMC, ISO 27001, SOC 2, GDPR, HIPAA, PCI DSS, NIST CSF, CIS Controls, HITRUST, FedRAMP

CSE signals are often aligned with frameworks but do not replace framework requirements.

### Control

A **Control** is a specific requirement or safeguard defined by a compliance framework.

Examples:
- CMMC AC.L1-3.1.1 (Limit system access)
- ISO 27001 A.8.24 (Use of cryptography)
- PCI DSS 3.5.1 (Protect stored cardholder data)

CSE signals may map to one or more controls across different frameworks.

## Governance Terms

### Steward

The **Steward** is the organization responsible for maintaining the CSE specification and registry.

CSE is stewarded by **[DataHubz](https://www.datahubz.com/)**.

### Specification

The **CSE Specification** defines the structure, semantics, and governance rules for CSE identifiers and the registry.

Current version: [CSE Specification v1.0](spec/cse-spec-v1.0.md)

### Stability Guarantee

The **Stability Guarantee** is CSE's commitment that published identifiers never change meaning.

Once published:
- Identifiers are permanent
- Meanings are immutable
- Deprecated signals remain accessible
- Corrections require new identifiers

## See Also

- [CSE Specification v1.0](spec/cse-spec-v1.0.md) — Full normative specification
- [Signal Format v1.0](spec/signal-format-v1.0.md) — Signal definition format
- [Registry Format v1.0](spec/registry-format-v1.0.md) — Registry artifact format
- [Signals Directory](signals/) — Canonical signal definitions
- [Registry v1.0.0](registry/v1.0.0/) — Current registry release

## References

This glossary follows conventions established by similar enumeration projects:

- [CWE Glossary](https://cwe.mitre.org/documents/glossary/index.html)
- [CAPEC Glossary](https://capec.mitre.org/about/glossary.html)
- [CVE Terminology](https://www.cve.org/)
- [MITRE ATT&CK](https://attack.mitre.org/)
