# CSE Governance

This document defines the governance model for the **Compliance Signal Enumeration (CSE)** specification and registry.

## Stewardship Model

CSE is **open to the public** and **stewarded by [DataHubz](https://www.datahubz.com/)**.

This means:

- **Open to the public**: The registry data, schemas, and specifications are freely available for use, integration, and contribution under the Apache 2.0 license
- **Stewarded by DataHubz**: DataHubz maintains editorial control over what gets merged, ensuring quality, consistency, and long-term stability

This model is similar to how MITRE stewards CVE or how the Linux Foundation stewards open standards—the data is open, but there is a responsible organization ensuring its quality and availability.

### Stewardship Responsibilities

DataHubz, as steward, is responsible for:

- Maintaining the specification and registry
- Reviewing and accepting contributions
- Ensuring stability, neutrality, and long-term compatibility
- Publishing versioned releases
- Protecting the integrity of the identifier system
- Final editorial control over all content

## Governance Principles

CSE governance is guided by the following principles:

### Stability Over Speed

Changes are introduced conservatively. The value of CSE depends on identifiers remaining stable and meaningful over time. Rapid iteration is explicitly deprioritized in favor of durability.

### Neutrality Over Opinion

CSE does not favor any compliance framework, vendor, product, or methodology. Signals describe observable conditions without asserting compliance, severity, or remediation requirements.

### Compatibility Over Convenience

Backward compatibility is a core guarantee. Changes that would break existing integrations or alter the meaning of published identifiers are not permitted.

### Transparency Over Control

The specification, registry, and governance model are public. Decisions are documented. The registry is openly accessible for consumption and verification.

## Decision Authority

### Specification Changes

Changes to the CSE specification (`/spec`) require:

- Clear justification aligned with governance principles
- Assessment of backward compatibility impact
- Steward approval

Major version changes (e.g., v2.0) are reserved for breaking changes and require extended review.

### Registry Changes

Changes to the registry (`/registry`) follow these rules:

- **New signals**: May be added in minor versions (e.g., 1.1.0)
- **Existing signals**: Normative fields (`id`, `canonical_name`, `description`) are immutable once published
- **Deprecation**: Signals may be deprecated but never removed
- **Corrections**: Errors require new identifiers; existing identifiers are never repurposed

### Schema Changes

Changes to validation schemas (`/schemas`) must:

- Remain compatible with existing valid documents
- Support new optional fields without breaking validation
- Be versioned alongside specification changes

## Contribution Process

Contributions are welcome but acceptance is discretionary.

See `CONTRIBUTING.md` for detailed guidelines.

### What Can Be Contributed

- New signal definitions
- Clarifications to existing documentation
- Schema improvements (backward-compatible)
- Examples and tooling references
- Error corrections (via new identifiers)

### What Cannot Be Contributed

- Changes to published identifier semantics
- Compliance assertions or scoring systems
- Vendor-specific or product-specific content
- Remediation instructions in normative content

## Versioning Policy

### Specification Versions

| Version Type | Scope | Example |
|--------------|-------|---------|
| Major | Breaking changes | v2.0 |
| Minor | Backward-compatible extensions | v1.1 |
| Patch | Clarifications, typo fixes | v1.0.1 |

### Registry Versions

Registry versions are independent but declare compatibility with a specification version.

| Version Type | Scope | Example |
|--------------|-------|---------|
| Major | Structural changes | 2.0.0 |
| Minor | New signals added | 1.1.0 |
| Patch | Metadata corrections | 1.0.1 |

## Immutability Guarantees

Once published:

- Identifiers are permanent
- Identifier meanings never change
- Deprecated identifiers remain resolvable
- Registry versions are immutable snapshots

These guarantees enable long-term citation and reliable integration.

## Dispute Resolution

Disputes regarding signal definitions, contributions, or governance decisions are resolved by the steward.

Decisions prioritize:

1. Stability of existing identifiers
2. Neutrality of the registry
3. Long-term ecosystem health

## Contact

Questions, feedback, or governance discussions may be raised via [GitHub Issues](https://github.com/DataHubz/cse-registry/issues).

## Changes to This Document

This governance document may be updated by the steward.

Material changes will be noted in `CHANGELOG.md`.
