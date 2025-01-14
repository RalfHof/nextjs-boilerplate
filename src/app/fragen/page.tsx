import Image from "next/image"

export default function Questions() {


    const member =
    {
        name: "Scan Me",
        image: "/img/Qr-white.png",
        web: "https://linkify.cloud",
        role: "Geht zu Teambereich",
    }

    return (

        <>


            <div className="QuestionContainer">

                <h1>Fragen ? </h1>
                <Image
                    className="question-img"
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={200}
                    title="Scan Me"
                />
                <h2>{member.role}</h2>

                {member.web && (
                    <div>
                        <a
                            href={`${member.web}`}
                            title={`E-Mail an ${member.web}`}
                        >
                            🌐
                        </a>
                        <span>{member.web}</span>
                    </div>
                )}
            </div>

        </>
    )
}