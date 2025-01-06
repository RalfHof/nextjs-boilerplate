export default function FAQ() {
    const ContentQuestionArray = [
        "Welche Integrationsmöglichkeiten stehen zur Verfügung?",
        "Was ist ein Dokumentenmanagementsystem (DMS)?",
        "Was versteht man unter Buchungssoftware?",
        "Welche Voraussetzung gibt es, um Linkify nutzen zu können?",
        "Wir speichern keine persönlichen Daten, sondern ausschließlich Dokumenten-IDs. Es erfolgt keine echte Datenspeicherung."
    ];

    const ContentAnswerArray = [
        "Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1Antwort auf Frage 1",
        "Antwort auf Frage 2",
        "Antwort auf Frage 3",
        "Antwort auf Frage 4",
        "Antwort auf Frage 5"
    ];

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
