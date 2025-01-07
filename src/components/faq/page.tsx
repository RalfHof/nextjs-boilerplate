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
Wissenslücken im Team verlangsamten die Entwicklung, da fundamentale Probleme noch existierten.`,

        `
1. Teamwork und Zusammenarbeit
In unserem Team teilen wir Aufgaben auf, sodass mehrere Mitglieder gleichzeitig daran arbeiten können. Das spart Zeit und macht uns effizienter.
Wir tauschen unser Wissen aus, damit jeder von den Stärken der anderen lernen kann und das Team insgesamt besser wird.

2. Effektive Kommunikation
Wir halten regelmäßige Meetings, um wichtige Themen zu besprechen und offene Fragen zu klären.
Wenn ein Problem auftritt, sprechen wir es direkt an, damit es schnell gelöst wird.
Wir nutzen Tools wie Slack oder Trello, um den Überblick über Aufgaben und Fortschritte zu behalten.

3. Klare Rollen und Verantwortlichkeiten
Bei uns weiß jeder genau, welche Aufgabe er übernehmen soll. Das verhindert Verwirrung und sorgt dafür, dass alles reibungslos läuft.
Jeder hat klar definierte Verantwortlichkeiten, was die Zusammenarbeit einfacher macht.

4. Gemeinsame Zielorientierung
Wir arbeiten gemeinsam auf ein Ziel hin, was uns als Team motiviert.
Regelmäßige Zielüberprüfungen helfen uns, den Fokus nicht zu verlieren und unsere Prioritäten klar zu setzen.

5. Code-Qualität und Standards
Wir überprüfen unseren Code regelmäßig gegenseitig, um Fehler zu vermeiden und die Qualität zu verbessern.

6. Effiziente Nutzung von Tools
Automatisierte Prozesse wie CI/CD helfen uns, unsere Arbeit schneller und ohne viel manuelle Eingriffe zu erledigen.
Plattformen wie GitHub machen es einfach, Fortschritte und Änderungen im Code für alle sichtbar zu machen.

7. Flexibilität und Anpassungsfähigkeit
Wenn sich Anforderungen ändern, passen wir uns schnell an und finden eine Lösung.
Mit agilen Methoden wie Scrum können wir regelmäßig Feedback einholen und unsere Arbeit verbessern.

8. Motivation und Teamgeist
Gemeinsam Erfolge feiern, stärkt unseren Teamgeist und motiviert uns für die nächsten Aufgaben.
Herausforderungen gehen wir als Team an, was das Engagement jedes Einzelnen steigert.

9. Schnellere Problemlösung
In unserem Team finden wir Probleme schneller, weil mehrere Leute daran arbeiten können.
Bei Brainstormings kommen oft kreative und bessere Lösungen heraus.

10. Wissenstransfer und Weiterbildung
Die erfahrenen Teammitglieder unterstützen die Jüngeren und teilen ihr Wissen, damit alle besser werden.
Beim Pair Programming lernen wir durch Zusammenarbeit direkt voneinander.`];

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
