"use client";

import ProjektItem from '@/src/components/projekt/page';
import React from 'react';

export default function ProductPage() {


  const TargetElementItems = [
    {
      Element: "Linkify ermöglicht es eine einfache und schnelle Möglichkeit, Daten von einer Buchungssoftware zu ecoDMS zu übertragen.",
    },
    {
      Element: "Linkify minimiert das Risiko von Fehlern, indem es den manuellen Aufwand verringert und den Datenaustausch einfacher und präziser macht.",
    }
  ];


  const TargetElementItems1 = [
    {
      Element: "Linkify ist eine innovative Lösung zur Vereinfachung der Datenübertragung."
    },
    {
      Element: "Speziell entwickelt, um den zeitaufwändigen und fehleranfälligen Prozess der manuellen Datenübertragung zu reduzieren."
    },
    {
      Element: "Verbindet Buchhaltungs- und Dokumentenmanagement-Systeme miteinander."
    },
    {
      Element: "Ermöglicht eine effizientere Arbeitsweise für Unternehmen."
    },
    {
      Element: "Zielt darauf ab, Fehler zu minimieren und Prozesse zu optimieren."
    },
  ];
  const TargetElementItems2 = [
    {
      Element: "Optimierung des Datenaustauschs durch weniger Manuelles Handeln."
    },
    {
      Element: "Minimierung menschlicher Fehler."
    },
    {
      Element: "Reduzierung der Bearbeitungs- und Arbeitszeit."
    },

    {
      Element: "Deutliche Steigerung der Gesamteffizienz in relevanten Geschäftsprozessen"
    },

  ];
  const TargetElementItems3 = [
    {
      Element: "Linkify zeichnet sich durch eine benutzerfreundliche Oberfläche aus."
    },
    {
      Element: "Dank einer übersichtlichen Struktur und verständlichen Funktionen können auch Nutzer ohne technische Vorkenntnisse das System schnell einrichten."
    },
    {
      Element: "Linkify lässt sich problemlos in den Arbeitsalltag integrieren."
    },
    {
      Element: "Die Konfiguration ist so gestaltet, dass keine aufwendigen Anpassungen an bestehenden Systemen nötig sind."
    },
    {
      Element: "Dies spart sowohl Zeit als auch Kosten."
    }
  ];
  const TargetElementItems4 = [
    {
      Element: "Linkify gewährleistet volle Transparenz in den übertragenen Daten."
    },
    {
      Element: "Unternehmen haben die Möglichkeit, den Datenaustausch detailliert nachzuvollziehen."
    },
    {
      Element: "Es wird sichergestellt, dass alle Informationen korrekt und vollständig übertragen werden."
    },
    {
      Element: "Dieses Maß an Kontrolle ermöglicht eine effizientere und sicherere Gestaltung von Buchhaltungs- und Dokumentationsprozessen."
    }
  ];
  const TargetElementItems5 = [
    {
      Element: "Sensible Informationen werden während der Übertragung durch Verschlüsselung geschützt."
    },
    {
      Element: "Das System verwendet moderne HTTPS-Protokolle zur Sicherstellung der Datensicherheit."
    },
    {
      Element: "Unternehmen erhalten die Sicherheit, dass ihre Daten vor unbefugtem Zugriff oder Manipulation geschützt sind."
    },
    {
      Element: "Linkify speichert keine Echten Daten, es wird Live zwischen Systemen transportiert."
    }
  ];


  const TargetItem = {
    Titel: "Problemlösung",
    Text: "Welches Problem löst Linkify:", Liste: TargetElementItems.map(item => item.Element),
    Image: "/img/Solution.png",
    alt: "Problemlösung"
  };


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
