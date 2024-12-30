"use client";

export default function TechnologyPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Technologien</h1>
      <section style={styles.heroSection}>
        <p style={styles.subtitle}>
          <strong>Die Werkzeuge, die uns antreiben</strong>
        </p>
        <p style={styles.text}>
          Wir nutzen modernste Technologien, um hochwertige und effiziente
          Lösungen zu entwickeln. Hier ist eine Liste der Technologien, die in
          unserem Technologie-Stack enthalten sind:
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Unsere Technologien:</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Next.js</li>
          <li style={styles.listItem}>TypeScript</li>
          <li style={styles.listItem}>PHP</li>
          <li style={styles.listItem}>Vercel</li>
          <li style={styles.listItem}>GitHub</li>
          <li style={styles.listItem}>GitHub Actions</li>
          <li style={styles.listItem}>MySQL</li>
          <li style={styles.listItem}>ESLint</li>
          <li style={styles.listItem}>React</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Warum diese Technologien?</h2>
        <p style={styles.text}>
          Mit diesen Tools und Frameworks können wir moderne, performante und
          skalierbare Anwendungen erstellen, die sowohl effizient als auch
          zuverlässig sind. Von der Frontend-Entwicklung mit React bis hin zur
          Automatisierung von Deployments mit GitHub Actions – wir setzen auf
          bewährte und zukunftssichere Technologien.
        </p>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    lineHeight: "1.5",
    borderRadius: "10px",
    height: "1400px"
  },
  heroSection: {
    textAlign: "center",
    padding: "10px 50px",
    backgroundColor: "linear-gradient(90deg, #1e3a8a, #1e293b)",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#007acc"
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    fontStyle: "italic",
  },
  text: {
    fontSize: "1.2rem",
    margin: "15px 0",
    textAlign: "left",
  },
  section: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    fontSize: "2rem",
    borderBottom: "2px solid #64748b",
    paddingBottom: "8px",
    marginBottom: "20px",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "40px",
  },
  listItem: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    padding: "5px 0",
    borderBottom: "1px solid #e2e8f0",
  },
};
