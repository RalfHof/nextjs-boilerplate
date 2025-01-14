"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {

  const scrollToSection = (id: string) => {
    if (typeof document !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navigateToInfoAndScroll = (sectionId: string) => {
    const currentUrl = window.location.href;
    if (!currentUrl.endsWith("/info")) {
      // Wenn nicht auf /info, leite zur /info weiter und scrolle dann
      window.location.href = `/info#${sectionId}`;

    } else {
      // Wenn bereits auf /info, scrolle direkt
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.replace("#", "");
      scrollToSection(targetId);
      window.history.replaceState(null, "", "/info"); // Entferne Hash aus URL
    }
  }, []);

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
              <button onClick={() => navigateToInfoAndScroll("Pricing")} className="footer-link-btn footer-links">Sign Up</button>
            </li>
            <li>
              <Link href="https://github.com/RalfHof/nextjs-boilerplate" target="_blank">Github Demo</Link>
            </li>

            <li>
              <Link href="https://github.com/RalfHof/nextjs-boilerplate" target="_blank">Github Application</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="FooterContainer footer-content-div">
        <div className="HeadlineContainer ">
          <p className="HeadlineContent">Information</p>
          <hr className="FooterHorizontalLine" />
        </div>

        <div className="ContainerAroundLinks">
          <ul className="footer-links" >
            <li>
              <button onClick={() => navigateToInfoAndScroll("FAQ")} className="footer-link-btn footer-links">FAQ</button>
            </li>
            <li>
              <button onClick={() => navigateToInfoAndScroll("Technologien")} className="footer-link-btn footer-links">Technologie</button>
            </li>
            <li>
              <Link href="/product">Produkt Beschreibung</Link>
            </li>

            <li>
              <Link href="/diagramm">Diagramm</Link>
            </li>

            <li>
              <Link href="/fragen">Fragen</Link>
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
              <button onClick={() => navigateToInfoAndScroll("Team")} className="footer-link-btn footer-links">Team</button>
            </li>
            <li>
              <button onClick={() => navigateToInfoAndScroll("Kontakt")} className="footer-link-btn footer-links">Kontakt</button>
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
