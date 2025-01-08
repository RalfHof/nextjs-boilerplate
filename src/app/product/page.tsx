"use client"

import ProjektItem from '@/src/components/projekt/page';
import React from 'react';

export default function ProductPage() {

  const TargetElementItems = [
    { Element: "Linkify ist eine hochmoderne Lösung, die entwickelt wurde, um den manuellen Aufwand bei der Datenübertragung zwischen verschiedenen Software-Systemen zu minimieren. Es bietet eine nahtlose Integration zwischen Lexoffice, Ecodms und anderen Buchungssystemen." },
    { Element: "Linkify optimiert den Datenaustausch, indem es diese Prozesse automatisiert und Fehler reduziert, was zu einer erheblichen Steigerung der Effizienz." },
    { Element: "Mit einer benutzerfreundlichen Oberfläche und einer einfachen Konfiguration sorgt Linkify für eine schnelle Implementierung ohne komplexe Anpassungen." },
    { Element: "Das System bietet eine vollständige Transparenz in den übertragenen Daten und ermöglicht es Unternehmen, ihre Buchhaltungsprozesse sicher und effizient zu gestalten." },
    { Element: "Linkify nutzt moderne Sicherheitsstandards, um Daten mit HTTPS während der Übertragung zu verschlüsseln, wodurch die Sicherheit und der Schutz der Informationen gewährleistet werden." },
    { Element: "Linkify wird kontinuierlich verbessert, indem regelmäßig Updates und neue Funktionen hinzugefügt werden, um mit den neuesten technologischen Entwicklungen Schritt zu halten und auf sich ändernde Anforderungen zu reagieren." }
  ];

  const TargetItem = { Titel: "Produktbeschreibung", Text: "Was ist Linkify?", Liste: TargetElementItems.map(item => item.Element) };

  return (
    <div className='project-item product-item'>
      <h1 className='HeaderItems'>Produktseite</h1>

      <ProjektItem Item={TargetItem} />
    </div>
  );
}
