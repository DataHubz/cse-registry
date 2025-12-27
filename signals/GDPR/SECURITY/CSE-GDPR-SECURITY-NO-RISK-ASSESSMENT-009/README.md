# CSE-GDPR-SECURITY-NO-RISK-ASSESSMENT-009

**Security Risk Assessment Not Performed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-RISK-ASSESSMENT-009` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization has not assessed the risks to data subject rights and freedoms when determining appropriate security measures.

Risk assessment should consider likelihood and severity of risks, the nature of personal data, and the state of the art in security technology.

## Applicability

- New data processing activities
- Significant changes to existing processing
- Introduction of new technologies
- High-risk processing operations
- Processing of special category data
- Regular security program reviews

## Examples (Non-Normative)

### Missing Risk Assessment

```
# Signal Present: No risk assessment documentation

project/
  ├── src/
  ├── docs/
  │   ├── architecture.md
  │   └── api-spec.md
  └── security/
      └── (no risk assessment)
      └── (no threat model)
      └── (no data classification)
```

### Undocumented Security Decisions

```python
# Signal Present: Security measures without risk justification
# No documentation of why these specific measures were chosen

SECURITY_CONFIG = {
    'password_min_length': 8,  # Why 8? Based on what risk?
    'session_timeout': 3600,   # Why 1 hour?
    'encryption_algorithm': 'AES-256',  # Risk assessment?
    'backup_frequency': 'daily'  # Adequate for data criticality?
}
# No mapping to identified risks
# No consideration of data sensitivity
```

### Remediation Example

```python
# Signal Resolved: Documented risk assessment
# security_risk_assessment.py

from dataclasses import dataclass
from typing import List
from enum import Enum

class RiskLevel(Enum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3
    CRITICAL = 4

class DataSensitivity(Enum):
    PUBLIC = 1
    INTERNAL = 2
    CONFIDENTIAL = 3
    RESTRICTED = 4

@dataclass
class ThreatScenario:
    id: str
    description: str
    likelihood: RiskLevel
    impact: RiskLevel
    risk_level: RiskLevel
    affected_assets: List[str]
    mitigation_controls: List[str]

@dataclass
class DataAsset:
    name: str
    description: str
    sensitivity: DataSensitivity
    data_subjects: str
    volume: str
    retention: str

class SecurityRiskAssessment:
    def __init__(self):
        # Data Assets
        self.assets = {
            'customer_pii': DataAsset(
                name='Customer Personal Information',
                description='Names, emails, addresses, phone numbers',
                sensitivity=DataSensitivity.CONFIDENTIAL,
                data_subjects='Customers',
                volume='~100,000 records',
                retention='7 years after last transaction'
            ),
            'payment_data': DataAsset(
                name='Payment Information',
                description='Tokenized payment data, transaction history',
                sensitivity=DataSensitivity.RESTRICTED,
                data_subjects='Customers',
                volume='~50,000 records',
                retention='10 years (regulatory requirement)'
            )
        }

        # Threat Scenarios
        self.threats = {
            'T001': ThreatScenario(
                id='T001',
                description='Unauthorized access to customer database',
                likelihood=RiskLevel.MEDIUM,
                impact=RiskLevel.HIGH,
                risk_level=RiskLevel.HIGH,
                affected_assets=['customer_pii', 'payment_data'],
                mitigation_controls=[
                    'CTRL-001: Multi-factor authentication',
                    'CTRL-002: Database encryption at rest',
                    'CTRL-003: Network segmentation',
                    'CTRL-004: Role-based access control'
                ]
            ),
            'T002': ThreatScenario(
                id='T002',
                description='Data breach via SQL injection',
                likelihood=RiskLevel.MEDIUM,
                impact=RiskLevel.CRITICAL,
                risk_level=RiskLevel.HIGH,
                affected_assets=['customer_pii', 'payment_data'],
                mitigation_controls=[
                    'CTRL-005: Parameterized queries',
                    'CTRL-006: Input validation',
                    'CTRL-007: Web application firewall',
                    'CTRL-008: Regular security testing'
                ]
            ),
            'T003': ThreatScenario(
                id='T003',
                description='Ransomware attack causing data unavailability',
                likelihood=RiskLevel.MEDIUM,
                impact=RiskLevel.HIGH,
                risk_level=RiskLevel.HIGH,
                affected_assets=['customer_pii', 'payment_data'],
                mitigation_controls=[
                    'CTRL-009: Offline backups',
                    'CTRL-010: Endpoint protection',
                    'CTRL-011: Network monitoring',
                    'CTRL-012: Disaster recovery plan'
                ]
            ),
            'T004': ThreatScenario(
                id='T004',
                description='Insider threat - unauthorized data access',
                likelihood=RiskLevel.LOW,
                impact=RiskLevel.HIGH,
                risk_level=RiskLevel.MEDIUM,
                affected_assets=['customer_pii'],
                mitigation_controls=[
                    'CTRL-013: Access logging and monitoring',
                    'CTRL-014: Least privilege access',
                    'CTRL-015: Background checks',
                    'CTRL-016: Data loss prevention'
                ]
            )
        }

        # Control Implementation Status
        self.controls = {
            'CTRL-001': {'status': 'Implemented', 'effectiveness': 'High'},
            'CTRL-002': {'status': 'Implemented', 'effectiveness': 'High'},
            'CTRL-003': {'status': 'Implemented', 'effectiveness': 'Medium'},
            'CTRL-004': {'status': 'Implemented', 'effectiveness': 'High'},
            'CTRL-005': {'status': 'Implemented', 'effectiveness': 'High'},
            'CTRL-006': {'status': 'Implemented', 'effectiveness': 'Medium'},
            'CTRL-007': {'status': 'Planned', 'effectiveness': None},
            'CTRL-008': {'status': 'Implemented', 'effectiveness': 'Medium'},
            'CTRL-009': {'status': 'Implemented', 'effectiveness': 'High'},
            'CTRL-010': {'status': 'Implemented', 'effectiveness': 'Medium'},
            'CTRL-011': {'status': 'Implemented', 'effectiveness': 'Medium'},
            'CTRL-012': {'status': 'Implemented', 'effectiveness': 'High'},
            'CTRL-013': {'status': 'Implemented', 'effectiveness': 'High'},
            'CTRL-014': {'status': 'Implemented', 'effectiveness': 'High'},
            'CTRL-015': {'status': 'Implemented', 'effectiveness': 'High'},
            'CTRL-016': {'status': 'Planned', 'effectiveness': None}
        }

    def calculate_residual_risk(self, threat_id: str) -> RiskLevel:
        """Calculate residual risk after controls"""
        threat = self.threats[threat_id]
        controls = threat.mitigation_controls

        implemented = sum(
            1 for ctrl in controls
            if self.controls.get(ctrl.split(':')[0], {}).get('status') == 'Implemented'
        )

        if implemented == len(controls):
            return RiskLevel.LOW
        elif implemented >= len(controls) * 0.75:
            return RiskLevel.MEDIUM
        else:
            return threat.risk_level

    def get_high_risks(self) -> List[ThreatScenario]:
        """Get all high and critical risk threats"""
        return [
            t for t in self.threats.values()
            if self.calculate_residual_risk(t.id) in [RiskLevel.HIGH, RiskLevel.CRITICAL]
        ]

    def generate_report(self):
        """Generate risk assessment summary"""
        return {
            'assessment_date': '2025-12-27',
            'total_threats': len(self.threats),
            'high_risks': len(self.get_high_risks()),
            'total_controls': len(self.controls),
            'implemented_controls': sum(
                1 for c in self.controls.values()
                if c['status'] == 'Implemented'
            ),
            'planned_controls': sum(
                1 for c in self.controls.values()
                if c['status'] == 'Planned'
            )
        }
```

```markdown
# Security Risk Assessment Report

**Assessment Date:** 2025-12-27
**Next Review:** 2026-06-27
**Assessor:** Security Team

## Executive Summary

This risk assessment evaluates security risks to personal data processing in accordance with GDPR Article 32. The assessment considers the nature, scope, context, and purposes of processing, as well as the state of the art in security measures.

## Data Assets

### Customer Personal Information (CONFIDENTIAL)
- Volume: ~100,000 records
- Data Types: Names, emails, addresses, phone numbers
- Storage: PostgreSQL database, encrypted at rest
- Access: Restricted to authorized personnel only

### Payment Information (RESTRICTED)
- Volume: ~50,000 records
- Data Types: Tokenized payment data, transaction history
- Storage: PCI-DSS compliant vault
- Access: Limited to payment processing systems

## Risk Matrix

| Threat ID | Description | Likelihood | Impact | Inherent Risk | Residual Risk |
|-----------|-------------|------------|--------|---------------|---------------|
| T001 | Unauthorized DB access | Medium | High | HIGH | LOW |
| T002 | SQL injection breach | Medium | Critical | HIGH | LOW |
| T003 | Ransomware attack | Medium | High | HIGH | LOW |
| T004 | Insider threat | Low | High | MEDIUM | LOW |

## Security Controls

All high-priority controls have been implemented:
- Encryption (AES-256 at rest, TLS 1.3 in transit)
- Multi-factor authentication
- Role-based access control
- Parameterized queries
- Regular security testing
- Offline backups
- Network segmentation

## Risk Treatment Decisions

Based on this assessment, security measures are appropriate and proportionate to identified risks. All residual risks are within acceptable tolerance.

## Next Actions

1. Implement WAF (CTRL-007) - Q1 2026
2. Deploy DLP solution (CTRL-016) - Q2 2026
3. Quarterly risk reassessment schedule
```

## GDPR Context (Informative)

- **Art. 32.1**: Security measures must be appropriate to the risk
- **Art. 32.2**: Risk assessment should consider likelihood and severity of risks to rights and freedoms
- **Art. 35**: Data Protection Impact Assessment required for high-risk processing
- **Recital 76**: Likelihood and severity depend on nature, scope, context and purposes of processing

## Related Signals

- `CSE-GDPR-SECURITY-NO-SECURITY-TESTING-008`
- `CSE-GDPR-IMPACT-NO-DPIA-001` (if exists)
- `CSE-GDPR-SECURITY-NO-ENCRYPTION-002`
