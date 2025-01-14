import Image from "next/image";
import Link from "next/link";

export default function Diagramm() {


    return (<>
        <div className="Diagramm">
            <h1>Linkify Infrastruktur</h1>

            <Image width={1000} height={1000} src="/img/linkify-diagramm.jpg" alt="Linkify-Diagramm" />

            <div className="LinkSame">
                <Link href="https://app.linkify.cloud">Get Started</Link>
            </div>
            </div>
    </>)
}