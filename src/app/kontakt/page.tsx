"use client";
export default function KontaktPage() {
  return (
    <>
      <div style={{ backgroundColor: "#f9f9f9", height: "93vmax" }}>
        <section className="contact">
          <h2>Kontakt</h2>
          <p>
            Du erreichst uns unter:
            <br />
            Telefon: +49 123 456 789
            <br />
            E-Mail: info@deinefirma.de
          </p>
          <a href="mailto:info@deinefirma.de" className="email-link">Schreibe uns!</a>
        </section>
      </div>
    </>
  );
}
