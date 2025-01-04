"use client"

import { useState } from 'react';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { TbPremiumRights } from "react-icons/tb";
import WorkIcon from '@mui/icons-material/Work';
import PricingOption from '../pricingoptions/page';
import { FaLightbulb } from "react-icons/fa";

export default function PricingPage() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    const StandardPriceMonthly = 7.99;
    const StandardPriceYearly = 4.99;
    const PremiumPriceMonthly = 11.99;
    const PremiumPriceYearly = 7.99;

    const standardSavings = StandardPriceMonthly - StandardPriceYearly;
    const premiumSavings = PremiumPriceMonthly - PremiumPriceYearly;

    const standardSavingsPercent = ((standardSavings / StandardPriceMonthly) * 100).toFixed(2);
    const premiumSavingsPercent = ((premiumSavings / PremiumPriceMonthly) * 100).toFixed(2);

    const Standardprice = isToggleOn ? `${StandardPriceMonthly.toFixed(2)}€/Mon.` : `${StandardPriceYearly.toFixed(2)}€/Jähr.`;
    const Premiumprice = isToggleOn ? `${PremiumPriceMonthly.toFixed(2)}€/Mon.` : `${PremiumPriceYearly.toFixed(2)}€/Jähr.`;

    const StandardTotalCost = isToggleOn ? `${(StandardPriceMonthly * 12).toFixed(2)}€/Jahr` : `€${(StandardPriceYearly * 12).toFixed(2)}/Jahr`;
    const PremiumTotalCost = isToggleOn ? `${(PremiumPriceMonthly * 12).toFixed(2)}€/Jahr` : `€${(PremiumPriceYearly * 12).toFixed(2)}/Jahr`;

    return (
        <div id='ContainerAroundEverything'>
            <div style={{ width: "100%", textAlign: "center", }}>
                <h1 style={{ color: "#f2c76e", fontSize: "30px", margin: "0", marginTop: "50px" }}>
                    Preismodelle
                </h1>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", fontSize: "25px" }}>
                    <p >Monatlich</p>
                    <button id='ToggleButtonPricing' onClick={handleToggle}>
                        {isToggleOn ? <ToggleOffIcon style={{ pointerEvents: "all" }} /> : <ToggleOnIcon style={{ color: "blue", pointerEvents: "all" }} />}
                    </button>
                    <p >
                        Jährlich
                    </p>
                </div>
            </div>

            <div id='ContainerAroundAllOptions'>
                <PricingOption
                    title="14 Tage kostenlose Testversion"
                    icon={<FaLightbulb style={{ scale: "2.5" }} />}
                    content={[
                        { Content: "Zugriff auf Basisfunktionen" }
                    ]}
                    buttonText="Testen"
                />

                <PricingOption
                    title="Standard-Paket"
                    icon={<WorkIcon style={{ scale: "2.5" }} />}
                    price={Standardprice}
                    savings={standardSavings}
                    savingsPercent={standardSavingsPercent}
                    totalCost={StandardTotalCost}
                    content={[
                        { Content: "Keine langfristige Verpflichtung Flexibel" },
                        { Content: "Jederzeit kündbar Ideal zum Ausprobieren" },
                        { Content: "Zugriff auf Basisfunktionen" },
                        { Content: "Benutzerfreundliches Interface" },
                        { Content: "Regelmäßige Updates" },
                        { Content: "Ohne KI-Anbindung" }
                    ]}
                    buttonText="Loslegen"
                    displaySavings={isToggleOn} // Neuen Prop hinzufügen
                />

                <PricingOption
                    title="Premium-Paket"
                    icon={<TbPremiumRights style={{ scale: "4" }} />}
                    price={Premiumprice}
                    savings={premiumSavings}
                    savingsPercent={premiumSavingsPercent}
                    totalCost={PremiumTotalCost}
                    content={[
                        { Content: "Alle Funktionen des Standard-Pakets" },
                        { Content: "KI-Anbindung für intelligente Analysen" },
                        { Content: "Priorisierter Kundensupport Exklusive Premium-Funktionen" },
                    ]}
                    buttonText="Upgrade sichern"
                    displaySavings={isToggleOn} // Neuen Prop hinzufügen
                />
            </div>
        </div>
    );
}
