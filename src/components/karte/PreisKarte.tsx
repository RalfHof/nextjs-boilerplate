"use client"

import React, { ReactNode, useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import { Modal, Button, TextField, Box, Typography, Backdrop, Fade } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
        badge: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        firstName: '',
        lastName: '',
    });
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);

    const isPremium = Item.isFavorite ?? false;

    const handleOpenModal = () => {
        setFormData({
            ...formData,
            badge: Item.PackageName || 'Standard',
        });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setStatusMessage(null);
        setStatusType(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = (email: string) => {
        const popularEmailDomains = [
            'gmail.com',
            'outlook.com',
            'hotmail.com',
            'yahoo.com',
            'icloud.com',
            'gmail.de',
            'outlook.de',
            'hotmail.de',
            'yahoo.de',
            'icloud.de',
        ];

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (!emailPattern.test(email)) {
            return false;
        }

        const domain = email.split('@')[1];

        return popularEmailDomains.includes(domain);
    };

    const validateName = (name: string) => {
        const namePattern = /^[A-Za-z]+$/;
        return namePattern.test(name);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let newError = '';
        if (name === 'email' && !validateEmail(value)) {
            newError = 'Bitte geben Sie eine gültige E-Mail-Adresse mit einer der gängigen Domains ein (z.B. gmail.com, outlook.com).';
        }
        if ((name === 'firstName' || name === 'lastName') && !validateName(value)) {
            newError = `${name === 'firstName' ? 'Vorname' : 'Nachname'} darf nur Buchstaben enthalten.`;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: newError,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (errors.email || errors.firstName || errors.lastName) {
            return;
        }

        fetch('https://api.linkify.cloud/service/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setStatusMessage('Erfolgreich registriert!' + data.message);
                setStatusType('success');
            })
            .catch((error: Error) => {
                console.log(error)
                setStatusMessage(`Fehler bei der Registrierung. Fehler: ${error.message}`);
                setStatusType('error');
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
                                onBlur={handleBlur}
                                fullWidth
                                margin="normal"
                                required
                                error={!!errors.firstName}
                                helperText={errors.firstName}
                            />
                            <TextField
                                label="Nachname"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                fullWidth
                                margin="normal"
                                required
                                error={!!errors.lastName}
                                helperText={errors.lastName}
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
                                onBlur={handleBlur}
                                fullWidth
                                margin="normal"
                                required
                                error={!!errors.email}
                                helperText={errors.email}
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
                                disabled={!!errors.firstName || !!errors.lastName || !!errors.email || !formData.firstName || !formData.lastName || !formData.email}
                            >
                                Registrieren
                            </Button>
                        </form>

                        {statusMessage && (
                            <Typography
                                variant="body2"
                                sx={{
                                    mt: 2,
                                    color: statusType === 'success' ? 'green' : 'red',
                                }}
                            >
                                {statusMessage}
                            </Typography>
                        )}

                        <Button onClick={handleCloseModal} sx={{ mt: 2 }}>
                            Schließen
                        </Button>
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}
