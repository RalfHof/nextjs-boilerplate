"use client"

import ProjektItem from '@/src/components/projekt/page';
import React from 'react';

export default function ProjektPage() {

  const GoodElementItems = [
    { Element: "Code-Reviews" },
    { Element: "Effektive Kommunikation" },
    { Element: "Wissenstransfer" },
    { Element: "Flexibilität" },
    { Element: "Effiziente Tools" },
  ];

  const BadElementItems = [
    { Element: "Unterschiedliches Fähigkeitsniveau und Wissenslücken" },
    { Element: "Neustrukturierung der Arbeitsverteilung aufgrund von Mitarbeiter-Ausfällen" },
    { Element: "Fehlende Tests und mangelhafte Codequalität" },
    { Element: "Probleme mit der Verbindung der EC2-Instanzen zur Domain" }
  ];


  const TimerItems = [
    { Element: "Kickoff am: 2. Dezember 2024" },
    { Element: "Dauer: 24 Werktagen" },
    { Element: "Erreicht: 90%" },
    { Element: "Verfügbare Ressourcen: 3 Entwickler" },
    { Element: "Verzögerungen: Ja" },
    { Element: "Aktuelle Probleme: Keine kritischen Blocker außer Zeitmangel" },
    { Element: "Nächster Schritt: Investor finden" },
  ];

  const TimerItem = {
    Titel: "Zeitachse",
    Text: "",
    Liste: TimerItems.map(item => item.Element),
    Image: "/img/Zeit.png",
    alt: "Zeitachse"
  };

  const GoodItem = {
    Titel: "Erfolge des Projekts",
    Text: "",
    Liste: GoodElementItems.map(item => item.Element),
    Image: "/img/Erfolge.png",
    alt: "Erfolge des Projekts"
  };
  const BadItem = {
    Titel: "Schwierigkeiten im Projekt",
    Text: "",
    Liste: BadElementItems.map(item => item.Element),
    Image: "/img/Schwierigkeiten.png",
    alt: "Schwierigkeiten im Projekt"
  };


  return (
    <div className='project-elements'>
      <h1 className='HeaderItems ProjectHeader'>Projektseite</h1>
      <div className='ContainerHeader ContainerProject'>

        <ProjektItem Item={TimerItem} />
        <ProjektItem Item={GoodItem} />
        <ProjektItem Item={BadItem} />
      </div>
    </div>
  );
}
