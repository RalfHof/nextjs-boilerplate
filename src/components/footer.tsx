"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="FooterContainer" >

        <div className="HeadlineContainer">
          <p className="HeadlineContent">Application</p>
          <hr className="FooterHorizontalLine" />

        </div>

        <div className="ContainerAroundLinks" >
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
              <Link href="/FAQ">FAQ</Link>
            </li>
            <li>
              <Link href="/Technologie">Technologie</Link>
            </li>
            <li>
              <Link href="/impressum">Produkt Beschreibung</Link>
            </li>
          </ul>
        </div>
      </div>



      <div className="FooterContainer">

        <div className="HeadlineContainer">
          <p className="HeadlineContent">Kontakt</p>
          <hr className="FooterHorizontalLine" />

        </div>

        <div className="ContainerAroundLinks">
          <ul className="footer-links">
            <li>
              <Link href="/TEAM">Team</Link>
            </li>
            <li>
              <Link href="/Kontakt">Kontakt</Link>
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


