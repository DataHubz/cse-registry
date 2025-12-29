# CSE-GDPR-SECURITY-NO-PSEUDONYMIZATION-001

**Pseudonymization Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-PSEUDONYMIZATION-001` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Personal data is not pseudonymized where appropriate, increasing risk in case of unauthorized access or breach.

Pseudonymization is a security measure that renders data less identifiable while still allowing processing for legitimate purposes. It involves replacing direct identifiers with pseudonyms or tokens.

## Applicability

- Analytics and reporting systems
- Research and statistical processing
- Customer databases with high breach risk
- Data sharing with third parties
- Development and testing environments

## Examples (Non-Normative)

### Direct Storage of Identifiers

```python
# Signal Present: Storing identifiable data directly
user_analytics = {
    "email": "john.doe@example.com",
    "name": "John Doe",
    "purchase_history": [...]
}
```

### Missing Pseudonymization in Analytics

```sql
-- Signal Present: Using real customer IDs in analytics
SELECT customer_email, COUNT(*) as orders
FROM orders
GROUP BY customer_email;
```

### Remediation Example

```python
# Signal Resolved: Using pseudonymized identifiers
import hashlib

def pseudonymize(identifier, salt):
    return hashlib.sha256(f"{identifier}{salt}".encode()).hexdigest()

user_analytics = {
    "user_token": pseudonymize(user_email, secret_salt),
    "purchase_history": [...]
}
```

## GDPR Context (Informative)

- **Art. 32.1(a)**: Controllers and processors must implement appropriate technical measures including pseudonymization
- **Art. 25**: Data protection by design and default should include pseudonymization where appropriate
- **Recital 28**: Pseudonymization can reduce risks to data subjects and help controllers meet data protection obligations

## Related Signals

- `CSE-GDPR-SECURITY-NO-ENCRYPTION-002`
- `CSE-GDPR-PRINCIPLES-NO-DATA-MINIMIZATION-005`
- `CSE-GDPR-SECURITY-NO-RISK-ASSESSMENT-009`
