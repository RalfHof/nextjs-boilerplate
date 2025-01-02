"use client";

export default function TechnologyPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Technologien</h1>
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

    </div>
  );
}

const colors = ["#f9f871", "#ffadad", "#caffbf", "#9bf6ff", "#ffc6ff", "#fdffb6", "#bdb2ff", "#ffb5a7", "#a0c4ff"];
const hoverColors = ["#fff3a3", "#ffbfbf", "#dbffda", "#b4f2ff", "#ffd8ff", "#fef3c1", "#d5d0ff", "#ffc7b5", "#b4d6ff"];

const styles: Record<string, React.CSSProperties> = {
  container: {
    lineHeight: "1.5",
    backgroundColor: "#000",
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
