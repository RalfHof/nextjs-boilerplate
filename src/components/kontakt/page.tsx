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
      <div id="ContainerContact">
        <div className="SectionContact">
          <h2>Kontakt</h2>
          <div id="ContainerAroundContactInfos"
          >
            <div id="ContactInfos"
            >
              <h3 style={{ fontSize: "2rem", marginBottom: "10px" }}>
                Adresse:
              </h3>
              <p style={{ marginTop: "5px", fontSize: "1.2rem" }}>Beispielstraße</p>
              <p style={{ marginTop: "-10px", fontSize: "1.2rem" }}>Postleitzahl, Deutschland</p>

              <h3 style={{ fontSize: "2rem", marginBottom: "10px" }}>
                Email:
              </h3>
              <p style={{ marginTop: "5px", fontSize: "1.2rem" }}>info@deinefirma.de</p>

              <h3 style={{ fontSize: "2rem", marginBottom: "10px" }}>
                Telefon:
              </h3>
              <p style={{ marginTop: "5px", fontSize: "1.2rem" }}>Du erreichst uns unter:</p>
              <p style={{ marginTop: "-10px", fontSize: "1.2rem" }}>+49 123 456 789</p>
            </div>
          </div>



          <form onSubmit={handleSubmit} id="FormAroundInputFieldsContact"
          >
            <div
              id="ContainerAroundInputFieldsContact"
            >
              <input
                type="text"
                name="name"
                id="InputFieldNameContact"
                placeholder="Name*"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                id="InputFieldEmailContact"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div
              id="ContainerAroundSubjectContact"
            >
              <input
                type="text"
                name="subject"
                id="InputFieldSubjectContact"
                required
                placeholder="Betreff*"
                value={formData.subject}
                onChange={handleChange}
              />

            </div>


            <div id="ContainerAroundTextareaContact"
            >
              <textarea
                name="message"
                id="TextareaFieldContact"
                placeholder="Schreibe eine Nachricht*"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>

            </div>



            {/* ------------------------- */}

            <div
              id="ContainerAroundBtnContact"
            >
              <button
                id="BtnContact"
                type="submit"
              >
                Abschicken
              </button>
              {error &&
                <div className="MessagesFromBackendContact">
                  <p style={{ color: "red", margin: "0", padding: "0", fontSize: "1.2rem" }}>{error}</p>
                </div>}

              {success &&
                <div className="MessagesFromBackendContact">
                  <p style={{ color: "green", margin: "0", padding: "0", fontSize: "1.2rem" }}>{success}</p>
                </div>
              }
            </div>
          </form>


        </div>
      </div>
    </>
  );
}
