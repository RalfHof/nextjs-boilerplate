"use client";

import Image from "next/image";
import React, { useState } from "react";

const teamMembers = [
  {
    name: "Akin Kale",
    image: "/img/bild1.png",
    email: "akinkale054@hotmail.com",
    role: "Frontend-App, -Demo",
  },
  {
    name: "Marc Ehrlich",
    image: "/img/bild2.png",
    email: "marc.ehrlich@example.com",
    role: "Dokumentation",
  },
  {
    name: "Ralf Hofmann",
    image: "/img/bild3.png",
    email: "Ralf-Hofmann82@outlook.de",
    role: "Frontend-Demo",
  },
  {
    name: "Viktor Nikolayev",
    image: "/img/bild4.png",
    email: "viktor.nikolayev@gmail.com",
    role: "Backend-Api, -Frontend-App, DevOps",
  },
];

export default function Team() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.title}>Team</h1>
        <p style={styles.paragraph}>Ein starkes Team, das mit Leidenschaft und Engagement zusammenarbeitet, um großartige Ergebnisse zu erzielen.</p>
      </div>
      <div style={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div
            key={member.name}
            style={styles.teamMember}
          >
            <Image
              src={member.image}
              alt={member.name}
              onMouseEnter={() => setHovered(member.name)}
              onMouseLeave={() => setHovered(null)}
              width={300} // Breite für Querformat
              height={200} // Höhe für Querformat
              style={{
                borderRadius: "15px",
                padding: "10px",
                cursor: "pointer",
                transform: hovered === member.name ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.3s ease",
                objectFit: "cover", // Bild skalieren und zuschneiden
                width: "100%", // Füllt die Breite des Containers
                maxWidth: "300px", // Maximale Breite für Querformat
                height: "auto", // Beibehaltung des Seitenverhältnisses
              }}
            />


            <p style={styles.teamName}>{member.name}</p>
            <p style={styles.teamRole}>{member.role}</p>

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
    paddingBottom: "80px",
    backgroundColor: "#1d0332",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "auto"
  },
  title: {
    fontSize: "3rem",
    textAlign: "center",
    width: "100%",
    padding: "0",
    margin: "0",
    marginBottom: "10px",
    color: "#f2c76e",
    marginTop: "20px"
  },
  paragraph: {
    fontSize: "1.3rem",
    color: "#b9b9b9",
    textAlign: "center",
    width: "100%",
    maxWidth: "800px",
    padding: "0",
    margin: "0",
    marginBottom: "15px",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    width: "100%",
  },
  teamMember: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  teamName: {
    fontWeight: "bold",
    color: "#f2c76e",
    padding: "0",
    margin: "0",
    fontSize: "1.3rem"
  },
  teamRole: {
    fontSize: "1.3rem",
    fontStyle: "italic",
    color: "#b9b9b9",
    marginBottom: "10px",
    padding: "0",
  },
  emailContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  emailIcon: {
    fontSize: "1.5rem",
    color: "#007acc",
    textDecoration: "none",
    marginRight: "10px",
  },
  emailText: {
    color: "#475569",
    fontSize: "1.2rem",

  },
};
