import Script from 'next/script';

export default function Home() {
    return (
        <>
            <div className='ContainerHome' style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4c1b5e",
                flexDirection: "column",
                fontFamily: "Arial, Helvetica, sans-serif",
                textAlign: "center"
            }}>

                <div className='HeaderContent'>
                    <h1 style={{ color: "#fff", width: "95%" }}>
                        <span style={{ color: "#f2c76e" }}>Linkify</span> – Effiziente Lösung für die Datenübergabe zwischen <span style={{ color: "#f2c76e" }}>ecoDMS</span> und <span style={{ color: "#f2c76e" }}>Buchungssoftware</span>
                    </h1>


                    <p style={{ color: "#a2a2a2", width: "90%" }}>
                        Mit Linkify bieten wir Ihnen eine einfache und schnelle Möglichkeit, Daten nahtlos von lexoffice zu ecoDMS zu übertragen. So reduzieren Sie den manuellen Aufwand erheblich und steigern die Effizienz Ihrer Prozesse. Vertrauen Sie auf unsere Lösung, um Ihre Arbeit zu erleichtern und wertvolle Zeit zu sparen.
                    </p>
                </div>

                <div id="particles-js"></div>

                <Script src="/js/HeaderAnimationCanva/particles.js" strategy="lazyOnload" />
                <Script src="/js/HeaderAnimationCanva/js/app.js" strategy="lazyOnload" />
            </div>
        </>
    );
}
