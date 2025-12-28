# CSE-CIS-APPSEC-NO-THIRD-PARTY-COMPONENTS-004

**Third-Party Component Inventory Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-THIRD-PARTY-COMPONENTS-004` |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not established and maintained an inventory of third-party software components used in applications.

This signal indicates the absence of a comprehensive catalog of open-source libraries, commercial components, frameworks, and dependencies that are integrated into organizational applications, along with their versions and vulnerability status.

## Applicability

This signal applies to:

- Application development teams
- DevOps and DevSecOps teams
- Application security teams
- Software composition analysis teams
- Dependency management teams
- Open source program offices
- Supply chain security teams
- IT asset management teams

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Software Bill of Materials (SBOM)

```text
Missing third-party component tracking:
- Open source libraries
- Commercial components
- Frameworks and SDKs
- Container base images
- JavaScript packages
- Python packages
- Java dependencies
- .NET packages
```

### Untracked Dependencies

```json
// package.json without inventory tracking
{
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21",
    "axios": "^0.27.2"
  }
}
```

### No Version Management

```python
# requirements.txt without version pinning or tracking
flask
sqlalchemy
requests
redis
celery
# Missing:
# - Exact versions
# - Vulnerability status
# - License information
# - Update schedule
# - EOL status
```

### Missing Transitive Dependency Tracking

```yaml
# Direct dependencies tracked, but not transitive ones
component_inventory:
  direct_dependencies:
    - name: spring-boot-starter-web
      version: 2.7.0
  # Missing:
  transitive_dependencies: not_tracked
  # Example hidden dependencies:
  # - spring-core
  # - spring-beans
  # - tomcat-embed-core (potential vulnerabilities)
```

### No License Compliance Tracking

```javascript
// Node.js dependencies without license tracking
{
  "dependencies": {
    "some-library": "1.2.3"
    // Missing license information:
    // - GPL (copyleft - legal risk)
    // - MIT (permissive - acceptable)
    // - Proprietary (license required)
  }
}
```

### Lack of Vulnerability Monitoring

```sql
-- Component database without vulnerability tracking
CREATE TABLE application_components (
    id INT PRIMARY KEY,
    component_name VARCHAR(255),
    version VARCHAR(50),
    application_id INT
    -- Missing columns:
    -- known_vulnerabilities INT
    -- last_vulnerability_scan TIMESTAMP
    -- cve_ids TEXT
    -- vulnerability_severity VARCHAR(20)
    -- update_available BOOLEAN
    -- eol_date DATE
);
```

### No Container Image Component Tracking

```dockerfile
# Dockerfile without component inventory
FROM ubuntu:20.04

RUN apt-get update && apt-get install -y \
    nginx \
    python3 \
    nodejs \
    # Versions not pinned
    # No SBOM generated
    # No vulnerability scanning
```

### Missing Update and EOL Tracking

```text
Component inventory without lifecycle management:
- No end-of-life (EOL) dates tracked
- No security update schedules
- No deprecation notices
- No migration planning for EOL components
- No automated alerts for outdated versions
```

## What This Signal Does NOT Assert

- Whether third-party components are in use
- The security of third-party components
- Whether components are up-to-date
- The specific inventory tool to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required component approval processes

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.4**: Establish and Manage an Inventory of Third-Party Software Components
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Establish and manage an updated inventory of third-party components used in development, often referred to as a 'bill of materials,' as well as components slated for future use. This inventory is to include any risks that each third-party component could pose. Evaluate the list at least monthly to identify any changes or updates to these components, and validate that the component is still supported."

This safeguard emphasizes comprehensive tracking of all third-party software components to manage supply chain risk and vulnerability exposure.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-SDLC-001` — Secure SDLC missing
- `CSE-CIS-VULN-NO-PROCESS-001` — Vulnerability management process missing (if defined)
- `CSE-CIS-ASSET-NO-INVENTORY-001` — Asset inventory missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of software composition analysis (SCA) practices
- Assessment of SBOM generation and maintenance
- Evaluation of dependency management processes
- Examination of vulnerability tracking for components
- Review of license compliance procedures
- Assessment of component approval workflows
- Analysis of EOL and update tracking

Third-party component inventory typically includes:

- **Component identification**: Name, version, source
- **Dependency tree**: Direct and transitive dependencies
- **Vulnerability status**: Known CVEs, severity, patch availability
- **License information**: License type, compliance requirements
- **Lifecycle status**: Support status, EOL dates, update schedule
- **Usage tracking**: Which applications use which components
- **Risk assessment**: Security and legal risks
- **SBOM formats**: SPDX, CycloneDX, SWID tags

Common inventory tools:
- Dependency scanners (npm audit, pip-audit, Maven dependency plugin)
- Software Composition Analysis (SCA) tools
- Container scanning tools
- SBOM generation tools
- License compliance tools
- Artifact repository managers

The presence of this signal indicates a condition that warrants review in the context of third-party component management requirements.
