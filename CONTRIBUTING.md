# Contributing to CSE

Thank you for your interest in contributing to the **Compliance Signal Enumeration (CSE)** project.

CSE is **open to the public** and **stewarded by [DataHubz](https://www.datahubz.com/)**. Community contributions are welcome and encouraged. DataHubz maintains editorial control over what gets merged to ensure quality, consistency, and long-term stability.

This document provides guidelines for contributing to the specification, registry, and supporting materials.

## Before Contributing

Please read and understand:

- [README.md](README.md) — Project overview
- [GOVERNANCE.md](GOVERNANCE.md) — Governance model and principles
- [spec/cse-spec-v1.0.md](spec/cse-spec-v1.0.md) — Core specification
- [spec/signal-format-v1.0.md](spec/signal-format-v1.0.md) — Signal definition format

## What You Can Contribute

### New Signal Definitions

The most common contribution is proposing new signals.

Before proposing a signal:

1. **Search existing signals** to avoid duplication
2. **Verify it describes an observable condition**, not a compliance requirement
3. **Ensure it is framework-agnostic** (for GEN) or correctly scoped to a specific domain
4. **Confirm it avoids remediation language** and severity assertions

### Documentation Improvements

- Clarifications to README files
- Improved examples
- Typo corrections
- Additional context in signal README.md files

### Schema Enhancements

- New optional fields (backward-compatible only)
- Improved validation patterns
- Additional format documentation

### Tooling References

- Links to compatible tools (in documentation, not in normative content)
- Validation script examples
- Integration guidance

## What Cannot Be Contributed

The following will not be accepted:

- Changes to published identifier semantics
- Compliance determinations or scoring
- Severity assertions in normative content
- Remediation instructions in signal definitions
- Vendor-specific or marketing content
- Product placement

## Proposing a New Signal

### Step 1: Check for Duplicates

Search the `/signals` directory and existing issues to ensure the signal doesn't already exist.

### Step 2: Draft the Signal

Create the following files following the directory structure:

```
signals/<DOMAIN>/<CATEGORY>/<CSE-ID>/
├── signal.json
└── README.md
```

#### signal.json Requirements

Required fields:

```json
{
  "id": "CSE-<DOMAIN>-<CATEGORY>-<NAME>-<SERIAL>",
  "canonical_name": "Human-Readable Name",
  "description": "Describes what is observable...",
  "domain": "<DOMAIN>",
  "category": "<CATEGORY>",
  "applicability": "Where this signal applies...",
  "introduced_in": "1.x.0",
  "status": "active"
}
```

Optional metadata:

```json
{
  "metadata": {
    "suggested_severity": "medium",
    "risk_domains": ["example-domain"],
    "related_controls": ["CTRL-001"],
    "detection_notes": "How this might be detected..."
  }
}
```

#### README.md Requirements

Include:

- Signal overview table
- Description (expanded)
- Applicability details
- Non-normative examples
- What the signal does NOT assert
- Related signals (if any)
- Cross-references (informative)

### Step 3: Validate

Validate your signal against the schema:

```bash
npx ajv validate -s schemas/signal.schema.json -d signals/<path>/signal.json
```

### Step 4: Submit

Open a pull request with:

- The new signal directory and files
- A clear description of the signal's purpose
- Justification for the domain and category placement

## Contribution Guidelines

### Writing Style

- Use clear, precise language
- Describe what is observable, not what should be done
- Avoid marketing language
- Avoid tool-specific references in normative content

### Identifier Format

Identifiers must follow the pattern:

```
CSE-<DOMAIN>-<CATEGORY>-<NAME>-<SERIAL>
```

- `DOMAIN`: Uppercase, 2-32 characters (e.g., GEN, CMMC, ISO27001)
- `CATEGORY`: Uppercase, 2-32 characters (e.g., ACCESS, SECRETS)
- `NAME`: Uppercase, hyphen-separated descriptive name
- `SERIAL`: Zero-padded, minimum 3 digits (e.g., 001)

### Commit Messages

Use clear, descriptive commit messages:

```
Add CSE-GEN-SECRETS-PLAINTEXT-001 signal

Defines a signal for plaintext secrets in source code.
Applicable to any version-controlled repository.
```

## Review Process

1. **Initial review**: DataHubz reviews for format compliance and governance alignment
2. **Content review**: Assessment of signal clarity, neutrality, and non-duplication
3. **Schema validation**: Automated validation against schemas
4. **Merge or feedback**: Accepted contributions are merged by DataHubz; others receive feedback

Acceptance is discretionary. DataHubz maintains final editorial control. Contributions may be declined if they conflict with governance principles or quality standards.

## Code of Conduct

Contributors are expected to:

- Engage respectfully
- Focus on technical merit
- Avoid promotional content
- Respect the neutrality of the project

## Questions

For questions about contributing, open an issue on [GitHub](https://github.com/DataHubz/cse-registry/issues).

## License

By contributing, you agree that your contributions will be licensed under the Apache License 2.0.
