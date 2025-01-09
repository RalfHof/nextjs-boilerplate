"use client";
export default function DatenschutzPage() {
  return (<>
    <div className="impressum-page datenschutz">
      <h1 className="page-title">Datenschutzerklärung</h1>
      <div className="content">
        <section className="section">
        <p className="representative">
          Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In
          dieser Datenschutzerklärung informieren wir Sie darüber, wie wir Ihre
          personenbezogenen Daten erheben, verarbeiten und nutzen.
        </p>
        </section>
        <section className="section">
          <h2 className="section-title">1. Verantwortliche Stelle</h2>
          <p className="representative">
            Verantwortlich für die Datenverarbeitung ist <span className="placeholder">[Name des Unternehmens]</span>,
            <span className="placeholder">[Adresse]</span>, <span className="placeholder">[E-Mail-Adresse]</span>.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="representative">
            Personenbezogene Daten sind alle Informationen, die sich auf eine
            identifizierte oder identifizierbare natürliche Person beziehen. Dazu
            gehören beispielsweise Ihr Name, Ihre Anschrift, Ihre Telefonnummer,
            Ihre E-Mail-Adresse und Ihre IP-Adresse.
          </p>
          <p className="representative">
            Wir erheben personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer
            Bestellung, bei einer Kontaktaufnahme mit uns (z.B. per Kontaktformular
            oder E-Mail) oder bei der Registrierung für unseren Newsletter
            mitteilen.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">3. Zwecke der Datenverarbeitung</h2>
          <p className="representative">Wir verarbeiten Ihre personenbezogenen Daten zu folgenden Zwecken:</p>
          <ul className="purposes-list">
            <li>Abwicklung Ihrer Bestellung</li>
            <li>Beantwortung Ihrer Anfragen</li>
            <li>Versand unseres Newsletters</li>
            <li>Wahrung unserer berechtigten Interessen</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">4. Rechtsgrundlage der Datenverarbeitung</h2>
          <p className="representative">
            Die Rechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten
            ergibt sich aus:
          </p>
          <ul className="legal-basis-list">
            <li>
              Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung zur Erfüllung
              eines Vertrages oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich ist
            </li>
            <br />
            <li>
              Art. 6 Abs. 1 lit. a DSGVO, soweit Sie in die Datenverarbeitung
              eingewilligt haben
            </li>
            <br />
            <li>
              Art. 6 Abs. 1 lit. f DSGVO, soweit die Verarbeitung zur Wahrung
              unserer berechtigten Interessen erforderlich ist
            </li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">5. Weitergabe von Daten</h2>
          <p className="representative">
            Wir geben Ihre personenbezogenen Daten nur dann an Dritte weiter, wenn
            dies zur Erfüllung des Vertrags erforderlich ist (z.B. an das mit der
            Lieferung beauftragte Versandunternehmen), wir gesetzlich dazu
            verpflichtet sind oder Sie eingewilligt haben.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">6. Ihre Rechte</h2>
          <p className="representative">
            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie
            betreffenden personenbezogenen Daten:
          </p>
          <ul className="rights-list">
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung oder Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
          </ul>
          <p className="representative">
            Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
            beschweren.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">7. Datensicherheit</h2>
          <p className="representative">
            Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre
            personenbezogenen Daten vor Verlust, Missbrauch, unberechtigtem Zugriff
            und unbefugter Offenlegung zu schützen.
          </p>
        </section>
        <section className="section updates">
          <h2 className="section-title">8. Aktualisierung der Datenschutzerklärung</h2>
          <p className="representative">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an
            geänderte Rechtslagen oder bei Änderungen des Dienstes sowie der
            Datenverarbeitung anzupassen.
          </p>
        </section>
      </div>
    </div>
  </>
  );
}