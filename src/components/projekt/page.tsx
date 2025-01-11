import React from "react"

type ProjektItemProps = {
    Item: {
        Titel: string;
        Text?: string;
        Liste?: Array<string>;

    };
};

export default function ProjektItem({ Item, }: ProjektItemProps) {
    return (
        <>
            <div className="project-item">
                <div className="project-item-list">

                    <h2 className="project-title">{Item.Titel}</h2>
                    <div className="projekt-text">{Item.Text}</div>
                    <ol className="projectunsortedlist">
                        {Item.Liste?.map((Element, index) => (
                            <React.Fragment key={index}>
                                <li className="projectlist" >{Element}</li>
                                <br />
                            </React.Fragment>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}
