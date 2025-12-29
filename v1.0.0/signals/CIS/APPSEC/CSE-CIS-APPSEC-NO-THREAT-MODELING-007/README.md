# CSE-CIS-APPSEC-NO-THREAT-MODELING-007

**Threat Modeling Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-THREAT-MODELING-007`  |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not implemented threat modeling as part of the application development process.

This signal indicates the absence of a systematic approach to identifying, evaluating, and mitigating security threats during the design and development phases of applications, before vulnerabilities are implemented in code.

## Applicability

This signal applies to:

- Application development teams
- Security architecture teams
- Application security teams
- Product security teams
- Software architects
- DevOps and DevSecOps teams
- Product management teams
- Engineering leadership

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Threat Modeling Process

```text
Missing threat modeling activities:
- Threat identification sessions
- Attack surface analysis
- Data flow diagrams
- Trust boundary identification
- Threat enumeration (STRIDE, PASTA, etc.)
- Risk assessment
- Mitigation strategy development
- Security requirements derivation
```

### Design Phase Without Security Analysis

```yaml
# Application design process without threat modeling
design_phase:
  activities:
    - requirements_gathering
    - architecture_design
    - database_schema_design
    - api_design
    - ui_mockups
  # Missing:
  threat_modeling:
    enabled: false
    # data_flow_diagrams: not_created
    # threat_identification: not_performed
    # security_requirements: not_derived
    # mitigation_planning: not_conducted
```

### No STRIDE Analysis

```python
# New feature development without threat analysis
class PaymentService:
    """
    Handles payment processing for e-commerce platform
    """
    def process_payment(self, user_id, amount, card_details):
        # Implementation
        pass

    # Missing STRIDE threat analysis:
    # Spoofing: How do we verify user identity?
    # Tampering: How do we protect payment data integrity?
    # Repudiation: How do we ensure non-repudiation?
    # Information Disclosure: How do we protect card details?
    # Denial of Service: How do we prevent payment DoS?
    # Elevation of Privilege: How do we prevent unauthorized payments?
```

### Missing Data Flow Diagrams

```text
Application documentation without threat modeling artifacts:
- Architecture diagrams (network topology only)
- Database schema
- API documentation
- Deployment guide

Missing:
- Data flow diagrams (DFDs)
- Trust boundary identification
- Attack surface maps
- Threat scenarios
- Security controls mapping
```

### No Security Requirements from Threats

```json
{
  "feature": "user-authentication",
  "requirements": {
    "functional": [
      "Users can login with username/password",
      "Users can reset forgotten passwords"
    ]
  }
}
```

### Lack of Attack Surface Analysis

```javascript
// API endpoints without attack surface analysis
app.post('/api/user/profile', updateProfile);
app.post('/api/user/password', changePassword);
app.post('/api/user/email', changeEmail);
app.post('/api/admin/users', adminCreateUser);
app.delete('/api/admin/users/:id', adminDeleteUser);

// Missing threat modeling:
// - Which endpoints are most sensitive?
// - What are the trust boundaries?
// - What threats does each endpoint face?
// - What mitigations are needed?
// - What security testing is required?
```

### No Threat Modeling Tools or Frameworks

```text
Development environment without threat modeling tools:
- No Microsoft Threat Modeling Tool
- No OWASP Threat Dragon
- No IriusRisk
- No ThreatModeler
- No threat modeling templates
- No threat libraries (STRIDE, CAPEC, ATT&CK)
```

### Missing Third-Party Integration Analysis

```yaml
# Integration with external services without threat analysis
integrations:
  - service: payment-gateway
    endpoint: https://api.paymentprovider.com
  - service: email-service
    endpoint: https://api.emailprovider.com
  - service: analytics
    endpoint: https://api.analytics.com
  # Missing for each:
  # - Data flow analysis
  # - Trust boundary definition
  # - Threat identification
  # - Security controls
  # - Compliance requirements
```

## What This Signal Does NOT Assert

- Whether applications are secure
- Whether security reviews are conducted
- Whether security requirements exist
- The specific threat modeling methodology to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required threat modeling frequency

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.7**: Use Standard Hardening Configuration Templates for Application Infrastructure
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Use standard, industry-recommended hardening configuration templates for application infrastructure components. This includes underlying servers, databases, and web servers, and applies to cloud containers, Platform as a Service (PaaS) components, or system images. Do not allow in-house developed software to weaken configuration hardening."

Note: While this safeguard focuses on hardening configurations, threat modeling is essential for identifying security requirements and determining appropriate hardening measures. Threat modeling informs what hardening is necessary and helps ensure applications don't bypass security controls.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-SDLC-001` — Secure SDLC missing
- `CSE-CIS-APPSEC-NO-STANDARDS-002` — Secure coding standards missing
- `CSE-CIS-APPSEC-NO-SAST-005` — Static application security testing missing
- `CSE-CIS-APPSEC-NO-DAST-006` — Dynamic application security testing missing

## Notes

Detection of this signal typically involves:

- Review of application design processes
- Assessment of security architecture practices
- Evaluation of threat modeling documentation
- Examination of security requirements derivation
- Review of data flow diagrams and trust boundaries
- Assessment of threat modeling tool usage
- Analysis of security design review processes

Threat modeling methodologies:

- **STRIDE**: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege
- **PASTA**: Process for Attack Simulation and Threat Analysis
- **LINDDUN**: Privacy threat modeling
- **OCTAVE**: Operationally Critical Threat, Asset, and Vulnerability Evaluation
- **Attack Trees**: Hierarchical threat scenario analysis
- **VAST**: Visual, Agile, and Simple Threat modeling

Threat modeling process typically includes:

1. **System modeling**: Create data flow diagrams, identify components
2. **Threat identification**: Enumerate potential threats using frameworks
3. **Vulnerability analysis**: Identify weaknesses that enable threats
4. **Risk assessment**: Evaluate likelihood and impact
5. **Mitigation planning**: Define security controls and requirements
6. **Validation**: Test that mitigations address threats
7. **Documentation**: Record threats, decisions, and mitigations

Common threat modeling outputs:
- Data flow diagrams (DFDs)
- Trust boundary maps
- Threat lists and scenarios
- Risk ratings
- Security requirements
- Mitigation strategies
- Security test cases

Benefits of threat modeling:
- Identifies threats early (cheaper to fix)
- Drives security requirements
- Informs security testing priorities
- Improves security awareness
- Documents security decisions
- Supports compliance and audits

The presence of this signal indicates a condition that warrants review in the context of threat modeling requirements.
