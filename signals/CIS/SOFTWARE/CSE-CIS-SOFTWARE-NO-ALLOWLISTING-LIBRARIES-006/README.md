# CSE-CIS-SOFTWARE-NO-ALLOWLISTING-LIBRARIES-006

**Library Allowlisting Not Implemented**

## Signal Overview

| Field           | Value                                                |
|-----------------|------------------------------------------------------|
| Identifier      | `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-LIBRARIES-006`     |
| Domain          | CIS                                                  |
| Category        | SOFTWARE                                             |
| Status          | Active                                               |
| Introduced In   | 1.0.0                                                |

## Description

An organization does not implement technical controls to ensure that only authorized software libraries and third-party components can be loaded or executed by applications.

This signal indicates that applications can dynamically load any library or dependency without restriction, potentially allowing malicious or vulnerable components to be introduced at runtime.

## Applicability

This signal applies to:

- Application runtime environments
- Web application servers
- API gateways and microservices
- Container orchestration platforms
- Development and build environments
- Continuous integration/deployment pipelines
- Database systems with plugin support
- Browser extensions and plugins

## Examples (Non-Normative)

### No Dependency Verification

```javascript
// Node.js application loading modules without verification
const express = require('express');
// No integrity checking or allowlist verification
```

### Missing Container Image Verification

```yaml
# Kubernetes pod without image verification
apiVersion: v1
kind: Pod
metadata:
  name: app
spec:
  containers:
  - name: app
    image: myapp:latest
    # No image signature verification
    # No allowed registry enforcement
```

### No Python Package Restrictions

```bash
# pip install without restrictions
$ pip install some-random-package
# No allowlist check, no hash verification

# requirements.txt without integrity hashes
$ cat requirements.txt
django
requests
```

## What This Signal Does NOT Assert

- Whether malicious libraries are currently loaded
- The specific verification mechanism to be used
- Compliance or non-compliance with any framework
- The granularity of library control
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 2 - Inventory and Control of Software Assets**
- **Safeguard 2.6**: Allowlist authorized software libraries. Block unauthorized software libraries from loading into an enterprise asset's active memory or from executing.
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Identify

## Related Signals

- `CSE-CIS-SOFTWARE-NO-LIBRARY-INVENTORY-004` — Software Library Inventory Missing
- `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-005` — Software Allowlisting Not Implemented
- `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-SCRIPTS-007` — Script Allowlisting Not Implemented
