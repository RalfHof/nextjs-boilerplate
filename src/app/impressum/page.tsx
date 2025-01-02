import React from 'react';
import Link from 'next/link';

export default function ImpressumPage() {

  return (
    <div className="impressum-page" id="impressum-page">
      <h1 className="page-title">Impressum</h1>

      <main className="content" id="main-content">
        <section className="section" id="company-details">
          <h2 className="section-title">Angaben gemäß § 5 TMG</h2>
          <address className="company-address">
            <strong className="company-name">{process.env.NEXT_PUBLIC_COMPANY_NAME || "[Linkify]"}</strong><br />
            <span className="address">{process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "[Ihre vollständige Adresse]"}</span><br />
            <span className="postal-code">{process.env.NEXT_PUBLIC_COMPANY_POSTAL_CODE || "[PLZ, Ort]"}</span>
          </address>
          <p className="representative">
            <strong>Vertreten durch:</strong><br />
            {process.env.NEXT_PUBLIC_REPRESENTATIVE || "[Ihr Name] (Geschäftsführer/Geschäftsführung)"}
          </p>
          <p className="contactImpressum">
            <strong>Kontakt:</strong><br />
            Telefon: <span className="phone-number">{process.env.NEXT_PUBLIC_PHONE_NUMBER || "[+123456789]"}</span><br />
            E-Mail: <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "[Ihre E-Mail-Adresse]"}`} className="email-link">{process.env.NEXT_PUBLIC_EMAIL || "[Ihre E-Mail-Adresse]"}</a><br />
            Webseite: <a href={process.env.NEXT_PUBLIC_WEBSITE || "[Ihre Webseite]"} target="_blank" rel="noopener noreferrer" className="website-link">{process.env.NEXT_PUBLIC_WEBSITE || "[Ihre Webseite]"}</a>
          </p>
          <p className="vat-id">
            <strong>Umsatzsteuer-Identifikationsnummer (USt-IdNr.):</strong><br />
            {process.env.NEXT_PUBLIC_VAT_ID || "[Ihre USt-IdNr., falls vorhanden]"}
          </p>
        </section>

        <section className="section" id="legal-notices">
          <h2 className="section-title">Rechtliche Hinweise</h2>
          <p className="content-responsible">
            <strong>Verantwortlich für den Inhalt:</strong><br />
            {process.env.NEXT_PUBLIC_CONTENT_RESPONSIBLE || "[Ihr Name], [Ihre Position]"}
          </p>
          <p className="editorial-responsible">
            <strong>Redaktionell verantwortlich:</strong><br />
            {process.env.NEXT_PUBLIC_EDITORIAL_RESPONSIBLE || "[Ihr Name]"}
          </p>
        </section>

        <section className="section" id="privacy">
          <h2 className="section-title">Datenschutz</h2>
          <p className="privacy-link">Bitte beachten Sie unsere <Link href="/datenschutz">Datenschutzerklärung</Link>, die weitere Informationen zum Umgang mit Ihren personenbezogenen Daten enthält.</p>
        </section>

        <section className="section" id="applicable-law">
          <h2 className="section-title">Anwendbares Recht</h2>
          <p className="law-text">Es gilt ausschließlich deutsches Recht.</p>
        </section>

      </main>
    </div>
  );
}
