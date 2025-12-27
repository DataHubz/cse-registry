# CSE Examples

This directory contains **non-normative reference examples** to aid adoption and integration with the CSE registry.

## Purpose

The examples in this directory are intended to:

- Illustrate correct usage of CSE schemas
- Provide starting points for implementers
- Demonstrate expected structure and content
- Support testing and validation workflows

## Status

All examples in this directory are **informative, not normative**.

They do not define requirements and may be updated for clarity without following the formal change control process.

## Contents

| File | Description |
|------|-------------|
| `registry-example.json` | Example registry artifact structure |
| `signal-example.json` | Example signal definition |

## Usage

### Validating Against Schemas

Examples can be validated against the official schemas in `/schemas`:

```bash
# Using ajv-cli (Node.js)
npx ajv validate -s ../schemas/registry.schema.json -d registry-example.json
npx ajv validate -s ../schemas/signal.schema.json -d signal-example.json
```

```bash
# Using jsonschema (Python)
jsonschema -i registry-example.json ../schemas/registry.schema.json
jsonschema -i signal-example.json ../schemas/signal.schema.json
```

### As Templates

Implementers may use these examples as templates when:

- Building tools that produce CSE-compatible output
- Creating new signal definitions
- Testing registry consumption logic

## Relationship to Canonical Data

These examples are **independent** of the canonical data in `/signals` and `/registry`.

For authoritative signal definitions and registry artifacts, always refer to:

- `/signals` — Canonical signal definitions
- `/registry` — Versioned registry artifacts

## Disclaimer

Examples are provided for illustrative purposes only.

They do not imply compliance, certification, or endorsement.
