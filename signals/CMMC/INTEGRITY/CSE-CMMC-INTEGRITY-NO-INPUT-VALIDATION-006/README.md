# CSE-CMMC-INTEGRITY-NO-INPUT-VALIDATION-006

**Input Validation Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-INTEGRITY-NO-INPUT-VALIDATION-006` |
| Domain | CMMC |
| Category | INTEGRITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Applications do not validate input data before processing, creating vulnerability to injection attacks.

This signal indicates that SQL injection, XSS, and command injection vulnerabilities may exist.

## Applicability

- Web application input handling
- API parameter validation
- Command-line argument processing
- File upload validation
- Database query construction

## Examples (Non-Normative)

### SQL Injection Vulnerability

```python
# Direct user input in query
query = f"SELECT * FROM users WHERE id = {user_input}"
cursor.execute(query)
```

### No Input Sanitization

```javascript
// XSS vulnerability
element.innerHTML = userProvidedContent;
```

## CMMC Context (Informative)

- **SI.L2-3.14.6**: Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks

## Related Signals

- `CSE-CMMC-INTEGRITY-NO-MALWARE-PROTECTION-001`
- `CSE-CMMC-CONFIG-INSECURE-DEFAULT-001`
