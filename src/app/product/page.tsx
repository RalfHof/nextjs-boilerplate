"use client";

import ProjektItem from '@/src/components/projekt/page';
import React from 'react';

export default function ProductPage() {

  const TargetElementItems = [
    { Element: "Gesetzliche Vorgaben: Firmen mit mindestens 60.000 € Gewinn oder mindestens 300.000 € Umsatz müssen Unterlagen revisionssicher und DSGVO-konform speichern" },
    { Element: "Strafen: 2 % des Jahresumsatzes, max. 2,5 Mio. € für Alle Unternehmen in der Gruppe" },
    { Element: "Aufbewahrung: Bis zu 10 Jahre je nach Dokumentart" },
    { Element: "DMS-Lösung: Erfüllt gesetzliche Anforderungen" },
    { Element: "Ab dem 1. Januar  2025: Firmen müssen Rechnungen digital erstellen, empfangen und im DMS speichern" },
    { Element: "Aktueller Prozess: Manuell, zeit- und kostenintensiv" },
  ];

  const TargetElementItems1 = [
    { Element: "Linkify vereinfacht die Datenübertragung" },
    { Element: "Reduziert manuellen, fehleranfälligen Aufwand" },
    { Element: "Verbindet Buchhaltungssoftware mit Dokumentensoftware" },
    { Element: "Ermöglicht effizientere Arbeitsweise" },
    { Element: "Sorgt für eine reibungslose Datenübertragung" },
    { Element: "Alles Regelkonform" },
  ];

  const TargetElementItems2 = [
    { Element: "Datenaustausch durch Automatisierung" },
    { Element: "Minimierung menschlicher Fehler" },
    { Element: "5 Sprachen (Internationalisierung)" },
    { Element: "Reduzierung der Bearbeitungs- und Arbeitszeit" },
    { Element: "Steigerung der Gesamteffizienz in Geschäftsprozessen" },
  ];

  const TargetElementItems3 = [
    { Element: "Benutzerfreundliche Oberfläche von Linkify" },
    { Element: "Einfache Einrichtung ohne technische Vorkenntnisse" },
    { Element: "Nahtlose Integration in den Arbeitsalltag" },
    { Element: "Keine aufwendigen Anpassungen an bestehende Systeme nötig" },
    { Element: "Zeit- und Kostenersparnis durch einfache Konfiguration" }
  ];


  const TargetElementItems4 = [
    { Element: "Linkify gewährleistet Transparenz in den übertragenen Daten" },
    { Element: "Alle Informationen werden korrekt und vollständig übertragen" },
    { Element: "Es werden Keine Daten gespeichert, sondern Live von A nach B transportiert" },
  ];
  
  
  const TargetElementItems5 = [
    { Element: "Sensible Informationen durch Verschlüsselung geschützt(HTTPS-Protokoll)" },
    { Element: "Daten vor unbefugtem Zugriff geschützt" },
    { Element: "Strikte Datentrennung, Rollen: Superadmin, Admin, User, Mandantenfähigkeit" },
  ];


  const TargetItem = {
    Titel: "Das Problem",
    Text: "",
    Liste: TargetElementItems.map(item => item.Element),
    Image: "/img/Solution.png",
    alt: "Problemlösung"
  };

  const TargetItem1 = {
    Titel: "Unsere Lösung",
    Text: "",
    Liste: TargetElementItems1.map((item) => item.Element),
    Image: "/img/Linkify.png",
    alt: "Was ist Linkify?"
  };
  const TargetItem2 = {
    Titel: "Stärken von Linkify",
    Text: "",
    Liste: TargetElementItems2.map((item) => item.Element),
    Image: "/img/vorteile.png",
    alt: "Stärken"
  };
  const TargetItem3 = {
    Titel: "Benutzerfreundlich",
    Text: "",
    Liste: TargetElementItems3.map((item) => item.Element),
    Image: "/img/UX.png",
    alt: "Bild zeigt ein Beispiel für das Problem"
  };
  const TargetItem4 = {
    Titel: "Transparenz",
    Text: "",
    Liste: TargetElementItems4.map((item) => item.Element),
    Image: "/img/Transparenz.png",
    alt: "Transparenz"
  };
  const TargetItem5 = {
    Titel: "Datensicherheit",
    Text: "",
    Liste: TargetElementItems5.map((item) => item.Element),
    Image: "/img/dataprotection.png",
    alt: "Datensicherheit"
  };


  return (<>

    <div className="project-item product-item">
      <h1 className="HeaderItems productheader">Produktseite</h1>
      <div className='ContainerHeader ContainerProduct'>
        <ProjektItem Item={TargetItem} />


        <ProjektItem Item={TargetItem1} />
        <ProjektItem Item={TargetItem2} />
        <ProjektItem Item={TargetItem3} />
        <ProjektItem Item={TargetItem4} />
        <ProjektItem Item={TargetItem5} />
      </div>

    </div>
  </>
  );

}
