import Image from 'next/image';
import React from 'react';

export default function InfoPage() {

  const advantages = [
    {
      title: 'Automatische Belegerfassung:',
      description:
        'Rechnungen, Lieferscheine und andere Belege werden automatisch erkannt, in Lexware Office verbucht und im DMS archiviert.',
    },
    {
      title: 'Zeitersparnis:',
      description: 'Manuelle Dateneingabe und Ablage gehören der Vergangenheit an.',
    },
    {
      title: 'Weniger Fehler:',
      description: 'Die automatisierte Verarbeitung minimiert das Risiko von Fehlern.',
    },
    {
      title: 'Besserer Überblick:',
      description: 'Alle wichtigen Dokumente sind zentral und jederzeit verfügbar.',
    },
    {
      title: 'Verbesserte Zusammenarbeit:',
      description:
        'Nahtlose Integration von Lexware Office und DMS für optimierte Teamarbeit.',
    },
  ];

  const features = [
    {
      title: 'Intelligente OCR-Texterkennung:',
      description: 'Extrahiert automatisch relevante Daten aus Ihren Dokumenten.',
    },
    {
      title: 'Flexible Workflows:',
      description: 'Passen Sie die Automatisierung an Ihre individuellen Bedürfnisse an.',
    },
    {
      title: 'Direkte Integration:',
      description: 'Nahtlose Verbindung mit Lexware Office und gängigen DMS-Systemen.',
    },
    {
      title: 'Benutzerfreundliche Oberfläche:',
      description: 'Einfache Bedienung und intuitive Navigation.',
    },
    {
      title: 'Sicherer Datenschutz:',
      description: 'Ihre Daten werden sicher und DSGVO-konform verarbeitet.',
    },
  ];

  return (<>
    <div id="ContainerInfo">
      <div id="ContainerHeader">
        <div id="ContentInHeader">
          <h1 className="RemoveMarginAndPaddingAll" style={{ fontSize: "3rem", textDecoration: "line-through" }}>
            Schluss mit manuellem Aufwand!
          </h1>
          <p className="RemoveMarginAndPaddingAll">
            Linkify verbindet Lexware Office mit Ihrem Dokumentenmanagementsystem (DMS) und automatisiert
            lästige Routineaufgaben.
          </p>
          <p className="RemoveMarginAndPaddingAll">
            Linkify automatisiert Lexware Office & DMS.
          </p>
          <p className="RemoveMarginAndPaddingAll">
            Steigern Sie Ihre Effizienz und sparen Sie wertvolle Zeit!
          </p>
          <p className='RemoveMarginAndPaddingAll' id='InfoFooterContent'>
            Linkify ist die ideale Lösung für alle Unternehmen, die ihre Prozesse optimieren und die Effizienz steigern
            wollen.
          </p>
        </div>

        <div id="ContentInHeaderImg">
          <Image
            src="/img/Automate.png"
            alt="Automate"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div id='ContainerPros'>
        <h2 className='SmallerHeader' style={{ textAlign: "center", paddingBottom:"20px"}}>Ihre Vorteile:</h2>
        <ul className='InfoUnsortedList' style={{ paddingLeft: "50px", paddingRight:"50px", listStyleType: "none", margin: "0" }}>
          {advantages.map((advantage, index) => (
            <li key={index} className='InfoListitems' style={{ color: "#fff", }} >
              <strong>{advantage.title}</strong> {advantage.description}✅
            </li>
          ))}
        </ul>
      </div>

      <div id='LogoImages' >
        <div>
          <Image className='ImageItems' title='EcoDMS' src="/img/EcoDMS.png" alt='EcoDMS' width={200} height={200} /><span className='ContentImage'>EcoDMS</span></div>
        <div>
          <Image className='ImageItems' title='Linkify' src="/img/Linkify.png" alt='Linkify' width={200} height={200} /><span className='ContentImage'>Linkify</span>
        </div>
        <div>
          <Image className='ImageItems' title='Lexware' src="/img/Lexware.png" alt='Lexware' width={200} height={200} />
          <span className='ContentImage'>Lexware</span>
        </div>
      </div>

      <div
        id='ContainerLinkifyOffer'>

        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center", flexDirection: "column", }}>
          <h2 className='SmallerHeader' style={{ color: "#fff" }}>Linkify bietet Ihnen:</h2>

          <ul className='InfoUnsortedList'>
            {features.map((feature, index) => (
              <li className='InfoListitemsOffer' key={index} >
                <strong>{feature.title}</strong> {feature.description}
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div >
  </>
  )
}