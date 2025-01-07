import React from "react"

type ProjektItemProps = {
    Item: {
        Titel: string;
        Text?: string;
        Liste?: Array<string>;
    };
};

export default function ProjektItem({ Item }: ProjektItemProps) {
    return (
        <>
            <div className="project-item">
                <div className="project-item-list">

                    <h2 className="project-title">{Item.Titel}</h2>
                    <div className="projekt-text">{Item.Text}</div>

                    <ol>
                        {Item.Liste?.map((Element, index) => (
                            <React.Fragment key={index}>
                                <li>{Element}</li>
                                <br />
                            </React.Fragment>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
