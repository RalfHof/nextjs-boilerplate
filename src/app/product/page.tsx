"use client";

import ProjektItem from '@/src/components/projekt/page';
import React from 'react';

export default function ProductPage() {
  const TargetElementItems1 = [
    {
      Element:
        "Linkify ist eine innovative und fortschrittliche Lösung, die speziell entwickelt wurde, um den zeitaufwändigen und fehleranfälligen Prozess der manuellen Datenübertragung zwischen unterschiedlichen Software- Systemen zu vereinfachen. Mit diesem Tool können Unternehmen eine effizientere Arbeitsweise realisieren, da es Verbindungen zwischen Buchhaltungs - und Dokumentenmanagement - Systemen schafft.",
    },
  ];
  const TargetElementItems2 = [
    {
      Element:
        "Die Hauptstärke von Linkify liegt in der Optimierung des Datenaustauschs durch Automatisierung. Anstatt Daten manuell von einem System ins andere zu übertragen, übernimmt Linkify diesen Prozess vollständig automatisiert. Dadurch werden nicht nur menschliche Fehler minimiert, sondern auch die Bearbeitungszeiten signifikant reduziert. Dies führt zu einer deutlichen Steigerung der Gesamteffizienz in den relevanten Geschäftsprozessen.",
    },
  ];
  const TargetElementItems3 = [
    {
      Element:
        "Linkify zeichnet sich durch eine benutzerfreundliche und intuitive Oberfläche aus. Dank einer übersichtlichen Struktur und verständlichen Funktionen können auch Nutzer ohne technische Vorkenntnisse das System schnell einrichten und in den Arbeitsalltag integrieren. Die Konfiguration ist so gestaltet, dass keine aufwendigen Anpassungen an bestehenden Systemen nötig sind, was Zeit und Kosten spart.",
    },
  ];
  const TargetElementItems4 = [
    {
      Element:
        "Linkify gewährleistet zudem volle Transparenz in den übertragenen Daten. Unternehmen haben die Möglichkeit, den Datenaustausch detailliert nachzuvollziehen und sicherzustellen, dass alle Informationen korrekt und vollständig übertragen wurden. Dieses Maß an Kontrolle ermöglicht es, Buchhaltungs - und Dokumentationsprozesse nicht nur effizienter, sondern auch sicherer zu gestalten.",
    },
  ];
  const TargetElementItems5 = [
    {
      Element:
        "Ein weiterer entscheidender Vorteil von Linkify ist der hohe Sicherheitsstandard, der bei der Datenübertragung verwendet wird. Um sicherzustellen, dass sensible Informationen geschützt sind, verschlüsselt das System sämtliche Daten während der Übertragung mithilfe moderner HTTPS - Protokolle. Dies bietet Unternehmen die Sicherheit, dass ihre Daten vor unbefugtem Zugriff oder Manipulation geschützt sind.",
    },
  ];
  const TargetElementItems6 = [
    {
      Element:
        "Linkify wird kontinuierlich weiterentwickelt, um den neuesten technologischen Standards zu entsprechen und flexibel auf veränderte Anforderungen zu reagieren. Regelmäßige Updates und neue Funktionen machen es zu einem zukunftssicheren Werkzeug für die langfristige Optimierung von Unternehmensprozessen.",
    },
  ];

  const TargetItem1 = {
    Titel: "Was ist Linkify?",
    Text: "",
    Liste: TargetElementItems1.map((item) => item.Element),
  };
  const TargetItem2 = {
    Titel: "Stärken von Linkify",
    Text: "",
    Liste: TargetElementItems2.map((item) => item.Element),
  };
  const TargetItem3 = {
    Titel: "Benutzerfreundlich",
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
    Titel: "Fortlaufende Verbesserungen",
    Text: "",
    Liste: TargetElementItems6.map((item) => item.Element),
  };


  return (<>

    <div className="project-item product-item">
      <h1 className="HeaderItems">Produktseite</h1>
      <div className='ContainerHeader'>

        <ProjektItem Item={TargetItem1} />
        <ProjektItem Item={TargetItem2} />
        <ProjektItem Item={TargetItem3} />
        <ProjektItem Item={TargetItem4} />
        <ProjektItem Item={TargetItem5} />
        <ProjektItem Item={TargetItem6} />
      </div>

    </div>
  </>
  );

}
