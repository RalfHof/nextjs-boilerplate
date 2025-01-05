"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div style={{ display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "100px", flexDirection: "column" }}>

        <div style={{ marginBottom: "30px", color: "#f2c76e", }}>
          <p style={{ fontSize: "30px", margin: "0" }}>Application</p>
          <hr style={{ border: "1px solid #f2c76e", width: "120px", position: "relative", left: "-10px", top: "10px" }} />

        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", left: "25px", top: "-5px" }}>
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



      <div style={{ display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "100px", flexDirection: "column" }}>

        <div style={{ marginBottom: "30px", color: "#f2c76e", }}>
          <p style={{ fontSize: "30px", margin: "0" }}>Information</p>
          <hr style={{ border: "1px solid #f2c76e", width: "120px", position: "relative", left: "-10px", top: "10px" }} />

        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", left: "25px", top: "-5px" }}>
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



      <div style={{ display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center", marginTop: "100px", flexDirection: "column" }}>

        <div style={{ marginBottom: "30px", color: "#f2c76e", }}>
          <p style={{ fontSize: "30px", margin: "0" }}>Kontakt</p>
          <hr style={{ border: "1px solid #f2c76e", width: "120px", position: "relative", left: "-10px", top: "10px" }} />

        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", left: "25px", top: "-5px" }}>
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


