# CSE Registry v1.0.0

**Registry Version:** 1.0.0  
**Specification Version:** CSE Specification v1.0  
**Status:** Stable  
**Publication Date:** 2025  
**Canonical URL:** https://cse-registry.org/registry/v1.0.0/

## Overview

This directory contains the **first immutable release** of the Compliance Signal Enumeration (CSE) registry.

Registry version **v1.0.0** represents a complete, authoritative snapshot of all Compliance Signals defined at the time of publication and conforming to **CSE Specification v1.0**.

Once published, the contents of this directory MUST NOT be modified.

## Scope of This Release

CSE Registry v1.0.0 includes:

- The initial set of canonical Compliance Signal identifiers
- Normative signal metadata required by the specification
- Machine-readable registry artifacts
- Cryptographic integrity references

This release establishes the baseline for all future registry versions.

## Compatibility

This registry version is compatible with:

- **CSE Specification v1.0**

Future registry versions MAY introduce new signals or metadata but MUST preserve backward compatibility with v1.0.0 identifiers.

## Directory Contents

```
v1.0.0/
├── index.json                 # Registry metadata + domain listing
├── domains/                   # Per-domain signal files
│   ├── CMMC.json
│   ├── CMMC.min.json
│   ├── GDPR.json
│   ├── GDPR.min.json
│   ├── GEN.json
│   ├── GEN.min.json
│   ├── ISO27001.json
│   └── ISO27001.min.json
├── cse-registry.json          # Full combined registry (all signals)
├── cse-registry.min.json      # Minified combined registry
├── cse-registry.ndjson        # Streaming format (all signals)
├── SHA256SUMS
└── README.md
```

### Artifact Descriptions

#### index.json
Registry metadata and domain listing. Use this to discover available domains and their signal counts without loading all signals.

#### domains/
Per-domain signal files for efficient partial loading. Each domain has:
- `{DOMAIN}.json` - Full domain signals with formatting
- `{DOMAIN}.min.json` - Minified for smaller payload

**Available domains:**
| Domain | Signals | Description |
|--------|---------|-------------|
| CMMC | 134 | Cybersecurity Maturity Model Certification 2.0 |
| GDPR | 80 | EU General Data Protection Regulation |
| ISO27001 | 93 | ISO/IEC 27001:2022 Information Security |
| GEN | 1 | General/cross-domain signals |

#### cse-registry.json
Canonical JSON registry containing **all** signal definitions for this release. Use for full registry access or backward compatibility.

#### cse-registry.min.json
Minified equivalent of `cse-registry.json` for efficient distribution.

#### cse-registry.ndjson
Newline-delimited JSON format for streaming and large-scale ingestion.

#### SHA256SUMS
Cryptographic checksums for all registry artifacts in this directory.

## Immutability Guarantee

Registry v1.0.0 is **immutable**.

- No identifiers will be removed
- No identifiers will be repurposed
- No definitions will be altered

If corrections or additions are required, they will appear in a new registry version.

## Integrity Verification

Consumers SHOULD verify the integrity of registry artifacts using the provided `SHA256SUMS` file.

Integrity verification is strongly recommended for:
- Caching
- Mirroring
- Automated tooling
- Compliance-sensitive environments

## Consumption Guidance

### Recommended Access Patterns

**For single-domain use (most efficient):**
```
GET /registry/v1.0.0/index.json           # Discover domains
GET /registry/v1.0.0/domains/GDPR.json    # Fetch only needed domain
```

**For multi-domain or full access:**
```
GET /registry/v1.0.0/cse-registry.json    # Full registry
```

**For streaming/ETL pipelines:**
```
GET /registry/v1.0.0/cse-registry.ndjson  # Line-by-line processing
```

### General Guidelines

Consumers SHOULD:
- Use domain-specific files when only one framework is needed
- Reference registry artifacts using explicit versioned URLs
- Cache registry data locally
- Treat identifiers as stable references

Consumers MUST NOT:
- Modify or republish altered versions under the CSE name
- Reassign identifiers to different meanings

## Governance

This registry release is stewarded by **[DataHubz](https://www.datahubz.com/)**.

All content conforms to the governance rules defined in the CSE Specification.

## Disclaimer

This registry is provided for informational purposes only.

Inclusion of a signal does not imply compliance, certification, or regulatory approval.

## Next Steps

- Review the canonical registry artifacts in this directory
- Explore human-readable signal definitions in `/signals`
- Validate integrations using schemas in `/schemas`
