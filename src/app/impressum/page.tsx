import React from 'react';
import Link from 'next/link'; // Für interne Verlinkung

export default function ImpressumPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto p-4 max-w-3xl"> {/* Zentrierter Container mit Tailwind-ähnlichen Klassen */}
      <h1 className="text-3xl font-bold mb-4">Impressum</h1>

      <main className="space-y-6"> {/* Abstand zwischen den Abschnitten */}
        <section className="bg-white rounded-lg shadow-md p-6"> {/* Abschnitte mit Hintergrund, abgerundeten Ecken und Schatten */}
          <h2 className="text-2xl font-semibold mb-2">Angaben gemäß § 5 TMG</h2>
          <address className="not-italic"> {/* address-Tag für korrekte Semantik */}
            <strong>{process.env.NEXT_PUBLIC_COMPANY_NAME || "[Ihr Firmenname]"}</strong><br />
            {process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "[Ihre vollständige Adresse]"}<br />
            {process.env.NEXT_PUBLIC_COMPANY_POSTAL_CODE || "[PLZ, Ort]"}
          </address>
          <p><strong>Vertreten durch:</strong><br />
            {process.env.NEXT_PUBLIC_REPRESENTATIVE || "[Ihr Name] (Geschäftsführer/Geschäftsführung)"}</p>
          <p><strong>Kontakt:</strong><br />
            Telefon: {process.env.NEXT_PUBLIC_PHONE_NUMBER || "[Telefonnummer]"}<br />
            E-Mail: <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "[Ihre E-Mail-Adresse]"}`} className="text-blue-500 underline">{process.env.NEXT_PUBLIC_EMAIL || "[Ihre E-Mail-Adresse]"}</a><br />
            Webseite: <a href={process.env.NEXT_PUBLIC_WEBSITE || "[Ihre Webseite]"} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">{process.env.NEXT_PUBLIC_WEBSITE || "[Ihre Webseite]"}</a> {/* target="_blank" und rel="noopener noreferrer" für Sicherheit */}
          </p>
          <p><strong>Umsatzsteuer-Identifikationsnummer (USt-IdNr.):</strong><br />
            {process.env.NEXT_PUBLIC_VAT_ID || "[Ihre USt-IdNr., falls vorhanden]"}</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Rechtliche Hinweise</h2>
          <p><strong>Verantwortlich für den Inhalt:</strong><br />
            {process.env.NEXT_PUBLIC_CONTENT_RESPONSIBLE || "[Ihr Name], [Ihre Position]"}</p>
          <p><strong>Redaktionell verantwortlich:</strong><br />
            {process.env.NEXT_PUBLIC_EDITORIAL_RESPONSIBLE || "[Ihr Name]"}</p>
        </section>

        {/* ... weitere Sections (Haftungsausschluss, Urheberrecht, etc.) mit ähnlichem Aufbau */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Datenschutz</h2>
          <p>Bitte beachten Sie unsere <Link href="/datenschutz" className="text-blue-500 underline">Datenschutzerklärung</Link>, die weitere Informationen zum Umgang mit Ihren personenbezogenen Daten enthält.</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-2">Anwendbares Recht</h2>
          <p>Es gilt ausschließlich deutsches Recht.</p>
        </section>

      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; {currentYear} {process.env.NEXT_PUBLIC_COMPANY_NAME || "[Ihr Firmenname]"}</p>
      </footer>
    </div>
  );
}