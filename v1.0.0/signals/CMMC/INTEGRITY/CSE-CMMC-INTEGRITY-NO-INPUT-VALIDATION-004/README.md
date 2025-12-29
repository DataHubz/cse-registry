# CSE-CMMC-INTEGRITY-NO-INPUT-VALIDATION-004

**Input Validation Not Implemented**

## Signal Overview

| Field           | Value                                         |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CMMC-INTEGRITY-NO-INPUT-VALIDATION-004`  |
| Domain          | CMMC                                          |
| Category        | INTEGRITY                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

Applications do not validate, sanitize, or constrain input data before processing.

This signal indicates that applications may be vulnerable to injection attacks, buffer overflows, or other input-based exploits.

## Applicability

This signal applies to:

- Web application form inputs
- API request parameters
- File upload handling
- Database query construction
- Command execution with user input
- Data import and parsing
- URL and path handling

## Examples (Non-Normative)

### SQL Injection Vulnerability

```python
query = f"SELECT * FROM users WHERE id = {user_input}"
cursor.execute(query)
```

### Command Injection

```python
import os
os.system(f"ping {hostname}")  # User-controlled hostname
```

### Path Traversal

```python
filepath = f"/data/{user_filename}"
with open(filepath) as f:
    return f.read()
```

### XSS Vulnerability

```javascript
document.innerHTML = userInput;  // Unsanitized output
```

### Unvalidated Redirect

```python
return redirect(request.args.get('next'))  # Open redirect
```

## What This Signal Does NOT Assert

- Whether vulnerabilities have been exploited
- The presence of compensating controls (WAF, etc.)
- The sensitivity of affected data
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **SI.L2-3.14.5**: Implement security-relevant software and firmware updates

Note: While CMMC does not have a direct input validation control, this is a fundamental application security practice that affects system integrity.

## Related Signals

- `CSE-CMMC-INTEGRITY-NO-PATCHING-002` — Security Patching Not Current
- `CSE-GEN-SECRETS-PLAINTEXT-001` — Plaintext Secret in Source Code
