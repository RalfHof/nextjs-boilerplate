"use client";

import { useState } from 'react';
import { TbPremiumRights } from "react-icons/tb";
import WorkIcon from '@mui/icons-material/Work';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function PricingPage() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const ContentArrayStandard = [{ Content: "Unlimited GB Space" }, { Content: "30 Domain Names" }, { Content: "Free SSL" }, { Content: "Daily Backup" }, { Content: "Free Templates" }, { Content: "Free Email" }, { Content: "10 Databases" }, { Content: "Unlimited Email Address" }, { Content: "Live Support" }]

    const ContentArrayPremium = [{ Content: "Unlimited GB Space" }, { Content: "30 Domain Names" }, { Content: "Free SSL" }, { Content: "Daily Backup" }, { Content: "Free Templates" }, { Content: "Free Email" }, { Content: "10 Databases" }, { Content: "Unlimited Email Address" }, { Content: "Live Support" }]


    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    const Standardprice = isToggleOn ? "€7.99" : "€4.99";
    const Premiumprice = isToggleOn ? "€11.99" : "€7.99";

    return (
        <>
            <div style={{ width: "100%", height: "auto", color: "#fff", paddingBottom: "50px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h1 style={{ color: "#f2c76e" }}>
                        Preismodelle
                        <button
                            style={{
                                cursor: "pointer",
                                backgroundColor: "inherit",
                                border: "none",
                                color: "#f2c76e",
                                padding: "0",
                                scale: "1.2",
                                paddingTop: "50px",
                                marginLeft: "10px",
                            }}
                            onClick={handleToggle}
                        >
                            {isToggleOn ? <ToggleOffIcon style={{ width: "fit-content", height: "25px" }} /> : <ToggleOnIcon style={{ color: "green", width: "fit-content", height: "25px" }} />}
                        </button>
                        <p style={{margin:"0", display:"inline-block", marginLeft:"10px"}}>{isToggleOn ? "Monatlich" : "Jährlich"}</p>

                    </h1>
                </div>                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        gap: "10%",
                        marginTop: "33px",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Standard Plan */}
                    <div
                        id="ContainerStandard"
                        style={{
                            height: "660px",
                            maxWidth: "300px",
                            width: "100%",
                            border: "1px solid #f2c76e",
                            borderRadius: "8px",
                            marginBottom: "20px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Hälfte mit rotem Hintergrund */}
                        <div
                            style={{
                                backgroundColor: "rgba(255,255,255,0.1)",
                                height: "50%",
                                width: "100%",
                                position: "absolute",
                                bottom: "0",
                                left: "0",

                            }}
                        ></div>

                        {/* Inhalt */}
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                // Inhalt über den Hintergrund legen
                            }}
                        >
                            <WorkIcon style={{ scale: "2.5" }} />
                        </div>
                        <div style={{ width: "100%", textAlign: "center", position: "relative", }}>
                            <h1 style={{ margin: "0" }}>Standard</h1>
                        </div>
                        <div style={{ textAlign: "center", position: "relative", }}>
                            <h4 style={{ fontSize: "40px", margin: "20px" }}>{Standardprice}</h4>
                        </div>

                        {ContentArrayStandard.map((ContentStandard) => (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    position: "relative",

                                }}
                                key={ContentStandard.Content}
                            >
                                <p
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                        position: "relative",
                                        top: "-15px",
                                        margin: "6px",
                                    }}
                                >
                                    <CheckCircleOutlineIcon style={{ position: "relative", top: "5px", scale: "0.8" }} />
                                    {ContentStandard.Content}
                                </p>
                            </div>
                        ))}

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10px",
                                position: "relative",

                            }}
                        >
                            <button
                                style={{
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    borderRadius: "30px",
                                    border: "2px solid #f2c76e",
                                    color: "#f2c76e",
                                    padding: "10px 30px",
                                    backgroundColor: "inherit",
                                }}
                            >
                                Buchen
                            </button>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div
                        id="ContainerStandard"
                        style={{
                            height: "660px",
                            maxWidth: "300px",
                            width: "100%",
                            border: "1px solid #f2c76e",
                            borderRadius: "8px",
                            marginBottom: "20px",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Hälfte mit rotem Hintergrund */}
                        <div
                            style={{
                                backgroundColor: "rgba(255,255,255,0.1)",
                                height: "50%",
                                width: "100%",
                                position: "absolute",
                                bottom: "0",
                                left: "0",

                            }}
                        ></div>

                        {/* Inhalt */}
                        <div
                            style={{
                                width: "100%",
                                height: "100px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                // Inhalt über den Hintergrund legen
                            }}
                        >
                            <TbPremiumRights style={{ scale: "4" }} />
                        </div>
                        <div style={{ width: "100%", textAlign: "center", position: "relative", }}>
                            <h1 style={{ margin: "0" }}>Premium</h1>
                        </div>
                        <div style={{ textAlign: "center", position: "relative", }}>
                            <h4 style={{ fontSize: "40px", margin: "20px" }}>{Premiumprice}</h4>
                        </div>

                        {ContentArrayPremium.map((ContentPremium) => (
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    position: "relative",

                                }}
                                key={ContentPremium.Content}
                            >
                                <p
                                    style={{
                                        width: "100%",
                                        textAlign: "center",
                                        position: "relative",
                                        top: "-15px",
                                        margin: "6px",
                                    }}
                                >
                                    <CheckCircleOutlineIcon style={{ position: "relative", top: "5px", scale: "0.8" }} />
                                    {ContentPremium.Content}
                                </p>
                            </div>
                        ))}

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: "10px",
                                position: "relative",

                            }}
                        >
                            <button
                                style={{
                                    cursor: "pointer",
                                    fontSize: "18px",
                                    borderRadius: "30px",
                                    border: "2px solid #f2c76e",
                                    color: "#f2c76e",
                                    padding: "10px 30px",
                                    backgroundColor: "inherit",
                                }}
                            >
                                Buchen
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
