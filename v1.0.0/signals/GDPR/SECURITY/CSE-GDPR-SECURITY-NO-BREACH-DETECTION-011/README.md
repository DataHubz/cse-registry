# CSE-GDPR-SECURITY-NO-BREACH-DETECTION-011

**Breach Detection Mechanisms Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-BREACH-DETECTION-011` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization lacks mechanisms to detect personal data breaches in a timely manner.

Breach detection capabilities are essential to meet the 72-hour notification requirement and minimize harm to data subjects.

## Applicability

- All systems storing personal data
- Network infrastructure
- Database systems
- Application servers
- API endpoints
- File storage systems
- Third-party integrations

## Examples (Non-Normative)

### No Security Monitoring

```python
# Signal Present: No logging or monitoring
@app.route('/api/user/<user_id>/data')
def get_user_data(user_id):
    data = db.query(f"SELECT * FROM users WHERE id={user_id}")
    return jsonify(data)
    # No logging of access
    # No anomaly detection
    # No alerting on suspicious activity
```

### Missing Audit Logs

```yaml
# Signal Present: Logging disabled
services:
  database:
    image: postgres:14
    environment:
      - POSTGRES_PASSWORD=secret
    # No log configuration
    # No audit trail
```

### No Intrusion Detection

```
# Signal Present: No security monitoring infrastructure

infrastructure/
  ├── app-servers/
  ├── databases/
  └── load-balancers/
  # Missing: IDS/IPS
  # Missing: SIEM
  # Missing: Log aggregation
```

### Remediation Example

```python
# Signal Resolved: Comprehensive breach detection
import logging
from datetime import datetime, timedelta
from collections import defaultdict
import hashlib

# Configure structured logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s %(name)s %(levelname)s %(message)s',
    handlers=[
        logging.FileHandler('/var/log/app/security.log'),
        logging.StreamHandler()
    ]
)

security_logger = logging.getLogger('security')

class AnomalyDetector:
    """Detect suspicious access patterns"""

    def __init__(self):
        self.access_counts = defaultdict(lambda: defaultdict(int))
        self.failed_logins = defaultdict(list)
        self.data_export_volumes = defaultdict(int)

    def record_access(self, user_id, resource_type, ip_address):
        """Track access patterns"""
        key = f"{user_id}:{ip_address}"
        self.access_counts[key][resource_type] += 1

        # Alert on excessive access
        if self.access_counts[key][resource_type] > 100:  # Threshold
            self.alert_suspicious_activity(
                user_id=user_id,
                ip_address=ip_address,
                reason=f"Excessive {resource_type} access: {self.access_counts[key][resource_type]} requests",
                severity='medium'
            )

    def record_failed_login(self, username, ip_address):
        """Track failed login attempts"""
        self.failed_logins[ip_address].append({
            'username': username,
            'timestamp': datetime.utcnow()
        })

        # Remove old attempts (1 hour window)
        cutoff = datetime.utcnow() - timedelta(hours=1)
        self.failed_logins[ip_address] = [
            attempt for attempt in self.failed_logins[ip_address]
            if attempt['timestamp'] > cutoff
        ]

        # Alert on brute force attempt
        if len(self.failed_logins[ip_address]) > 5:
            self.alert_suspicious_activity(
                user_id=username,
                ip_address=ip_address,
                reason=f"Brute force detected: {len(self.failed_logins[ip_address])} failed attempts",
                severity='high'
            )

    def record_data_export(self, user_id, record_count):
        """Track data exports"""
        self.data_export_volumes[user_id] += record_count

        # Alert on large exports
        if record_count > 1000:
            self.alert_suspicious_activity(
                user_id=user_id,
                ip_address=None,
                reason=f"Large data export: {record_count} records",
                severity='high'
            )

    def alert_suspicious_activity(self, user_id, ip_address, reason, severity):
        """Send alert for suspicious activity"""
        alert_data = {
            'timestamp': datetime.utcnow().isoformat(),
            'user_id': user_id,
            'ip_address': ip_address,
            'reason': reason,
            'severity': severity
        }

        # Log alert
        security_logger.warning(f"SECURITY_ALERT: {alert_data}")

        # Send to SIEM
        send_to_siem(alert_data)

        # Notify security team for high severity
        if severity == 'high':
            notify_security_team(alert_data)

anomaly_detector = AnomalyDetector()

@app.route('/api/user/<user_id>/data')
def get_user_data(user_id):
    """Access user data with comprehensive logging"""
    # Security audit log
    security_logger.info({
        'event': 'data_access',
        'user_id': session.get('user_id'),
        'target_user_id': user_id,
        'resource_type': 'user_data',
        'ip_address': request.remote_addr,
        'user_agent': request.user_agent.string,
        'timestamp': datetime.utcnow().isoformat()
    })

    # Anomaly detection
    anomaly_detector.record_access(
        user_id=session.get('user_id'),
        resource_type='user_data',
        ip_address=request.remote_addr
    )

    # Data access
    data = db.query(f"SELECT * FROM users WHERE id={user_id}")

    return jsonify(data)

@app.route('/api/export-data', methods=['POST'])
def export_data():
    """Export data with monitoring"""
    user_id = session.get('user_id')
    record_count = request.json.get('record_count', 0)

    # Log export
    security_logger.info({
        'event': 'data_export',
        'user_id': user_id,
        'record_count': record_count,
        'timestamp': datetime.utcnow().isoformat()
    })

    # Anomaly detection
    anomaly_detector.record_data_export(user_id, record_count)

    # Perform export
    # ...

    return jsonify({'success': True})
```

```yaml
# Signal Resolved: Security monitoring infrastructure
version: '3'
services:
  # Application with logging
  app:
    image: myapp:latest
    logging:
      driver: syslog
      options:
        syslog-address: "tcp://logstash:5000"
        tag: "app"

  # Database with audit logging
  database:
    image: postgres:14
    environment:
      - POSTGRES_PASSWORD=secret
    command: >
      postgres
      -c log_connections=on
      -c log_disconnections=on
      -c log_statement=mod
      -c log_min_duration_statement=1000
    logging:
      driver: syslog
      options:
        syslog-address: "tcp://logstash:5000"
        tag: "database"

  # Log aggregation
  logstash:
    image: logstash:8.11
    volumes:
      - ./logstash.conf:/usr/share/logstash/pipeline/logstash.conf
    ports:
      - "5000:5000"

  # Search and analysis
  elasticsearch:
    image: elasticsearch:8.11
    environment:
      - discovery.type=single-node
      - xpack.security.enabled=true
    volumes:
      - es-data:/usr/share/elasticsearch/data

  # Visualization and alerting
  kibana:
    image: kibana:8.11
    ports:
      - "5601:5601"
    depends_on:
      - elasticsearch

  # Intrusion detection
  wazuh:
    image: wazuh/wazuh:latest
    ports:
      - "1514:1514"  # Syslog
      - "1515:1515"  # Agent registration
    volumes:
      - wazuh-data:/var/ossec/data

  # Network monitoring
  suricata:
    image: jasonish/suricata:latest
    network_mode: host
    cap_add:
      - NET_ADMIN
    volumes:
      - ./suricata.yaml:/etc/suricata/suricata.yaml
      - suricata-logs:/var/log/suricata

volumes:
  es-data:
  wazuh-data:
  suricata-logs:
```

```python
# Signal Resolved: Automated breach detection alerts
# breach_detection.py

from dataclasses import dataclass
from datetime import datetime
from typing import List

@dataclass
class SecurityEvent:
    event_type: str
    severity: str
    description: str
    timestamp: datetime
    source_ip: str
    affected_users: List[str]
    indicators: List[str]

class BreachDetectionSystem:
    """Automated breach detection and alerting"""

    def __init__(self):
        self.alert_rules = {
            'unauthorized_access': {
                'threshold': 1,
                'notify_immediately': True,
                'escalate_to_dpo': True
            },
            'data_exfiltration': {
                'threshold': 1,
                'notify_immediately': True,
                'escalate_to_dpo': True
            },
            'sql_injection': {
                'threshold': 1,
                'notify_immediately': True,
                'escalate_to_dpo': False
            },
            'brute_force': {
                'threshold': 5,
                'notify_immediately': False,
                'escalate_to_dpo': False
            }
        }

    def analyze_event(self, event: SecurityEvent):
        """Analyze security event for breach indicators"""
        rule = self.alert_rules.get(event.event_type)
        if not rule:
            return

        if event.severity in ['high', 'critical']:
            # Potential breach detected
            self.initiate_breach_response(event)

    def initiate_breach_response(self, event: SecurityEvent):
        """Initiate breach response procedures"""
        # Log breach event
        breach_log.record({
            'timestamp': datetime.utcnow(),
            'event_type': event.event_type,
            'severity': event.severity,
            'description': event.description,
            'affected_users': event.affected_users,
            'indicators': event.indicators
        })

        # Immediate notifications
        notify_security_team({
            'alert': 'POTENTIAL DATA BREACH DETECTED',
            'event': event,
            'action_required': 'Immediate investigation'
        })

        # Escalate to DPO if required
        rule = self.alert_rules.get(event.event_type)
        if rule and rule['escalate_to_dpo']:
            notify_dpo({
                'alert': 'Potential breach requiring assessment',
                'event': event,
                'deadline': '72 hours for supervisory authority notification'
            })

        # Trigger incident response plan
        create_incident_ticket({
            'title': f"Potential Data Breach: {event.event_type}",
            'severity': event.severity,
            'description': event.description,
            'assigned_to': 'incident-response-team'
        })
```

## GDPR Context (Informative)

- **Art. 33.1**: Breach must be notified to supervisory authority within 72 hours of becoming aware
- **Art. 33.2**: Processor must notify controller without undue delay after becoming aware
- **Art. 32.1(d)**: Regular testing and evaluation of security effectiveness
- **Recital 87**: Controller should document all data breaches, including detection time

## Related Signals

- `CSE-GDPR-SECURITY-NO-BREACH-NOTIFICATION-PROCESS-012`
- `CSE-GDPR-SECURITY-NO-BREACH-DOCUMENTATION-013`
- `CSE-GDPR-SECURITY-NO-SECURITY-TESTING-008`
