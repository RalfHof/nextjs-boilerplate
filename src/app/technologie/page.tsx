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
    lineHeight: "1.5",
    borderRadius: "12px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "120px",
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#007acc",
    textAlign: "center",
  },

  heroSection: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    width: "82%",
    maxWidth: "800px",
  },

  subtitle: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    textAlign: "center",
  },

  text: {
    fontSize: "1.2rem",
    textAlign: "center",
  },

  section: {
    marginTop: "40px",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "800px",
  },

  sectionTitle: {
    fontSize: "2rem",
    borderBottom: "2px solid #64748b",
    paddingBottom: "8px",
    marginBottom: "20px",
    textAlign: "center",
  },

  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },

  listItem: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    padding: "5px 0",
    borderBottom: "1px solid #e2e8f0",
  },
};
