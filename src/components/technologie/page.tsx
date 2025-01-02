"use client";

export default function TechnologyPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Technologien</h1>
      <section
        style={styles.heroSection}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0f7fa")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
      >
        <p
          style={styles.subtitle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#007acc")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
        >
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
          {["Next.js", "TypeScript", "PHP", "Vercel", "GitHub", "GitHub Actions", "MySQL", "ESLint", "React"].map(
            (tech, index) => (
              <li
                key={tech}
                style={{
                  ...styles.listItem,
                  backgroundColor: colors[index % colors.length],
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = hoverColors[index % hoverColors.length])
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = colors[index % colors.length])
                }
              >
                {tech}
              </li>
            )
          )}
        </ul>
      </section>

      <section
        style={styles.section}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <h2
          style={styles.sectionTitle}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#e63946")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#2d3748")}
        >
          Warum diese Technologien?
        </h2>
        <p
          style={styles.text}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#1d3557")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
        >
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

const colors = ["#f9f871", "#ffadad", "#caffbf", "#9bf6ff", "#ffc6ff", "#fdffb6", "#bdb2ff", "#ffb5a7", "#a0c4ff"];
const hoverColors = ["#fff3a3", "#ffbfbf", "#dbffda", "#b4f2ff", "#ffd8ff", "#fef3c1", "#d5d0ff", "#ffc7b5", "#b4d6ff"];

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
    transition: "color 0.3s ease",
  },

  heroSection: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    width: "82%",
    maxWidth: "800px",
    transition: "background-color 0.3s ease",
  },

  subtitle: {
    fontSize: "1.5rem",
    fontStyle: "italic",
    textAlign: "center",
    color: "#333",
    transition: "color 0.3s ease",
  },

  text: {
    fontSize: "1.2rem",
    textAlign: "center",
    color: "#555",
    transition: "color 0.3s ease",
  },

  section: {
    marginTop: "40px",
    padding: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "800px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  sectionTitle: {
    fontSize: "2rem",
    borderBottom: "2px solid #64748b",
    paddingBottom: "8px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#2d3748",
    transition: "color 0.3s ease",
  },

  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },

  listItem: {
    fontSize: "1.2rem",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "8px",
    borderBottom: "1px solid #e2e8f0",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
};
