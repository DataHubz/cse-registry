# CSE-CIS-SOFTWARE-NO-LIBRARY-INVENTORY-004

**Software Library Inventory Missing**

## Signal Overview

| Field           | Value                                         |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CIS-SOFTWARE-NO-LIBRARY-INVENTORY-004`   |
| Domain          | CIS                                           |
| Category        | SOFTWARE                                      |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

An organization does not maintain an inventory of software libraries and third-party components used within enterprise applications.

This signal indicates that there is no comprehensive tracking of dependencies, frameworks, and libraries that applications rely upon, making it difficult to identify vulnerable components or respond to supply chain security incidents.

## Applicability

This signal applies to:

- Custom-developed applications
- Web applications and APIs
- Mobile applications
- Containerized applications
- Microservices architectures
- Infrastructure as Code templates
- Build and deployment pipelines
- Open source software usage

## Examples (Non-Normative)

### No Dependency Tracking

```json
// package.json without version pinning or SBOM generation
{
  "name": "app",
  "dependencies": {
    "express": "*",
    "lodash": "latest"
  }
}
```

### Missing SBOM Generation

```bash
# No Software Bill of Materials (SBOM) tooling
$ which syft
which: no syft in (/usr/local/bin:/usr/bin:/bin)

# No dependency scanning in CI/CD
$ cat .github/workflows/build.yml
# Missing: dependency audit step
```

### No Library Version Control

```python
# requirements.txt without version pins
flask
requests
sqlalchemy
# No automated tracking of these dependencies
```

## What This Signal Does NOT Assert

- Whether vulnerable libraries are in use
- The method for tracking libraries
- Compliance or non-compliance with any framework
- The frequency of library inventory updates
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 2 - Inventory and Control of Software Assets**
- **Safeguard 2.4**: Utilize software inventory tools, when possible, throughout the enterprise to automate the discovery and documentation of installed software.
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Identify

## Related Signals

- `CSE-CIS-SOFTWARE-NO-INVENTORY-001` — Software Inventory Missing
- `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-LIBRARIES-006` — Library Allowlisting Not Implemented
