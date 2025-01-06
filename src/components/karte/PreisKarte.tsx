"use client"

import React, { ReactNode, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { Modal, Button, TextField, Box, Typography, Backdrop, Fade } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
        BadgetText?: string;
    };
};

export default function PriceCard({ Item }: PriceItemProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        badge: '', // Hinzufügen eines Badge-Feldes
    });

    const isPremium = Item.isFavorite ?? false;

    const handleOpenModal = () => {
        setFormData({
            ...formData,
            badge: Item.PackageName || 'Standard', // Badge-Wert dynamisch vom Item holen
        });
        setIsModalOpen(true);
    };


    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // API-Aufruf zur Registrierung
        fetch('https://api.linkify.cloud/service/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Erfolgreich registriert:", data);
                setIsModalOpen(false);
            })
            .catch((error) => {
                console.error("Fehler bei der Registrierung:", error);
            });
    };

    return (
        <>
            <div id="ContainerAroundAllOptions" className={isPremium ? "premium" : "standard"}>
                <div className="ContainerAllOptions">
                    {Item.BadgetText && <div className="Badge">{Item.BadgetText}</div>}

                    <div className="DivAroundIcon">
                        {React.isValidElement(Item.Icon) && Item.Icon.type === FaLightbulb ? (
                            <div className="LightbulbIconWrapper">
                                {Item.Icon}
                            </div>
                        ) : (
                            <div>{Item.Icon}</div>
                        )}
                    </div>

                    <div className="ContainerPackageName">
                        <h1 className="PackageName">{Item.PackageName}</h1>
                    </div>

                    <div id="ContainerPrice" style={{ textAlign: "center" }}>
                        <div className="Price">
                            {Item.Price} {Item.Currency}
                        </div>
                    </div>

                    <div className={`ContentItems ${Item.Items.some(item => item.Content === "Keine Kündigung notwendig") ? 'PremiumContent' : ''} ${Item.Items.some(item => item.Content === "KI-Anbindung") ? 'StandardContent' : ''}`}>
                        {Item.Items.map((item, index) => (
                            <p className="ContentItemsParagraph" key={index}>
                                <CheckCircleOutlineIcon className="CheckCircleIcon" /> {item.Content}
                            </p>
                        ))}
                    </div>

                    <div className="ContainerAroundAllBtn">
                        <button
                            className="AllBtnSame"
                            onClick={handleOpenModal}
                        >
                            {Item.Button}
                        </button>
                    </div>
                </div>
            </div>

            <Modal
                open={isModalOpen}
                onClose={(event, reason) => {
                    // Verhindert das Schließen, wenn der Hintergrund angeklickt wird
                    if (reason === 'backdropClick') {
                        return;
                    }
                    handleCloseModal();
                }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={isModalOpen}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            borderRadius: 2,
                            boxShadow: 24,
                            p: 4,
                            textAlign: 'center',
                            zIndex: 9999,
                        }}
                    >
                        <Typography variant="h6" component="h2">
                            Registrierung
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Vorname"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Nachname"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                            <TextField
                                label="Firma"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                            <TextField
                                label="E-Mail"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                            />
                            <TextField
                                name="badge"
                                value={formData.badge}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                disabled
                                margin="normal"
                            />
                            {Item.PackageName === 'Premium' && (
                                <div className="PremiumNotice" style={{ color: 'red', marginTop: 10 }}>
                                    Die Premium-Option ist derzeit nicht verfügbar. Wir nehmen jedoch gerne Ihre Registrierung entgegen und informieren Sie umgehend per E-Mail, sobald die Premium-Option wieder zur Verfügung steht.
                                </div>
                            )}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                sx={{ mt: 2 }}
                            >
                                Registrieren
                            </Button>
                        </form>
                        <Button onClick={handleCloseModal} sx={{ mt: 2 }}>
                            Schließen
                        </Button>
                    </Box>
                </Fade>
            </Modal>

        </>
    );
}
