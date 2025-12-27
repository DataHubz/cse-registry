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
├── GEN/                          # General, framework-agnostic signals
│   └── <CATEGORY>/
│       └── <CSE-ID>/
│           ├── signal.json       # Normative definition
│           └── README.md         # Human-readable explanation
├── CMMC/                         # CMMC-specific signals
│   └── <CATEGORY>/
│       └── <CSE-ID>/
│           ├── signal.json
│           └── README.md
├── ISO27001/                     # ISO/IEC 27001 signals
├── GDPR/                         # GDPR signals
└── SOC2/                         # SOC 2 signals
```

### Naming Conventions

- **Domain directories**: Uppercase (e.g., `GEN`, `CMMC`, `ISO27001`)
- **Category directories**: Uppercase (e.g., `ACCESS`, `SECRETS`, `LOGGING`)
- **Signal directories**: Full CSE identifier (e.g., `CSE-GEN-SECRETS-PLAINTEXT-001`)

## Signal Definition Files

Each signal is represented by a directory containing two files:

### signal.json

The **normative, machine-readable definition** of the signal.

Required fields:
- `id` — CSE identifier
- `canonical_name` — Human-readable name
- `description` — Normative description of what is observable
- `domain` — Applicable domain or framework
- `category` — Functional classification
- `applicability` — Scope and context of relevance
- `introduced_in` — Registry version where first introduced
- `status` — `active` or `deprecated`

Optional fields:
- `metadata` — Informative, non-normative enrichment

See `/schemas/signal.schema.json` for the full validation schema.

### README.md

A **human-readable explanation** of the signal, including:

- Plain-language description
- Non-normative examples
- Contextual notes
- Cross-references to related signals or controls

The README MUST NOT contradict `signal.json`.

## Domains

### GEN (General)

Framework-agnostic signals applicable across industries and compliance regimes.

Use `GEN` for signals that are not specific to any single framework.

### CMMC

Signals relevant to the Cybersecurity Maturity Model Certification.

### ISO27001

Signals relevant to ISO/IEC 27001 information security management.

### GDPR

Signals relevant to the General Data Protection Regulation.

### SOC2

Signals relevant to SOC 2 Trust Services Criteria.

## Categories

Categories represent functional classifications of signals. Common categories include:

| Category   | Description                                      |
|------------|--------------------------------------------------|
| ACCESS     | Access control and authorization                 |
| SECRETS    | Secrets management and credential handling       |
| LOGGING    | Audit logging and monitoring                     |
| CONFIG     | Configuration and hardening                      |
| CRYPTO     | Cryptographic controls                           |
| DATA       | Data protection and handling                     |
| IDENTITY   | Identity and authentication                      |
| NETWORK    | Network security                                 |
| SUPPLY     | Supply chain and dependency management           |

New categories may be introduced as the registry evolves.

## Stability Guarantees

Once published:

- `id`, `canonical_name`, and `description` MUST NOT change
- Optional metadata MAY be extended
- Clarifications MAY be added to README.md
- Deprecated signals MUST remain documented indefinitely

## Validation

Signal definitions SHOULD be validated against the schema:

```
/schemas/signal.schema.json
```

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
