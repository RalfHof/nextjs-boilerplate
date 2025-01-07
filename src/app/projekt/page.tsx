"use client"

import ProjektItem from '@/src/components/projekt/page';
import React from 'react';

export default function ProjektPage() {

  const GoodElementItems = [
    { Element: "Teamwork und Zusammenarbeit: Aufgaben werden verteilt, damit mehrere gleichzeitig arbeiten können, was Zeit spart und die Effizienz steigert." },
    { Element: "Effektive Kommunikation: Regelmäßige Meetings und direkte Kommunikation helfen, Probleme schnell zu lösen und den Überblick zu behalten." },
    { Element: "Klare Rollen und Verantwortlichkeiten: Jeder kennt seine Aufgaben, was Verwirrung vermeidet und den Arbeitsablauf optimiert." },
    { Element: "Gemeinsame Zielorientierung: Wir arbeiten auf gemeinsame Ziele hin, um fokussiert und motiviert zu bleiben." },
    { Element: "Code-Qualität und Standards: Regelmäßige Code-Reviews verbessern Qualität und reduzieren Fehler." },
    { Element: "Effiziente Nutzung von Tools: Automatisierte Prozesse und Tools wie GitHub beschleunigen die Arbeit und sorgen für Transparenz." },
    { Element: "Flexibilität und Anpassungsfähigkeit: Anpassungen an neue Anforderungen erfolgen schnell, unterstützt durch agile Methoden." },
    { Element: "Motivation und Teamgeist: Erfolge werden gemeinsam gefeiert, was den Teamgeist stärkt und motiviert." },
    { Element: "Schnellere Problemlösung: Probleme werden schnell identifiziert und durch Teamarbeit effizient gelöst." },
    { Element: "Wissenstransfer und Weiterbildung: Erfahrene Teammitglieder teilen ihr Wissen, um das gesamte Team zu fördern." }
  ];

  const BadElementItems = [
    { Element: "Die erste EC2-Instanz konnte erfolgreich die Verbindung zur Domain linkify.cloud herstellen. Allerdings war es bei der zweiten EC2-Instanz nicht möglich, eine Verbindung zur Domain app.linkify.cloud herzustellen. Trotz verschiedener Lösungsansätze konnte das Problem nicht behoben werden. Dadurch entstand ein Zeitverlust, der dazu führte, dass wir unsere Planung anpassen und unsere GitHub Actions neu strukturieren mussten." },
    { Element: "Versionierungskonflikte Merge-Konflikte traten auf, weil mehrere Teammitglieder gleichzeitig an denselben Dateien arbeiteten. Ohne klare Branching-Strategie und regelmäßige Synchronisierung ging Zeit für Konfliktlösungen verloren, und Änderungen wurden teils überschrieben." },
    { Element: "Fehlende Tests Unzureichende Tests führten dazu, dass Fehler erst spät auffielen. Ohne automatisierte Unit-, Integrations- und End-to-End-Tests war die Codequalität schwer sicherzustellen, was Mehraufwand verursachte." },
    { Element: "Unterschiedliches Fähigkeitsniveau Wissenslücken im Team verlangsamten die Entwicklung, da fundamentale Probleme noch existierten." },
    { Element: "Aufgrund des Ausfalls mehrerer Mitarbeiter musste die Arbeitsverteilung neu organisiert werden, was mit einem erheblichen zeitlichen Aufwand verbunden war." }
  ];

  const TimeElementItems = [
    { Element: "Login seite fertig designen " }
  ];

  const TargetElementItems = [
    { Element: "Login seite fertig designen " }
  ];

  const TargetItem = { Titel: "Problemlösung", Text: "Beispieltext2", Liste: TargetElementItems.map(item => item.Element) };
  const TimeItem = { Titel: "Planung", Text: "Beispieltext2", Liste: TimeElementItems.map(item => item.Element) };

  const GoodItem = { Titel: "Was lief gut", Text: "Beispieltext1", Liste: GoodElementItems.map(item => item.Element) };
  const BadItem = { Titel: "Was lief nicht gut", Text: "Beispieltext2", Liste: BadElementItems.map(item => item.Element) };

  return (
    <div className='project-itemd'>
      <h1>Projektseite</h1>
      <ProjektItem Item={TargetItem} />
      <ProjektItem Item={TimeItem} />

      <ProjektItem Item={GoodItem} />
      <ProjektItem Item={BadItem} />
    </div>
  );
}
