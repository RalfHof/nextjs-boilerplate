"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

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

      const response = await axios.post("https://api.linkify.cloud/service/contact", formData);

      if (response.status === 200) {
        setSuccess("Ihr Formular wurde erfolgreich abgeschickt!");
        // Felder leeren
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
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
            <div id="ContactInfos">

              <p> <span> Adresse: </span><br />
                <span> Techstarter GmbH</span><br />
                <span>Stadtdeich 2-4</span><br />
                <span>20097 Hamburg, Deutschland</span> <br />
                <span>Email: info@linkify.cloud</span>
              </p>
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
                placeholder="Firmenname"
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
              * Pflichtfelder
            </div>


            <div style={{ width: "100%", fontSize: "25px" }}>
              <input type="checkbox" required style={{ padding: "200px" }} />
              <span>Ich bin mit den <Link href={"/datenschutz"} target="_blank">Datenschutzerklärungen</Link> einverstanden</span>
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