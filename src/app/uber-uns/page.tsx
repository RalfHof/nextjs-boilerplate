import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Akin Kale",
    image: "/img/bild1.jpg", // Pfad zum Bild von Akin Kale
    objectPosition: "center top", // Verschiebt das Bild nach unten
  },
  {
    name: "Mark Erlich",
    image: "/img/bild2.jpg", // Pfad zum Bild von Mark Erlich
  },
  {
    name: "Ralf Hofmann",
    image: "/img/bild3.jpg", // Pfad zum Bild von Ralf Hofmann
  },
  {
    name: "Victor Nicolayev",
    image: "/images/victor-nicolayev.jpg", // Pfad zum Bild von Victor Nicolayev
    objectPosition: "center top", // Verschiebt das Bild nach unten
  },
];

export default function AboutUs() {
  return (
    <div style={styles.container}>
      <section style={styles.section}>
        <h1 style={styles.title}>Über uns</h1>
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
        <h2 style={styles.subtitle}>Was wir bieten:</h2>
        <ul style={styles.list}>
          <li>
            <strong>Automatischer Dokumententransfer:</strong> Angebote,
            Rechnungen, Lieferscheine und andere Dokumente werden automatisch
            von Lexware Office in Ihr DMS übertragen – kein manuelles Hochladen
            mehr!
          </li>
          <li>
            <strong>Zeitersparnis:</strong> Konzentrieren Sie sich auf Ihr
            Kerngeschäft, während unsere App im Hintergrund die lästige
            Dokumentenverwaltung übernimmt.
          </li>
          <li>
            <strong>Verbesserte Datenqualität:</strong> Vermeiden Sie Fehler
            durch manuelle Eingaben und profitieren Sie von einer zentralen,
            konsistenten Datenbasis.
          </li>
          <li>
            <strong>Optimierte Workflows:</strong> Schaffen Sie effiziente
            Prozesse und beschleunigen Sie Ihre Arbeitsabläufe.
          </li>
          <li>
            <strong>Mehr Transparenz:</strong> Behalten Sie jederzeit den
            Überblick über Ihre Dokumente und deren Status.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Unsere Mission:</h2>
        <p style={styles.text}>
          Wir wollen Unternehmen dabei unterstützen, ihre digitale
          Transformation voranzutreiben und die Vorteile der Automatisierung
          voll auszuschöpfen. Mit unserer App ermöglichen wir es Ihnen, Ihre
          Prozesse zu optimieren, Zeit und Kosten zu sparen und sich auf das zu
          konzentrieren, was wirklich zählt: Ihr Business.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Unser Team:</h2>
        <p style={styles.text}>
          Hinter dieser App steht ein Team aus erfahrenen Softwareentwicklern
          und Lexware-Experten. Wir brennen für Innovation und haben es uns zur
          Aufgabe gemacht, die Arbeitswelt von morgen zu gestalten.
        </p>
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
                  marginTop: "50px"
                }}
              />
              <p style={styles.teamName}>{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Bereit für die Zukunft?</h2>
        <p style={styles.text}>
          Sind Sie bereit für die Zukunft der Dokumentenverwaltung? Kontaktieren
          Sie uns noch heute und erfahren Sie mehr über unsere App!
        </p>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "20px",
    paddingBottom: "60px", // Abstand zum Footer
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
    color: "#475569",
    marginBottom: "10px",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "40px",
    color: "#475569",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
  },
  teamMember: {
    textAlign: "center",
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
};
