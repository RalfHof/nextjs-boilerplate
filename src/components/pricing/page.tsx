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

    const Standardprice = isToggleOn ? `€${StandardPriceMonthly}` : `€${StandardPriceYearly}`;
    const Premiumprice = isToggleOn ? `€${PremiumPriceMonthly}` : `€${PremiumPriceYearly}`;

    const StandardTotalCost = isToggleOn ? `€${StandardPriceMonthly * 12}` : `€${StandardPriceYearly * 12}`;
    const PremiumTotalCost = isToggleOn ? `€${PremiumPriceMonthly * 12}` : `€${PremiumPriceYearly * 12}`;

    return (
        <div id='ContainerAroundEverything'>
            <div style={{ width: "100%", textAlign: "center" }}>
                <h1 style={{ color: "#f2c76e" }}>
                    Preismodelle
                    <button id='ToggleButtonPricing' onClick={handleToggle}>
                        {isToggleOn ? <ToggleOffIcon /> : <ToggleOnIcon style={{ color: "blue" }} />}
                    </button>
                    <p style={{ margin: "0", display: "inline-block", marginLeft: "10px" }}>
                        {isToggleOn ? "Monatlich" : "Jährlich"}
                    </p>
                </h1>
            </div>

            <div id='ContainerAroundAllOptions'>
                <PricingOption
                    title="14 Tage kostenlose Testversion"
                    icon={<FaLightbulb style={{ scale: "2.5" }} />}
                    content={[
                        { Content: "Zugriff auf Basisfunktionen" }
                    ]}
                    buttonText="Buchen"
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
                    buttonText="🔗 Jetzt starten"
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
                        { Content: "Alle Funktionen des Standard-Pakets KI-Anbindung für intelligente Analysen Priorisierter Kundensupport Exklusive Premium-Funktionen" }
                    ]}
                    buttonText="🔗 Upgrade sicher"
                    displaySavings={isToggleOn} // Neuen Prop hinzufügen
                />
            </div>
        </div>
    );
}
