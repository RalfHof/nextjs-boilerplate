import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Akin Kale",
    image: "/img/bild1.jpg", // Pfad zum Bild von Akin Kale
    email: "akinkale054@hotmail.com",
    role: "Frontend",
    objectPosition: "center top",
  },
  {
    name: "Marc Ehrlich",
    image: "/img/bild2.jpg", // Pfad zum Bild von Marc Ehrlich
    email: "marc.ehrlich@example.com",
    role: "Dokumentation",
  },
  {
    name: "Ralf Hofmann",
    image: "/img/bild3.jpg", // Pfad zum Bild von Ralf Hofmann
    email: "Ralf-Hofmann82@outlook.de",
    role: "Frontend",
  },
  {
    name: "Victor Nicolayev",
    image: "/img/bild4.jpg", // Pfad zum Bild von Victor Nicolayev
    email: "victor.nicolayev@example.com",
    role: "Backend",
  },
];

export default function AboutUs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Über uns</h1>
      <section style={styles.section}>
        <p style={styles.subtitle}>
          <strong>Die Brücke zwischen Lexware Office und Ihrem DMS</strong>
        </p>
        <p style={styles.text}>
          Sind Sie es leid, ständig zwischen Lexware Office und Ihrem
          Dokumentenmanagementsystem (DMS) hin und her zu wechseln? Verschwenden
          Sie wertvolle Zeit mit dem manuellen Import und Export von Dokumenten?
        </p>
        <p style={styles.text}>Wir haben die Lösung!</p>
        <p style={styles.text}>
          Unsere innovative App automatisiert die Kommunikation zwischen Lexware
          Office und Ihrem DMS und schafft so eine nahtlose Integration.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Unser Team:</h2>
        <p style={styles.text}>
          Hinter dieser App steht ein Team aus erfahrenen Softwareentwicklern
          und Lexware-Experten. Wir brennen für Innovation und haben es uns zur
          Aufgabe gemacht, die Arbeitswelt von morgen zu gestalten.
        </p>
      </section>

      <div style={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.name} style={styles.teamMember}>
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              style={{
                ...styles.teamImage,
                objectPosition: member.objectPosition || "center",
              }}
            />
            <p style={styles.teamName}>{member.name}</p>
            <p style={styles.teamRole}>{member.role}</p>

            {/* E-Mail-Icon mit Name */}
            <div style={styles.emailContainer}>
              <a
                href={`mailto:${member.email}`}
                style={styles.emailIcon}
                title={`E-Mail an ${member.name}`}
              >
                📧
              </a>
              <span style={styles.emailText}>{member.email}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "20px",
    paddingBottom: "60px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  section: {
    marginBottom: "40px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    backgroundColor: "#fff",
    width: "90%",
    maxWidth: "800px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#007acc",
    textAlign: "center",
    width: "100%",
    maxWidth: "800px",
  },
  subtitle: {
    fontSize: "1.8rem",
    color: "#334155",
    marginBottom: "15px",
  },
  text: {
    fontSize: "1.2rem",
    color: "#475569",
    marginBottom: "10px",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    width: "100%",
    marginBottom: "50px",
    gap: "50px",
  },
  teamMember: {
    textAlign: "center",
    position: "relative",
  },
  teamImage: {
    borderRadius: "50%",
    objectFit: "cover",
  },
  teamName: {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#1e293b",
  },
  teamRole: {
    fontSize: "1rem",
    fontStyle: "italic",
    color: "#6b7280",
    marginBottom: "10px",
  },
  emailContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  emailIcon: {
    fontSize: "1.5rem",
    color: "#007acc",
    textDecoration: "none",
    marginRight: "10px",
  },
  emailText: {
    fontSize: "1rem",
    color: "#475569",
  },
};
