# CSE-ISO27001-ORG-NO-INTEREST-GROUP-CONTACTS-006

**No Contact with Special Interest Groups**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-INTEREST-GROUP-CONTACTS-006` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization has not established contacts with security forums and professional associations for threat intelligence.

## Applicability

- Organizations without memberships in security professional associations
- Environments not participating in industry information sharing groups
- Companies lacking engagement with threat intelligence communities
- Organizations that do not attend security conferences or forums
- Entities not subscribed to sector-specific security information sources

## Examples (Non-Normative)

### No Security Community Engagement

```yaml
external_engagement:
  security_organizations:
    memberships: []
    isac_participation: false
    information_sharing: false
  professional_development:
    conference_attendance: 0
    training_subscriptions: []
  threat_intelligence_sources: []
```

### Isolated Security Practice

```yaml
knowledge_sources:
  internal_only: true
  external_contacts:
    security_forums: null
    professional_associations: null
    vendor_security_communities: null
  threat_intelligence:
    commercial_feeds: false
    open_source_intelligence: false
    peer_sharing: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.6 Contact with special interest groups**: The organization should establish and maintain contact with special interest groups or other specialist security forums and professional associations. Membership of information security forums can improve awareness of best practices and help ensure the organization stays up to date with relevant information security information.

## Related Signals

- `CSE-ISO27001-ORG-NO-AUTHORITY-CONTACTS-005`
- `CSE-ISO27001-ORG-NO-THREAT-INTELLIGENCE-007`
