"use client"

import { ReactNode } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
    content,
    price = '€0', // Standardwert
    savings = 0, // Standardwert
    savingsPercent = '0%', // Standardwert
    totalCost = '€0', // Standardwert
    buttonText,
    displaySavings = true // Standardwert für displaySavings, wenn nicht übergeben
}: PricingOptionProps) => {
    return (
        <div className='ContainerAllOptions'>
            <div className='ContainerPinkDiv'></div>
            <div className='DivAroundIcon'>
                {icon}
            </div>
            <div style={{ width: "100%", textAlign: "center" }}>
                <h1 style={{ margin: "10px" }}>{title}</h1>
            </div>
            <div style={{ textAlign: "center" }}>
                <h4 style={{ fontSize: "40px", margin: "10px" }}>{price}</h4>
                {!displaySavings && savings > 0 && (
                    <div>
                        <p style={{ fontSize: "18px", color: "green" }}>
                            Du sparst {savings}€ ({savingsPercent}%) im Jahr!
                        </p>
                        <p style={{ fontSize: "16px", color: "#f2c76e" }}>
                            Einmalige Zahlung: {totalCost}
                        </p>
                    </div>
                )}
            </div>
            {content.map((item) => (
                <div className='ContainerContentArrayAll' key={item.Content}>
                    <p className='ParagraphAllSame'>
                        <CheckCircleOutlineIcon className='StylingAroundIcons' />
                        {item.Content}
                    </p>
                </div>
            ))}
            <div className='ContainerAroundAllBtn'>
                <button className='AllBtnSame'>{buttonText}</button>
            </div>
        </div>
    );
};

export default PricingOption;
