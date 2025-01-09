"use client";

import ProjektItem from '@/src/components/projekt/page';
import React from 'react';

export default function ProductPage() {
  const TargetElementItems1 = [
    {
      Element:
        "Linkify ist eine innovative und fortschrittliche Lösung, die speziell entwickelt wurde, um den zeitaufwändigen und fehleranfälligen Prozess der manuellen Datenübertragung zwischen unterschiedlichen Software- Systemen zu vereinfachen.Mit diesem Tool können Unternehmen eine erheblich effizientere Arbeitsweise realisieren, da es nahtlose Verbindungen zwischen Systemen wie Lexoffice, Ecodms und vielen weiteren Buchhaltungs - und Dokumentenmanagement - Systemen schafft.",
    },
  ];
  const TargetElementItems2 = [
    {
      Element:
        "Die Hauptstärke von Linkify liegt in der Optimierung des Datenaustauschs durch Automatisierung.Anstatt Daten manuell von einem System ins andere zu übertragen, übernimmt Linkify diesen Prozess vollständig automatisiert.Dadurch werden nicht nur menschliche Fehler minimiert, sondern auch die Bearbeitungszeiten signifikant reduziert.Dies führt zu einer deutlichen Steigerung der Gesamteffizienz in den relevanten Geschäftsprozessen.",
    },

  ];
  const TargetElementItems3 = [
    {
      Element:
        "Eine weitere herausragende Eigenschaft von Linkify ist die benutzerfreundliche und intuitiv gestaltete Oberfläche.Dank einer übersichtlichen Struktur und leicht verständlichen Funktionen ist es auch für Nutzer ohne tiefgehende technische Vorkenntnisse problemlos möglich, das System in kurzer Zeit einzurichten und in den Arbeitsalltag zu integrieren.Die Konfiguration von Linkify ist bewusst so gestaltet, dass keine aufwendigen und teuren Anpassungen an bestehenden Systemen erforderlich sind.Dies spart nicht nur Zeit, sondern auch erhebliche Kosten.",
    },
  ];
  const TargetElementItems4 = [
    {
      Element:
        "Linkify gewährleistet zudem volle Transparenz in den übertragenen Daten.Unternehmen haben die Möglichkeit, den Datenaustausch detailliert nachzuvollziehen und sicherzustellen, dass alle Informationen korrekt und vollständig übertragen wurden.Dieses Maß an Kontrolle ermöglicht es, Buchhaltungs - und Dokumentationsprozesse nicht nur effizienter, sondern auch sicherer zu gestalten.",
    },
  ];
  const TargetElementItems5 = [
    {
      Element:
        "Ein weiterer entscheidender Vorteil von Linkify ist der hohe Sicherheitsstandard, der bei der Datenübertragung verwendet wird.Um sicherzustellen, dass sensible Informationen geschützt sind, verschlüsselt das System sämtliche Daten während der Übertragung mithilfe moderner HTTPS - Protokolle.Dies bietet Unternehmen die Sicherheit, dass ihre Daten vor unbefugtem Zugriff oder Manipulation geschützt sind.",
    },
  ];
  const TargetElementItems6 = [
    {
      Element:
        "Linkify ist außerdem ein System, das kontinuierlich weiterentwickelt wird.Regelmäßige Updates und die Einführung neuer Funktionen garantieren, dass die Lösung stets den neuesten technologischen Standards entspricht und flexibel auf sich verändernde Anforderungen reagieren kann.Unternehmen können sicher sein, dass sie mit Linkify nicht nur eine Lösung für aktuelle Herausforderungen erhalten, sondern auch ein zukunftssicheres Werkzeug für die langfristige Optimierung ihrer Prozesse.",
    },
  ];

  const TargetItem1 = {
    Titel: "Was ist Linkify",
    Text: "",
    Liste: TargetElementItems1.map((item) => item.Element),
  };
  const TargetItem2 = {
    Titel: "Stärke von Linkify",
    Text: "",
    Liste: TargetElementItems2.map((item) => item.Element),
  };
  const TargetItem3 = {
    Titel: "Bentzerfreundlich",
    Text: "",
    Liste: TargetElementItems3.map((item) => item.Element),
  };
  const TargetItem4 = {
    Titel: "Transparenz",
    Text: "",
    Liste: TargetElementItems4.map((item) => item.Element),
  };
  const TargetItem5 = {
    Titel: "Datensicherheit",
    Text: "",
    Liste: TargetElementItems5.map((item) => item.Element),
  };
  const TargetItem6 = {
    Titel: "Vortlaufender Verbesserung",
    Text: "",
    Liste: TargetElementItems6.map((item) => item.Element),
  };


  return (
    <div className="project-item product-item">
      <h1 className="HeaderItems">Produktseite</h1>

      <ProjektItem Item={TargetItem1} />

      <ProjektItem Item={TargetItem2} />

      <ProjektItem Item={TargetItem3} />

      <ProjektItem Item={TargetItem4} />

      <ProjektItem Item={TargetItem5} />

      <ProjektItem Item={TargetItem6} />
    </div>
  );

}
