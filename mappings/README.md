# CSE Mappings

This directory contains **machine-readable mappings** between CSE signals and external framework controls.

## Purpose

CSE Mappings enable:

- **Cross-framework correlation** — Understand how signals relate to multiple frameworks
- **Gap analysis** — Identify which controls lack signal coverage
- **Evidence mapping** — Connect findings to compliance requirements
- **Multi-framework reporting** — Generate reports across frameworks from single signal sets

## Specification

See [Mapping Format Specification v1.0](../spec/mapping-format-v1.0.md) for the normative specification.

## Directory Structure

```
mappings/
├── README.md                              # This file
└── v1.0.0/                                # Mapping dataset version
    ├── index.json                         # Dataset metadata and statistics
    │
    ├── frameworks/                        # Framework definitions
    │   ├── CCPA.json
    │   ├── CIS-CONTROLS-8.1.json
    │   ├── CMMC-2.0.json
    │   ├── FEDRAMP.json
    │   ├── GDPR.json
    │   ├── HIPAA.json
    │   ├── HITRUST-11.json
    │   ├── ISO27001-2022.json
    │   ├── NIST-CSF-2.0.json
    │   ├── PCI-DSS-4.0.json
    │   └── SOC2-2017.json
    │
    ├── controls/                          # Control definitions by framework
    │   ├── CMMC-2.0.json
    │   ├── ISO27001-2022.json
    │   ├── NIST-CSF-2.0.json
    │   ├── PCI-DSS-4.0.json
    │   └── SOC2-2017.json
    │
    ├── signal-to-control/                 # Signal → Control mappings
    │   ├── CCPA.json
    │   ├── CIS.json
    │   ├── CMMC.json
    │   ├── FEDRAMP.json
    │   ├── GDPR.json
    │   ├── GEN.json                       # Cross-framework GEN mappings
    │   ├── HIPAA.json
    │   ├── HITRUST.json
    │   ├── ISO27001.json
    │   ├── NISTCSF.json
    │   ├── PCIDSS.json
    │   └── SOC2.json
    │
    ├── equivalence/                       # Signal ↔ Signal mappings
    │   └── GEN-to-domains.json            # GEN ↔ domain-specific signals
    │
    └── cross-framework/                   # Framework ↔ Framework via signals
        ├── CMMC-2.0-to-ISO27001-2022.json
        ├── CMMC-2.0-to-NIST-CSF-2.0.json
        ├── PCI-DSS-4.0-to-ISO27001-2022.json
        └── SOC2-2017-to-ISO27001-2022.json
```

## Relationship Types

Mappings use set-theoretic relationships:

| Type | Symbol | Meaning |
|------|--------|---------|
| `equivalent` | ≡ | Identical scope and meaning |
| `subset` | ⊂ | Signal addresses part of control |
| `superset` | ⊃ | Signal exceeds control scope |
| `intersects` | ∩ | Partial overlap |
| `related` | ~ | Conceptual relationship |

## Provenance

Every mapping declares its source:

| Source | Description | Confidence |
|--------|-------------|------------|
| `authoritative` | From framework authority | 0.95–1.00 |
| `expert` | Domain expert curated | 0.80–0.94 |
| `derived` | Algorithmically inferred | 0.60–0.79 |
| `community` | Community contributed | 0.40–0.59 |

## Versioning

Mappings use triple versioning:

1. **CSE Registry Version** — Version of signal definitions
2. **Framework Version** — Version of target framework
3. **Mapping Dataset Version** — Version of the mapping collection

## Usage Examples

### Query: What controls does a signal satisfy?

```bash
# Using jq to filter mappings
jq '.mappings[] | select(.source.id == "CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001")' \
  mappings/v1.0.0/signal-to-control/by-domain/CMMC.json
```

### Query: What signals satisfy a control?

```bash
jq '.mappings[] | select(.target.id == "AC.L2-3.1.1")' \
  mappings/v1.0.0/signal-to-control/by-framework/CMMC-2.0.json
```

### Query: Cross-framework mapping

```bash
# Find ISO 27001 equivalents for CMMC signals
jq '.mappings[] | select(.source.id | startswith("CSE-CMMC"))' \
  mappings/v1.0.0/signal-to-control/by-framework/ISO27001-2022.json
```

## Validation

Mappings can be validated against JSON schemas:

```bash
# Validate a mapping file
npx ajv validate -s ../schemas/mapping.schema.json -d signal-to-control/by-domain/CMMC.json

# Validate framework definition
npx ajv validate -s ../schemas/framework.schema.json -d frameworks/CMMC-2.0.json

# Validate control definitions
npx ajv validate -s ../schemas/control.schema.json -d controls/CMMC-2.0/AC.json
```

## Relationship to Signals

Mappings are **separate artifacts** from signals:

- Signals are **immutable** once published
- Mappings can **evolve** as frameworks update
- Mappings do not change signal semantics
- Multiple mapping sources may coexist

## Relationship to Findings

Mappings enable **automated compliance mapping** from findings:

1. A finding references a CSE signal (e.g., `CSE-HIPAA-TECH-NO-ENCRYPTION-004`)
2. Mappings link that signal to framework controls (e.g., HIPAA 164.312(a)(2)(iv))
3. Compliance platforms can automatically show which controls are impacted

This enables:
- **Multi-framework reporting** — One finding, multiple framework impacts
- **Gap analysis** — Identify controls without signal coverage
- **Evidence collection** — Connect findings to compliance requirements

See [Finding Format Specification](../spec/finding-format-v1.0.md) for how findings reference signals.

## Contributing

To contribute mappings:

1. Ensure source signal exists in CSE registry
2. Verify target control exists in framework
3. Select appropriate relationship type
4. Provide justification for the mapping
5. Declare provenance source

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## Disclaimer

Mappings are informative aids for compliance correlation.

Inclusion of a mapping does not imply:
- Official endorsement by framework authorities
- Guaranteed compliance satisfaction
- Legal or regulatory approval

Organizations are responsible for their own compliance determinations.
