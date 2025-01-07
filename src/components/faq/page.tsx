export default function FAQ() {
    const ContentQuestionArray = [
        "Welche Integrationsmöglichkeiten stehen zur Verfügung?",
        "Was ist ein Dokumentenmanagementsystem (DMS)?",
        "Was versteht man unter Buchungssoftware?",
        "Welche Voraussetzung gibt es, um Linkify nutzen zu können?",
        "Wir speichern keine persönlichen Daten, sondern ausschließlich Dokumenten-IDs. Es erfolgt keine echte Datenspeicherung.",
        "Was hat bei diesem Projekt nicht so gut funktioniert?",
        "Was hat bei diesem Projekt gut funktioniert?",
    ];

    const ContentAnswerArray = [
        "Linkify bietet zurzeit Integrationsmöglichkeiten mit Lexoffice und ecoDMS an. Diese Integrationen ermöglichen es, Dokumente und Daten nahtlos zwischen den Systemen auszutauschen.",
        "Ein Dokumentenmanagementsystem (DMS) ist eine Software, die zur Speicherung, Verwaltung und Nachverfolgung von elektronischen Dokumenten verwendet wird. Es ermöglicht eine effiziente Verwaltung von Dokumenten über deren gesamten Lebenszyklus.",
        "Buchungssoftware ist eine Lösung, die Unternehmen dabei unterstützt, ihre finanziellen Transaktionen zu verwalten und zu dokumentieren. Sie dient vor allem der Erfassung und Organisation von Buchhaltungsdaten. Zu den Funktionen einer Buchungssoftware gehören unter anderem die Rechnungsstellung, die Erstellung von Finanzberichten und die Berechnung von Steuern.",
        "Um Linkify nutzen zu können, benötigen Sie ein Lexoffice- und ecoDMS-Konto.",
        "Linkify speichert keine sensiblen persönlichen Informationen. Stattdessen werden nur IDs, die mit den jeweiligen Dokumenten verknüpft sind, gespeichert. So wird der Datenschutz gewährleistet.",
        `
1. Die erste EC2-Instanz konnte erfolgreich die Verbindung zur Domain linkify.cloud herstellen. Allerdings war es bei der zweiten EC2-Instanz nicht möglich, eine Verbindung zur Domain app.linkify.cloud herzustellen. Trotz verschiedener Lösungsansätze konnte das Problem nicht behoben werden. Dadurch entstand ein Zeitverlust, der dazu führte, dass wir unsere Planung anpassen und unsere GitHub Actions neu strukturieren mussten.
        
2. Versionierungskonflikte
Merge-Konflikte traten auf, weil mehrere Teammitglieder gleichzeitig an denselben Dateien arbeiteten. Ohne klare Branching-Strategie und regelmäßige Synchronisierung ging Zeit für Konfliktlösungen verloren, und Änderungen wurden teils überschrieben.
        
3. Fehlende Tests
Unzureichende Tests führten dazu, dass Fehler erst spät auffielen. Ohne automatisierte Unit-, Integrations- und End-to-End-Tests war die Codequalität schwer sicherzustellen, was Mehraufwand verursachte.

4. Unterschiedliches Fähigkeitsniveau
Wissenslücken im Team verlangsamten die Entwicklung, da fundamentale Probleme noch existierten.

5. Aufgrund des Ausfalls mehrerer Mitarbeiter musste die Arbeitsverteilung neu organisiert werden, was mit einem erheblichen zeitlichen Aufwand verbunden war.`,

        `
1. Teamwork und Zusammenarbeit  
Aufgaben werden verteilt, damit mehrere gleichzeitig arbeiten können, was Zeit spart und die Effizienz steigert.

2. Effektive Kommunikation  
Regelmäßige Meetings und direkte Kommunikation helfen, Probleme schnell zu lösen und den Überblick zu behalten.

3. Klare Rollen und Verantwortlichkeiten  
Jeder kennt seine Aufgaben, was Verwirrung vermeidet und den Arbeitsablauf optimiert.

4. Gemeinsame Zielorientierung  
Wir arbeiten auf gemeinsame Ziele hin, um fokussiert und motiviert zu bleiben.

5. Code-Qualität und Standards  
Regelmäßige Code-Reviews verbessern Qualität und reduzieren Fehler.

6. Effiziente Nutzung von Tools  
Automatisierte Prozesse und Tools wie GitHub beschleunigen die Arbeit und sorgen für Transparenz.

7. Flexibilität und Anpassungsfähigkeit  
Anpassungen an neue Anforderungen erfolgen schnell, unterstützt durch agile Methoden.

8. Motivation und Teamgeist  
Erfolge werden gemeinsam gefeiert, was den Teamgeist stärkt und motiviert.

9. Schnellere Problemlösung  
Probleme werden schnell identifiziert und durch Teamarbeit effizient gelöst.

10. Wissenstransfer und Weiterbildung  
Erfahrene Teammitglieder teilen ihr Wissen, um das gesamte Team zu fördern.`];

    return (
        <div className="ContainerFAQ">
            <h1 id="FAQHeadline">FAQ&apos;s</h1>
            {ContentQuestionArray.map((ContentQuestion, index) => (
                <div className="ContainerFaqDIV" key={index}>
                    <details className="ContainerContentFAQ">
                        <summary>{ContentQuestion}</summary>
                        <p>{ContentAnswerArray[index]}</p>
                    </details>
                </div>
            ))}
        </div>
    );
}
