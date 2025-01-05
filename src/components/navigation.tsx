"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check only in the browser
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 920);
      };

      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      handleResize(); // Initial resize
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Set default navigation background color for SSR
  const navBackgroundColor =
    typeof window !== "undefined" && scrollY > (window.innerHeight || 800) * 0.2
      ? "#1d0332"
      : "rgb(76, 27, 94)";

  const scrollToSection = (id: string) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className="header"
      style={{
        backgroundColor: navBackgroundColor,
        transition: "background-color 0.7s ease",
      }}
    >


      <div className="logo">
        <Logo />
      </div>

      {/* Burger-Menü für mobile Ansicht */}
      {isMobile && !isMenuOpen && (

        <div id="ContainerBurgermenu">
          <button
            className="burger-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className={`main-navigation ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && isMobile && (
          <div id="CloseMenuDIV">
            <p id="CloseMenu" onClick={() => setIsMenuOpen(false)}>
              X
            </p>
          </div>
        )}
        <ul className="nav-list">
          <li className="nav-item">
            <button onClick={() => scrollToSection("Home")} className="nav-btn">
              HOME
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection("Team")} className="nav-btn">
              TEAM
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => scrollToSection("Technologien")}
              className="nav-btn"
            >
              TECHNOLOGIEN
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => scrollToSection("Kontakt")}
              className="nav-btn"
            >
              KONTAKT
            </button>
          </li>
          <li className="nav-item login">
            <Link href="https://app.linkify.cloud/login" className="nav-link">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
