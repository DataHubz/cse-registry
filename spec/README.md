# CSE Specification

This directory contains the **normative specifications** for the **Compliance Signal Enumeration (CSE)** system.

Documents in this directory define the authoritative rules, structures, and semantics that govern how CSE identifiers are created, interpreted, versioned, and referenced.

All specifications in this directory are intended to be:
- Stable
- Precise
- Machine- and human-readable
- Suitable for long-term citation

## Purpose of the Specification

The CSE specification defines:

- What constitutes a **Compliance Signal**
- How signals are **identified and enumerated**
- The **syntax and structure** of CSE identifiers
- Versioning and compatibility rules
- The separation of **signals** from **findings**, **assessments**, and **judgments**
- Optional metadata fields for enrichment without breaking neutrality

The specification deliberately avoids:
- Compliance scoring
- Certification criteria
- Severity assertions
- Remediation requirements

Those concerns belong to **implementations**, not the registry.

## Normative Language

The key words **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** in this specification are to be interpreted as described in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119).

## Specification Documents

### Current Version

| Specification | File | Status | Scope |
|---------------|------|--------|-------|
| **CSE Specification v1.0** | `cse-spec-v1.0.md` | Stable | Core identifier system, registry model, schemas, and governance rules |
| **Signal Format v1.0** | `signal-format-v1.0.md` | Stable | Signal definition structure and required fields |
| **Registry Format v1.0** | `registry-format-v1.0.md` | Stable | Registry artifact structure and formats |
| **Mapping Format v1.0** | `mapping-format-v1.0.md` | Stable | Signal-to-control and signal-to-signal mappings |
| **Finding Format v1.0** | `finding-format-v1.0.md` | Stable | Finding and artifact structure for interoperability |

### Future Versions

Future versions will be introduced only when:
- Backward compatibility cannot be preserved, or
- New categories of signals require formal extension

Minor clarifications and additions may be released as v1.x revisions without breaking compatibility.

## Relationship to Other Directories

- `/registry`
  Contains versioned, machine-readable registry artifacts derived from this specification.

- `/signals`
  Contains canonical, human-readable signal definitions that conform to this specification.

- `/mappings`
  Contains versioned signal-to-control and cross-framework mappings.

- `/schemas`
  Contains validation schemas that enforce the rules defined here.

- `/examples`
  Contains non-normative examples to aid adoption.

The specification is the **source of truth**.
All other artifacts must conform to it.

## Change Control

The specification is stewarded by **[DataHubz](https://www.datahubz.com/)**.

Changes are introduced conservatively and guided by:
- Stability
- Interoperability
- Long-term compatibility
- Neutrality

Proposed changes may be discussed publicly, but acceptance is discretionary and focused on preserving the integrity of the system.

See `GOVERNANCE.md` for details.

## Citation

When referencing the CSE specification, use a versioned citation, for example:

> Compliance Signal Enumeration (CSE) Specification v1.0  
> https://cse-registry.org/spec/cse-spec-v1.0

## Disclaimer

This specification is provided for informational purposes only.

Use of CSE identifiers does not imply compliance, certification, or regulatory approval.

## Next Steps

- Read `cse-spec-v1.0.md`
- Explore the registry artifacts in `/registry`
- Review signal definitions in `/signals`
- Validate integrations using schemas in `/schemas`