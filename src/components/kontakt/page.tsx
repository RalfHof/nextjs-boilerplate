"use client";
export default function KontaktPage() {
  return (
    <>
      <div style={{ backgroundColor: "#f9f9f9", height: "auto", width: "100%", }}>
        <div className="SectionContact">
          <h2>Kontakt</h2>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}>

            <div style={{
              border: "1px solid #f2c76e",
              padding: "25px 20px",
              borderRadius: "8px",
              width: "900px",

            }}>

              <div style={{ marginLeft: "40px", lineHeight: "20px", display: "flex", justifyContent: "left", alignItems: "flex-start", flexDirection: "column" }}>
                <h3 style={{ fontSize: "30px", marginBottom: "10px" }}>Adresse:</h3>
                <p >Beispielstraße</p>
                <p >Postleitzahl, Deutschland</p>

                <h3 style={{ fontSize: "30px", marginBottom: "10px" }}>Email:</h3>
                <p >info@deinefirma.de</p>

                <h3 style={{ fontSize: "30px", marginBottom: "10px" }}>Telefon:</h3>
                <p >Du erreichst uns unter:</p>
                <p >+49 123 456 789</p>
              </div>
            </div>

            <div style={{
              marginBottom: "40px",
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly",
              gap: "20px",
              marginTop: "40px",
            }}
            >
              <input type="text" style={{
                border: "1px solid #f2c76e",
                borderRadius: "8px",
                width: "50%",
                fontSize: "20px",
                backgroundColor: "inherit",
                color: "#fff",
                padding: "20px",
              }} placeholder="Name*"
                required />


              <input type="text" style={{
                border: "1px solid #f2c76e",
                borderRadius: "8px",
                padding: "20px",
                fontSize: "20px",
                width: "50%",
                color: "#fff",
                backgroundColor: "inherit"
              }} placeholder="Email*"
                required />

            </div>

            <div style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
            }}>
              <input type="text" name="" id=""
                style={{
                  border: "1px solid #f2c76e",
                  borderRadius: "8px",
                  color: "#fff",
                  padding: "20px",
                  fontSize: "20px",
                  width: "900px",
                  backgroundColor: "inherit"
                }}
                required placeholder="Betreff*" />

              <textarea name="" id="" style={{
                backgroundColor: "inherit",
                height: "200px",
                color: "#fff",
                border: "1px solid #f2c76e",
                borderRadius: "8px",
                padding: "20px",
                width: "900px",
                fontSize: "20px"
              }} placeholder="Schreibe eine Nachricht*"
                required>
              </textarea>

              <div style={{ marginBottom: "50px", width: "100%", display: "flex", alignItems: "flex-start" }}>
                <button style={{
                  backgroundColor: "inherit", color: "#f2c76e",
                  border: "1px solid #f2c76e",
                  borderRadius: "50px",
                  padding: "20px 80px",
                  fontSize: "20px"

                }}>Abschicken</button>
              </div>

            </div>
          </div>
        </div>
      </div >
    </>
  );
}
