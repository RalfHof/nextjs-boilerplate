import Image from "next/image";
import React from "react"

type ProjektItemProps = {
    Item: {
        Titel: string;
        Text?: string;
        Liste?: Array<string>;
        Image?: string;  // Hier das Bild hinzufügen
        alt: string;    // Hier den Alt-Text hinzufügen
    };
};

export default function ProjektItem({ Item }: ProjektItemProps) {
    return (
        <div className="project-item">
            <div style={{ width: "35%", height: "300px", border: "1px solid #fff" }}>
                {Item.Image && (
                    <Image
                        width={1000}
                        height={100}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        alt={Item.alt}
                        src={Item.Image}
                    />
                )}
            </div>
            <div className="project-item-list">
                <h2 className="project-title">{Item.Titel}</h2>
                <div className="projekt-text">{Item.Text}</div>
                <ol className="projectunsortedlist">
                    {Item.Liste?.map((Element, index) => (
                        <React.Fragment key={index}>
                            <li className="projectlist">{Element}</li>
                            <br />
                        </React.Fragment>
                    ))}
                </ol>
            </div>
        </div>
    );
}
