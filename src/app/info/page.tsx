import React from 'react';

export default function InfoPage() {
  return (
    <div style={styles.container}>
      {/* Einführung */}
      <section style={styles.introduction}>
        <h1 style={styles.mainTitle}>
          Schluss mit manuellem Aufwand! Linkify automatisiert Lexware Office & DMS.
        </h1>
        <p style={styles.highlightText}>Steigern Sie Ihre Effizienz und sparen Sie wertvolle Zeit!</p>
        <p style={styles.description}>
          Linkify verbindet Lexware Office mit Ihrem Dokumentenmanagementsystem (DMS) und automatisiert lästige
          Routineaufgaben.
        </p>
      </section>
      

      {/* Vorteile */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ihre Vorteile:</h2>
        <ul style={styles.list}>
          {advantages.map((advantage, index) => (
            <li key={index} style={styles.listItem}>
              <strong>{advantage.title}</strong> {advantage.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Features */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Linkify bietet Ihnen:</h2>
        <ul style={styles.list}>
          {features.map((feature, index) => (
            <li key={index} style={styles.listItem}>
              <strong>{feature.title}</strong> {feature.description}
            </li>
          ))}
        </ul>
      </section>

      {/* Abschluss */}
      <section style={styles.conclusion}>
        <p style={styles.finalText}>
          Linkify ist die ideale Lösung für alle Unternehmen, die ihre Prozesse optimieren und die Effizienz steigern
          wollen.
        </p>
      </section>
    </div>
  );
}

const advantages = [
  {
    title: 'Automatische Belegerfassung:',
    description:
      'Rechnungen, Lieferscheine und andere Belege werden automatisch erkannt, in Lexware Office verbucht und im DMS archiviert.',
  },
  {
    title: 'Zeitersparnis:',
    description: 'Manuelle Dateneingabe und Ablage gehören der Vergangenheit an.',
  },
  {
    title: 'Weniger Fehler:',
    description: 'Die automatisierte Verarbeitung minimiert das Risiko von Fehlern.',
  },
  {
    title: 'Besserer Überblick:',
    description: 'Alle wichtigen Dokumente sind zentral und jederzeit verfügbar.',
  },
  {
    title: 'Verbesserte Zusammenarbeit:',
    description:
      'Nahtlose Integration von Lexware Office und DMS für optimierte Teamarbeit.',
  },
];

const features = [
  {
    title: 'Intelligente OCR-Texterkennung:',
    description: 'Extrahiert automatisch relevante Daten aus Ihren Dokumenten.',
  },
  {
    title: 'Flexible Workflows:',
    description: 'Passen Sie die Automatisierung an Ihre individuellen Bedürfnisse an.',
  },
  {
    title: 'Direkte Integration:',
    description: 'Nahtlose Verbindung mit Lexware Office und gängigen DMS-Systemen.',
  },
  {
    title: 'Benutzerfreundliche Oberfläche:',
    description: 'Einfache Bedienung und intuitive Navigation.',
  },
  {
    title: 'Sicherer Datenschutz:',
    description: 'Ihre Daten werden sicher und DSGVO-konform verarbeitet.',
  },
];

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    lineHeight: 1.6,
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  introduction: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  mainTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  highlightText: {
    fontSize: '1.5rem',
    color: '#007bff',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #007bff',
    paddingBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    fontSize: '1.1rem',
  },
  conclusion: {
    textAlign: 'center',
    marginTop: '40px',
  },
  finalText: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#333',
  },
};
