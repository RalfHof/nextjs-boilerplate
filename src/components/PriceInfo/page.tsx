"use client"

import { FaLightbulb } from "react-icons/fa";
import PriceCard from "../karte/PreisKarte";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { useState } from "react";
import WorkIcon from '@mui/icons-material/Work';
import { TbPremiumRights } from "react-icons/tb";

// Preis-Element-Props


export default function PriceInfoModul() {

    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };


    const PriceItemListStandard = [
        { Content: "Keine langfristige Verpflichtung Flexibel" },
        { Content: "Jederzeit kündbar Ideal zum Ausprobieren" },
        { Content: "Zugriff auf Basisfunktionen" },
        { Content: "Benutzerfreundliches Interface" },
        { Content: "Regelmäßige Updates" },
    ]

    const PriceItemListFree = [

        { Content: "Keine Bank- oder Kreditkartendaten notwendig" },
        { Content: "Alle Funktionen aus dem Standard" },
        { Content: "Keine Kündigung notwendig" },
        { Content: "Vetrag läuft automatisch aus" },
    ]

    const PriceItemListPremium = [
        { Content: "Alle Funktionen aus dem Standard" },
        { Content: "Priorisierter Kundensupport Exklusive Premium-Funktionen" },
        { Content: "KI-Anbindung" },
        { Content: "intelligente Analysen" },
        { Content: "Bessere Verschlagwortung (Klassifizierung)" },

    ]

    const combinedPriceItemListPremium = [...PriceItemListPremium];

    const PriceItemFree = { Price: "0", Currency: "€", Icon: <FaLightbulb style={{ scale: "4" }} />, PackageName: "14 Tage testen", Items: PriceItemListFree, Button: "Testen", BadgetText: "Kostenlos" }

    const PriceItemStandard = { Price: "7.99", Currency: "€/Mon.", Icon: <WorkIcon style={{ scale: "4" }} />, PackageName: "Standard", Items: PriceItemListStandard, Button: "Testen", BadgetText: "Empfohlen", isFavorite: true }

    const PriceItemPremium = { Price: "11.99", Currency: "€/Mon.", Icon: <TbPremiumRights style={{ scale: "6" }} />, PackageName: "Premium", Items: combinedPriceItemListPremium, Button: "Testen", isFavorite: false, BadgetText: "Top" }

    const PriceItemStandardJahr = { Price: "4.99", Currency: "€/Mon.", Icon: <WorkIcon style={{ scale: "4" }} />, PackageName: "Standard", Items: PriceItemListStandard, Button: "Testen", BadgetText: "Empfohlen", isFavorite: true }

    const PriceItemPremiumJahr = { Price: "8.99", Currency: "€/Mon.", Icon: <TbPremiumRights style={{ scale: "6" }} />, PackageName: "Premium", Items: combinedPriceItemListPremium, Button: "Testen", isFavorite: false, BadgetText: "Top" }

    return (
        <>




            <div className="PriceInfoDIV">


                <div className="PriceDiv">
                    <h1 id="PriceHeadline">
                        Preismodelle
                    </h1>
                    <div className="DateDiv">
                        <p>Monatlich</p>
                        <button id='ToggleButtonPricing' onClick={handleToggle}>
                            {isToggleOn ? <ToggleOffIcon className="ToggleIcon" /> : <ToggleOnIcon className="ToggleIcon" />}
                        </button>
                        <p>Jährlich <span id="SaveMoney">(spare über 33%)</span></p>
                    </div>
                </div>

                <div className="PriceCardContainer">
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

        </>
    );
}