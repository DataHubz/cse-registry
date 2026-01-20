# Changelog

All notable changes to the CSE specification and registry are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-20

### Added

#### Specification
- CSE Specification v1.0 (`spec/cse-spec-v1.0.md`)
- Registry Format Specification v1.0 (`spec/registry-format-v1.0.md`)
- Signal Definition Format Specification v1.0 (`spec/signal-format-v1.0.md`)
- Mapping Format Specification v1.0 (`spec/mapping-format-v1.0.md`)
- Finding Format Specification v1.0 (`spec/finding-format-v1.0.md`)

#### Schemas
- Registry schema (`schemas/registry.schema.json`)
- Signal schema (`schemas/signal.schema.json`)
- Mapping schema (`schemas/mapping.schema.json`)
- Finding schema (`schemas/finding.schema.json`)
- Artifact schema (`schemas/artifact.schema.json`)

#### Signals (1,170 total across 12 domains)
- **CCPA**: 70 signals (California Consumer Privacy Act)
- **CIS**: 120 signals (CIS Controls v8.1)
- **CMMC**: 136 signals (Cybersecurity Maturity Model Certification)
- **FedRAMP**: 145 signals (Federal Risk and Authorization Management Program)
- **GDPR**: 81 signals (General Data Protection Regulation)
- **GEN**: 55 signals (General/Cross-Framework)
- **HIPAA**: 75 signals (Health Insurance Portability and Accountability Act)
- **HITRUST**: 129 signals (HITRUST Common Security Framework)
- **ISO27001**: 93 signals (ISO/IEC 27001:2022)
- **NISTCSF**: 133 signals (NIST Cybersecurity Framework 2.0)
- **PCIDSS**: 64 signals (Payment Card Industry Data Security Standard v4.0)
- **SOC2**: 69 signals (SOC 2 Trust Services Criteria)

#### Mappings (2,062 total)
- 1,228 signal-to-control mappings
- 834 equivalence mappings (GEN to domain-specific)

#### Registry
- `registry/cse-registry.json` - Full registry
- `registry/cse-registry.min.json` - Minified version
- `registry/cse-registry.ndjson` - Streaming format
- `registry/SHA256SUMS` - Integrity verification

#### Documentation
- Project README
- Specification README
- Governance documentation
- Contributing guidelines
- Glossary of terms

### Changed

#### Repository Structure
- **BREAKING**: Migrated from folder-based versioning (`v1.0.0/`) to git tag-based versioning
- All registry content now lives at repository root
- Version history managed via git tags (use `git tag -l` to list versions)
- Added `VERSION` file for programmatic version detection

This change aligns CSE Registry with industry standard practices used by CVE, CWE, SPDX, OpenAPI, and similar registries

## Notes

- Registry versions are immutable once published
- Signal identifiers are permanent and never change meaning
- Deprecated signals remain documented indefinitely
