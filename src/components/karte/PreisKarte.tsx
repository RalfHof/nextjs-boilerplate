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
        first_name: '',
        last_name: '',
        company_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        language: 'de',
        address: '',
        tarif: 'free',
    });
    const [errors, setErrors] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: '',
    });
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);

    const isPremium = Item.isFavorite ?? false;

    const handleOpenModal = () => {
        setFormData({
            ...formData,
            tarif: Item.PackageName || 'free',
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
        if ((name === 'first_name' || name === 'last_name') && !validateName(value)) {
            newError = `${name === 'first_name' ? 'Vorname' : 'Nachname'} darf nur Buchstaben enthalten.`;
        }
        if (name === 'password' && value.length < 6) {
            newError = 'Das Passwort muss mindestens 6 Zeichen lang sein.';
        }
        if (name === 'password_confirmation' && value !== formData.password) {
            newError = 'Die Passwörter stimmen nicht überein.';
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: newError,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (errors.email || errors.first_name || errors.last_name || errors.password || errors.password_confirmation) {
            return;
        }

        fetch('https://api.linkify.cloud/service/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                mode: 'cors', 
                credentials: 'include'
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setStatusMessage("Erfolgreich registriert!");
                setStatusType('success');

                // Nach der Registrierung Formular zurücksetzen
                setFormData({
                    first_name: '',
                    last_name: '',
                    company_name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    language: 'de', // Defaultwert
                    address: '',
                    tarif: 'free', // Defaultwert
                });
            })
            .catch((error: Error) => {
                console.log(error);
                setStatusMessage("Fehler bei der Registrierung.");
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
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                fullWidth
                                margin="normal"
                                required
                                error={!!errors.first_name}
                                helperText={errors.first_name}
                            />
                            <TextField
                                label="Nachname"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                fullWidth
                                margin="normal"
                                required
                                error={!!errors.last_name}
                                helperText={errors.last_name}
                            />
                            <TextField
                                label="Firma"
                                name="company_name"
                                value={formData.company_name}
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
                                label="Passwort"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                fullWidth
                                margin="normal"
                                required
                                error={!!errors.password}
                                helperText={errors.password}
                            />
                            <TextField
                                label="Passwort Bestätigung"
                                name="password_confirmation"
                                type="password"
                                value={formData.password_confirmation}
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                fullWidth
                                margin="normal"
                                required
                                error={!!errors.password_confirmation}
                                helperText={errors.password_confirmation}
                            />
                            <TextField
                                label="Sprache"
                                name="language"
                                value={formData.language}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                disabled
                                margin="normal"
                                sx={{ display: 'none' }}  // Macht das Language-Feld unsichtbar
                            />
                            <TextField
                                label="Adresse"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                fullWidth
                                margin="normal"
                                required
                            />

                            <TextField
                                label="Tarif"
                                name="tarif"
                                value={formData.tarif}
                                onChange={handleInputChange}
                                fullWidth
                                required
                                disabled
                                margin="normal"
                                sx={{ display: 'none' }}  // Macht das Tarif-Feld unsichtbar
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
                                disabled={!!errors.first_name || !!errors.last_name || !!errors.email || !!errors.password || !!errors.password_confirmation || !formData.first_name || !formData.last_name || !formData.email || !formData.password || !formData.password_confirmation}
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
