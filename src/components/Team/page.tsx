"use client";

import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Akin Kale",
    image: "/img/bild1.png",
    email: "akinkale054@hotmail.com",
    role: "Frontend-App, -Demo",
  },
  {
    name: "Ralf Hofmann",
    image: "/img/bild3.png",
    email: "Ralf-Hofmann82@outlook.de",
    role: "Frontend-Demo",
  },
  {
    name: "Marc Ehrlich",
    image: "/img/bild2.png",
    email: "marc.schuetze@hotmail.com",
    role: "Dokumentation, Texte",
  },
  {
    name: "Viktor Nikolayev",
    image: "/img/bild4.png",
    email: "viktor.nikolayev@gmail.com",
    role: "Backend-Api, -Frontend-App, DevOps",
  },
  {
    name: "Scan Me",
    image: "/img/QR-LinkifyTeam.png",
    web: "https://linkify.cloud",
    role: "Geht zu Teambereich",
  },
];

export default function Team() {
  return (
    <div style={styles.container}>
      <div>
        <h1 style={styles.title}>Team</h1>
        <p style={styles.paragraph}>
          Ein starkes Team, das mit Leidenschaft und Engagement zusammenarbeitet, um großartige Ergebnisse zu erzielen.
        </p>
      </div>
      <div style={styles.teamGrid}>
        {teamMembers.map((member) => (
          <div key={member.name} style={styles.teamMember}>
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={200}
              style={{
                borderRadius: "15px",
                padding: "10px",
                objectFit: "cover",
                width: "100%",
                maxWidth: "300px",
                height: "auto",
              }}
            />
            <p style={styles.teamName}>{member.name}</p>
            <p style={styles.teamRole}>{member.role}</p>

            {member.email && (
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
            )}

            {member.web && (
              <div style={styles.emailContainer}>
                <a
                  href={`${member.web}`}
                  style={styles.emailIcon}
                  title={`E-Mail an ${member.web}`}
                >
                  🌐
                </a>
                <span style={styles.emailText}>{member.web}</span>
              </div>
            )}
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
    height: "auto",

  },
  title: {
    fontSize: "3rem",
    textAlign: "center",
    width: "100%",
    padding: "0",
    margin: "0",
    marginBottom: "10px",
    color: "#d4a017",
    marginTop: "20px",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(450px, 2fr))",
    width: "100%",
  },

  teamMember: {
    display: "flex",
    flexDirection: "column",
    paddingBottom: "30px",
    justifyContent: "center",
    alignItems: "center",

  },
  teamName: {
    fontWeight: "bold",
    color: "#d4a017",
    padding: "0",
    margin: "0",
    fontSize: "1.3rem",
  },
  teamRole: {
    fontSize: "1.3rem",
    color: "#ccc",
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
    color: "#ccc",
    textDecoration: "none",
    marginRight: "10px",
  },
  emailText: {
    color: "#ccc",
    fontSize: "1.2rem",
  },
};
