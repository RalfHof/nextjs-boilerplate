"use client";

import ProjektItem from '@/src/components/projekt/page';
import React from 'react';

export default function ProductPage() {

  const TargetElementItems1 = [
    { Element: "Linkify vereinfacht die Datenübertragung." },
    { Element: "Reduziert manuellen, fehleranfälligen Aufwand." },
    { Element: "Verbindet Buchhaltungs- und Dokumentensysteme." },
    { Element: "Ermöglicht effizientere Arbeitsweise." },
    { Element: "Sorgt für eine reibungslose Datenübertragung." },
  ];


  const TargetElementItems2 = [
    { Element: "Optimierung des Datenaustauschs durch weniger Manuelles Handeln." },
    { Element: "Minimierung menschlicher Fehler." },
    { Element: "Reduzierung der Bearbeitungs- und Arbeitszeit." },
    { Element: "Steigerung der Gesamteffizienz in Geschäftsprozessen" },
  ];

  const TargetElementItems3 = [
    { Element: "Benutzerfreundliche Oberfläche von Linkify." },
    { Element: "Einfache Einrichtung ohne technische Vorkenntnisse." },
    { Element: "Nahtlose Integration in den Arbeitsalltag." },
    { Element: "Keine aufwendigen Anpassungen an bestehende Systeme nötig." },
    { Element: "Zeit- und Kostenersparnis durch einfache Konfiguration." }
  ];


  const TargetElementItems4 = [
    { Element: "Linkify gewährleistet Transparenz in den übertragenen Daten." },
    { Element: "Unternehmen können den Datenaustausch detailliert nachvollziehen." },
    { Element: "Alle Informationen werden korrekt und vollständig übertragen." },
    { Element: "Kontrolle ermöglicht effizientere und sicherere Buchhaltungsprozesse." }
  ];


  const TargetElementItems5 = [
    { Element: "Sensible Informationen durch Verschlüsselung geschützt." },
    { Element: "Datenübertragung mit HTTPS-Protokollen für Datensicherheit." },
    { Element: "Daten vor unbefugtem Zugriff geschützt." },
    { Element: "Es werden Keine Daten gespeichert, sondern Live von A nach B transportiert." }
  ];

  const TargetItem1 = {
    Titel: "Was ist Linkify?",
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
