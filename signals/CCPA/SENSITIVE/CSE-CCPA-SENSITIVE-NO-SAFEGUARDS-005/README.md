# CSE-CCPA-SENSITIVE-NO-SAFEGUARDS-005

**Additional SPI Safeguards Missing**

## Signal Overview

| Field           | Value                                          |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-CCPA-SENSITIVE-NO-SAFEGUARDS-005`        |
| Domain          | CCPA                                          |
| Category        | SENSITIVE                                     |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

A business that collects, uses, or discloses sensitive personal information does not implement additional security measures, access controls, or technical safeguards appropriate to the heightened risk and sensitivity of the data. This signal indicates that sensitive data is being processed with the same or insufficient security protections compared to non-sensitive personal information, failing to reflect the greater potential harm from unauthorized access or misuse.

## Applicability

This signal applies to:

- Healthcare systems storing health data without encryption or enhanced access controls
- Financial platforms processing account credentials with inadequate authentication
- Biometric authentication systems lacking secure template storage
- Applications storing Social Security numbers in plaintext or reversibly encrypted
- Genetic testing services without enhanced data protection measures
- Mental health apps transmitting therapy data over unencrypted connections
- Location tracking services storing precise geolocation without anonymization
- Any business handling sensitive PI without implementing heightened security controls

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Health Data Without Encryption

```python
# Medical records system lacking encryption for sensitive health data
class HealthRecordSystem:
    def store_medical_record(self, patient_id, medical_data):
        # Stores sensitive health information without encryption
        record = {
            'patient_id': patient_id,
            'ssn': medical_data.ssn,                    # Plain text
            'diagnoses': medical_data.diagnoses,        # Plain text
            'medications': medical_data.medications,    # Plain text
            'genetic_info': medical_data.genetic_data,  # Plain text
            'mental_health': medical_data.therapy_notes # Plain text
        }

        # No encryption at rest
        self.db.health_records.insert(record)

        # No field-level encryption for most sensitive data
        # Should use: encrypted_ssn = self.encrypt_field(medical_data.ssn)
        # Should use: encrypted_genetic = self.encrypt_field(medical_data.genetic_data)

    def transmit_to_specialist(self, record_id, specialist_email):
        record = self.db.health_records.find_one({'_id': record_id})

        # Transmits over unencrypted email
        self.email.send(
            to=specialist_email,
            body=str(record)  # No transport encryption or secure file transfer
        )
```

### Biometric Data Without Secure Storage

```java
// Face recognition system with inadequate biometric protection
public class BiometricStorage {
    // Stores raw biometric images instead of irreversible templates
    public void storeFaceScan(String userId, byte[] faceImage) {
        // Missing: Convert to irreversible template
        // byte[] template = createIrreversibleTemplate(faceImage);

        // Stores original biometric image (reversible, can identify individual)
        database.execute(
            "INSERT INTO biometric_data (user_id, face_image) VALUES (?, ?)",
            userId, faceImage  // Should store template, not raw image
        );

        // No additional access controls for biometric data
        // Missing: Separate database with enhanced access restrictions
        // Missing: Hardware security module (HSM) for template storage
        // Missing: Biometric data anonymization or tokenization
    }

    // Inadequate access controls
    public byte[] getFaceScan(String userId) {
        // No multi-factor authentication required
        // No audit logging of biometric data access
        // No role-based access control specific to biometric data

        return database.query(
            "SELECT face_image FROM biometric_data WHERE user_id = ?",
            userId
        );
    }
}
```

### Financial Data Without Tokenization

```javascript
// Payment system storing financial credentials without proper safeguards
class PaymentDataStorage {
  async storePaymentMethod(userId, paymentInfo) {
    // Stores full credit card number (PCI DSS violation and insufficient for SPI)
    const paymentRecord = {
      userId: userId,
      cardNumber: paymentInfo.cardNumber,           // Should be tokenized
      cvv: paymentInfo.cvv,                         // Should never be stored
      expirationDate: paymentInfo.expiration,
      accountNumber: paymentInfo.bankAccount,       // Should be tokenized
      routingNumber: paymentInfo.routingNumber,
      ssn: paymentInfo.ssn                          // Should be encrypted/hashed
    };

    // Missing: Tokenization of financial account credentials
    // const token = await this.tokenizationService.tokenize(paymentInfo.cardNumber);

    // Missing: Encryption of sensitive financial data
    // Missing: Separate secure vault for financial credentials
    // Missing: Enhanced access controls and audit logging

    await this.db.payment_methods.insertOne(paymentRecord);
  }

  // Inadequate access controls for financial data queries
  async getPaymentMethods(userId) {
    // No additional authentication for retrieving financial credentials
    // No rate limiting on financial data access
    // No anomaly detection for unusual access patterns

    return await this.db.payment_methods.find({ userId }).toArray();
  }
}
```

### Geolocation Without Anonymization

```swift
// Location tracking without privacy-enhancing technologies
class LocationDataManager {
    func storeLocation(userId: String, location: CLLocation) {
        // Stores precise geolocation without obfuscation
        let locationRecord = LocationRecord(
            userId: userId,
            latitude: location.coordinate.latitude,    // Full precision
            longitude: location.coordinate.longitude,  // Full precision
            timestamp: Date(),
            horizontalAccuracy: location.horizontalAccuracy
        )

        // Missing: Geohashing or grid-based anonymization
        // Missing: Differential privacy for location queries
        // Missing: Automatic deletion after retention period
        // Missing: Separation of identifiers from location data

        // Stores in regular database without enhanced protections
        database.save(locationRecord)

        // No access controls limiting who can query precise locations
        // No audit logging of location data access
        // No geographic masking for sensitive locations (healthcare, worship)
    }

    func queryLocationHistory(userId: String) -> [LocationRecord] {
        // Returns full-precision location history without aggregation
        // Missing: Geographic blurring for sensitive site visits
        // Missing: Temporal aggregation to prevent stalking/tracking

        return database.fetchAll(userId: userId)
    }
}
```

## What This Signal Does NOT Assert

- Whether the business collects sensitive personal information lawfully
- Whether consumers have been notified about sensitive PI collection
- Whether baseline security measures (e.g., HTTPS, authentication) are in place
- The specific enhanced security measures required for the business context
- Compliance or non-compliance with CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.121**: Sensitive personal information receives heightened protection under CPRA, implying need for enhanced security measures
- **Section 1798.150**: Businesses must implement reasonable security procedures and practices to protect personal information, with higher standards for sensitive PI
- **Section 1798.81.5**: Requires encryption or redaction of personal information, particularly relevant for sensitive categories
- **Reasonable Security Standard**: Security measures must be appropriate to the nature of the information, with sensitive PI requiring stronger protections
- **Sensitive PI Categories**: Social Security numbers, driver's license, financial account credentials (login + password/security code), precise geolocation, racial/ethnic origin, religious beliefs, genetic data, biometric data for unique identification, health data, sex life/sexual orientation, citizenship/immigration status, contents of mail/email/text
- **Data Breach Implications**: Insufficient safeguards for sensitive PI increase risk of statutory damages under CCPA's private right of action
- **Added by**: CPRA enhanced sensitive PI protections (California Privacy Rights Act, effective January 1, 2023)

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-SENSITIVE-NO-LIMITATION-001` — SPI use not limited to disclosed purposes
- `CSE-CCPA-SENSITIVE-NO-NECESSITY-002` — SPI collected beyond necessity
- `CSE-CCPA-SENSITIVE-SECONDARY-USE-004` — SPI used for unauthorized secondary purpose
- `CSE-CCPA-NOTICE-NO-SPI-DISCLOSURE-007` — Sensitive PI collection not disclosed

## Notes

Detection of this signal typically involves:

- Security architecture review of sensitive data storage and transmission
- Encryption assessment for data at rest and in transit
- Access control analysis for sensitive PI databases and systems
- Code review to identify lack of field-level encryption or tokenization
- Network traffic analysis to detect unencrypted sensitive data transmission
- Database schema review for plaintext storage of sensitive categories
- Authentication mechanism assessment for sensitive data access
- Audit logging review to verify tracking of sensitive PI access
- Comparison of security measures between sensitive and non-sensitive PI
- Hardware security module (HSM) usage review for cryptographic key protection
- Privacy-enhancing technology assessment (anonymization, pseudonymization, differential privacy)

The presence of this signal indicates a condition that warrants review in the context of CPRA's heightened protection requirements for sensitive personal information.
