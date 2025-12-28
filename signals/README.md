# CSE Signal Definitions

This directory contains the **canonical, human-readable definitions** for all Compliance Signals in the CSE registry.

Each signal definition represents the **authoritative semantic description** of a single CSE identifier.

## Purpose

The `/signals` directory exists to:

- Provide clear, human-readable documentation for each signal
- Serve as the source of truth for signal semantics
- Enable clean, diff-based contributions and reviews
- Support deterministic generation of registry artifacts

Signal definitions are **normative**.
Registry artifacts in `/registry` are derived from these definitions.

## Directory Structure

Signals are organized hierarchically by domain and category:

```
signals/
├── README.md
├── CCPA/                         # California Consumer Privacy Act (70 signals)
├── CIS/                          # CIS Controls v8.1 (120 signals)
├── CMMC/                         # CMMC 2.0 (134 signals)
├── FEDRAMP/                      # FedRAMP (145 signals)
├── GDPR/                         # General Data Protection Regulation (80 signals)
├── GEN/                          # General Security Signals (55 signals)
├── HIPAA/                        # HIPAA (75 signals)
├── HITRUST/                      # HITRUST CSF (126 signals)
├── ISO27001/                     # ISO/IEC 27001:2022 (93 signals)
├── NISTCSF/                      # NIST Cybersecurity Framework 2.0 (106 signals)
├── PCIDSS/                       # PCI DSS v4.0 (64 signals)
└── SOC2/                         # SOC 2 Trust Services Criteria (64 signals)

Each domain follows this structure:
<DOMAIN>/
└── <CATEGORY>/
    └── <CSE-ID>/
        └── README.md             # Signal definition
```

### Naming Conventions

- **Domain directories**: Uppercase (e.g., `GEN`, `CMMC`, `ISO27001`)
- **Category directories**: Uppercase (e.g., `ACCESS`, `SECRETS`, `LOGGING`)
- **Signal directories**: Full CSE identifier (e.g., `CSE-GEN-SECRETS-PLAINTEXT-001`)

## Signal Definition Files

Each signal is represented by a directory containing a README.md file with:

- Signal identifier and canonical name
- Plain-language description
- Framework-specific context (where applicable)
- Cross-references to related signals or controls

Signal definitions are **normative** and serve as the source of truth for registry generation.

## Domains

| Domain | Framework | Signals | Categories |
|--------|-----------|---------|------------|
| **CCPA** | California Consumer Privacy Act (CCPA/CPRA) | 70 | 11 |
| **CIS** | CIS Controls v8.1 | 120 | 18 |
| **CMMC** | Cybersecurity Maturity Model Certification 2.0 | 134 | 15 |
| **FEDRAMP** | Federal Risk and Authorization Management Program | 145 | 20 |
| **GDPR** | General Data Protection Regulation | 80 | 10 |
| **GEN** | General Security Signals (framework-agnostic) | 55 | 12 |
| **HIPAA** | Health Insurance Portability and Accountability Act | 75 | 6 |
| **HITRUST** | HITRUST Common Security Framework | 126 | 19 |
| **ISO27001** | ISO/IEC 27001:2022 | 93 | 4 |
| **NISTCSF** | NIST Cybersecurity Framework 2.0 | 106 | 22 |
| **PCIDSS** | Payment Card Industry Data Security Standard v4.0 | 64 | 12 |
| **SOC2** | SOC 2 Trust Services Criteria | 64 | 5 |

**Total: 1,132 signals across 12 domains**

### GEN (General Security Signals)

Framework-agnostic signals representing universal security concepts that appear across multiple compliance frameworks. Use `GEN` for foundational security requirements common to all environments.

## Categories

Categories represent functional classifications of signals. Categories vary by domain, but common categories include:

| Category | Description |
|----------|-------------|
| ACCESS | Access control and authorization |
| ACCOUNT | Account management |
| APPSEC | Application security |
| ASSET | Asset management |
| AUDIT | Audit logging and monitoring |
| AUTH | Authentication mechanisms |
| CONFIG | Configuration and hardening |
| CRYPTO | Cryptographic controls |
| DATA | Data protection and handling |
| GOVERN | Governance and policy |
| IDENTITY | Identity and authentication |
| INCIDENT | Incident response |
| NETWORK | Network security |
| PHYSICAL | Physical security |
| PRIVACY | Privacy controls |
| RISK | Risk management |
| SECRETS | Secrets management and credential handling |
| VENDOR | Third-party/vendor management |
| VULN | Vulnerability management |

Each domain defines its own set of categories aligned with the framework's structure. See individual domain directories for category listings.

## Stability Guarantees

Once published:

- `id`, `canonical_name`, and `description` MUST NOT change
- Optional metadata MAY be extended
- Clarifications MAY be added to README.md
- Deprecated signals MUST remain documented indefinitely

## Validation

Signal definitions are validated during registry generation to ensure consistency and completeness.

## Relationship to Registry

The `/signals` directory is the **source of truth**.

Registry artifacts in `/registry` are **derived** from these definitions and MUST remain consistent.

## Contributing

To propose a new signal:

1. Review existing signals to avoid duplication
2. Follow the directory and file structure conventions
3. Ensure the signal is descriptive, not prescriptive
4. Validate against the schema before submitting

See `CONTRIBUTING.md` for detailed guidelines.

## Disclaimer

Signal definitions are descriptive references only.

Inclusion of a signal does not imply compliance, certification, or regulatory approval.
