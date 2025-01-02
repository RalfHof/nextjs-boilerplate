"use client";

import { useState } from "react";
import { RiNextjsFill, RiVercelFill } from "react-icons/ri";
import { SiTypescript, SiEslint } from "react-icons/si";
import { FaPhp, FaReact, FaGithub } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

export default function TechnologyPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const technologies = [
    { title: "Nextjs", icon: <RiNextjsFill />, description: "Next.js ist ein React-Framework für serverseitiges Rendering und Webseiten." },
    { title: "Typescript", icon: <SiTypescript />, description: "TypeScript ist eine JavaScript-Erweiterung mit statischer Typisierung." },
    { title: "PHP", icon: <FaPhp />, description: "PHP ist eine serverseitige Skriptsprache für die Webentwicklung." },
    { title: "Vercel", icon: <RiVercelFill />, description: "Vercel ist eine Cloud-Plattform für das Hosting von Webseiten und Serverless-Funktionen." },
    { title: "Github", icon: <FaGithub />, description: "GitHub ist eine Plattform für die Versionskontrolle von Code und die Zusammenarbeit von Entwicklern." },
    { title: "MySQL", icon: <DiMysql />, description: "MySQL ist ein relationales Datenbankmanagementsystem zur Verwaltung von Daten." },
    { title: "ESLint", icon: <SiEslint />, description: "ESLint ist ein Linter(Code Analysierer) für JavaScript, der hilft, Code-Qualität zu gewährleisten." },
    { title: "React", icon: <FaReact />, description: "React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen, insbesondere für Single-Page-Apps." },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Technologien</h1>
      <div style={styles.grid}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              backgroundColor: hoveredIndex === index ? "#6f42c1" : "#212353",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={styles.icon}>{tech.icon}</div>
            <h2 style={styles.cardTitle}>{tech.title}</h2>
            <p style={styles.cardText}>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    paddingBottom: "80px"
  },

  title: {
    fontSize: "3rem",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#f9f871",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  },

  card: {
    backgroundColor: "#212353",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
  },

  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#f9f871",
  },

  cardText: {
    fontSize: "1rem",
    color: "#d1d1d1",
  },

  icon: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#f9f871",
    cursor: "pointer",
  },
};
