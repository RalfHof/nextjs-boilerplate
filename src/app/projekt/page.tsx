"use client"

import ProjektItem from '@/src/components/projekt/page';
import React from 'react';

export default function ProjektPage() {

  const GoodElementItems = [
    { Element: "Code-Qualität und Standards: Regelmäßige Code-Reviews verbessern Qualität und reduzieren Fehler." },
    { Element: "Motivation und Teamgeist: Erfolge werden gemeinsam gefeiert, was den Teamgeist stärkt und motiviert." },
    { Element: "Schnellere Problemlösung: Probleme werden schnell identifiziert und durch Teamarbeit effizient gelöst." },
    { Element: "Gemeinsame Zielorientierung: Wir arbeiten auf gemeinsame Ziele hin, um fokussiert und motiviert zu bleiben." },
    { Element: "Wissenstransfer und Weiterbildung: Erfahrene Teammitglieder teilen ihr Wissen, um das gesamte Team zu fördern." },
    { Element: "Flexibilität und Anpassungsfähigkeit: Anpassungen an neue Anforderungen erfolgen schnell, unterstützt durch agile Methoden." },
    { Element: "Klare Rollen und Verantwortlichkeiten: Jeder kennt seine Aufgaben, was Verwirrung vermeidet und den Arbeitsablauf optimiert." },
    { Element: "Effiziente Nutzung von Tools: Automatisierte Prozesse und Tools wie GitHub beschleunigen die Arbeit und sorgen für Transparenz." },
    { Element: "Effektive Kommunikation: Regelmäßige Meetings und direkte Kommunikation helfen, Probleme schnell zu lösen und den Überblick zu behalten." },
    { Element: "Teamwork und Zusammenarbeit: Aufgaben werden verteilt, damit mehrere gleichzeitig arbeiten können, was Zeit spart und die Effizienz steigert." },
  ];

  const BadElementItems = [
    { Element: "Unterschiedliches Fähigkeitsniveau Wissenslücken im Team verlangsamten die Entwicklung, da fundamentale Probleme noch existierten." },
    { Element: "Aufgrund des Ausfalls mehrerer Mitarbeiter musste die Arbeitsverteilung neu organisiert werden, was mit einem erheblichen zeitlichen Aufwand verbunden war." },
    { Element: "Fehlende Tests Unzureichende Tests führten dazu, dass Fehler erst spät auffielen. Ohne automatisierte Unit-, Integrations- und End-to-End-Tests war die Codequalität schwer sicherzustellen, was Mehraufwand verursachte." },
    { Element: "Versionierungskonflikte Merge-Konflikte traten auf, weil mehrere Teammitglieder gleichzeitig an denselben Dateien arbeiteten. Ohne klare Branching-Strategie und regelmäßige Synchronisierung ging Zeit für Konfliktlösungen verloren, und Änderungen wurden teils überschrieben." },
    { Element: "Die erste EC2-Instanz konnte erfolgreich die Verbindung zur Domain linkify.cloud herstellen. Allerdings war es bei der zweiten EC2-Instanz nicht möglich, eine Verbindung zur Domain app.linkify.cloud herzustellen. Trotz verschiedener Lösungsansätze konnte das Problem nicht behoben werden. Dadurch entstand ein Zeitverlust, der dazu führte, dass wir unsere Planung anpassen und unsere GitHub Actions neu strukturieren mussten." },
  ];

  const TimeElementItems = [
    { Element: "Backend-Technologien: MySQL und PHP Lumen (Laravel)" },
    { Element: "Vercel: Hosting und Deployment der Next.js-Anwendung" },
    { Element: "Frontend-Technologien: Next.js, React und TypeScript" },
    { Element: "GitHub: Versionierung und Teamkoordination des Projekts" },
    { Element: "Sprachübersetzung: Linkify unterstützt mehrere Sprachen" },
    { Element: "ESLint: Sicherstellung der Code-Qualität und -Konsistenz" },
    { Element: "GitHub Actions: CI/CD zur Automatisierung des Deployments" },
    { Element: "Ecodms API: Kommunikation und Datenintegration mit Ecodms" },
    { Element: "CORS: Sicherer Datenaustausch zwischen verschiedenen Domänen" },
    { Element: "Datenschutz: Einhaltung von Datenschutzrichtlinien, z.B. DSGVO" },
    { Element: "Fehlerbehandlung: Nutzer erhalten Fehlermeldungen bei Problemen" },
    { Element: "Trello: Ticket-Management und Aufgabenverwaltung für das Projektteam" },
    { Element: "API-Integration: Frontend und Backend kommunizieren miteinander über APIs" },
    { Element: "Lexoffice API: Zugriff auf und Extraktion von Buchungsdaten aus Lexoffice" },
    { Element: "Zukünftige Funktionen: Einführung erweiterter Benutzerrollen und -rechte für normale Nutzer" },
    { Element: "Validierungen: Sicherstellung der korrekten und konsistenten Daten, z.B. keine Zahlen im Vornamen" },
    { Element: "Preismodellauswahl: Nutzer können ein Preismodell auswählen und erhalten eine Bestätigungs-E-Mail" },
    { Element: "Manuelle Tests: Durchführung von Tests zur Überprüfung der Funktionalität unter realen Bedingungen" },
    { Element: "Lexoffice-Ecodms-Verbindung: Ermöglicht den automatisierten Datenaustausch zwischen Lexoffice und Ecodms" },
    { Element: "Benutzerregistrierung und Login: Ermöglicht die Registrierung und das Einloggen für Administratoren und Nutzer" },
    { Element: "Erleichterte Buchungsdatenübertragung: Automatisierte Übertragung von Buchungsdaten zur Reduzierung manuellen Aufwands" },
    { Element: "Benutzerfreundlichkeit: Design wurde so entwickelt, dass es sowohl professionell aussieht als auch benutzerfreundlich ist" },
    { Element: "Responsive Design: Anpassungsfähigkeit auf verschiedenen Geräten und Bildschirmgrößen (derzeit nicht vollständig umgesetzt)" },
    { Element: "Benutzeroberfläche zur Datenflusskontrolle: Eine benutzerfreundliche Oberfläche zur Steuerung und Überwachung der Datenflüsse" },
  ];

  const TargetElementItems = [
    {
      Element: "Linkify ermöglicht es eine einfache und schnelle Möglichkeit, Daten von einer Buchungssoftware zu ecoDMS zu übertragen.",
    },
    {
      Element: "Linkify minimiert das Risiko von Fehlern, indem es den manuellen Aufwand verringert und den Datenaustausch einfacher und präziser macht.",
    }
  ];


  const TimerItems = [
    { Element: "Kickoff am: X Dezember 2024." },
    { Element: "Dauer: X Werktagen." },
    { Element: "Erreicht: 85%." },
    { Element: "Startdatum: 2. Dezember 2024." },
    { Element: "Geplantes Enddatum: 15. Januar 2025." },
    { Element: "Aktueller Fortschritt: 60% abgeschlossen." },
    { Element: "Verfügbare Ressourcen: 3 Entwickler." },
    { Element: "Nächster Schritt: Testphase starten." },
    { Element: "Verzögerungen: Ja." },
    { Element: "Aktuelle Probleme: Keine kritischen Blocker außer Zeitmangel." },
  ];

  const TimerItem = {
    Titel: "Zeitachse",
    Text: "Zeitschätzung:",
    Liste: TimerItems.map(item => item.Element)
  };
  const TargetItem = { Titel: "Problemlösung", Text: "Welches Problem löst Linkify:", Liste: TargetElementItems.map(item => item.Element) };
  const TimeItem = { Titel: "Technische Vorgehensweise", Text: "Wie war unsere Planung:", Liste: TimeElementItems.map(item => item.Element) };

  const GoodItem = { Titel: "Erfolge des Projekts", Text: "Was gut funktioniert hat:", Liste: GoodElementItems.map(item => item.Element) };
  const BadItem = { Titel: "Schwierigkeiten im Projekt", Text: "Welche Probleme gab es:", Liste: BadElementItems.map(item => item.Element) };

  return (
    <div className='project-elements'>
      <h1 className='HeaderItems ProjectHeader'>Projektseite</h1>
      <div className='ContainerHeader ContainerProject'>

        <ProjektItem Item={TargetItem} />
        <ProjektItem Item={TimerItem} />

        <ProjektItem Item={GoodItem} />
        <ProjektItem Item={BadItem} />
        <ProjektItem Item={TimeItem} />
      </div>
    </div>
  );
}
