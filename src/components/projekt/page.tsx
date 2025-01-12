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
            <div className="leftitem">
                {Item.Image && (
                    <Image
                        width={1000}
                        height={100}
                        alt={Item.alt}
                        src={Item.Image}
                    />
                )}
            </div>
            <div className="rightitem">
                <h2 className="project-title">{Item.Titel}</h2>
                <div className="projekt-text">{Item.Text}</div>
                <ol className="projectunsortedlist">
                    {Item.Liste?.map((Element, index) => (
                        <React.Fragment key={index}>
                            <li className="projectlist">{Element}</li>
                        </React.Fragment>
                    ))}
                </ol>
            </div>
        </div>
    );
}
