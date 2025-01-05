"use client";
import React, { useState } from "react";
import axios from "axios";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null); // Fehlernachricht
  const [success, setSuccess] = useState<string | null>(null); // Erfolgsnachricht

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setError(null);
      setSuccess(null);

      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/kontakt`, formData);

      if (response.status === 200) {
        setSuccess("Formular erfolgreich abgeschickt!");
      } else {
        setError(`Unerwartete Antwort: ${response.statusText}`);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          typeof err.response?.data?.message === "string"
            ? err.response.data.message
            : "Ein Fehler ist aufgetreten. Versuche es später erneut."
        );
      } else {
        setError("Ein unbekannter Fehler ist aufgetreten.");
      }
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "#f9f9f9", height: "auto", width: "100%" }}>
        <div className="SectionContact">
          <h2>Kontakt</h2>
          <div
            style={{
              border: "1px solid #f2c76e",
              padding: "25px 20px",
              borderRadius: "8px",
              width: "83%",
              maxWidth: "900px",
            }}
          >
            <div
              style={{
                marginLeft: "40px",
                lineHeight: "20px",
                display: "flex",
                justifyContent: "left",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <h3 style={{ fontSize: "30px", marginBottom: "10px" }}>
                Adresse:
              </h3>
              <p>Beispielstraße</p>
              <p>Postleitzahl, Deutschland</p>

              <h3 style={{ fontSize: "30px", marginBottom: "10px" }}>
                Email:
              </h3>
              <p>info@deinefirma.de</p>

              <h3 style={{ fontSize: "30px", marginBottom: "10px" }}>
                Telefon:
              </h3>
              <p>Du erreichst uns unter:</p>
              <p>+49 123 456 789</p>
            </div>
          </div>



          <form onSubmit={handleSubmit} style={{
            width: "90%",
            maxWidth: "940px",
            margin: "0",
            padding: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",


          }}>
            <div
              style={{
                marginBottom: "40px",
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "40px",
                gap: "20px"
              }}
            >
              <input
                type="text"
                name="name"
                style={{
                  border: "1px solid #f2c76e",
                  borderRadius: "8px",
                  width: "50%",
                  fontSize: "20px",
                  backgroundColor: "inherit",
                  padding: "20px",
                  color: "#fff",
                }}
                placeholder="Name*"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                style={{
                  border: "1px solid #f2c76e",
                  borderRadius: "8px",
                  padding: "20px",
                  fontSize: "20px",
                  width: "50%",
                  backgroundColor: "inherit",
                  color: "#fff",
                }}
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "40px"
              }}
            >
              <input
                type="text"
                name="subject"
                style={{
                  border: "1px solid #f2c76e",
                  borderRadius: "8px",
                  padding: "20px",
                  fontSize: "20px",
                  width: "100%",
                  backgroundColor: "inherit",
                  color: "#fff",
                }}
                required
                placeholder="Betreff*"
                value={formData.subject}
                onChange={handleChange}
              />

            </div>


            <div style={{
              display: "flex",
              width: "100%",
              marginBottom: "40px"

            }}>
              <textarea
                name="message"
                style={{
                  backgroundColor: "inherit",
                  height: "200px",
                  border: "1px solid #f2c76e",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "100%",
                  fontSize: "20px",
                  color: "#fff",
                }}
                placeholder="Schreibe eine Nachricht*"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

            </div>



            {/* ------------------------- */}

            <div
              style={{
                marginBottom: "50px",
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <button
                style={{
                  backgroundColor: "inherit",
                  color: "#f2c76e",
                  border: "1px solid #f2c76e",
                  borderRadius: "50px",
                  padding: "20px 80px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Abschicken
              </button>
            </div>
          </form>

          {error &&
            <div style={{ position: "relative", top: "-100px", left: "20px" }}>
              <p style={{ color: "red" }}>{error}</p>
            </div>}

          {success &&
            <div style={{ position: "relative", top: "-100px", left: "20px" }}>
              <p style={{ color: "green" }}>{success}</p>
            </div>
          }
        </div>
      </div>
    </>
  );
}
