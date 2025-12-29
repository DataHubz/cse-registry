# Changelog

All notable changes to the CSE specification and registry are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

Versioning follows [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

Target release: January 2026

### Added

#### Specification
- CSE Specification v1.0 (`v1.0.0/spec/cse-spec-v1.0.md`)
- Registry Format Specification v1.0 (`v1.0.0/spec/registry-format-v1.0.md`)
- Signal Definition Format Specification v1.0 (`v1.0.0/spec/signal-format-v1.0.md`)

#### Schemas
- Registry schema (`v1.0.0/schemas/registry.schema.json`)
- Signal schema (`v1.0.0/schemas/signal.schema.json`)

#### Signals
- `CSE-GEN-SECRETS-PLAINTEXT-001` — Plaintext Secret in Source Code
- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001` — Unrestricted Administrative Access

#### Registry
- Registry v1.0.0 (draft)
  - `v1.0.0/registry/cse-registry.json`
  - `v1.0.0/registry/cse-registry.min.json`
  - `v1.0.0/registry/cse-registry.ndjson`
  - `v1.0.0/registry/SHA256SUMS`

#### Documentation
- Project README
- Specification README
- Registry README
- Signals README
- Examples with reference files
- Governance documentation
- Contributing guidelines
- This changelog

### Pending Before Release

Signal coverage required for the following frameworks:

- [ ] CMMC
- [ ] SOC 2 Type 1
- [ ] SOC 2 Type 2
- [ ] GDPR
- [ ] ISO 27001

---

## Notes

- Registry versions are immutable once published
- Signal identifiers are permanent and never change meaning
- Deprecated signals remain documented indefinitely
