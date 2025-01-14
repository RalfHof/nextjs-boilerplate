"use client";

import { useState } from "react";
import { RiNextjsFill, RiVercelFill } from "react-icons/ri";
import { SiTypescript, } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

import { SiLumen } from "react-icons/si";
import Link from "next/link";
export default function TechnologyPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const technologies = [
    { title: "Nextjs", icon: <RiNextjsFill />, description: "Next.js ist ein React-Framework für serverseitiges Rendering und Webseiten." },
    { title: "Typescript", icon: <SiTypescript />, description: "TypeScript ist eine JavaScript-Erweiterung mit statischer Typisierung." },
    { title: "PHP Lumen (Laravel-OEM??)", icon: <SiLumen />, description: "Lumen ist ein leichtgewichtiges PHP-Microframework, basierend auf Laravel, ideal für APIs und Microservices." },
    { title: "MySQL", icon: <DiMysql />, description: "MySQL ist ein relationales Datenbankmanagementsystem zur Verwaltung von Daten." },
    { title: "Github", icon: <FaGithub />, description: "GitHub ist eine Plattform für die Versionskontrolle von Code und die Zusammenarbeit von Entwicklern." },
    { title: "Vercel", icon: <RiVercelFill />, description: "Vercel ist eine Cloud-Plattform für das Hosting von Webseiten und Serverless-Funktionen." },
    // { title: "ESLint", icon: <SiEslint />, description: "ESLint ist ein Linter(Code Analysierer) für JavaScript, der hilft, Code-Qualität zu gewährleisten." },
    // { title: "React", icon: <FaReact />, description: "React ist eine JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen, insbesondere für Single-Page-Apps." },
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
              backgroundColor: hoveredIndex === index ? "#f2c76e" : "inherit",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={styles.icon}>{tech.icon}</div>
            <h2
              style={{
                ...styles.cardTitle,
                color: hoveredIndex === index ? "#fff" : "#f2c76e", // Titel-Farbe ändern
              }}
            >
              {tech.title}
            </h2>
            <p style={styles.cardText}>{tech.description}</p>
          </div>
        ))}
      </div>
      <div className="LinkSame">
        <Link href="/diagramm">Linkify Infrastruktur</Link>
      </div>

    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: "#37075d",
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
    color: "#f2c76e",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
  },

  card: {
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    border: "1px solid #f2c76e",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "350px",
  },

  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "10px 0",
    color: "#f2c76e",
  },

  cardText: {
    fontSize: "1.3rem",
    color: "#fff",
    textAlign: "center",
  },

  icon: {
    marginBottom: "10px",
    color: "#fff",
    cursor: "pointer",
    fontSize: "5rem"
  },
};
