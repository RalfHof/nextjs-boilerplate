import Image from "next/image";
import Link from "next/link";

export default function QrLinkify() {
    return (
        <>
            <Link href="/info#Team">
                <Image
                    src={"/img/QR-LinkifyTeam.png"}
                    width={300}
                    height={300}
                    alt="QR-Linkify"
                    style={{ cursor: "pointer" }}
                />
            </Link>
        </>
    );
}
