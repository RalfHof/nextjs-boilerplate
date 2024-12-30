"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Logo />
      </div>

      {/* Burger-Menü für mobile Ansicht */}
      {isMobile && !isMenuOpen && ( // Zeige Burger-Menü nur, wenn das Menü nicht offen ist
        <button
          className="burger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle isMenuOpen
        >
          ☰
        </button>
      )}

      {/* Navigation */}
      <nav className={`main-navigation ${isMenuOpen ? "open" : ""}`}>
        {isMenuOpen && isMobile && (
          <div id="CloseMenuDIV">
            <p id="CloseMenu" onClick={() => setIsMenuOpen(false)}>X</p>
          </div>
        )}
        <ul className="nav-list">
          <li>
            <Link href="/technologie" className="nav-link">
              Technologie
            </Link>
          </li>
          <li className="nav-item login">
            <Link href="https://app.linkify.cloud/login" className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item registrieren">
            <Link href="https://app.linkify.cloud/registrierung" className="nav-link">
              Registrieren
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
