import Script from 'next/script';

export default function Home() {
    return (
        <>
            <div className='ContainerHome' >


                <div className='HeaderContent'>
                    <h1 id='HeaderText'>
                        <span>Linkify </span> - Effiziente Lösung für die Datenübergabe zwischen <span> ecoDMS </span> und <span> Buchungssoftware</span>
                    </h1>

                    <p style={{ color: "#a2a2a2", width: "90%" }}>
                        Mit Linkify bieten wir Ihnen eine einfache und schnelle Möglichkeit, Daten nahtlos von lexoffice zu ecoDMS zu übertragen. So reduzieren Sie den manuellen Aufwand erheblich und steigern die Effizienz Ihrer Prozesse. Vertrauen Sie auf unsere Lösung, um Ihre Arbeit zu erleichtern und wertvolle Zeit zu sparen.
                    </p>
                </div>


                <div id="particles-js">
                    <Script src="/js/HeaderAnimationCanva/particles.js" />
                    <Script src="/js/HeaderAnimationCanva/js/app.js" />
                </div>
            </div>

        </>
    );
}
