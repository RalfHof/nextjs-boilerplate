export default function Home() {
    return (
        <>
            <div style={{
                width: "100%",
                height: "500px",
                display: "flex",
                justifyContent: "center", // Zentriert den Inhalt horizontal
                alignItems: "center", // Zentriert den Inhalt vertikal
                backgroundColor: "#4c1b5e",
                paddingTop: "0",
                flexDirection: "column",
                fontFamily: "Arial, Helvetica, sans-serif",
                textAlign: "center" // Zentriert den Text innerhalb des Containers
            }}>
                <h1 style={{ color: "#fff", width: "95%" }}>
                    <span style={{ color: "#f2c76e" }}>Linkify</span> – Effiziente Lösung für die Datenübergabe zwischen <span style={{ color: "#f2c76e" }}>ecoDMS</span> und <span style={{ color: "#f2c76e" }}>Buchungssoftware</span>
                </h1>
                <p style={{ color: "#a2a2a2", width: "90%" }}>Mit Linkify bieten wir Ihnen eine einfache und schnelle Möglichkeit, Daten nahtlos von lexoffice zu ecoDMS zu übertragen. So reduzieren Sie den manuellen Aufwand erheblich und steigern die Effizienz Ihrer Prozesse. Vertrauen Sie auf unsere Lösung, um Ihre Arbeit zu erleichtern und wertvolle Zeit zu sparen.</p>
            </div>
        </>
    );
}
