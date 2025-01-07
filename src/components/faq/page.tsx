export default function FAQ() {
    const ContentQuestionArray = [
        "Welche Integrationsmöglichkeiten stehen zur Verfügung?",
        "Was ist ein Dokumentenmanagementsystem (DMS)?",
        "Was versteht man unter Buchungssoftware?",
        "Welche Voraussetzung gibt es, um Linkify nutzen zu können?",
        "Wir speichern keine persönlichen Daten, sondern ausschließlich Dokumenten-IDs. Es erfolgt keine echte Datenspeicherung.",
    ];

    const ContentAnswerArray = [
        "Linkify bietet zurzeit Integrationsmöglichkeiten mit Lexoffice und ecoDMS an. Diese Integrationen ermöglichen es, Dokumente und Daten nahtlos zwischen den Systemen auszutauschen.",
        "Ein Dokumentenmanagementsystem (DMS) ist eine Software, die zur Speicherung, Verwaltung und Nachverfolgung von elektronischen Dokumenten verwendet wird. Es ermöglicht eine effiziente Verwaltung von Dokumenten über deren gesamten Lebenszyklus.",
        "Buchungssoftware ist eine Lösung, die Unternehmen dabei unterstützt, ihre finanziellen Transaktionen zu verwalten und zu dokumentieren. Sie dient vor allem der Erfassung und Organisation von Buchhaltungsdaten. Zu den Funktionen einer Buchungssoftware gehören unter anderem die Rechnungsstellung, die Erstellung von Finanzberichten und die Berechnung von Steuern.",
        "Um Linkify nutzen zu können, benötigen Sie ein Lexoffice- und ecoDMS-Konto.",
        "Linkify speichert keine sensiblen persönlichen Informationen. Stattdessen werden nur IDs, die mit den jeweiligen Dokumenten verknüpft sind, gespeichert. So wird der Datenschutz gewährleistet.",
    ]
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
