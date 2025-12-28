# CSE Registry

This directory contains the **authoritative registry artifacts** for the **Compliance Signal Enumeration (CSE)** system.

The registry is the canonical source of truth for all published **Compliance Signal identifiers** and their associated normative definitions.

## Purpose of the Registry

The CSE registry exists to:

- Enumerate all defined Compliance Signals
- Provide stable, machine-readable references
- Enable consistent consumption by tools and platforms
- Preserve historical continuity and citation integrity

The registry does **not** contain findings, assessments, scores, or interpretations.

## Registry Principles

The CSE registry adheres to the following principles:

- **Stability**  
  Published identifiers never change meaning.

- **Immutability**  
  Registry releases are immutable once published.

- **Transparency**  
  All registry artifacts are publicly accessible.

- **Neutrality**  
  No framework, vendor, or product bias is introduced.

## Registry Structure

Registry artifacts are organized by version:

```
registry/
└── v<registry-version>/
├── cse-registry.json
├── cse-registry.min.json
├── cse-registry.ndjson
├── SHA256SUMS
└── README.md
```

### Directory Conventions

- Each version directory represents a **complete, immutable snapshot**
- Files within a version directory MUST NOT change after publication
- New signals are introduced only in new versions

## Registry Artifacts

### cse-registry.json
- Canonical, human-readable JSON representation
- Intended for tooling, indexing, and validation

### cse-registry.min.json
- Minified JSON for bandwidth-sensitive use

### cse-registry.ndjson
- Newline-delimited JSON for streaming and large-scale ingestion

### SHA256SUMS
- Cryptographic checksums for all artifacts in the version directory
- Enables integrity verification and caching

## Versioning

Registry versions follow semantic versioning:

- **MAJOR** – Breaking structural changes
- **MINOR** – Additive signal definitions
- **PATCH** – Corrections without semantic change

Example:
```
v1.0.0
```

Each registry version declares compatibility with a specific CSE specification version.

## Consumption Guidance

Consumers SHOULD:

- Reference registry artifacts using explicit version paths
- Cache registry data aggressively
- Verify integrity using provided checksums
- Avoid relying on mutable or unversioned endpoints

Consumers MUST NOT:
- Modify registry artifacts
- Reassign identifiers
- Republish altered versions under the CSE name

## Relationship to Signal Definitions

The registry provides the **machine-readable index** of signals.

Human-readable canonical definitions are maintained in the `/signals` directory and referenced by the registry.

Both MUST remain consistent.

## Governance

The registry is stewarded by **[DataHubz](https://www.datahubz.com/)**.

Changes to registry content follow the governance rules defined in:
- `spec/cse-spec-v1.0.md`
- `GOVERNANCE.md`

## Disclaimer

The registry is provided for informational purposes only.

Inclusion of a signal does not imply compliance, certification, or endorsement.

## Next Steps

- Review the current registry version directories
- Explore canonical signal definitions in `/signals`
- Validate consumption using schemas in `/schemas`