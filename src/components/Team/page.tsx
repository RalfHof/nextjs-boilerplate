"use client";

import Image from "next/image";
import React, { useState } from "react";

const teamMembers = [
  {
    name: "Akin Kale",
    image: "/img/bild1.jpg",
    email: "akinkale054@hotmail.com",
    role: "Frontend",
  },
  {
    name: "Marc Ehrlich",
    image: "/img/bild2.jpg",
    email: "marc.ehrlich@example.com",
    role: "Dokumentation",
  },
  {
    name: "Ralf Hofmann",
    image: "/img/bild3.jpg",
    email: "Ralf-Hofmann82@outlook.de",
    role: "Frontend",
  },
  {
    name: "Victor Nicolayev",
    image: "/img/bild4.jpg",
    email: "victor.nicolayev@example.com",
    role: "Backend",
  },
];

export default function Team() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Das Team</h1>

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
              width={300}
              height={350}
              style={{
                borderRadius: "10px",
                height: "350px",
                padding: "10px",
                cursor: "pointer",
                transform: hovered === member.name ? "scale(1.2)" : "scale(1)",
                transition: "transform 0.3s ease",
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
    paddingBottom: "60px",
    backgroundColor: "#1c042e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: "2.5rem",
    color: "#007acc",
    textAlign: "center",
    width: "100%",
    maxWidth: "800px",
  },
  teamGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    width: "100%",
    gap: "20px",
  },
  teamMember: {
    textAlign: "center",
    position: "relative",
    padding: "0",
    margin: "0",
  },
  teamName: {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#f2c76e",
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
