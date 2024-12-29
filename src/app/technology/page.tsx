"use client";

export default function TechnologyPage() {
  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h1 style={styles.title}>Technologien</h1>
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
        <h2 style={styles.subtitle}>Unsere Technologien:</h2>
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
        <h2 style={styles.subtitle}>Warum diese Technologien?</h2>
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
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    color: "#475569",
  },
  section: {
    marginBottom: "40px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1e293b",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.8rem",
    color: "#334155",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "40px",
  },
  listItem: {
    fontSize: "1.2rem",
    marginBottom: "8px",
  },
};
