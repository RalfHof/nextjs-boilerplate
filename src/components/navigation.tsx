"use client";
import { useState, useEffect } from "react";
import Logo from "./logo";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const router = useRouter()

  useEffect(() => {
    // Check only in the browser
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1150);
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
      // Menü nach dem Klick schließen
      setIsMenuOpen(false);
    }
  };

  const handleLoginClick = () => {
    router.push("https://app.linkify.cloud/login")
  }

  const handleHomeClick = () => {
    const currentUrl = window.location.href;
    if (!currentUrl.endsWith("/info")) {
      window.location.href = "/info";
    } else {
      // Andernfalls scrolle zur Sektion "Home"
      scrollToSection("Home");
    }
  };

  const handleProjektClick = () => {
    router.push("/projekt")
  }

  const handleProductClick = () => {
    router.push("/product")
  }

  const handleScrollToSection = (id: string) => {
    const currentUrl = window.location.href;

    // Überprüfe, ob die URL nicht auf /info endet
    if (!currentUrl.endsWith("/info")) {
      // Leite zu /info weiter und speichere den Zielbereich in der URL
      window.history.pushState({}, '', '/info');

      setTimeout(() => {
        scrollToSection(id);
      }, 500); // Eine kleine Verzögerung, um sicherzustellen, dass die Seite geladen ist
    } else {
      // Wenn die URL bereits /info ist, scrolle direkt
      scrollToSection(id);
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

      {/* Overlay, das den Rest der Seite blockiert, wenn das Burger-Menü geöffnet ist */}
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
            <button onClick={() => handleScrollToSection("Team")} className="nav-btn">
              TEAM
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScrollToSection("Technologien")} className="nav-btn">
              TECHNOLOGIEN
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => handleScrollToSection("Kontakt")} className="nav-btn">
              KONTAKT
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-btn" onClick={handleLoginClick}>
              LOGIN
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
