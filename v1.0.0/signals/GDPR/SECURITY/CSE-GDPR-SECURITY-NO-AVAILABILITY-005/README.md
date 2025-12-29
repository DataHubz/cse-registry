# CSE-GDPR-SECURITY-NO-AVAILABILITY-005

**Availability Measures Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-AVAILABILITY-005` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems lack adequate measures to ensure ongoing availability of personal data processing systems.

Availability ensures that data and processing capabilities remain accessible to authorized users when needed, supporting data subject rights and business operations.

## Applicability

- Data subject access request systems
- Customer-facing applications
- Database infrastructure
- Backup and recovery systems
- API services for data processing
- Rights management systems (erasure, rectification)

## Examples (Non-Normative)

### Single Point of Failure

```yaml
# Signal Present: Single database instance without failover
services:
  app:
    image: myapp:latest
    depends_on:
      - db
  db:
    image: postgres:14
    # No replication, no backup instance
    volumes:
      - ./data:/var/lib/postgresql/data
```

### Missing Health Monitoring

```python
# Signal Present: No health checks or monitoring
@app.route('/api/user-data')
def get_user_data():
    # No error handling or retry logic
    # No monitoring of database availability
    return db.query("SELECT * FROM users")
```

### No Redundancy

```javascript
// Signal Present: Single API endpoint with no failover
const API_ENDPOINT = 'https://api.example.com/data';

async function fetchUserData(userId) {
    // No fallback, no retry, no circuit breaker
    return await fetch(`${API_ENDPOINT}/users/${userId}`);
}
```

### Remediation Example

```yaml
# Signal Resolved: High availability configuration
services:
  app:
    image: myapp:latest
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
        max_attempts: 3
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost/health"]
      interval: 30s
      timeout: 10s
      retries: 3

  db-primary:
    image: postgres:14
    environment:
      POSTGRES_REPLICATION_MODE: master

  db-replica:
    image: postgres:14
    environment:
      POSTGRES_REPLICATION_MODE: slave
      POSTGRES_MASTER_HOST: db-primary

  load-balancer:
    image: nginx:alpine
    depends_on:
      - app
```

```python
# Signal Resolved: Monitoring and retry logic
from tenacity import retry, stop_after_attempt, wait_exponential
import logging

logger = logging.getLogger(__name__)

@retry(
    stop=stop_after_attempt(3),
    wait=wait_exponential(multiplier=1, min=1, max=10)
)
def get_user_data_with_retry():
    try:
        return db.query("SELECT * FROM users")
    except Exception as e:
        logger.error(f"Database unavailable: {e}")
        # Alert monitoring system
        monitoring.alert('database_unavailable', severity='high')
        raise

@app.route('/api/user-data')
def get_user_data():
    try:
        return get_user_data_with_retry()
    except Exception:
        return jsonify({'error': 'Service temporarily unavailable'}), 503
```

## GDPR Context (Informative)

- **Art. 32.1(b)**: Ensure ongoing availability of processing systems and services
- **Art. 32.1(c)**: Ability to restore availability and access to personal data in a timely manner
- **Recital 49**: Access to personal data should be ensured for data subjects to exercise their rights

## Related Signals

- `CSE-GDPR-SECURITY-NO-RESILIENCE-006`
- `CSE-GDPR-SECURITY-NO-RECOVERY-CAPABILITY-007`
- `CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-007`
