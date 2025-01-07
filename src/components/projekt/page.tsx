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
                <h2 className="project-title">{Item.Titel}</h2>
                <div className="projekt-text">{Item.Text}</div>

                <div className="project-item-list">
                    <ol>
                        {Item.Liste?.map((Element, index) => {
                            return <li key={index}>{Element}</li>;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
