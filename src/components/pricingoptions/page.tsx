"use client";

import { ReactNode } from 'react';

type PricingOptionProps = {
    title: string;
    icon: ReactNode;
    content: { Content: string }[];
    price?: string; // Optional gemacht
    savings?: number; // Optional gemacht
    savingsPercent?: string; // Optional gemacht
    totalCost?: string; // Optional gemacht
    buttonText: string;
    displaySavings?: boolean; // displaySavings als optionalen Prop hinzufügen
};

const PricingOption = ({
    title,
    icon,
    price = '0€',
    savings = 0,
    savingsPercent = '0%',
    totalCost = '€0',
    buttonText,
    displaySavings = true,
    isPremium = false // Neue Prop
}: PricingOptionProps & { isPremium?: boolean }) => {
    return (
        <div
            className='ContainerAllOptions'
            style={{
                border: isPremium ? "2px solid #d4a017" : "1px solid #d4a017",
                backgroundColor: isPremium ? "#fdf4e3" : "#1d0332",
                boxShadow: isPremium ? "0px 4px 10px rgba(255, 215, 0, 0.5)" : "none",
                padding: isPremium ? "20px" : "15px",
                borderRadius: "10px",
                position: "relative",
            }}
        >
            {/* Empfohlen-Badge */}
            {isPremium && (
                <div
                    style={{
                        position: "absolute",
                        top: "20px",
                        right: "10px",
                        backgroundColor: "#d4a017",
                        color: "#fff",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        borderRadius: "5px",
                        fontSize: "1.5rem",
                        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    Empfohlen
                </div>
            )}
            <div className='ContainerPinkDiv'></div>
            <div className='DivAroundIcon' style={{ color: isPremium ? "#d4a017" : "#fff" }}>
                {icon}
            </div>
            <div style={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <h1 style={{ margin: "10px", color: isPremium ? "#d4a017" : "#fff" }}>{title}</h1>
            </div>
            <div style={{ textAlign: "center" }}>
                <h4 style={{ fontSize: "40px", margin: "10px", color: isPremium ? "#d4a017" : "#fff" }}>{price}</h4>

                {!displaySavings && savings > 0 && (
                    <div style={{ textAlign: "center", margin: "20px 0" }}>
                        <p
                            style={{
                                fontSize: "1.5rem",
                                color: "#28a745", // Dezentes und professionelles Grün
                                marginBottom: "10px",
                                fontWeight: "bold",
                                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Subtiler Schatten für besseren Kontrast
                            }}
                        >
                            Du sparst {savings}€ ({savingsPercent}%) im Jahr!
                        </p>
                        <p
                            style={{
                                fontSize: "1.5rem",
                                color: "#ffcc00", // Angenehmes Goldgelb
                                fontWeight: "bold",
                                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Gleicher Schatteneffekt
                            }}
                        >
                            Einmalige Zahlung: {totalCost}
                        </p>
                    </div>

                )}

            </div>

            {/* {content.map((item) => (
                <div className='ContainerContentArrayAll' key={item.Content}>
                    <p
                        className='ParagraphAllSame'
                        style={{
                            color: isPremium ? "grey" : "#fff",
                            fontWeight: item.Content === "KI-Anbindung für intelligente Analysen" ? "bold" : "normal",
                            fontSize: item.Content === "KI-Anbindung für intelligente Analysen" ? "1.2rem" : "inherit",
                            backgroundColor: item.Content === "KI-Anbindung für intelligente Analysen" ? (isPremium ? "#ffeaa7" : "#3a0656") : "inherit",
                            padding: item.Content === "KI-Anbindung für intelligente Analysen" ? "5px" : "inherit",
                            borderRadius: item.Content === "KI-Anbindung für intelligente Analysen" ? "5px" : "inherit",
                        }}
                    >
                        <CheckCircleOutlineIcon
                            className='StylingAroundIcons'
                            style={{
                                color:
                                    item.Content === "KI-Anbindung für intelligente Analysen"
                                        ? (isPremium ? "#d4a017" : "#fff")
                                        : (isPremium ? "#d4a017" : "#fff"),
                            }}
                        />
                        {item.Content}
                    </p>
                </div>
            ))} */}


            <div className='ContainerAroundAllBtn'>
                <button
                    className='AllBtnSame'
                    style={{
                        backgroundColor: isPremium ? "#d4a017" : "inherit",
                        color: isPremium ? "#fff" : "#d4a017",
                    }}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default PricingOption;
