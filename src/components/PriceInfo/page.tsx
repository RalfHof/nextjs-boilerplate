"use client"

import { FaLightbulb } from "react-icons/fa";
import PriceCard from "../karte/PreisKarte";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { useState } from "react";
import WorkIcon from '@mui/icons-material/Work';
import { TbPremiumRights } from "react-icons/tb";
export default function PriceInfoModul() {

    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    const PriceItemListStandard = [
        { Content: "Regelmäßige Updates" },
        { Content: "Zugriff auf Basisfunktionen" },
        { Content: "Benutzerfreundliches Interface" },
        { Content: "Jederzeit kündbar Ideal zum Ausprobieren" },
        { Content: "Keine langfristige Verpflichtung Flexibel" },
    ]

    const PriceItemListFree = [
        { Content: "Keine Kündigung notwendig" },
        { Content: "Vertrag läuft automatisch aus" },
        { Content: "Alle Funktionen aus dem Standard" },
        { Content: "Keine Bank- oder Kreditkartendaten notwendig" },
    ]

    const PriceItemListPremium = [
        { Content: "KI-Anbindung" },
        { Content: "intelligente Analysen" },
        { Content: "Alle Funktionen aus dem Standard" },
        { Content: "Bessere Verschlagwortung (Klassifizierung)" },
        { Content: "Priorisierter Kundensupport Exklusive Premium-Funktionen" },
    ]

    const combinedPriceItemListPremium = [...PriceItemListPremium];

    const PriceItemFree = { Price: "0", Currency: "€", Icon: <FaLightbulb style={{ scale: "4" }} />, PackageName: "14 Tage testen", Items: PriceItemListFree, Button: "Testen", BadgetText: "Kostenlos" }

    const PriceItemStandard = { Price: "7.99", Currency: "€/Mon.", Icon: <WorkIcon style={{ scale: "4" }} />, PackageName: "Standard", Items: PriceItemListStandard, Button: "Loslegen", BadgetText: "Empfohlen", isFavorite: true }

    const PriceItemPremium = { Price: "11.99", Currency: "€/Mon.", Icon: <TbPremiumRights style={{ scale: "6" }} />, PackageName: "Premium", Items: combinedPriceItemListPremium, Button: "Upgrade Sichern", isFavorite: false, BadgetText: "Top" }

    const PriceItemStandardJahr = { Price: "4.99", Currency: "€/Mon.", Icon: <WorkIcon style={{ scale: "4" }} />, PackageName: "Standard", Items: PriceItemListStandard, Button: "Loslegen", BadgetText: "Empfohlen", isFavorite: true }

    const PriceItemPremiumJahr = { Price: "8.99", Currency: "€/Mon.", Icon: <TbPremiumRights style={{ scale: "6" }} />, PackageName: "Premium", Items: combinedPriceItemListPremium, Button: "Upgrade Sichern", isFavorite: false, BadgetText: "Top" }

    return (
        <>
            <div className="PriceInfoDIV">

                <div className="PriceDiv">
                    <h1 id="PriceHeadline">
                        Preismodelle
                    </h1>
                    <div className="DateDiv">
                        <p id="MonthyPrice">Monatlich</p>
                        <button id='ToggleButtonPricing' onClick={handleToggle}>
                            {isToggleOn ? <ToggleOffIcon className="ToggleIcon" /> : <ToggleOnIcon className="ToggleIcon ToggleOnnIcon" />}
                        </button>
                        <p id="YearlyPrice">Jährlich <span id="SaveMoney">(spare über 33% bei Einmalzahlung)</span></p>
                    </div>
                </div>

                <div className="PriceCardContainer">
                    <div className="PriceCard">
                        {isToggleOn ? (
                            <>
                                <PriceCard Item={PriceItemFree} />
                                <PriceCard Item={PriceItemStandard} />
                                <PriceCard Item={PriceItemPremium} />

                            </>
                        ) : (
                            <>
                                <PriceCard Item={PriceItemFree} />
                                <PriceCard Item={PriceItemStandardJahr} />
                                <PriceCard Item={PriceItemPremiumJahr} />
                            </>

                        )}

                    </div>
                </div>
            </div>
        </>
    );
}