"use client";

import { useState } from 'react';
import { TbPremiumRights } from "react-icons/tb";
import WorkIcon from '@mui/icons-material/Work';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

export default function PricingPage() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    const handleToggle = () => {
        setIsToggleOn(!isToggleOn);
    };

    return (
        <>
            <div style={{ width: "100%", height: "auto", color: "#fff", paddingBottom: "50px" }}>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h1 style={{ color: "#f2c76e" }}>
                        Preismodelle
                        <button
                            style={{ cursor: "pointer", backgroundColor: "inherit", border: "none", color: "#f2c76e", padding: "0", scale: "1.2", paddingTop: "50px", marginLeft: "10px" }}
                            onClick={handleToggle}
                        >
                            {isToggleOn ? <ToggleOffIcon /> : <ToggleOnIcon style={{ color: "green" }} />}
                        </button>
                    </h1>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                        gap: "100px",
                        marginTop: "50px",
                        flexWrap: "wrap", 
                    }}
                >
                    {/* Standard Plan */}
                    <div style={{ height: "700px", width: "250px", border: "1px solid #f2c76e", borderRadius: "8px", marginBottom: "20px" }}>
                        <div style={{ width: "100%", height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <WorkIcon style={{ scale: "3" }} />
                        </div>
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <h1 style={{ margin: "0" }}>Standard</h1>
                        </div>
                    </div>

                    {/* Premium Plan */}
                    <div style={{ height: "700px", width: "250px", border: "1px solid #f2c76e", borderRadius: "8px", marginBottom: "20px" }}>
                        <div style={{ width: "100%", height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <TbPremiumRights style={{ scale: "4" }} />
                        </div>
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <h1 style={{ margin: "0" }}>Premium</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
