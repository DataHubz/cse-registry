# Compliance Signal Enumeration (CSE)

**A neutral, framework-agnostic registry of compliance-relevant technical signals**

## What is CSE?

**Compliance Signal Enumeration (CSE)** is a public specification and registry that defines **stable identifiers** for recurring **technical signals** observed in software, infrastructure, and operational artifacts that are relevant to compliance and risk assessments.

CSE exists to give tools, teams, and assessors a **shared language** for referencing *what was observed* without asserting compliance, certification, severity, or remediation requirements.

CSE is **descriptive**, not prescriptive.

## What CSE Is (and Is Not)

### CSE **is**
- A registry of stable, canonical identifiers
- A neutral reference layer for compliance-relevant technical signals
- Framework-agnostic (CMMC, ISO 27001, SOC 2, GDPR, etc.)
- Designed for long-term citation and interoperability
- Open and publicly accessible

### CSE **is not**
- A compliance framework
- A certification or assessment standard
- A scoring system
- A remediation guide
- A product or platform

CSE names signals.  
Assessments and judgments remain contextual and human-driven.

## Why a Registry?

CSE is intentionally structured as a **registry** because its primary role is to:

- Enumerate signal identifiers
- Maintain canonical definitions
- Provide stable references over time
- Act as a single source of truth

This mirrors how other foundational systems operate (e.g., vulnerability identifiers, license identifiers, telemetry schemas).

## Core Concepts

- **Signal**  
  An observable technical condition or pattern derived from artifacts such as:
  - Source code
  - Configuration files
  - Infrastructure-as-code
  - CI/CD pipelines
  - Container images
  - Runtime metadata

- **Enumeration**  
  A stable catalog of named signal classes with unique identifiers.

- **Finding**  
  A concrete instance where a signal is observed in a specific context  
  (findings are implementation-specific and **not stored in this registry**).

## Repository Structure

This repository contains:

- **Specifications**  
  Normative definitions of the CSE system and schemas.

- **Registry Artifacts**  
  Machine-readable, versioned signal registries.

- **Signal Definitions**  
  Human-readable canonical descriptions of each signal.

- **Schemas & Examples**  
  Validation schemas and reference examples to support tooling adoption.

No product code or findings are stored here.

## Directory Overview

```
.
├── spec/          # Normative specifications
├── registry/      # Versioned, machine-readable registry artifacts
├── signals/       # Canonical signal definitions (human-readable)
├── schemas/       # JSON schemas for validation
├── examples/      # Reference examples (informative)

```

## Governance & Stewardship

CSE is originally developed and stewarded by **DataHubz**.

The specification and registry are public and versioned.  
Stewardship is centralized for v1.x to ensure stability, neutrality, and consistency.

Contributions and feedback are welcome, but inclusion of changes is discretionary and guided by long-term compatibility concerns.

See:
- `GOVERNANCE.md`
- `CONTRIBUTING.md`


## License

This project is licensed under the **Apache License 2.0**.

The license applies to:
- Specifications
- Registry artifacts
- Signal definitions
- Schemas and examples

Implementations may be open-source or proprietary.

## Disclaimer

CSE is an informational specification intended to support compliance-related workflows.

Use of CSE does **not** imply:
- Compliance
- Certification
- Regulatory approval
- Endorsement by any authority

## Getting Started

- Read the specification in `/spec`
- Browse signal definitions in `/signals`
- Consume the registry artifacts in `/registry`
- Use schemas in `/schemas` to validate integrations

## Contact

Questions, feedback, or discussion can be opened via repository issues.

**CSE is open infrastructure.  
Trust, interpretation, and verification belong to implementations.**