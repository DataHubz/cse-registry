# Compliance Signal Enumeration (CSE)

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE) [![Registry Version](https://img.shields.io/badge/Registry-v1.0.0-green.svg)](registry/v1.0.0/) [![Status](https://img.shields.io/badge/Status-Stable-brightgreen.svg)](#) [![Signals](https://img.shields.io/badge/Signals-1132-orange.svg)](registry/v1.0.0/cse-registry.json) [![Domains](https://img.shields.io/badge/Domains-12-purple.svg)](registry/v1.0.0/index.json)

**A neutral, framework-agnostic registry of compliance-relevant technical signals**

## Overview

**Compliance Signal Enumeration (CSE)** is a public specification and registry that defines **stable identifiers** for recurring **technical signals** observed in software, infrastructure, and operational artifacts that are relevant to compliance and risk assessments.

CSE provides:

- A **shared vocabulary** for referencing *what was observed* without asserting compliance status, certification, severity, or remediation requirements
- **Standardized formats** for signals, mappings, findings, and artifacts that enable seamless interoperability between tools and platforms
- A **machine-readable, vendor-neutral language** that allows security tools, compliance platforms, GRC systems, and auditors to communicate effectively

> CSE is **descriptive**, not prescriptive.

## Registry at a Glance

| Metric | Value |
|--------|-------|
| **Total Signals** | 1132 |
| **Domains** | 12 |
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
| **CIS** | CIS Controls v8.1 | 120 | 18 |
| **GEN** | General Security Signals | 55 | 12 |

## Why CSE Exists

### The State of Compliance Today

Modern organizations operate in an environment of overlapping compliance requirements. A typical enterprise may need to demonstrate adherence to HIPAA, SOC 2, ISO 27001, and PCI DSS simultaneously and each framework with its own terminology, control structures, and audit expectations. The technical controls that satisfy these frameworks are often identical, yet they must be documented, evidenced, and reported separately.

The tooling landscape compounds this complexity. Organizations deploy an average of 45+ security tools, each producing findings in proprietary formats with vendor-specific identifiers. When a cloud security scanner detects an unencrypted S3 bucket, it generates output that cannot be directly correlated with findings from an infrastructure-as-code scanner that detected the same misconfiguration in Terraform, or with a compliance platform tracking HIPAA violations.

**This fragmentation has measurable costs:**

- **Manual correlation effort**: Security teams spend significant time mapping findings between tools, often maintaining custom spreadsheets or scripts to translate between proprietary formats
- **Inconsistent audit evidence**: The same technical condition appears differently across reports, creating confusion during audits and requiring manual reconciliation
- **Delayed remediation**: Without unified tracking, the same issue may be reported multiple times by different tools, obscuring the true scope and priority of vulnerabilities
- **Integration overhead**: Every new tool requires custom integration logic to normalize its output, creating maintenance burden and technical debt
- **Framework mapping duplication**: Each organization independently maps tool outputs to compliance controls, duplicating effort across the industry

### The Interoperability Gap

The compliance and security industry lacks what other technical domains take for granted: **a shared language for describing observations**.

Software development has standardized on [CVE](https://www.cve.org/) for vulnerabilities, [CWE](https://cwe.mitre.org/) for weakness types, and [MITRE ATT&CK](https://attack.mitre.org/) for adversary techniques. These enumerations enable tools, teams, and organizations to communicate unambiguously. A CVE identifier means the same thing whether it appears in a GitHub advisory, a penetration test report, or a vendor security bulletin.

**Compliance has no equivalent.**

When a scanner reports a finding, it uses its own vocabulary. When that finding is imported into a GRC platform, it must be translated. When an auditor reviews the evidence, they must map it to framework controls. Each step introduces potential for error, delay, and inconsistency.

```
Tool A: "SSH_OPEN_TO_INTERNET"
Tool B: "public-ssh-access-detected"
Tool C: "Finding: SSH port 22 exposed to 0.0.0.0/0"
Auditor: "Which control does this violate?"
```

These all describe the same technical condition. Without a shared identifier, correlation requires manual effort at every boundary between systems and stakeholders.

### The CSE Approach

CSE addresses this gap by providing what the compliance ecosystem has been missing: **standardized infrastructure for compliance data exchange**.

```
CSE-CMMC-COMMS-UNRESTRICTED-SSH-001
```

A single, stable identifier that any tool can emit and any consumer can understand, regardless of vendor, framework, or implementation.

But CSE is more than a catalog of identifiers. It provides:

| Component | Purpose |
|-----------|---------|
| **Signal Registry** | Canonical definitions for 1,132 compliance-relevant technical conditions |
| **Mapping Dataset** | 1,308 pre-built relationships linking signals to framework controls |
| **Finding Format** | Standardized structure for findings that enables cross-tool interoperability |
| **Artifact Schema** | Consistent representation of technical objects where signals are observed |
| **Validation Schemas** | JSON schemas enabling automated validation of all CSE data structures |

### Part of a Larger Vision

CSE represents foundational infrastructure for a compliance ecosystem that does not yet fully exist but is increasingly necessary.

As organizations adopt infrastructure-as-code, shift security left, and automate compliance monitoring, the need for machine-readable, vendor-neutral compliance data becomes critical. Manual processes that worked for annual audits cannot scale to continuous compliance. Point-to-point integrations between tools create exponential complexity as the tooling landscape grows.

**CSE enables a different architecture:**

- **Tool vendors** emit standardized signals rather than proprietary identifiers, reducing integration friction and increasing the value of their output across customer environments
- **Compliance platforms** consume findings in a common format, enabling true multi-tool aggregation without custom parsers for each data source
- **GRC systems** leverage pre-built mappings to automatically correlate findings to framework controls across HIPAA, SOC 2, ISO 27001, PCI DSS, and other frameworks
- **Auditors** receive evidence with consistent, unambiguous references that map directly to control requirements
- **Organizations** maintain a single source of truth for compliance observations, regardless of which tools detected them

This is not about replacing existing tools or frameworks. CSE provides the connective tissue that allows them to work together, a shared language that reduces the friction inherent in a fragmented ecosystem.

**The alternative is the status quo:** continued fragmentation, manual mapping, integration overhead, and audit inconsistency. As compliance requirements multiply and tooling landscapes expand, these costs will only increase.

CSE offers a path toward interoperability. The infrastructure is open. The specification is public. The adoption is voluntary. The value compounds as more tools and platforms participate in the shared vocabulary.

## What CSE Is (and Is Not)

### CSE **is**

- A registry of stable, canonical identifiers for technical signals
- A neutral reference layer across compliance frameworks
- A standardized format for signals, mappings, findings, and artifacts
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

**CSE provides vocabulary and structure. Assessments, judgments, and remediation decisions remain contextual and human-driven.**

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

While findings are not stored in the registry, CSE provides a **standardized finding format** to enable interoperability between tools and platforms. See [Finding Format Specification](spec/finding-format-v1.0.md) for details.

### Artifact

A technical object where signals may be observed. Artifacts include source code files, configuration files, infrastructure-as-code templates, container images, cloud resources, Kubernetes manifests, and more. See [Artifact Schema](schemas/artifact.schema.json) for the complete specification.

### Domain

A logical grouping of signals aligned with a compliance framework or regulatory context (e.g., CMMC, GDPR, HIPAA, PCI DSS).

### Category

A thematic subdivision within a domain (e.g., ACCESS, ENCRYPTION, LOGGING, PRIVACY).

## Mappings

CSE includes a comprehensive mappings dataset that enables automated compliance mapping and cross-framework analysis. The mappings support four distinct use cases:

| Mapping Type | Description | Count |
|--------------|-------------|-------|
| **Signal-to-Control** | Links CSE signals to framework controls | 1,166 |
| **GEN Cross-Framework** | Maps generic signals to controls across all frameworks | 95 |
| **Equivalence** | Links GEN signals to domain-specific equivalents | 80 |
| **Cross-Framework** | Maps controls between frameworks via signal bridge | 62 |

**Total: 1,308 mappings**

### Signal-to-Control Mappings

Primary mappings that link CSE signals to their corresponding framework controls:

| Framework | Signals | Mappings | Coverage |
|-----------|---------|----------|----------|
| **CCPA** | 70 | 70 | 100% |
| **CIS** | 120 | 120 | 100% |
| **CMMC** | 134 | 134 | 100% |
| **FedRAMP** | 145 | 145 | 100% |
| **GDPR** | 80 | 80 | 100% |
| **GEN** | 55 | 95 | 100% |
| **HIPAA** | 75 | 75 | 100% |
| **HITRUST** | 126 | 126 | 100% |
| **ISO27001** | 93 | 93 | 100% |
| **NIST CSF** | 106 | 106 | 100% |
| **PCI DSS** | 64 | 64 | 100% |
| **SOC2** | 58 | 58 | 100% |

```json
{
  "id": "MAP-CSE-PCIDSS-STORE-SAD-RETAINED-003-TO-PCIDSS-3-3",
  "source": {
    "type": "cse-signal",
    "id": "CSE-PCIDSS-STORE-SAD-RETAINED-003",
    "version": "1.0.0"
  },
  "target": {
    "type": "control",
    "framework": "PCI-DSS-4.0",
    "id": "3.3",
    "title": "Sensitive authentication data is not stored after authorization"
  },
  "relationship": "equivalent",
  "confidence": 0.95
}
```

### GEN Cross-Framework Mappings

GEN (Generic) signals are framework-agnostic and map to controls across multiple frameworks simultaneously. This enables unified security posture assessment:

```json
{
  "id": "MAP-CSE-GEN-AUTH-NO-MFA-002-TO-CIS-6-3",
  "source": {
    "type": "cse-signal",
    "id": "CSE-GEN-AUTH-NO-MFA-002",
    "version": "1.0.0"
  },
  "target": {
    "type": "control",
    "framework": "CIS-CONTROLS-8.1",
    "id": "6.3",
    "title": "Require MFA for Externally-Exposed Applications"
  },
  "relationship": "equivalent",
  "confidence": 0.95
}
```

### Equivalence Mappings

Signal-to-signal mappings that establish equivalence between GEN signals and domain-specific signals:

```json
{
  "id": "EQ-CSE-GEN-AUTH-NO-MFA-002-TO-CMMC-IDENTITY-NO-MFA-001",
  "source": {
    "type": "cse-signal",
    "id": "CSE-GEN-AUTH-NO-MFA-002",
    "version": "1.0.0"
  },
  "target": {
    "type": "cse-signal",
    "id": "CSE-CMMC-IDENTITY-NO-MFA-001",
    "version": "1.0.0"
  },
  "relationship": "equivalent",
  "confidence": 0.95
}
```

### Cross-Framework Mappings

Framework-to-framework control mappings that use CSE signals as a bridge:

| Source Framework | Target Framework | Mappings |
|------------------|------------------|----------|
| CMMC 2.0 | ISO 27001:2022 | 19 |
| CMMC 2.0 | NIST CSF 2.0 | 13 |
| PCI DSS 4.0 | ISO 27001:2022 | 18 |
| SOC 2 | ISO 27001:2022 | 12 |

```json
{
  "id": "XFW-CMMC20-AC-L2-3-1-1-TO-ISO270012022-A-5-15",
  "source": {
    "type": "control",
    "framework": "CMMC-2.0",
    "id": "AC.L2-3.1.1",
    "title": "Authorized Access Control"
  },
  "target": {
    "type": "control",
    "framework": "ISO27001-2022",
    "id": "A.5.15",
    "title": "Access control"
  },
  "bridge_signal": "CSE-CMMC-ACCESS-NO-AUTHORIZED-ACCESS-CONTROL-020",
  "relationship": "equivalent",
  "confidence": 0.95
}
```

Mappings are located in `mappings/v1.0.0/`.

## Findings

While findings are **not stored** in this registry, CSE provides a standardized format for findings to enable interoperability between security tools, compliance platforms, and GRC systems.

### Why Standardize Findings?

Without a common format, integrating findings across tools requires custom parsers and mappers for each source. CSE's finding format provides:

- **Cross-tool correlation**: Aggregate findings from multiple scanners using a common structure
- **Consistent import/export**: Exchange findings between platforms without data loss
- **Unified audit trails**: Maintain consistent finding records across the compliance lifecycle
- **Automated workflows**: Enable programmatic finding management and remediation tracking

### Finding Structure

A CSE-formatted finding includes:

| Component | Description |
|-----------|-------------|
| **Signal Reference** | The CSE signal identifier observed |
| **Artifact** | Where the signal was observed (resource, file, config) |
| **Observation Context** | When and how the finding was detected |
| **Severity** | Risk assessment (level, score, justification) |
| **Evidence** | Supporting data (code snippets, logs, API responses) |
| **Status & Lifecycle** | Current state and history |
| **Remediation** | Tracking information for fixes |

### Complete Finding Example

```json
{
  "id": "FND-550e8400-e29b-41d4-a716-446655440000",
  "signal": {
    "id": "CSE-HIPAA-TECH-NO-ENCRYPTION-004",
    "version": "1.0.0"
  },
  "artifact": {
    "type": "cloud-resource",
    "id": "arn:aws:s3:::patient-records",
    "name": "Patient Records Bucket",
    "provider": "aws",
    "region": "us-east-1",
    "tags": {
      "Environment": "production",
      "DataClassification": "PHI"
    }
  },
  "observed_at": "2025-01-15T10:30:00Z",
  "status": "resolved",
  "severity": {
    "level": "critical",
    "score": 9.5,
    "source": "policy",
    "justification": "Unencrypted PHI in production S3 bucket"
  },
  "evidence": [
    {
      "type": "api-response",
      "content": "{\"ServerSideEncryptionConfiguration\": null}",
      "format": "json"
    }
  ],
  "remediation": {
    "status": "verified",
    "method": "config-change",
    "completed_at": "2025-01-16T14:00:00Z",
    "notes": "Enabled AES-256 server-side encryption with AWS KMS"
  }
}
```

### Minimal Finding Example

For lightweight integrations, a minimal valid finding:

```json
{
  "id": "FND-12345",
  "signal": {
    "id": "CSE-HIPAA-TECH-NO-ENCRYPTION-004"
  },
  "artifact": {
    "type": "cloud-resource",
    "id": "arn:aws:s3:::patient-records"
  },
  "observed_at": "2025-01-15T10:30:00Z",
  "status": "open"
}
```

### Finding Validation

Validate findings against the JSON schema:

```bash
ajv validate -s schemas/finding.schema.json -d your-finding.json
```

For bulk exports, use the finding set schema:

```bash
ajv validate -s schemas/finding-set.schema.json -d your-findings-export.json
```

See [Finding Format Specification](spec/finding-format-v1.0.md) for complete documentation.

## Putting It All Together

This section demonstrates how CSE's components work together in a real-world compliance workflow. We'll follow a single security issue from detection through remediation, showing how signals, mappings, artifacts, and findings connect.

### Scenario: Unencrypted Patient Data Detected

A compliance scanner detects an S3 bucket containing patient health records without encryption enabled.

### Step 1: The Signal

The scanner identifies the condition using a CSE signal:

```json
{
  "id": "CSE-HIPAA-TECH-NO-ENCRYPTION-004",
  "canonical_name": "Unencrypted PHI Storage",
  "description": "Protected Health Information (PHI) is stored without encryption at rest, violating HIPAA technical safeguard requirements.",
  "domain": "HIPAA",
  "category": "TECH",
  "status": "active",
  "introduced_in": "1.0.0"
}
```

### Step 2: The Artifact

The scanner identifies where the signal was observed:

```json
{
  "type": "cloud-resource",
  "id": "arn:aws:s3:::patient-records-bucket",
  "name": "Patient Records Storage",
  "provider": "aws",
  "account": "123456789012",
  "region": "us-east-1",
  "environment": "production",
  "tags": {
    "DataClassification": "PHI",
    "Compliance": "HIPAA"
  }
}
```

### Step 3: The Finding

The scanner creates a finding linking the signal to the artifact:

```json
{
  "id": "FND-20250115-001",
  "signal": {
    "id": "CSE-HIPAA-TECH-NO-ENCRYPTION-004",
    "version": "1.0.0"
  },
  "artifact": {
    "type": "cloud-resource",
    "id": "arn:aws:s3:::patient-records-bucket",
    "provider": "aws",
    "region": "us-east-1",
    "tags": { "DataClassification": "PHI" }
  },
  "observed_at": "2025-01-15T10:30:00Z",
  "status": "open",
  "severity": {
    "level": "critical",
    "score": 9.5,
    "justification": "Unencrypted PHI in production violates HIPAA"
  },
  "evidence": [
    {
      "type": "api-response",
      "content": "{\"ServerSideEncryptionConfiguration\": null}",
      "format": "json"
    }
  ],
  "context": {
    "environment": "production",
    "scan": {
      "type": "scheduled",
      "tool": { "name": "AWS Config" }
    }
  }
}
```

### Step 4: The Mapping

Using CSE mappings, the compliance platform automatically identifies which controls are affected:

```json
{
  "id": "MAP-CSE-HIPAA-TECH-NO-ENCRYPTION-004-TO-HIPAA-164-312-a-2-iv",
  "source": {
    "type": "cse-signal",
    "id": "CSE-HIPAA-TECH-NO-ENCRYPTION-004"
  },
  "target": {
    "type": "control",
    "framework": "HIPAA",
    "id": "164.312(a)(2)(iv)",
    "title": "Encryption and decryption (Addressable)"
  },
  "relationship": "equivalent",
  "confidence": 0.95
}
```

### Step 5: Cross-Framework Impact

Because this signal also has equivalence mappings to GEN, the platform can show impact across multiple frameworks:

```
Signal: CSE-HIPAA-TECH-NO-ENCRYPTION-004
  ├── HIPAA: 164.312(a)(2)(iv) - Encryption and decryption
  ├── HITRUST: 06.d - Data Protection
  ├── SOC2: CC6.1 - Logical and Physical Access Controls
  └── ISO27001: A.8.24 - Use of cryptography
```

### Step 6: Remediation Tracking

After the issue is fixed, the finding is updated:

```json
{
  "id": "FND-20250115-001",
  "status": "resolved",
  "remediation": {
    "status": "verified",
    "owner": "cloud-security@example.com",
    "completed_at": "2025-01-16T14:00:00Z",
    "method": "config-change",
    "verification": {
      "verified_at": "2025-01-16T15:00:00Z",
      "scan_id": "scan-20250116-verify"
    },
    "notes": "Enabled AES-256 encryption with AWS KMS"
  }
}
```

### The Complete Picture

```
┌───────────────────────────────────────────────────────────────────────────┐
│                         CSE Compliance Workflow                           │
├───────────────────────────────────────────────────────────────────────────┤
│                                                                           │
│  ┌──────────────┐     ┌──────────────┐     ┌────────────────────────┐     │
│  │    SIGNAL    │     │   ARTIFACT   │     │        FINDING         │     │
│  │              │     │              │     │                        │     │
│  │ CSE-HIPAA-   │ ──▶ │ S3 Bucket    │ ──▶ │ FND-20250115-001       │     │
│  │ TECH-NO-     │     │ patient-     │     │ Status: resolved       │     │
│  │ ENCRYPTION   │     │ records      │     │ Severity: critical     │     │
│  │ -004         │     │              │     │                        │     │
│  └──────────────┘     └──────────────┘     └────────────────────────┘     │
│         │                                              │                  │
│         │                                              │                  │
│         ▼                                              ▼                  │
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │                           MAPPINGS                                 │   │
│  │                                                                    │   │
│  │  Signal ──▶ HIPAA 164.312(a)(2)(iv)    (Encryption requirement)    │   │
│  │         ──▶ HITRUST 06.d               (Data protection)           │   │
│  │         ──▶ SOC2 CC6.1                 (Access controls)           │   │
│  │         ──▶ ISO27001 A.8.24            (Cryptography)              │   │
│  │                                                                    │   │
│  └────────────────────────────────────────────────────────────────────┘   │
│                                                                           │
└───────────────────────────────────────────────────────────────────────────┘
```

This integrated approach enables:
- **Automated compliance mapping**: One finding, multiple framework impacts
- **Consistent audit trails**: Same signal ID across all tools and reports
- **Cross-tool correlation**: Findings from different scanners share the same vocabulary
- **Evidence-based remediation**: Clear tracking from detection to verification

## Repository Structure

```
.
├── spec/              # Normative specifications
│   ├── cse-spec-v1.0.md
│   ├── signal-format-v1.0.md
│   ├── registry-format-v1.0.md
│   ├── mapping-format-v1.0.md
│   └── finding-format-v1.0.md
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
│       │   ├── CIS.json
│       │   ├── HIPAA.json
│       │   ├── HITRUST.json
│       │   ├── ISO27001.json
│       │   ├── NISTCSF.json
│       │   ├── PCIDSS.json
│       │   └── SOC2.json
│       └── SHA256SUMS
│
├── mappings/          # Signal-to-control and cross-framework mappings
│   └── v1.0.0/
│       ├── index.json
│       ├── frameworks/
│       ├── controls/
│       ├── signal-to-control/
│       │   ├── CCPA.json
│       │   ├── CIS.json
│       │   ├── CMMC.json
│       │   ├── FEDRAMP.json
│       │   ├── GDPR.json
│       │   ├── GEN.json           # Cross-framework GEN mappings
│       │   ├── HIPAA.json
│       │   ├── HITRUST.json
│       │   ├── ISO27001.json
│       │   ├── NISTCSF.json
│       │   ├── PCIDSS.json
│       │   └── SOC2.json
│       ├── equivalence/
│       │   └── GEN-to-domains.json  # GEN signal equivalences
│       └── cross-framework/
│           ├── CMMC-2.0-to-ISO27001-2022.json
│           ├── CMMC-2.0-to-NIST-CSF-2.0.json
│           ├── PCI-DSS-4.0-to-ISO27001-2022.json
│           └── SOC2-2017-to-ISO27001-2022.json
│
├── signals/           # Canonical signal definitions (human-readable)
│   ├── CCPA/
│   ├── CIS/
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
│   ├── signal.schema.json
│   ├── mapping.schema.json
│   ├── mapping-index.schema.json
│   ├── framework.schema.json
│   ├── control.schema.json
│   ├── finding.schema.json
│   ├── finding-set.schema.json
│   └── artifact.schema.json
│
└── examples/          # Reference examples (informative)
    ├── registry-example.json
    ├── signal-example.json
    ├── finding-example.json
    ├── finding-minimal-example.json
    ├── finding-set-example.json
    └── artifact-example.json
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
- [`CONTRIBUTING.md`](CONTRIBUTING.md): Contribution guidelines
- [`GOVERNANCE.md`](GOVERNANCE.md): Governance model and decision process
- [`CHANGELOG.md`](CHANGELOG.md): Version history

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
