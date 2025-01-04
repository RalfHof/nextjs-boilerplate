"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">


        <li>
          <Link href="/datenschutz">Datenschutz</Link>
        </li>
        <li>
          <Link href="/impressum">Impressum</Link>
        </li>
        <li>
          <Link href="/impressum">Produkt Beschreibung</Link>
        </li>
        <li>
          <Link href="https://app.linkify.cloud/login">Login</Link>
        </li>
        <li>
          <Link href="https://app.linkify.cloud/registrierung">Sign Up</Link>
        </li>
        <li>
          <Link href="https://github.com/RalfHof/nextjs-boilerplate">Github</Link>
        </li>
      </ul>
    </footer>
  );
}


