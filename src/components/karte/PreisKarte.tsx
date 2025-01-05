"use client"

import { ReactNode } from "react";

// Preis-Element-Props
type PriceItemProps = {
    Item: {
        Price: string;
        Currency: string;
        Icon: ReactNode;
        PackageName: string;
        Items: { Content: string }[];
        Button: string;
        isFavorite?: boolean;
        BadgetText?: string
    };
};

export default function PriceCard({ Item }: PriceItemProps) {



    const isPremium = (Item.isFavorite === null || Item.isFavorite === undefined) ? false : Item.isFavorite

    let type = "standard"
    if (isPremium === true) {

        type = "premium"
    }

    if (Item === null || Item === undefined) {
        return <div>Fehler</div>;
    } else {
        return (
            <>
                <div id="ContainerAroundAllOptions" className={type}>
                    <div
                        className="ContainerAllOptions"
                    >

                        {/* Empfohlen-Badge */}
                        {Item.BadgetText !== null &&(

                        <div className="Badge">{Item.BadgetText}</div>
                        )}


                        <div className="DivAroundIcon" >
                            {Item.Icon}
                        </div>
                        <div className="ContainerPackageName"
                        >
                            <h1 className="PackageName">{Item.PackageName}</h1>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div className="Price">

                                {Item.Price} {Item.Currency}
                            </div>

                        </div>

                        {/* Items anzeigen */}
                        <div className="ContentItems">
                            {Item.Items.map((item, index) => (
                                <p key={index}>{item.Content}</p>
                            ))}
                        </div>

                        <div className="ContainerAroundAllBtn">
                            <button
                                className="AllBtnSame"
                            >
                                {Item.Button}
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
