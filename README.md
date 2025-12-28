# Compliance Signal Enumeration (CSE)

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE) [![Registry Version](https://img.shields.io/badge/Registry-v1.0.0-green.svg)](registry/v1.0.0/) [![Status](https://img.shields.io/badge/Status-Stable-brightgreen.svg)](#) [![Signals](https://img.shields.io/badge/Signals-958-orange.svg)](registry/v1.0.0/cse-registry.json) [![Domains](https://img.shields.io/badge/Domains-11-purple.svg)](registry/v1.0.0/index.json)

**A neutral, framework-agnostic registry of compliance-relevant technical signals**

## Overview

**Compliance Signal Enumeration (CSE)** is a public specification and registry that defines **stable identifiers** for recurring **technical signals** observed in software, infrastructure, and operational artifacts that are relevant to compliance and risk assessments.

CSE provides a **shared vocabulary** for referencing *what was observed* without asserting compliance status, certification, severity, or remediation requirements.

> CSE is **descriptive**, not prescriptive.

## Registry at a Glance

| Metric | Value |
|--------|-------|
| **Total Signals** | 958 |
| **Domains** | 11 |
| **Registry Version** | 1.0.0 |
| **Status** | Stable |

### Supported Frameworks

| Domain | Framework | Signals | Categories |
|--------|-----------|---------|------------|
| **CMMC** | Cybersecurity Maturity Model Certification | 134 | 15 |
| **CCPA** | California Consumer Privacy Act (CCPA/CPRA) | 70 | 11 |
| **FEDRAMP** | Federal Risk and Authorization Management Program | 145 | 20 |
| **GDPR** | General Data Protection Regulation | 80 | 10 |
| **HITRUST** | HITRUST Common Security Framework | 126 | 19 |
| **ISO27001** | ISO/IEC 27001:2022 | 93 | 4 |
| **SOC2** | SOC 2 Trust Services Criteria | 64 | 5 |
| **HIPAA** | Health Insurance Portability and Accountability Act | 75 | 6 |
| **PCIDSS** | Payment Card Industry Data Security Standard v4.0 | 64 | 12 |
| **NISTCSF** | NIST Cybersecurity Framework 2.0 | 106 | 22 |
| **GEN** | General Security Signals | 1 | 1 |

## Why CSE Exists

Organizations face a fragmented compliance landscape. Security and compliance tools generate findings using inconsistent terminology, proprietary identifiers, and framework-specific language. This creates friction when:

- Aggregating findings across multiple tools
- Mapping observations to multiple compliance frameworks
- Communicating technical conditions to auditors
- Building cross-platform compliance dashboards
- Maintaining audit trails over time

**CSE solves this by providing a canonical layer of signal identifiers that tools, teams, and assessors can reference consistently.**

### The Problem CSE Addresses

```
Tool A: "SSH_OPEN_TO_INTERNET"
Tool B: "public-ssh-access-detected"
Tool C: "Finding: SSH port 22 exposed to 0.0.0.0/0"
```

These all describe the same technical condition, but without a shared identifier, correlation requires manual effort.

### The CSE Approach

```
CSE-CMMC-COMMS-UNRESTRICTED-SSH-001
```

A single, stable identifier that any tool can emit and any consumer can understand—regardless of vendor, framework, or implementation.

## What CSE Is (and Is Not)

### CSE **is**

- A registry of stable, canonical identifiers for technical signals
- A neutral reference layer across compliance frameworks
- Framework-aware but framework-agnostic
- Designed for long-term citation and interoperability
- Open, versioned, and publicly accessible
- Machine-readable and human-readable

### CSE **is not**

- A compliance framework or certification standard
- A scoring, rating, or risk quantification system
- A remediation guide or prescriptive control set
- A product, platform, or commercial offering
- A replacement for professional compliance guidance

**CSE names signals. Assessments and judgments remain contextual and human-driven.**

## Core Concepts

### Signal

An observable technical condition or pattern derived from artifacts such as:

- Source code and dependencies
- Configuration files (YAML, JSON, HCL, etc.)
- Infrastructure-as-code (Terraform, CloudFormation, Pulumi)
- CI/CD pipeline definitions
- Container images and Kubernetes manifests
- Cloud resource configurations
- Identity and access management policies
- Network security rules
- Audit logs and runtime metadata

### Signal Identifier

A stable, unique identifier following the format:

```
CSE-<DOMAIN>-<CATEGORY>-<NAME>-<SERIAL>
```

**Examples:**
- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001`
- `CSE-GDPR-RIGHTS-NO-ERASURE-MECHANISM-001`
- `CSE-PCIDSS-STORE-SAD-RETAINED-003`
- `CSE-HIPAA-TECH-NO-ENCRYPTION-004`

### Finding

A concrete instance where a signal is observed in a specific context. Findings are implementation-specific and are **not stored in this registry**. CSE defines what signals mean; implementations determine where and when they occur.

### Domain

A logical grouping of signals aligned with a compliance framework or regulatory context (e.g., CMMC, GDPR, HIPAA, PCI DSS).

### Category

A thematic subdivision within a domain (e.g., ACCESS, ENCRYPTION, LOGGING, PRIVACY).

## Repository Structure

```
.
├── spec/              # Normative specifications
│   ├── cse-spec-v1.0.md
│   ├── signal-format-v1.0.md
│   └── registry-format-v1.0.md
│
├── registry/          # Versioned, machine-readable registry artifacts
│   └── v1.0.0/
│       ├── index.json
│       ├── cse-registry.json
│       ├── cse-registry.min.json
│       ├── cse-registry.ndjson
│       ├── domains/
│       │   ├── CCPA.json
│       │   ├── CMMC.json
│       │   ├── FEDRAMP.json
│       │   ├── GDPR.json
│       │   ├── GEN.json
│       │   ├── HIPAA.json
│       │   ├── HITRUST.json
│       │   ├── ISO27001.json
│       │   ├── NISTCSF.json
│       │   ├── PCIDSS.json
│       │   └── SOC2.json
│       └── SHA256SUMS
│
├── signals/           # Canonical signal definitions (human-readable)
│   ├── CCPA/
│   ├── CMMC/
│   ├── FEDRAMP/
│   ├── GDPR/
│   ├── GEN/
│   ├── HIPAA/
│   ├── HITRUST/
│   ├── ISO27001/
│   ├── NISTCSF/
│   ├── PCIDSS/
│   └── SOC2/
│
├── schemas/           # JSON schemas for validation
│   ├── registry.schema.json
│   └── signal.schema.json
│
└── examples/          # Reference examples (informative)
    ├── registry-example.json
    └── signal-example.json
```

## Registry Formats

The registry is published in multiple formats to support different consumption patterns:

| Format | File | Use Case |
|--------|------|----------|
| **Full JSON** | `cse-registry.json` | Complete registry with formatting |
| **Minified JSON** | `cse-registry.min.json` | Optimized for bandwidth/storage |
| **NDJSON** | `cse-registry.ndjson` | Streaming and line-by-line processing |
| **Per-Domain** | `domains/<DOMAIN>.json` | Framework-specific integrations |
| **Index** | `index.json` | Registry metadata and domain summary |

All artifacts include SHA256 checksums for integrity verification.

## Integration Use Cases

### Security Tools & Scanners

Emit CSE identifiers alongside proprietary finding IDs to enable cross-tool correlation and framework-neutral reporting.

### Compliance Platforms

Map CSE signals to control requirements, enabling automated evidence collection across multiple frameworks simultaneously.

### Audit & Assessment

Reference CSE identifiers in audit documentation for consistent, unambiguous citation of observed technical conditions.

### GRC Systems

Aggregate findings from multiple sources using CSE as a normalization layer, reducing manual mapping effort.

### CI/CD Pipelines

Gate deployments based on the presence or absence of specific CSE signals, with consistent semantics across environments.

## Signal Definition Example

Each signal in the registry includes a canonical definition. Below is an example from the PCI DSS domain:

> ### CSE-PCIDSS-STORE-SAD-RETAINED-003
>
> **Sensitive Authentication Data Retained**
>
> | Field | Value |
> |-------|-------|
> | Identifier | `CSE-PCIDSS-STORE-SAD-RETAINED-003` |
> | Domain | PCIDSS |
> | Category | STORE |
> | Status | Active |
> | Introduced In | 1.0.0 |
>
> **Description:** Sensitive authentication data (full track data, CVV, PIN) is stored after authorization.
>
> **PCI DSS Context (Informative)**
> - Requirement: 3.3
> - "Sensitive authentication data (SAD) is not retained after authorization, even if encrypted..."

Signal definitions are stored as individual README.md files within the `signals/` directory structure. See [`signals/PCIDSS/STORE/CSE-PCIDSS-STORE-SAD-RETAINED-003/`](signals/PCIDSS/STORE/CSE-PCIDSS-STORE-SAD-RETAINED-003/) for the full definition.

## Getting Started

### Browse the Registry

```bash
# View registry index
curl -s https://raw.githubusercontent.com/DataHubz/cse-registry/main/registry/v1.0.0/index.json | jq .

# List all signals for a domain
curl -s https://raw.githubusercontent.com/DataHubz/cse-registry/main/registry/v1.0.0/domains/HIPAA.json | jq '.signals[].id'
```

### Validate Against Schema

```bash
# Validate a registry file
ajv validate -s schemas/registry.schema.json -d registry/v1.0.0/cse-registry.json
```

### Reference a Signal

When emitting findings, include the CSE identifier:

```json
{
  "finding_id": "f-12345",
  "cse_signal": "CSE-HIPAA-TECH-NO-ENCRYPTION-004",
  "resource": "arn:aws:s3:::patient-records",
  "observed_at": "2025-01-15T10:30:00Z"
}
```

## Governance & Stewardship

CSE is developed and stewarded by **[DataHubz](https://www.datahubz.com/)**.

The specification and registry are public and versioned. Stewardship is centralized for v1.x to ensure stability, neutrality, and consistency.

### Versioning

- Registry versions follow semantic versioning
- Signal identifiers are immutable once published
- Deprecated signals are marked but never removed
- New signals are additive and backward-compatible

### Contributing

Contributions and feedback are welcome. See:
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — Contribution guidelines
- [`GOVERNANCE.md`](GOVERNANCE.md) — Governance model and decision process
- [`CHANGELOG.md`](CHANGELOG.md) — Version history

## License

This project is licensed under the **Apache License 2.0**.

The license applies to:
- Specifications
- Registry artifacts
- Signal definitions
- Schemas and examples

Implementations consuming or emitting CSE identifiers may be open-source or proprietary.

## Disclaimer

CSE is an informational specification intended to support compliance-related workflows.

Use of CSE does **not** imply:
- Compliance with any framework or regulation
- Certification or attestation status
- Regulatory approval or endorsement
- Legal or professional compliance advice

**CSE provides vocabulary, not verdicts.**

Organizations are responsible for their own compliance determinations, assessments, and remediation decisions.

## Contact

Questions, feedback, or discussion can be opened via [GitHub Issues](https://github.com/DataHubz/cse-registry/issues).


<p align="center">
<strong>CSE is open infrastructure.</strong><br>
<em>Trust, interpretation, and verification belong to implementations.</em>
</p>
