"use client";
import Link from "next/link";

export default function Footer() {
  const scrollToSection = (id: string) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer">
      <div id="ContainerImg"></div>

      <div className="FooterContainer" id="ApplicationDiv">
        <div className="HeadlineContainer">
          <p className="HeadlineContent">Application</p>
          <hr className="FooterHorizontalLine" />
        </div>

        <div className="ContainerAroundLinks">
          <ul className="footer-links">
            <li>
              <Link href="https://app.linkify.cloud/login">Login</Link>
            </li>
            <li>
              <Link href="https://app.linkify.cloud/registrierung">Sign Up</Link>
            </li>
            <li>
              <Link href="https://github.com/RalfHof/nextjs-boilerplate" target="_blank">Github</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="FooterContainer">
        <div className="HeadlineContainer">
          <p className="HeadlineContent">Information</p>
          <hr className="FooterHorizontalLine" />
        </div>

        <div className="ContainerAroundLinks">
          <ul className="footer-links">
            <li>
              <button onClick={() => scrollToSection("FAQ")} className="footer-link-btn footer-links">FAQ</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("Technologien")} className="footer-link-btn footer-links">Technologie</button>
            </li>
            <li>
              <Link href="/impressum">Produkt Beschreibung</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="FooterContainer">
        <div className="HeadlineContainer" id="ContactContainer">
          <p className="HeadlineContent">Kontakt</p>
          <hr className="FooterHorizontalLine" />
        </div>

        <div className="ContainerAroundLinks">
          <ul className="footer-links">
            <li>
              <button onClick={() => scrollToSection("Team")} className="footer-link-btn footer-links">Team</button>

            </li>
            <li>
              <button onClick={() => scrollToSection("Kontakt")} className="footer-link-btn footer-links">Kontakt</button>
            </li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
            <li>
              <Link href="/datenschutz">Datenschutz</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
