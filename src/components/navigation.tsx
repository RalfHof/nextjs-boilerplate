"use client";
import { useState, useEffect } from "react";
import Logo from "./logo";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1150);
      };
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  const navBackgroundColor =
    typeof window !== "undefined" && scrollY > (window.innerHeight || 800) * 0.2
      ? "#37075d"
      : "#1c042e"
  const scrollToSection = (id: string) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMenuOpen(false);
    }
  };
  const navigateToInfoAndScroll = (sectionId: string) => {
    const currentUrl = window.location.href;
    if (!currentUrl.endsWith("/info")) {
      // Wenn nicht auf /info, leiten wir weiter und fügen das Ziel-Hash hinzu
      window.location.href = `/info#${sectionId}`;
    } else {
      scrollToSection(sectionId);
    }
  };
  // Prüfen, ob ein Hash nach der Navigation vorhanden ist, und scrollen
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      scrollToSection(targetId);
      window.history.replaceState(null, "", "/info"); // Entferne Hash aus URL
    }
  }, []);

  const handleLoginClick = () => {
    router.push("https://app.linkify.cloud/login");
  };

  const handleHomeClick = () => {
    navigateToInfoAndScroll("Home");
  };

  const handleProjektClick = () => {
    if (window.location.pathname !== "/projekt") {
      window.location.href = "/projekt";
    }
  };
  const handleProductClick = () => {
    if (window.location.pathname !== "/product") {
      window.location.href = "/product";
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
      <div className="logo" onClick={handleHomeClick} >
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
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)} />
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
            <button onClick={handleHomeClick} className="nav-btn">
              HOME
            </button>
          </li>
          <li className="nav-item">
            <button onClick={handleProjektClick} className="nav-btn">
              PROJEKT
            </button>
          </li>
          <li className="nav-item">
            <button onClick={handleProductClick} className="nav-btn">
              PRODUKT
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => navigateToInfoAndScroll("Team")}
              className="nav-btn"
            >
              TEAM
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => navigateToInfoAndScroll("Technologien")}
              className="nav-btn"
            >
              TECHNOLOGIEN
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => navigateToInfoAndScroll("Kontakt")}
              className="nav-btn"
            >
              KONTAKT
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-btn ${isMobile ? "" : "borderlogin"}`}
              onClick={handleLoginClick}>
              LOGIN
            </button>
          </li>

        </ul>
      </nav>
    </header>
  );
}