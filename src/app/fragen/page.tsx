import Image from "next/image"

export default function Questions() {


    const member =
    {
        name: "Scan Me",
        image: "/img/QR-LinkifyTeam.png",
        web: "https://linkify.cloud",
        role: "Geht zu Teambereich",
    }

    return (

        <>
            <div className="QuestionContainer">
                <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={200}
                    style={{
                        borderRadius: "15px",
                        padding: "10px",
                        objectFit: "cover",
                        width: "100%",
                        maxWidth: "300px",
                        height: "auto",
                    }} />
            </div>
        </>
    )
}